import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BeamsBackground } from "@/components/ui/beams-background";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Testimonials from "../components/landing/offer/Testimonials";
import WhatYouGet from "../components/landing/offer/WhatYouGet";
import WhatHappens from "../components/landing/offer/WhatHappens";
import FinalClose from "../components/landing/offer/FinalClose";
import DecemberLeadQuiz from "../components/landing/offer/DecemberLeadQuiz";
import SocialProof from "../components/landing/offer/SocialProof";

export default function System() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleCTAClick = (e, location) => {
    if (window.fbq) {
      window.fbq('trackCustom', 'QuizStarted', {
        content_name: `System Page - ${location}`,
        content_category: 'CTA Button'
      });
    }
    setIsQuizOpen(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      {/* Floating Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-4 relative">
          <div className="flex items-center gap-1.5">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block text-xs sm:text-sm font-bold tracking-widest text-white/60 uppercase whitespace-nowrap">
            For All Businesses
          </div>

          <button
            onClick={(e) => handleCTAClick(e, 'Header')}
            className="px-4 py-2 bg-white text-black font-light text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            GET STARTED
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <BeamsBackground intensity="medium">
        <div className="relative z-10 px-6 pt-24 pb-8 sm:pt-28 sm:pb-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight px-2">
                No More{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006eff] via-white/90 to-[#0080ff]">
                  Overpriced Agencies
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl font-light px-2 text-white/80">
                Content, ads, AI follow-up, and automated booking — fully done for you in 30 days.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-4 md:gap-5 px-4 mt-10 sm:mt-12"
            >
              <RainbowButton
                onClick={(e) => handleCTAClick(e, 'Hero')}
                className="text-base sm:text-lg font-bold w-full sm:w-auto"
                style={{ maxWidth: '397.2px', height: '62.4px', minWidth: '280px' }}
              >
                Get Your System Built
              </RainbowButton>
            </motion.div>

            {/* Scroll Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </BeamsBackground>

      {/* Who This Is For */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built For Businesses That Want To Scale
            </h2>
            <p className="text-lg text-white/60">
              Whether you're a service provider, local business, or agency — our system works.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Med Spas",
              "Dental Practices",
              "Law Firms",
              "Real Estate",
              "Home Services",
              "Fitness Studios",
              "Agencies",
              "Consultants"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <span className="text-white font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof />
      <Testimonials />
      <WhatYouGet onCTAClick={handleCTAClick} ctaText="Build My System" />
      <WhatHappens />

      {/* The Problem Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Wasting Money on Marketing That Doesn't Convert
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto">
              Most businesses burn through cash on ads, content, and agencies that generate vanity metrics but zero qualified leads.
            </p>
          </motion.div>

          {/* Problem Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💸",
                title: "Wasted Ad Spend",
                description: "Thousands spent on ads that get clicks but no calls or bookings."
              },
              {
                icon: "📉",
                title: "No Follow-Up System",
                description: "Leads go cold because no one follows up fast enough or consistently."
              },
              {
                icon: "😤",
                title: "Agency Runaround",
                description: "Paying premium prices for agencies that deliver reports, not results."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalClose onCTAClick={handleCTAClick} ctaText="Get Started Now" />

      {/* Quiz Popup Modal */}
      <DecemberLeadQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-white/10 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-white/60">
            Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <Link to="/privacy-policy" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Privacy Policy</Link>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-white/60 transition-colors hover:text-white">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/40">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

