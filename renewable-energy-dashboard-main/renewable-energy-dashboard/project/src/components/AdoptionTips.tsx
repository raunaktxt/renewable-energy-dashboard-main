import React from 'react';
import { AdoptionTip } from '../types/energy';
import { Lightbulb, Battery, Wind } from 'lucide-react';

interface AdoptionTipsProps {
  tips: AdoptionTip[];
}

export const AdoptionTips: React.FC<AdoptionTipsProps> = ({ tips }) => {
  const getIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return <Lightbulb className="w-6 h-6 text-green-500" />;
      case 'Medium':
        return <Battery className="w-6 h-6 text-yellow-500" />;
      case 'Hard':
        return <Wind className="w-6 h-6 text-red-500" />;
      default:
        return <Lightbulb className="w-6 h-6 text-green-500" />;
    }
  };

  return (
    <div className="grid gap-6">
      {tips.map((tip) => (
        <div
          key={tip.id}
          className="flex items-start gap-4 p-5 bg-white/50 rounded-xl border border-blue-100 transition-all duration-300 hover:shadow-sm"
        >
          <div className="p-3 bg-white rounded-lg shadow-sm">
            {getIcon(tip.difficulty)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-lg">{tip.title}</h3>
            <p className="text-gray-600 mt-2">{tip.description}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Savings: {tip.estimatedSavings}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {tip.difficulty} Difficulty
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};