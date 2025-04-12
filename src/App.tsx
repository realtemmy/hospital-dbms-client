import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";
import Physician from "./Pages/Physician";
import AppointmentList from "./components/appointment-list/AppointmentList";
import PatientTable from "./components/patient-table/PatientTable";
import Patients from "./components/features/Physician/Patients/Patients";
import AppointmentPage from "./Pages/appointment-page/AppointmentPage.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhysicianLayout />}>
        <Route index element={<Physician />} />
        <Route path="appointments" element={<AppointmentList />} />
        <Route path="appointments/:id" element={<AppointmentPage />} />
        <Route path="patients" element={<Patients />} />  
      </Route>
    </Routes>
  );
}

export default App;
