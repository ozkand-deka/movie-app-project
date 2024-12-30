import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMovie } from "../features/movieSlice";


const UpdateModal = ({ movie, setSelectedMovie }) => {
  console.log(movie);
  const dispatch = useDispatch();
  const [updatedName, setUpdatedName] = useState(movie.original_title);
  const [updatedVolue, setUpdatedVolue] = useState(movie.vote_average);

  const handleSave = (e) => {
    const updtadedMovie = {
      ...movie,
      original_title: updatedName, 
      vote_average: updatedVolue, 
    };
    dispatch(updateMovie(updtadedMovie));
    setSelectedMovie(null);
  };
  
  return (
    <div
      className="modal show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Movie</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setSelectedMovie(null)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Movie Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="value" className="form-label">
                Movie Value
              </label>
              <input
                type="text"
                className="form-control"
                id="value"
                value={updatedVolue}
                onChange={(e) => setUpdatedVolue(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setSelectedMovie(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
