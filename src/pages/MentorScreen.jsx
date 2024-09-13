import React, { useEffect, useState } from "react";
import FilterIcon from "../assets/images/mentor/filter-icon.svg";
import MentorImg1 from "../assets/images/mentor/mentor1.png";
import MentorImg2 from "../assets/images/mentor/mentor2.png";
import MentorImg3 from "../assets/images/mentor/mentor3.png";
import MentorImg4 from "../assets/images/mentor/mentor4.png";
import MentorImg5 from "../assets/images/mentor/mentor5.png";
import MentorImg6 from "../assets/images/mentor/mentor6.png";
import MentorImg7 from "../assets/images/mentor/mentor7.png";
import MentorImg8 from "../assets/images/mentor/mentor8.png";
import MentorImg9 from "../assets/images/mentor/mentor9.png";
import MentorImg10 from "../assets/images/mentor/mentor10.png";
import MentorImg11 from "../assets/images/mentor/mentor11.png";
import MentorImg12 from "../assets/images/mentor/mentor12.png";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const MentorScreen = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Header start --> */}
      <header
        id="top-navbar"
        className={`top-navbar ${isFixed ? "fixed" : ""}`}
      >
        <div className="container">
          <div className="top-navbar_full">
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
            </div>
            <div className="top-navbar-title">
              <p>Mentors</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/filter-screen">
                <img src={FilterIcon} alt="filter-icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Mentor screen content start --> */}
      <section id="mentor-screen">
        <div className="container">
          <h1 className="d-none">Mentor</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="mentor-screen-wrap">
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-32">
                <div className="mentor-img">
                  <img src={MentorImg1} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Jacob Clark</h3>
                  <h4 className="mt-12">1.2k followers</h4>
                  <p className="mt-16">Business, Design</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor1"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend "
                      htmlFor="select-mentor1"
                    >
                      Following
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg2} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Claire Joe</h3>
                  <h4 className="mt-12">356k followers</h4>
                  <p className="mt-16">Development</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor2"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor2"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg3} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Priscilla Smith</h3>
                  <h4 className="mt-12">152k followers</h4>
                  <p className="mt-16">Science</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor3"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor3"
                    >
                      Following
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg4} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Wade Munsai</h3>
                  <h4 className="mt-12">562k followers</h4>
                  <p className="mt-16">Lifestyle</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor4"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor4"
                    >
                      Following
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg5} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Ezer Lumica</h3>
                  <h4 className="mt-12">23k followers</h4>
                  <p className="mt-16">Photography</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor5"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor5"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg6} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Galena Muri</h3>
                  <h4 className="mt-12">64k followers</h4>
                  <p className="mt-16">Health & Fitness</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor6"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor6"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg7} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Athena Joy</h3>
                  <h4 className="mt-12">236k followers</h4>
                  <p className="mt-16">Design</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor7"
                      name="select-language"
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor7"
                    >
                      Following
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg8} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Veda Jorden</h3>
                  <h4 className="mt-12">178k followers</h4>
                  <p className="mt-16">Marketing</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor8"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor8"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg9} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Konrad Roy</h3>
                  <h4 className="mt-12">89k followers</h4>
                  <p className="mt-16">Music</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor9"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor9"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg10} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Tomoyo Yonge</h3>
                  <h4 className="mt-12">214k followers</h4>
                  <p className="mt-16">IT & Software</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor10"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor10"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg11} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Raynell Parker</h3>
                  <h4 className="mt-12">356k followers</h4>
                  <p className="mt-16">Personal Development</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor11"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor11"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/single-mentor">
              <div className="mentor-content redirect-mentor mt-16">
                <div className="mentor-img">
                  <img src={MentorImg12} alt="mentor-img" />
                </div>
                <div className="mentor-details">
                  <h3>Griselda Fledo</h3>
                  <h4 className="mt-12">66k followers</h4>
                  <p className="mt-16">Finance & Accounting</p>
                </div>
                <div>
                  <div className="mentor-select">
                    <input
                      type="checkbox"
                      id="select-mentor12"
                      name="select-language"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-radio-sel-friend  "
                      htmlFor="select-mentor12"
                    >
                      Follow
                    </label>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- Mentor screen content end --> */}
    </>
  );
};
export default MentorScreen;
