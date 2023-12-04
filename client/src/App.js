import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Ilan from "./components/Ilan";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ilan" element={<Ilan/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
