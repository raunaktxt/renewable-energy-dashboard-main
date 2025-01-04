import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { EnergyData } from '../types/energy';
import { format } from 'date-fns';

interface EnergyChartProps {
  data: EnergyData[];
}

export const EnergyChart: React.FC<EnergyChartProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => format(new Date(value), 'HH:mm')}
            stroke="#6b7280"
          />
          <YAxis stroke="#6b7280" />
          <Tooltip
            labelFormatter={(value) => format(new Date(value), 'HH:mm')}
            formatter={(value: number) => [`${value} kWh`, '']}
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '0.75rem',
            }}
          />
          <Legend
            wrapperStyle={{
              paddingTop: '1rem',
            }}
          />
          <Line
            type="monotone"
            dataKey="solarOutput"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: '#f59e0b' }}
            name="Solar"
          />
          <Line
            type="monotone"
            dataKey="windOutput"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
            name="Wind"
          />
          <Line
            type="monotone"
            dataKey="hydroOutput"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981' }}
            name="Hydro"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};