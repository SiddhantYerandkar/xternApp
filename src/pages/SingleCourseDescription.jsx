import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BookmarkSvg from "../assets/svg/white-bookmark.svg";
import BookmarkBlackSvg from "../assets/svg/black-bookmark.svg";
import PlayIcon from "../assets/images/single-courses/play-icon.svg";
import HeaderImg from "../assets/images/single-courses/header-img.png";
import FillStar from "../assets/images/single-courses/orange-fill-star.svg";
import StudentIcon from "../assets/images/single-courses/student-icon.svg";
import LanguageIcon from "../assets/images/single-courses/language-icon.svg";
import CourseIconImg1 from "../assets/images/single-courses/course-icon1.svg";
import CourseIconImg2 from "../assets/images/single-courses/course-icon2.svg";
import CourseIconImg3 from "../assets/images/single-courses/course-icon3.svg";
import CourseIconImg4 from "../assets/images/single-courses/course-icon4.svg";
import TimeIcon from "../assets/images/single-courses/time-icon.svg";
import MentorImg from "../assets/images/single-courses/mentor-img.png";
import FacebookSvg from "../assets/images/single-courses/facebook.svg";
import WhatsappSvg from "../assets/images/single-courses/whatsup.svg";
import TwitterSvg from "../assets/images/single-courses/twitter.svg";
import LinkedInSvg from "../assets/images/single-courses/linkedin.svg";
import CourseImg1 from "../assets/images/single-courses/course-img1.png";
import CourseImg2 from "../assets/images/single-courses/course-img2.png";
import LockIconSvg from "../assets/images/single-courses/lock-icon.svg";
import DisableLockSvg from "../assets/images/single-courses/disable-lock.svg";
import OrangeSmallStarFillSvg from "../assets/images/single-courses/orange-small-star-fill.svg";
import OrangeStarUnfillSvg from "../assets/images/single-courses/orange-star-unfill.svg";
import CommentIcon from "../assets/images/single-courses/comment-icon.svg";
import LeftArrowSvg from "../assets/images/single-courses/left-arrow.svg";
import LikeIcon from "../assets/images/single-courses/like-icon.svg";
import DislikeIcon from "../assets/images/single-courses/dislike-icon.svg";
import OrangeStar from "../assets/images/single-courses/orange-star.svg";
import ClientImg1 from "../assets/images/single-courses/client1.png";
import ClientImg2 from "../assets/images/single-courses/client2.png";
import ClientImg3 from "../assets/images/single-courses/client3.png";
import ClientImg4 from "../assets/images/single-courses/client4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const SingleCourseDescription = () => {
  const [isBookmarked, setIsBookmarked] = useState(true);
  const [isBookmarkIcon, setIsBookmarkIcon] = useState(false);
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleBookmarkIcon = () => {
    setIsBookmarkIcon(!isBookmarkIcon);
  };
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    infinite: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
  };

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Single description section start --> */}
      <section id="single-description-screen">
        <div className="first-desc-img-sec">
          <div className="hero-img-desc">
            <img
              src={HeaderImg}
              alt="social-media-img"
              className="img-fluid w-100"
            />
            <div className="single-courses-top">
              <div className="course-back-icon">
                <svg
                  onClick={handleBackClick}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_330_7385"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="black" />
                  </mask>
                  <g mask="url(#mask0_330_7385)">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="single-courses-bookmark-icon">
                <a
                  href=""
                  className={`item-bookmark ${isBookmarked ? "active" : ""}`}
                  onClick={toggleBookmark}
                  tabIndex="0"
                >
                  <img src={BookmarkSvg} alt="bookmark-icon" />
                </a>
              </div>
            </div>
            <div className="cousr-play-btn">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#review-video-modal"
              >
                <img src={PlayIcon} alt="play-icon" />
              </a>
            </div>
          </div>
          <div className="container">
            <div className="single-courses-description">
              <div className="first-decs-sec mt-16">
                <div className="first-decs-sec-wrap">
                  <div className="first-left-sec">Design</div>
                  <div className="first-right-sec">
                    <div>
                      <span className="firs-txt1 mr-8">$199.00</span>
                      <span className="firs-txt2">$149.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-decs-sec mt-16">
                <div className="second-decs-sec-wrap">
                  <div className="second-decs-sec-top">
                    <h1 className="second-txt1">
                      Responsive Design with Grids. A Guide for UX/UI Designer
                    </h1>
                  </div>
                  <div className="second-decs-sec-bottom">
                    <div className="second-decs-sec-bottom-wrap">
                      <div className="mt-12">
                        <span className="student-img mr-8">
                          <img src={StudentIcon} alt="student-icon" />
                        </span>
                        <span className="second-txt2">104.2k students</span>
                      </div>
                      <div className="mt-12">
                        <span className="student-img mr-8 fillStar">
                          <img src={FillStar} alt="student-icon" />
                        </span>
                        <span className="second-txt2">4.3 (3.7k ratings)</span>
                      </div>
                      <div className="mt-12">
                        <span className="student-img mr-8">
                          <img src={TimeIcon} alt="student-icon" />
                        </span>
                        <span className="second-txt2">1h 30m</span>
                      </div>
                      <div className="mt-12">
                        <span className="student-img mr-8">
                          <img src={LanguageIcon} alt="student-icon" />
                        </span>
                        <span className="second-txt2">English</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="third-decs-sec mt-32">
                <div className="third-decs-sec-wrap">
                  <div className="third-decs-sec-top">
                    <h2 className="third-txt1">This Course Includes</h2>
                  </div>
                  <div className="third-decs-sec-bottom">
                    <div className="third-decs-sec-bottom-wrap mt-16">
                      <span className="third-txt2 mr-8">
                        <img src={CourseIconImg1} alt="course-img" />
                      </span>
                      <span className="third-txt3">
                        1.5 hours On-Demand Video
                      </span>
                    </div>
                    <div className="third-decs-sec-bottom-wrap mt-12">
                      <span className="third-txt2 mr-8">
                        <img src={CourseIconImg2} alt="course-img" />
                      </span>
                      <span className="third-txt3">Full Lifetime Access</span>
                    </div>
                    <div className="third-decs-sec-bottom-wrap mt-12">
                      <span className="third-txt2 mr-8">
                        <img src={CourseIconImg3} alt="course-img" />
                      </span>
                      <span className="third-txt3">
                        Access on Mobile, Desktop and TV
                      </span>
                    </div>
                    <div className="third-decs-sec-bottom-wrap mt-12">
                      <span className="third-txt2 mr-8">
                        <img src={CourseIconImg4} alt="course-img" />
                      </span>
                      <span className="third-txt3">
                        Certificate of Completion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fourth-decs-sec mt-32">
                <div className="fourth-decs-sec-wrap">
                  <h2 className="third-txt1">Mentor</h2>
                  <div className="fourth-decs-sec-top mt-16">
                    <div className="fourth-decs-img-wrap">
                      <div className="fourth-decs-img">
                        <img src={MentorImg} alt="client-img" />
                      </div>
                      <div className="fourth-client-wrap">
                        <h3 className="fourth-txt1">Athena Joy</h3>
                        <h4 className="fourth-txt2 mt-12">236k followerss</h4>
                        <div className="mt-16">
                          <span className="fourth-txt3">
                            <img src={FillStar} alt="star-img" />
                          </span>
                          <span className="fourth-txt4">
                            4.3 (3.7k ratings)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="fourth-follwing-sec">
                      <div className="fourth-txt5">
                        <p>Following</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fifth-decs-sec mt-32">
                <div className="fifth-decs-sec-wrap">
                  <ul
                    className="nav nav-pills single-courses-tab"
                    id="description-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="description-tab-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#description-content"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="lessons-tab-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#lesson-content"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Lessons
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#reviews-content"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="description-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="description-content"
                      role="tabpanel"
                      tabIndex="0"
                    >
                      <div className="description-content-wrap mt-24">
                        <div className="description-first-content">
                          <h3 className="des-con-txt1">Details</h3>
                          <div>
                            <p className="des-con-txt2">
                              In this className, you'll learn everything about
                              using grids for your UI Design.Grids are not only
                              your best friend when it comes to creating a
                              consistent layout. They are also the backbone when
                              it comes to responsive design and making your
                              product shine across all screen sizes.
                            </p>
                            <p className="des-con-txt2">
                              Besides the classNameic Grids like Bootstrap and
                              co, I will tell you a bit about my favorite grid,
                              the CSS Grid, full of possibilities.
                            </p>
                            <p className="des-con-txt2">
                              And yes, we will go the extra mile and look at
                              some basic code, all set up for UX/UI Designers to
                              really understand the technicality behind the
                              product you are building.
                            </p>
                            <p className="des-con-txt2">
                              The Figma and code template that I will show you
                              are part of the course material to make sure you
                              can dive right into the making
                            </p>
                          </div>
                        </div>
                        <div className="description-second-content mt-24">
                          <h3 className="des-con-txt1">What You'll Learn</h3>
                          <div className="mt-12">
                            <ul className="desc-learn-sec">
                              <li>
                                Everything about Responsive Grids from 0 to hero
                              </li>
                              <li>
                                Basic setup like Columns, Grutter, Margin, and
                                Rows
                              </li>
                              <li>
                                Understand the difference between responsive and
                                adaptive behaviour
                              </li>
                              <li>
                                Understand what breakpoints are, where they come
                                from and how to use them
                              </li>
                              <li>
                                Classic Grid Systems such as Bootstrap Grids and
                                CSS Grid
                              </li>
                              <li>
                                Setting up Adaptive, Responsive and CSS Grids in
                                FIGMA and adding content the right way
                              </li>
                              <li>
                                Adding content to the grid, avoiding common
                                positioning mistakes
                              </li>
                              <li>How Grids make your design responsive</li>
                              <li>
                                As a final project, we will be building our own
                                responsive portfolio in Figma
                              </li>
                              <li>
                                Go the extra mile and look at some basic code,
                                all set up for UX/UI Designers to really
                                understand the technicality behind the product
                                you are building.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="description-second-content mt-24">
                          <h3 className="des-con-txt1">
                            Who This Course is For
                          </h3>
                          <div className="mt-12">
                            <ul className="desc-learn-sec">
                              <li>Beginner and Advanced UX/UI Designer</li>
                              <li>
                                Graphic Designer switching over to UX/UI Design
                              </li>
                              <li>
                                Front-End Developer wanting to improve their
                                communication with the design team
                              </li>
                              <li>
                                Anyone interested in learning about Grids in
                                UX/UI Design
                              </li>
                              <li>
                                Sketch or XD users switching over to Figma
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="description-second-content mt-24">
                          <h3 className="des-con-txt1">Requirements</h3>
                          <div className="mt-12">
                            <ul className="desc-learn-sec">
                              <li>
                                No requirements but recommended: (Free) Figma
                                account
                              </li>
                              <li>
                                Basic knowledge of Figma (or any other UI Design
                                software)
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="lessons-tabContent">
                    <div
                      className="tab-pane fade show"
                      id="lesson-content"
                      role="tabpanel"
                      tabIndex="0"
                    >
                      <div className="lesson-content-wrap mt-24">
                        <div className="lesson-first-content">
                          <div className="lesson-first-content-top">
                            <div className="lesson-first-content-wrap">
                              <div className="lesson-course">
                                <h3 className="des-con-txt1">Course content</h3>
                              </div>
                              <div className="lesson-expand">
                                <p className="lesson-txt1">Expand Sections</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lesson-second-content">
                          <div className="lesson-second-content-bottom">
                            <div className="accordion" id="lesson-introduction">
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title1"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse1"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      Introduction
                                    </span>
                                    <span className="lesson-custom-time">
                                      5 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse1"
                                  className="accordion-collapse collapse show"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title2"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse2"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      How Grids Work
                                    </span>
                                    <span className="lesson-custom-time">
                                      21 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse2"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title3"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse3"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      Grids in Figma
                                    </span>
                                    <span className="lesson-custom-time">
                                      26 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse3"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title4"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse4"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      CSS Grids + Figma
                                    </span>
                                    <span className="lesson-custom-time">
                                      9 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse4"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title5"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse5"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      Course Project
                                    </span>
                                    <span className="lesson-custom-time">
                                      3 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse5"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title6"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse6"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      Bootstrap Grids
                                    </span>
                                    <span className="lesson-custom-time">
                                      18 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse6"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title7"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse7"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      CSS Grids
                                    </span>
                                    <span className="lesson-custom-time">
                                      15 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse7"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item mt-16">
                                <h2
                                  className="accordion-header"
                                  id="lesson-title8"
                                >
                                  <button
                                    className="accordion-button lesson-custom-btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse8"
                                    aria-expanded="true"
                                  >
                                    <span className="lesson-title">
                                      Bonus Lecture
                                    </span>
                                    <span className="lesson-custom-time">
                                      2 min
                                    </span>
                                  </button>
                                </h2>
                                <div
                                  id="collapse8"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#lesson-introduction"
                                >
                                  <div className="accordion-body">
                                    <div className="lesson-intro-content mt-12">
                                      <div className="lesson-intro-content-wrap">
                                        <span className="lesson-txt2">
                                          Promotion
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2">
                                          Introduction
                                        </span>
                                        <span className="lesson-lock-img">
                                          <img
                                            src={LockIconSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                      <div className="lesson-intro-content-wrap mt-12">
                                        <span className="lesson-txt2 color-grey">
                                          Course Material
                                        </span>
                                        <span className="lesson-lock-img color-grey">
                                          <img
                                            src={DisableLockSvg}
                                            alt="lock-icon"
                                          />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="review-tabContent">
                    <div
                      className="tab-pane fade show"
                      id="reviews-content"
                      role="tabpanel"
                      tabIndex="0"
                    >
                      <div className="reviews-content-wrap">
                        <div className="review-first-sec">
                          <div className="review-first-sec-wrap mt-24">
                            <div className="overall-review">
                              <h3 className="des-con-txt1">Overall Reviews</h3>
                            </div>
                            <div className="view-all-descrip">
                              <a href="#">
                                <span className="view-all-txt">View all</span>
                                <span>
                                  <img src={LeftArrowSvg} alt="left-arrow" />
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="review-bottom-sec mt-16">
                            <div className="review-bottom-sec-wrap">
                              <div className="review-first-content">
                                <p className="rev1-txt">4.3</p>
                                <p className="rev2-txt">out of 5</p>
                              </div>
                              <div className="review-second-content">
                                <div className="review-second-content-wrap">
                                  <div className="review-details">
                                    <div className="review-sec-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="progress custom-progress">
                                    <div
                                      className="progress-bar custom-progress-bar w-105"
                                      role="progressbar"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="review-percentage">
                                    <p className="">32%</p>
                                  </div>
                                </div>
                                <div className="review-second-content-wrap">
                                  <div className="review-details">
                                    <div className="review-sec-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="progress custom-progress">
                                    <div
                                      className="progress-bar custom-progress-bar w-145"
                                      role="progressbar"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="review-percentage">
                                    <p className="">62%</p>
                                  </div>
                                </div>
                                <div className="review-second-content-wrap">
                                  <div className="review-details">
                                    <div className="review-sec-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="progress custom-progress">
                                    <div
                                      className="progress-bar custom-progress-bar w-60"
                                      role="progressbar"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="review-percentage">
                                    <p className="">3%</p>
                                  </div>
                                </div>
                                <div className="review-second-content-wrap">
                                  <div className="review-details">
                                    <div className="review-sec-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="progress custom-progress">
                                    <div
                                      className="progress-bar custom-progress-bar w-30"
                                      role="progressbar"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="review-percentage">
                                    <p className="">2%</p>
                                  </div>
                                </div>
                                <div className="review-second-content-wrap">
                                  <div className="review-details">
                                    <div className="review-sec-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeSmallStarFillSvg}
                                            alt="orange-start"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="progress custom-progress">
                                    <div
                                      className="progress-bar custom-progress-bar w-10"
                                      role="progressbar"
                                      aria-valuenow="75"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                  <div className="review-percentage">
                                    <p className="">1%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="review-third-sec mt-24">
                            <div className="review-third-sec-content">
                              <div className="review-third-sec-wrap">
                                <div className="review-bottom-first">
                                  <img src={ClientImg1} alt="course-img" />
                                </div>
                                <div className="review-bottom-second">
                                  <h4>Ami Jackson</h4>
                                  <div className="review-content">
                                    <div className="review-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStarUnfillSvg}
                                            alt="star-img"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="review-time">
                                      <p>20 minutes ago</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-bottom-third">
                                  <img src={CommentIcon} alt="comment-icon" />
                                </div>
                              </div>
                              <div className="review-para mt-12">
                                <p>
                                  The course is very good. the explanation of
                                  the mentor is very clear and easy to
                                  understand 😎😎
                                </p>
                              </div>
                              <div className="review-helpful-sec">
                                <div className="review-helpful-sec-full">
                                  <div>
                                    <p className="helpful-txt">
                                      Was this review helpful?
                                    </p>
                                  </div>
                                  <div>
                                    <span>
                                      <img src={LikeIcon} alt="review-like" />
                                    </span>
                                    <span className="like-txt1">369</span>
                                  </div>
                                  <div>
                                    <span>
                                      <img
                                        src={DislikeIcon}
                                        alt="review-like"
                                      />
                                    </span>
                                    <span className="dislike-txt">10</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-third-sec-content mt-16">
                              <div className="review-third-sec-wrap">
                                <div className="review-bottom-first">
                                  <img src={ClientImg2} alt="course-img" />
                                </div>
                                <div className="review-bottom-second">
                                  <h4>Kevin Smith</h4>
                                  <div className="review-content">
                                    <div className="review-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="review-time">
                                      <p>1 week ago</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-bottom-third">
                                  <img src={CommentIcon} alt="comment-icon" />
                                </div>
                              </div>
                              <div className="review-para mt-12">
                                <p>
                                  Throughout the course, She explained
                                  everything so much more clearly, everything
                                  was easy, and the course is quite good.
                                </p>
                              </div>
                              <div className="review-helpful-sec">
                                <div className="review-helpful-sec-full">
                                  <div>
                                    <p className="helpful-txt">
                                      Was this review helpful?
                                    </p>
                                  </div>
                                  <div>
                                    <span>
                                      <img src={LikeIcon} alt="review-like" />
                                    </span>
                                    <span className="like-txt1">463</span>
                                  </div>
                                  <div>
                                    <span>
                                      <img
                                        src={DislikeIcon}
                                        alt="review-like"
                                      />
                                    </span>
                                    <span className="dislike-txt">56</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-third-sec-content mt-16">
                              <div className="review-third-sec-wrap">
                                <div className="review-bottom-first">
                                  <img src={ClientImg3} alt="course-img" />
                                </div>
                                <div className="review-bottom-second">
                                  <h4>Laura Flemo</h4>
                                  <div className="review-content">
                                    <div className="review-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="review-time">
                                      <p>2 week ago</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-bottom-third">
                                  <img src={CommentIcon} alt="comment-icon" />
                                </div>
                              </div>
                              <div className="review-para mt-12">
                                <p>
                                  Really appreciated this course, in helping me
                                  better understand designing with grids.
                                  Though, would like the section on adding
                                  elements to the grid to be more in depth.
                                  Exploring a larger variety of layouts.
                                </p>
                              </div>
                              <div className="review-helpful-sec">
                                <div className="review-helpful-sec-full">
                                  <div>
                                    <p className="helpful-txt">
                                      Was this review helpful?
                                    </p>
                                  </div>
                                  <div>
                                    <span>
                                      <img src={LikeIcon} alt="review-like" />
                                    </span>
                                    <span className="like-txt1">1k</span>
                                  </div>
                                  <div>
                                    <span>
                                      <img
                                        src={DislikeIcon}
                                        alt="review-like"
                                      />
                                    </span>
                                    <span className="dislike-txt">256</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-third-sec-content mt-16">
                              <div className="review-third-sec-wrap">
                                <div className="review-bottom-first">
                                  <img src={ClientImg4} alt="client-img" />
                                </div>
                                <div className="review-bottom-second">
                                  <h4>Caity Laurance</h4>
                                  <div className="review-content">
                                    <div className="review-star">
                                      <ul>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStar}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStarUnfillSvg}
                                            alt="star-img"
                                          />
                                        </li>
                                        <li>
                                          <img
                                            src={OrangeStarUnfillSvg}
                                            alt="star-img"
                                          />
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="review-time">
                                      <p>3 week ago</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="review-bottom-third">
                                  <img src={CommentIcon} alt="comment-icon" />
                                </div>
                              </div>
                              <div className="review-para mt-12">
                                <p>
                                  The creator has a great voice and is good at
                                  explaining the concepts in general... however,
                                  The title is totally misleading. It's really
                                  not an ultimate guide.
                                </p>
                              </div>
                              <div className="review-helpful-sec">
                                <div className="review-helpful-sec-full">
                                  <div>
                                    <p className="helpful-txt">
                                      Was this review helpful?
                                    </p>
                                  </div>
                                  <div>
                                    <span>
                                      <img src={LikeIcon} alt="review-like" />
                                    </span>
                                    <span className="like-txt1">344</span>
                                  </div>
                                  <div>
                                    <span>
                                      <img
                                        src={DislikeIcon}
                                        alt="review-like"
                                      />
                                    </span>
                                    <span className="dislike-txt">28</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sixth-decs-sec mt-32">
                <div className="sixth-decs-sec-wrap">
                  <h2 className="third-txt1">Share</h2>
                  <div className="single-courses-share mt-16">
                    <div className="social-media-course">
                      <div className="social-icon-courses">
                        <Link to="https://www.facebook.com/" target="_blank">
                          <img src={FacebookSvg} alt="facebook" />
                        </Link>
                      </div>
                    </div>
                    <div className="social-media-course">
                      <div className="social-icon-courses whatsapp-bg">
                        <Link to="https://web.whatsapp.com/" target="_blank">
                          <img src={WhatsappSvg} alt="whatsup" />
                        </Link>
                      </div>
                    </div>
                    <div className="social-media-course">
                      <div className="social-icon-courses">
                        <Link to="https://twitter.com/" target="_blank">
                          <img src={TwitterSvg} alt="twitter" />
                        </Link>
                      </div>
                    </div>
                    <div className="social-media-course">
                      <div className="social-icon-courses">
                        <Link
                          to="https://www.linkedin.com/login"
                          target="_blank"
                        >
                          <img src={LinkedInSvg} alt="twitter" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="seventh-decs-sec mt-32">
            <div className="seventh-decs-sec-wrap">
              <h2 className="third-txt1">Students Also Bought</h2>
              <div className="seventh-decs-sec-wrap-slider mt-16">
                <Slider {...settings}>
                  <div>
                    <div className="student-course">
                      <img src={CourseImg1} alt="course-img" />
                      <div className="single-courses-bookmark">
                        <a
                          href=""
                          className={`item-bookmark ${
                            isBookmarked ? "active" : ""
                          }`}
                          onClick={toggleBookmark}
                          tabIndex="0"
                        >
                          <img src={BookmarkBlackSvg} alt="bookmark-icon" />
                        </a>
                      </div>
                      <div className="single-courses-bottom-txt">
                        <p>3D Design</p>
                      </div>
                    </div>
                    <div className="single-courses-stu-details mt-12">
                      <p className="seventh-txt1">
                        Learning Blender & 3D Max for...
                      </p>
                      <div className="single-course-price">
                        <span className="seventh-txt2 mr-8">$180.00</span>
                        <span className="seventh-txt3">$210.00</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="student-course">
                      <img src={CourseImg2} alt="course-img" />
                      <div className="single-courses-bookmark">
                        <a
                          href=""
                          className={`item-bookmark ${
                            isBookmarkIcon ? "active" : ""
                          }`}
                          onClick={toggleBookmarkIcon}
                          tabIndex="0"
                        >
                          <img src={BookmarkBlackSvg} alt="bookmark-icon" />
                        </a>
                      </div>
                      <div className="single-courses-bottom-txt">
                        <p>Development</p>
                      </div>
                    </div>
                    <div className="single-courses-stu-details mt-12">
                      <p className="seventh-txt1">
                        Learning Python For Data Analy...
                      </p>
                      <div className="single-course-price">
                        <span className="seventh-txt2 mr-8">$150.00</span>
                        <span className="seventh-txt3">$210.00</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="eight-decs-sec mt-32">
            <div className="container">
              <div className="eight-decs-sec-wrap">
                <h2 className="third-txt1">FAQs</h2>
                <div
                  className="accordion custom-acc"
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item border-0 mt-12">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom_icon collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordian1"
                      >
                        <span>Can i enroll single className?</span>
                      </button>
                    </h2>
                    <div
                      id="accordian1"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body faq-answer">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="faq-bottom-border"></div>
                  </div>
                  <div className="accordion-item border-0 mt-12">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom_icon collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordian2"
                      >
                        <span>What is the refund policy?</span>
                      </button>
                    </h2>
                    <div
                      id="accordian2"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body faq-answer">
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classNameical
                          Latin literature from 45 BC, making it over 2000 years
                          old.
                        </p>
                      </div>
                    </div>
                    <div className="faq-bottom-border"></div>
                  </div>
                  <div className="accordion-item border-0 mt-12">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom_icon collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordian3"
                      >
                        <span>Is financial aid available?</span>
                      </button>
                    </h2>
                    <div
                      id="accordian3"
                      className="accordion-collapse collapse "
                    >
                      <div className="accordion-body faq-answer">
                        <p>
                          Using your order number and email address or phone
                          number, you can track your order online.
                        </p>
                      </div>
                    </div>
                    <div className="faq-bottom-border"></div>
                  </div>
                  <div className="accordion-item border-0 mt-12">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button custom_icon collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordian4"
                      >
                        <span>What tools or materials do i need?</span>
                      </button>
                    </h2>
                    <div
                      id="accordian4"
                      className="accordion-collapse collapse "
                    >
                      <div className="accordion-body faq-answer">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="faq-bottom-border"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-now-description">
            <Link to="/checkoutscreen">Buy Now</Link>
          </div>
        </div>
      </section>
      {/* <!-- Single description section end --> */}
      {/* <!-- Video modal start --> */}
      <div
        className="modal"
        id="review-video-modal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                src="https://www.youtube.com/embed/1SZle1skb84?si=2wmkzqF3sKhSy3xH"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video modal end --> */}
    </>
  );
};
export default SingleCourseDescription;
