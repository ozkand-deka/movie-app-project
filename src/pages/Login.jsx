import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastWarnNotify } from "../helpers/Toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const register = useSelector((state) => state.auth.register);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (register && register.email === email && register.name === name) {
      dispatch(setUser({ email, name }));
      setEmail("");
      setName("");
      navigate("/");

      toastWarnNotify("Login successful ");
    } else {
      toastErrorNotify("Invalid credentials. Please try again.");
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form >
              <p className="text-center fs-1 text-primary">Sign In</p>
              <div className="form-outline mb-4">
                <input
                  type="name"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Name (Özkan test Denem)
                </label>
              </div>
              <div className="form-outline mb-3">
                <input
                  type="email"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form3Example4">
                  Email (Özkan test3 deneme)
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a
                    onClick={() => navigate("/register")}
                    className="link-danger"
                  >
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
