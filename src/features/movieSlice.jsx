import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movie = action.payload;
    },
    deleteMovie: (state, action) => {
      state.movie = state.movie.filter((item)=>item.id !== action.payload);
    },
    updateMovie: (state, action) => {
     const  index = state.movie.findIndex((item)=>item.id === action.payload.id)
     state.movie[index] = action.payload
    },
 
  },
});

export const { setMovies,deleteMovie ,updateMovie} = movieSlice.actions;
export default movieSlice.reducer;
