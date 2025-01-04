import React from 'react';
import { CountryTable } from './CountryTable';
import { CountryStats } from './CountryStats';
import { countryGrowthData } from '../../services/countryData';

export const CountryGrowthSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <CountryTable data={countryGrowthData} />
      <CountryStats data={countryGrowthData} />
    </div>
  );
};