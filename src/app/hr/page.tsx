'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Users, Clock, CheckCircle, Star, Play, ArrowRight, Zap, Headphones, MessageSquare, Calendar, Award, TrendingUp, Building2, UserCheck, FileText, Target, Shield, Globe } from "lucide-react";
import { useState } from 'react';

export default function HRPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Candidate Screening",
      description: "Automate initial candidate assessments with intelligent voice agents that never get tired or biased."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "24/7 Candidate Communication",
      description: "Engage candidates anytime with natural conversations that feel human and professional."
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      title: "Smart Interview Scheduling",
      description: "Automatically coordinate calendars and send reminders, reducing no-shows by up to 80%."
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: "Automated Documentation",
      description: "Generate interview summaries, candidate reports, and compliance documentation instantly."
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Skill Assessment",
      description: "Conduct technical interviews and skill evaluations with AI agents that adapt to your requirements."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Performance Analytics",
      description: "Track hiring metrics, candidate pipeline health, and team productivity in real-time."
    }
  ];

  const benefits = [
    "Reduce time-to-hire by 60%",
    "Cut recruitment costs by 40%",
    "Improve candidate experience",
    "Eliminate scheduling conflicts",
    "Scale your team without hiring",
    "Maintain consistent quality"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent Acquisition",
      company: "TechFlow Solutions",
      content: "Our AI agents handle 200+ initial screenings per week. We've reduced our time-to-hire from 3 weeks to 5 days.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Recruitment Director",
      company: "Global Staffing Inc.",
      content: "The voice AI agents are indistinguishable from humans. Our candidates love the 24/7 availability and quick responses.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "HR Manager",
      company: "InnovateCorp",
      content: "We've automated 80% of our repetitive tasks. Our recruiters can now focus on building relationships and closing deals.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hr-hero.png')",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Transform Your HR Operations with AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Voice AI Agents for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> HR & Recruiting</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Automate your entire recruitment workflow with intelligent voice agents. 
              Get a 2-week free trial of your workflow powered by AI, then scale to $500/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
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
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                Setup in under 10 minutes
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
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
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-slate-600">Faster Time-to-Hire</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-slate-600">Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-slate-600">Candidate Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
              <div className="text-slate-600">Task Automation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Scale Your HR Operations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI agents handle the repetitive tasks so your team can focus on what matters most - building relationships and making strategic decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
              Watch how our voice AI agents handle real recruitment scenarios with natural conversations and intelligent responses.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <Headphones className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">Interactive Demo</h3>
                <p className="text-slate-300">Experience the power of AI-powered recruitment</p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold"
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
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Leading HR Teams Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Join hundreds of HR professionals who&apos;ve transformed their recruitment process with AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
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
              Trusted by HR Leaders
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what HR professionals are saying about their experience with our AI agents.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-lg">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-slate-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Trial Section */}
      <div id="trial-section" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your 2-Week Free Trial Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Experience the future of HR automation with no commitment. 
              Set up your AI agents in minutes and see results in days.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">2 Weeks</div>
                  <div className="text-slate-300">Free Trial</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">$500</div>
                  <div className="text-slate-300">Per Month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">Unlimited</div>
                  <div className="text-slate-300">AI Agents</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
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
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the AI revolution in HR. Get your free trial today and see the difference AI agents can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Schedule a Demo
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-200"
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
            <Building2 className="h-8 w-8 text-blue-400 mr-3" />
            <span className="text-2xl font-bold text-white">Agenticaller</span>
          </div>
          <p className="text-slate-400 mb-6">
            Empowering HR teams with AI-powered voice agents for smarter, faster, and more efficient recruitment.
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
