import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Video, BarChart3, Globe, Calendar, CheckCircle, ArrowRight, Star, Zap, Clock, Users, Sparkles } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/p1creative/30min";

const offerItems = [
  {
    icon: Phone,
    title: "AI Caller",
    description: "24/7 AI-powered caller that follows up with leads, qualifies them, and books appointments while you sleep."
  },
  {
    icon: Video,
    title: "4 High-End Short Form Videos",
    description: "Cinematic, scroll-stopping content professionally shot and edited to convert viewers into leads."
  },
  {
    icon: BarChart3,
    title: "High-Converting Paid Ad System",
    description: "Strategic ad campaigns built to generate qualified leads at the lowest cost possible."
  },
  {
    icon: Globe,
    title: "Custom Landing Page + Website",
    description: "A beautiful, conversion-optimized website designed to turn traffic into booked appointments."
  },
  {
    icon: Calendar,
    title: "Automated Booking System",
    description: "Seamless booking integration that lets leads schedule directly into your calendar."
  }
];

const reviews = [
  {
    name: "Dr. Marcus Chen",
    business: "Chen Dental Group",
    text: "The AI caller alone paid for the entire system in the first week. We're booking 3x more consultations.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    business: "Glow Med Spa",
    text: "Best investment we made in 2025. The videos are incredible and the leads just keep coming in.",
    rating: 5
  },
  {
    name: "Michael Torres",
    business: "Torres Law Firm",
    text: "Finally a system that actually works. We went from struggling to get clients to being fully booked.",
    rating: 5
  }
];

export default function Offer2026() {
  const handleBookCall = () => {
    window.open(CALENDLY_LINK, '_blank');
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Header - ScaleX Style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          {/* Logo - Left */}
          <div className="flex items-center gap-2">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Nav Links - Center */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#offer" className="text-sm text-white/70 hover:text-white transition-colors">Offer</a>
            <a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">How It Works</a>
            <a href="#reviews" className="text-sm text-white/70 hover:text-white transition-colors">Reviews</a>
            <a href="#faq" className="text-sm text-white/70 hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* CTA Button - Right (Pill Shape) */}
          <button
            onClick={handleBookCall}
            className="px-5 py-2.5 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section - ScaleX Style */}
      <section className="pt-28 sm:pt-36 pb-8 relative overflow-hidden">
        {/* Gradient Glow - Bottom Center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#006eff]/30 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge with Brackets */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="text-white/30 text-lg">[</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white/50 rounded-full" />
                </div>
                <span className="text-white/50 text-sm">Trusted By 500+ Businesses</span>
              </div>
              <span className="text-white/30 text-lg">]</span>
            </div>

            {/* Headline - Scale Smarter Style */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-white">Scale </span>
              <span className="text-[#006eff]">Smarter</span>
              <br />
              <span className="text-white">Not Harder</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-8 leading-relaxed">
              Unlock The Full Potential Of Your Business Through Tailored Marketing Solutions That Drive Measurable Results.
            </p>

            {/* VSL Placeholder - 16:9 Aspect Ratio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-2xl mb-8"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-[#006eff]/20 bg-neutral-900">
                {/* VSL Placeholder - Replace with actual video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#006eff]/20 border border-[#006eff]/30 flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-[#006eff]/30 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" style={{ borderLeftWidth: '16px' }} />
                    </div>
                    <p className="text-white/40 text-sm">Watch the 2-min breakdown</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Two Buttons Side by Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-[#006eff] text-white font-semibold rounded-lg hover:bg-[#0055cc] transition-all w-full sm:w-auto"
              >
                Get Started
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                Learn More
              </motion.button>
            </div>

            {/* Industries Bar - Brighter, smaller on mobile */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8">
              {["Dental", "Med Spas", "Law Firms", "Real Estate", "Home Services"].map((industry, i) => (
                <span key={i} className="text-white/70 text-xs sm:text-sm font-medium">{industry}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="offer" className="py-20 sm:py-28 relative bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Here's What You Get
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Everything built and delivered in 30 days
            </p>
          </motion.div>

          {/* Horizontal Rectangle Cards */}
          <div className="space-y-4">
            {offerItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/50 line-clamp-2">{item.description}</p>
                </div>
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#006eff] flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Value Breakdown Section */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 bg-gradient-to-br from-[#006eff]/10 via-[#006eff]/5 to-transparent border border-[#006eff]/20 rounded-2xl"
          >
            <div className="grid sm:grid-cols-3 gap-8 items-center text-center">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Total Value</p>
                <p className="text-3xl sm:text-4xl font-bold text-white/50 line-through">$4,997</p>
              </div>
              <div>
                <p className="text-[#006eff] text-sm uppercase tracking-wider mb-2">You Pay Today</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">$999</p>
              </div>
              <div>
                <p className="text-green-400/80 text-sm uppercase tracking-wider mb-2">You Save</p>
                <p className="text-3xl sm:text-4xl font-bold text-green-400">$3,998</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/50 mb-4">One-time setup. No monthly fees. No contracts.</p>
              <button
                onClick={handleBookCall}
                className="px-8 py-4 bg-[#006eff] text-white font-bold rounded-lg hover:bg-[#0055cc] transition-all"
              >
                Claim This Offer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section id="how-it-works" className="py-20 sm:py-28 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why This System Works
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              We've removed every bottleneck that stops businesses from growing
            </p>
          </motion.div>

          {/* Horizontal Rectangle Cards - 2 columns */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "Speed to Lead", desc: "AI responds to leads in seconds, not hours. That's 21x more likely to qualify." },
              { icon: Clock, title: "24/7 Follow-Up", desc: "Never miss another lead. The system works while you sleep." },
              { icon: Video, title: "Scroll-Stopping Content", desc: "Professional videos that make you impossible to ignore." },
              { icon: BarChart3, title: "Proven Ad Strategy", desc: "Campaigns built on data, not guesswork." },
              { icon: Globe, title: "Conversion-Optimized", desc: "Every touchpoint designed to turn clicks into customers." },
              { icon: Users, title: "Done For You", desc: "We build it all. You just show up for appointments." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-xl"
              >
                <div className="w-10 h-10 bg-[#006eff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#006eff]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Images */}
      <section className="py-16 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/SOCIAL PROOF/3 copy.png",
              "/SOCIAL PROOF/4 copy.png",
              "/SOCIAL PROOF/5 copy.png",
              "/SOCIAL PROOF/6 copy.png"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden"
              >
                <img src={img} alt="Client results" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 sm:py-28 relative bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/40">{review.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-28 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Questions?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "How long does it take to set up?", a: "Everything is built and delivered within 30 days. Most clients see their first leads within the first 2 weeks." },
              { q: "Is there a contract?", a: "No contracts. This is a one-time setup fee. After that, you only pay for ad spend (which you control)." },
              { q: "What if I'm not happy?", a: "We'll work with you until you are. Our goal is to fill your calendar, and we don't stop until that happens." },
              { q: "Do I need any tech skills?", a: "None. We handle everything. You just show up for appointments and close deals." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-xl"
              >
                <h4 className="font-bold text-white mb-2">{item.q}</h4>
                <p className="text-white/60 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-12 sm:p-16 bg-gradient-to-br from-[#006eff]/20 via-[#006eff]/10 to-transparent border border-[#006eff]/20 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#006eff]/20 rounded-full blur-[100px] -z-10" />
            
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium tracking-wider text-white/60 uppercase mb-6">
              Limited Time Offer
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl font-bold text-white">$999</span>
              <p className="text-[#006eff] mt-2">One-time setup. Everything included.</p>
            </div>
            
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Book a free strategy call and we'll show you exactly how the system works for your business.
            </p>
            
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-white/90 transition-all shadow-xl shadow-white/10"
            >
              Book Your Free Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <p className="text-white/30 text-sm mt-4">No obligation. No pressure. Just a conversation.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-10 sm:h-12 w-auto opacity-40"
            />
          </div>
          <p className="text-sm mb-6 text-white/30">
            P1 Creative — Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link to="/privacy-policy" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white/60 transition-colors">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/20">
            © 2026 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
