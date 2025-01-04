import React from 'react';
import { TrendingUp } from 'lucide-react';
import { calculateTotalGrowth } from '../services/energyData';

interface TrendAnalysisProps {
  historicalData: any[];
  projectedData: any[];
}

export const TrendAnalysis: React.FC<TrendAnalysisProps> = ({ historicalData, projectedData }) => {
  const historicalGrowth = calculateTotalGrowth(historicalData);
  const projectedGrowth = calculateTotalGrowth(projectedData);

  return (
    <div className="bg-white/50 p-6 rounded-xl border border-blue-100">
      <h3 className="font-semibold text-gray-800 text-lg mb-4">
        Growth Analysis
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Historical Growth (2014-2023)</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-yellow-600">Solar</span>
              <span className="font-semibold">+{historicalGrowth.solar}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-600">Wind</span>
              <span className="font-semibold">+{historicalGrowth.wind}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-600">Hydro</span>
              <span className="font-semibold">+{historicalGrowth.hydro}%</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-3">Projected Growth (2024-2033)</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-yellow-600">Solar</span>
              <span className="font-semibold">+{projectedGrowth.solar}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-600">Wind</span>
              <span className="font-semibold">+{projectedGrowth.wind}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-green-600">Hydro</span>
              <span className="font-semibold">+{projectedGrowth.hydro}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};