import { useEffect } from "react"
import axios from 'axios'

const Home = () => {
    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios(
                'http://localhost:8000/movies/'
            )
            .catch((err) => {
                console.log("Error:", err)
            })
            console.log(result.data)
        }
        fetchMovies()
    }, [])

    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home