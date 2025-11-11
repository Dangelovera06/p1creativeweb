import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Send,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        practice: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/p1creative/30min', '_blank');
  };

  if (isSubmitted) {
    return (
      <div id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
                    <p className="text-gray-700">
                      We've received your message and will get back to you within 24 hours to discuss how we can help grow your medical practice.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4 border-black text-black hover:bg-black hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="bg-black text-white border-black">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Ready to Transform Your
            <span className="text-gray-600"> Medical Practice?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss how P1 Creative can help you attract more patients and grow your practice with our proven marketing strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-6">Get Started Today</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Dr. John Smith"
                        className="w-full border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="doctor@practice.com"
                        className="w-full border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Practice Name *
                      </label>
                      <Input
                        name="practice"
                        value={formData.practice}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Medical Practice"
                        className="w-full border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(555) 123-4567"
                        className="w-full border-gray-300 focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      How can we help you?
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your practice and marketing goals..."
                      rows={4}
                      className="w-full border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Get Your Free Strategy Session
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Phone</div>
                      <div className="text-gray-700">(561) 446-2301</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Email</div>
                      <div className="text-gray-700">info@flozyagency.io</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Location</div>
                      <div className="text-gray-700">Florida, USA</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Response Time</div>
                      <div className="text-gray-700">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Book a Free Consultation</h3>
                <p className="text-gray-700 mb-6">
                  Ready to discuss your medical practice's marketing needs? Schedule a free 30-minute consultation with our team.
                </p>
                <Button 
                  onClick={openCalendly}
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-full"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Free Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-black mb-4">Why Choose P1 Creative?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Specialized in medical practice marketing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">HIPAA compliant strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Proven results across Florida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-gray-700">Dedicated account management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}