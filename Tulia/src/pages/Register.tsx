import React, { useState } from 'react';
import { Heart, MessageCircle, CheckCircle } from 'lucide-react';
import RegistrationForm from '../components/forms/RegistrationForm';
import Button from '../components/ui/Button';
import { RegistrationFormData } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { APP_CONFIG } from '../constants';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (formData: RegistrationFormData) => {
    // Here you would typically send the data to your backend
    console.log('Registration data:', formData);
    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const message = "Hi Tulia! I just registered and I'm ready to start my mental health journey with your WhatsApp bot. Looking forward to connecting!";
    openWhatsApp(APP_CONFIG.WHATSAPP_NUMBER, message);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-neutral-100">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-subtle">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Welcome to Tulia!
            </h1>
            
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Thanks for registering! We're excited to have you start your mental health journey with our WhatsApp bot. 
              Tap the button below to open WhatsApp and begin your Tulia experience.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-primary-50 rounded-xl p-4 border border-primary-200">
                <h3 className="font-semibold text-primary-800 mb-2">What happens next?</h3>
                <ul className="text-primary-700 text-left space-y-1">
                  <li>• You'll connect with our intelligent WhatsApp bot</li>
                  <li>• Start journaling privately and get peer support for free</li>
                  <li>• Access premium therapist sessions when needed</li>
                  <li>• Begin your mental health journey with 24/7 support</li>
                </ul>
              </div>
            </div>
            
            <Button 
              size="lg" 
              icon={MessageCircle}
              onClick={handleOpenWhatsApp}
              className="w-full md:w-auto mb-4"
            >
              Open WhatsApp & Connect to Bot
            </Button>
            
            <p className="text-sm text-neutral-500 mt-4">
              Don't have WhatsApp? Download it from your app store first, then come back and click the button above.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-neutral-800">Tulia</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Join Our WhatsApp Support Experience
          </h1>
          <p className="text-lg text-neutral-600 max-w-lg mx-auto">
            Complete this simple form to start your mental health journey with Tulia's WhatsApp bot. 
            All information is kept private and secure.
          </p>
        </div>

        {/* Form */}
        <RegistrationForm onSubmit={handleFormSubmit} />

        {/* Privacy Notice */}
        <div className="mt-8 p-6 bg-primary-50 rounded-2xl border border-primary-200">
          <p className="text-primary-800 text-sm leading-relaxed">
            <Heart className="w-4 h-4 inline mr-2" />
            Your privacy is important to us. This information is used only to provide you with 
            mental health support through our WhatsApp bot and will never be shared without your consent.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-neutral-600 text-sm max-w-md mx-auto">
            By joining Tulia, you're taking an important step in your mental health journey. 
            Our WhatsApp bot is here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;