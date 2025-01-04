import React from 'react';
import { TrendingUp, Users, Coins, Building } from 'lucide-react';
import { countryGrowthData } from '../services/countryData';

export const CountryGrowthSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                GDP Growth
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Investment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jobs Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost Savings
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {countryGrowthData.map((country) => (
              <tr key={country.country} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{country.country}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-green-600">+{country.gdpGrowth}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Coins className="w-4 h-4 text-blue-500 mr-2" />
                    <span>${country.renewableInvestment}B</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-purple-500 mr-2" />
                    <span>{(country.jobsCreated / 1000).toFixed(0)}K</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Building className="w-4 h-4 text-indigo-500 mr-2" />
                    <span>${country.costSavings}B</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(countryGrowthData.reduce((acc, curr) => ({
          totalInvestment: (acc.totalInvestment || 0) + curr.renewableInvestment,
          totalJobs: (acc.totalJobs || 0) + curr.jobsCreated,
          avgGrowth: (acc.avgGrowth || 0) + curr.gdpGrowth / countryGrowthData.length,
          totalSavings: (acc.totalSavings || 0) + curr.costSavings
        }), {} as any)).map(([key, value]) => (
          <div key={key} className="bg-white/50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-sm font-medium text-gray-500 mb-2">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </h4>
            <p className="text-2xl font-bold text-gray-900">
              {key.includes('total') ? 
                `$${value.toFixed(1)}B` : 
                key.includes('jobs') ? 
                  `${(value / 1000000).toFixed(1)}M` :
                  `${value.toFixed(1)}%`
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};