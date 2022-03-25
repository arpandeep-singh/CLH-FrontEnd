import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import API from "../api/api";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
      name: name,
    };
    API.post("auth/register", user).then((result) => {
      console.log(JSON.stringify(result.data));
      try {
        if (result?.data?.success) {
          alert("User Registered");
        }
      } catch {
        alert("Failed");
      }
    });
  };

  return (
    <React.Fragment>
      <div className="main-wrapper">
        {/* !-- Header Section Start --> */}
        <Header />
        {/* !-- Header Section End --> */}

        {/* !-- Overlay Start --> */}
        <div className="overlay"></div>
        {/* !-- Overlay End --> */}

        {/* !-- Page Banner Start --> */}
        <div className="section page-banner">
          <div className="container">
            {/* !-- Page Banner Start --> */}
            <div className="page-banner-content">
              <ul className="breadcrumb">
                <li>
                  <a href="/#">Home</a>
                </li>
                <li className="active">Register</li>
              </ul>
              <h2 className="title">
                Registration <span>Form</span>
              </h2>
            </div>
            {/* !-- Page Banner End --> */}
          </div>

          {/* !-- Shape Icon Box Start --> */}
          <div className="shape-icon-box">
            <div className="box-content">
              <div className="box-wrapper">
                <i className="flaticon-badge"></i>
              </div>
            </div>

            <img
              className="icon-shape-2"
              src="assets/images/shape/shape-6.png"
              alt="Shape"
            />
          </div>
          {/* !-- Shape Icon Box End --> */}

          <img
            className="shape-author"
            src="assets/images/author/author-11.jpg"
            alt="Shape"
          />
        </div>
        {/* !-- Page Banner End --> */}

        {/* !-- Register & Login Start --> */}
        <div className="section section-padding">
          <div className="container">
            {/* !-- Register & Login Wrapper Start --> */}
            <div className="register-login-wrapper">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  {/* !-- Register & Login Images Start --> */}
                  <div className="register-login-images">
                    <div className="shape-1">
                      <img src="assets/images/shape/shape-26.png" alt="Shape" />
                    </div>

                    <div className="images">
                      <img
                        src="assets/images/register-login.png"
                        alt="Register Login"
                      />
                    </div>
                  </div>
                  {/* !-- Register & Login Images End --> */}
                </div>
                <div className="col-lg-6">
                  {/* !-- Register & Login Form Start --> */}
                  <div className="register-login-form">
                    <h3 className="title">
                      Registration <span>Now</span>
                    </h3>

                    <div className="form-wrapper">
                      <form onSubmit={handleSubmit}>
                        {/* !-- Single Form Start --> */}
                        <div className="single-form">
                          <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        {/* !-- Single Form End --> */}
                        {/* !-- Single Form Start --> */}
                        <div className="single-form">
                          <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        {/* !-- Single Form End --> */}
                        {/* !-- Single Form Start --> */}
                        <div className="single-form">
                          <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        {/* !-- Single Form End --> */}
                        {/* !-- Single Form Start --> */}
                        {/* <div className="single-form">
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div> */}
                        {/* !-- Single Form End --> */}
                        {/* !-- Single Form Start --> */}
                        <div className="single-form">
                          <button
                            className="btn btn-primary btn-hover-dark w-100"
                            type="submit"
                          >
                            Create an account
                          </button>
                          <Link
                            className="btn btn-secondary btn-outline w-100"
                            to="/login"
                          >
                            Already have an account? Login
                          </Link>
                        </div>
                        {/* !-- Single Form End --> */}
                      </form>
                    </div>
                  </div>
                  {/* !-- Register & Login Form End --> */}
                </div>
              </div>
            </div>
            {/* !-- Register & Login Wrapper End --> */}
          </div>
        </div>
        {/* !-- Register & Login End --> */}

        {/* !-- Footer Start  --> */}
        <Footer />
        {/* !-- Footer End --> */}

        {/* !--Back To Start--> */}
        <a href="/#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
        {/* !--Back To End--> */}
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
