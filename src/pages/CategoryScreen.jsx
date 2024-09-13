import React, { useEffect, useState } from "react";
import CategoryImg1 from "../assets/images/category/category1.png";
import CategoryImg2 from "../assets/images/category/category2.png";
import CategoryImg3 from "../assets/images/category/category3.png";
import CategoryImg4 from "../assets/images/category/category4.png";
import CategoryImg5 from "../assets/images/category/category5.png";
import CategoryImg6 from "../assets/images/category/category6.png";
import CategoryImg7 from "../assets/images/category/category7.png";
import CategoryImg8 from "../assets/images/category/category8.png";
import CategoryImg9 from "../assets/images/category/category9.png";
import CategoryImg10 from "../assets/images/category/category10.png";
import CategoryImg11 from "../assets/images/category/category11.png";
import CategoryImg12 from "../assets/images/category/category12.png";
import CategoryImg13 from "../assets/images/category/category13.png";
import CategoryImg14 from "../assets/images/category/category14.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const CategoryScreen = () => {
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
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header" className={isFixed ? "fixed" : ""}>
        <div className="container">
          <div className="top-header-full">
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
              </Link>
            </div>
            <div className="header-title">
              <p>Categories</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Category screen start --> */}
      <section id="categories-section">
        <div className="container">
          <h1 className="d-none">Category</h1>
          <h2 className="d-none">Category</h2>
          <div className="categories-wrap mt-32">
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg1}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Business</h3>
                <p className="category-txt2">120 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg2}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Science</h3>
                <p className="category-txt2">266 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg3}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Development</h3>
                <p className="category-txt2">266 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg4}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Finance & Accounting</h3>
                <p className="category-txt2">132 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg5}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">IT & Software</h3>
                <p className="category-txt2">356 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg6}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Office Productivity</h3>
                <p className="category-txt2">82 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg7}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Personal Development</h3>
                <p className="category-txt2">94 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg8}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Design</h3>
                <p className="category-txt2">182 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg9}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Marketing</h3>
                <p className="category-txt2">254 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg10}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Lifestyle</h3>
                <p className="category-txt2">68 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg11}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Photography & Video</h3>
                <p className="category-txt2">136 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg12}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Health & Fitness</h3>
                <p className="category-txt2">231 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg13}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Music</h3>
                <p className="category-txt2">39 Courses</p>
              </div>
            </div>
            <div className="categories-content business-course">
              <Link to={"/business"}>
                <div>
                  <img
                    src={CategoryImg14}
                    alt="category-img"
                    className="w-100"
                  />
                </div>
              </Link>
              <div className="categories-title">
                <h3 className="category-txt1">Teaching & Academics</h3>
                <p className="category-txt2">98 Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Category screen end --> */}
    </>
  );
};
export default CategoryScreen;
