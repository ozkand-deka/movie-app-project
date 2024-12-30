import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUser } from "../features/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div className="justify-content-center" style={{ height: "5rem" }}>
      <nav
        className="navbar text-center"
        style={{ backgroundImage: "linear-gradient(to right, red , yellow)" }}
      >
        <div className="container-fluid">
          <Link
            style={{
              textDecoration: "none",
              fontSize: "3rem",
              color: "yellow",
            }}
            to="/"
          >
            React Movie App
          </Link>
          <div className="d-flex m-1" role="search">
            {user && (
              <button
                onClick={handleLogout}
                className="btn btn-outline-danger m-2 "
              >
                Logout ozkan burada test1 içinm güncelleme yaptı
              </button>
            )}
            {!user && (
              <button
                className="btn btn-outline-danger m-2 "
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            <button
              onClick={() => navigate("/register")}
              className="btn btn-outline-danger m-2"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
