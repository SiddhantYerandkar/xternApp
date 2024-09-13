import React, { useEffect, useState } from "react";
import EyeiconFill from "../assets/svg/eye-off-fill.svg";
import Eyeicon from "../assets/svg/eye-fill.svg";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const ResetPasswordScreen = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  //const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Preloader start --> */}
      {/* {loading && (
        <div className="loader-mask">
          <div className="loader"></div>
        </div>
      )} */}
      {/* <!-- Preloader end --> */}
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
              <p>Reset Password</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Reset password screen start --> */}
      <section id="reset-password-screen-content">
        <div className="container">
          <h1 className="d-none">Reset Passwork</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="forget-password-screen-wrap">
            <div className="forget-password-screen-top mt-32">
              <p className="title-sec">Enter new password and confirm.</p>
            </div>
            <form className="forget-password-screen-form mt-32">
              <div className="form-details-sign-in mt-12">
                <span>
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
                    <g mask="url(#mask0_330_7136)">
                      <path
                        d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="sign-in-custom-input"
                />
                <img
                  src={isPasswordVisible ? Eyeicon : EyeiconFill}
                  alt="Password Visibility Toggle"
                  className="password-toggle-icon"
                  id="eye"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="form-details-sign-in mt-12">
                <span>
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
                    <g mask="url(#mask0_330_7136)">
                      <path
                        d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Confirm Password"
                  className="sign-in-custom-input"
                />
                <img
                  src={showPassword ? Eyeicon : EyeiconFill}
                  alt="Password Visibility Toggle"
                  className="password-toggle-icon"
                  id="eye"
                  onClick={togglePasswordVisible}
                />
              </div>
            </form>
            <div className="send-instruction-btn mt-32">
              <Link to="/verifyscreen">Change Password</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Reset password screen end --> */}
    </>
  );
};
export default ResetPasswordScreen;
