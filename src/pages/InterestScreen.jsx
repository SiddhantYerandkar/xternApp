import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const InterestScreen = () => {
  //const [loading, setLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
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
      <header id="top-navbar" className="top-navbar">
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <Link to="/spendlearning">
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
              <p>Choose Interests</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/select-courses-screen">Skip</Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Interest screen start --> */}
      <section id="interest-screen">
        <div className="container">
          <div className="furniture-fill-sec mt-32">
            <h1 className="d-none">Interest Details</h1>
            <div className="goal-title">
              <p>Choose 3 or more areas you are interested</p>
            </div>
            <form className="select-interest mt-32">
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest1"
                  name="select-language"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <label
                  className="custom-interest-lbl"
                  htmlFor="select-interest1"
                >
                  History
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest2"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest2"
                >
                  Sport
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest3"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest3"
                >
                  Art
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest4"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest4"
                >
                  Music
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest5"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest5"
                >
                  Traveling
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest6"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest6"
                >
                  Entertainment
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest7"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest7"
                >
                  Social
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest8"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest8"
                >
                  Shopping
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest9"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest9"
                >
                  Hiking
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest10"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest10"
                >
                  Health
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest11"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest11"
                >
                  Food
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest12"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest12"
                >
                  Nature
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest13"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest13"
                >
                  Design
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest14"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest14"
                >
                  Gaming
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest15"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest15"
                >
                  Development
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest16"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest16"
                >
                  Magic
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest17"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest17"
                >
                  Technology
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest18"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest18"
                >
                  Cooking
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest19"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest19"
                >
                  Agriculture
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest20"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest20"
                >
                  Adventure
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest21"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest21"
                >
                  Comedy
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest22"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest22"
                >
                  Theater
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest23"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest23"
                >
                  Magic
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest24"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest24"
                >
                  3D
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest25"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest25"
                >
                  Fashion
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest26"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest26"
                >
                  Motion
                </label>
              </div>
              <div className="interest-sec">
                <input
                  type="checkbox"
                  id="select-interest27"
                  name="select-language"
                />
                <label
                  className="custom-interest-lbl "
                  htmlFor="select-interest27"
                >
                  Digital
                </label>
              </div>
            </form>
            <div className="inter-next-btn">
              <Link to="/select-courses-screen">Next</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Interest screen end --> */}
    </>
  );
};
export default InterestScreen;
