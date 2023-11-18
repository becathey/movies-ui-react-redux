import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncMovieDetail, getSelectedMovie, removeSelectedMovie } from "../../features/movies/movieSlice"
import './MovieDetail.css'

const MovieDetail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getSelectedMovie)
    console.log(data)

    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(id))
        return () => {
            dispatch(removeSelectedMovie())
        }
    }, [dispatch, id])

    return (
        <div className="detail-container">
            {Object.keys(data).length === 0 ? (
                <h1>Loading ...</h1>
            ) : (
                <div className="detail-card">
                <div className="detail-image-wrapper">
                    <img src={data.image} className="detail-image" />
                </div>
                <div className="detail-info">
                    <div className="detail-header">
                        <h2 className="detail-title">{data.title}</h2>
                        <p className="detail-director">{data.director}</p>
                        <p className="detail-year">{data.year}</p>
                    </div>
                    <p className="detail-genre">{data.genre}</p>
                    <p className="detail-description">{data.description}</p>
                    <div className="detail-buttons">
                        <button>Add to Watchlist</button>
                        <button>Watch Now</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default MovieDetail