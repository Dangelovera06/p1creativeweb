import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Target, Zap, Calendar, Video, BarChart3, Users, Star, BookOpen, Lightbulb, TrendingUp, Gift, FileText, Play, ArrowRight, Lock } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/p1creative/30min";

const reviews = [
  {
    name: "Dr. Sarah Mitchell",
    business: "Premier Dental Studio",
    text: "We went from struggling to get 5 new patients a month to being booked out 6 weeks in advance.",
    rating: 5
  },
  {
    name: "Marcus Thompson",
    business: "Elite Med Spa",
    text: "The AI follow-up alone has doubled our show rate. Game changer.",
    rating: 5
  },
  {
    name: "Jennifer Rodriguez",
    business: "Restore Aesthetics",
    text: "Finally understood what we were doing wrong with our content strategy.",
    rating: 5
  }
];

export default function Education() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errors, setErrors] = useState({});

  // Check localStorage on mount
  useEffect(() => {
    const unlocked = localStorage.getItem('education_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Education Guide Access',
          content_category: 'Education Opt-in'
        });
      }

      const submissionData = new URLSearchParams({
        'form-name': 'education-optin',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        submittedAt: new Date().toISOString()
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submissionData.toString()
      });

      localStorage.setItem('education_unlocked', 'true');
      setIsUnlocked(true);
    } catch (error) {
      console.error('Submission error:', error);
      localStorage.setItem('education_unlocked', 'true');
      setIsUnlocked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-[#001a3d]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer"
              onClick={() => window.open(CALENDLY_LINK, '_blank')}
            />
          </div>
          <div className="hidden md:block text-xs font-medium tracking-wider text-white/30 uppercase">
            Free Educational Guide
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

      {/* Gate Section - Shows form if not unlocked */}
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.section
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen flex items-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#006eff]/5 to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Side - Message & What's Included */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium tracking-wider text-white/50 uppercase mb-6">
                    <BookOpen className="w-3 h-3" />
                    Free Guide
                  </span>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                    The Blueprint That Books You Out{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006eff] to-[#0099ff]">
                      All Year Round
                    </span>
                  </h1>
                  
                  <p className="text-lg text-white/50 leading-relaxed mb-8">
                    There's no secret. No one is hiding it from you. Here's everything you need to know — just drop your info so we can send it to you.
                  </p>

                  {/* What's Included */}
                  <div className="space-y-4">
                    <p className="text-sm text-white/40 uppercase tracking-wider mb-3">What You'll Get:</p>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#006eff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-[#006eff]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">The Complete Blueprint</p>
                        <p className="text-sm text-white/40">Full breakdown of the 4-pillar system</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#006eff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Play className="w-5 h-5 text-[#006eff]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Bonus: Ad Breakdown Video</p>
                        <p className="text-sm text-white/40">Watch us break down a high-converting ad</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#006eff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Gift className="w-5 h-5 text-[#006eff]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Bonus: Script Templates</p>
                        <p className="text-sm text-white/40">Copy-paste scripts for your content</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Get Instant Access</h3>
                      <p className="text-sm text-white/50">Enter your info to read the full guide</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1.5">Your Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#006eff]/50 focus:border-transparent transition-all ${errors.name ? 'border-red-400/50' : 'border-white/10'}`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@business.com"
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#006eff]/50 focus:border-transparent transition-all ${errors.email ? 'border-red-400/50' : 'border-white/10'}`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/60 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 123-4567"
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#006eff]/50 focus:border-transparent transition-all ${errors.phone ? 'border-red-400/50' : 'border-white/10'}`}
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-[#006eff] to-[#0080ff] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#006eff]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Unlocking...
                          </>
                        ) : (
                          <>
                            Get Free Access
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-white/30 mt-3">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Blurred Preview of Content Below */}
            <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
              <div className="blur-lg opacity-30">
                <div className="max-w-7xl mx-auto px-4 py-8">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="h-20 bg-white/5 rounded-xl" />
                    <div className="h-20 bg-white/5 rounded-xl" />
                    <div className="h-20 bg-white/5 rounded-xl" />
                    <div className="h-20 bg-white/5 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section - After Unlock */}
            <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#006eff]/5 to-transparent pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006eff]/20 border border-[#006eff]/30 rounded-full text-xs font-medium tracking-wider text-[#006eff] uppercase mb-6">
                      <CheckCircle className="w-3 h-3" />
                      Access Granted
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                      The Blueprint That Books You Out{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006eff] to-[#0099ff]">
                        All Year Round
                      </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl">
                      You're in. Everything you need to know about dominating your local market is below. Let's get into it.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#006eff]/10">
                      <img 
                        src="/SOCIAL PROOF/3 copy.png" 
                        alt="Professional content creation"
                        className="w-full h-[400px] sm:h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#006eff]/20 rounded-full blur-3xl" />
                    <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#006eff]/10 rounded-full blur-3xl" />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* The Non-Negotiables Section */}
            <section className="py-16 border-y border-white/5 bg-white/[0.02]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-10"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white/80 mb-2">There's No Secret. No One Is Hiding It From You.</h3>
                  <p className="text-white/40">These are the non-negotiables — you either implement them or stay stuck.</p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Target, label: "Own Your Local Market" },
                    { icon: Video, label: "Content That Stops The Scroll" },
                    { icon: BarChart3, label: "Ads That Actually Convert" },
                    { icon: Calendar, label: "A System That Books For You" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl"
                    >
                      <item.icon className="w-5 h-5 text-[#006eff]" />
                      <span className="text-white/70 text-sm">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 1: Local Domination */}
            <section className="py-20 sm:py-28 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 bg-[#006eff] rounded-full" />
                    Chapter 1
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    The "Local Domination" Strategy
                  </h2>
                  <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
                    Understanding why most local businesses fail at social media — and what actually works.
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-5 h-5 text-[#006eff]" />
                      <span className="text-white/40 text-sm uppercase tracking-wider">Key Insight</span>
                    </div>
                    <p className="text-lg text-white/60 leading-relaxed mb-6">
                      <span className="text-white font-semibold">Social media isn't about going viral.</span> It's about consistently showing up in front of the right people in your area until they know, like, and trust you enough to book.
                    </p>
                    <p className="text-lg text-white/60 leading-relaxed mb-8">
                      When someone in your city thinks about your service, you want your face to pop into their head first. That's domination. Here's how it happens:
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Consistent, high-quality content that positions you as the expert",
                        "Hyper-local targeting that reaches people in your service area",
                        "Educational content that solves problems before they book",
                        "Behind-the-scenes content that builds trust and authenticity"
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-xl"
                        >
                          <CheckCircle className="w-5 h-5 text-[#006eff] mt-0.5 flex-shrink-0" />
                          <span className="text-white/70">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="rounded-2xl overflow-hidden cursor-pointer group">
                        <img 
                          src="/SOCIAL PROOF/4 copy.png" 
                          alt="Local business success"
                          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </a>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#006eff]/20 rounded-full blur-3xl pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Section 2: Cinematic Content */}
            <section className="py-20 sm:py-28 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 bg-[#006eff] rounded-full" />
                    Chapter 2
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Cinematic Content Wins
                  </h2>
                  <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
                    The bar for content quality has never been higher. Here's what separates scroll-stoppers from scroll-pasters.
                  </p>
                </motion.div>

                {/* Video Showcase */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 shadow-xl">
                      <wistia-player 
                        media-id="aoangn3r46"
                        player-color="#006eff"
                        aspect="0.5625"
                      ></wistia-player>
                    </div>
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 shadow-xl">
                      <wistia-player 
                        media-id="9qg1xl14ce"
                        player-color="#006eff"
                        aspect="0.5625"
                      ></wistia-player>
                    </div>
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 shadow-xl">
                      <wistia-player 
                        media-id="2ucaviy334"
                        player-color="#006eff"
                        aspect="0.5625"
                      ></wistia-player>
                    </div>
                  </div>
                </motion.div>

                {/* Content Principles */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Professional Lighting", desc: "Makes you look credible and trustworthy" },
                    { title: "Intentional Framing", desc: "Guides attention to what matters" },
                    { title: "Clean Audio", desc: "People forgive bad video, never bad audio" },
                    { title: "Strategic Editing", desc: "Captures attention in the first 3 seconds" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-colors"
                    >
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-16 p-8 bg-gradient-to-r from-[#006eff]/10 to-transparent border-l-4 border-[#006eff] rounded-r-2xl"
                >
                  <p className="text-xl sm:text-2xl text-white/80 italic font-medium mb-4">
                    "The businesses that invest in quality content today will own their market tomorrow. The ones that don't will wonder where all their customers went."
                  </p>
                  <cite className="text-white/40 text-sm">— D'Angelo Vera</cite>
                </motion.blockquote>
              </div>

              <style jsx>{`
                wistia-player[media-id='aoangn3r46']:not(:defined),
                wistia-player[media-id='9qg1xl14ce']:not(:defined),
                wistia-player[media-id='2ucaviy334']:not(:defined) { 
                  background: #111;
                  display: block;
                  height: 100%;
                  width: 100%;
                }
                wistia-player[media-id='aoangn3r46'],
                wistia-player[media-id='9qg1xl14ce'],
                wistia-player[media-id='2ucaviy334'] {
                  display: block;
                  height: 100%;
                  width: 100%;
                }
              `}</style>
            </section>

            {/* Section 3: Ad Strategy */}
            <section className="py-20 sm:py-28 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                  >
                    <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="grid grid-cols-2 gap-4 cursor-pointer group">
                        <img 
                          src="/SOCIAL PROOF/5 copy.png" 
                          alt="Ad strategy"
                          className="rounded-2xl h-48 sm:h-64 object-cover w-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <img 
                          src="/SOCIAL PROOF/6 copy.png" 
                          alt="Results"
                          className="rounded-2xl h-48 sm:h-64 object-cover w-full mt-8 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-wider mb-6">
                      <span className="w-1.5 h-1.5 bg-[#006eff] rounded-full" />
                      Chapter 3
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                      The Ad Framework That Works
                    </h2>
                    <p className="text-lg text-white/50 mb-8">
                      Most businesses waste thousands on ads because they don't understand the structure of content that converts.
                    </p>

                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Attention-Grabbing Hook", time: "0-3 sec", desc: "Stop the scroll with something unexpected" },
                        { step: "2", title: "Problem Agitation", time: "3-15 sec", desc: "Make them feel the pain of their current situation" },
                        { step: "3", title: "Solution & Proof", time: "15-45 sec", desc: "Present your solution backed by results" },
                        { step: "4", title: "Clear Call-to-Action", time: "Final 5 sec", desc: "Tell them exactly what to do next" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="p-4 bg-white/[0.03] border border-white/5 rounded-xl"
                        >
                          <div className="flex items-center gap-4 mb-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              {item.step}
                            </div>
                            <h5 className="font-semibold text-white flex-1">{item.title}</h5>
                            <span className="text-xs bg-white/5 px-2 py-1 rounded-full text-white/40">{item.time}</span>
                          </div>
                          <p className="text-sm text-white/50 ml-12">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Section 4: Automated Booking */}
            <section className="py-20 sm:py-28 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 uppercase tracking-wider mb-6">
                    <span className="w-1.5 h-1.5 bg-[#006eff] rounded-full" />
                    Chapter 4
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Automated Booking Systems
                  </h2>
                  <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
                    Where most businesses leave money on the table — and how automation changes everything.
                  </p>
                </motion.div>

                {/* Process Images */}
                <motion.a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-3 gap-6 mb-16 cursor-pointer"
                >
                  {[
                    { img: "/WHAT HAPPENS/1.webp", label: "Lead Captured" },
                    { img: "/WHAT HAPPENS/2.webp", label: "AI Follow-Up" },
                    { img: "/WHAT HAPPENS/3.webp", label: "Auto-Booked" }
                  ].map((item, i) => (
                    <div key={i} className="relative group">
                      <div className="rounded-2xl overflow-hidden">
                        <img 
                          src={item.img}
                          alt={item.label}
                          className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#006eff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {i + 1}
                            </div>
                            <span className="text-white font-semibold">{item.label}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.a>

                {/* Speed to Lead */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-r from-[#006eff]/10 to-[#0099ff]/5 border border-[#006eff]/20 rounded-2xl mb-12"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-[#006eff]" />
                    <span className="text-white/60 text-sm font-medium">Research Finding</span>
                  </div>
                  <p className="text-lg text-white/70">
                    Studies show that responding to a lead within 5 minutes makes you <span className="text-white font-bold">21x more likely</span> to qualify that lead. After 30 minutes? Your chances drop by 80%.
                  </p>
                </motion.div>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Zap, title: "Instant Response", desc: "Leads receive personalized messages within seconds of opting in" },
                    { icon: Users, title: "AI-Powered Follow-Up", desc: "Smart sequences nurture leads until they're ready to book" },
                    { icon: Calendar, title: "Self-Booking", desc: "Leads book directly into the calendar without any back-and-forth" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#006eff]/20 to-[#0099ff]/10 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#006eff]" />
                      </div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section className="py-20 sm:py-28 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    What Others Learned
                  </h2>
                  <p className="text-lg text-white/50">
                    Feedback from business owners who applied these strategies
                  </p>
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

            {/* Subtle End Section */}
            <section className="py-20 sm:py-28">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xl text-white/60 mb-6">
                    That's the blueprint. Now it's on you to implement it — or find someone who can build it for you.
                  </p>
                  <p className="text-white/40 mb-10">
                    — D'Angelo Vera
                  </p>
                  
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/30 hover:text-white/60 transition-colors underline underline-offset-4"
                  >
                    Want us to build it for you? Let's talk.
                  </a>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
                  <img 
                    src="/p1 white.png" 
                    alt="P1 Creative Logo" 
                    className="h-10 sm:h-12 w-auto opacity-40 hover:opacity-60 transition-opacity cursor-pointer"
                  />
                </a>
                <p className="text-sm mb-6 text-white/30">
                  P1 Creative
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  <Link to="/privacy-policy" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
                  <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
                  <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white/60 transition-colors">Contact</a>
                </div>
                <div className="text-xs uppercase tracking-wider text-white/20">
                  © 2025 P1 Creative. All rights reserved.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
