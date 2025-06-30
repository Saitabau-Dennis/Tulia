import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 border border-secondary-100 group hover:scale-105">
      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-primary-600" />
      </div>
      <h3 className="text-xl font-bold text-secondary-900 mb-4">{title}</h3>
      <p className="text-secondary-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;