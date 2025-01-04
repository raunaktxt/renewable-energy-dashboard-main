import { format, addYears, subYears } from 'date-fns';

// Historical data from 2014-2023 (last 10 years)
const historicalData = [
  { year: 2014, solar: 150, wind: 120, hydro: 280 },
  { year: 2015, solar: 180, wind: 140, hydro: 285 },
  { year: 2016, solar: 210, wind: 170, hydro: 290 },
  { year: 2017, solar: 250, wind: 200, hydro: 295 },
  { year: 2018, solar: 300, wind: 240, hydro: 298 },
  { year: 2019, solar: 350, wind: 280, hydro: 300 },
  { year: 2020, solar: 400, wind: 320, hydro: 305 },
  { year: 2021, solar: 450, wind: 360, hydro: 308 },
  { year: 2022, solar: 500, wind: 400, hydro: 310 },
  { year: 2023, solar: 550, wind: 440, hydro: 312 }
];

// Calculate growth rates based on historical data
const calculateGrowthRate = (data: typeof historicalData) => {
  const firstYear = data[0];
  const lastYear = data[data.length - 1];
  const years = data.length - 1;

  return {
    solar: Math.pow(lastYear.solar / firstYear.solar, 1/years) - 1,
    wind: Math.pow(lastYear.wind / firstYear.wind, 1/years) - 1,
    hydro: Math.pow(lastYear.hydro / firstYear.hydro, 1/years) - 1
  };
};

// Generate projected data for next 10 years
const generateProjectedData = () => {
  const growthRates = calculateGrowthRate(historicalData);
  const lastYear = historicalData[historicalData.length - 1];
  const projectedData = [];

  for (let i = 1; i <= 10; i++) {
    const year = lastYear.year + i;
    projectedData.push({
      year,
      solar: Math.round(lastYear.solar * Math.pow(1 + growthRates.solar, i)),
      wind: Math.round(lastYear.wind * Math.pow(1 + growthRates.wind, i)),
      hydro: Math.round(lastYear.hydro * Math.pow(1 + growthRates.hydro, i)),
      isProjected: true
    });
  }

  return projectedData;
};

export const getEnergyData = () => {
  const projectedData = generateProjectedData();
  return {
    historical: historicalData,
    projected: projectedData,
    combined: [...historicalData, ...projectedData]
  };
};

export const calculateTotalGrowth = (data: typeof historicalData) => {
  const firstYear = data[0];
  const lastYear = data[data.length - 1];
  
  return {
    solar: ((lastYear.solar - firstYear.solar) / firstYear.solar * 100).toFixed(1),
    wind: ((lastYear.wind - firstYear.wind) / firstYear.wind * 100).toFixed(1),
    hydro: ((lastYear.hydro - firstYear.hydro) / firstYear.hydro * 100).toFixed(1)
  };
};