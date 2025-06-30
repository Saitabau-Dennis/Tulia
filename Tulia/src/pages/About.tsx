import React from 'react';
import { Heart, Users, Shield, MessageCircle } from 'lucide-react';
import Footer from '../components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-200 mb-8">
            <Heart className="w-5 h-5 text-primary-500" />
            <span className="text-primary-700 font-medium">About Tulia</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Mental Health Support Made Simple
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Tulia is a youth-focused mental health platform designed to help you express, reflect, and heal — right from your phone.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-neutral-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We use a secure WhatsApp bot to let you journal anonymously, get encouragement from peers, and even access counseling when needed. Our mission is to make emotional support simple, stigma-free, and accessible to every young person.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Mental health challenges shouldn't be faced alone, especially for young people navigating life's complexities. Tulia bridges the gap between needing support and accessing it, using technology that's already in your pocket.
              </p>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Privacy First</h3>
                  <p className="text-neutral-600">
                    Your conversations are encrypted and anonymous. Share as much or as little as you're comfortable with.
                  </p>
                </div>

                <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
                  <div className="w-12 h-12 bg-secondary-300 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Peer Support</h3>
                  <p className="text-neutral-600">
                    Connect with others who understand your journey. Sometimes knowing you're not alone makes all the difference.
                  </p>
                </div>

                <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Always Available</h3>
                  <p className="text-neutral-600">
                    Our WhatsApp bot is available 24/7. Journal your thoughts, seek support, or just check in whenever you need.
                  </p>
                </div>

                <div className="bg-secondary-50 p-6 rounded-2xl border border-secondary-100">
                  <div className="w-12 h-12 bg-secondary-300 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">Professional Care</h3>
                  <p className="text-neutral-600">
                    When you need more support, our qualified therapists are available through our premium service.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Our Vision</h3>
                <p className="text-neutral-700 leading-relaxed">
                  We envision a world where every young person has immediate access to mental health support, 
                  where seeking help is normalized, and where technology serves as a bridge to healing rather than a barrier. 
                  Tulia is our contribution to making mental health care as accessible as sending a text message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;