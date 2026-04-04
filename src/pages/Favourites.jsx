import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { useState } from "react";

function Favourites() {
    const { favourites } = useMovieContext();
    const [activeTab, setActiveTab] = useState("movies");

    // Filter favourites based on active tab
    const filtered = favourites.filter((movie) => movie.type === activeTab);

    return (
        <div className="favourites">
            <h2>Your Favourites</h2>

            {/* Tabs */}
            <div className="tabs">
                <button
                    className={`tab-btn ${activeTab === "movies" ? "active" : ""}`}
                    onClick={() => setActiveTab("movies")}
                >
                    Movies
                </button>
                <button
                    className={`tab-btn ${activeTab === "tvseries" ? "active" : ""}`}
                    onClick={() => setActiveTab("tvseries")}
                >
                    TV Shows
                </button>
                <button
                    className={`tab-btn ${activeTab === "anime" ? "active" : ""}`}
                    onClick={() => setActiveTab("anime")}
                >
                    Anime
                </button>
            </div>

            {filtered.length > 0 ? (
                <div className="movies-grid">
                    {filtered.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} type={movie.type} />
                    ))}
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No {activeTab === "movies" ? "Movies" : activeTab === "tvseries" ? "TV Shows" : "Anime"} in Favourites</h2>
                    <Link to="/">Start adding some...</Link>
                </div>
            )}
        </div>
    );
}

export default Favourites;