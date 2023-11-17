import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

const MovieList = () => {
    const movies = useSelector(getAllMovies)
    console.log(movies)
    
    return (
        <h2>Movie List</h2>
    )
}

export default MovieList