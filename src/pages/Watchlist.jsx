import "../css/Favourites.css"        
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom"; 

function Watchlist() {
    const { watchlist } = useMovieContext();   

    if (watchlist.length > 0) {
        return (
            <div className="favourites">
                <h2>Your Watchlist</h2>
                <div className="movies-grid">
                    {watchlist.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No Movies in your Watchlist Yet!!!</h2>
            <Link to="/">Start adding some...</Link>
        </div>
    )
}

export default Watchlist;