import React from 'react';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  borderColor?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  children,
  className = '',
  gradient = 'from-white to-gray-50',
  borderColor = 'border-gray-200'
}) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl shadow-sm border ${borderColor} p-6 transition-all duration-300 hover:shadow-md ${className}`}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};