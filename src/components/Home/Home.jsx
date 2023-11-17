import { useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from 'axios'
import { addMovies } from "../../features/movies/movieSlice"

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
            <h2>Home</h2>
        </div>
    )
}

export default Home