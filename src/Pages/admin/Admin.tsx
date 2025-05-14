import React, { useState } from 'react';
import { 
  Bell,
  UserCircle,
  ChevronDown,
  Users,
  User,
  Bed,
  DollarSign,
  Calendar,
  AlertCircle,
  BarChart,
  Plus,
  FileText,
  Download
} from 'lucide-react';
import KPICards from '@/components/kpi-cards/KPICards';
import { count } from 'console';

const Admin = () => {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Mock data - Replace with actual data from your backend
  const adminInfo = {
    name: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };

  const kpis = {
    totalPatients: 156,
    doctorsOnDuty: 12,
    availableBeds: 45,
    totalRevenue: "$45,678",
    appointmentsScheduled: 24,
    pendingReports: 8
  };

  const todayAppointments = [
    { 
      id: 1, 
      patient: "John Doe", 
      doctor: "Dr. Smith", 
      time: "09:00 AM", 
      status: "Confirmed"
    },
    { 
      id: 2, 
      patient: "Jane Smith", 
      doctor: "Dr. Johnson", 
      time: "10:30 AM", 
      status: "In Progress"
    },
    { 
      id: 3, 
      patient: "Mike Brown", 
      doctor: "Dr. Williams", 
      time: "02:00 PM", 
      status: "Pending"
    },
  ];

  const recentActivities = [
    { id: 1, type: "admission", message: "New patient admitted to Ward 3", time: "5 mins ago" },
    { id: 2, type: "report", message: "Lab report uploaded for Patient #1234", time: "15 mins ago" },
    { id: 3, type: "emergency", message: "Emergency case received in ER", time: "20 mins ago" },
    { id: 4, type: "alert", message: "Low stock alert: Paracetamol", time: "1 hour ago" }
  ];

  const departmentStatus = [
    { name: "Radiology", pending: 4, type: "scans" },
    { name: "Pharmacy", pending: 12, type: "low-stock items" },
    { name: "Emergency", pending: 2, type: "patients waiting" },
    { name: "Surgery", pending: 1, type: "ongoing operations" }
  ];

  const staffAvailability = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology", status: "Available" },
    { id: 2, name: "Dr. Johnson", specialty: "Neurology", status: "In Surgery" },
    { id: 3, name: "Dr. Williams", specialty: "Pediatrics", status: "Available" },
    { id: 4, name: "Dr. Brown", specialty: "Orthopedics", status: "On Leave" }
  ];

  const bedStatus = {
    icu: { total: 10, occupied: 7, cleaning: 1 },
    general: { total: 50, occupied: 35, cleaning: 3 },
    emergency: { total: 15, occupied: 12, cleaning: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src="https://thumbs.dreamstime.com/b/hospital-logo-icon-hospital-logo-icon-135146804.jpg"
                alt="Hospital Logo"
                className="h-12 w-auto"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  City General Hospital
                </h1>
                <p className="text-sm text-gray-500">
                  Healthcare Management System
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-10">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {recentActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="px-4 py-3 hover:bg-gray-50"
                        >
                          <p className="text-sm text-gray-900">
                            {activity.message}
                          </p>
                          <p className="text-xs text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Admin Profile */}
              <div className="relative">
                <button
                  onClick={() => setShowQuickActions(!showQuickActions)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <img
                    src={adminInfo.photo}
                    alt={adminInfo.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">
                      {adminInfo.name}
                    </p>
                    <p className="text-xs text-gray-500">{adminInfo.role}</p>
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>

                {showQuickActions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Account Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4 mb-8">

          <KPICards kpis={{color: "blue", icon: Users, count: kpis.totalPatients, title: "Total Patients Today"}} />

          <KPICards kpis={{color: "green", icon: User, count: kpis.doctorsOnDuty, title: "Doctors On Duty"}} />

          <KPICards kpis={{color: "yellow", icon: Bed, count: kpis.availableBeds, title: "Available Beds"}} />

          <KPICards kpis={{color: "purple", icon: DollarSign, count: kpis.totalRevenue, title: "Total Revenue today"}} />

          <KPICards kpis={{color: "indigo", icon: Calendar, count: kpis.appointmentsScheduled, title: "Appointments"}} />

          <KPICards kpis={{color: "red", icon: AlertCircle, count: kpis.pendingReports, title: "Pending Reports"}} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Appointments */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Today's Appointments
                </h2>
              </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                    {todayAppointments.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {appointment.patient}
                          </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {appointment.doctor}
                          </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {appointment.time}
                          </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              appointment.status === "Confirmed"
                                ? "bg-green-100 text-green-800"
                                : appointment.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
              </div>
            </div>

            {/* Department Status */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Department Status
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {departmentStatus.map((dept) => (
                    <div key={dept.name} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-900">{dept.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {dept.pending} {dept.type}
                      </p>
                    </div>
                  ))}
          </div>
        </div>
      </div>

            {/* Staff Availability */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Staff Availability
                </h2>
              </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Doctor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Specialty
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                    {staffAvailability.map((staff) => (
                      <tr key={staff.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {staff.name}
                          </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {staff.specialty}
                          </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${
                              staff.status === "Available"
                                ? "bg-green-100 text-green-800"
                                : staff.status === "In Surgery"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {staff.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-5 w-5 mr-2" />
                    New Patient
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                    <FileText className="h-5 w-5 mr-2" />
                    Generate Invoice
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    <User className="h-5 w-5 mr-2" />
                    Add Staff
                  </button>
          </div>
        </div>
      </div>

            {/* Bed Status */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Bed Status
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">ICU</h3>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1 bg-red-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-red-800">
                          {bedStatus.icu.occupied} Occupied
                        </span>
                      </div>
                      <div className="flex-1 bg-green-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-green-800">
                          {bedStatus.icu.total -
                            bedStatus.icu.occupied -
                            bedStatus.icu.cleaning}{" "}
                          Available
                        </span>
                      </div>
                      <div className="flex-1 bg-yellow-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-yellow-800">
                          {bedStatus.icu.cleaning} Cleaning
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      General
                    </h3>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1 bg-red-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-red-800">
                          {bedStatus.general.occupied} Occupied
                        </span>
                      </div>
                      <div className="flex-1 bg-green-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-green-800">
                          {bedStatus.general.total -
                            bedStatus.general.occupied -
                            bedStatus.general.cleaning}{" "}
                          Available
                        </span>
                      </div>
                      <div className="flex-1 bg-yellow-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-yellow-800">
                          {bedStatus.general.cleaning} Cleaning
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Emergency
                    </h3>
                    <div className="mt-2 flex space-x-2">
                      <div className="flex-1 bg-red-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-red-800">
                          {bedStatus.emergency.occupied} Occupied
                        </span>
                      </div>
                      <div className="flex-1 bg-green-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-green-800">
                          {bedStatus.emergency.total -
                            bedStatus.emergency.occupied -
                            bedStatus.emergency.cleaning}{" "}
                          Available
                      </span>
                      </div>
                      <div className="flex-1 bg-yellow-100 rounded-lg p-2 text-center">
                        <span className="text-sm font-medium text-yellow-800">
                          {bedStatus.emergency.cleaning} Cleaning
                      </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reports & Logs */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Reports & Logs
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <span>Daily Activity Log</span>
                    <Download className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <span>Financial Report</span>
                    <Download className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <span>Admission Report</span>
                    <Download className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
