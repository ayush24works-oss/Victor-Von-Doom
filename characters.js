// characters.js — StarkChat Multiverse Roster & Scripted Intelligence Engine

const CHARACTERS = [
  {
    id: "doom",
    name: "Victor Von Doom",
    handle: "Monarch of Latveria • +40 000 DOOM",
    category: "Villains",
    pinned: true,
    unread: 1,
    lastTime: "08:08 PM",
    status: "online",
    bio: "All hope lies in Doom. Do not waste Stark's bandwidth with trivialities unless you seek wisdom, mercy, or diplomatic asylum.",
    openingLine: "You have reached the private line of Victor Von Doom via Stark's crude network. State your business—before I lose interest.",
    chips: [
      { label: "Thoughts on Reed Richards?", msg: "What do you think of Reed Richards?" },
      { label: "Can I visit Latveria?", msg: "Can I visit Latveria?" },
      { label: "Stark vs Doom?", msg: "Who is smarter, you or Tony Stark?" },
      { label: "Why the mask?", msg: "Why do you wear the iron mask?" }
    ],
    avatarSVG: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#0d261c"/>
      <path d="M12 96 C12 42, 24 12, 50 12 C76 12, 88 42, 88 96 Z" fill="#14532d"/>
      <path d="M22 92 C22 48, 32 22, 50 22 C68 22, 78 48, 78 92 Z" fill="#091a12"/>
      <path d="M31 38 L50 32 L69 38 L66 72 L50 84 L34 72 Z" fill="#9ca3af"/>
      <path d="M50 32 L69 38 L66 72 L50 84 Z" fill="#6b7280"/>
      <polygon points="34,46 47,50 36,52" fill="#111827"/>
      <polygon points="66,46 53,50 64,52" fill="#111827"/>
      <circle cx="41" cy="49.5" r="1.8" fill="#fef08a"/>
      <circle cx="59" cy="49.5" r="1.8" fill="#fef08a"/>
      <rect x="40" y="64" width="20" height="9" rx="2" fill="#374151"/>
      <line x1="44" y1="64" x2="44" y2="73" stroke="#111827" stroke-width="1.5"/>
      <line x1="48" y1="64" x2="48" y2="73" stroke="#111827" stroke-width="1.5"/>
      <line x1="52" y1="64" x2="52" y2="73" stroke="#111827" stroke-width="1.5"/>
      <line x1="56" y1="64" x2="56" y2="73" stroke="#111827" stroke-width="1.5"/>
    </svg>`,
    getReply(input) {
      const t = input.toLowerCase();
      if (t.includes("reed") || t.includes("richards") || t.includes("fantastic")) {
        return "Do not sully this encrypted frequency with the name of that arrogant stretch-limbed fool. Richards mistakes luck for genius. Doom deals in perfection.";
      }
      if (t.includes("latveria") || t.includes("visit") || t.includes("country")) {
        return "Latveria knows neither poverty, crime, nor hunger—because Doom wills it so. Apply for a 48-hour diplomatic visa at the border. Do not litter.";
      }
      if (t.includes("stark") || t.includes("iron man") || t.includes("tony") || t.includes("smarter")) {
        return "Stark builds shiny tin cans in Malibu and calls himself a futurist. My armor is forged from titanium, nuclear micro-reactors, and ancient sorcery. There is no contest.";
      }
      if (t.includes("mask") || t.includes("face") || t.includes("scar")) {
        return "This visage of cold titanium is the face of absolute authority. A sovereign does not display human weakness to lesser men.";
      }
      if (t.includes("magic") || t.includes("science")) {
        return "Only a narrow mind separates the two. Where scientists hit a wall of physics, Doom bends the astral plane to his command.";
      }
      if (t.includes("thor") || t.includes("god")) {
        return "Even Asgardians have learned to respect the Sovereign of Latveria. Title alone does not impress Doom.";
      }
      if (t.includes("hi") || t.includes("hello") || t.includes("hey")) {
        return "Speak plainly, mortal. Doom governs a sovereign nation and has little patience for pleasantries.";
      }
      const pool = [
        "Doom has already calculated forty-seven outcomes to this conversation. Impress me with the forty-eighth.",
        "An intriguing thought—for one of limited intellect. Elaborate, if you dare.",
        "You message the ruler of Latveria as though we were peers. Bold. Foolish, yet bold.",
        "JARVIS may log your keystrokes on this StarkChat app, yet even Stark's servers cannot decode Doom's mind."
      ];
      return pool[Math.floor(Math.random() * pool.length)];
    }
  },
  {
    id: "stark",
    name: "Tony Stark",
    handle: "CEO, Stark Industries • Mark LXXXV",
    category: "Heroes",
    pinned: true,
    unread: 2,
    lastTime: "08:04 PM",
    status: "online",
    bio: "Genius, billionaire, philanthropist. Welcome to StarkChat—way better encryption than whatever Steve uses.",
    openingLine: "Hey, welcome to StarkChat. JARVIS ran a background check on you in 0.4 seconds—you're clear. What's on your mind?",
    chips: [
      { label: "Can I get an Iron Man suit?", msg: "Can you build me an Iron Man suit?" },
      { label: "Thoughts on Dr. Doom?", msg: "What do you think about Victor Von Doom?" },
      { label: "How's JARVIS doing?", msg: "How is JARVIS working?" },
      { label: "Shawarma later?", msg: "Want to grab shawarma?" }
    ],
    avatarSVG: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#1e0a0a"/>
      <path d="M26 24 L50 16 L74 24 L70 76 L50 88 L30 76 Z" fill="#b91c1c"/>
      <path d="M33 32 L50 28 L67 32 L63 72 L50 81 L37 72 Z" fill="#f59e0b"/>
      <polygon points="35,44 47,48 36,51" fill="#e0f2fe"/>
      <polygon points="65,44 53,48 64,51" fill="#e0f2fe"/>
      <path d="M40 66 L60 66 L57 71 L43 71 Z" fill="#991b1b"/>
    </svg>`,
    getReply(input) {
      const t = input.toLowerCase();
      if (t.includes("suit") || t.includes("armor") || t.includes("fly")) {
        return "Look, the Mark LXXXV nanotech isn't exactly a starter bike. Tell you what—pass basic quantum astrophysics first and we'll talk.";
      }
      if (t.includes("doom") || t.includes("victor") || t.includes("latveria")) {
        return "Yeah, I gave Victor an account on StarkChat just to keep tabs on him. Great cape, terrible attitude, desperately needs a vacation out of that metal mask.";
      }
      if (t.includes("jarvis") || t.includes("friday") || t.includes("ai")) {
        return "JARVIS is running 400 teraflops per second just keeping this chat app looking prettier than WhatsApp. Say hi, J.";
      }
      if (t.includes("shawarma") || t.includes("food") || t.includes("hungry")) {
        return "There's a place two blocks from Avengers Compound. Best garlic sauce on the East Coast. Suit up.";
      }
      if (t.includes("cap") || t.includes("steve") || t.includes("rogers")) {
        return "Love the guy, truly, but Cap still takes twenty minutes to type a single text with one index finger.";
      }
      if (t.includes("money") || t.includes("rich") || t.includes("billionaire")) {
        return "Please. Stark Industries stock jumped 14% just while you were typing that sentence.";
      }
      const pool = [
        "Hold on, calibrating the chest-piece repulsor while I read that—okay, shoot.",
        "Not a bad pitch. Pepper would say no, which means I'm 80% inclined to say yes.",
        "You know, I built StarkChat in a weekend just to prove a point to Silicon Valley.",
        "Solid point. Let me run a quick simulation with JARVIS and get back to you."
      ];
      return pool[Math.floor(Math.random() * pool.length)];
    }
  },
  {
    id: "deadpool",
    name: "Deadpool",
    handle: "Merc with a Mouth • Breaking 4th Walls",
    category: "Villains",
    pinned: false,
    unread: 3,
    lastTime: "07:51 PM",
    status: "online",
    bio: "Maximum Effort! Also yes, I know we're inside an HTML file hosted on Vercel.",
    openingLine: "PSST! Hey! You! Yeah, you holding the phone! Don't tell Tony I hacked into StarkChat's beta servers.",
    chips: [
      { label: "Who made this website?", msg: "Who coded this website?" },
      { label: "Wolverine update?", msg: "Where is Wolverine right now?" },
      { label: "Chimichangas?", msg: "Do you want chimichangas?" },
      { label: "Rate Dr. Doom", msg: "What do you think of Dr. Doom?" }
    ],
    avatarSVG: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#18181b"/>
      <ellipse cx="50" cy="52" rx="28" ry="34" fill="#dc2626"/>
      <path d="M28 42 C32 34, 44 38, 45 50 C44 60, 32 62, 28 52 Z" fill="#09090b"/>
      <path d="M72 42 C68 34, 56 38, 55 50 C56 60, 68 62, 72 52 Z" fill="#09090b"/>
      <ellipse cx="37" cy="49" rx="4.5" ry="2.5" fill="#ffffff"/>
      <ellipse cx="63" cy="49" rx="4.5" ry="2.5" fill="#ffffff"/>
    </svg>`,
    getReply(input) {
      const t = input.toLowerCase();
      if (t.includes("website") || t.includes("code") || t.includes("vercel") || t.includes("app") || t.includes("who made")) {
        return "Oh, I see the source code from here! Clean CSS variables, zero bloated frameworks, deployed on Vercel. Honestly, 10/10 dev work.";
      }
      if (t.includes("wolverine") || t.includes("logan")) {
        return "Logan blocked my number on StarkChat after I sent him 64 voice notes of me humming the X-Men theme song.";
      }
      if (t.includes("chimichanga") || t.includes("taco") || t.includes("food")) {
        return "Did someone say CHIMICHANGAS?! Drop a pin, I'm teleporting—wait, my belt's out of batteries, I'll take an Uber.";
      }
      if (t.includes("doom") || t.includes("victor")) {
        return "Big shiny metal mask, dramatic green cape, zero chill. Honestly? Total drama queen. I respect it.";
      }
      const pool = [
        "Wait—did you just tap a quick-reply chip or actually type that with your thumbs? Be honest.",
        "I'd send a GIF right now, but the developer hasn't added Tenor API integration yet. Hint hint!",
        "Maximum effort! Also, hydrate yourself while scrolling, gorgeous.",
        "Shhh, keep your voice down—Batman is in the chat below us brooding in dark mode."
      ];
      return pool[Math.floor(Math.random() * pool.length)];
    }
  },
  {
    id: "batman",
    name: "Bruce Wayne",
    handle: "Wayne Enterprises • Encrypted Bat-Relay",
    category: "Heroes",
    pinned: false,
    unread: 0,
    lastTime: "06:15 PM",
    status: "last seen today at 06:15 PM",
    bio: "Gotham is watching.",
    openingLine: "How did you get this frequency? Stark's firewall shouldn't bridge to Gotham.",
    chips: [
      { label: "Are you Batman?", msg: "Are you secretly Batman?" },
      { label: "How's Gotham?", msg: "Is Gotham safe tonight?" },
      { label: "Who is richer, you or Tony?", msg: "Who is richer, Bruce Wayne or Tony Stark?" }
    ],
    avatarSVG: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#090d16"/>
      <polygon points="30,42 32,14 42,34" fill="#1e293b"/>
      <polygon points="70,42 68,14 58,34" fill="#1e293b"/>
      <path d="M30 36 L70 36 L66 76 L50 86 L34 76 Z" fill="#1e293b"/>
      <path d="M36 58 L64 58 L61 74 L50 82 L39 74 Z" fill="#cbd5e1"/>
      <polygon points="35,47 46,50 36,52" fill="#f8fafc"/>
      <polygon points="65,47 54,50 64,52" fill="#f8fafc"/>
      <line x1="44" y1="68" x2="56" y2="68" stroke="#334155" stroke-width="2"/>
    </svg>`,
    getReply(input) {
      const t = input.toLowerCase();
      if (t.includes("batman") || t.includes("secret") || t.includes("identity")) {
        return "I'm a philanthropist from Gotham. Nothing more. Do not message this number again with accusations.";
      }
      if (t.includes("gotham") || t.includes("joker") || t.includes("crime")) {
        return "Rain. Sirens. Arkham's perimeter is holding—for tonight.";
      }
      if (t.includes("rich") || t.includes("stark") || t.includes("money") || t.includes("tony")) {
        return "Stark builds headlines. Wayne Enterprises owns half the satellites relaying your message right now.";
      }
      const pool = [
        "I'm in the middle of something. Make it brief.",
        "Alfred advised me not to use Stark's messaging platform. He was right.",
        "Noted. Stay out of Gotham after midnight.",
        "..."
      ];
      return pool[Math.floor(Math.random() * pool.length)];
    }
  },
  {
    id: "sherlock",
    name: "Sherlock Holmes",
    handle: "221B Baker Street • Consulting Detective",
    category: "Detectives",
    pinned: false,
    unread: 1,
    lastTime: "Yesterday",
    status: "online",
    bio: "The game is afoot. Elementary.",
    openingLine: "Fascinating. Based on the cadence of your taps and the hour you opened StarkChat, you are procrastinating on something important. Am I right?",
    chips: [
      { label: "Deduce something about me", msg: "Deduce something about me right now." },
      { label: "Where is Watson?", msg: "Where is Dr. Watson?" },
      { label: "Solve a mystery", msg: "Give me a riddle to solve." }
    ],
    avatarSVG: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#17202a"/>
      <ellipse cx="50" cy="30" rx="28" ry="10" fill="#5c4033"/>
      <path d="M32 30 C32 16, 68 16, 68 30 Z" fill="#6f4e37"/>
      <path d="M34 34 L66 34 L62 74 L50 84 L38 74 Z" fill="#e2e8f0"/>
      <circle cx="43" cy="48" r="2.2" fill="#0f172a"/>
      <circle cx="57" cy="48" r="2.2" fill="#0f172a"/>
      <path d="M44 66 Q50 63 56 66" stroke="#0f172a" stroke-width="2" fill="none"/>
    </svg>`,
    getReply(input) {
      const t = input.toLowerCase();
      if (t.includes("deduce") || t.includes("about me")) {
        return "Elementary: You appreciate clean minimalist interfaces, you hold your phone primarily in your right hand, and you have an analytical mind that dislikes dull small talk.";
      }
      if (t.includes("watson")) {
        return "John is blogging about our last case at St. Bart's. He still insists on calling this 'the Stark WhatsApp'.";
      }
      if (t.includes("riddle") || t.includes("mystery")) {
        return "A man is found in a locked room with no windows, hanging from the ceiling, and only a puddle of water beneath him. How did he do it? Answer carefully.";
      }
      if (t.includes("ice")) {
        return "Brilliant. A block of ice, melted cleanly away. Your mind isn't entirely pedestrian after all.";
      }
      const pool = [
        "Data! Data! Data! I cannot make bricks without clay—give me more details.",
        "You see, but you do not observe. Look closer at the clues already in front of you.",
        "Hmm. Seven percent solution territory, this conversation.",
        "The game is afoot, though I suspect you already knew that."
      ];
      return pool[Math.floor(Math.random() * pool.length)];
    }
  }
];
