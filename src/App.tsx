import { Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";
import AdminLayout from "./Layouts/admin-layout/AdminLayout";
import PatientLayout from "./Layouts/patient-layout/PatientLayout";
import Login from "./Pages/auth/Login";
import NotFound from "./Pages/not-found/NotFound";

import Physician from "./Pages/physician/Physician";
import AppointmentList from "./components/appointment-list/AppointmentList";
import PatientTable from "./components/patient-table/PatientTable";
import Patients from "./components/features/Physician/Patients/Patients";
import AppointmentPage from "./Pages/appointment-page/AppointmentPage";
import PatientPage from "./Pages/patients-page/PatientPage";
import Chat from "./Pages/chat/Chat";
import ChatLayout from "./Layouts/chat-layout/ChatLayout";
import Schedule from "./Pages/schedule/Schedule";
import Diagnosis from "./Pages/diagnosis/Diagnosis";
import EditProfile from "./features/profile/EditProfile";
import AddPatient from "./components/add-patient/AddPatient";

import Admin from "./Pages/admin/Admin";
import Physicians from "./features/admin/physicians/Physicians";
import Rooms from "./features/admin/rooms/Rooms";
import Departments from "./features/admin/departments/Departments";
import Records from "./features/admin/records/Records";

import { Toaster } from "./components/ui/sonner";
import AddStaff from "./components/add-staff/AddStaff";
import AddRecord from "./components/add-record/AddRecord";
import Staff from "./features/admin/staff/Staff";
import Settings from "./features/admin/settings/Settings";
import HospitalRegistration from "./Pages/hospital-registration/HospitalRegistration";

function App() {
  // In chat, there should be ai generated response or suggestions for physicians
  // Plus the way whatsapp used to have the ability to search for stuff from the web
  return (
    <Fragment>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<HospitalRegistration />} />

        {/* Chat (General Chat) */}
        <Route path="/chat" element={<ChatLayout />}>
          <Route path=":id" element={<Chat />} />
        </Route>

        {/* Doctor/Physician Routes */}
        <Route path="/doctor" element={<PhysicianLayout />}>
          <Route index element={<Physician />} />
          <Route path="chat" element={<ChatLayout />}>
            <Route index element={<Chat />} />
          </Route>

          <Route path="patients">
            <Route index element={<Patients />} />
            <Route path=":id" element={<PatientPage />} />
            <Route path=":id/edit" element={<EditProfile />} />
            <Route path=":id/appointments" element={<PatientTable />} />
          </Route>
          <Route path="schedule" element={<Schedule />} />
          <Route path="diagnosis" element={<Diagnosis />} />
        </Route>

        {/* Admin Routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="doctors" element={<Physicians />} />
          <Route path="patients" element={<Patients />} />
          {/* <Route path=":id" element={<PatientPage />} />
          <Route path=":id/edit" element={<EditProfile />} />
        </Route> */}
          <Route path="patients/:id" element={<PatientPage />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="add-staff" element={<AddStaff />} />
          <Route path="appointments">
            <Route index element={<AppointmentList />} />
            <Route path=":id" element={<AppointmentPage />} />
          </Route>
          <Route path="rooms" element={<Rooms />} />
          <Route path="departments" element={<Departments />} />
          <Route path="records" element={<Records />} />
          <Route path="records/add" element={<AddRecord />} />
          <Route path="staff" element={<Staff />} />
          <Route path="settings" element={<Settings />} />
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
      <Toaster richColors position="top-right" />
    </Fragment>
  );
}

export default App;
