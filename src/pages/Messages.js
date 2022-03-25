import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import API from "../api/api";

const MessagesPage = () => {
  return (
    <>
      <div className="main-wrapper main-wrapper-02">
        {/*<!-- Login Header Start */}
        <div className="section login-header">
          {/*<!-- Login Header Wrapper Start */}
          <div className="login-header-wrapper navbar navbar-expand">
            {/*<!-- Header Logo Start */}
            <div className="login-header-logo">
              <a href="index.html">
                <img src="assets/images/logo-icon.png" alt="Logo" />
              </a>
            </div>
            {/*<!-- Header Logo End */}

            {/*<!-- Header Search Start */}
            <div className="login-header-search dropdown">
              <button className="search-toggle" data-bs-toggle="dropdown">
                <i className="flaticon-loupe"></i>
              </button>

              <div className="search-input dropdown-menu">
                <form action="#">
                  <input type="text" placeholder="Search here" />
                </form>
              </div>
            </div>
            {/*<!-- Header Search End */}

            {/*<!-- Header Action Start */}
            <div className="login-header-action ml-auto">
              <a className="action author" href="#">
                <img src="assets/images/author/author-07.jpg" alt="Author" />
              </a>

              <div className="dropdown">
                <button className="action more" data-bs-toggle="dropdown">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="" href="#">
                      <i className="icofont-user"></i> Profile
                    </a>
                  </li>

                  <li>
                    <a className="" href="#">
                      <i className="icofont-logout"></i> Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- Header Action End */}
          </div>
          {/*<!-- Login Header Wrapper End */}
        </div>
        {/*<!-- Login Header End */}

        {/*<!-- Courses Admin Start */}
        <div className="section overflow-hidden position-relative" id="wrapper">
          {/*<!-- Sidebar Wrapper Start */}
          <div className="sidebar-wrapper">
            <div className="menu-list">
              <a className="active" href="courses-admin.html">
                <img src="assets/images/menu-icon/icon-1.png" alt="Icon" />
              </a>
            </div>
          </div>
          {/*<!-- Sidebar Wrapper End */}

          <div className="page-content-wrapper py-0">
            {/*<!-- Admin Tab Menu Start */}
            <div className="nav flex-column nav-pills admin-tab-menu">
              <a className="active" href="#">
                Communities <span>3</span>
              </a>
            </div>
            {/*<!-- Admin Tab Menu End */}

            {/*<!-- Page Content Wrapper Start */}
            <div className="main-content-wrapper pb-0">
              <div className="container-fluid">
                {/*<!-- Admin Top Bar Start */}

                {/*<!-- Admin Top Bar End */}

                {/*<!-- Question & Answer End */}
                <div className="question-answer">
                  <div className="row">
                    <div className="col-xl-4">
                      {/*<!-- Answer User List Start */}
                      <div className="answer-user-list">
                        {/*<!-- Single User Start */}
                        <div className="single-user active">
                          <div className="user-author">
                            <img
                              src="assets/images/author/author-12.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="user-content">
                            <h6 className="name">Intro To Python</h6>
                            <p>Udemy</p>
                          </div>
                          <span className="time">02 days ago</span>
                        </div>
                        {/*<!-- Single User End */}

                        {/*<!-- Single User End */}

                        {/*<!-- Single User Start */}
                        <div className="single-user">
                          <div className="user-author">
                            <img
                              src="assets/images/author/author-14.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="user-content">
                            <h6 className="name">Java Advanced</h6>
                            <p>Course Era</p>
                          </div>
                          {/* <span className="time">02 days ago</span> */}
                        </div>
                        {/*<!-- Single User End */}

                        {/*<!-- Single User Start */}
                        <div className="single-user">
                          <div className="user-author">
                            <img
                              src="assets/images/author/author-15.jpg"
                              alt="Author"
                            />
                          </div>
                          <div className="user-content">
                            <h6 className="name">Marketing Fundamentals</h6>
                            <p>Udemy</p>
                          </div>
                          {/* <span className="time">02 days ago</span> */}
                        </div>
                        {/*<!-- Single User End */}
                      </div>
                      {/*<!-- Answer User List End */}
                    </div>
                    <div className="col-xl-8">
                      {/*<!-- Answer Message Wrapper Start */}
                      <div className="answer-message-wrapper">
                        <ul>
                          <li>
                            {/*<!-- Single Message Start */}
                            <div className="single-message">
                              <div className="message-author">
                                <div className="author-images">
                                  <img
                                    src="assets/images/author/author-12.jpg"
                                    alt="Author"
                                  />
                                </div>
                                <div className="author-content">
                                  <h6 className="name">
                                    <strong>Natosha Sibley</strong>{" "}
                                    <span className="time">
                                      Asked: Feb 02, 2022
                                    </span>
                                  </h6>
                                  <h4 className="title">
                                    What are the basics of python language?
                                  </h4>
                                </div>
                                <div className="meta">
                                  <span className="view">
                                    <i className="icofont-eye-alt"></i> 526 Views
                                  </span>
                                  <a className="answer" href="#">
                                    <i className="icofont-ui-messaging"></i> Answer
                                  </a>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s when an unknown printer took a galley
                                of type and scrambled it to make specimen book
                                has survived not only five centuries.
                              </p>
                            </div>
                            {/*<!-- Single Message End */}

                            <ul className="message-replay">
                              <li>
                                {/*<!-- Single Message Start */}
                                <div className="single-message">
                                  <div className="message-author">
                                    <div className="author-images">
                                      <img
                                        src="assets/images/author/author-16.jpg"
                                        alt="Author"
                                      />
                                    </div>
                                    <div className="author-content">
                                      <h6 className="name">
                                        <strong>Ashley Reeves</strong>{" "}
                                        <span className="instructor">
                                          Instructor
                                        </span>
                                      </h6>
                                      <span className="time">
                                        Asked: Feb 02, 2022
                                      </span>
                                    </div>
                                    <div className="meta">
                                      <a className="answer" href="#">
                                        <i className="icofont-ui-messaging"></i>{" "}
                                        Answer
                                      </a>
                                    </div>
                                  </div>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s when an unknown
                                    printer took a galley of type and scrambled
                                    it to make specimen book has survived not
                                    only five centuries.
                                  </p>
                                </div>
                                {/*<!-- Single Message End */}
                              </li>
                            </ul>
                          </li>
                          <li>
                            {/*<!-- Single Message Start */}
                            <div className="single-message">
                              <div className="message-author">
                                <div className="author-images">
                                  <img
                                    src="assets/images/author/author-12.jpg"
                                    alt="Author"
                                  />
                                </div>
                                <div className="author-content">
                                  <h6 className="name">
                                    <strong>Natosha Sibley</strong>
                                  </h6>
                                  <span className="time">Asked: Feb 02, 2022</span>
                                </div>
                                <div className="meta">
                                  <a className="answer" href="#">
                                    <i className="icofont-ui-messaging"></i> Answer
                                  </a>
                                </div>
                              </div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s when an unknown printer took a galley
                                of type and scrambled it to make specimen book
                                has survived not only five centuries.
                              </p>
                            </div>
                            {/*<!-- Single Message End */}
                          </li>
                        </ul>

                        <a className="loadmore" href="#">
                          Load more 22 answers
                        </a>

                        <form action="#">
                          <div className="message-form">
                            <div className="auhtor">
                              <img
                                src="assets/images/author/author-16.jpg"
                                alt="Author"
                              />
                            </div>
                            <div className="message-input">
                              <textarea placeholder="Post a public answer"></textarea>

                              <div className="message-btn">
                                <button className="btn btn-secondary btn-hover-primary">
                                  Cancel
                                </button>
                                <button className="btn btn-primary btn-hover-dark">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*<!-- Answer Message Wrapper End */}
                    </div>
                  </div>
                </div>
                {/*<!-- Question & Answer End */}
              </div>
            </div>
            {/*<!-- Page Content Wrapper End */}
          </div>
        </div>
        {/*<!-- Courses Admin End */}

        {/*<!-- Footer Start  */}
        <Footer />
        {/*<!-- Footer End */}

        {/*<!--Back To Start*/}
        <a href="#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
        {/*<!--Back To End*/}
      </div>
    </>
  );
};

export default MessagesPage;
