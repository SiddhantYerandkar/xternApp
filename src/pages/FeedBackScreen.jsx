import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const FeedBackScreen = () => {
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
              <p>Feedback</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Feedback screen content start --> */}
      <section id="forget-password-screen-content">
        <div className="container">
          <h1 className="d-none">Feedback</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="forget-password-screen-wrap">
            <div className="forget-password-screen-top mt-32">
              <p className="title-sec">
                Tell us what you love about the app, or what we could be doing
                bettre.
              </p>
            </div>
            <form className="forget-password-screen-form mt-24">
              <div className="form-details-sign-in">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_231_1405"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_231_1405)">
                      <path
                        d="M4 20H8L18.5 9.5C19.0304 8.96956 19.3284 8.25014 19.3284 7.5C19.3284 6.74985 19.0304 6.03043 18.5 5.5C17.9696 4.96956 17.2501 4.67157 16.5 4.67157C15.7499 4.67157 15.0304 4.96956 14.5 5.5L4 16V20Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 6.5L17.5 10.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type="text"
                  id="name"
                  placeholder="Write feedback"
                  className="sign-in-custom-input"
                />
              </div>
            </form>
            <div className="feedback-submit mt-32">
              <Link to="/homescreen">Submit</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Feedback screen content end --> */}
    </>
  );
};
export default FeedBackScreen;
