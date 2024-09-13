import React from "react";
import ResultImg1 from "../assets/images/result-found/result1.png";
import ResultImg2 from "../assets/images/result-found/result2.png";
import ResultImg3 from "../assets/images/result-found/result3.png";
import ResultImg4 from "../assets/images/result-found/result4.png";
import OrangeStar from "../assets/images/result-found/orange-star.svg";
import GreayTimeIcon from "../assets/images/result-found/grey-time-icon.svg";
import BookmarkUnfillSvg from "../assets/images/single-courses/bookmark-unfill.svg";

const SearchResultFound = () => {
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header">
        <div className="container">
          <div className="top-header-full">
            <div className="back-btn">
              <a href=" ">
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
              </a>
            </div>
            <div className="header-title">
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Result found content start --> */}
      <section id="result-found">
        <div className="container">
          <div className="result-found-top">
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
                  value="3D Desigm"
                  className="form-control search-text-result"
                  id="search-input"
                />
              </div>
              <button
                className="close-btn"
                data-bs-toggle="modal"
                data-bs-target="#filterModal"
              >
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
          <div className="result-found-middle mt-32">
            <div className="result-found-middle-wrap">
              <div className="result-txt">
                <span className="result-txt1">
                  Results for <span className="result-txt2">“3D Design”</span>
                </span>
                <span className="result-txt3">236 Founds</span>
              </div>
            </div>
          </div>
          <div className="result-found-bottom mt-16">
            <div className="result-found-bottom-wrap">
              <div className="result-img-sec">
                <img src={ResultImg1} alt="course-img" />
              </div>
              <div className="result-content-sec">
                <h1 className="d-none">Search</h1>
                <div className="result-content-sec-wrap">
                  <div className="content-first">
                    <div className="result-bottom-txt">
                      <p>3D Design</p>
                    </div>
                    <div className="result-bookmark">
                      <a
                        href="javascript:void(0);"
                        className="item-bookmark"
                        tabindex="0"
                      >
                        <img src={BookmarkUnfillSvg} alt="bookmark-icon" />
                      </a>
                    </div>
                  </div>
                  <div className="content-second mt-12">
                    <h2>
                      Complete Blender Creator: Learn 3D Modelling for
                      Beginners...
                    </h2>
                  </div>
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
            <div className="result-found-bottom-wrap mt-16">
              <div className="result-img-sec">
                <img src={ResultImg2} alt="course-img" />
              </div>
              <div className="result-content-sec">
                <div className="result-content-sec-wrap">
                  <div className="content-first">
                    <div className="result-bottom-txt">
                      <p>3D Design</p>
                    </div>
                    <div className="result-bookmark">
                      <a
                        href="javascript:void(0);"
                        className="item-bookmark active"
                        tabindex="0"
                      >
                        <img src={BookmarkUnfillSvg} alt="bookmark-icon" />
                      </a>
                    </div>
                  </div>
                  <div className="content-second mt-12">
                    <h2>Fighter Girl Character in Blender Tutorial</h2>
                  </div>
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
            <div className="result-found-bottom-wrap mt-16">
              <div className="result-img-sec">
                <img src={ResultImg3} alt="course-img" />
              </div>
              <div className="result-content-sec">
                <div className="result-content-sec-wrap">
                  <div className="content-first">
                    <div className="result-bottom-txt">
                      <p>3D Design</p>
                    </div>
                    <div className="result-bookmark">
                      <a
                        href="javascript:void(0);"
                        className="item-bookmark"
                        tabindex="0"
                      >
                        <img src={BookmarkUnfillSvg} alt="bookmark-icon" />
                      </a>
                    </div>
                  </div>
                  <div className="content-second mt-12">
                    <h2>Sculpt 3D Printable Skeleton Warriors in Zbrush</h2>
                  </div>
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
            <div className="result-found-bottom-wrap mt-16">
              <div className="result-img-sec">
                <img src={ResultImg4} alt="course-img" />
              </div>
              <div className="result-content-sec">
                <div className="result-content-sec-wrap">
                  <div className="content-first">
                    <div className="result-bottom-txt">
                      <p>3D Design</p>
                    </div>
                    <div className="result-bookmark">
                      <a
                        href="javascript:void(0);"
                        className="item-bookmark active"
                        tabindex="0"
                      >
                        <img src={BookmarkUnfillSvg} alt="bookmark-icon" />
                      </a>
                    </div>
                  </div>
                  <div className="content-second mt-12">
                    <h2>The Ultimate Blender 3D Environments Course</h2>
                  </div>
                  <div className="content-third mt-12">
                    <div>
                      <p className="result-price">$170.00</p>
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
                        4.3 (3.7k ratings) | 104.2k students
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Result found content end --> */}
      {/* <!-- Filter modal start --> */}
      <div
        className="modal search-modal"
        id="filterModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                Filter
              </h2>
            </div>
            <div className="modal-body">
              <div className="filter-first">
                <div className="filter-first-full">
                  <form className="select-filter mt-32">
                    <div className="filter-sec">
                      <input
                        type="radio"
                        id="select-lang1"
                        name="select-language"
                        checked
                      />
                      <label
                        className="custom-radio-sel-filter"
                        htmlFor="select-lang1"
                      >
                        Courses
                      </label>
                    </div>
                    <div className="filter-sec">
                      <input
                        type="radio"
                        id="select-lang2"
                        name="select-language"
                      />
                      <label
                        className="custom-radio-sel-filter"
                        htmlFor="select-lang2"
                      >
                        Mentors
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="filter-second mt-32">
                <div className="filter-second-full">
                  <p className="filter-title">Category</p>
                  <form className="select-category mt-16">
                    <div className="category-sec">
                      <input
                        type="radio"
                        id="category1"
                        name="category"
                        checked
                      />
                      <label
                        className="custom-radio-sel-category"
                        htmlFor="category1"
                      >
                        🔥 All
                      </label>
                    </div>
                    <div className="category-sec">
                      <input type="radio" id="category2" name="category" />
                      <label
                        className="custom-radio-sel-category"
                        htmlFor="category2"
                      >
                        💡 3D Design
                      </label>
                    </div>
                    <div className="category-sec">
                      <input type="radio" id="category3" name="category" />
                      <label
                        className="custom-radio-sel-category"
                        htmlFor="category3"
                      >
                        💰 Business
                      </label>
                    </div>
                    <div className="category-sec">
                      <input type="radio" id="category4" name="category" />
                      <label
                        className="custom-radio-sel-category"
                        htmlFor="category4"
                      >
                        📢 Marketing
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="filter-third mt-32">
                <div className="filter-modal" id="filterModal-search">
                  <div className="filter-box">
                    <p className="filter-title">Price:</p>
                    <div className="filter-content">
                      <div className="range-slider pricing-slider">
                        <input
                          type="text"
                          className="js-range-slider"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-fourth-sec mt-32">
                <div className="filter-fourth-full">
                  <p className="filter-title">Rating</p>
                </div>
                <div className="review-bottom filter-review">
                  <div className="review-desc">
                    <div className="review-sec">
                      <input
                        type="radio"
                        id="clothes-size1"
                        name="select-language"
                      />
                      <label
                        className="custom-radio-sel-review"
                        htmlFor="clothes-size1"
                      >
                        <svg
                          className="review-star"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_6287)">
                            <path
                              d="M8.46199 2.58999C8.63485 2.23978 8.72128 2.06468 8.83862 2.00874C8.94071 1.96006 9.05932 1.96006 9.1614 2.00874C9.27874 2.06468 9.36517 2.23978 9.53804 2.58999L11.178 5.91246C11.2291 6.01585 11.2546 6.06754 11.2919 6.10768C11.3249 6.14322 11.3645 6.17201 11.4085 6.19247C11.4582 6.21557 11.5152 6.22391 11.6293 6.24058L15.2977 6.77678C15.684 6.83324 15.8772 6.86148 15.9666 6.95583C16.0444 7.03792 16.0809 7.15072 16.0661 7.26283C16.0491 7.39168 15.9093 7.52788 15.6296 7.80029L12.9761 10.3848C12.8934 10.4654 12.852 10.5057 12.8253 10.5536C12.8017 10.596 12.7865 10.6427 12.7807 10.6909C12.7741 10.7453 12.7838 10.8022 12.8034 10.9161L13.4295 14.5666C13.4955 14.9516 13.5285 15.1441 13.4665 15.2584C13.4125 15.3578 13.3165 15.4275 13.2053 15.4481C13.0775 15.4718 12.9046 15.3809 12.5588 15.1991L9.27928 13.4744C9.1771 13.4206 9.12601 13.3938 9.07218 13.3832C9.02452 13.3739 8.9755 13.3739 8.92784 13.3832C8.87402 13.3938 8.82293 13.4206 8.72074 13.4744L5.44119 15.1991C5.09544 15.3809 4.92256 15.4718 4.79473 15.4481C4.68351 15.4275 4.58754 15.3578 4.53355 15.2584C4.4715 15.1441 4.50452 14.9516 4.57056 14.5666L5.19666 10.9161C5.21618 10.8022 5.22594 10.7453 5.21934 10.6909C5.21349 10.6427 5.19833 10.596 5.1747 10.5536C5.14802 10.5057 5.10666 10.4654 5.02394 10.3848L2.37042 7.80029C2.09075 7.52788 1.95091 7.39168 1.93389 7.26283C1.91909 7.15072 1.95567 7.03792 2.03344 6.95583C2.12283 6.86148 2.31598 6.83324 2.70228 6.77678L6.37073 6.24058C6.48482 6.22391 6.54186 6.21557 6.59154 6.19247C6.63552 6.17201 6.67512 6.14322 6.70814 6.10768C6.74543 6.06754 6.77095 6.01585 6.82198 5.91246L8.46199 2.58999Z"
                              fill="#FF4C3B"
                            />
                          </g>
                        </svg>
                        All
                      </label>
                    </div>
                    <div className="review-sec">
                      <input
                        type="radio"
                        id="clothes-size2"
                        name="select-language"
                        checked
                      />
                      <label
                        className="custom-radio-sel-review"
                        htmlFor="clothes-size2"
                      >
                        <svg
                          className="review-star"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_6287)">
                            <path
                              d="M8.46199 2.58999C8.63485 2.23978 8.72128 2.06468 8.83862 2.00874C8.94071 1.96006 9.05932 1.96006 9.1614 2.00874C9.27874 2.06468 9.36517 2.23978 9.53804 2.58999L11.178 5.91246C11.2291 6.01585 11.2546 6.06754 11.2919 6.10768C11.3249 6.14322 11.3645 6.17201 11.4085 6.19247C11.4582 6.21557 11.5152 6.22391 11.6293 6.24058L15.2977 6.77678C15.684 6.83324 15.8772 6.86148 15.9666 6.95583C16.0444 7.03792 16.0809 7.15072 16.0661 7.26283C16.0491 7.39168 15.9093 7.52788 15.6296 7.80029L12.9761 10.3848C12.8934 10.4654 12.852 10.5057 12.8253 10.5536C12.8017 10.596 12.7865 10.6427 12.7807 10.6909C12.7741 10.7453 12.7838 10.8022 12.8034 10.9161L13.4295 14.5666C13.4955 14.9516 13.5285 15.1441 13.4665 15.2584C13.4125 15.3578 13.3165 15.4275 13.2053 15.4481C13.0775 15.4718 12.9046 15.3809 12.5588 15.1991L9.27928 13.4744C9.1771 13.4206 9.12601 13.3938 9.07218 13.3832C9.02452 13.3739 8.9755 13.3739 8.92784 13.3832C8.87402 13.3938 8.82293 13.4206 8.72074 13.4744L5.44119 15.1991C5.09544 15.3809 4.92256 15.4718 4.79473 15.4481C4.68351 15.4275 4.58754 15.3578 4.53355 15.2584C4.4715 15.1441 4.50452 14.9516 4.57056 14.5666L5.19666 10.9161C5.21618 10.8022 5.22594 10.7453 5.21934 10.6909C5.21349 10.6427 5.19833 10.596 5.1747 10.5536C5.14802 10.5057 5.10666 10.4654 5.02394 10.3848L2.37042 7.80029C2.09075 7.52788 1.95091 7.39168 1.93389 7.26283C1.91909 7.15072 1.95567 7.03792 2.03344 6.95583C2.12283 6.86148 2.31598 6.83324 2.70228 6.77678L6.37073 6.24058C6.48482 6.22391 6.54186 6.21557 6.59154 6.19247C6.63552 6.17201 6.67512 6.14322 6.70814 6.10768C6.74543 6.06754 6.77095 6.01585 6.82198 5.91246L8.46199 2.58999Z"
                              fill="#FF4C3B"
                            />
                          </g>
                        </svg>
                        5
                      </label>
                    </div>
                    <div className="review-sec">
                      <input
                        type="radio"
                        id="clothes-size3"
                        name="select-language"
                      />
                      <label
                        className="custom-radio-sel-review"
                        htmlFor="clothes-size3"
                      >
                        <svg
                          className="review-star"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_6287)">
                            <path
                              d="M8.46199 2.58999C8.63485 2.23978 8.72128 2.06468 8.83862 2.00874C8.94071 1.96006 9.05932 1.96006 9.1614 2.00874C9.27874 2.06468 9.36517 2.23978 9.53804 2.58999L11.178 5.91246C11.2291 6.01585 11.2546 6.06754 11.2919 6.10768C11.3249 6.14322 11.3645 6.17201 11.4085 6.19247C11.4582 6.21557 11.5152 6.22391 11.6293 6.24058L15.2977 6.77678C15.684 6.83324 15.8772 6.86148 15.9666 6.95583C16.0444 7.03792 16.0809 7.15072 16.0661 7.26283C16.0491 7.39168 15.9093 7.52788 15.6296 7.80029L12.9761 10.3848C12.8934 10.4654 12.852 10.5057 12.8253 10.5536C12.8017 10.596 12.7865 10.6427 12.7807 10.6909C12.7741 10.7453 12.7838 10.8022 12.8034 10.9161L13.4295 14.5666C13.4955 14.9516 13.5285 15.1441 13.4665 15.2584C13.4125 15.3578 13.3165 15.4275 13.2053 15.4481C13.0775 15.4718 12.9046 15.3809 12.5588 15.1991L9.27928 13.4744C9.1771 13.4206 9.12601 13.3938 9.07218 13.3832C9.02452 13.3739 8.9755 13.3739 8.92784 13.3832C8.87402 13.3938 8.82293 13.4206 8.72074 13.4744L5.44119 15.1991C5.09544 15.3809 4.92256 15.4718 4.79473 15.4481C4.68351 15.4275 4.58754 15.3578 4.53355 15.2584C4.4715 15.1441 4.50452 14.9516 4.57056 14.5666L5.19666 10.9161C5.21618 10.8022 5.22594 10.7453 5.21934 10.6909C5.21349 10.6427 5.19833 10.596 5.1747 10.5536C5.14802 10.5057 5.10666 10.4654 5.02394 10.3848L2.37042 7.80029C2.09075 7.52788 1.95091 7.39168 1.93389 7.26283C1.91909 7.15072 1.95567 7.03792 2.03344 6.95583C2.12283 6.86148 2.31598 6.83324 2.70228 6.77678L6.37073 6.24058C6.48482 6.22391 6.54186 6.21557 6.59154 6.19247C6.63552 6.17201 6.67512 6.14322 6.70814 6.10768C6.74543 6.06754 6.77095 6.01585 6.82198 5.91246L8.46199 2.58999Z"
                              fill="#FF4C3B"
                            />
                          </g>
                        </svg>
                        4
                      </label>
                    </div>
                    <div className="review-sec">
                      <input
                        type="radio"
                        id="clothes-size4"
                        name="select-language"
                      />
                      <label
                        className="custom-radio-sel-review"
                        htmlFor="clothes-size4"
                      >
                        <svg
                          className="review-star"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_6287)">
                            <path
                              d="M8.46199 2.58999C8.63485 2.23978 8.72128 2.06468 8.83862 2.00874C8.94071 1.96006 9.05932 1.96006 9.1614 2.00874C9.27874 2.06468 9.36517 2.23978 9.53804 2.58999L11.178 5.91246C11.2291 6.01585 11.2546 6.06754 11.2919 6.10768C11.3249 6.14322 11.3645 6.17201 11.4085 6.19247C11.4582 6.21557 11.5152 6.22391 11.6293 6.24058L15.2977 6.77678C15.684 6.83324 15.8772 6.86148 15.9666 6.95583C16.0444 7.03792 16.0809 7.15072 16.0661 7.26283C16.0491 7.39168 15.9093 7.52788 15.6296 7.80029L12.9761 10.3848C12.8934 10.4654 12.852 10.5057 12.8253 10.5536C12.8017 10.596 12.7865 10.6427 12.7807 10.6909C12.7741 10.7453 12.7838 10.8022 12.8034 10.9161L13.4295 14.5666C13.4955 14.9516 13.5285 15.1441 13.4665 15.2584C13.4125 15.3578 13.3165 15.4275 13.2053 15.4481C13.0775 15.4718 12.9046 15.3809 12.5588 15.1991L9.27928 13.4744C9.1771 13.4206 9.12601 13.3938 9.07218 13.3832C9.02452 13.3739 8.9755 13.3739 8.92784 13.3832C8.87402 13.3938 8.82293 13.4206 8.72074 13.4744L5.44119 15.1991C5.09544 15.3809 4.92256 15.4718 4.79473 15.4481C4.68351 15.4275 4.58754 15.3578 4.53355 15.2584C4.4715 15.1441 4.50452 14.9516 4.57056 14.5666L5.19666 10.9161C5.21618 10.8022 5.22594 10.7453 5.21934 10.6909C5.21349 10.6427 5.19833 10.596 5.1747 10.5536C5.14802 10.5057 5.10666 10.4654 5.02394 10.3848L2.37042 7.80029C2.09075 7.52788 1.95091 7.39168 1.93389 7.26283C1.91909 7.15072 1.95567 7.03792 2.03344 6.95583C2.12283 6.86148 2.31598 6.83324 2.70228 6.77678L6.37073 6.24058C6.48482 6.22391 6.54186 6.21557 6.59154 6.19247C6.63552 6.17201 6.67512 6.14322 6.70814 6.10768C6.74543 6.06754 6.77095 6.01585 6.82198 5.91246L8.46199 2.58999Z"
                              fill="#FF4C3B"
                            />
                          </g>
                        </svg>
                        3
                      </label>
                    </div>
                    <div className="review-sec">
                      <input
                        type="radio"
                        id="clothes-size5"
                        name="select-language"
                      />
                      <label
                        className="custom-radio-sel-review"
                        htmlFor="clothes-size5"
                      >
                        <svg
                          className="review-star"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_6287)">
                            <path
                              d="M8.46199 2.58999C8.63485 2.23978 8.72128 2.06468 8.83862 2.00874C8.94071 1.96006 9.05932 1.96006 9.1614 2.00874C9.27874 2.06468 9.36517 2.23978 9.53804 2.58999L11.178 5.91246C11.2291 6.01585 11.2546 6.06754 11.2919 6.10768C11.3249 6.14322 11.3645 6.17201 11.4085 6.19247C11.4582 6.21557 11.5152 6.22391 11.6293 6.24058L15.2977 6.77678C15.684 6.83324 15.8772 6.86148 15.9666 6.95583C16.0444 7.03792 16.0809 7.15072 16.0661 7.26283C16.0491 7.39168 15.9093 7.52788 15.6296 7.80029L12.9761 10.3848C12.8934 10.4654 12.852 10.5057 12.8253 10.5536C12.8017 10.596 12.7865 10.6427 12.7807 10.6909C12.7741 10.7453 12.7838 10.8022 12.8034 10.9161L13.4295 14.5666C13.4955 14.9516 13.5285 15.1441 13.4665 15.2584C13.4125 15.3578 13.3165 15.4275 13.2053 15.4481C13.0775 15.4718 12.9046 15.3809 12.5588 15.1991L9.27928 13.4744C9.1771 13.4206 9.12601 13.3938 9.07218 13.3832C9.02452 13.3739 8.9755 13.3739 8.92784 13.3832C8.87402 13.3938 8.82293 13.4206 8.72074 13.4744L5.44119 15.1991C5.09544 15.3809 4.92256 15.4718 4.79473 15.4481C4.68351 15.4275 4.58754 15.3578 4.53355 15.2584C4.4715 15.1441 4.50452 14.9516 4.57056 14.5666L5.19666 10.9161C5.21618 10.8022 5.22594 10.7453 5.21934 10.6909C5.21349 10.6427 5.19833 10.596 5.1747 10.5536C5.14802 10.5057 5.10666 10.4654 5.02394 10.3848L2.37042 7.80029C2.09075 7.52788 1.95091 7.39168 1.93389 7.26283C1.91909 7.15072 1.95567 7.03792 2.03344 6.95583C2.12283 6.86148 2.31598 6.83324 2.70228 6.77678L6.37073 6.24058C6.48482 6.22391 6.54186 6.21557 6.59154 6.19247C6.63552 6.17201 6.67512 6.14322 6.70814 6.10768C6.74543 6.06754 6.77095 6.01585 6.82198 5.91246L8.46199 2.58999Z"
                              fill="#FF4C3B"
                            />
                          </g>
                        </svg>
                        2
                      </label>
                    </div>
                    <div className="review-sec">
                      <input
                        type="radio"
                        id="clothes-size6"
                        name="select-language"
                      />
                      <label
                        className="custom-radio-sel-review"
                        htmlFor="clothes-size6"
                      >
                        <svg
                          className="review-star"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <mask
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                          >
                            <rect width="18" height="18" fill="white" />
                          </mask>
                          <g mask="url(#mask0_330_6287)">
                            <path
                              d="M8.46199 2.58999C8.63485 2.23978 8.72128 2.06468 8.83862 2.00874C8.94071 1.96006 9.05932 1.96006 9.1614 2.00874C9.27874 2.06468 9.36517 2.23978 9.53804 2.58999L11.178 5.91246C11.2291 6.01585 11.2546 6.06754 11.2919 6.10768C11.3249 6.14322 11.3645 6.17201 11.4085 6.19247C11.4582 6.21557 11.5152 6.22391 11.6293 6.24058L15.2977 6.77678C15.684 6.83324 15.8772 6.86148 15.9666 6.95583C16.0444 7.03792 16.0809 7.15072 16.0661 7.26283C16.0491 7.39168 15.9093 7.52788 15.6296 7.80029L12.9761 10.3848C12.8934 10.4654 12.852 10.5057 12.8253 10.5536C12.8017 10.596 12.7865 10.6427 12.7807 10.6909C12.7741 10.7453 12.7838 10.8022 12.8034 10.9161L13.4295 14.5666C13.4955 14.9516 13.5285 15.1441 13.4665 15.2584C13.4125 15.3578 13.3165 15.4275 13.2053 15.4481C13.0775 15.4718 12.9046 15.3809 12.5588 15.1991L9.27928 13.4744C9.1771 13.4206 9.12601 13.3938 9.07218 13.3832C9.02452 13.3739 8.9755 13.3739 8.92784 13.3832C8.87402 13.3938 8.82293 13.4206 8.72074 13.4744L5.44119 15.1991C5.09544 15.3809 4.92256 15.4718 4.79473 15.4481C4.68351 15.4275 4.58754 15.3578 4.53355 15.2584C4.4715 15.1441 4.50452 14.9516 4.57056 14.5666L5.19666 10.9161C5.21618 10.8022 5.22594 10.7453 5.21934 10.6909C5.21349 10.6427 5.19833 10.596 5.1747 10.5536C5.14802 10.5057 5.10666 10.4654 5.02394 10.3848L2.37042 7.80029C2.09075 7.52788 1.95091 7.39168 1.93389 7.26283C1.91909 7.15072 1.95567 7.03792 2.03344 6.95583C2.12283 6.86148 2.31598 6.83324 2.70228 6.77678L6.37073 6.24058C6.48482 6.22391 6.54186 6.21557 6.59154 6.19247C6.63552 6.17201 6.67512 6.14322 6.70814 6.10768C6.74543 6.06754 6.77095 6.01585 6.82198 5.91246L8.46199 2.58999Z"
                              fill="#FF4C3B"
                            />
                          </g>
                        </svg>
                        1
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-fifth-sec mt-32">
                <div className="reset-btn">
                  <a href="">Reset</a>
                </div>
                <div className="filter-btn">
                  <a href="">Filter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Filter modal end --> */}
    </>
  );
};
export default SearchResultFound;
