import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const result = await axios(
        'http://localhost:8000/movies/'
    )
    return result.data
})

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
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
        }
    }
})

export const {addMovies} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer