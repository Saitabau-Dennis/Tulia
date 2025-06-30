import React from 'react';
import { AlertTriangle, Phone, Heart, Clock } from 'lucide-react';
import Footer from '../components/layout/Footer';

const Crisis = () => {
  const crisisResources = [
    {
      name: "Kenya Red Cross",
      number: "1199",
      description: "Free 24/7 crisis support and emergency services",
      availability: "24/7"
    },
    {
      name: "Befrienders Kenya",
      number: "+254 722 178 177",
      description: "Emotional support and suicide prevention helpline",
      availability: "24/7"
    },
    {
      name: "Amani Counselling Centre",
      number: "+254 722 714 990",
      description: "Professional counseling and crisis intervention",
      availability: "Mon-Fri 8AM-6PM"
    },
    {
      name: "Emergency Services",
      number: "999 or 112",
      description: "Police, ambulance, and fire emergency services",
      availability: "24/7"
    }
  ];

  const warningSigns = [
    "Thoughts of hurting yourself or others",
    "Feeling hopeless or trapped",
    "Severe mood swings or sudden changes in behavior",
    "Withdrawing from friends and activities",
    "Talking about death or suicide",
    "Giving away possessions",
    "Increased use of alcohol or drugs",
    "Feeling like a burden to others"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full border border-red-200 mb-8">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-medium">Crisis Resources</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            In a Crisis?
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-8">
            If you're in immediate danger or having thoughts of self-harm, please reach out for help immediately. 
            You are not alone, and there are people who want to help.
          </p>

          <div className="bg-red-100 border border-red-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-red-800 font-semibold text-lg mb-2">
              Important: Tulia is not a crisis line
            </p>
            <p className="text-red-700">
              If you're in urgent danger, please contact the emergency services below or go to your nearest hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Emergency Contacts</h2>
            <p className="text-lg text-neutral-600">These services are available when you need immediate help</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crisisResources.map((resource, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{resource.name}</h3>
                    <a 
                      href={`tel:${resource.number}`}
                      className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors block mb-2"
                    >
                      {resource.number}
                    </a>
                    <p className="text-neutral-600 mb-2">{resource.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{resource.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Warning Signs to Watch For</h2>
            <p className="text-lg text-neutral-600">If you or someone you know is experiencing these signs, please seek help</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">You Matter</h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Your life has value and meaning. Even in the darkest moments, there is hope. 
            Reaching out for help is a sign of strength, not weakness.
          </p>

          <div className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl mx-auto border border-neutral-100">
            <h3 className="text-lg font-semibold text-neutral-800 mb-3">Remember:</h3>
            <ul className="text-left space-y-2 text-neutral-700">
              <li>• Crisis feelings are temporary</li>
              <li>• You are not alone in this struggle</li>
              <li>• Help is available 24/7</li>
              <li>• Many people have felt this way and recovered</li>
              <li>• Your story isn't over yet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Additional Support</h2>
            <p className="text-lg text-neutral-600">Other ways to get help and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-800 mb-2">Visit a Hospital</h3>
              <p className="text-neutral-600 text-sm">Go to the nearest hospital emergency room if you're in immediate danger</p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-800 mb-2">Tell Someone You Trust</h3>
              <p className="text-neutral-600 text-sm">Reach out to a family member, friend, teacher, or counselor</p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-800 mb-2">Online Resources</h3>
              <p className="text-neutral-600 text-sm">Visit mental health websites for additional support and information</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Crisis;