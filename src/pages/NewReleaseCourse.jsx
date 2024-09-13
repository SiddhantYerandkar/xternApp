import React, { useEffect, useState } from "react";
import FilterIcon from "../assets/images/mentor/filter-icon.svg";
import CourseImg1 from "../assets/images/new-course/cousre1.png";
import CourseImg2 from "../assets/images/new-course/cousre2.png";
import CourseImg3 from "../assets/images/new-course/cousre3.png";
import CourseImg4 from "../assets/images/new-course/cousre4.png";
import CourseImg5 from "../assets/images/new-course/cousre5.png";
import CourseImg6 from "../assets/images/new-course/cousre6.png";
import CourseImg7 from "../assets/images/new-course/cousre7.png";
import CourseImg8 from "../assets/images/new-course/cousre8.png";
import BookmarkSvg from "../assets/svg/black-bookmark.svg";
import GreayTimeIcon from "../assets/images/result-found/grey-time-icon.svg";
import { Link } from "react-router-dom";

const NewReleaseCourse = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [bookmarks, setBookmarks] = useState([
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    false,
  ]);

  const toggleBookmark = (index) => {
    setBookmarks(
      bookmarks.map((active, i) => (i === index ? !active : active))
    );
  };
  const courses = [
    {
      imgSrc: CourseImg1,
      category: "Business",
      svg: BookmarkSvg,
      title: "Master Your Mindset & Brain: Framestorm Your...",
      price: "$210.00",
      time: "3h 20m",
    },
    {
      imgSrc: CourseImg2,
      category: "Game Design",
      svg: BookmarkSvg,
      title: "The Ultimate Blender 3D Environments Course",
      price: "$65.00",
      time: "1h 30m",
    },
    {
      imgSrc: CourseImg3,
      category: "Developement",
      svg: BookmarkSvg,
      title: "The Complete 2023 Web Development Bootcamp",
      price: "$95.00",
      time: "2h 40m",
    },
    {
      imgSrc: CourseImg4,
      category: "Science",
      svg: BookmarkSvg,
      title: "The Beginners Course for Clinical Research",
      price: "$65.00",
      time: "1h 30m",
    },
    {
      imgSrc: CourseImg5,
      category: "LifeStyle",
      svg: BookmarkSvg,
      title: "Self Hypnosis For Personal Development...",
      price: "$95.00",
      time: "3h 20m",
    },
    {
      imgSrc: CourseImg6,
      category: "Photography",
      svg: BookmarkSvg,
      title: "Become a Better Photographer - Part I",
      price: "$65.00",
      time: "1h 30m",
    },
    {
      imgSrc: CourseImg7,
      category: "Health & Fitness",
      svg: BookmarkSvg,
      title: "15 Minutes x 15 Days Total Yoga Challenge",
      price: "$95.00",
      time: "3h 20m",
    },
    {
      imgSrc: CourseImg8,
      category: "Design",
      svg: BookmarkSvg,
      title: "Become a UX Designer | Learn the Skills & Get th...",
      price: "$65.00",
      time: "1h 30m",
    },
  ];
  return (
    <>
      {/* <!-- Header start --> */}
      <header
        id="top-navbar"
        className={`top-navbar ${isFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link to="/homescreen">
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
              <p>New Release</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/filter-screen">
                <img src={FilterIcon} alt="filter-icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- New Release content start --> */}
      <section id="new-courses">
        <div className="container">
          <h1 className="d-none">Course</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="new-courses-wrap mt-32">
            {courses.map((course, index) => (
              <div className="new-courses-sec single-course" key={index}>
                <div className="new-courses">
                  <Link
                    to="/single-course-description"
                    className="item-bookmark"
                    tabIndex="0"
                  >
                    <img src={course.imgSrc} alt="course-img" />
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
                  <div className="new-courses-txt">
                    <p>{course.category}</p>
                  </div>
                </div>
                <div className="trending-course-bottom mt-12">
                  <div>
                    <p className="new-courses-txt1">{course.title}</p>
                  </div>
                  <div className="trending-course-price">
                    <div>
                      <span className="new-courses-txt3">{course.price}</span>
                    </div>
                    <div>
                      <span className="new-courses-txt4">
                        <img src={GreayTimeIcon} alt="time-icon" />
                      </span>
                      <span className="new-courses-txt5">{course.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- New Release content end --> */}
    </>
  );
};
export default NewReleaseCourse;
