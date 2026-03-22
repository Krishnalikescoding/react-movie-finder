import "../css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites(){
    const {favourites} = useMovieContext();

    if (favourites.length > 0){
        <div className="favourites">
            <h2>Your Favourites</h2>
        </div>
        return <div className="movies-grid">
          {favourites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
        ))}
              </div>
    }
    else{
    return <div className="favorites-empty">
        <h2>No Favourite Movie Yet</h2>
        <p>Start Adding some...</p>
    </div>
    }
}

export default Favourites;