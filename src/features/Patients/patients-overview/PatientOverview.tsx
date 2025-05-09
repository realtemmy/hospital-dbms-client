import { Calendar, Eye, FileStack, HeartPulse } from 'lucide-react';
import React from 'react'
import { Button } from '../../../components/ui/button';

const PatientOverview = () => {
  return (
    <div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Next Appointment</p>
              <p className="text-lg font-semibold">Apr 15, 2024</p>
              <p className="text-sm text-slate-500">10:30 AM</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Last Visit</p>
              <p className="text-lg font-semibold">Mar 28, 2024</p>
              <p className="text-sm text-slate-500">Regular Checkup</p>
            </div>
            <FileStack className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Active Prescriptions</p>
              <p className="text-lg font-semibold">3 Medications</p>
              <p className="text-sm text-slate-500">Last updated: Today</p>
            </div>
            <HeartPulse className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-amber-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Insurance Status</p>
              <p className="text-lg font-semibold">Active</p>
              <p className="text-sm text-slate-500">Valid until Dec 2024</p>
            </div>
            <FileStack className="w-8 h-8 text-amber-500" />
          </div>
        </div>
      </div>

      {/* Patient Summary and Vitals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Vitals */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Recent Vitals</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              View History
            </Button>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Blood Pressure</p>
                <p className="text-lg font-semibold">120/80 mmHg</p>
              </div>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Normal
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Heart Rate</p>
                <p className="text-lg font-semibold">72 bpm</p>
              </div>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Normal
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Temperature</p>
                <p className="text-lg font-semibold">98.6°F</p>
              </div>
              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Normal
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">Blood Sugar</p>
                <p className="text-lg font-semibold">110 mg/dL</p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                Monitor
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Recent Activity</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              View All
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  date: "Mar 28, 2024",
                  type: "Appointment",
                  desc: "Regular Checkup",
                  status: "Completed",
                },
                {
                  date: "Mar 15, 2024",
                  type: "Lab Test",
                  desc: "Blood Work",
                  status: "Results Available",
                },
                {
                  date: "Mar 10, 2024",
                  type: "Prescription",
                  desc: "Medication Refill",
                  status: "Active",
                },
                {
                  date: "Mar 5, 2024",
                  type: "Appointment",
                  desc: "Follow-up",
                  status: "Completed",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b last:border-0"
                >
                  <div
                    className={`mt-0.5 w-2 h-2 rounded-full ${
                      activity.type === "Appointment"
                        ? "bg-blue-500"
                        : activity.type === "Lab Test"
                        ? "bg-purple-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{activity.type}</p>
                      <p className="text-xs text-slate-500">{activity.date}</p>
                    </div>
                    <p className="text-sm text-slate-600">{activity.desc}</p>
                    <p className="text-xs text-slate-500">{activity.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Upcoming Appointments</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              Schedule New
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                {
                  date: "Apr 15, 2024",
                  time: "10:30 AM",
                  type: "Follow-up",
                  doctor: "Dr. Smith",
                },
                {
                  date: "May 1, 2024",
                  time: "2:00 PM",
                  type: "Lab Work",
                  doctor: "Lab Services",
                },
                {
                  date: "May 15, 2024",
                  time: "11:00 AM",
                  type: "Consultation",
                  doctor: "Dr. Johnson",
                },
              ].map((appt, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-3 border-b last:border-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold text-blue-700">
                      {appt.date.split(",")[0].split(" ")[1]}
                    </span>
                    <span className="text-xs text-blue-600">
                      {appt.date.split(",")[0].split(" ")[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{appt.type}</p>
                    <p className="text-sm text-slate-600">{appt.doctor}</p>
                    <p className="text-xs text-slate-500">{appt.time}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Active Medications and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Active Medications */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Active Medications</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              View All
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                {
                  name: "Metformin",
                  dosage: "500mg",
                  frequency: "Twice daily",
                  refill: "5 days",
                },
                {
                  name: "Levothyroxine",
                  dosage: "25mcg",
                  frequency: "Once daily",
                  refill: "12 days",
                },
                {
                  name: "Aspirin",
                  dosage: "81mg",
                  frequency: "Once daily",
                  refill: "20 days",
                },
              ].map((med, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50"
                >
                  <div>
                    <p className="font-medium">{med.name}</p>
                    <p className="text-sm text-slate-600">
                      {med.dosage} - {med.frequency}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Refill in</p>
                    <p
                      className={`text-sm font-medium ${
                        parseInt(med.refill) <= 5
                          ? "text-red-600"
                          : parseInt(med.refill) <= 10
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {med.refill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="bg-white rounded-lg shadow">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold">Alerts & Reminders</h3>
            <Button variant="ghost" size="sm" className="text-blue-600">
              View All
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                {
                  type: "Medication",
                  message: "Metformin refill needed in 5 days",
                  priority: "high",
                },
                {
                  type: "Appointment",
                  message: "Lab work scheduled for May 1",
                  priority: "medium",
                },
                {
                  type: "Test Result",
                  message: "New blood work results available",
                  priority: "low",
                },
                {
                  type: "Insurance",
                  message: "Insurance renewal due in 3 months",
                  priority: "medium",
                },
              ].map((alert, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    alert.priority === "high"
                      ? "bg-red-50 border-l-4 border-red-500"
                      : alert.priority === "medium"
                      ? "bg-yellow-50 border-l-4 border-yellow-500"
                      : "bg-blue-50 border-l-4 border-blue-500"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          alert.priority === "high"
                            ? "text-red-800"
                            : alert.priority === "medium"
                            ? "text-yellow-800"
                            : "text-blue-800"
                        }`}
                      >
                        {alert.type}
                      </p>
                      <p className="text-sm">{alert.message}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientOverview
