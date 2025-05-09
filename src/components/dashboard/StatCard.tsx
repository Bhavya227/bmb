
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon,
  trend,
  className
}: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-sm p-6 border border-gray-100",
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900">{value}</h3>
          
          {trend && (
            <p className={`text-xs font-medium mt-1 flex items-center ${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className={`mr-1 ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.isPositive ? '↑' : '↓'}
              </span>
              {Math.abs(trend.value)}%
              <span className="text-gray-500 ml-1">vs. last month</span>
            </p>
          )}
          
          {description && (
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          )}
        </div>
        
        <div className="p-2 rounded-lg bg-gray-50 text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
