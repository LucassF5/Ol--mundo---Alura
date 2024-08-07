import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio"
import SobreMim from "./components/SobreMim"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre_mim" element={<SobreMim />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
