import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("language1");
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

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
              <p>Language</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Language section start --> */}
      <section id="language-screen">
        <div className="container">
          <div className="language-screen-full">
            <h1 className="d-none">Change Language</h1>
            <div className="lang-list">
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language1" ? "language-sel" : ""
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
                  English
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language2" ? "language-sel" : ""
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
                  Hindi
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language3" ? "language-sel" : ""
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
                  Spanish
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language4" ? "language-sel" : ""
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
                  French
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language5" ? "language-sel" : ""
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
                  Arabic
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language6" ? "language-sel" : ""
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
                  Bengali
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language7" ? "language-sel" : ""
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
                  Russian
                </label>
              </div>
              <div
                className={`form-check change-lan-sec ${selectedLanguage === "language8" ? "language-sel" : ""
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
                  Chinese
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Language section end --> */}
    </>
  );
};
export default Language;
