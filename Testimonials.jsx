import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Martinez",
    practice: "Miami Dermatology Center",
    location: "Miami, FL",
    rating: 5,
    text: "P1 Creative transformed our online presence completely. We've seen a 400% increase in new patient inquiries within just 4 months. Their understanding of medical marketing compliance is exceptional.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Dr. Michael Chen",
    practice: "Orlando Family Medicine",
    location: "Orlando, FL",
    rating: 5,
    text: "The content they create is both educational and engaging. Our patients frequently mention how helpful our social media posts are. The ROI on our advertising campaigns has been outstanding.",
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Dr. Emily Carter",
    practice: "Sunshine Dental Group",
    location: "Boca Raton, FL",
    rating: 5,
    text: "Working with P1 Creative has been a game-changer for our dental practice. They understand the unique challenges of marketing and deliver results that matter. Highly recommended.",
    avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-black text-white border-black">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            What Florida Medical Practices 
            <span className="text-gray-600"> Say About Us</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with P1 Creative.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-black fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-300" />
                    <p className="text-gray-700 leading-relaxed pl-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.practice}</div>
                      <div className="text-sm text-gray-700">{testimonial.location}</div>
                    </div>
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