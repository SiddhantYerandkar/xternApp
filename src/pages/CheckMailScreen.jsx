import React, { useEffect, useState } from "react";
import MailImg from "../assets/images/mail-screen/mail-img.png";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const CheckMailScreen = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Check mail screen content start --> */}
      <section id="check-mail-screen">
        <div className="container">
          <div className="check-mail-screen-full">
            <div className="check-mail-img">
              <img src={MailImg} alt="mail-img" />
            </div>
            <div className="check-mail-content mt-24">
              <h1>Check Your Mail</h1>
              <p>We have sent a password recover instructions to your email.</p>
            </div>
            <div className="open-email-btn mt-32">
              <a href="mailto:OpenEmailApp">Open Email App</a>
            </div>
            <div className="open-email-skip-btn mt-32">
              <Link to="/resetpasswordscreen">Skip, I’ll confirm later</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Check mail screen content end --> */}
      {/* <!-- Footer start --> */}
      <footer id="checkmail-footer">
        <div className="container">
          <div className="block-footer">
            <p>
              Did not receive the email?Check your spam folder or{" "}
              <Link to="mailto:tryanotheremailaddress">
                try another email address
              </Link>
            </p>
          </div>
        </div>
      </footer>
      {/* <!-- Footer end --> */}
    </>
  );
};
export default CheckMailScreen;
