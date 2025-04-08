import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";
import Physician from "./Pages/Physician";
import AppointmentList from "./components/appointment-list/AppointmentList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhysicianLayout />}>
        <Route index element={<Physician />} />
        <Route path="appointments" element={<AppointmentList />} />
      </Route>
    </Routes>
  );
}

export default App;
