import React from 'react';
import { TrendingUp, DollarSign, Clock } from 'lucide-react';

export const CostBenefitSection: React.FC = () => {
  return (
    <div className="bg-white/50 p-6 rounded-xl border border-green-100">
      <h3 className="font-semibold text-green-800 text-lg mb-4">Cost Benefits Analysis</h3>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <DollarSign className="w-5 h-5 text-green-600" />
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-700">Monthly Savings</p>
            <p className="text-2xl font-bold text-green-600">$350</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-700">ROI</p>
            <p className="text-2xl font-bold text-green-600">125%</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-700">Payback Period</p>
            <p className="text-2xl font-bold text-green-600">3.5 years</p>
          </div>
        </div>
      </div>
    </div>
  );
};