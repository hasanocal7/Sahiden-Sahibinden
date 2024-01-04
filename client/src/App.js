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
import Car from "./models/Car";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ilan" element={<Ad />} />
        <Route path="/ilanyukle" element={<AddProduct />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Giriş yapmak için route'lar bakılacak