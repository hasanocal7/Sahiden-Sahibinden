import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

import Ad from "./components/Ad";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmPassword from "./components/ConfirmPassword";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/login" element={<Login />} exact="true" />
        <Route path="/" element={<Home />} exact="true" /> 
        <Route path="/register" element={<Register exact="true" />} />
        <Route path="/ilan" element={<Ad />} exact="true" />
        <Route path="/ilanyukle" element={<AddProduct />} exact="true" />
        <Route path="/forgot-password" element={<ForgotPassword />} exact="true" />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


// Giriş yapmak için route'lar bakılacak