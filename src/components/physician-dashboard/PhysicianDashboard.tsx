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
      count: 12,
    },
  ];
  return (
    <div>
      {/* Doctor dashboard hero */}
      {/* <div className="flex justify-between me-2">
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
      </div> */}
      <section className="bg-white grid grid-cols-3 gap-4 p-4 shadow-md rounded-lg">
        <div className="col-span-2">
          <p className="text-slate-700 font-medium mb-2">Welcome back</p>
          <h1 className="text-3xl font-medium text-blue-600 my-4">
            DR. Sarah Smith
          </h1>
          <div className="text-slate-700 font-medium text-sm my-4">
            Gynaecologist, MBBS, MD
          </div>
          <div className="flex justify-between">
            <div className="bg-blue-200 rounded-md p-2 min-w-[150px]">
              <p className="text-slate-600 font-semibold">Appointments</p>
              <span className="font-semibold text-blue-500">12+</span>
            </div>
            <div className="bg-red-200 rounded-md p-2 min-w-[150px]">
              <p className="text-slate-600 font-semibold">Surgeries</p>
              <span className="font-semibold text-red-500">3+</span>
            </div>
            <div className="bg-green-200 rounded-md p-2 min-w-[150px]">
              <p className="text-slate-600 font-semibold">Room visit</p>
              <span className="font-semibold text-green-500">12+</span>
            </div>
          </div>
        </div>
        <img
          src="https://www.shutterstock.com/image-vector/cheerful-male-doctor-glasses-stethoscope-260nw-1381645571.jpg"
          alt="physicians illustration"
          className="col-span-1 w-full max-h-[200px] object-cover object-top"
        />
      </section>
    </div>
  );
};

export default PhysicianDashboard;
