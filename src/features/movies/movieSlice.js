import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const result = await axios(
        // 'https://movie-hub-nc0g.onrender.com/movies/',
        'https://movies-api-aab6.up.railway.app/movies/'
    )
    return result.data
})

export const fetchAsyncMovieDetail = createAsyncThunk(
    'movies/fetchAsyncMovieDetail',
    async (id) => {
        const result = await axios(
            // `https://movie-hub-nc0g.onrender.com/movies/${id}`,
            `https://movies-api-aab6.up.railway.app/movies/${id}`
        )
        return result.data
    }
    )

const initialState = {
    movies: [],
    selectMovie: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectMovie = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully")
            return {...state, selectMovie: payload}
        }
    }
})

export const {removeSelectedMovie} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getSelectedMovie = (state) => state.movies.selectMovie
export default movieSlice.reducer