import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PenTool, 
  Target, 
  Users, 
  TrendingUp, 
  Camera, 
  Megaphone,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Medical Content Creation",
    description: "Engaging, compliant content that builds trust with patients and establishes your expertise in the medical field.",
    features: ["Educational blog posts", "Social media content", "Patient testimonials", "Medical infographics"],
    color: "from-black to-gray-600"
  },
  {
    icon: Target,
    title: "Targeted Medical Advertising",
    description: "Precision-targeted ad campaigns that reach the right patients at the right time in your local Florida market.",
    features: ["Google Ads optimization", "Facebook & Instagram ads", "Local SEO campaigns", "Retargeting strategies"],
    color: "from-gray-800 to-black"
  },
  {
    icon: Camera,
    title: "Visual Content Production",
    description: "Professional photography and video content that showcases your practice and builds patient confidence.",
    features: ["Practice photography", "Patient story videos", "Educational content", "Virtual consultations"],
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Data-driven insights to continuously optimize your marketing efforts and maximize patient acquisition.",
    features: ["ROI tracking", "Patient journey analysis", "Conversion optimization", "Monthly reporting"],
    color: "from-gray-600 to-black"
  }
];

export default function Services() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-black text-white border-black">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Everything Your Medical Practice Needs to
            <span className="text-gray-600"> Thrive Online</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From content creation to targeted advertising, we handle every aspect of your digital marketing so you can focus on what you do best - caring for patients.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className="flex items-center text-black hover:text-gray-600 font-medium group-hover:translate-x-1 transition-transform">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}