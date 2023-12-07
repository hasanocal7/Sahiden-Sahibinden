import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ilan from "./components/Ilan";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ilan" element={<Ilan />} />
        <Route path="/ilanyukle" element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
