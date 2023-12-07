import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ilan from "./components/Ilan";
import UrunEkle from "./components/UrunEkle";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ilan" element={<Ilan />} />
        <Route path="/ilanyukle" element={<UrunEkle />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
