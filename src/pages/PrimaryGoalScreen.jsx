import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const PrimaryGoalScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("language3");

  const handleRadioChange = (event) => {
    setSelectedLanguage(event.target.id);
  };

  // const [loading, setLoading] = useState(true);

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
              <Link to="/preferredlanguage">
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
              <p>Primary Goal</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/spend-learning">Skip</Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Primary goal start --> */}
      <section id="primary_goal">
        <div className="container">
          <h1 className="d-none">Goal</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="primary_goal-wrap mt-32">
            <div className="goal-title">
              <p>What is your main goal in learning something new?</p>
            </div>
            <div className="primary-goal-content mt-32">
              <form className="primary-form">
                {[
                  { id: "language1", label: "Start a new career and skills" },
                  { id: "language2", label: "Start a new career" },
                  { id: "language3", label: "Advance my educational goal" },
                  { id: "language4", label: "Start a new skills" },
                  { id: "language5", label: "I love to learn new things" },
                  { id: "language6", label: "Just for fun" },
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
                <Link to="/spendlearning">Next</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Primary goal end --> */}
    </>
  );
};
export default PrimaryGoalScreen;
