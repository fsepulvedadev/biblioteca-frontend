import Layout from "./components/Layout";
import Buscar from "./pages/Buscar";
import Contacto from "./pages/Contacto";
import DetalleArchivo from "./pages/DetalleArchivo";
import Historia from "./pages/Historia";
import Inicio from "./pages/Inicio";
import "../src/assets/banderas.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/archivo" element={<DetalleArchivo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
