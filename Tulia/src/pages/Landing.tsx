import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, BookOpen, Users, UserCheck, ArrowRight, Shield, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import FeatureCard from '../components/ui/FeatureCard';
import StepCard from '../components/ui/StepCard';
import FAQ from '../components/layout/FAQ';
import Footer from '../components/layout/Footer';

const Landing = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Anonymous Sharing",
      description: "Share your thoughts and feelings anonymously through our WhatsApp bot in a safe, supportive environment."
    },
    {
      icon: BookOpen,
      title: "Private Journaling",
      description: "Track your emotional journey with guided journaling prompts through WhatsApp that help you process your feelings."
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with other young people through our WhatsApp bot who understand your struggles and celebrate your victories."
    },
    {
      icon: UserCheck,
      title: "Therapist Access",
      description: "Get professional support from qualified mental health therapists through our premium WhatsApp service when needed."
    }
  ];

  const steps = [
    {
      icon: Heart,
      step: 1,
      title: "Register",
      description: "Complete our simple, secure registration form with just the basic information we need to get you started."
    },
    {
      icon: MessageCircle,
      step: 2,
      title: "Connect",
      description: "We'll connect you to our intelligent WhatsApp bot that provides 24/7 support and peer connections."
    },
    {
      icon: BookOpen,
      step: 3,
      title: "Start Healing",
      description: "Begin journaling, sharing, and connecting with others through our WhatsApp bot support system."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      age: 19,
      quote: "Tulia's WhatsApp bot gave me a safe space to share my anxiety struggles. The anonymous support helped me feel less alone.",
      location: "Nairobi, Kenya"
    },
    {
      name: "David K.",
      age: 22,
      quote: "The journaling feature through WhatsApp helped me track my mood patterns. Having access to therapists made getting help easier.",
      location: "Mombasa, Kenya"
    },
    {
      name: "Grace W.",
      age: 20,
      quote: "The peer support through Tulia's WhatsApp bot has been incredible. It's like having friends who truly understand, available anytime.",
      location: "Kisumu, Kenya"
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section - Supabase Style */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20 pb-16">
        {/* Minimal Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Supabase-style Main Headline */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-[0.9] mb-6 tracking-tight font-poppins">
              <span className="block">Heal in</span>
              <span className="block text-blue-600">a moment</span>
              <span className="block">Scale to</span>
              <span className="block text-slate-900">wellness</span>
            </h1>
          </div>
          
          {/* Clean Subheading */}
          <div className="mb-10 max-w-3xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-light font-poppins">
              Tulia is the mental health support platform.<br/>
              Start your journey with anonymous support, private journaling, 
              professional therapy, and peer connections through WhatsApp.
            </p>
          </div>
          
          {/* Simple CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-lg hover:shadow-xl font-poppins">
                Start your journey
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 px-7 py-3 rounded-lg text-base font-semibold transition-all duration-200 font-poppins">
                Learn more
              </button>
            </Link>
          </div>

          {/* Sliding Trust Indicators - Supabase Style */}
          <div className="mb-8">
            <p className="text-sm text-slate-500 mb-6 font-medium font-poppins">Trusted by young people across East Africa</p>
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left items-center gap-12 opacity-60">
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">24/7 Support</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">100% Anonymous</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Professional Therapists</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Peer Community</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Free to Start</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">WhatsApp Integration</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Crisis Support</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Mental Health Experts</div>
                {/* Duplicate for seamless loop */}
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">24/7 Support</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">100% Anonymous</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Professional Therapists</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Peer Community</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Free to Start</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">WhatsApp Integration</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Crisis Support</div>
                <div className="text-slate-400 font-semibold font-poppins whitespace-nowrap">Mental Health Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section - Supabase Style */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Feature Heading */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-poppins">
              Everything you need for
              <span className="block text-blue-600">
                mental wellness
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light font-poppins">
              Professional mental health support designed specifically for young people, accessible through WhatsApp.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Use with any platform section */}
          <div className="text-center mt-24">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-poppins">
              Available on your favorite platform
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-slate-500 font-semibold font-poppins">WhatsApp</div>
              <div className="text-slate-500 font-semibold font-poppins">Web Portal</div>
              <div className="text-slate-500 font-semibold font-poppins">Mobile App</div>
              <div className="text-slate-500 font-semibold font-poppins">SMS Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Supabase Style */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-2 rounded-full mb-6 border border-blue-200">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-semibold font-poppins">Simple Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
              How Tulia
              <span className="block text-blue-600">
                Works
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-poppins font-light">
              Getting started with professional mental health support is simple and secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/register">
              <Button size="lg" icon={ArrowRight} className="px-10 py-5 bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 rounded-xl text-lg font-semibold font-poppins">
                Begin Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - Supabase Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-poppins">
              Get started in
              <span className="block text-blue-600">
                3 simple steps
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light font-poppins">
              Professional mental health support is just moments away. Here's how to begin your wellness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl font-poppins">
                Start your journey today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-poppins">
              Trusted by young people
              <span className="block text-blue-600">
                across East Africa
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light font-poppins">
              Real experiences from young people who found support and healing through Tulia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex text-blue-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed italic font-poppins">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <p className="font-bold text-slate-800 font-poppins">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 font-poppins">Age {testimonial.age}</p>
                  </div>
                  <p className="text-sm text-slate-500 font-poppins">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section - Supabase Style */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-poppins">
            Start your healing
            <span className="block text-blue-400">
              journey today
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light font-poppins">
            Join thousands of young people who have found support and healing through Tulia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl font-poppins">
                Start your project
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent hover:bg-slate-800 text-slate-300 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 font-poppins">
                Request a demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;