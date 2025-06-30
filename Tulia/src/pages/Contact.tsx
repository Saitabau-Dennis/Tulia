import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-200 mb-8">
            <Mail className="w-5 h-5 text-primary-500" />
            <span className="text-primary-700 font-medium">Contact Tulia</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Get in Touch
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Email</h3>
                    <p className="text-neutral-600">support@tuliaapp.com</p>
                    <p className="text-neutral-500 text-sm mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Phone</h3>
                    <p className="text-neutral-600">+254 700 000 000</p>
                    <p className="text-neutral-500 text-sm mt-1">Monday - Friday, 9 AM - 5 PM EAT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Location</h3>
                    <p className="text-neutral-600">Nairobi, Kenya</p>
                    <p className="text-neutral-500 text-sm mt-1">Serving young people across East Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">WhatsApp Support</h3>
                    <p className="text-neutral-600">Send 'support' to our bot</p>
                    <p className="text-neutral-500 text-sm mt-1">Available 24/7 for immediate help</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-2xl border border-primary-200">
                <h3 className="font-semibold text-primary-800 mb-2">For Technical Issues</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  If you're experiencing technical problems with the WhatsApp bot, 
                  try sending 'support' directly to the bot first for immediate assistance.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-sm p-8 border border-neutral-100">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  icon={Send}
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8">Need Immediate Help?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a 
              href="https://wa.me/254700000000?text=support"
              className="bg-primary-50 hover:bg-primary-100 p-6 rounded-2xl border border-primary-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">WhatsApp Support</h3>
              <p className="text-neutral-600 text-sm">Get instant help through our bot</p>
            </a>

            <a 
              href="/crisis"
              className="bg-red-50 hover:bg-red-100 p-6 rounded-2xl border border-red-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Crisis Resources</h3>
              <p className="text-neutral-600 text-sm">Emergency mental health support</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;