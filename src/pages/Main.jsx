// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getApi, deleteApi } from "../features/moviesSlice";
// import UpdateModal from "../components/UpdateModal";

// const Main = () => {
//   const dispatch = useDispatch();
//   const { moviesList, loading, error } = useSelector((state) => state.movies);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const defaultImage =
//     "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
//   useEffect(() => {
//     dispatch(getApi());
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this movie?")) {
//       dispatch(deleteApi(id));
//     }
//   }
//   const handleUpdate = (movie) => {
//     setSelectedMovie(movie);
//   };

//   return (
//     <div>
//       <h1 className="text-center mt-4 mb-4">Movies</h1>
//       {loading && (
//         <div className="d-flex justify-content-center">
//           <div className="spinner-border" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       )}
//       {error && <p>Error loading movies.</p>}
//       <div className="d-flex justify-content-center flex-wrap gap-3">
//         {moviesList.map((movie, index) => (
//           <div className="card" style={{ width: "18rem" }} key={movie.id}>
//             <img
//               className="card-img-top"
//               src={defaultImage}
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <h5 className="card-title"> {movie.name || "Unknown Title"} </h5>
//               <p className="card-text">{movie.volue || "No Description"}</p>
//               <div className="d-flex justify-content-between">
//                 <i
//                   onClick={() => handleDelete(movie.id)}
//                   className="bi bi-archive text-danger"
//                 ></i>
//                 <i
//                   onClick={() => handleUpdate(movie)}
//                   className="bi bi-pencil text-primary "
//                 ></i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedMovie && (
//         <UpdateModal
//           movie={selectedMovie}
//           setSelectedMovie={setSelectedMovie}
//         />
//       )}
//     </div>
//   );
// };

// export default Main;