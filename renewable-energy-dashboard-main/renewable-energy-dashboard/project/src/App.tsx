import React from 'react';
import { DashboardCard } from './components/DashboardCard';
import { HistoricalProjectedChart } from './components/HistoricalProjectedChart';
import { TrendAnalysis } from './components/TrendAnalysis';
import { CountryGrowthSection } from './components/CountryGrowthSection';
import { AdoptionTips } from './components/AdoptionTips';
import { CostBenefitSection } from './components/CostBenefitSection';
import { Sun, Wind, Droplet, Leaf } from 'lucide-react';
import { getEnergyData } from './services/energyData';

export default function App() {
  const { historical, projected, combined } = getEnergyData();
  const currentData = historical[historical.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Renewable Energy Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Solar Energy" gradient="from-yellow-50 to-orange-50" borderColor="border-yellow-200">
            <div className="flex items-center justify-between">
              <Sun className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-900">{currentData.solar} kWh</span>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Wind Energy" gradient="from-blue-50 to-indigo-50" borderColor="border-blue-200">
            <div className="flex items-center justify-between">
              <Wind className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-gray-900">{currentData.wind} kWh</span>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Hydro Energy" gradient="from-green-50 to-emerald-50" borderColor="border-green-200">
            <div className="flex items-center justify-between">
              <Droplet className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-gray-900">{currentData.hydro} kWh</span>
            </div>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DashboardCard
            title="Historical & Projected Energy Generation (2014-2033)"
            className="col-span-full"
            gradient="from-white to-gray-50"
            borderColor="border-gray-200"
          >
            <HistoricalProjectedChart data={combined} />
          </DashboardCard>

          <DashboardCard
            title="Country Financial Growth"
            className="col-span-full"
            gradient="from-indigo-50 to-purple-50"
            borderColor="border-indigo-200"
          >
            <CountryGrowthSection />
          </DashboardCard>

          <DashboardCard
            title="Trend Analysis"
            gradient="from-blue-50 to-indigo-50"
            borderColor="border-blue-200"
          >
            <TrendAnalysis historicalData={historical} projectedData={projected} />
          </DashboardCard>

          <DashboardCard
            title="Cost Benefits"
            gradient="from-green-50 to-emerald-50"
            borderColor="border-green-200"
          >
            <CostBenefitSection />
          </DashboardCard>
        </div>
      </main>
    </div>
  );
}