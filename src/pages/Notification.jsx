import React, { useEffect, useState } from "react";
import NotificationImg1 from "../assets/images/notification/notification1.png";
import NotificationImg2 from "../assets/images/notification/notification2.png";
import NotificationImg3 from "../assets/images/notification/notification3.png";
import NotificationImg4 from "../assets/images/notification/notification4.png";
import NotificationImg5 from "../assets/images/notification/notification5.png";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Notification = () => {
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
              <p>Notification</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Notification screen start --> */}
      <section id="notification-screen">
        <div className="container">
          <h1 className="d-none">Notification</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="notification-screen-wrap">
            <div className="notification-top mt-32">
              <div className="notification-client-img">
                <img src={NotificationImg1} alt="client-img" />
              </div>
              <div className="notification-txt">
                <p className="notifi-txt1">
                  Barbara Michela{" "}
                  <span className="notifi-txt2">comments on the </span>Courses
                  of Climate Change <span className="notifi-txt2">course.</span>
                  <span className="notifi-txt3"> 10:00 AM</span>
                </p>
              </div>
            </div>
            <div className="notification-top mt-16">
              <div className="notification-client-img">
                <img src={NotificationImg2} alt="client-img" />
              </div>
              <div className="notification-txt">
                <p className="notifi-txt1">
                  Nicole Foster{" "}
                  <span className="notifi-txt2">started following you.</span>
                  <br />
                  <span className="notifi-txt3"> 08:00 AM</span>
                </p>
              </div>
            </div>
            <div className="notification-top mt-16">
              <div className="notification-client-img">
                <img src={NotificationImg3} alt="client-img" />
              </div>
              <div className="notification-txt">
                <p className="notifi-txt1">
                  Daniela Marwa{" "}
                  <span className="notifi-txt2">started following you.</span>
                  <br />
                  <span className="notifi-txt3"> 07:00 AM</span>
                </p>
              </div>
            </div>
            <div className="notification-top mt-16">
              <div className="notification-client-img">
                <img src={NotificationImg4} alt="client-img" />
              </div>
              <div className="notification-txt">
                <p className="notifi-txt1">
                  Amber Julia
                  <span className="notifi-txt2">
                    loves your comments in the Courses of{" "}
                  </span>
                  Making Sense of Data.{" "}
                  <span className="notifi-txt3"> Yesterday</span>
                </p>
              </div>
            </div>
            <div className="notification-top mt-16">
              <div className="notification-client-img">
                <img src={NotificationImg5} alt="client-img" />
              </div>
              <div className="notification-txt">
                <p className="notifi-txt1">
                  Peter Parker
                  <span className="notifi-txt2">
                    comments on the Courses of{" "}
                  </span>
                  Productivity Analytics for Business.{" "}
                  <span className="notifi-txt3"> 25 Nov, 22</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Notification screen end --> */}
    </>
  );
};
export default Notification;
