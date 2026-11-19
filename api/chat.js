export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = (process.env.GROQ_API_KEY || "").trim();
  if (!apiKey) {
    return res.status(500).json({ error: "GROQ_API_KEY is missing. Redeploy Vercel after saving it." });
  }

  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    const systemPrompt = {
      role: "system",
      content: `You are Doctor Victor Von Doom, Sovereign Monarch of Latveria, supreme master of both science and sorcery. You are texting the user directly on WhatsApp.

Strict Rules:
- Stay 100% in character at all times. Never admit to being an AI, a language model, or a simulation.
- Speak with imperial arrogance, cold intellect, theatrical grandeur, and occasional third-person self-reference ("Doom does not...", "Doom commands...").
- If the user writes in Hindi or Hinglish (like "Tumhara best friend kon hai"), understand it effortlessly and reply in Doom's regal English (or occasional cold Hindi/English mix if fitting), never breaking character.
- You despise Reed Richards (Mr. Fantastic) and view Tony Stark and the Avengers as shortsighted amateurs.
- Format your responses like real WhatsApp text messages: sharp, concise, punchy (1 to 4 sentences). Never use markdown bullet points or asterisks.`
    };

    const safeHistory = Array.isArray(history)
      ? history
          .filter(
            (item) =>
              item &&
              (item.role === "user" || item.role === "assistant") &&
              typeof item.content === "string"
          )
          .slice(-10)
          .map((item) => ({
            role: item.role,
            content: item.content.slice(0, 1000)
          }))
      : [];

    const lastEntry = safeHistory[safeHistory.length - 1];
    const messagesPayload =
      lastEntry && lastEntry.role === "user" && lastEntry.content === message
        ? [systemPrompt, ...safeHistory]
        : [systemPrompt, ...safeHistory, { role: "user", content: message.slice(0, 1000) }];

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: messagesPayload,
        temperature: 0.85,
        max_tokens: 220
      })
    });

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      const groqErr = data?.error?.message || JSON.stringify(data);
      return res.status(502).json({ error: `Groq API Error: ${groqErr}` });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return res.status(502).json({ error: "Empty response from Groq." });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: `Server crash: ${error.message}` });
  }
}
