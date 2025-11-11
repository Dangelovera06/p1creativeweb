import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average Patient Growth",
    description: "Within 6 months of working with us"
  },
  {
    icon: Users,
    value: "15,000+",
    label: "New Patients Generated",
    description: "Across all our Florida practices"
  },
  {
    icon: Target,
    value: "4.2x",
    label: "ROI Improvement",
    description: "On average across all campaigns"
  },
  {
    icon: DollarSign,
    value: "$2.3M",
    label: "Revenue Generated",
    description: "For our medical practice clients"
  }
];

export default function Results() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-black text-white border-black">
            Proven Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our data-driven approach delivers measurable results for medical practices across Florida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-black">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span>Updated in real-time • Last updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}