import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Currency = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("language1");
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.id);
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
              <p>Currency</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Currency screen content start --> */}
      <section id="currency-page">
        <div className="container">
          <div className="currency-page-full">
            <div className="lang-list">
              <h1 className="d-none">Currency Page</h1>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language1" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language1"
                  checked={selectedLanguage === "language1"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language1"
                >
                  <span>
                    <svg
                      className="curr-icon active"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_303"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_303)">
                        <path
                          d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Dollar
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language2" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language2"
                  checked={selectedLanguage === "language2"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language2"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_295"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_295)">
                        <path
                          d="M9.5 7.5H13.75C14.9926 7.5 16 8.50736 16 9.75C16 10.9926 14.9926 12 13.75 12H9.5H14.25C15.4926 12 16.5 13.0074 16.5 14.25C16.5 15.4926 15.4926 16.5 14.25 16.5H9.5M9.5 7.5H8M9.5 7.5V16.5M9.5 16.5H8M10 6V7.5M10 16.5V18M13 6V7.5M13 16.5V18M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Bitcoin
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language3" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language3"
                  checked={selectedLanguage === "language3"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language3"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_287"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_287)">
                        <path
                          d="M6.5 15.5L12.0002 18L17.5 15.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.5 11.5L12.0002 14L17.5 11.5L12.0002 5L6.5 11.5Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Ethereum
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language4" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language4"
                  checked={selectedLanguage === "language4"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language4"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_279"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_279)">
                        <path
                          d="M15.3333 8.27316C14.4487 7.48142 13.2806 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C13.2806 17 14.4487 16.5186 15.3333 15.7268M6 13.5H11M6 10.5H11M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Euro
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language5" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language5"
                  checked={selectedLanguage === "language5"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language5"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_271"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_271)">
                        <path
                          d="M15 17.5H9C9 17.5 11 15.2444 11 12.5C11 11 9.91479 10.4867 9.89534 8.96204C9.8966 5.94404 13.5297 6.1045 14.7926 7.30402M9 12.5H14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Pound
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language6" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language6"
                  checked={selectedLanguage === "language6"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language6"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_263"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_263)">
                        <path
                          d="M9.5 6.5H14C15.3807 6.5 16.5 7.61929 16.5 9C16.5 10.3807 15.3807 11.5 14 11.5H9.5V6.5ZM9.5 6.5V17.5M9.75 11.5H8M13 14.75H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Ruble
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language7" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language7"
                  checked={selectedLanguage === "language7"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language7"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_255"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_255)">
                        <path
                          d="M8.5 9.99984H15.5M8.5 6.5H15.5M14 18.0002L8.5 13.5002L10 13.5C14.4447 13.5 14.4447 6.5 10 6.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Rupee
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${
                  selectedLanguage === "language8" ? "language-sel" : ""
                }`}
              >
                <input
                  className="form-check-input custom-input"
                  name="language"
                  type="radio"
                  id="language8"
                  checked={selectedLanguage === "language8"}
                  onChange={handleLanguageChange}
                />
                <label
                  className="form-check-label custom-lable"
                  htmlFor="language8"
                >
                  <span>
                    <svg
                      className="curr-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_247"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1_247)">
                        <path
                          d="M12 18V12M12 12L16 7M12 12L8 7M16 12H8M15.5 15H8.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                  Yen
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Currency screen content end --> */}
    </>
  );
};
export default Currency;
