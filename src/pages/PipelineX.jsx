import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Users, 
  Zap, 
  Star, 
  X, 
  Sparkles,
  ChevronDown,
  Target,
  TrendingUp,
  Clock,
  Video,
  Mail,
  MessageSquare,
  Settings,
  Megaphone,
  Camera
} from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Dental Practice Owner",
    text: "Within 60 days, our calendar was filled with pre-qualified leads. The content they produce stops people mid-scroll. Best ROI we've ever seen.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "James Rodriguez",
    role: "Med Spa Director",
    text: "We went from 5 leads per month to 40+ qualified appointments. Our business has completely transformed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Michelle Chen",
    role: "Law Firm Partner",
    text: "The exclusive model means we're the only firm in our area using their system. No competition, just results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "David Thompson",
    role: "Home Services CEO",
    text: "Finally, a partner that doesn't work with our competitors. Our lead flow increased 300% in the first quarter.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Amanda Foster",
    role: "Fitness Studio Owner",
    text: "The AI follow-up system is insane. Leads get contacted within seconds. Our show rate went from 40% to 85%.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    name: "Dr. Kevin Park",
    role: "Chiropractor",
    text: "I was skeptical at first, but the exclusive access sold me. No one else in my area can use this. Game changer.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
];

const steps = [
  {
    number: "1",
    title: "Market Research",
    description: "Gather all information on your competitors to make winning creatives",
    image: "/step-1.png"
  },
  {
    number: "2", 
    title: "Build All Marketing Assets",
    description: "Set up your Meta Ads, CRM, Auto Followup, Landing pages...+",
    image: "/step-2.png"
  },
  {
    number: "3",
    title: "We Launch in 72Hrs",
    description: "We Launch all creatives on your ad platforms, and you start getting paid!",
    image: "/step-3.png"
  }
];

const wistiaVideoIds = ['uclsx16sij', 'd80ddv8amb', 'nvxc00kqvr', 'm0zr5i9s4d'];

const features = [
  {
    icon: Shield,
    title: "Exclusive Spot",
    description: "Your market is yours alone. No competitors using our system in your area.",
    highlight: "100% Exclusive"
  },
  {
    icon: Target,
    title: "Done-For-You Assets",
    description: "Professional marketing materials without the agency markup or monthly retainers.",
    highlight: "10x ROI Average"
  },
  {
    icon: Zap,
    title: "AI-Powered Follow-Up",
    description: "Automated systems that engage leads in under 5 seconds, 24/7.",
    highlight: "<5s Response"
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Results",
    description: "See real leads within 30 days or we work for free until you do.",
    highlight: "30-Day Guarantee"
  }
];

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "Scroll-stopping video content that converts viewers into leads."
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Professional photos, graphics, and ad creatives tailored to your brand."
  },
  {
    icon: Megaphone,
    title: "Paid Ads Management",
    description: "We run and optimize your Meta & Google ads for maximum ROI."
  },
  {
    icon: Settings,
    title: "CRM Setup",
    description: "Complete CRM configuration so you never lose a lead."
  },
  {
    icon: MessageSquare,
    title: "Text Automations",
    description: "Instant SMS follow-ups that book appointments on autopilot."
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Nurture campaigns that turn cold leads into paying clients."
  }
];

const faqs = [
  {
    question: "What makes this different from other marketing agencies?",
    answer: "We don't work with your competitors. Period. When you partner with us, you get exclusive access to our system in your area. Traditional agencies often work with multiple businesses in the same industry and area — we never do."
  },
  {
    question: "How quickly can I expect to see results?",
    answer: "Most partners see their first qualified leads within 14-21 days of launch. We guarantee results within 30 days or we continue working for free until you do."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with service-based businesses including medical practices, dental offices, med spas, law firms, home services, fitness studios, and more. If you serve local clients, we can help."
  },
  {
    question: "What's included in the partnership?",
    answer: "Everything you need: custom ad creatives, landing pages, lead capture forms, AI follow-up sequences, appointment booking, and ongoing optimization. No hidden fees."
  },
  {
    question: "How do I know if my spot is available?",
    answer: "Simply apply using the form on this page. We'll check our database and get back to you within 24 hours with availability and next steps."
  }
];

const comparisonData = {
  traditional: [
    "Works with your competitors",
    "Expensive monthly retainers",
    "Generic, templated content",
    "Leads shared with other clients",
    "Long contracts, slow results"
  ],
  pipelinex: [
    "Exclusive to your area",
    "Transparent, fair pricing",
    "Custom, cinematic content",
    "All leads are 100% yours",
    "Results in 30 days or less"
  ]
};

// Wistia Player Component
function WistiaPlayer({ videoId }) {
  const containerRef = React.useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Create the custom element
      const player = document.createElement('wistia-player');
      player.setAttribute('media-id', videoId);
      player.setAttribute('aspect', '0.5625');
      
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        wistia-player[media-id='${videoId}']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top:177.78%; 
        }
      `;
      document.head.appendChild(style);
      
      containerRef.current.appendChild(player);
      
      return () => {
        if (containerRef.current && player.parentNode) {
          player.parentNode.removeChild(player);
        }
      };
    }
  }, [videoId]);

  return (
    <div 
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden bg-black/20 border border-white/10 w-full h-full"
    />
  );
}

export default function PipelineX() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "PipelineX - Done-For-You Lead Generation";
    
    const metaTags = {
      'og:title': 'PipelineX - Done-For-You Lead Generation',
      'og:description': 'Join 100+ businesses getting leads without overpaying. Exclusive territories, custom content, and guaranteed results.',
      'og:image': '/pipelinex-logo.png',
      'twitter:image': '/pipelinex-logo.png',
      'description': 'Join 100+ businesses getting leads without overpaying. Done-for-you ads, content, and automations.'
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[property="${name}"]`) || document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      }
    });

    // Load Wistia scripts
    if (!document.querySelector('script[src*="wistia.com/player.js"]')) {
      const playerScript = document.createElement('script');
      playerScript.src = 'https://fast.wistia.com/player.js';
      playerScript.async = true;
      document.head.appendChild(playerScript);
    }

    // Load embed scripts for each video
    wistiaVideoIds.forEach((videoId) => {
      if (!document.querySelector(`script[src*="wistia.com/embed/${videoId}"]`)) {
        const embedScript = document.createElement('script');
        embedScript.src = `https://fast.wistia.com/embed/${videoId}.js`;
        embedScript.async = true;
        embedScript.type = 'module';
        document.head.appendChild(embedScript);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'PipelineX Lead',
          content_category: 'Partnership Application'
        });
      }
      
      const submissionData = new URLSearchParams({
        'form-name': 'pipelinex-application',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submissionData.toString()
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="/pipelinex-logo.png" 
            alt="PipelineX" 
            className="h-8 w-auto invert"
          />
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-4 sm:px-6 py-2 bg-white text-black font-semibold text-xs sm:text-sm rounded-full hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            <span className="hidden sm:inline">Join 100+ Businesses Getting Leads</span>
            <span className="sm:hidden">Join Now</span>
          </button>
        </div>
      </nav>

      {/* Hero Section with Glow */}
      <section className="relative pt-24 sm:pt-32 pb-24 sm:pb-32 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6 sm:mb-8"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              <span className="text-xs sm:text-sm text-red-400">Limited spots available</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6"
            >
              <span className="text-white">The Agency You</span>{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Only Pay When We Perform</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-xl text-white/50 max-w-xl mx-auto mb-6 sm:mb-8 px-2"
            >
              No results, no invoice. Done-for-you ads, content, and automations — you pay only when leads come in.
            </motion.p>

            {/* Social Proof - Above CTA on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
            >
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((t, i) => (
                  <img
                    key={i}
                    src={t.image}
                    alt={t.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black"
                  />
                ))}
              </div>
              <span className="text-sm text-white/60">250+ businesses</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-red-500 text-red-500" />
                ))}
              </div>
            </motion.div>

            {/* CTA Button with White Glow */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-8 sm:mb-12"
            >
              <button
                onClick={() => setIsFormOpen(true)}
                className="group px-12 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all inline-flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)]"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Dashboard Preview with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center -mx-4 sm:mx-0"
            >
              <div className="relative w-full sm:max-w-4xl px-2 sm:px-0">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-red-500/10 to-transparent blur-3xl -z-10 scale-110" />
                <img
                  src="/pipelinex-hero.png"
                  alt="PipelineX Revenue Dashboard"
                  className="relative z-10 w-full h-auto rounded-lg sm:rounded-2xl shadow-2xl shadow-red-500/40"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Fade out gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-6 relative z-10 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$12M+", label: "Revenue Generated for Partners" },
              { value: "250+", label: "Exclusive Spots Claimed" },
              { value: "300%", label: "Average Lead Increase" },
              { value: "30", label: "Days to First Results" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Way vs New Way Comparison Table */}
      <section className="py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Header Row */}
            <div className="grid grid-cols-2">
              <div className="bg-black/60 px-4 sm:px-6 py-4 border-b border-r border-white/10">
                <p className="text-white/60 font-medium text-center">The Old Way</p>
              </div>
              <div className="bg-black/60 px-4 sm:px-6 py-4 border-b border-white/10">
                <p className="text-white font-medium text-center">The New Way</p>
              </div>
            </div>

            {/* Comparison Rows */}
            {[
              {
                old: { bold: "Expensive agencies", rest: "that drain your budget monthly" },
                new: { bold: "Affordable partnership", rest: "with transparent pricing" }
              },
              {
                old: { bold: "Generic content", rest: "that looks like everyone else's" },
                new: { bold: "Custom cinematic content", rest: "that stops the scroll" }
              },
              {
                old: { bold: "Shared leads", rest: "that go to your competitors too" },
                new: { bold: "Exclusive leads", rest: "that are 100% yours" }
              },
              {
                old: { bold: "Chasing leads", rest: "with manual follow-ups" },
                new: { bold: "Automated follow-up", rest: "that books while you sleep" }
              },
              {
                old: { bold: "Months to see results", rest: "with no guarantees" },
                new: { bold: "Results in 30 days", rest: "or we keep working for free" }
              }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2">
                <div className="bg-black/40 px-4 sm:px-6 py-5 border-b border-r border-white/10 flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-white/60 text-sm sm:text-base">
                    <span className="font-semibold text-white/80">{row.old.bold}</span> {row.old.rest}
                  </p>
                </div>
                <div className="bg-black/20 px-4 sm:px-6 py-5 border-b border-white/10 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-sm sm:text-base">
                    <span className="font-semibold text-white">{row.new.bold}</span> {row.new.rest}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Framework */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Our Framework</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              How We Bring You More Leads
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Our proven 3-step system that consistently delivers results.
            </p>
          </div>

          {/* Step Cards with Images */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Table Style */}
      <section className="py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">What's Included</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Everything Done For You
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-black/60 px-4 sm:px-6 py-4 border-b border-white/10">
              <p className="text-white font-medium text-center">Your Complete Lead Generation System</p>
            </div>

            {/* Items */}
            {[
              { bold: "Video Production", rest: "— Scroll-stopping content that converts viewers into leads" },
              { bold: "Content Creation", rest: "— Professional photos, graphics, and ad creatives" },
              { bold: "Paid Ads Management", rest: "— Meta & Google ads run and optimized for maximum ROI" },
              { bold: "CRM Setup", rest: "— Complete configuration so you never lose a lead" },
              { bold: "Text Automations", rest: "— Instant SMS follow-ups that book appointments" },
              { bold: "Email Sequences", rest: "— Nurture campaigns that turn cold leads into clients" },
              { bold: "Exclusive Territory", rest: "— Your market is yours alone, no competitors" },
              { bold: "AI-Powered Follow-Up", rest: "— Automated systems that engage leads in under 5 seconds" },
              { bold: "30-Day Guarantee", rest: "— See real leads or we work for free until you do" }
            ].map((item, i) => (
              <div key={i} className="bg-black/20 px-4 sm:px-6 py-4 border-b border-white/10 last:border-b-0 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm sm:text-base">
                  <span className="font-semibold text-white">{item.bold}</span> {item.rest}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">The Difference</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Launch Fast or Build for Months
            </h2>
            <p className="text-white/50">Why compete when you can dominate?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="p-8 rounded-2xl bg-black border border-white/5">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-5 h-5 text-red-400" />
                <span className="font-semibold text-white/60">Traditional Agencies</span>
              </div>
              <ul className="space-y-4">
                {comparisonData.traditional.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40">
                    <X className="w-5 h-5 text-red-400/50 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PipelineX */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-500/20">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-white">PipelineX Partnership</span>
              </div>
              <ul className="space-y-4">
                {comparisonData.pipelinex.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery - Scrollable */}
      <section className="py-16 px-4 sm:px-6 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Video Gallery</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              See It In Action
            </h2>
          </div>

          <div 
            className="overflow-x-auto -mx-4 sm:mx-0 pb-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes scroll-videos {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .video-scroll-track {
                  animation: scroll-videos 40s linear infinite;
                }
                .video-scroll-track:hover,
                .video-scroll-track:active {
                  animation-play-state: paused;
                }
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `
            }} />
            <div className="video-scroll-track flex gap-8 px-4 sm:px-8" style={{ width: 'fit-content' }}>
              {[...wistiaVideoIds, ...wistiaVideoIds].map((videoId, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: '300px', height: '533px' }}
                >
                  <WistiaPlayer videoId={videoId} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Partners Getting Real Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-black border border-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-white/70 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Got Questions?
            </h2>
            <p className="text-white/50">We've answered the most common ones.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-500/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to Claim Your Spot?
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                We only partner with one business per industry, per area. Limited spots available.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-14 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors text-lg shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)]"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src="/pipelinex-logo.png" 
            alt="PipelineX" 
            className="h-6 w-auto invert"
          />
          <div className="flex gap-6 text-sm text-white/40">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-white/30">© 2026 PipelineX. All rights reserved.</p>
        </div>
      </footer>

      {/* Application Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
              onClick={() => setIsFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[calc(100%-2rem)] max-w-md"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                    <p className="text-white/50">We'll review your application and get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
                      <p className="text-white/50 text-sm">Limited spots available in your area</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Business Type & Location"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Checking...
                          </>
                        ) : (
                          <>
                            Check Availability
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
