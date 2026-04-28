import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, X, ArrowRight, Calendar, Zap, Target, Lock } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/p1creative/30min";
const TRAINING_DATE = "May 5th, 2026 · 7:00 PM EST";

export default function P1Creative() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-[#001a3d] text-white">
      {/* Header */}
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

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006eff]/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006eff]/15 border border-[#006eff]/30 rounded-full text-xs font-semibold tracking-wider text-[#006eff] uppercase mb-8"
          >
            <span className="w-2 h-2 bg-[#006eff] rounded-full animate-pulse" />
            Live · {TRAINING_DATE}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 leading-[0.95]"
          >
            THE NEW{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006eff] to-[#0099ff]">
              WAVE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-white/70 max-w-3xl mx-auto mb-4 font-medium"
          >
            AI completely changed my brand-scaling business.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10"
          >
            In under 60 minutes I'll give you the blueprint — how I cut my team from 7 to 2,
            stopped trading time for money, and built a system that compounds.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#006eff] to-[#0080ff] rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-[#006eff]/30 hover:shadow-[#006eff]/50 transition-all"
          >
            SAVE MY FREE SPOT
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-xs uppercase tracking-widest text-white/40"
          >
            {TRAINING_DATE}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#006eff] to-[#0099ff] border-2 border-black"
                />
              ))}
            </div>
            <span className="text-sm text-white/50">
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

      {/* For You / Not For You */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* For You */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 bg-gradient-to-br from-[#006eff]/10 to-transparent border border-[#006eff]/30 rounded-2xl"
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

            {/* Not For You */}
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
      <section className="py-20 sm:py-28 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#006eff]/30 to-[#001a3d] border border-white/10">
                <img
                  src="/HERO.jpg"
                  alt="D'Angelo Vera"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
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
                service businesses — med spas, dental, contractors — through paid social and
                content systems that actually convert.
              </p>
              <p className="text-white/70 leading-relaxed">
                AI rewrote what one operator can do. I'm running leaner, with better margins,
                and serving more clients than ever. On May 5th, I'm opening up the playbook.
              </p>
            </motion.div>
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
            Results vary depending on individual effort, experience, and market conditions.
            This training is educational only and is not a guarantee of income.
          </p>
          <p className="text-xs text-white/20">
            © 2026 P1 Creative. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
