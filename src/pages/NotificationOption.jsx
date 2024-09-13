import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const NotificationOption = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

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
              <p>Notification</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Notification start --> */}
      <section id="notification2-screen">
        <div className="container">
          <h1 className="d-none">Notification</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="notification2-screen-wrap">
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>General Notification</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>Sound</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>Vibrate</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>Special Offers</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>Promo & Discount</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>Payments</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>App Updates</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleChange}
                    />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>New Course Available</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
              <div className="setting-border"></div>
            </div>
            <div className="notification-option-wrap">
              <div className="notification-option-wrapper">
                <div className="notification-option-name">
                  <p>New Tips Available</p>
                </div>
                <div className="notification-option-switch">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider "></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Notification end --> */}
    </>
  );
};
export default NotificationOption;
