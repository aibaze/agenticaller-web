'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Home, Clock, CheckCircle, Star, Play, ArrowRight, Zap, Headphones, MessageSquare, Calendar, Award, TrendingUp, Building2, UserCheck, FileText, Target, Shield, Globe, MapPin, DollarSign, Users, PhoneCall, RefreshCw, Settings } from "lucide-react";
import { useState } from 'react';

export default function RealEstatePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const services = [
    {
      icon: <PhoneCall className="h-8 w-8 text-blue-600" />,
      title: "Inbound Lead Qualification",
      description: "Instantly qualify incoming leads with intelligent AI agents that ask the right questions and score prospects 24/7."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-green-600" />,
      title: "Outbound Lead Revival",
      description: "Re-engage cold leads with personalized AI conversations that bring prospects back into your sales pipeline."
    },
    {
      icon: <Phone className="h-8 w-8 text-purple-600" />,
      title: "Outbound Cold Calling",
      description: "Scale your prospecting with AI agents that make hundreds of calls daily, never getting tired or discouraged."
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Custom Builds",
      description: "Tailored AI solutions designed specifically for your real estate workflow and unique business requirements."
    }
  ];

  const features = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Property Matching",
      description: "AI agents understand property preferences and match leads with perfect listings automatically."
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Smart Scheduling",
      description: "Coordinate property viewings, open houses, and meetings with AI-powered calendar management."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Multi-Channel Communication",
      description: "Engage prospects across phone, SMS, and email with consistent messaging and follow-up."
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: "Lead Scoring & CRM",
      description: "Automatically score leads and update your CRM with detailed interaction history and next steps."
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Market Intelligence",
      description: "AI agents gather market data and provide insights to help you close more deals."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Performance Analytics",
      description: "Track conversion rates, response times, and ROI across all your AI-powered campaigns."
    }
  ];

  const benefits = [
    "Generate 3x more qualified leads",
    "Reduce follow-up time by 80%",
    "Increase conversion rates by 40%",
    "Scale operations without hiring",
    "24/7 lead qualification",
    "Never miss a hot prospect"
  ];

  const testimonials = [
    {
      name: "David Martinez",
      role: "Real Estate Broker",
      company: "Premier Properties",
      content: "Our AI agents qualify 50+ leads daily. We've increased our conversion rate from 15% to 28% in just 3 months.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Team Leader",
      company: "Elite Realty Group",
      content: "The outbound lead revival feature brought back 30% of our cold leads. It's like having a super-powered sales team.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Independent Agent",
      company: "Chen Real Estate",
      content: "I went from 5 to 25 qualified leads per week. The AI handles all the grunt work while I focus on closing deals.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7414947/pexels-photo-7414947.jpeg" 
            alt="Modern real estate office with city skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Transform Your Real Estate Business with AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Voice AI Agents for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300"> Real Estate</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Automate lead qualification, revive cold prospects, and scale your cold calling with intelligent voice agents. 
              Get a 2-week free trial of your workflow powered by AI, then scale to $500/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-red-900 hover:from-red-700 hover:to-red-950 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => document.getElementById('trial-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start 2-Week Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold transition-all duration-200"
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-300">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                Setup in under 10 minutes
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-400 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">3x</div>
              <div className="text-slate-600">More Qualified Leads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-700 mb-2">80%</div>
              <div className="text-slate-600">Faster Follow-up</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-800 mb-2">40%</div>
              <div className="text-slate-600">Higher Conversions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-900 mb-2">24/7</div>
              <div className="text-slate-600">Lead Qualification</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Four Powerful Services for Real Estate Success
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the services that fit your business needs, or get all four for maximum impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Dominate Real Estate
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI agents handle the repetitive tasks so you can focus on what matters most - closing deals and building relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              See AI Agents in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Watch how our voice AI agents handle real estate scenarios with natural conversations and intelligent responses.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900 to-red-800 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <Headphones className="h-16 w-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Interactive Demo</h3>
                <p className="text-slate-300">Experience the power of AI-powered real estate</p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              >
                {isVideoPlaying ? 'Pause Demo' : 'Start Demo'}
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Leading Real Estate Teams Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join hundreds of real estate professionals who've transformed their business with AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Real Estate Leaders
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what real estate professionals are saying about their experience with our AI agents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white border border-slate-200 shadow-lg">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  <div className="text-red-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trial Section */}
      <div id="trial-section" className="py-20 bg-gradient-to-br from-slate-900 to-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your 2-Week Free Trial Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Experience the future of real estate automation with no commitment. 
              Set up your AI agents in minutes and see results in days.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">2 Weeks</div>
                  <div className="text-slate-300">Free Trial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">$500</div>
                  <div className="text-slate-300">Per Month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">All Services</div>
                  <div className="text-slate-300">Included</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <div className="text-slate-400 text-sm">
                No credit card required • Setup in 10 minutes • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join the AI revolution in real estate. Get your free trial today and see the difference AI agents can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Schedule a Demo
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <Home className="h-8 w-8 text-red-400 mr-3" />
            <span className="text-2xl font-bold text-white">Agenticaller</span>
          </div>
          <p className="text-slate-400 mb-6">
            Empowering real estate professionals with AI-powered voice agents for smarter, faster, and more efficient lead generation.
          </p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
