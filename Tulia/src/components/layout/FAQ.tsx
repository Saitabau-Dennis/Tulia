import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is Tulia anonymous?",
    answer: "Yes, Tulia is designed with your privacy in mind. You can share anonymously through our WhatsApp bot, and your personal information is kept secure. Only you decide what to share and when."
  },
  {
    question: "Do I have to pay?",
    answer: "Accessing peer support and journaling through our WhatsApp bot is completely free. Therapist sessions are a premium service and require a small fee to unlock professional counseling support."
  },
  {
    question: "Can I talk to a real therapist?",
    answer: "Absolutely! Tulia's WhatsApp bot can connect you with qualified mental health professionals when needed. This is a premium feature that provides personalized therapeutic support."
  },
  {
    question: "How does the WhatsApp bot work?",
    answer: "After registration, you'll interact with our intelligent WhatsApp bot that helps you journal privately, connects you with peers for support, and provides access to mental health resources. The bot is available 24/7 for your convenience."
  },
  {
    question: "Is my data safe?",
    answer: "Your privacy and security are our top priorities. We follow strict data protection protocols and never share your personal information without your explicit consent. All conversations with the bot are encrypted and secure."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-secondary-50 px-4 py-2 rounded-full border border-secondary-200 mb-6">
            <HelpCircle className="w-5 h-5 text-secondary-500" />
            <span className="text-secondary-700 font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers. Learn more about how Tulia's WhatsApp bot works and what to expect.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-secondary-50/50 rounded-2xl shadow-soft border border-secondary-100/50 overflow-hidden hover:shadow-medium transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary-100/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-secondary-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-secondary-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 animate-slide-down">
                  <p className="text-secondary-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;