import React from 'react';

interface CountryStatsProps {
  data: Array<{
    gdpGrowth: number;
    renewableInvestment: number;
    jobsCreated: number;
    costSavings: number;
  }>;
}

export const CountryStats: React.FC<CountryStatsProps> = ({ data }) => {
  const stats = data.reduce((acc, curr) => ({
    totalInvestment: acc.totalInvestment + curr.renewableInvestment,
    totalJobs: acc.totalJobs + curr.jobsCreated,
    avgGrowth: acc.avgGrowth + curr.gdpGrowth / data.length,
    totalSavings: acc.totalSavings + curr.costSavings
  }), {
    totalInvestment: 0,
    totalJobs: 0,
    avgGrowth: 0,
    totalSavings: 0
  });

  const statItems = [
    { key: 'totalInvestment', label: 'Total Investment', value: `$${stats.totalInvestment.toFixed(1)}B` },
    { key: 'totalJobs', label: 'Total Jobs Created', value: `${(stats.totalJobs / 1000000).toFixed(1)}M` },
    { key: 'avgGrowth', label: 'Average GDP Growth', value: `${stats.avgGrowth.toFixed(1)}%` },
    { key: 'totalSavings', label: 'Total Cost Savings', value: `$${stats.totalSavings.toFixed(1)}B` }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map(({ key, label, value }) => (
        <div key={key} className="bg-white/50 p-4 rounded-lg border border-gray-200">
          <h4 className="text-sm font-medium text-gray-500 mb-2">{label}</h4>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      ))}
    </div>
  );
};