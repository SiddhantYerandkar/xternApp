import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const FilterScreen = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  //const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

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

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header" className={isFixed ? "fixed" : ""}>
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
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Filter screen start--> */}
      <section id="filter-screen">
        <div className="container">
          <div className="filter-screen-wrap">
            <h1 className="d-none">Hidden</h1>
            <div className="select-course-bottom mt-32">
              <div className="select-course-bottom-wrap">
                <h2 className="filter-title">Categories</h2>
                <form className="select-course-form mt-16">
                  <div className="course-list">
                    <div className="form-check change-courses-sec">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course1"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course1"
                      >
                        Business (2,315)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course2"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course2"
                      >
                        Science (356)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course3"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course3"
                      >
                        Development (1,856)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course4"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course4"
                      >
                        Finance & Accounting (899)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec  mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course5"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course5"
                      >
                        IT & Software (2,315)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course6"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course6"
                      >
                        Office Productivity (356)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course7"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course7"
                      >
                        Personal Development (523)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec language-sel mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course8"
                        checked={isChecked}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course8"
                      >
                        Design (3,386)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course9"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course9"
                      >
                        Marketing (1,815)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course10"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course10"
                      >
                        Lifestyle (923)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course11"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course11"
                      >
                        Photography & Video (412)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course12"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course12"
                      >
                        Health & Fitness (794)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course13"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course13"
                      >
                        Music (1,315)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course14"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course14"
                      >
                        Teaching & Academics (463)
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="select-course-bottom-wrap mt-32">
                <h2 className="filter-title">Level</h2>
                <form className="select-course-form mt-16">
                  <div className="course-list">
                    <div className="form-check change-courses-sec">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course15"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course15"
                      >
                        All Level (8,715)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec language-sel mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course16"
                        checked={isChecked}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course16"
                      >
                        Beginner (2,562)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course17"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course17"
                      >
                        Intermediate (2,856)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course18"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course18"
                      >
                        Expert (2,789)
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="select-course-bottom-wrap mt-32">
                <h2 className="filter-title">Video Duration</h2>
                <form className="select-course-form mt-16">
                  <div className="course-list">
                    <div className="form-check change-courses-sec">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course19"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course19"
                      >
                        0 -2 hours (8,715)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec language-sel mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course20"
                        checked={isChecked}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course20"
                      >
                        3 - 6 hours (2,562)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course21"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course21"
                      >
                        7 - 16 hours (2,856)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course22"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course22"
                      >
                        17+ hours (2,789)
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="select-course-bottom-wrap mt-32">
                <h2 className="filter-title">Rating</h2>
                <form className="select-course-form mt-16">
                  <div className="course-list">
                    <div className="form-check change-courses-sec">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course23"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course23"
                      >
                        5.0 (23,715)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec language-sel mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course24"
                        checked={isChecked}
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course24"
                      >
                        4.5 & up (18,562)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course25"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course25"
                      >
                        4.0 & up (14,856)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course26"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course26"
                      >
                        3.5 & up (12,789)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course27"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course27"
                      >
                        3.0 & up (10,213)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course28"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course28"
                      >
                        2.5 & up (8,789)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course29"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course29"
                      >
                        2.0 & up (6,259)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course30"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course30"
                      >
                        1.5 & up (4,789)
                      </label>
                    </div>
                    <div className="form-check change-courses-sec mt-12">
                      <input
                        className="form-check-input custom-input-select"
                        name="course"
                        type="radio"
                        id="course31"
                      />
                      <label
                        className="form-check-label custom-lable-select"
                        htmlFor="course31"
                      >
                        1.0 & up (1,259)
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="filter-sec-btn mt-32">
              <div className="reset-btn">
                <Link to="" onClick={handleBackClick}>
                  Reset
                </Link>
              </div>
              <div className="filter-btn">
                <Link to="" onClick={handleBackClick}>
                  Filter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Filter screen end--> */}
    </>
  );
};
export default FilterScreen;
