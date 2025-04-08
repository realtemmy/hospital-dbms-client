import React from 'react'
import { Link } from 'react-router'

import AppointmentTable from '../appointment-table/AppointmentTable';

// Apppountment list for doctors: Date, timeMobile, email, status, visit type, action
// Apppountment list for patients: Date, timeMobile, email, status, visit type, action

const sampleAppointments = [
  {
    name: "Temiloluwa Oreoluwa",
    gender: "male",
    age: 26,
    date: "04/08/2025",
    time: "09:00",
    status: "Scheduled",
    mobile: "8066771553",
    email: "temiloluwaogunti8@gmail.com",
    visitType: "New patient",
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Realtemmy Oreoluwa",
    gender: "female",
    age: 24,
    date: "04/08/2025",
    time: "09:30",
    status: "Confirmed",
    mobile: "7068401238",
    email: "temmy4jamb@gmail.com",
    visitType: "Follow-up",
    avatar: "https://github.com/shadcn.png",
  },
];

const AppointmentList = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-slate-700">Appointments</h2>
        <Link to="/" className="font-semibold text-blue-800">
          View all
        </Link>
      </div>
      <AppointmentTable appointments={sampleAppointments} />

    </div>
  );
}

export default AppointmentList
