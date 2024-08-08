import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio"
import SobreMim from "./routes/SobreMim"
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "routes/Post";

function App() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
