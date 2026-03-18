import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, MessageSquare, Bot, BarChart3 } from "lucide-react";

/* ─── Brand tokens ─────────────────────────────── */
const C = {
  dark: "#201a1a",
  card: "#2a2222",
  cardHover: "#332a2a",
  taupe: "#a79c8e",
  linen: "#d2c6b6",
  white: "#ffffff",
  border: "rgba(167,156,142,0.15)",
};

const grotesk  = { fontFamily: "'Inter', sans-serif" };
const inter    = { fontFamily: "'Inter', sans-serif" };

/* ─── Helpers ───────────────────────────────────── */
function GradientText({ children, className = "" }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(135deg,#d2c6b6 0%,#a79c8e 50%,#fff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function SunLogo({ size = 28, color = "#fff", opacity = 0.85 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {Array.from({ length: 24 }).map((_, i) => {
        const rad = ((i * 360) / 24) * (Math.PI / 180);
        return (
          <line
            key={i}
            x1={14 + 6 * Math.cos(rad)}
            y1={14 + 6 * Math.sin(rad)}
            x2={14 + 12 * Math.cos(rad)}
            y2={14 + 12 * Math.sin(rad)}
            stroke={color}
            strokeWidth="0.9"
            opacity={opacity}
          />
        );
      })}
    </svg>
  );
}

/* ─── NAVBAR ────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Frameworks", "Process", "Results", "Contact"];

  return (
    <nav
      style={{ background: "rgba(32,26,26,0.92)", backdropFilter: "blur(16px)" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SunLogo size={26} />
          <span style={{ ...inter, color: C.white, letterSpacing: "0.2em", fontSize: 15, fontWeight: 700 }}>
            AUMANA
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={l === "Process" ? "#aumana-how" : `#aumana-${l.toLowerCase()}`}
                style={{ ...inter, color: C.taupe, fontSize: 13, textDecoration: "none" }}
                className="hover:text-white transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#aumana-contact"
          className="hidden md:inline-flex items-center gap-2 transition-all"
          style={{
            ...inter, fontSize: 13, color: C.white,
            padding: "11px 24px", borderRadius: 99,
            border: `1px solid rgba(167,156,142,0.3)`,
            textDecoration: "none",
          }}
        >
          Book a Consultation
        </a>

        <button
          className="md:hidden"
          style={{ color: C.taupe, background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          style={{ background: C.dark }}
          className="md:hidden px-6 py-4 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l}
              href={l === "Process" ? "#aumana-how" : `#aumana-${l.toLowerCase()}`}
              style={{ ...inter, color: C.taupe, fontSize: 13, textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#aumana-contact"
            style={{
              ...inter, fontSize: 13, color: C.white, textAlign: "center",
              padding: "11px 24px", borderRadius: 99,
              border: `1px solid rgba(167,156,142,0.3)`,
              textDecoration: "none",
            }}
            onClick={() => setOpen(false)}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ──────────────────────────────────────── */
function Hero() {
  /* stable dot positions (deterministic) */
  const dots = Array.from({ length: 180 }, (_, i) => {
    const angle = (i * 137.508) * (Math.PI / 180);
    const r = 40 + (i % 60) * 2;
    return {
      cx: 160 + r * Math.cos(angle),
      cy: 160 + r * Math.sin(angle),
      r: 0.6 + (i % 3) * 0.5,
      op: Math.max(0, 0.9 - Math.sqrt(((160 + r * Math.cos(angle)) - 160) ** 2 + ((160 + r * Math.sin(angle)) - 160) ** 2) / 145),
    };
  });

  return (
    <section
      style={{ background: C.dark, minHeight: "100vh", position: "relative", overflow: "hidden" }}
      className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-16"
    >
      {/* ambient */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 45%, rgba(167,156,142,0.1) 0%, transparent 65%)",
      }} />

      {/* badge */}
      <div style={{
        ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em",
        textTransform: "uppercase", marginBottom: 28,
        padding: "6px 16px", borderRadius: 99,
        border: `1px solid rgba(167,156,142,0.2)`,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.taupe, display: "inline-block" }} />
        Intelligent Agents · Dashboard
      </div>

      {/* headline */}
      <h1 style={{ ...grotesk, fontSize: "clamp(2.4rem,6vw,4.5rem)", color: C.white, fontWeight: 700, lineHeight: 1.15, maxWidth: 820, margin: "0 0 20px" }}>
        AI Consulting <GradientText>Designed</GradientText>
        <br />for Performance <GradientText>and Profit</GradientText>
      </h1>

      <p style={{ ...inter, fontSize: 16, color: C.taupe, fontWeight: 300, maxWidth: 480, lineHeight: 1.7, margin: "0 0 36px" }}>
        We build and deploy custom AI agents that automate calls, messages, and workflows
        — powered by your own dashboard for full visibility and control.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#aumana-contact"
          style={{
            ...inter, fontSize: 15, fontWeight: 700,
            background: C.linen, color: C.dark, textDecoration: "none",
            padding: "15px 36px", borderRadius: 99,
          }}
        >
          Book a Consultation
        </a>
        <a
          href="#aumana-results"
          style={{
            ...inter, fontSize: 13, color: C.white, textDecoration: "none",
            padding: "15px 36px", borderRadius: 99,
            border: `1px solid rgba(167,156,142,0.3)`,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
        >
          See Our Results <span style={{ color: C.taupe }}>›</span>
        </a>
      </div>

      {/* orb */}
      <div style={{ marginTop: 64, width: 280, height: 280, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,156,142,0.22) 0%, rgba(167,156,142,0.06) 55%, transparent 75%)",
        }} />
        <svg viewBox="0 0 320 320" style={{ width: "100%", height: "100%" }}>
          {dots.map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={C.taupe} opacity={d.op} />
          ))}
        </svg>
      </div>
    </section>
  );
}

/* ─── LOGO BAR ──────────────────────────────────── */
const logoItems = [
  { src: "/aumanaai/assets/0ca6d656_0gWvNBC942Bz1L9jtjcti8P2dc.png", alt: "Zapier",      h: 22 },
  { src: "/aumanaai/assets/0ae003f5_MpPV0hHrnQpooUfNtAQQrX4TaM.png", alt: "VAPI",       h: 22 },
  { src: "/aumanaai/assets/15d66a5d_J7r2wMLMyNR5qwbjHtz25FNb2Dc.png", alt: "Airtable",  h: 24 },
  { src: "/aumanaai/assets/50160c3c_AOY50cCj1eZYjnU4hr3Q32Pwv5g.png", alt: "HubSpot",   h: 22 },
  { src: "/claude-code.png",                                           alt: "Claude Code", h: 28 },
];

function LogoBar() {
  return (
    <section style={{ padding: "40px 24px", background: C.dark }}>
      <p style={{ ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", marginBottom: 28 }}>
        Trusted by leading service brands, startups, and automation-driven companies
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {logoItems.map((l, i) =>
          l.src ? (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              style={{ height: l.h, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.55 }}
            />
          ) : (
            <span key={i} style={{ ...inter, fontSize: 13, fontWeight: 600, color: C.taupe, opacity: 0.55, letterSpacing: "0.04em" }}>
              {l.txt}
            </span>
          )
        )}
      </div>
    </section>
  );
}

/* ─── ANIMATION KEYFRAMES (injected once) ───────── */
if (typeof document !== "undefined" && !document.getElementById("chat-anim-style")) {
  const s = document.createElement("style");
  s.id = "chat-anim-style";
  s.textContent = `
    @keyframes typingDot{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-4px);opacity:1}}
    @keyframes voiceBar{0%,100%{height:4px}50%{height:var(--peak)}}
    @keyframes fadeScaleIn{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}
  `;
  document.head.appendChild(s);
}

/* ─── SHARED HOOK ────────────────────────────────── */
function useLiveChat(msgs, loopDelay = 2800) {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);
  const tRef = useRef(null);

  useEffect(() => {
    function next(idx) {
      if (idx >= msgs.length) {
        setDone(true);
        tRef.current = setTimeout(() => {
          setDone(false);
          setShown(0);
          setTyping(false);
          tRef.current = setTimeout(() => next(0), 400);
        }, loopDelay);
        return;
      }
      const isAI = msgs[idx].from === "a";
      if (isAI) {
        setTyping(true);
        tRef.current = setTimeout(() => {
          setTyping(false);
          setShown(idx + 1);
          tRef.current = setTimeout(() => next(idx + 1), 950);
        }, 1200);
      } else {
        tRef.current = setTimeout(() => {
          setShown(idx + 1);
          tRef.current = setTimeout(() => next(idx + 1), 750);
        }, 550);
      }
    }
    tRef.current = setTimeout(() => next(0), 500);
    return () => clearTimeout(tRef.current);
  }, []);

  return { shown, typing, done };
}

/* ─── SHARED BUBBLE ──────────────────────────────── */
function Bubble({ from, text, visible }) {
  return (
    <div style={{
      display: "flex", justifyContent: from === "u" ? "flex-end" : "flex-start",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(5px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    }}>
      <div style={{
        fontFamily: "Inter, sans-serif", fontSize: 11, lineHeight: 1.6,
        maxWidth: "78%", padding: "8px 12px",
        borderRadius: from === "u" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
        background: from === "u" ? "#2563eb" : "#2d2d31",
        color: from === "u" ? "#fff" : "#d4d4d8",
      }}>{text}</div>
    </div>
  );
}

function TypingDots({ visible }) {
  return (
    <div style={{
      display: "flex", justifyContent: "flex-start",
      opacity: visible ? 1 : 0, transition: "opacity 0.2s ease",
      minHeight: 34,
    }}>
      <div style={{ padding: "9px 13px", borderRadius: "14px 14px 14px 4px", background: "#2d2d31", display: "flex", gap: 4, alignItems: "center" }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{
            width: 5, height: 5, borderRadius: "50%", background: "#71717a", display: "inline-block",
            animation: visible ? `typingDot 1.2s ease-in-out ${i * 0.2}s infinite` : "none",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ─── VOICE WAVEFORM ─────────────────────────────── */
const BAR_PEAKS = [10, 18, 26, 34, 28, 22, 30, 18, 12, 24, 32, 20, 14, 28, 36, 20, 12, 26, 18, 30];
function VoiceWave({ active }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, height: 40 }}>
      {BAR_PEAKS.map((peak, i) => (
        <span key={i} style={{
          display: "inline-block", width: 3, borderRadius: 99,
          background: active ? "#a79c8e" : "#3a3a3e",
          height: active ? undefined : 4,
          "--peak": `${peak}px`,
          animation: active ? `voiceBar ${0.6 + (i % 4) * 0.15}s ease-in-out ${i * 0.05}s infinite alternate` : "none",
          transition: "background 0.4s",
        }} />
      ))}
    </div>
  );
}

/* ─── FRAMEWORKS ────────────────────────────────── */
function PhoneMock() {
  const voiceMsgs = [
    { from: "a", text: "Hi, this is Aria. How can I help you today?" },
    { from: "u", text: "I need to book an appointment." },
    { from: "a", text: "Sure! I have Friday at 10 AM or Monday at 2 PM." },
    { from: "u", text: "Friday at 10 works great." },
    { from: "a", text: "Perfect — you're all set for Friday at 10 AM." },
  ];
  const { shown, typing, done } = useLiveChat(voiceMsgs, 2800);
  const activeSpeaker = shown > 0 && !done ? (shown <= voiceMsgs.length && voiceMsgs[shown - 1]?.from) : null;

  return (
    <div style={{
      width: 260, margin: "0 auto", borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "#18181b", overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
    }}>
      {/* Call screen */}
      <div style={{ padding: "20px 16px 16px", display: "flex", flexDirection: "column", gap: 6, minHeight: 260, position: "relative" }}>

        {/* Done screen */}
        {done && (
          <div style={{
            position: "absolute", inset: 0, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 12,
            background: "#18181b", animation: "fadeScaleIn 0.4s ease",
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "rgba(74,222,128,0.15)", border: "1.5px solid rgba(74,222,128,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 22 }}>✓</span>
            </div>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 600, color: "#4ade80", margin: 0 }}>Appointment Booked</p>
            <p style={{ fontFamily: "Inter,sans-serif", fontSize: 10, color: "#71717a", margin: 0 }}>Friday · 10:00 AM</p>
          </div>
        )}

        {/* Transcript lines — centered */}
        {!done && voiceMsgs.map((m, i) => (
          <div key={i} style={{
            textAlign: "center",
            opacity: shown > i ? 1 : 0,
            transform: shown > i ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}>
            <span style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11, lineHeight: 1.55,
              color: m.from === "a" ? "#d4d4d8" : "#a0a0a8",
              fontStyle: m.from === "u" ? "italic" : "normal",
            }}>{m.text}</span>
          </div>
        ))}

        {/* Typing placeholder */}
        {!done && typing && (
          <div style={{ textAlign: "center" }}>
            <span style={{ fontFamily: "Inter,sans-serif", fontSize: 11, color: "#52525b" }}>…</span>
          </div>
        )}
      </div>

      {/* Voice wave + call bar */}
      <div style={{
        padding: "12px 16px 14px", background: "#111113",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
      }}>
        <VoiceWave active={!done && shown > 0} />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Phone size={13} color="#f87171" />
          </div>
          <p style={{ fontFamily: "Inter,sans-serif", fontSize: 10, color: "#52525b", margin: 0 }}>
            {done ? "Call ended" : shown === 0 ? "Connecting…" : "Live call"}
          </p>
        </div>
      </div>
    </div>
  );
}

function ChatMock() {
  const msgs = [
    { from: "a", text: "Hey! How can I help you today?" },
    { from: "u", text: "Can you book me a consultation?" },
    { from: "a", text: "Of course! Tomorrow at 12 PM or Wednesday at 3 PM?" },
    { from: "u", text: "Tomorrow at noon works." },
    { from: "a", text: "Booked! Confirmation sent. See you then 🙌" },
  ];
  const { shown, typing } = useLiveChat(msgs, 2800);

  return (
    <div style={{
      width: 260, margin: "0 auto", borderRadius: 22,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "#18181b", overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
    }}>
      {/* Messages */}
      <div style={{ padding: "14px 10px 10px", display: "flex", flexDirection: "column", gap: 8, minHeight: 220 }}>
        {msgs.map((m, i) => (
          <Bubble key={i} from={m.from} text={m.text} visible={shown > i} />
        ))}
        <TypingDots visible={typing} />
      </div>

      {/* Input */}
      <div style={{
        padding: "8px 10px 10px", background: "#18181b",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <div style={{ flex: 1, height: 30, background: "#2d2d31", borderRadius: 99, padding: "0 10px", display: "flex", alignItems: "center" }}>
          <span style={{ fontFamily: "Inter,sans-serif", fontSize: 10, color: "#52525b" }}>Type a message…</span>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#fff", fontSize: 11, lineHeight: 1 }}>↑</span>
        </div>
      </div>
    </div>
  );
}

const frameworks = [
  {
    badge: "AI Receptionist",
    title: "Intelligent voice agents that engage, qualify, and convert in real time.",
    visual: "phone",
    features: [
      { icon: <MessageSquare size={13} />, name: "Natural Conversations", desc: "Understands context and tone, providing human-like experiences instantly." },
      { icon: <Bot size={13} />, name: "Smart Lead Routing", desc: "Identifies caller needs and directs them to the right team automatically." },
      { icon: <BarChart3 size={13} />, name: "Real-Time Insights", desc: "Logs every call, sentiment, and action into your dashboard for review." },
      { icon: <Phone size={13} />, name: "Always Available", desc: "Handles inbound inquiries 24/7 with consistent quality and zero downtime." },
    ],
  },
  {
    badge: "AI Chat Assistant",
    title: "Conversational AI built to automate support and boost conversions.",
    visual: "chat",
    features: [
      { icon: <MessageSquare size={13} />, name: "Human-Like Replies", desc: "Responds naturally across channels while maintaining your brand's tone." },
      { icon: <Bot size={13} />, name: "Smart Knowledge Base", desc: "Uses trained data to answer questions and reduce support workload." },
      { icon: <MessageSquare size={13} />, name: "Context Retention", desc: "Remembers interactions to create smooth, continuous experiences." },
      { icon: <BarChart3 size={13} />, name: "Performance Tracking", desc: "Measures chat volume, response rate, and satisfaction via unified dashboard." },
    ],
  },
];

function Frameworks() {
  return (
    <section id="aumana-frameworks" style={{ padding: "96px 24px", background: C.dark }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Frameworks</p>
          <h2 style={{ ...grotesk, fontSize: "clamp(2rem,4.5vw,3.5rem)", color: C.white, fontWeight: 700, margin: "0 0 12px" }}>
            Built to automate.<br /><GradientText>Designed to perform.</GradientText>
          </h2>
          <p style={{ ...inter, fontSize: 15, color: C.taupe, fontWeight: 300, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Each framework is a building block of your AI infrastructure, designed to automate, connect, and scale your operations with precision.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {frameworks.map((fw, idx) => (
            <div
              key={idx}
              style={{ borderRadius: 24, background: C.card, padding: "40px 48px" }}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`}
            >
              <div className="w-full md:w-2/5 flex justify-center">
                {fw.visual === "phone" ? <PhoneMock /> : <ChatMock />}
              </div>
              <div className="w-full md:w-3/5">
                <span style={{
                  ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em", textTransform: "uppercase",
                  padding: "5px 12px", borderRadius: 99, border: `1px solid rgba(167,156,142,0.2)`,
                  display: "inline-block", marginBottom: 16,
                }}>{fw.badge}</span>
                <h3 style={{ ...grotesk, fontSize: "clamp(1.3rem,2.5vw,1.9rem)", color: C.white, fontWeight: 700, marginBottom: 28, lineHeight: 1.3 }}>
                  {fw.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {fw.features.map((f, fi) => (
                    <div key={fi}>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: C.taupe }}>{f.icon}</span>
                        <span style={{ ...inter, fontSize: 13, fontWeight: 500, color: C.white }}>{f.name}</span>
                      </div>
                      <p style={{ ...inter, fontSize: 12, color: C.taupe, fontWeight: 300, lineHeight: 1.6, paddingLeft: 20, margin: 0 }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── VIDEO BREAK ──────────────────────────────── */
function VideoBreak() {
  return (
    <section style={{ padding: "0 24px 96px", background: C.dark }}>
      {/* outer clamp: never taller than 75vh */}
      <div style={{ maxWidth: 340, width: "80%", margin: "0 auto", maxHeight: "75vh" }}>
        <div
          style={{
            borderRadius: 40,
            overflow: "hidden",
            position: "relative",
            width: "100%",
            /* fill the capped height, let aspect-ratio drive on desktop */
            aspectRatio: "9 / 16",
            maxHeight: "75vh",
          }}
        >
          <video
            src="/vibe-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1.9)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── HOW WE WORK ──────────────────────────────── */
const hwwSteps = [
  {
    num: "Step 1",
    title: "Discovery & Strategy",
    desc: "We deep-dive into your business, competitors, and workflows to identify exactly where AI creates the most leverage.",
    img: "/step-1.png",
  },
  {
    num: "Step 2",
    title: "Build Your AI Stack",
    desc: "We engineer your full AI infrastructure — voice agents, chat assistants, CRM automation, and custom workflows — all connected.",
    img: "/step-2.png",
  },
  {
    num: "Step 3",
    title: "Launch in 72 Hours",
    desc: "We go live fast. Your AI agents start handling calls, messages, and bookings while you watch results flow in real time.",
    img: "/step-3.png",
  },
];

function HowWeWork() {
  return (
    <section
      id="aumana-how"
      style={{
        padding: "0 24px 96px",
        background: C.dark,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <p
          style={{
            ...inter, fontSize: 11, color: C.taupe,
            letterSpacing: "0.15em", textTransform: "uppercase",
            textAlign: "center", marginBottom: 56,
          }}
        >
          How It Works
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {hwwSteps.map((step, i) => (
            <div
              key={i}
              style={{
                borderRadius: 24,
                background: "#181212",
                padding: "36px 36px",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
              className="group flex flex-col justify-start md:justify-end md:[aspect-ratio:1/1] hover:-translate-y-1"
            >
              {/* ambient glow top-right */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 180, height: 180, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(167,156,142,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <span
                style={{
                  ...inter, fontSize: 12, fontWeight: 700,
                  background: "rgba(34,197,94,0.15)",
                  border: "1px solid rgba(34,197,94,0.35)",
                  color: "#4ade80",
                  padding: "5px 14px",
                  borderRadius: 8,
                  display: "inline-block",
                  marginBottom: 24,
                  width: "fit-content",
                }}
              >
                {step.num}
              </span>

              <h3
                style={{
                  ...inter,
                  fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                  fontWeight: 700,
                  color: C.white,
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  ...inter,
                  fontSize: 14,
                  color: "rgba(167,156,142,0.7)",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─── RESULTS ───────────────────────────────────── */
const stats = [
  { v: "3x", l: "Average lead conversion lift within 60 days" },
  { v: "80%", l: "Reduction in manual follow-up time" },
  { v: "24/7", l: "Coverage with zero additional headcount" },
  { v: "14 days", l: "Average time from kick-off to live deployment" },
];

const testimonials = [
  {
    q: "I was skeptical AI could actually replace a front desk — it exceeded every expectation. Our no-show rate dropped 40% in the first month alone. The voice agent is indistinguishable from a real person.",
    name: "Marcus Reynolds",
    role: "Founder, Revive MedSpa",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
  },
  {
    q: "We went from manually following up on 200+ leads a week to zero. Aumana built a system that qualifies, books, and reminds clients automatically. I genuinely can't imagine running the practice without it.",
    name: "Priya Sharma",
    role: "CEO, LuxDerm Clinics",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
  },
  {
    q: "Two weeks from kickoff to live. The dashboard gives us real-time visibility on every call and message — our team finally has data we can actually act on. ROI was clear within 30 days.",
    name: "Jordan Kellerman",
    role: "Operations Director, Scale Agency",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
  },
];

function Results() {
  return (
    <section id="aumana-results" style={{ background: C.dark }} className="px-5 py-16 md:py-24 md:px-6">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p style={{ ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Results</p>
          <h2 style={{ ...grotesk, fontSize: "clamp(2rem,4.5vw,3.5rem)", color: C.white, fontWeight: 700, margin: "0 0 12px" }}>
            Numbers don't lie.<br /><GradientText>Performance does.</GradientText>
          </h2>
          <p style={{ ...inter, fontSize: 15, color: C.taupe, fontWeight: 300, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            Real outcomes from real clients. Every number below came from a business that trusted the process.
          </p>
        </div>

        {/* Big stats card */}
        <div
          style={{ borderRadius: 24, background: C.card, marginBottom: 8 }}
          className="flex flex-col md:flex-row items-start gap-8 p-6 md:p-12"
        >
          {/* Left: stat grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  background: "#201a1a",
                }}
                className="p-4 md:p-6"
              >
                <div style={{
                  ...grotesk, fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, marginBottom: 8, lineHeight: 1,
                  background: "linear-gradient(135deg,#d2c6b6 0%,#a79c8e 50%,#fff 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{s.v}</div>
                <p style={{ ...inter, fontSize: 11, color: C.taupe, fontWeight: 300, lineHeight: 1.6, margin: 0 }}>{s.l}</p>
              </div>
            ))}
          </div>

          {/* Right: copy */}
          <div className="w-full md:w-1/2">
            <span style={{
              ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em", textTransform: "uppercase",
              padding: "5px 12px", borderRadius: 99, border: `1px solid rgba(167,156,142,0.2)`,
              display: "inline-block", marginBottom: 16,
            }}>Proven Track Record</span>
            <h3 style={{ ...grotesk, fontSize: "clamp(1.3rem,2.5vw,2rem)", color: C.white, fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
              Clients see results within the first 30 days — or we keep working until they do.
            </h3>
            <p style={{ ...inter, fontSize: 14, color: C.taupe, fontWeight: 300, lineHeight: 1.75, marginBottom: 24 }}>
              Every stat above is pulled from active client accounts. We don't pad numbers — we build systems that produce them.
            </p>
            <a
              href="#aumana-contact"
              style={{
                ...inter, fontSize: 15, fontWeight: 700,
                background: C.linen, color: C.dark, textDecoration: "none",
                padding: "15px 32px", borderRadius: 99,
                display: "inline-flex", alignItems: "center", gap: 8,
              }}
            >
              Get These Results <span style={{ fontSize: 15 }}>→</span>
            </a>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                borderRadius: 24,
                background: C.card,
                display: "flex", flexDirection: "column",
              }}
              className="p-6 md:p-8"
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 18 }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} style={{ color: "#a79c8e", fontSize: 14 }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{ ...inter, fontSize: 14, color: C.linen, fontWeight: 300, lineHeight: 1.8, marginBottom: 28, flex: 1 }}>
                "{t.q}"
              </p>

              {/* Profile */}
              <div style={{ paddingTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: 44, height: 44, borderRadius: "50%",
                    objectFit: "cover",
                    border: `2px solid rgba(167,156,142,0.2)`,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ ...inter, fontSize: 13, fontWeight: 600, color: C.white }}>{t.name}</div>
                  <div style={{ ...inter, fontSize: 12, color: C.taupe, marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────── */
function CTA() {
  return (
    <section id="aumana-contact" style={{ padding: "96px 24px", background: C.dark }}>
      <div style={{ maxWidth: 860, margin: "0 auto", borderRadius: 28, background: C.card, padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse at 50% 0%, rgba(167,156,142,0.1) 0%, transparent 60%)" }} />
        <p style={{ ...inter, fontSize: 11, color: C.taupe, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Get Started</p>
        <h2 style={{ ...grotesk, fontSize: "clamp(2rem,5vw,3.5rem)", color: C.white, fontWeight: 700, lineHeight: 1.15, margin: "0 0 16px" }}>
          Ready to automate<br /><GradientText>your growth?</GradientText>
        </h2>
        <p style={{ ...inter, fontSize: 15, color: C.taupe, fontWeight: 300, maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Book a free strategy call. We'll show you exactly where AI can save your team time and grow your revenue — no fluff, just results.
        </p>
        <a
          href="mailto:hello@aumanaconsulting.com"
          style={{
            ...inter, fontSize: 15, fontWeight: 700,
            background: C.linen, color: C.dark, textDecoration: "none",
            padding: "17px 44px", borderRadius: 99,
            display: "inline-flex", alignItems: "center", gap: 10,
          }}
        >
          Book a Free Consultation <span style={{ fontSize: 16 }}>→</span>
        </a>
        <p style={{ ...inter, fontSize: 12, color: "rgba(167,156,142,0.45)", marginTop: 20 }}>No commitment. No contracts until you're ready.</p>
      </div>
    </section>
  );
}

/* ─── FOOTER ────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ padding: "40px 24px", background: C.dark }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <SunLogo size={18} color={C.taupe} opacity={0.5} />
          <span style={{ ...inter, fontSize: 12, color: C.taupe, letterSpacing: "0.2em", textTransform: "uppercase" }}>Aumana Consulting</span>
        </div>
        <p style={{ ...inter, fontSize: 12, color: "rgba(167,156,142,0.35)" }}>© {new Date().getFullYear()} Aumana Consulting. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a key={item} href="#" style={{ ...inter, fontSize: 12, color: "rgba(167,156,142,0.45)", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ──────────────────────────────────────── */
export default function Aumana() {
  return (
    <div style={{ background: C.dark, minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <LogoBar />
      <Frameworks />
      <HowWeWork />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}
