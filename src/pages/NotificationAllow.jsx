import React, { useEffect, useState } from "react";
import NotificationImg from "../assets/images/notification-allow/notification.png";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const NotificationAllow = () => {
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
      <header id="top-header">
        <div className="container">
          <div className="skip-section">
            <div className="skip-btn">
              <Link to="/preferred-language">Skip</Link>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Notification  screen start --> */}
      <section id="notification-allow-screen">
        <div className="container">
          <div className="notification-allow-screen-wrap">
            <div className="notification-img">
              <img
                src={NotificationImg}
                alt="notification-img"
                className="img-fluid"
              />
            </div>
            <div className="notification-content mt-24">
              <h1>Notifications</h1>
              <p className="mt-16">
                Stay notified about new course update, scoreboard status and
                other updates.
              </p>
            </div>
            <div className="allow-btn mt-32">
              <Link to="/preferredlanguage">Allow</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Notification screen end --> */}
    </>
  );
};
export default NotificationAllow;
