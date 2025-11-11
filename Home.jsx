import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp, 
  Target,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Play
} from "lucide-react";

import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import Results from "../components/landing/Results";
import Testimonials from "../components/landing/Testimonials";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Results />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}