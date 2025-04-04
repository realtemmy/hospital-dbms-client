import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";
import Physician from "./Pages/Physician";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhysicianLayout />}>
      <Route index element={<Physician />} />
      </Route>
    </Routes>
  );
}

export default App;
