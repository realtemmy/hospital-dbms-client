import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";
import Physician from "./Pages/Physician";
import AppointmentList from "./components/appointment-list/AppointmentList";
import PatientList from "./components/patient-list/PatientList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhysicianLayout />}>
        <Route index element={<Physician />} />
        <Route path="appointments" element={<AppointmentList />} />
        <Route path="patients" element={<PatientList />} />
      </Route>
    </Routes>
  );
}

export default App;
