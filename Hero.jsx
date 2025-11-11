import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Star } from "lucide-react";

export default function Hero() {
  const openCalendly = () => {
    window.open('https://calendly.com/p1creative/30min', '_blank');
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-center px-6 py-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex items-center space-x-3">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/737c3d1dd_P1CreativeBlackonWhiteWords.png"
            alt="P1 Creative Logo"
            className="h-8 md:h-10 w-auto"
          />
          <div className="border-l border-gray-300 pl-3">
            <div className="text-sm text-gray-600 font-semibold">Content Agency</div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-12 mx-auto text-center max-w-7xl md:py-20 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-black text-white border-black">
                <Star className="w-4 h-4 mr-1" />
                #1 Medical Content Agency
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                The Fastest Path to Becoming the
                <span className="text-gray-600"> #1 Brand in Your City</span>
              </h1>
              <p className="text-lg text-gray-700 md:text-xl leading-relaxed">
                We specialize in content creation and advertising strategies designed specifically for medical practices in Florida. Get more patients, build trust, and grow your practice with our proven approach.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openCalendly}
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-black" />
                <div>
                  <div className="text-2xl font-bold text-black">250+</div>
                  <div className="text-sm text-gray-600">Medical Practices</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-black fill-current" />
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">4.9/5</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative z-10 max-w-4xl mx-auto">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/802b17797_7b94a3b88da63def1809c0a80c5a3e2d.jpg"
                alt="Modern medical practice interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-black rounded-full opacity-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gray-600 rounded-full opacity-10 hidden md:block"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden hidden md:block">
        <div className="absolute top-20 left-20 w-72 h-72 bg-black rounded-full opacity-3 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-600 rounded-full opacity-3 blur-3xl"></div>
      </div>
    </div>
  );
}