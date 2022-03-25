import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-section">
          {/* <!-- Header Top Start --> */}
          <div className="header-top d-none d-lg-block">
            <div className="container">
              {/* <!-- Header Top Wrapper Start --> */}
              <div className="header-top-wrapper" />
              {/* <!-- Header Top Wrapper End --> */}
            </div>
          </div>
          {/* <!-- Header Top End --> */}

          {/* <!-- Header Main Start --> */}
          <div className="header-main">
            <div className="container">
              {/* <!-- Header Main Start --> */}
              <div className="header-main-wrapper">
                {/* <!-- Header Logo Start --> */}
                <div className="header-logo">
                  <a href="index.html">
                    {/* <img src="assets/images/logo.png" alt="Logo" /> */}
                  </a>
                </div>
                {/* <!-- Header Logo End --> */}

                {/* <!-- Header Menu Start --> */}
                <div className="header-menu d-none d-lg-block">
                  <ul className="nav-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <a href="/#">All Course</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="courses.html">Courses</a>
                        </li>
                        <li>
                          <a href="courses-details.html">Courses Details</a>
                        </li>
                      </ul>
                    </li>
                    {/* <li>
                      <a href="/#">Pages </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="404-error.html">404 Error</a>
                        </li>
                        <li>
                          <a href="after-enroll.html">After Enroll</a>
                        </li>
                        <li>
                          <a href="courses-admin.html">
                            Instructor Dashboard (Course List)
                          </a>
                        </li>
                        <li>
                          <a href="overview.html">
                            Instructor Dashboard (Performance)
                          </a>
                        </li>
                        <li>
                          <a href="students.html">Students</a>
                        </li>
                        <li>
                          <a href="reviews.html">Reviews</a>
                        </li>
                        <li>
                          <a href="engagement.html">Course engagement</a>
                        </li>
                        <li>
                          <a href="traffic-conversion.html">
                            Traffic & conversion
                          </a>
                        </li>
                        <li>
                          <a href="messages.html">Messages</a>
                        </li>
                      </ul>
                    </li> */}

                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Header Menu End --> */}

                {/* <!-- Header Sing In & Up Start --> */}
                <div className="header-sign-in-up d-none d-lg-block">
                  <ul>
                    <li>
                      <Link className="sign-in" to="/login">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link className="sign-up" to="/register">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- Header Sing In & Up End --> */}

                {/* <!-- Header Mobile Toggle Start --> */}
                <div className="header-toggle d-lg-none">
                  <a className="menu-toggle" href="javascript:void(0)">
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
                {/* <!-- Header Mobile Toggle End --> */}
              </div>
              {/* <!-- Header Main End --> */}
            </div>
          </div>
          {/* <!-- Header Main End --> */}
        </div>
        <div className="mobile-menu">
          {/* !-- Menu Close Start --> */}
          <a className="menu-close" href="javascript:void(0)">
            <i className="icofont-close-line"></i>
          </a>
          {/* !-- Menu Close End --> */}

          {/* !-- Mobile Top Medal Start --> */}
          <div className="mobile-top">
            <p>
              <i className="flaticon-phone-call"></i>{" "}
              <a href="tel:9702621413">(970) 262-1413</a>
            </p>
            <p>
              <i className="flaticon-email"></i>{" "}
              <a href="mailto:address@gmail.com">address@gmail.com</a>
            </p>
          </div>
          {/* !-- Mobile Top Medal End --> */}

          {/* !-- Mobile Sing In & Up Start --> */}
          <div className="mobile-sign-in-up">
            <ul>
              <li>
                <a className="sign-in" href="login.html">
                  Sign In
                </a>
              </li>
              <li>
                <a className="sign-up" href="register.html">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          {/* !-- Mobile Sing In & Up End --> */}

          {/* !-- Mobile Menu Start --> */}
          <div className="mobile-menu-items">
            <ul className="nav-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="/#">All Course</a>
                <ul className="sub-menu">
                  <li>
                    <a href="courses.html">Courses</a>
                  </li>
                  <li>
                    <a href="courses-details.html">Courses Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#">Pages </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="404-error.html">404 Error</a>
                  </li>
                  <li>
                    <a href="after-enroll.html">After Enroll</a>
                  </li>
                  <li>
                    <a href="courses-admin.html">
                      Instructor Dashboard (Course List)
                    </a>
                  </li>
                  <li>
                    <a href="overview.html">
                      Instructor Dashboard (Performance)
                    </a>
                  </li>
                  <li>
                    <a href="students.html">Students</a>
                  </li>
                  <li>
                    <a href="reviews.html">Reviews</a>
                  </li>
                  <li>
                    <a href="engagement.html">Course engagement</a>
                  </li>
                  <li>
                    <a href="traffic-conversion.html">Traffic & conversion</a>
                  </li>
                  <li>
                    <a href="messages.html">Messages</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/#">Blog</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#">Blog Details</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-details-left-sidebar.html">
                          Blog Details Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-right-sidebar.html">
                          Blog Details Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* !-- Mobile Menu End --> */}

          {/* !-- Mobile Menu End --> */}
          <div className="mobile-social">
            <ul className="social">
              <li>
                <a href="/#">
                  <i className="flaticon-facebook"></i>
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
          {/* !-- Mobile Menu End --> */}
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
