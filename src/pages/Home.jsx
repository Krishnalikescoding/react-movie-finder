import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import {
  searchMovies,
  getPopularMovies,
  getPopularTVShows,
  getPopularAnime,
  searchTVShows,
  searchAnime,
} from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("movies");
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        let results;
        if (activeTab === "movies") results = await getPopularMovies();
        else if (activeTab === "tvseries") results = await getPopularTVShows();
        else if (activeTab === "anime") results = await getPopularAnime();
        setMovies(results);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load content...");
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, [activeTab]); // NEW — reruns whenever tab changes

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      let results;
      if (activeTab === "movies") results = await searchMovies(searchQuery);
      else if (activeTab === "tvseries")
        results = await searchTVShows(searchQuery);
      else if (activeTab === "anime") results = await searchAnime(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search...");
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = async () => {
    setLoading(true);
    setSearchQuery("");
    try {
      let results;
      if (activeTab === "movies") results = await getPopularMovies();
      else if (activeTab === "tvseries") results = await getPopularTVShows();
      else if (activeTab === "anime") results = await getPopularAnime();
      setMovies(results);
      setError(null);
    } catch (err) {
      setError("Failed to load content...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder={`Search for ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={handleClearSearch}
            >
              ✕
            </button>
          )}
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "movies" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("movies");
            setSearchQuery("");
          }}
        >
          Movies
        </button>
        <button
          className={`tab-btn ${activeTab === "tvseries" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("tvseries");
            setSearchQuery("");
          }}
        >
          Web Series
        </button>
        <button
          className={`tab-btn ${activeTab === "anime" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("anime");
            setSearchQuery("");
          }}
        >
          Anime
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type={activeTab} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
