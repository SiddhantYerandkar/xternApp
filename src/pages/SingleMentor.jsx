import React, { useState } from "react";
import ClientImg from "../assets/images/single-mentor/client-img.png";
import CommentIcon from "../assets/images/single-mentor/comment-icon.svg";
import FollowBtnIcon from "../assets/images/single-mentor/follow-btn-icon.svg";
import CourseIcon from "../assets/images/single-mentor/course-icon.svg";
import ExperienceIcon from "../assets/images/single-mentor/experience-icon.svg";
import StudentIcon from "../assets/images/single-mentor/student-icon.svg";
import RatingIcon from "../assets/images/single-mentor/rating-icon.svg";
import TimeIcon from "../assets/images/checkout-screen/time-icon.svg";
import BookmarkUnfillSvg from "../assets/images/single-courses/bookmark-unfill.svg";
import StudentImg1 from "../assets/images/single-mentor/student1.png";
import StudentImg2 from "../assets/images/single-mentor/student2.png";
import StudentImg3 from "../assets/images/single-mentor/student3.png";
import StudentImg4 from "../assets/images/single-mentor/student4.png";
import ClientImg1 from "../assets/images/single-courses/client1.png";
import ClientImg2 from "../assets/images/single-courses/client2.png";
import OrangeStar from "../assets/images/single-courses/orange-star.svg";
import FillStar from "../assets/images/single-courses/orange-fill-star.svg";
import OrangeStarUnfill from "../assets/images/single-courses/orange-star-unfill.svg";
import CourseImg1 from "../assets/images/single-mentor/course1.png";
import CourseImg2 from "../assets/images/single-mentor/course2.png";
import LikeIcon from "../assets/images/single-courses/like-icon.svg";
import DislikeIcon from "../assets/images/single-courses/dislike-icon.svg";
import { useNavigate } from "react-router-dom";

const SingleMentor = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarkedIcon, setIsBookmarkedIcon] = useState(false);
  const navigate = useNavigate();

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleBookmarkedIcon = () => {
    setIsBookmarkedIcon(!isBookmarkedIcon);
  };

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header">
        <div className="container">
          <div className="top-header-full">
            <div className="back-btn">
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
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="header-title">
              <p>Mentor</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Single mentor screen content start --> */}
      <section id="single-mentor-sec">
        <div className="container">
          <h1 className="d-none">Hideen</h1>
          <h2 className="d-none">Mentor</h2>
          <div className="single-mentor-sec-wrap mt-32">
            <div className="single-mentor-first-wrap">
              <div className="mentor-img-sec">
                <img src={ClientImg} alt="client-img" />
              </div>
              <div className="single-mentor-details">
                <h3>Claire Joe</h3>
                <h4 className="mt-12">356k followers</h4>
                <p className="mt-16">Development</p>
              </div>
              <div className="mentor-follow-sec">
                <div className="mentor-follow-btn">
                  <img src={FollowBtnIcon} alt="follow-btn" />
                </div>
                <div className="mentor-comment">
                  <img src={CommentIcon} alt="follow-btn" />
                </div>
              </div>
            </div>
            <div className="navbar-boder mt-24"></div>
            <div className="single-mentor-second-wrap-sec mt-24">
              <div className="single-mentor-second-wrap">
                <div className="mentor-icon purple-bg">
                  <img src={CourseIcon} alt="course-icon" />
                </div>
                <div className="mentor-content-single mt-12">
                  <h3>2</h3>
                  <p>Courses</p>
                </div>
              </div>
              <div className="single-mentor-second-wrap">
                <div className="mentor-icon green-bg">
                  <img src={ExperienceIcon} alt="experience-icon" />
                </div>
                <div className="mentor-content-single mt-12">
                  <h3>10+</h3>
                  <p>Experience</p>
                </div>
              </div>
              <div className="single-mentor-second-wrap">
                <div className="mentor-icon pink-bg">
                  <img src={StudentIcon} alt="student-icon" />
                </div>
                <div className="mentor-content-single mt-12">
                  <h3>245k</h3>
                  <p>Students</p>
                </div>
              </div>
              <div className="single-mentor-second-wrap">
                <div className="mentor-icon orange-bg">
                  <img src={RatingIcon} alt="rating-icon" />
                </div>
                <div className="mentor-content-single mt-12">
                  <h3>4.8</h3>
                  <p>Rating</p>
                </div>
              </div>
            </div>
            <div className="single-mentor-third-sec">
              <div className="fifth-decs-sec mt-32">
                <div className="fifth-decs-sec-wrap">
                  <ul
                    className="nav nav-pills single-mentor-tab"
                    id="mentor-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="mentor-course-tab-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#course-content"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        Courses
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="student-tab-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#student-content"
                        type="button"
                        role="tab"
                        aria-selected="false"
                        tabIndex="-1"
                      >
                        Students
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
                        tabIndex="-1"
                      >
                        Reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="course-tab-btn">
                    <div
                      className="tab-pane fade show active mt-16"
                      id="course-content"
                      role="tabpanel"
                      tabIndex="0"
                    >
                      <div className="mentor-course-tab-wrap">
                        <div className="checkout-screen-top">
                          <div className="checkout-first">
                            <img src={CourseImg1} alt="social-media-img" />
                          </div>
                          <div className="checkout-second">
                            <div className="checkout-second-wrap">
                              <div className="checkout-design">
                                <p>Development</p>
                              </div>
                              <div className="checkout-bookmark">
                                <div className="checkout-bookmark-sec">
                                  <a
                                    href=""
                                    className={`item-bookmark ${
                                      isBookmarked ? "active" : ""
                                    }`}
                                    onClick={toggleBookmark}
                                    tabIndex="0"
                                  >
                                    <img
                                      src={BookmarkUnfillSvg}
                                      alt="bookmark-icon"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="mt-12">
                              <h1 className="check-txt1">
                                The Complete 2023 Fullstack Web Developer Course
                              </h1>
                            </div>
                            <div className="checkout-second-third mt-12">
                              <div>
                                <span className="check-txt2">$170.00</span>
                              </div>
                              <div>
                                <span>
                                  <img src={TimeIcon} alt="time-icon" />
                                </span>
                                <span className="check-txt4">3h 30m</span>
                              </div>
                            </div>
                            <div className="checkout-second-fourth">
                              <div>
                                <span>
                                  <img src={FillStar} alt="star-img" />
                                </span>
                                <span className="check-txt5">
                                  4.3 (3.7k ratings) | 104.2k students
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="checkout-screen-top mt-16">
                          <div className="checkout-first">
                            <img src={CourseImg2} alt="social-media-img" />
                          </div>
                          <div className="checkout-second">
                            <div className="checkout-second-wrap">
                              <div className="checkout-design">
                                <p>Development</p>
                              </div>
                              <div className="checkout-bookmark">
                                <div className="checkout-bookmark-sec">
                                  <a
                                    href=""
                                    className={`item-bookmark ${
                                      isBookmarkedIcon ? "active" : ""
                                    }`}
                                    onClick={toggleBookmarkedIcon}
                                    tabIndex="0"
                                  >
                                    <img
                                      src={BookmarkUnfillSvg}
                                      alt="bookmark-icon"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="mt-12">
                              <h1 className="check-txt1">
                                Kids Coding - Introduction to HTML, CSS and
                                JavaScript!
                              </h1>
                            </div>
                            <div className="checkout-second-third mt-12">
                              <div>
                                <span className="check-txt2">$210.00</span>
                              </div>
                              <div>
                                <span>
                                  <img src={TimeIcon} alt="time-icon" />
                                </span>
                                <span className="check-txt4">6h 40m</span>
                              </div>
                            </div>
                            <div className="checkout-second-fourth">
                              <div>
                                <span>
                                  <img src={FillStar} alt="star-img" />
                                </span>
                                <span className="check-txt5">
                                  4.6 (2.1k ratings) | 86.7k students
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="student-tabContent">
                    <div
                      className="tab-pane fade show"
                      id="student-content"
                      role="tabpanel"
                      tabIndex="0"
                    >
                      <div className="mentor-student-wrap">
                        <div className="mentor-student-content mt-16">
                          <div className="mentor-img">
                            <img src={StudentImg1} alt="student-img" />
                          </div>
                          <div className="mentor-name">
                            <h2>Benny Spanbauer</h2>
                            <h3>Student</h3>
                          </div>
                          <div className="mentor-comment-tab">
                            <img src={CommentIcon} alt="follow-btn" />
                          </div>
                        </div>
                        <div className="mentor-student-content mt-16">
                          <div className="mentor-img">
                            <img src={StudentImg2} alt="student-img" />
                          </div>
                          <div className="mentor-name">
                            <h2>Freida Varnes</h2>
                            <h3>Junior Developer</h3>
                          </div>
                          <div className="mentor-comment-tab">
                            <img src={CommentIcon} alt="follow-btn" />
                          </div>
                        </div>
                        <div className="mentor-student-content mt-16">
                          <div className="mentor-img">
                            <img src={StudentImg3} alt="student-img" />
                          </div>
                          <div className="mentor-name">
                            <h2>Francene Vandyne</h2>
                            <h3>Student</h3>
                          </div>
                          <div className="mentor-comment-tab">
                            <img src={CommentIcon} alt="follow-btn" />
                          </div>
                        </div>
                        <div className="mentor-student-content mt-16">
                          <div className="mentor-img">
                            <img src={StudentImg4} alt="student-img" />
                          </div>
                          <div className="mentor-name">
                            <h2>Tanner Stafford</h2>
                            <h3>Freelancer</h3>
                          </div>
                          <div className="mentor-comment-tab">
                            <img src={CommentIcon} alt="follow-btn" />
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
                      aria-labelledby="reviews-tab-btn"
                    >
                      <div className="mentor-review-tab">
                        <div className="review-third-sec-content mt-16">
                          <div className="review-third-sec-wrap">
                            <div className="review-bottom-first">
                              <img src={ClientImg1} alt="client-img" />
                            </div>
                            <div className="review-bottom-second">
                              <h4>Ami Jackson</h4>
                              <div className="review-content">
                                <div className="review-star">
                                  <ul>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img
                                        src={OrangeStarUnfill}
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
                              The course is very good. the explanation of the
                              mentor is very clear and easy to understand 😎😎
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
                                  <img src={DislikeIcon} alt="review-like" />
                                </span>
                                <span className="dislike-txt">10</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-third-sec-content mt-16">
                          <div className="review-third-sec-wrap">
                            <div className="review-bottom-first">
                              <img src={ClientImg2} alt="client-img" />
                            </div>
                            <div className="review-bottom-second">
                              <h4>Kevin Smith</h4>
                              <div className="review-content">
                                <div className="review-star">
                                  <ul>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
                                    </li>
                                    <li>
                                      <img src={OrangeStar} alt="star-img" />
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
                              Throughout the course, She explained everything so
                              much more clearly, everything was easy, and the
                              course is quite good.
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
                                  <img src={DislikeIcon} alt="review-like" />
                                </span>
                                <span className="dislike-txt">56</span>
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
        </div>
      </section>
      {/* <!-- Single mentor screen content end --> */}
    </>
  );
};
export default SingleMentor;
