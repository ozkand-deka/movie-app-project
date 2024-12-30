import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteMovie, setMovies } from "../features/movieSlice";
import UpdateModal from "../components/UpdateModal";
const Main2 = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.movie.movie);
  const [selectedMovie, setSelectedMovie] = useState();
  const API_KEY = "32e2256d77263eb3dc613bfabcba82d8";
  const videoUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  const getMovie = async () => {
    try {
      const { data } = await axios(videoUrl);
      dispatch(setMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const handleDelete = (id) => {
    alert("Dikkatli Olun");
    dispatch(deleteMovie(id));
  };
  const handleUpdate = (movie) => {
    console.log("edit movie", movie);
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1 className="text-center mt-4 mb-4">
        Movies {moviesList.length > 0 && moviesList.length}
      </h1>
      <div className="d-flex justify-content-center flex-wrap gap-3">
        {moviesList?.map((movie) => (
          <div className="card" style={{ width: "18rem" }} key={movie.id}>
            <img
              className="card-img-top"
              src={movie.poster_path ? IMG_API + movie.poster_path : ""}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">
                {movie.original_title || "No Title"}
              </h5>
              <p className="card-text">
                {movie.vote_average || "No Description"}
              </p>
              <div className="d-flex justify-content-between">
                <i
                  onClick={() => handleDelete(movie.id)}
                  class="bi bi-archive-fill text-danger"
                ></i>
                <i class="bi bi-pen text-primary "  onClick={() => handleUpdate(movie)}></i>
              </div>
            </div>
          </div>
        ))}

        {selectedMovie && (
          <UpdateModal
            movie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
          />
        )}
      </div>
    </div>
  );
};

export default Main2;
