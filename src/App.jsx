import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./css/App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Watchlist from "./pages/Watchlist";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
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
            <Route path="/Watchlist" element={<Watchlist />} />
          </Routes>
        </main>
      </div>
    </MoviesProvider>
  );
}

export default App;
