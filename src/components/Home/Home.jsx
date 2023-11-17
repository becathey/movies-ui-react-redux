import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from 'axios'
import { addMovies } from "../../features/movies/movieSlice"
import MovieList from "../movieList/MovieList"

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios(
                'http://localhost:8000/movies/'
            )
            .catch((err) => {
                console.log("Error:", err)
            })
            dispatch(addMovies(result.data))
        }
        fetchMovies()
    }, [dispatch])

    return (
        <div className="home">
            <MovieList />
        </div>
    )
}

export default Home