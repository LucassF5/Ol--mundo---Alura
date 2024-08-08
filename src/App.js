import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio"
import SobreMim from "./routes/SobreMim"
import Menu from "./components/Menu";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
