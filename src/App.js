import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage copy";
import NavBar from "./component/StaticComponent/NavBar";
import Footer from "./component/StaticComponent/Footer";

import LoginPage from "./component/LoginPage";
import RegisterPage from "./component/RegisterPage";
import ClienteForm from "./component/ClienteBackOffice/ClienteForm";
import FatturaForm from "./component/ClienteBackOffice/FatturaForm";



function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/fattura" element={<FatturaForm />} />
          <Route path="/cliente" element={<ClienteForm />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
