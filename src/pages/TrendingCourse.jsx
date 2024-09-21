import React, { useEffect, useState } from "react";
import FilterIcon from "../assets/images/mentor/filter-icon.svg";
import BookmarkSvg from "../assets/svg/black-bookmark.svg";
import FillStar from "../assets/images/single-courses/orange-fill-star.svg";
import CourseImg1 from "../assets/images/trending-course/course1.png";
import CourseImg2 from "../assets/images/trending-course/course2.png";
import CourseImg3 from "../assets/images/trending-course/course3.png";
import CourseImg4 from "../assets/images/trending-course/course4.png";
import CourseImg5 from "../assets/images/trending-course/course5.png";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const TrendingCourse = () => {
  const [bookmarks, setBookmarks] = useState([true, false, true, true, false]);
  const [courses, setCourses] = useState([]);
  
  const toggleBookmark = (index) => {
    setBookmarks(
      bookmarks.map((active, i) => (i === index ? !active : active))
    );
  };
  const trendingCourse = [
    {
      imgSrc: CourseImg1,
      category: "Design",
      title: "Create & Design a Modern 3D House in...",
      price: "$180.00",
      hiddenprice: "$210.00",
      star: "5.0",
    },
    {
      imgSrc: CourseImg2,
      category: "Developement",
      title: "The Complete 2023 Fullstack Web Devel...",
      price: "$150.00",
      star: "4.8",
    },
    {
      imgSrc: CourseImg3,
      category: "Fitness",
      title: "Complete Stretching: 30+ Exercises For...",
      price: "$140.00",
      hiddenprice: "$210.00",
      star: "4.5",
    },
    {
      imgSrc: CourseImg4,
      category: "Lifestyle",
      title: "How to find the cheapest flights to any...",
      price: "$150.00",
      star: "4.8",
    },
    {
      imgSrc: CourseImg5,
      category: "Music",
      title: "The Professional Guitar MasterclassName",
      price: "$225.00",
      star: "4.6",
    },
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "codingChallenges"));
        const coursesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCourses(coursesList);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);


  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-navbar" className="top-navbar">
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
              <p>Trending Courses</p>
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
      {/* <!-- Trending courses start --> */}
      <section id="trending-course">
        <div className="container">
          <h1 className="d-none">Hidden</h1>
          <h2 className="d-none">Trending</h2>
          <div className="trending-course-wrap mt-32">
            {courses.map((course, index) => (
              <div
                className={`trending-course-details single-course ${index === 0 ? "mt-12" : "mt-16"
                  }`}
                key={course.id}
              >
                <div className="trending-course-img">
                  <Link to="/single-course-description">
                    <img
                      src={CourseImg1}  // Placeholder image
                      alt="course-img"
                      className="w-100"
                    />
                  </Link>
                  <div className="trending-bookmark">
                    <a
                      href="#"
                      className={`item-bookmark ${bookmarks[index] ? "active" : ""
                        }`}
                      onClick={() => toggleBookmark(index)}
                    >
                      <img src={BookmarkSvg} alt="bookmark-icon" />
                    </a>
                  </div>
                  <div className="trending-name">
                    <p>{course.category}</p>  {/* Display skill from Firestore */}
                  </div>
                </div>
                <div className="trending-course-bottom mt-12">
                  <div>
                    <p className="trending-txt1">{course.title}</p>  {/* Display title from Firestore */}
                    <p className="trending-txt2">{course.detail}</p>  {/* Display detail from Firestore */}
                  </div>
                  <div className="trending-course-price">
                    <div>
                      <span className="trending-txt2">{course.price}</span>  {/* Display points as price */}
                      <span className="trending-txt3">
                        {course.hiddenprice}  {/* Placeholder for hidden price */}
                      </span>
                    </div>
                    <div>
                      <span className="trending-txt4">
                        <img src={FillStar} alt="star-img" />
                      </span>
                      <span className="trending-txt5">5.0</span> {/* Default rating */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Trending courses end --> */}
    </>
  );
};
export default TrendingCourse;
