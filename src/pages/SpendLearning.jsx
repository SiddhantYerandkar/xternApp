import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const SpendLearning = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("language3");

  const handleRadioChange = (event) => {
    setSelectedLanguage(event.target.id);
  };

  //const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-navbar" className="top-navbar">
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link to="/primarygoalscreen">
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
                    <rect width="24" height="24" fill="white"></rect>
                  </mask>
                  <g mask="url(#mask0_330_7385)">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="top-navbar-title">
              <p>Spend Learning</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/interest-screen">Skip</Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Spend learning screen start --> */}
      <section id="primary_goal">
        <div className="container">
          <h1 className="d-none">Hideen</h1>
          <h2 className="d-none">Goal</h2>
          <div className="primary_goal-wrap mt-32">
            <div className="goal-title">
              <p>
                How much time do you want to spend to learn something that you
                like
              </p>
            </div>
            <div className="primary-goal-content mt-32">
              <form className="primary-form">
                {[
                  { id: "language1", label: "Casual (5 Minutes)" },
                  { id: "language2", label: "Regular (10 Minutes)" },
                  { id: "language3", label: "Serious (20 Minutes)" },
                  { id: "language4", label: "Tremendous (60 Minutes)" },
                  { id: "language5", label: "Formidable (90 Minutes)" },
                ].map((option) => (
                  <div
                    key={option.id}
                    className={`form-check select-goal mt-12 ${
                      selectedLanguage === option.id ? "language-sel" : ""
                    }`}
                  >
                    <input
                      className="form-check-input custom-input-goal"
                      name="language"
                      type="radio"
                      id={option.id}
                      checked={selectedLanguage === option.id}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="form-check-label custom-lable-goal"
                      htmlFor={option.id}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </form>
              <div className="next-btn-goal mt-32">
                <Link to="/interestscreen">Next</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Spend learning screen end --> */}
    </>
  );
};
export default SpendLearning;
