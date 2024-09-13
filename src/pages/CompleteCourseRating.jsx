import React, { useEffect, useState } from "react";
import CourseCompleteImg from "../assets/images/courses/course-completed-img.png";
import { Link, useNavigate } from "react-router-dom";
import OrangeStarUnfillSvg from "../assets/images/single-courses/orange-small-star-unfill.svg";

import OrangeStar from "../assets/images/single-courses/orange-small-star-fill.svg";
import Loading from "../components/Loading";
const CompleteCourseRating = () => {
  const [rating, setRating] = useState(1); // Initial rating state, set to 1 star
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  // Function to handle changes in rating
  const handleRatingChange = (value) => {
    setRating(value);
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
              <p>Course Complete</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Complete course rating screen start --> */}
      <section id="complete-course-rating">
        <div className="container">
          <div className="complete-course-rating-wrap">
            <div className="complete-course-rating-top mt-32">
              <img src={CourseCompleteImg} alt="cup-img" />
            </div>
            <div className="complete-course-rating-bottom mt-24">
              <h1 className="course-txt1">Course Completed!</h1>
              <p className="course-txt2 mt-12">
                Please leave a review for your course
              </p>
              <div className="course-rating-sec mt-24">
                <div className="star-rating">
                  {/* Loop through the number of stars */}
                  {[...Array(5)].map((_, index) => {
                    const ratingValue = index + 1; // Ratings start from 1
                    return (
                      <label
                        key={index}
                        htmlFor={`star-${ratingValue}`}
                        title={`${ratingValue} stars`}
                      >
                        <input
                          id={`star-${ratingValue}`}
                          type="radio"
                          name="rating"
                          value={`star-${ratingValue}`}
                          checked={rating === ratingValue} // Check if current star is selected
                          onChange={() => handleRatingChange(ratingValue)} // Call function to handle change
                        />
                        <img
                          className="star-icon"
                          src={
                            ratingValue <= rating
                              ? OrangeStar
                              : OrangeStarUnfillSvg
                          }
                          size={24}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="rating-para">
                <p>The course & mentor are great! 🔥</p>
              </div>
              <div className="write-review-btn mt-32">
                <Link to="/review-screen">Write Review</Link>
              </div>
              <div className="cancel-review-btn mt-16">
                <Link to="/">Cancel</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Complete course rating screen end --> */}
    </>
  );
};
export default CompleteCourseRating;
