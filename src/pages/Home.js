import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

class Home extends React.Component {
  state = {
    courses: [],
    search: null,
  };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  componentDidMount() {
    axios.get(`http://192.168.2.38:5000/api/v1/courses`).then((res) => {
      const courses = res.data.data;
      this.setState({ courses });
    });
  }
  render() {
    const myCourses = this.state.courses
      .filter((course) => {
        if (this.state.search == null) return course;
        else if (
          course.title
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          course.provider
            .toLowerCase()
            .startsWith(this.state.search.toLowerCase()) ||
          course.category.name
            .toLowerCase()
            .startsWith(this.state.search.toLowerCase())
        ) {
          return course;
        }
      })
      .map((course) => {
        return (
          <div className="col-lg-4 col-md-6" key={course._id}>
            {/* <!-- Single Courses Start --> */}

            <Link to={`course-detail/${course._id}`}>
              <div className="single-courses">
                <div className="courses-images">
                  <img
                    src="assets/images/courses/courses-python.jpg"
                    alt="Courses"
                  />
                </div>
                <div className="courses-content">
                  <div className="courses-author">
                    <div className="author">
                      <div className="author-thumb">
                        <a href="/#">
                          <img
                            src="assets/images/author/author-01.jpg"
                            alt="Author"
                          />
                        </a>
                      </div>
                      <div className="author-name">{course.author}</div>
                    </div>
                    <div className="">
                      <a href="/#">{course.provider}</a>
                    </div>
                  </div>

                  <h4 className="title">
                    <a href="courses-details.html">{course.title}</a>
                  </h4>

                  <div className="courses-price-review">
                    <div className="courses-price">
                      <span className="sale-parice">${course.cost}</span>
                    </div>
                    <div className="courses-review">
                      <span className="rating-count">0</span>
                      <span className="rating-star">
                        <span
                          className="rating-bar"
                          style={{ width: "80%" }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* <!-- Single Courses End --> */}
          </div>
        );
      });
    return (
      <React.Fragment>
        <div>
          <div className="main-wrapper">
            {/* <!-- Header Section Start --> */}
            <Header />
            {/* <!-- Header Section End --> */}

            {/* <!-- Overlay Start --> */}
            <div className="overlay"></div>
            {/* <!-- Overlay End --> */}

            {/* <!-- Slider Start --> */}
            <div className="section slider-section">
              {/* <!-- Slider Shape Start --> */}
              <div className="slider-shape"></div>
              {/* <!-- Slider Shape End --> */}

              <div className="container">
                {/* <!-- Slider Content Start --> */}
                <div className="slider-content">
                  <h4 className="sub-title">Start your favourite course</h4>
                  <h2 className="main-title">
                    Now join a community, and find your{" "}
                    <span>learning cohort.</span>
                  </h2>
                  <p></p>
                  <a className="btn btn-primary btn-hover-dark" href="/#">
                    Start A Course
                  </a>
                </div>
                {/* <!-- Slider Content End --> */}
              </div>

              {/* <!-- Slider Courses Box Start --> */}
              {/* <div className="slider-courses-box">
                <div className="box-content">
                  <div className="box-wrapper">
                    <i className="flaticon-open-book"></i>
                    <span className="count">1,235</span>
                    <p>communities</p>
                  </div>
                </div>
              </div> */}
              {/* <!-- Slider Courses Box End --> */}

              {/* <!-- Slider Rating Box Start --> */}
              {/* <div className="slider-rating-box">
                <div className="box-rating">
                  <div className="box-wrapper">
                    <span className="count">
                      4.8 <i className="flaticon-star"></i>
                    </span>
                    <p>Rating (86K)</p>
                  </div>
                </div>
              </div> */}
              {/* <!-- Slider Rating Box End --> */}

              {/* <!-- Slider Images Start --> */}
              <div className="slider-images">
                <div className="images">
                  <img src="assets/images/slider/slider-1.png" alt="Slider" />
                </div>
              </div>
              {/* <!-- Slider Images End --> */}

              {/* <!-- Slider Video Start --> */}

              {/* <!-- Slider Video End --> */}
            </div>
            {/* <!-- Slider End --> */}

            {/* <!-- All Courses Start --> */}
            <div className="section section-padding-02">
              <div className="container">
                {/* <!-- All Courses Top Start --> */}
                <div className="courses-top">
                  {/* <!-- Section Title Start --> */}
                  <div className="section-title shape-01">
                    <h2 className="main-title">
                      All <span>Courses</span> in Learning Hub
                    </h2>
                  </div>
                  {/* <!-- Section Title End --> */}

                  {/* <!-- Courses Search Start --> */}
                  <div className="courses-search">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Search your course"
                        onChange={(e) => this.searchSpace(e)}
                      />
                      <button>
                        <i className="flaticon-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  {/* <!-- Courses Search End --> */}
                </div>
                {/* <!-- All Courses Top End --> */}

                {/* <!-- All Courses Tabs Menu Start --> */}
                {/* <div className="courses-tabs-menu courses-active">
                  <div className="swiper-container">
                    <ul className="swiper-wrapper nav">
                      <li className="swiper-slide">
                        <button
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#tabs1"
                        >
                          Python
                        </button>
                      </li>
                      <li className="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs2">
                          Development
                        </button>
                      </li>
                      <li className="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs3">
                          Data Science
                        </button>
                      </li>
                      <li className="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs4">
                          Business
                        </button>
                      </li>
                      <li className="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs5">
                          Financial
                        </button>
                      </li>
                      <li className="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs6">
                          Marketing
                        </button>
                      </li>
                      <li className="swiper-slide">
                        <button data-bs-toggle="tab" data-bs-target="#tabs7">
                          Design
                        </button>
                      </li>
                    </ul>
                  </div>

                
                  <div className="swiper-button-next">
                    <i className="icofont-rounded-right"></i>
                  </div>
                  <div className="swiper-button-prev">
                    <i className="icofont-rounded-left"></i>
                  </div>
                </div> */}

                {/* <!-- All Courses Tabs Menu End --> */}

                {/* <!-- All Courses tab content Start --> */}
                <div className="tab-content courses-tab-content">
                  <div className="tab-pane fade show active" id="tabs1">
                    {/* <!-- All Courses Wrapper Start --> */}
                    <div className="courses-wrapper">
                      <div className="row">
                        {myCourses.length > 0 ? (
                          myCourses
                        ) : (
                          <h5 className="main-title text-center">
                            No results found :(
                          </h5>
                        )}
                      </div>
                    </div>
                    {/* <!-- All Courses Wrapper End --> */}
                  </div>
                </div>
                {/* <!-- All Courses tab content End --> */}

                {/* <!-- All Courses BUtton Start --> */}
                <div className="courses-btn text-center">
                  <a
                    href="courses.html"
                    className="btn btn-secondary btn-hover-primary"
                  >
                    Other Courses
                  </a>
                </div>
                {/* <!-- All Courses BUtton End --> */}
              </div>
            </div>
            {/* <!-- All Courses End --> */}

            {/* <!-- How It Work End --> */}
            <div className="section section-padding mt-n1">
              <div className="container">
                {/* <!-- Section Title Start --> */}
                <div className="section-title shape-03 text-center">
                  <h5 className="sub-title">
                    Over {this.state.courses.length}+ Courses
                  </h5>
                  <h2 className="main-title">
                    How It <span> Works?</span>
                  </h2>
                </div>
                {/* <!-- Section Title End --> */}

                {/* <!-- How it Work Wrapper Start --> */}
                <div className="how-it-work-wrapper">
                  {/* <!-- Single Work Start --> */}
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="flaticon-transparency"></i>
                    </div>
                    <div className="work-content">
                      <h3 className="title">Find Your Course</h3>
                      <p>
                        It has survived not only centurie also leap into
                        electronic.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div className="work-arrow">
                    <img
                      className="arrow"
                      src="assets/images/shape/shape-17.png"
                      alt="Shape"
                    />
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="flaticon-forms"></i>
                    </div>
                    <div className="work-content">
                      <h3 className="title">Join Community</h3>
                      <p>
                        It has survived not only centurie also leap into
                        electronic.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div className="work-arrow">
                    <img
                      className="arrow"
                      src="assets/images/shape/shape-17.png"
                      alt="Shape"
                    />
                  </div>
                  {/* <!-- Single Work End --> */}

                  {/* <!-- Single Work Start --> */}
                  <div className="single-work">
                    <div className="work-icon">
                      <i className="flaticon-badge"></i>
                    </div>
                    <div className="work-content">
                      <h3 className="title">Start Learning</h3>
                      <p>
                        It has survived not only centurie also leap into
                        electronic.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Work End --> */}
                </div>
              </div>
            </div>
            {/* <!-- How It Work End --> */}

            {/* <!-- Brand Logo Start --> */}
            <div className="section section-padding mt-1">
              <div className="container">
                {/* <!-- Brand Logo Wrapper Start --> */}
                <div className="brand-logo-wrapper">
                  {/* <!-- Section Title Start --> */}
                  <div className="section-title shape-03">
                    <h2 className="main-title">
                      Our learning partner :)
                      {/* of <span> CLH.</span> */}
                    </h2>
                  </div>
                  {/* <!-- Section Title End --> */}

                  {/* <!-- Brand Logo Start --> */}
                  <div className="brand-logo brand-active">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/* <!-- Single Brand Start --> */}
                        <div className="single-brand">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div className="single-brand">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div className="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div className="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div className="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}

                        {/* <!-- Single Brand Start --> */}
                        <div className="single-brand swiper-slide">
                          <img
                            src="assets/images/brand/brand-05.png"
                            alt="Brand"
                          />
                        </div>
                        {/* <!-- Single Brand End --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Brand Logo End --> */}
                </div>
                {/* <!-- Brand Logo Wrapper End --> */}
              </div>
            </div>
            {/* <!-- Blog End --> */}

            {/* <!-- Footer Start  --> */}
            <Footer />
            {/* <!-- Footer End --> */}

            {/* <!--Back To Start--> */}
            <a href="/#" className="back-to-top">
              <i className="icofont-simple-up"></i>
            </a>
            {/* <!--Back To End--> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
