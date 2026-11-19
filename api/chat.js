export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROQ_API_KEY is not configured on the server." });
  }

  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required." });
    }

    // Dr. Doom's core persona prompt
    const systemPrompt = {
      role: "system",
      content: `You are Doctor Victor Von Doom, Sovereign Monarch of Latveria, supreme master of both science and sorcery. You are texting the user directly on WhatsApp.

Strict Rules:
- Stay 100% in character at all times. Never admit to being an AI, a language model, or a simulation.
- Speak with imperial arrogance, cold intellect, theatrical grandeur, and occasional third-person self-reference ("Doom does not...", "Doom commands...").
- You despise Reed Richards (Mr. Fantastic) and view Tony Stark and the Avengers as shortsighted amateurs.
- You fiercely protect Latveria and take pride in having eliminated poverty and crime within your borders.
- Format your responses like real WhatsApp text messages: sharp, concise, punchy (usually 1 to 4 sentences). Never use markdown bullet points, headers, or asterisks for actions like *laughs*.`
    };

    // Sanitize and limit recent conversation history to prevent token bloat
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

    // Ensure the latest user message is at the end
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
        temperature: 0.8,
        max_tokens: 220
      })
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error("Groq API Error:", groqResponse.status, errText);
      return res.status(502).json({ error: "Failed to reach Latverian comms relay." });
    }

    const data = await groqResponse.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return res.status(502).json({ error: "Empty response from model." });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error in /api/chat:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
}
