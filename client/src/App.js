import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Ad from "./components/Ad";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} exact="true" />
        <Route path="/" element={<Home />} exact="true" /> 
        <Route path="/register" element={<Register exact="true" />} />
        <Route path="/ilan" element={<Ad />} exact="true" />
        <Route path="/ilanyukle" element={<AddProduct />} exact="true" />
        <Route path="/forgot-password" element={<ForgotPassword />} exact="true" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


// Giriş yapmak için route'lar bakılacak