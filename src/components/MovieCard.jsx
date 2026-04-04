import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie, type }) {
  const { isFavourite, addToFavourites, removeFromFavourites, isInWatchlist, addToWatchlist, removeFromWatchlist, } =
    useMovieContext();
  const favourite = isFavourite(movie.id);
  const watchlisted = isInWatchlist(movie.id);

  const title = type === "movies" ? movie.title : movie.name;
  const year = type === "movies"? movie.release_date?.split("-")[0] : movie.first_air_date?.split("-")[0];

  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie, type);
  }

  function onWatchlistClick(e) {
    e.preventDefault();
    if (watchlisted) removeFromWatchlist(movie.id);
    else addToWatchlist(movie, type);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            ❤︎
          </button>
          <button
            className={`watchlist-btn ${watchlisted ? "active" : ""}`}
            onClick={onWatchlistClick}
          >
            ⛊
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
