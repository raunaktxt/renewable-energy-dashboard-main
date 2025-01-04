import React from 'react';
import { TrendingUp, Users, Coins, Building } from 'lucide-react';

interface CountryTableProps {
  data: Array<{
    country: string;
    gdpGrowth: number;
    renewableInvestment: number;
    jobsCreated: number;
    costSavings: number;
  }>;
}

export const CountryTable: React.FC<CountryTableProps> = ({ data }) => {
  return (
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
          {data.map((country) => (
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
  );
};