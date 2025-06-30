import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, step, title, description }) => {
  return (
    <div className="text-center group">
      <div className="relative inline-block mb-6">
        <div className="w-20 h-20 bg-primary-500 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-soft">
          {step}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-secondary-900 mb-4">{title}</h3>
      <p className="text-secondary-600 leading-relaxed max-w-sm mx-auto">{description}</p>
    </div>
  );
};

export default StepCard;