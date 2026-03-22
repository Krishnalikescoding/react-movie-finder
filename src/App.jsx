import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MoviesProvider } from "./contexts/MovieContext";
  
function App() {
  return (
    <MoviesProvider>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favourites" element={<Favourites />} />
          </Routes>
        </main>
      </div>
    </MoviesProvider>
  );
}

export default App;
