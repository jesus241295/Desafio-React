// import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h2>esto es app</h2>
      <Home />
    </div>
  );
}

export default App;
