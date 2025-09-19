import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wizard from "../src/components/Wizard/Wizard";
import Chess from "../src/components/Chess/Chess";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/game" element={<Chess />} />
      <Route path="/" element={<Wizard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
