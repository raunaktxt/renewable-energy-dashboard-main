export interface EnergyData {
  timestamp: string;
  solarOutput: number;
  windOutput: number;
  hydroOutput: number;
  totalConsumption: number;
}

export interface EmissionsSaved {
  amount: number;
  unit: string;
  equivalent: string;
}

export interface CostBenefit {
  period: string;
  savings: number;
  investment: number;
}

export interface AdoptionTip {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedSavings: string;
}