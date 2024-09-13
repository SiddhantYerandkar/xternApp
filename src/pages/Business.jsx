import React, { useState } from "react";
import FilterIcon from "../assets/images/mentor/filter-icon.svg";
import CourseImg1 from "../assets/images/trending-course/course1.png";
import CourseImg2 from "../assets/images/trending-course/course2.png";
import CourseImg3 from "../assets/images/trending-course/course3.png";
import CourseImg4 from "../assets/images/trending-course/course4.png";
import CourseImg5 from "../assets/images/trending-course/course5.png";
import BookmarkSvg from "../assets/svg/black-bookmark.svg";
import FillStar from "../assets/images/single-courses/orange-fill-star.svg";
import { Link } from "react-router-dom";

const Business = () => {
  const [bookmarks, setBookmarks] = useState([true, false, true, false, false]);

  const toggleBookmark = (index) => {
    setBookmarks(
      bookmarks.map((active, i) => (i === index ? !active : active))
    );
  };

  const courses = [
    {
      imgSrc: CourseImg1,
      svg: BookmarkSvg,
      category: "3D Design",
      title: "Create & Design a Modern 3D House in...",
      price: "$180.00",
      hiddenprice: "$180.00",
      rating: "5.0",
    },
    {
      imgSrc: CourseImg2,
      svg: BookmarkSvg,
      category: "Developement",
      title: "The Complete 2023 Fullstack Web Devel...",
      price: "$150.00",
      rating: "4.8",
    },
    {
      imgSrc: CourseImg3,
      svg: BookmarkSvg,
      category: "Fitness",
      title: "Complete Stretching: 30+ Exercises For...",
      price: "$140.00",
      hiddenprice: "$210.00",
      rating: "4.5",
    },
    {
      imgSrc: CourseImg4,
      svg: BookmarkSvg,
      category: "Lifestyle",
      title: "How to find the cheapest flights to any...",
      price: "$150.00",
      rating: "4.8",
    },
    {
      imgSrc: CourseImg5,
      svg: BookmarkSvg,
      category: "Music",
      title: "The Professional Guitar MasterclassName",
      price: "$225.00",
      rating: "4.6",
    },
  ];
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-navbar" className="top-navbar">
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link to="/categoryscreen">
                <svg
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
                    <rect width="24" height="24" fill="white"></rect>
                  </mask>
                  <g mask="url(#mask0_330_7385)">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="top-navbar-title">
              <p>Business</p>
            </div>
            <div className="skip-btn-goal">
              <a href="filter-screen.html">
                <img src={FilterIcon} alt="filter-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Trending courses start --> */}
      <section id="trending-course">
        <div className="container">
          <h1 className="d-none">Hideen</h1>
          <h2 className="d-none">Trending</h2>
          <div className="trending-course-wrap mt-32">
            {courses.map((course, index) => (
              <div
                className={`trending-course-details single-course ${
                  index === 0 ? "mt-32" : "mt-16"
                }`}
                key={index}
              >
                <div className="trending-course-img">
                  <Link to={"/single-course-description"}>
                    <img
                      src={course.imgSrc}
                      alt="course-img"
                      className="w-100"
                    />
                  </Link>
                  <div className="trending-bookmark">
                    <a
                      href="#"
                      className={`item-bookmark ${
                        bookmarks[index] ? "active" : ""
                      }`}
                      onClick={() => toggleBookmark(index)}
                    >
                      <img src={course.svg} alt="bookmark-icon" />
                    </a>
                  </div>
                  <div className="trending-name">
                    <p>{course.category}</p>
                  </div>
                </div>
                <div className="trending-course-bottom mt-12">
                  <div>
                    <p className="trending-txt1">{course.title}</p>
                  </div>
                  <div className="trending-course-price">
                    <div>
                      <span className="trending-txt2">{course.price}</span>
                      <span className="trending-txt3">
                        {course.hiddenprice}
                      </span>
                    </div>
                    <div>
                      <span className="trending-txt4">
                        <img src={FillStar} alt="star-img" />
                      </span>
                      <span className="trending-txt5">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="trending-course-details mt-16 single-course">
              <div className="trending-course-img">
                <img src={CourseImg2} alt="course-img" className="w-100" />
                <div className="trending-bookmark">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabindex="0"
                  >
                    <img src={BookmarkSvg} alt="bookmark-icon" />
                  </a>
                </div>
                <div className="trending-name">
                  <p>Development</p>
                </div>
              </div>
              <div className="trending-course-bottom mt-12">
                <div>
                  <p className="trending-txt1">
                    The Complete 2023 Fullstack Web Devel...
                  </p>
                </div>
                <div className="trending-course-price">
                  <div>
                    <span className="trending-txt2">$150.00</span>
                  </div>
                  <div>
                    <span className="trending-txt4">
                      <img src={FillStar} alt="star-img" />
                    </span>
                    <span className="trending-txt5">4.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="trending-course-details mt-16 single-course">
              <div className="trending-course-img">
                <img src={CourseImg3} alt="course-img" className="w-100" />
                <div className="trending-bookmark">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark active"
                    tabindex="0"
                  >
                    <img src={BookmarkSvg} alt="bookmark-icon" />
                  </a>
                </div>
                <div className="trending-name">
                  <p>Fitness</p>
                </div>
              </div>
              <div className="trending-course-bottom mt-12">
                <div>
                  <p className="trending-txt1">
                    Complete Stretching: 30+ Exercises For...
                  </p>
                </div>
                <div className="trending-course-price">
                  <div>
                    <span className="trending-txt2">$140.00</span>
                    <span className="trending-txt3">$210.00</span>
                  </div>
                  <div>
                    <span className="trending-txt4">
                      <img src={FillStar} alt="star-img" />
                    </span>
                    <span className="trending-txt5">4.5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="trending-course-details mt-16 single-course">
              <div className="trending-course-img">
                <img src={CourseImg4} alt="course-img" className="w-100" />
                <div className="trending-bookmark">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabindex="0"
                  >
                    <img src={BookmarkSvg} alt="bookmark-icon" />
                  </a>
                </div>
                <div className="trending-name">
                  <p>Lifestyle</p>
                </div>
              </div>
              <div className="trending-course-bottom mt-12">
                <div>
                  <p className="trending-txt1">
                    How to find the cheapest flights to any...
                  </p>
                </div>
                <div className="trending-course-price">
                  <div>
                    <span className="trending-txt2">$150.00</span>
                  </div>
                  <div>
                    <span className="trending-txt4">
                      <img src={FillStar} alt="star-img" />
                    </span>
                    <span className="trending-txt5">4.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="trending-course-details mt-16 single-course">
              <div className="trending-course-img">
                <img src={CourseImg5} alt="course-img" className="w-100" />
                <div className="trending-bookmark">
                  <a
                    href="javascript:void(0);"
                    className="item-bookmark"
                    tabindex="0"
                  >
                    <img src={BookmarkSvg} alt="bookmark-icon" />
                  </a>
                </div>
                <div className="trending-name">
                  <p>Music</p>
                </div>
              </div>
              <div className="trending-course-bottom mt-12">
                <div>
                  <p className="trending-txt1">
                    The Professional Guitar MasterclassName
                  </p>
                </div>
                <div className="trending-course-price">
                  <div>
                    <span className="trending-txt2">$225.00</span>
                  </div>
                  <div>
                    <span className="trending-txt4">
                      <img src={FillStar} alt="star-img" />
                    </span>
                    <span className="trending-txt5">4.6</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- Trending courses end --> */}
    </>
  );
};
export default Business;
