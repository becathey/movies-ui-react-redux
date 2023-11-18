import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncMovieDetail, getSelectedMovie } from "../../features/movies/movieSlice"

const MovieDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedMovie)
    console.log(data)

    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(id))
    }, [dispatch, id])

    return (
        <h2>Movie Detail</h2>
    )
}

export default MovieDetail