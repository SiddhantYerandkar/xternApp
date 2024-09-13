import React, { useEffect, useState } from "react";
import CourseImg1 from "../assets/images/courses/courses-1.png";
import CourseImg2 from "../assets/images/courses/courses-2.png";
import CourseImg3 from "../assets/images/courses/courses-3.png";
import CourseImg4 from "../assets/images/courses/courses-4.png";
import CourseImg5 from "../assets/images/courses/courses-5.png";
import CourseImg6 from "../assets/images/courses/courses-6.png";
import CourseImg7 from "../assets/images/courses/courses-7.png";
import CourseImg8 from "../assets/images/courses/courses-8.png";
import CourseImg10 from "../assets/images/courses/courses-10.png";
import CourseImg11 from "../assets/images/courses/courses-11.png";
import CourseImg12 from "../assets/images/courses/courses-12.png";
import CourseImg13 from "../assets/images/courses/courses-13.png";
import CourseImg14 from "../assets/images/courses/courses-14.png";
import CourseImg15 from "../assets/images/courses/courses-15.png";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const SelectCoursesScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState("course2");
  const [expandedAccordion, setExpandedAccordion] = useState("select-course1");
  //const [loading, setLoading] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleRadioChange = (event) => {
    setSelectedCourse(event.target.id);
  };

  const handleAccordionToggle = (accordionId) => {
    setExpandedAccordion(expandedAccordion === accordionId ? "" : accordionId);
  };

  const courses = [
    { id: "course1", label: "Entrepreneurship (899)" },
    { id: "course2", label: "Communication (2,315)" },
    { id: "course3", label: "Management (356)" },
    { id: "course4", label: "Sales (523)" },
    { id: "course5", label: "Business Strategy (3,386)" },
    { id: "course6", label: "Operation (1,815)" },
    { id: "course7", label: "Project Management (815)" },
    { id: "course8", label: "Business Law (156)" },
    { id: "course9", label: "Human Resources (652)" },
    { id: "course10", label: "E-Commerce (2,815)" },
    { id: "course11", label: "Real Estate (1,349)" },
    { id: "course12", label: "Other Business (786)" },
  ];

  const renderCourseOptions = (courseList) => {
    return courseList.map((course) => (
      <div
        key={course.id}
        className={`form-check change-courses-sec mt-12 ${
          selectedCourse === course.id ? "language-sel" : ""
        }`}
      >
        <input
          className="form-check-input custom-input-select"
          name="course"
          type="radio"
          id={course.id}
          checked={selectedCourse === course.id}
          onChange={handleRadioChange}
        />
        <label
          className="form-check-label custom-lable-select"
          htmlFor={course.id}
        >
          {course.label}
        </label>
      </div>
    ));
  };
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Header start --> */}
      <header
        id="top-navbar"
        className={`top-navbar select ${isFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link to="/interestscreen">
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
              <p>Select Courses</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/homescreen">Skip</Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Select course screen start --> */}
      <section id="select-course-screen">
        <div className="container">
          <div className="select-course-wrap">
            <h1 className="d-none">Hidden</h1>
            <div className="goal-title mt-32">
              <p>Choose at least 1 course that interests you to study now.</p>
            </div>
            <div className="select-course-bottom mt-32">
              <div className="accordion" id="select-course">
                {[
                  {
                    accordionId: "select-course1",
                    headerImg: CourseImg1,
                    headerText1: "Business",
                    headerText2: "12,120 Courses",
                    courses: courses,
                  },
                  {
                    accordionId: "select-course2",
                    headerImg: CourseImg2,
                    headerText1: "Science",
                    headerText2: "226 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course3",
                    headerImg: CourseImg3,
                    headerText1: "Development",
                    headerText2: "956 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },

                  {
                    accordionId: "select-course4",
                    headerImg: CourseImg4,
                    headerText1: "Finance & Accounting",
                    headerText2: "132 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },

                  {
                    accordionId: "select-course5",
                    headerImg: CourseImg5,
                    headerText1: "IT & Software",
                    headerText2: "356 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course6",
                    headerImg: CourseImg6,
                    headerText1: "Office Productivity",
                    headerText2: "82 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course7",
                    headerImg: CourseImg7,
                    headerText1: "Personal Development",
                    headerText2: "94 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course8",
                    headerImg: CourseImg8,
                    headerText1: "Design",
                    headerText2: "182 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course9",
                    headerImg: CourseImg10,
                    headerText1: "Marketing",
                    headerText2: "256 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course10",
                    headerImg: CourseImg11,
                    headerText1: "Lifestyle",
                    headerText2: "68 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course11",
                    headerImg: CourseImg12,
                    headerText1: "Photography & Video",
                    headerText2: "136 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course12",
                    headerImg: CourseImg13,
                    headerText1: "Health & Fitness",
                    headerText2: "231 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course13",
                    headerImg: CourseImg14,
                    headerText1: "Music",
                    headerText2: "39 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                  {
                    accordionId: "select-course14",
                    headerImg: CourseImg15,
                    headerText1: "Teaching & Academics",
                    headerText2: "98 Courses",
                    courses: [
                      { id: "science1", label: "Entrepreneurship (899)" },
                      { id: "science2", label: "Communication (2,315)" },
                      { id: "science3", label: "Management (356)" },
                    ],
                  },
                ].map((accordion) => (
                  <div
                    key={accordion.accordionId}
                    className="accordion-item mt-16"
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button courses-custom-btn ${
                          expandedAccordion === accordion.accordionId
                            ? ""
                            : "collapsed"
                        }`}
                        type="button"
                        onClick={() =>
                          handleAccordionToggle(accordion.accordionId)
                        }
                        aria-expanded={
                          expandedAccordion === accordion.accordionId
                        }
                      >
                        <span className="course-header">
                          <span>
                            <img src={accordion.headerImg} alt="course-img" />
                          </span>
                          <span>
                            <span className="select-courses-txt1">
                              {accordion.headerText1}
                            </span>
                            <span className="select-courses-txt2 mt-12">
                              {accordion.headerText2}
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={accordion.accordionId}
                      className={`accordion-collapse collapse ${
                        expandedAccordion === accordion.accordionId
                          ? "show"
                          : ""
                      }`}
                      data-bs-parent="#select-course"
                    >
                      <div className="accordion-body">
                        <div className="select-course-bottom mt-16">
                          <div className="select-course-bottom-wrap">
                            <form className="select-course-form">
                              <div className="course-list">
                                {renderCourseOptions(accordion.courses)}
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="select-course-bottom-border mt-16"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="next-course mt-32">
            <Link to="/homescreen">Next</Link>
          </div>
        </div>
      </section>
      {/* <!-- Select course screen end --> */}
    </>
  );
};
export default SelectCoursesScreen;
