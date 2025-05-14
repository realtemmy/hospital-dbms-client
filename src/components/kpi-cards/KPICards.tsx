import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

type KPICardsProps = {
  color: string;
  type?: "revenue" | "other";
  icon: LucideIcon;
  count: number;
  title: string;
};

const KPICards = ({ kpis}: { kpis: KPICardsProps }) => {
  const cardBorderStyles = {
    blue: "border-blue-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
    purple: "border-purple-500",
    indigo: "border-indigo-500",
    red: "border-red-500",
    orange: "border-orange-500",
  };

  const cardIconStyles = {
    blue: "bg-blue-100",
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    purple: "bg-purple-100",
    indigo: "bg-indigo-100",
    red: "bg-red-100",
    orange: "bg-orange-100",
  };

  const cardTextStyles = {
    blue: "text-blue-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
    purple: "text-purple-500",
    indigo: "text-indigo-500",
    red: "text-red-500",
    orange: "text-orange-500",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow p-6 border-l-4",
        cardBorderStyles[kpis.color as keyof typeof cardBorderStyles]
      )}
    >
      <div className="flex items-center">
        <div className={cn("p-3 rounded-full text-blue-500", cardIconStyles[kpis.color as keyof typeof cardIconStyles], cardTextStyles[kpis.color as keyof typeof cardTextStyles])}>
          <kpis.icon className="h-6 w-6" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-500">{kpis.title}</p>
          <p className="text-2xl font-semibold text-gray-900">
            {kpis.type === "revenue" ? `$${kpis.count.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2})}` : kpis.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KPICards;
