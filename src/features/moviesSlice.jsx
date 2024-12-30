// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   moviesList: [],
//   loading: false,
//   error: false,
// };


// export const getApi = createAsyncThunk("movies/getApi", async () => {
//   const response = await fetch("https://6766fea7560fbd14f18cb8ab.mockapi.io/movie");
//   return response.json();
// });

// export const deleteApi = createAsyncThunk("movies/deleteApi", async (id) => {
//   await fetch(`https://6766fea7560fbd14f18cb8ab.mockapi.io/movie/${id}`, {
//     method: "DELETE",
//   });
//   return id; 
// });
// export const updateApi = createAsyncThunk(
//   "movies/updateApi",
//   async (updatedMovie) => {
//     const response = await fetch(
//       `https://6766fea7560fbd14f18cb8ab.mockapi.io/movie/${updatedMovie.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedMovie),
//       }
//     );
//     return response.json();
//   }
// );



// const moviesSlice = createSlice({
//   name: "movies",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getApi.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(getApi.fulfilled, (state, action) => {
//         state.loading = false;
//         state.moviesList = action.payload;
//       })
//       .addCase(getApi.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(deleteApi.fulfilled, (state, action) => {
//         state.moviesList = state.moviesList.filter(
//           (movie) => movie.id !== action.payload
//         );
//       })
//       .addCase(updateApi.fulfilled, (state, action) => {
//         const index = state.moviesList.findIndex(
//           (movie) => movie.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.moviesList[index] = action.payload;
//         }
//       });
//   },
// });

// export default moviesSlice.reducer;
