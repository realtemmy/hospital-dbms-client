import React from "react";
import DashboardCard from "../dashboard-card/DashboardCard";
import {
  BarChartIcon,
  CalendarIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"; // Replace "lucide-react" with the correct library or file path

const PhysicianDashboard = () => {
  const sections = [
    {
      title: "Appointments",
      description: "Manage your appointments",
      icon: CalendarIcon,
      colour: "blue",
      count: 13,
    },
    {
      title: "Patients",
      description: "View and manage your patients",
      icon: UsersIcon,
      colour: "green",
      count: 5,
    },
    {
      title: "Reports",
      description: "View your reports and analytics",
      icon: BarChartIcon,
      colour: "purple",
      count: 3,
    },
    {
      title: "Settings",
      description: "Manage your account settings",
      icon: SettingsIcon,
      colour: "orange",
      count: 12
    },
  ];
  return (
    <div>
      {/* Doctor dashboard hero */}
      <div className="flex justify-between me-2">
        {sections.map((section, index) => (
        <DashboardCard
          key={index}
          card={{
            colour: section.colour,
            icon: section.icon,
            title: section.title,
            count: section.count, // Placeholder for count
          }}
        />
      ))}
      </div>
      
    </div>
  );
};

export default PhysicianDashboard;
