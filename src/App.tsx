import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";
import AdminLayout from "./Layouts/admin-layout/AdminLayout";
import PatientLayout from "./Layouts/patient-layout/PatientLayout";
import Login from "./Pages/auth/Login";
import NotFound from "./Pages/NotFound";

import Physician from "./Pages/Physician";
import AppointmentList from "./components/appointment-list/AppointmentList";
import PatientTable from "./components/patient-table/PatientTable";
import Patients from "./components/features/Physician/Patients/Patients";
import AppointmentPage from "./Pages/appointment-page/AppointmentPage";
import PatientPage from "./Pages/patients-page/PatientPage";

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Login />} />

      {/* Doctor/Physician Routes */}
      <Route path="/doctor" element={<PhysicianLayout />}>
        <Route index element={<Physician />} />
        <Route path="appointments">
          <Route index element={<AppointmentList />} />
          <Route path=":id" element={<AppointmentPage />} />
        </Route>
        <Route path="patients">
          <Route index element={<Patients />} />
          <Route path=":id" element={<PatientPage />} />
          <Route path=":id/appointments" element={<PatientTable />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div>Admin Dashboard</div>} />
        <Route path="doctors" element={<div>Doctors Management</div>} />
        <Route path="patients" element={<div>Patients Management</div>} />
        <Route path="appointments" element={<div>Appointments Management</div>} />
      </Route>

      {/* Patient Routes */}
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<div>Patient Dashboard</div>} />
        <Route path="appointments">
          <Route index element={<div>My Appointments</div>} />
          <Route path=":id" element={<div>Appointment Details</div>} />
        </Route>
        <Route path="profile" element={<div>My Profile</div>} />
        <Route path="medical-records" element={<div>Medical Records</div>} />
      </Route>

      {/* 404 Page - Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
