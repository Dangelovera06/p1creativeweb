import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, X, ArrowRight, Lock } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/p1creative/30min";
const TRAINING_DATE = "May 5th, 2026 · 7:00 PM EST";

export default function P1Creative() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-[#001a3d] text-white">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <img
            src="/p1 white.png"
            alt="P1 Creative"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
          <div className="hidden md:block text-xs font-medium tracking-wider text-white/30 uppercase">
            Free Live Training
          </div>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            Questions?
          </a>
        </div>
      </header>

      {/* HERO — Brez-style: portrait → live pill → headline → CTA → avatar stack */}
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-28 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/vibe-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#006eff]/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block mb-8"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-[#006eff]/30 ring-2 ring-[#006eff]/40">
              <img
                src="/HERO.jpg"
                alt="D'Angelo Vera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#006eff] border-4 border-black flex items-center justify-center">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Live Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006eff]/15 border border-[#006eff]/40 rounded-full text-xs font-bold tracking-widest text-[#006eff] uppercase mb-6"
          >
            <span className="w-2 h-2 bg-[#006eff] rounded-full animate-pulse" />
            Live · May 5
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.92] mb-5"
          >
            THE NEW{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006eff] to-[#0099ff]">
              WAVE
            </span>
          </motion.h1>

          {/* Subheading — date/time */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/50 uppercase mb-8"
          >
            Live Training · {TRAINING_DATE}
          </motion.p>

          {/* Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-3 font-medium leading-snug"
          >
            AI completely changed my brand-scaling business.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-10"
          >
            In under 60 minutes, I'll give you the blueprint — how I cut my team from 7 to
            2, stopped trading time for money, and built a system that compounds.
          </motion.p>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 px-10 py-5 bg-gradient-to-r from-[#006eff] to-[#0080ff] rounded-xl font-black text-base sm:text-lg shadow-xl shadow-[#006eff]/40 hover:shadow-[#006eff]/60 hover:scale-[1.02] transition-all"
          >
            <span className="flex items-center gap-3 tracking-wide">
              SAVE MY FREE SPOT
              <ArrowRight className="w-5 h-5" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
              {TRAINING_DATE}
            </span>
          </motion.a>

          {/* Social Proof — avatar stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-3">
              {[
                "/SOCIAL PROOF/3 copy.png",
                "/SOCIAL PROOF/4 copy.png",
                "/SOCIAL PROOF/5 copy.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-black bg-neutral-800"
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-sm text-white/60">
              <span className="font-bold text-white">2,847+</span> already registered
            </span>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 sm:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-wider mb-4">
              The Blueprint
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              WHAT YOU'LL <span className="text-[#006eff]">LEARN</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "01",
                title: "THE OPPORTUNITY",
                desc:
                  "Why the one-person AI business is the biggest market opportunity of the decade — and what early entrants are doing to lock in their seat.",
              },
              {
                tag: "02",
                title: "THE SYSTEM",
                desc:
                  "The exact plug-and-play framework I use to deliver AI-powered marketing services without burning out, hiring, or guessing.",
              },
              {
                tag: "03",
                title: "THE LOOPHOLE",
                desc:
                  "Every business owner needs marketing. AI now lets one person fulfill what used to take a team. Here's how to position yourself.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#006eff]/40 transition-colors"
              >
                <div className="text-[#006eff] text-sm font-bold tracking-widest mb-4">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens (process imagery) */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              HOW IT <span className="text-[#006eff]">PLAYS OUT</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              The same 3-step flow we run for our own clients — distilled into the training.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { img: "/WHAT HAPPENS/1.webp", label: "Lead Captured" },
              { img: "/WHAT HAPPENS/2.webp", label: "AI Follow-Up" },
              { img: "/WHAT HAPPENS/3.webp", label: "Auto-Booked" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden group"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#006eff] rounded-full flex items-center justify-center font-black text-sm">
                    {i + 1}
                  </div>
                  <span className="font-bold text-lg">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For You / Not For You */}
      <section className="py-20 sm:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-gradient-to-br from-[#006eff]/15 to-transparent border border-[#006eff]/30 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight">
                THIS IS FOR YOU IF…
              </h3>
              <ul className="space-y-4">
                {[
                  "You want to build real, marketable skills — not chase another certificate",
                  "You're done trading hours for dollars at a job that won't compound",
                  "You're ready to learn the highest-leverage skill of the next decade",
                  "You want a business that runs from anywhere with a laptop",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006eff] mt-1 flex-shrink-0" />
                    <span className="text-white/80">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight text-white/70">
                THIS IS NOT FOR YOU IF…
              </h3>
              <ul className="space-y-4">
                {[
                  "You're hunting for a get-rich-quick play",
                  "You're not willing to put in real reps",
                  "You're not committed to becoming better at your craft",
                  "You're not ready to actually build something",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white/30 mt-1 flex-shrink-0" />
                    <span className="text-white/50">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Host Bio */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#006eff]/30 to-[#001a3d] border border-white/10 shadow-2xl shadow-[#006eff]/20">
                <img
                  src="/HERO.jpg"
                  alt="D'Angelo Vera"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="text-xs uppercase tracking-widest text-[#006eff] mb-3">
                Your Host
              </div>
              <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
                D'ANGELO VERA
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Founder of P1 Creative. I've spent the last several years scaling local
                service businesses — med spas, dental, contractors — through paid social
                and content systems that actually convert.
              </p>
              <p className="text-white/70 leading-relaxed">
                AI rewrote what one operator can do. I'm running leaner, with better
                margins, and serving more clients than ever. On May 5th, I'm opening up
                the playbook.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Gallery */}
      <section className="py-20 sm:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              REAL <span className="text-[#006eff]">RESULTS</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              The work behind the system. Not theory — receipts.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/SOCIAL PROOF/3 copy.png",
              "/SOCIAL PROOF/4 copy.png",
              "/SOCIAL PROOF/5 copy.png",
              "/SOCIAL PROOF/6 copy.png",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/5"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006eff]/15 border border-[#006eff]/30 rounded-full text-xs font-semibold tracking-wider text-[#006eff] uppercase mb-6">
              <Lock className="w-3 h-3" />
              Limited Access — Register Now
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              REGISTER BEFORE <br />
              <span className="text-[#006eff]">SPOTS FILL UP</span>
            </h2>
            <p className="text-lg text-white/60 mb-10">
              Free live training · {TRAINING_DATE} · 60 minutes that change how you think
              about your business.
            </p>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#006eff] to-[#0080ff] rounded-xl font-bold text-lg shadow-lg shadow-[#006eff]/30 hover:shadow-[#006eff]/50 transition-all"
            >
              JOIN THE FREE TRAINING
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/p1 white.png"
            alt="P1 Creative"
            className="h-10 w-auto mx-auto opacity-40 mb-4"
          />
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link
              to="/privacy-policy"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="#"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-xs uppercase tracking-widest text-white/20 max-w-2xl mx-auto leading-relaxed mb-3">
            Results vary depending on individual effort, experience, and market
            conditions. This training is educational only and is not a guarantee of income.
          </p>
          <p className="text-xs text-white/20">
            © 2026 P1 Creative. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
