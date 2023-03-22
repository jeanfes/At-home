import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Sesion } from "./pages/sesion";
import { Registrarse } from "./pages/registrarse";
import { Inicio } from "./pages/inicio";
import { Contactar } from "./pages/contactar";
import { Propiedades } from "./pages/propiedades";
import { Detalle } from "./pages/detalle";
import { Sidebar } from "./components/sidebar";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
        <Header></Header>
          <div className="contenido">
            <Sidebar/>
            <main>
              <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/contactar" element={<Contactar/>}/>
                <Route path="/propiedades" element={<Propiedades/>}/>
                <Route path="/detalle" element={<Detalle/>}/>
                <Route path="/sesion" element={<Sesion/>}/>
                <Route path="/registrarse" element={<Registrarse/>}/>
              </Routes>
            </main>
          </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
