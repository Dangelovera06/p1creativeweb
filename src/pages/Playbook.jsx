import React from "react";
import { Link } from "react-router-dom";

import PlaybookHero from "../components/landing/playbook/PlaybookHero";
import Hero from "../components/landing/offer/Hero";
import HardTruth from "../components/landing/offer/HardTruth";
import WhatHappens from "../components/landing/offer/WhatHappens";
import EmotionalCore from "../components/landing/offer/EmotionalCore";
import Blueprint from "../components/landing/offer/Blueprint";
import FinalClose from "../components/landing/offer/FinalClose";
import Testimonials from "../components/landing/offer/Testimonials";
import WhatYouGet from "../components/landing/offer/WhatYouGet";
import SocialProof from "../components/landing/offer/SocialProof";
import CaseStudy from "../components/landing/offer/CaseStudy";
import CalendlyEmbed from "../components/landing/offer/CalendlyEmbed";

export default function Playbook() {
  const handleDownload = (e, location) => {
    // Track download event with Facebook Pixel
    if (window.fbq) {
      // Track as Lead event
      window.fbq('track', 'Lead', {
        content_name: `Playbook Download - ${location}`,
        content_category: 'Download',
        value: 0,
        currency: 'USD'
      });
      
      // Track custom PlaybookDownload event for better segmentation
      window.fbq('trackCustom', 'PlaybookDownload', {
        download_location: location,
        file_name: 'playbook.pdf',
        timestamp: new Date().toISOString()
      });
    }
    
    // Fire tracking pixel (1x1 transparent image for additional tracking platforms)
    const trackingPixel = new Image(1, 1);
    trackingPixel.src = `https://www.facebook.com/tr?id=614618117913023&ev=PlaybookDownload&cd[download_location]=${encodeURIComponent(location)}&noscript=1`;
    
    // Download the playbook file
    const link = document.createElement('a');
    link.href = '/playbook.pdf';
    link.download = 'playbook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-950">
      {/* Floating Navigation Header - Visible Throughout Site */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-4 relative">
          {/* Logo and Name - Left */}
          <div className="flex items-center gap-1.5">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Offer Text - Center (Absolutely Centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block text-xs sm:text-sm font-bold tracking-widest text-white/60 uppercase whitespace-nowrap">
            Limited Spots Available
          </div>

          {/* CTA Button - Right */}
          <button
            onClick={(e) => handleDownload(e, 'Header')}
            className="px-4 py-2 bg-white text-black font-light text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            GET PLAYBOOK
          </button>
        </div>
      </header>

      <PlaybookHero />
      <SocialProof />
      <CaseStudy />
      <Testimonials />
      <WhatYouGet onCTAClick={handleDownload} ctaText="Get Free Playbook" />
      <HardTruth onCTAClick={handleDownload} ctaText="Get Free Playbook" />
      <WhatHappens />
      <EmotionalCore />
      <Blueprint onCTAClick={handleDownload} ctaText="Get Free Playbook" />
      <FinalClose onCTAClick={handleDownload} ctaText="Get Free Playbook" />
      <CalendlyEmbed />

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

