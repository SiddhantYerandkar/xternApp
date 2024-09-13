import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import OtpInputGroup from "../components/OtpGroup";

const VerifyScreen = () => {
  const [seconds, setSeconds] = useState(50);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loading />;
  }
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
              <p>Verify Phone Number</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      <section id="verify-screen">
        <div className="container">
          <h1 className="d-none">Hideen</h1>
          <h2 className="d-none">Verify</h2>
          <div className="verify-screen-wrap">
            <div className="forget-password-screen-top mt-32">
              <p className="title-sec">
                Please enter the verification code we sent to your mobile ***
                *** **65
              </p>
              <form className="mt-32" method="get">
                <OtpInputGroup />
              </form>
              <div className="otp-resend mt-16">
                <span className="resend-txt1">Not yet get?</span>
                <span className="resend-txt2">
                  <Link to="/verifyscreen">Resend OTP</Link>
                </span>
              </div>
              <div className="verify-btn mt-32">
                <Link to="/notificationallow">Verify</Link>
              </div>
              <div className="text-center counter-sec">
                <div className="otp-timer timer">
                  <div className="border"></div>
                  <div className="d-flex timer-counter-content">
                    <div className="time-left" id="counter">
                      {seconds > 0 ? seconds : ""}
                    </div>
                    <div className="timer-text">Sec</div>
                  </div>
                  <p className="otp-left mb-0">left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default VerifyScreen;
