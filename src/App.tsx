import { Routes, Route } from "react-router";

import PhysicianLayout from "./Layouts/physician-layout/PhysicianLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhysicianLayout children={undefined} />}>
      <Route index element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
