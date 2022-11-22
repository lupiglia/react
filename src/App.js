
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import "./styles/normalize.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";

import HomePage from "./pages/HomePage";
import GaleriaPage from "./pages/GaleriaPage";
import ContactoPage from "./pages/ContactoPage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Nosotros" element={<NosotrosPage/>}></Route>
      <Route path="/Galeria" element={<GaleriaPage/>}></Route>
      <Route path="/Contacto" element={<ContactoPage/>}></Route>
      <Route path="/Servicios" element={<ServiciosPage/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
