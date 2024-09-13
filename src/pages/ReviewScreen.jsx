import React, { useEffect, useState } from "react";
import HeaderImg from "../assets/images/checkout-screen/header-img.png";
import OrangeStar from "../assets/images/single-courses/orange-star.svg";
import ClientImg1 from "../assets/images/single-courses/client1.png";
import ClientImg2 from "../assets/images/single-courses/client2.png";
import ClientImg3 from "../assets/images/single-courses/client3.png";
import ClientImg4 from "../assets/images/single-courses/client4.png";
import OrangeStarUnfillSvg from "../assets/images/single-courses/orange-star-unfill.svg";
import LikeIcon from "../assets/images/single-courses/like-icon.svg";
import DislikeIcon from "../assets/images/single-courses/dislike-icon.svg";
import CommentIcon from "../assets/images/single-courses/comment-icon.svg";
import TimeIcon from "../assets/images/checkout-screen/time-icon.svg";
import FillStar from "../assets/images/single-courses/orange-fill-star.svg";
import BookmarkSvg from "../assets/images/single-courses/bookmark-unfill.svg";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const ReviewScreen = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
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
              <p>Review</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Checkout screen content start --> */}
      <section id="review-screen">
        <div className="container">
          <div className="checkout-screen-full">
            <div className="checkout-screen-top mt-32">
              <div className="checkout-first">
                <img src={HeaderImg} alt="social-media-img" />
              </div>
              <div className="checkout-second">
                <div className="checkout-second-wrap">
                  <div className="checkout-design">
                    <p>Design</p>
                  </div>
                  <div className="checkout-bookmark">
                    <div className="checkout-bookmark-sec">
                      <a
                        href="javascript:void(0);"
                        className={`item-bookmark ${
                          isBookmarked ? "active" : ""
                        }`}
                        onClick={toggleBookmark}
                        tabindex="0"
                      >
                        <img src={BookmarkSvg} alt="bookmark-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h1 className="check-txt1">
                    Responsive Design with Grids. A Guide for UX/UI Designer
                  </h1>
                  <h2 className="d-none">Review</h2>
                  <h3 className="d-none">Hidden</h3>
                </div>
                <div className="checkout-second-third mt-12">
                  <div>
                    <span className="check-txt2">$149.00</span>
                    <span className="check-txt3">$199.00</span>
                  </div>
                  <div>
                    <span>
                      <img src={TimeIcon} alt="time-icon" />
                    </span>
                    <span className="check-txt4">1h 30m</span>
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
            <div className="navbar-boder mt-24"></div>
            <div className="review-third-sec mt-24">
              <div className="review-third-sec-content">
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
                            <img src={OrangeStarUnfillSvg} alt="star-img" />
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
                    The course is very good. the explanation of the mentor is
                    very clear and easy to understand 😎😎
                  </p>
                </div>
                <div className="review-helpful-sec">
                  <div className="review-helpful-sec-full">
                    <div>
                      <p className="helpful-txt">Was this review helpful?</p>
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
                    Throughout the course, She explained everything so much more
                    clearly, everything was easy, and the course is quite good.
                  </p>
                </div>
                <div className="review-helpful-sec">
                  <div className="review-helpful-sec-full">
                    <div>
                      <p className="helpful-txt">Was this review helpful?</p>
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
              <div className="review-third-sec-content mt-16">
                <div className="review-third-sec-wrap">
                  <div className="review-bottom-first">
                    <img src={ClientImg3} alt="client-img" />
                  </div>
                  <div className="review-bottom-second">
                    <h4>Laura Flemo</h4>
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
                        <p>2 week ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="review-bottom-third">
                    <img src={CommentIcon} alt="comment-icon" />
                  </div>
                </div>
                <div className="review-para mt-12">
                  <p>
                    Really appreciated this course, in helping me better
                    understand designing with grids. Though, would like the
                    section on adding elements to the grid to be more in depth.
                    Exploring a larger variety of layouts.
                  </p>
                </div>
                <div className="review-helpful-sec">
                  <div className="review-helpful-sec-full">
                    <div>
                      <p className="helpful-txt">Was this review helpful?</p>
                    </div>
                    <div>
                      <span>
                        <img src={LikeIcon} alt="review-like" />
                      </span>
                      <span className="like-txt1">1k</span>
                    </div>
                    <div>
                      <span>
                        <img src={DislikeIcon} alt="review-like" />
                      </span>
                      <span className="dislike-txt">256</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-third-sec-content mt-16">
                <div className="review-third-sec-wrap">
                  <div className="review-bottom-first">
                    <img src={ClientImg4} alt="client-img" />
                  </div>
                  <div className="review-bottom-second">
                    <h4>Caity Laurance</h4>
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
                            <img src={OrangeStarUnfillSvg} alt="star-img" />
                          </li>
                          <li>
                            <img src={OrangeStarUnfillSvg} alt="star-img" />
                          </li>
                        </ul>
                      </div>
                      <div className="review-time">
                        <p>3 week ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="review-bottom-third">
                    <img src={CommentIcon} alt="comment-icon" />
                  </div>
                </div>
                <div className="review-para mt-12">
                  <p>
                    The creator has a great voice and is good at explaining the
                    concepts in general... however, The title is totally
                    misleading. It's really not an ultimate guide.
                  </p>
                </div>
                <div className="review-helpful-sec">
                  <div className="review-helpful-sec-full">
                    <div>
                      <p className="helpful-txt">Was this review helpful?</p>
                    </div>
                    <div>
                      <span>
                        <img src={LikeIcon} alt="review-like" />
                      </span>
                      <span className="like-txt1">344</span>
                    </div>
                    <div>
                      <span>
                        <img src={DislikeIcon} alt="review-like" />
                      </span>
                      <span className="dislike-txt">28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Checkout screen content end --> */}
    </>
  );
};
export default ReviewScreen;
