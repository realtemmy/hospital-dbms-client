import React from "react";
import { LucideIcon } from "lucide-react";

type Card = {
  colour: string; // Restrict to valid colors
  icon: LucideIcon;
  title: string;
  count: number;
};

const colorClasses: Record<Card["colour"], string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
};

const DashboardCard = ({ card }: { card: Card }) => {
  return (
    <section className="rounded shadow-lg p-8 flex items-center gap-4 bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Icon and title */}
      <div className={`${colorClasses[card.colour]} text-white rounded p-2`}>
        <card.icon />
      </div>
      <div>
        <p className="text-gray-600 font-semibold">{card.title}</p>
        <p className="text-lg font-bold">{card.count}</p>
      </div>
    </section>
  );
};

export default DashboardCard;
