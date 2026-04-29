import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, X, ArrowRight } from "lucide-react";

// Edit these three lines to swap the offer in one place
const OFFER_LABEL = "Free Strategy Call";
const CTA_PRIMARY = "BOOK MY FREE CALL";
const CTA_SECONDARY = "BOOK MY CALL";
const CTA_LINK = "https://calendly.com/p1creative/30min";

export default function P1Creative() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      {/* Top Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6 py-3">
          <img src="/p1 white.png" alt="P1 Creative" className="h-7 sm:h-8 w-auto" />
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/60 hover:text-white transition-colors"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border border-white/10">
              <img
                src="/HERO.jpg"
                alt="D'Angelo Vera"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full text-[11px] font-semibold tracking-[0.2em] text-white/70 uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#006eff] rounded-full" />
            P1 Creative · {OFFER_LABEL}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.95] uppercase mb-6"
          >
            BOOKED OUT.
            <br />
            ON REPEAT.
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-3 font-medium"
          >
            We build the marketing system that fills your calendar — and keeps it full.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-base sm:text-lg text-white/45 leading-relaxed mb-10"
          >
            Cinematic content, paid ads that convert, and AI follow-up that books for you.
            Built for local service businesses ready to dominate their market.
          </motion.p>

          {/* CTA */}
          <motion.a
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black text-sm sm:text-base tracking-wider uppercase hover:bg-[#006eff] hover:text-white transition-colors"
          >
            {CTA_PRIMARY}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 sm:py-24 border-t border-white/5 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-center mb-14"
          >
            WHAT YOU'LL <span className="text-[#006eff]">GET</span>
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                tag: "01",
                title: "A REAL DIAGNOSIS",
                desc:
                  "We pull back the hood on what's actually happening in your business — your offer, your ads, your follow-up, your show rate. No fluff, no generic advice.",
              },
              {
                tag: "02",
                title: "THE SYSTEM, MAPPED",
                desc:
                  "You'll see the exact framework we use to take a local business from inconsistent leads to a calendar that fills itself — content, paid, and automated booking working in one loop.",
              },
              {
                tag: "03",
                title: "THE NEXT MOVE",
                desc:
                  "By the end of the call, you'll know what's broken, what to fix first, and whether we're the right team to build it for you. Either way you leave with a plan.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="text-[#006eff] text-sm font-black tracking-widest pt-1 flex-shrink-0">
                  {item.tag}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For You / Not For You */}
      <section className="py-20 sm:py-24 border-t border-white/5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase mb-6">
                THIS IS FOR YOU IF…
              </h3>
              <ul className="space-y-4">
                {[
                  "You run a local service business with real margin and want to scale",
                  "You're done chasing leads — you want a system that brings them to you",
                  "You're ready to invest in content that positions you as the obvious choice",
                  "You want a partner that handles strategy, creative, and execution end-to-end",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#006eff] mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase mb-6 text-white/50">
                THIS IS NOT FOR YOU IF…
              </h3>
              <ul className="space-y-4">
                {[
                  "You're looking for a quick fix or one viral post",
                  "You're not willing to show up on camera or back the brand publicly",
                  "You expect leads without investing in real creative",
                  "You're not ready for what happens when the calendar fills up",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-white/25 mt-0.5 flex-shrink-0" />
                    <span className="text-white/45 leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 sm:py-24 border-t border-white/5 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border border-white/10 mb-8">
              <img
                src="/HERO.jpg"
                alt="D'Angelo Vera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#006eff] mb-3">
              Founder
            </div>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight uppercase mb-6">
              D'ANGELO VERA
            </h3>
            <p className="text-white/65 leading-relaxed mb-4">
              I built P1 Creative to do one thing: scale local service businesses through
              content and paid social that actually convert. Med spas, dental, contractors —
              the operators who care about their craft.
            </p>
            <p className="text-white/65 leading-relaxed">
              We don't run a content mill. We build systems — cinematic creative, paid
              acquisition, and AI booking — that compound month over month. If that's what
              you're after, let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 border-t border-white/5 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
              {OFFER_LABEL}
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase mb-6">
              READY TO BE
              <br />
              <span className="text-[#006eff]">BOOKED OUT?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 mb-10">
              Quick intro call. We'll map out what's working, what's broken, and whether
              we're the right fit to fix it.
            </p>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black text-sm sm:text-base tracking-wider uppercase hover:bg-[#006eff] hover:text-white transition-colors"
            >
              {CTA_SECONDARY}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="/p1 white.png"
            alt="P1 Creative"
            className="h-8 w-auto mx-auto opacity-30 mb-4"
          />
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              to="/privacy-policy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider"
            >
              Privacy
            </Link>
            <a
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider"
            >
              Terms
            </a>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
          <p className="text-[10px] text-white/20 uppercase tracking-wider">
            © 2026 P1 Creative · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
