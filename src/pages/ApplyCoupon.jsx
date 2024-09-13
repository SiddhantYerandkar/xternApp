import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const ApplyCoupon = () => {
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
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
              <p>Add Coupon</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Apply coupon content start --> */}
      <section id="apply-coupon">
        <div className="container">
          <div className="apply-coupon-wrap">
            <div className="apply-coupon-first">
              <div className="input-group mt-32 ">
                <span className="input-group-text coupon-iconn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_202_5420"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_202_5420)">
                      <path
                        d="M19.5 12.9083C19.5 11.462 20.62 10.2882 22 10.2882V9.24015C22 5.04803 21 4 17 4H7C3 4 2 5.04803 2 9.24015V9.76416C3.38 9.76416 4.5 10.938 4.5 12.3842C4.5 13.8305 3.38 15.0043 2 15.0043V15.5283C2 19.7204 3 20.7685 7 20.7685H17C21 20.7685 22 19.7204 22 15.5283C20.62 15.5283 19.5 14.3545 19.5 12.9083Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M9 15.2663L15 8.97814L9 15.2663Z" fill="white" />
                      <path
                        d="M9 15.2663L15 8.97814"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.9945 15.2663H15.0035H14.9945Z"
                        fill="white"
                      />
                      <path
                        d="M14.9945 15.2663H15.0035"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99451 9.50216H9.00349H8.99451Z"
                        fill="white"
                      />
                      <path
                        d="M8.99451 9.50216H9.00349"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Coupon Code"
                  className="form-control search-text"
                />
              </div>
            </div>
            <div className="apply-coupon-btn mt-32">
              <Link to="/checkoutscreen">Apply</Link>
            </div>
            <div className="apply-coupon-second mt-32">
              <div className="apply-coupon-second-wrap">
                <h1 className="d-none">Hidden</h1>
                <h2 className="third-txt1">Available Coupons</h2>
                <div className="navbar-boder coupon"></div>
                <div className="available-coupon-sec mt-24">
                  <div className="available-coupon-sec-wrap">
                    <div className="coupon-name">
                      <h3>Mobile Application Development</h3>
                      <p>Activation code: GMAD10</p>
                    </div>
                    <div className="coupon-price">
                      <div className="supsub">
                        10
                        <sup className="superscript">%</sup>
                        <sub className="subscript">Off</sub>
                      </div>
                    </div>
                  </div>
                  <div className="available-coupon-sec-wrap mt-24">
                    <div className="coupon-name">
                      <h3>Java from Scratch to Expert</h3>
                      <p>Activation code: GJAE25</p>
                    </div>
                    <div className="coupon-price">
                      <div className="supsub">
                        25
                        <sup className="superscript">%</sup>
                        <sub className="subscript">Off</sub>
                      </div>
                    </div>
                  </div>
                  <div className="available-coupon-sec-wrap mt-24">
                    <div className="coupon-name">
                      <h3>Instagram Marketing 2023</h3>
                      <p>Activation code: GINM23</p>
                    </div>
                    <div className="coupon-price">
                      <div className="supsub">
                        40
                        <sup className="superscript">%</sup>
                        <sub className="subscript">Off</sub>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Apply coupon content end --> */}
    </>
  );
};
export default ApplyCoupon;
