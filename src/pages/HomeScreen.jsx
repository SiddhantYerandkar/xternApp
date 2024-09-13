import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RightArrow from "../assets/svg/right-arrow.svg";
import CategoryImg1 from "../assets/images/category/category1.png";
import CategoryImg2 from "../assets/images/category/category2.png";
import CategoryImg3 from "../assets/images/category/category3.png";
import CourseImg1 from "../assets/images/trending-course/course1.png";
import CourseImg2 from "../assets/images/trending-course/course2.png";
import CourseImg3 from "../assets/images/homescreen/course3.png";
import CourseImg4 from "../assets/images/homescreen/course4.png";
import CourseImg5 from "../assets/images/homescreen/course5.png";
import CourseImg6 from "../assets/images/homescreen/course6.png";
import CourseImg7 from "../assets/images/homescreen/course7.png";
import OrangeStar from "../assets/images/result-found/orange-star.svg";
import BookmarkSvg from "../assets/svg/black-bookmark.svg";
import BookmarkUnfillSvg from "../assets/images/single-courses/bookmark-unfill.svg";
import FillStar from "../assets/images/single-courses/orange-fill-star.svg";
import Mentor1 from "../assets/images/homescreen/mentor1.png";
import Mentor2 from "../assets/images/homescreen/mentor2.png";
import Mentor3 from "../assets/images/homescreen/mentor3.png";
import Mentor4 from "../assets/images/homescreen/mentor4.png";
import ReleaseImg1 from "../assets/images/homescreen/release1.png";
import ReleaseImg2 from "../assets/images/homescreen/release2.png";
import ReleaseImg3 from "../assets/images/homescreen/release3.png";
import GreayTimeIcon from "../assets/images/result-found/grey-time-icon.svg";
import GurujiLogo from "../assets/images/logo/logo.png";
import CloseIcon from "../assets/svg/close-line.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
//import Loading from "../components/Loading";
import DarkLightmode from "../components/DarkLightMode";

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBookmarkedIcon, setIsBookmarkedIcon] = useState(false);
  const [isBookmarkIcon, setIsBookmarkIcon] = useState(false);
 // const [loading, setLoading] = useState(true);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleBookmarkedIcon = () => {
    setIsBookmarkedIcon(!isBookmarkedIcon);
  };

  const toggleBookmarkIcon = () => {
    setIsBookmarkIcon(!isBookmarkIcon);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleInstallApp = () => {
    // Logic to prompt the user to install the app
    alert("Add to home screen functionality goes here.");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    // Clear the timer when the component unmounts or when isOpen becomes true
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    swipeToSlide: true,
    infinite: true,
    variableWidth: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
  };

    const CompanySettings = {
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


  const settingsNew = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    infinite: true,
    autoplaySpeed: 1500,
    dots: false,
    arrows: false,
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
      <header
        id="top-navbar"
        className={`top-navbar ${isFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <a href="#offcanvasExample" data-bs-toggle="offcanvas">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_230_107"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="white" />
                  </mask>
                  <g mask="url(#mask0_230_107)">
                    <path
                      d="M19 6.87301C19.3062 7.04981 19.5601 7.30464 19.7358 7.61153C19.9115 7.91843 20.0026 8.26641 20 8.62001V15.156C19.9999 15.5127 19.9045 15.8628 19.7235 16.1701C19.5426 16.4775 19.2828 16.7309 18.971 16.904L12.971 20.737C12.674 20.902 12.3398 20.9885 12 20.9885C11.6602 20.9885 11.326 20.902 11.029 20.737L5.029 16.904C4.71736 16.7309 4.45763 16.4777 4.27671 16.1706C4.0958 15.8634 4.00026 15.5135 4 15.157V8.62001C4.00008 8.26337 4.09553 7.91323 4.27646 7.60589C4.45739 7.29854 4.71721 7.04516 5.029 6.87201L11.029 3.30001C11.3348 3.12978 11.679 3.04044 12.029 3.04044C12.379 3.04044 12.7232 3.12978 13.029 3.30001L19.029 6.87301H19V6.87301Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div className="top-navbar-title">
              <p>Guruji</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/notification">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_230_100"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="white" />
                  </mask>
                  <g mask="url(#mask0_230_100)">
                    <path
                      d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <circle cx="18" cy="6" r="4" fill="#F97316" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Homescreen content start --> */}
      <section id="homescreen">
        <div className="home-first-sec mt-32">
          <div className="container">
            <div className="home-first-sec-wrap">
              <h1>Hey, Jesica</h1>
              <p className="mt-8">Find a course you want to learn</p>
            </div>
            <div className="serachbar-homepage2 mt-24">
              <div className="input-group search-page-searchbar ">
                <span className="input-group-text search-iconn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9395 1.9313C5.98074 1.9313 1.94141 5.97063 1.94141 10.9294C1.94141 15.8881 5.98074 19.9353 10.9395 19.9353C13.0575 19.9353 15.0054 19.193 16.5449 17.9606L20.293 21.7067C20.4821 21.888 20.7347 21.988 20.9967 21.9854C21.2587 21.9827 21.5093 21.8775 21.6947 21.6924C21.8801 21.5073 21.9856 21.2569 21.9886 20.9949C21.9917 20.7329 21.892 20.4802 21.7109 20.2908L17.9629 16.5427C19.1963 15.0008 19.9395 13.0498 19.9395 10.9294C19.9395 5.97063 15.8982 1.9313 10.9395 1.9313ZM10.9395 3.93134C14.8173 3.93134 17.9375 7.05153 17.9375 10.9294C17.9375 14.8072 14.8173 17.9352 10.9395 17.9352C7.06162 17.9352 3.94141 14.8072 3.94141 10.9294C3.94141 7.05153 7.06162 3.93134 10.9395 3.93134Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  placeholder="Search Here"
                  className="form-control search-text-result"
                  id="search-input"
                />
              </div>
              <button className="close-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_210_244"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="white" />
                  </mask>
                  <g mask="url(#mask0_210_244)">
                    <path
                      d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6H12"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 6H20"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12H6"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12H20"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H15"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 18H20"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="home-offer-sec mt-32">
          <div className="container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel slide-shop-now2"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active show-now2-custom-btn"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  className="show-now2-custom-btn"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  className="show-now2-custom-btn"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="shop-now2-sec">
                    <div className="offer-details">
                      <div className="offer-details-wrap">
                        <div className="offer-price">
                          <p>40% OFF</p>
                          <h2 className="mt-12">Today’s Special</h2>
                        </div>
                        <div className="home1-shop-now-btn">
                          <p>USE CODE G40</p>
                        </div>
                      </div>
                      <div className="discount-txt mt-16">
                        <p>
                          Get a discount for every course order! Only valid for
                          today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="shop-now2-sec">
                    <div className="offer-details">
                      <div className="offer-details-wrap">
                        <div className="offer-price">
                          <p>40% OFF</p>
                          <h2 className="mt-12">Today’s Special</h2>
                        </div>
                        <div className="home1-shop-now-btn">
                          <p>USE CODE G40</p>
                        </div>
                      </div>
                      <div className="discount-txt mt-16">
                        <p>
                          Get a discount for every course order! Only valid for
                          today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="shop-now2-sec">
                    <div className="offer-details">
                      <div className="offer-details-wrap">
                        <div className="offer-price">
                          <p>40% OFF</p>
                          <h2 className="mt-12">Today’s Special</h2>
                        </div>
                        <div className="home1-shop-now-btn">
                          <p>USE CODE G40</p>
                        </div>
                      </div>
                      <div className="discount-txt mt-16">
                        <p>
                          Get a discount for every course order! Only valid for
                          today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-release mt-32">
          <div className="home-category-wrap container">
            <div className="homescreen-second-wrapper-top">
              <div className="categories-first">
                <h2 className="home1-txt3">🙌 Projects</h2>
              </div>
              <div className="view-all-second">
                <Link to="/new-release-course">
                  <p className="see-all-txt">
                    See all
                    <span>
                      <img src={RightArrow} alt="right-arrow" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-release-bottom-sec mt-16">
            <Slider {...settingsNew}>
              <div className="new-courses-sec">
                <div className="new-courses">
                  <Link to="/single-course-description">
                    <img src={ReleaseImg1} alt="course-img" />
                  </Link>
                  <div className="trending-bookmark">
                    <a
                      href="#"
                      className={`item-bookmark ${
                        isBookmarked ? "active" : ""
                      }`}
                      onClick={toggleBookmark}
                      tabIndex="0"
                    >
                      <img src={BookmarkSvg} alt="bookmark-icon" />
                    </a>
                  </div>
                  <div className="new-courses-txt">
                    <p>Business</p>
                  </div>
                </div>
                <div className="trending-course-bottom mt-12">
                  <div>
                    <p className="new-courses-txt1">
                      Master Your Mindset & Brain: Framestorm Your...
                    </p>
                  </div>
                  <div className="trending-course-price">
                    <div>
                      <span className="new-courses-txt3">$210.00</span>
                    </div>
                    <div>
                      <span className="new-courses-txt4">
                        <img src={GreayTimeIcon} alt="time-icon" />
                      </span>
                      <span className="new-courses-txt5">3h 20m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-courses-sec">
                <div className="new-courses">
                  <Link to="/single-course-description">
                    <img src={ReleaseImg2} alt="course-img" />
                  </Link>
                  <div className="trending-bookmark">
                    <a
                      href="#"
                      className={`item-bookmark ${
                        isBookmarked ? "active" : ""
                      }`}
                      onClick={toggleBookmark}
                      tabIndex="0"
                    >
                      <img src={BookmarkSvg} alt="bookmark-icon" />
                    </a>
                  </div>
                  <div className="new-courses-txt">
                    <p>Game Design</p>
                  </div>
                </div>
                <div className="trending-course-bottom mt-12">
                  <div>
                    <p className="new-courses-txt1">
                      Introduction to Game Localization
                    </p>
                  </div>
                  <div className="trending-course-price">
                    <div>
                      <span className="new-courses-txt3">$65.00</span>
                    </div>
                    <div>
                      <span className="new-courses-txt4">
                        <img src={GreayTimeIcon} alt="time-icon" />
                      </span>
                      <span className="new-courses-txt5">1h 30m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-courses-sec">
                <div className="new-courses">
                  <Link to="/single-course-description">
                    <img src={ReleaseImg3} alt="course-img" />
                  </Link>
                  <div className="trending-bookmark">
                    <a
                      href="#"
                      className={`item-bookmark ${
                        isBookmarked ? "active" : ""
                      }`}
                      onClick={toggleBookmark}
                      tabIndex="0"
                    >
                      <img src={BookmarkSvg} alt="bookmark-icon" />
                    </a>
                  </div>
                  <div className="new-courses-txt">
                    <p>Development</p>
                  </div>
                </div>
                <div className="trending-course-bottom mt-12">
                  <div>
                    <p className="new-courses-txt1">
                      The Complete 2023 Fullstack Web Develope...
                    </p>
                  </div>
                  <div className="trending-course-price">
                    <div>
                      <span className="new-courses-txt3">$210.00</span>
                    </div>
                    <div>
                      <span className="new-courses-txt4">
                        <img src={GreayTimeIcon} alt="time-icon" />
                      </span>
                      <span className="new-courses-txt5">3h 20m</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="home-course mt-32">
          <div className="home-course-wrapper-top">
            <div className="container">
              <div className="categories-first">
                <h2 className="home1-txt3">🧿 All Internships</h2>
              </div>
            </div>
          </div>
          <div className="home-course-wrapper-bottom mt-16">
            <div className="home-course-wrapper-bottom-full">
              <ul className="nav nav-pills" id="homepage1-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active custom-home1-tab-btn"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    🔥All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-clothes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-clothes"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    💡3D Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-electronics-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-electronics"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    💰Business
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link custom-home1-tab-btn"
                    id="pills-cosmetics-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-cosmetics"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    📢Marketing
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane show active"
                  id="pills-all"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg3} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Life Style</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
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
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>
                                Make-up for Beginners: learn doing make-up like
                                a Pro
                              </h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$210.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">6h 40m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.8 (6.5k ratings) | 2.7k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-found-bottom-wrap mt-16 single-course ">
                      <div className="result-img-sec">
                        <img src={CourseImg4} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Music</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
                                className={`item-bookmark ${
                                  isBookmarkIcon ? "active" : ""
                                }`}
                                onClick={toggleBookmarkIcon}
                                tabIndex="0"
                              >
                                <img
                                  src={BookmarkUnfillSvg}
                                  alt="bookmark-icon"
                                />
                              </a>
                            </div>
                          </div>
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>
                                Acoustic Guitar and Electric Guitar Lessons:
                                Getting Started
                              </h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$170.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">3h 30m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.3 (3.7k ratings) | 104.2k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg5} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Photography</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
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
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>
                                Night Photography: You Can Shoot Stunning Night
                                Photos
                              </h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$210.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">6h 40m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.6 (2.1k ratings) | 86.7k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg6} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Design</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
                                className="item-bookmark"
                                tabIndex="0"
                              >
                                <img
                                  src={BookmarkUnfillSvg}
                                  alt="bookmark-icon"
                                />
                              </a>
                            </div>
                          </div>
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>
                                Learn Figma - UI/UX Design Essential Training
                              </h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$140.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">3h 20m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.8 (12.5k ratings) | 52.9k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg7} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Marketing</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
                                className={`item-bookmark ${
                                  isBookmarked ? "active" : ""
                                }`}
                                onClick={toggleBookmarkIcon}
                                tabIndex="0"
                              >
                                <img
                                  src={BookmarkUnfillSvg}
                                  alt="bookmark-icon"
                                />
                              </a>
                            </div>
                          </div>
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>YouTube SEO: How to Rank #1 on YouTube</h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$99.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">6h 40m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.9 (1.2k ratings) | 5.3k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-clothes"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg6} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Design</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
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
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>
                                Learn Figma - UI/UX Design Essential Training
                              </h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$140.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">3h 20m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.8 (12.5k ratings) | 52.9k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-electronics"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg4} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Music</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
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
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>
                                Acoustic Guitar and Electric Guitar Lessons:
                                Getting Started
                              </h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$170.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">3h 30m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.3 (3.7k ratings) | 104.2k students
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-cosmetics"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container">
                    <div className="result-found-bottom-wrap mt-16 single-course">
                      <div className="result-img-sec">
                        <img src={CourseImg7} alt="course-img" />
                      </div>
                      <div className="result-content-sec">
                        <h1 className="d-none">Search</h1>
                        <div className="result-content-sec-wrap">
                          <div className="content-first">
                            <div className="result-bottom-txt">
                              <p>Marketing</p>
                            </div>
                            <div className="result-bookmark">
                              <a
                                href="#"
                                className={`item-bookmark ${
                                  isBookmarkedIcon ? "active" : ""
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
                          <Link to="/single-course-description">
                            <div className="content-second mt-12">
                              <h2>YouTube SEO: How to Rank #1 on YouTube</h2>
                            </div>
                          </Link>
                          <div className="content-third mt-12">
                            <div>
                              <p className="result-price">$99.00</p>
                            </div>
                            <div className="result-time-sec">
                              <div>
                                <img src={GreayTimeIcon} alt="time-icon" />
                              </div>
                              <div className="result-time">6h 40m</div>
                            </div>
                          </div>
                          <div className="content-fourth">
                            <div className="result-rating-sec">
                              <div className="result-rating-sec-img">
                                <img src={OrangeStar} alt="star-img" />
                              </div>
                              <div className="result-rating-txt">
                                4.9 (1.2k ratings) | 5.3k students
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

  <div className="home-mentor mt-32">
          <div className="home-category-wrap container">
            <div className="homescreen-second-wrapper-top">
              <div className="categories-first">
                <h2 className="home1-txt3">👨‍🏫 Top Companies hiring</h2>
              </div>
              {/*<div className="view-all-second">
                <Link to="/mentor-screen">
                  <p className="see-all-txt">
                    See all
                    <span>
                      <img src={RightArrow} alt="right-arrow" />
                    </span>
                  </p>
                </Link>
              </div>*/}
            </div>
          </div>
          <div className="home-mentor-bottom mt-16">
            <Link to="/single-mentor">
              <Slider {...CompanySettings}>
                <div className="home-mentor-sec-wrap redirect-mentor">
                  <div className="home-mentor-sec">
                    <div>
                      <img src={Mentor1} alt="mentor-img" />
                    </div>
                  </div>
                  <div className="home-mentor-name">
                    <p>Jacob</p>
                  </div>
                </div>
                <div className="home-mentor-sec-wrap redirect-mentor">
                  <div className="home-mentor-sec">
                    <div>
                      <img src={Mentor2} alt="mentor-img" />
                    </div>
                  </div>
                  <div className="home-mentor-name">
                    <p>Claire</p>
                  </div>
                </div>
                <div className="home-mentor-sec-wrap redirect-mentor">
                  <div className="home-mentor-sec">
                    <div>
                      <img src={Mentor3} alt="mentor-img" />
                    </div>
                  </div>
                  <div className="home-mentor-name">
                    <p>Priscilla</p>
                  </div>
                </div>
                <div className="home-mentor-sec-wrap redirect-mentor">
                  <div className="home-mentor-sec">
                    <div>
                      <img src={Mentor4} alt="mentor-img" />
                    </div>
                  </div>
                  <div className="home-mentor-name">
                    <p>Wade</p>
                  </div>
                </div>
              </Slider>
            </Link>
          </div>
        </div>
     
        <div className="home-category mt-32">
          <div className="home-category-wrap container">
            <div className="homescreen-second-wrapper-top">
              <div className="categories-first">
                <h2 className="home1-txt3">📙 Concept Quiz</h2>
              </div>
              <div className="view-all-second">
                <Link to="/categoryscreen">
                  <p className="see-all-txt">
                    See all
                    <span>
                      <img src={RightArrow} alt="right-arrow" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-slider mt-16">
            <Link to="/single-course-description">
              <Slider {...settings}>
                <div className="categories-content single-course">
                  <div>
                    <img
                      src={CategoryImg1}
                      alt="category-img"
                      className="w-100"
                    />
                  </div>
                  <div className="categories-title">
                    <h3 className="category-txt1">Business</h3>
                    <p className="category-txt2">120 Courses</p>
                  </div>
                </div>
                <div className="categories-content single-course">
                  <div>
                    <img
                      src={CategoryImg2}
                      alt="category-img"
                      className="w-100"
                    />
                  </div>
                  <div className="categories-title">
                    <h3 className="category-txt1">Science</h3>
                    <p className="category-txt2">266 Courses</p>
                  </div>
                </div>
                <div className="categories-content single-course">
                  <div>
                    <img
                      src={CategoryImg3}
                      alt="category-img"
                      className="w-100"
                    />
                  </div>
                  <div className="categories-title">
                    <h3 className="category-txt1">UI/UX Design</h3>
                    <p className="category-txt2">144 Courses</p>
                  </div>
                </div>
              </Slider>
            </Link>
          </div>
        </div>
        
        <div className="home-trending-course mt-32">
          <div className="homescreen-second-wrapper-top container">
            <div className="categories-first">
              <h2 className="home1-txt3">🔥 Coding Challenges</h2>
            </div>
            <div className="view-all-second">
              <Link to="/trending-course">
                <p className="see-all-txt">
                  See all
                  <span>
                    <img src={RightArrow} alt="right-arrow" />
                  </span>
                </p>
              </Link>
            </div>
          </div>
          <div className="trending-course-bottom-wrap mt-16">
            <Link to="/single-course-description">
              <Slider {...settings}>
                <div className="trending-course-details single-course">
                  <div className="trending-course-details">
                    <div className="trending-course-img">
                      <img
                        src={CourseImg1}
                        alt="course-img"
                        className="w-100"
                      />
                      <div className="trending-bookmark">
                        <a
                          href="#"
                          className={`item-bookmark ${
                            isBookmarked ? "active" : ""
                          }`}
                          onClick={toggleBookmark}
                          tabIndex="0"
                        >
                          <img src={BookmarkSvg} alt="bookmark-icon" />
                        </a>
                      </div>
                      <div className="trending-name">
                        <p>Design</p>
                      </div>
                    </div>
                    <div className="trending-course-bottom mt-12">
                      <div>
                        <p className="trending-txt1">
                          Create & Design a Modern 3D House in...
                        </p>
                      </div>
                      <div className="trending-course-price">
                        <div>
                          <span className="trending-txt2">$180.00</span>
                          <span className="trending-txt3">$210.00</span>
                        </div>
                        <div>
                          <span className="trending-txt4">
                            <img src={FillStar} alt="star-img" />
                          </span>
                          <span className="trending-txt5">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="trending-course-details single-course">
                  <div className="trending-course-details">
                    <div className="trending-course-img">
                      <img
                        src={CourseImg2}
                        alt="course-img"
                        className="w-100"
                      />
                      <div className="trending-bookmark">
                        <a
                          href="#"
                          className={`item-bookmark ${
                            isBookmarked ? "active" : ""
                          }`}
                          onClick={toggleBookmark}
                          tabIndex="0"
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
                          Learning Python For Data Analy...
                        </p>
                      </div>
                      <div className="trending-course-price">
                        <div>
                          <span className="trending-txt2">$150.00</span>
                          <span className="trending-txt3">$210.00</span>
                        </div>
                        <div>
                          <span className="trending-txt4">
                            <img src={FillStar} alt="star-img" />
                          </span>
                          <span className="trending-txt5">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </Link>
          </div>
        </div>

      
        
      </section>
      {/* <!-- Homescreen content end --> */}
      {/* <!-- Tabbar start --> */}
      {/* <div id="bottom-navigation">
        <div className="container">
          <div className="home-navigation-menu">
            <div className="bottom-panel nagivation-menu-wrap">
              <ul className="bootom-tabbar">
                <li className="active">
                  <Link to="/homescreen" className="active">
                    <svg
                      className="active"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_202_7251"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_202_7251)">
                        <path
                          d="M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <div className="orange-boder active"></div>
                </li>
                <li>
                  <Link to="/bookmark">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_202_2005"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_202_2005)">
                        <path
                          d="M13 7C13.5304 7 14.0391 7.21071 14.4142 7.58579C14.7893 7.96086 15 8.46957 15 9V21L10 18L5 21V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7H13Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.26514 4C9.44092 3.69553 9.69386 3.44278 9.99846 3.26721C10.3031 3.09165 10.6486 2.99948 11.0001 3H17.0001C17.5306 3 18.0393 3.21072 18.4143 3.58579C18.7894 3.96086 19.0001 4.46957 19.0001 5V17L18.0001 16.4"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <div className="orange-boder"></div>
                </li>
                <li>
                  <Link to="/course-ongoing-screen">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_202_1996"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_202_1996)">
                        <path
                          d="M3 19.2058C4.36817 18.4159 5.92017 18 7.5 18C9.07983 18 10.6318 18.4159 12 19.2058C13.3682 18.4159 14.9202 18 16.5 18C18.0798 18 19.6318 18.4159 21 19.2058"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6.20577C4.36817 5.41586 5.92017 5 7.5 5C9.07983 5 10.6318 5.41586 12 6.20577C13.3682 5.41586 14.9202 5 16.5 5C18.0798 5 19.6318 5.41586 21 6.20577"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 6.20581V19.2058"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 6.20581V19.2058"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 6.20581V19.2058"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <div className="orange-boder"></div>
                </li>
                <li>
                  <Link to="/chat-screen">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_202_1988"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_202_1988)">
                        <path
                          d="M3 20L4.3 16.1C3.17644 14.4382 2.76999 12.4704 3.15622 10.5623C3.54244 8.65415 4.69506 6.93563 6.39977 5.72623C8.10447 4.51683 10.2453 3.89885 12.4241 3.9872C14.6029 4.07554 16.6715 4.86419 18.2453 6.20652C19.819 7.54884 20.7909 9.3535 20.9801 11.2849C21.1693 13.2164 20.563 15.1432 19.2739 16.7071C17.9848 18.271 16.1007 19.3656 13.9718 19.7873C11.8429 20.2091 9.6142 19.9293 7.7 19L3 20"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 12V12.01"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 12V12.01"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 12V12.01"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <div className="orange-boder "></div>
                </li>
                <li>
                  <Link to="/profile">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_202_1984"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_202_1984)">
                        <path
                          d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </Link>
                  <div className="orange-boder"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Tabbar end --> */}
      {/* <!--SideBar setting menu start--> */}
      <div className="menu-sidebar details">
        <div
          className="offcanvas offcanvas-start custom-offcanvas-noti"
          id="offcanvasExample"
        >
          <div className="offcanvas-header custom-header-offcanva">
            <img
              src={CloseIcon}
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></img>
          </div>
          <div className="offcanvas-body">
            <div className="dropdown">
              <div className="setting-page-full">
                <div className="setting-page-wrapper">
                  <Link to="/payment-screen">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1053"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1053)">
                            <path
                              d="M18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 10H21"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 15H7.01"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11 15H13"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Payment</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/notification-option" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_202_7812"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_202_7812)">
                            <path
                              d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Notification Options</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/language" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1060"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1060)">
                            <path
                              d="M3 7V5H16V7"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 5V19"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 19H8"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 13V12H21V13"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18 12V19"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17 19H19"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Language</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/currency" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1065"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1065)">
                            <path
                              d="M16.7 8C16.501 7.43524 16.1374 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 3V6M12 18V21"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Currency</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/about-us-screen" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1070"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1070)">
                            <path
                              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 8H12.01"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11 12H12V16H13"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>About Us</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/policy-screen" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1075"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1075)">
                            <path
                              d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Privacy Policy</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/faq-screen" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1080"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1080)">
                            <path
                              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 17V17.01"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 13.5C11.9816 13.1754 12.0692 12.8535 12.2495 12.583C12.4299 12.3125 12.6933 12.1079 13 12C13.3759 11.8563 13.7132 11.6272 13.9856 11.331C14.2579 11.0347 14.4577 10.6792 14.5693 10.2926C14.6809 9.90595 14.7013 9.49869 14.6287 9.10286C14.5562 8.70704 14.3928 8.33345 14.1513 8.01151C13.9099 7.68958 13.597 7.42808 13.2373 7.24762C12.8776 7.06715 12.4809 6.97264 12.0785 6.97152C11.6761 6.97041 11.2789 7.06272 10.9182 7.24118C10.5576 7.41965 10.2432 7.67941 10 8"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>FAQs</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/feedback-screen" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1085"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1085)">
                            <path
                              d="M4 20H8L18.5 9.5C19.0304 8.96956 19.3284 8.25014 19.3284 7.5C19.3284 6.74985 19.0304 6.03043 18.5 5.5C17.9696 4.96956 17.2501 4.67157 16.5 4.67157C15.7499 4.67157 15.0304 4.96956 14.5 5.5L4 16V20Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.5 6.5L17.5 10.5"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Send Feedback</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/complete-course-rating" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1090"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1090)">
                            <path
                              d="M17.8002 19.817L15.6282 20.955C15.5638 20.9886 15.4913 21.0035 15.4188 20.9982C15.3463 20.993 15.2767 20.9677 15.2178 20.9251C15.1589 20.8826 15.113 20.8245 15.0851 20.7574C15.0573 20.6903 15.0487 20.6167 15.0602 20.545L15.4752 18.134L13.7182 16.427C13.6658 16.3763 13.6287 16.3119 13.6111 16.2411C13.5935 16.1703 13.5962 16.096 13.6188 16.0267C13.6414 15.9573 13.6831 15.8957 13.7391 15.8489C13.795 15.8021 13.863 15.772 13.9352 15.762L16.3632 15.41L17.4492 13.217C17.4817 13.1517 17.5318 13.0967 17.5938 13.0583C17.6558 13.0199 17.7273 12.9995 17.8002 12.9995C17.8732 12.9995 17.9447 13.0199 18.0067 13.0583C18.0687 13.0967 18.1188 13.1517 18.1512 13.217L19.2372 15.41L21.6652 15.762C21.7373 15.7724 21.805 15.8027 21.8607 15.8495C21.9164 15.8964 21.9579 15.9579 21.9805 16.027C22.003 16.0962 22.0058 16.1704 21.9885 16.241C21.9711 16.3117 21.9343 16.3761 21.8822 16.427L20.1252 18.134L20.5392 20.544C20.5517 20.6159 20.5437 20.6898 20.5162 20.7573C20.4887 20.8249 20.4429 20.8834 20.3838 20.9262C20.3248 20.969 20.2549 20.9944 20.1822 20.9995C20.1094 21.0046 20.0367 20.9892 19.9722 20.955L17.8002 19.817V19.817Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.20063 19.817L4.02863 20.955C3.96417 20.9886 3.89166 21.0035 3.81919 20.9982C3.74672 20.993 3.67714 20.9677 3.61822 20.9251C3.5593 20.8826 3.51336 20.8245 3.48554 20.7574C3.45771 20.6903 3.44908 20.6167 3.46063 20.545L3.87563 18.134L2.11863 16.427C2.06619 16.3763 2.02905 16.3119 2.01147 16.2411C1.99389 16.1703 1.99656 16.096 2.01919 16.0267C2.04182 15.9573 2.08349 15.8957 2.13944 15.8489C2.19539 15.8021 2.26338 15.772 2.33563 15.762L4.76363 15.41L5.84963 13.217C5.88211 13.1517 5.93217 13.0967 5.99418 13.0583C6.05618 13.0199 6.12768 12.9995 6.20063 12.9995C6.27357 12.9995 6.34507 13.0199 6.40708 13.0583C6.46909 13.0967 6.51915 13.1517 6.55163 13.217L7.63763 15.41L10.0656 15.762C10.1377 15.7724 10.2054 15.8027 10.2611 15.8495C10.3168 15.8964 10.3583 15.9579 10.3809 16.027C10.4034 16.0962 10.4062 16.1704 10.3888 16.241C10.3715 16.3117 10.3347 16.3761 10.2826 16.427L8.52563 18.134L8.93963 20.544C8.95205 20.6159 8.94408 20.6898 8.91661 20.7573C8.88914 20.8249 8.84327 20.8834 8.78422 20.9262C8.72517 20.969 8.6553 20.9944 8.58254 20.9995C8.50979 21.0046 8.43706 20.9892 8.37263 20.955L6.20063 19.817V19.817Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.9995 9.81701L9.82746 10.955C9.763 10.9886 9.69049 11.0035 9.61802 10.9982C9.54554 10.993 9.47597 10.9677 9.41705 10.9251C9.35813 10.8826 9.31219 10.8245 9.28436 10.7574C9.25654 10.6903 9.24791 10.6167 9.25946 10.545L9.67446 8.13401L7.91746 6.42701C7.86501 6.37631 7.82788 6.31189 7.8103 6.2411C7.79272 6.1703 7.79539 6.096 7.81802 6.02665C7.84065 5.95731 7.88232 5.89572 7.93827 5.84893C7.99422 5.80213 8.0622 5.77201 8.13446 5.76201L10.5625 5.41001L11.6485 3.21701C11.6809 3.15169 11.731 3.09673 11.793 3.05831C11.855 3.0199 11.9265 2.99954 11.9995 2.99954C12.0724 2.99954 12.1439 3.0199 12.2059 3.05831C12.2679 3.09673 12.318 3.15169 12.3505 3.21701L13.4365 5.41001L15.8645 5.76201C15.9365 5.77237 16.0042 5.80268 16.0599 5.84952C16.1156 5.89636 16.1571 5.95786 16.1797 6.02705C16.2023 6.09624 16.205 6.17037 16.1877 6.24105C16.1703 6.31173 16.1335 6.37615 16.0815 6.42701L14.3245 8.13401L14.7385 10.544C14.7509 10.6159 14.7429 10.6898 14.7154 10.7573C14.688 10.8249 14.6421 10.8834 14.583 10.9262C14.524 10.969 14.4541 10.9944 14.3814 10.9995C14.3086 11.0046 14.2359 10.9892 14.1715 10.955L11.9995 9.81701V9.81701Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Rate Us</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <div className="setting-deatils theme-change mt-8">
                    <div className="setting-icon ">
                      <div className="dz-icon theme-btn bg-pink light">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1095"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1095)">
                            <path
                              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <DarkLightmode />
                  </div>
                  <div className="setting-border mt-8"></div>
                  <Link to="/mentor-screen" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1100"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1100)">
                            <path
                              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 11H22M19 8V14"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Invite Mentor</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="setting-border mt-8"></div>
                  </Link>
                  <Link to="/" className="mt-8">
                    <div className="setting-deatils">
                      <div className="setting-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            id="mask0_231_1105"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_231_1105)">
                            <path
                              d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7 12H21L18 9M18 15L21 12"
                              stroke="#F97316"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="icon-name">
                        <p>Logout</p>
                      </div>
                      <div className="icon-back-btn">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_777)">
                            <path
                              d="M9 18L15 12L9 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="setting-border mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-overlay"></div>
      {/* <!--SideBar setting menu end--> */}
      {/* <!-- pwa install app popup Start --> */}
      {/* {isOpen && (
        <div
          className="offcanvas offcanvas-bottom addtohome-popup theme-offcanvas"
          tabIndex="-1"
          id="offcanvas"
          aria-modal="true"
          role="dialog"
        >
          <img
            src={CloseIcon}
            className="btn-close text-reset popup-close-home"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleClose}
          ></img>
          <div className="offcanvas-body small">
            <img src={GurujiLogo} alt="logo" className="logo-popup" />
            <p className="title font-w600">Guruji</p>
            <p className="install-txt">
              Install Guruji - Online Learning & Educational Courses PWA to your
              home screen for easy access, just like any other app
            </p>
            <a
              href="#"
              className="theme-btn install-app btn-inline addhome-btn"
              id="installApp"
              onClick={handleInstallApp}
            >
              Add to Home Screen
            </a>
          </div>
        </div>
      )} */}
      {/* <!-- pwa install app popup End --> */}
    </>
  );
};
export default HomeScreen;
