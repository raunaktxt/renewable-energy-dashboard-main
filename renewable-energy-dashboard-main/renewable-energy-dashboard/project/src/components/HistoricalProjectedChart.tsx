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
  ReferenceLine,
} from 'recharts';

interface ChartProps {
  data: any[];
}

export const HistoricalProjectedChart: React.FC<ChartProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-4 bg-white rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="year"
            stroke="#6b7280"
          />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              padding: '0.75rem',
            }}
            formatter={(value: number, name: string) => [
              `${value} kWh`,
              name.charAt(0).toUpperCase() + name.slice(1)
            ]}
          />
          <Legend />
          <ReferenceLine
            x={currentYear}
            stroke="#666"
            strokeDasharray="3 3"
            label={{ value: "Present", position: "top" }}
          />
          <Line
            type="monotone"
            dataKey="solar"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: '#f59e0b' }}
            name="Solar"
          />
          <Line
            type="monotone"
            dataKey="wind"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6' }}
            name="Wind"
          />
          <Line
            type="monotone"
            dataKey="hydro"
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