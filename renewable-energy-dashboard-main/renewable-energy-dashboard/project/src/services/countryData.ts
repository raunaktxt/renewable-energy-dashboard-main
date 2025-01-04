interface CountryGrowth {
  country: string;
  gdpGrowth: number;
  renewableInvestment: number;
  jobsCreated: number;
  costSavings: number;
}

export const countryGrowthData: CountryGrowth[] = [
  {
    country: "India",
    gdpGrowth: 6.7,
    renewableInvestment: 42.5,
    jobsCreated: 3200000,
    costSavings: 32.8
  },
  {
    country: "Germany",
    gdpGrowth: 4.2,
    renewableInvestment: 28.5,
    jobsCreated: 345000,
    costSavings: 12.5
  },
  {
    country: "Denmark",
    gdpGrowth: 3.8,
    renewableInvestment: 16.2,
    jobsCreated: 180000,
    costSavings: 8.7
  },
  {
    country: "China",
    gdpGrowth: 5.1,
    renewableInvestment: 83.4,
    jobsCreated: 4500000,
    costSavings: 45.2
  },
  {
    country: "United States",
    gdpGrowth: 3.5,
    renewableInvestment: 64.2,
    jobsCreated: 892000,
    costSavings: 28.4
  },
  {
    country: "Sweden",
    gdpGrowth: 3.2,
    renewableInvestment: 12.8,
    jobsCreated: 156000,
    costSavings: 7.9
  }
];