import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import API from "../api/api";

const CourseDetail = () => {
  const { id } = useParams();
  console.log("ID", id);
  const [course, setCourse] = useState({
    provider: "N.A",
    title: "N.A",
    description: "N.A",
    author: "N.A",
    cost: 0,
    category: {
      name: "N.A",
    },
    reviews: [],
  });
  const getData = useCallback(async () => {
    const result = await API.get(`courses/${id}`);
    console.log("Datea: " + JSON.stringify(result.data.data));
    setCourse(result.data.data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <div>
        <div className="main-wrapper">
          {/* <!-- Header Section Start */}
          <Header />
          {/* <!-- Header Section End */}

          {/* <!-- Overlay Start */}
          <div className="overlay"></div>
          {/* <!-- Overlay End */}

          {/* <!-- Page Banner Start */}
          <div className="section page-banner">
            <div className="container">
              {/* <!-- Page Banner Start */}
              <div className="page-banner-content">
                <ul className="breadcrumb">
                  <li>
                    <a href="/#">Home</a>
                  </li>
                  <li className="active">Courses Details</li>
                </ul>
                <h2 className="title">
                  Courses <span> Details</span>
                </h2>
              </div>
              {/* <!-- Page Banner End */}
            </div>

            {/* <!-- Shape Icon Box Start */}
            <div className="shape-icon-box">
              <div className="box-content">
                <div className="box-wrapper">
                  <i className="flaticon-badge"></i>
                </div>
              </div>

              <img
                className="icon-shape-2"
                src="/assets/images/shape/shape-6.png"
                alt="Shape"
              />
            </div>
            {/* <!-- Shape Icon Box End */}

            {/* <img
                className="shape-3"
                src="/assets/images/shape/shape-24.png"
                alt="Shape"
              /> */}

            <img
              className="shape-author"
              src="/assets/images/author/author-01.jpg"
              alt="Shape"
            />
          </div>
          {/* <!-- Page Banner End */}

          {/* <!-- Courses Start */}
          <div className="section section-padding mt-n10">
            <div className="container">
              <div className="row gx-10">
                <div className="col-lg-8">
                  {/* <!-- Courses Details Start */}
                  <div className="courses-details">
                    <div className="courses-details-images">
                      <img
                        src="/assets/images/courses/courses-details.jpg"
                        alt="Courses Details"
                      />
                      <span className="tags">{course.provider}</span>
                    </div>

                    <h2 className="title">{course.title}</h2>

                    <div className="courses-details-admin">
                      <div className="admin-author">
                        <div className="author-thumb">
                          <img
                            src="/assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </div>
                        <div className="author-content">
                          <a className="name" href="/#">
                            {course.author}
                          </a>
                          <span className="Enroll">286 Community Members</span>
                        </div>
                      </div>
                      <div className="admin-rating">
                        <span className="rating-count">4.9</span>
                        <span className="rating-star">
                          <span
                            className="rating-bar"
                            style={{ width: "80%" }}
                          ></span>
                        </span>
                        <span className="rating-text">(5,764 Rating)</span>
                      </div>
                    </div>

                    {/* <!-- Courses Details Tab Start */}
                    <div className="courses-details-tab">
                      {/* <!-- Details Tab Menu Start */}
                      <div className="details-tab-menu">
                        <ul className="nav justify-content-center">
                          <li>
                            <button
                              className="active"
                              data-bs-toggle="tab"
                              data-bs-target="#description"
                            >
                              Description
                            </button>
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#instructors"
                            >
                              Instructors
                            </button>
                          </li>
                          <li>
                            <button
                              data-bs-toggle="tab"
                              data-bs-target="#reviews"
                            >
                              Reviews
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Details Tab Menu End */}

                      {/* <!-- Details Tab Content Start */}
                      <div className="details-tab-content">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="description"
                          >
                            {/* <!-- Tab Description Start */}
                            <div className="tab-description">
                              <div className="description-wrapper">
                                <h3 className="tab-title">Description:</h3>
                                <p>{course.description}</p>
                              </div>
                            </div>
                            {/* <!-- Tab Description End */}
                          </div>
                          <div className="tab-pane fade" id="instructors">
                            {/* <!-- Tab Instructors Start */}
                            <div className="tab-instructors">
                              <h3 className="tab-title">Course Instructor:</h3>

                              <div className="row">
                                <div className="col-md-3 col-6">
                                  {/* <!-- Single Team Start */}
                                  <div className="single-team">
                                    <div className="team-thumb">
                                      <img
                                        src="/assets/images/author/author-01.jpg"
                                        alt="Author"
                                      />
                                    </div>
                                    <div className="team-content">
                                      <h4 className="name">{course.author}</h4>
                                      <span className="designation">
                                        Instructor
                                      </span>
                                    </div>
                                  </div>
                                  {/* <!-- Single Team End */}
                                </div>
                              </div>
                            </div>
                            {/* <!-- Tab Instructors End */}
                          </div>
                          <div className="tab-pane fade" id="reviews">
                            {/* <!-- Tab Reviews Start */}
                            <div className="tab-reviews">
                              {course.reviews.length == 0 && (
                                <h3 className="tab-title">No Reviews</h3>
                              )}
                              {course.reviews.length > 0 && (
                                <h3 className="tab-title">Student Reviews:</h3>
                              )}
                              {course.reviews.length > 0 &&
                                course.reviews.map((rv) => (
                                  <>
                                    <div className="reviews-wrapper reviews-active">
                                      <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                          {/* <!-- Single Reviews Start */}
                                          <div className="single-review">
                                            <div className="review-author">
                                              <div className="author-thumb">
                                                <img
                                                  src="/assets/images/author/author-15.jpg"
                                                  alt="Author"
                                                />
                                                <i className="icofont-quote-left"></i>
                                              </div>
                                              <div className="author-content">
                                                <h4 className="name">
                                                  {rv.user.name}
                                                </h4>
                                                <span className="designation">
                                                  Student
                                                </span>
                                                <span className="rating-star">
                                                  <span
                                                    className="rating-bar"
                                                    style={{
                                                      width: {
                                                        ...(rv.rating * 20),
                                                      },
                                                    }}
                                                  ></span>
                                                </span>
                                              </div>
                                            </div>
                                            <p>{rv.text}</p>
                                          </div>
                                          {/* <!-- Single Reviews End */}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ))}

                              <div className="reviews-btn">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-hover-dark"
                                  data-bs-toggle="modal"
                                  data-bs-target="#reviewsModal"
                                >
                                  Write A Review
                                </button>
                              </div>

                              {/* <!-- Reviews Form Modal Start */}
                              <div className="modal fade" id="reviewsModal">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title">
                                        Add a Review
                                      </h5>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>

                                    {/* <!-- Reviews Form Start */}
                                    <div className="modal-body reviews-form">
                                      <form action="#">
                                        <div className="row">
                                          <div className="col-md-6">
                                            {/* <!-- Single Form Start */}
                                            <div className="single-form">
                                              <input
                                                type="text"
                                                placeholder="Enter your name"
                                              />
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div className="col-md-6">
                                            {/* <!-- Single Form Start */}
                                            <div className="single-form">
                                              <input
                                                type="text"
                                                placeholder="Enter your Email"
                                              />
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div className="col-md-12">
                                            {/* <!-- Single Form Start */}
                                            <div className="reviews-rating">
                                              <label>Rating</label>
                                              <ul
                                                id="rating"
                                                className="rating"
                                              >
                                                <li
                                                  className="star"
                                                  title="Poor"
                                                  data-value="1"
                                                >
                                                  <i className="icofont-star"></i>
                                                </li>
                                                <li
                                                  className="star"
                                                  title="Poor"
                                                  data-value="2"
                                                >
                                                  <i className="icofont-star"></i>
                                                </li>
                                                <li
                                                  className="star"
                                                  title="Poor"
                                                  data-value="3"
                                                >
                                                  <i className="icofont-star"></i>
                                                </li>
                                                <li
                                                  className="star"
                                                  title="Poor"
                                                  data-value="4"
                                                >
                                                  <i className="icofont-star"></i>
                                                </li>
                                                <li
                                                  className="star"
                                                  title="Poor"
                                                  data-value="5"
                                                >
                                                  <i className="icofont-star"></i>
                                                </li>
                                              </ul>
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div className="col-md-12">
                                            {/* <!-- Single Form Start */}
                                            <div className="single-form">
                                              <textarea placeholder="Write your comments here"></textarea>
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                          <div className="col-md-12">
                                            {/* <!-- Single Form Start */}
                                            <div className="single-form">
                                              <button className="btn btn-primary btn-hover-dark">
                                                Submit Review
                                              </button>
                                            </div>
                                            {/* <!-- Single Form End */}
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                    {/* <!-- Reviews Form End */}
                                  </div>
                                </div>
                              </div>
                              {/* <!-- Reviews Form Modal End */}
                            </div>
                            {/* <!-- Tab Reviews End */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- Details Tab Content End */}
                    </div>
                    {/* <!-- Courses Details Tab End */}
                  </div>
                  {/* <!-- Courses Details End */}
                </div>
                <div className="col-lg-4">
                  {/* <!-- Courses Details Sidebar Start */}
                  <div className="sidebar">
                    {/* <!-- Sidebar Widget Information Start */}
                    <div className="sidebar-widget widget-information">
                      <div className="info-price">
                        <span className="price">${course.cost}</span>
                      </div>
                      <div className="info-list">
                        <ul>
                          <li>
                            <i className="icofont-man-in-glasses"></i>{" "}
                            <strong>Learning Provider</strong>{" "}
                            <span>{course.provider}</span>
                          </li>
                          <li>
                            <i className="icofont-man-in-glasses"></i>{" "}
                            <strong>Instructor</strong>{" "}
                            <span>{course.author}</span>
                          </li>

                          {course.lectures && (
                            <li>
                              <i className="icofont-ui-video-play"></i>{" "}
                              <strong>Lectures</strong> <span>29</span>
                            </li>
                          )}
                          <li>
                            <i className="icofont-certificate-alt-1"></i>{" "}
                            <strong>Certificate</strong> <span>Yes</span>
                          </li>
                        </ul>
                      </div>
                      <div className="info-btn">
                        <Link
                          to="/messages"
                          className="btn btn-primary btn-hover-dark"
                        >
                          View Community
                        </Link>
                      </div>
                    </div>
                    {/* <!-- Sidebar Widget Information End */}

                    {/* <!-- Sidebar Widget Share Start */}
                    <div className="sidebar-widget">
                      <h4 className="widget-title">Share Course:</h4>

                      <ul className="social">
                        <li>
                          <a href="/#">
                            <i className="flaticon-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="flaticon-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="flaticon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="flaticon-skype"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Sidebar Widget Share End */}
                  </div>
                  {/* <!-- Courses Details Sidebar End */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Courses End */}

          {/* <!-- Footer Start  */}
          <Footer />
          {/* <!-- Footer End */}

          {/* <!--Back To Start*/}
          <a href="/#" className="back-to-top">
            <i className="icofont-simple-up"></i>
          </a>
          {/* <!--Back To End*/}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseDetail;
