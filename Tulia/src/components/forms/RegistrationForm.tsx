import React, { useState } from 'react';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

interface FormData {
  fullName: string;
  age: string;
  country: string;
  phoneNumber: string;
  emergencyContact: string;
}

interface RegistrationFormProps {
  onSubmit: (data: FormData) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    country: 'Kenya',
    phoneNumber: '',
    emergencyContact: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const countries = [
    'Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Burundi', 'Ethiopia', 'Somalia',
    'South Sudan', 'Democratic Republic of Congo', 'Other'
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(formData.age) < 13 || parseInt(formData.age) > 30) {
      newErrors.age = 'Age must be between 13 and 30';
    }
    
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-neutral-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-700 mb-2">
            Full Name <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800 placeholder-neutral-400"
          />
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-semibold text-neutral-700 mb-2">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            min="13"
            max="30"
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 text-neutral-800 placeholder-neutral-400 ${
              errors.age 
                ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                : 'border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100'
            }`}
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-neutral-700 mb-2">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800 bg-white"
          >
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold text-neutral-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="+254 700 000 000"
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 text-neutral-800 placeholder-neutral-400 ${
              errors.phoneNumber 
                ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                : 'border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100'
            }`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          <p className="text-neutral-500 text-sm mt-1">
            This will be used to connect you with our WhatsApp bot
          </p>
        </div>

        {/* Emergency Contact */}
        <div>
          <label htmlFor="emergencyContact" className="block text-sm font-semibold text-neutral-700 mb-2">
            Emergency Contact <span className="text-neutral-400 font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="emergencyContact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleInputChange}
            placeholder="+254 700 000 000"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-400 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-neutral-800 placeholder-neutral-400"
          />
          <p className="text-neutral-500 text-sm mt-1">
            A trusted person we can contact in case of emergency
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          icon={ArrowRight}
          className="w-full"
        >
          Connect to Tulia WhatsApp Bot
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;