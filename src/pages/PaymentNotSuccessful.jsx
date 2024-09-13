import React from "react";
import PaymentNotSuccessfulImg from "../assets/images/payment/payment-not-successful.png";
import { Link } from "react-router-dom";
const PaymentNotSuccsessful = () => {
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header">
        <div className="container">
          <div className="top-header-full">
            <div className="back-btn">
              <a href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_330_7385"
                    style="mask-type:alpha"
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
              </a>
            </div>
            <div className="header-title">
              <p>Alert</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Payment successfull screen start --> */}
      <section id="payment-succuessfull">
        <div className="container">
          <div className="payment-succuessfull-wrap">
            <div className="payment-img">
              <img src={PaymentNotSuccessfulImg} alt="payment-img" />
            </div>
            <div className="notification-content mt-32">
              <h1>Something Wrong!</h1>
              <p className="mt-16">Please try again to finish your payment!</p>
            </div>
            <div className="try-again-btn">
              <Link to="/payment-screen">Try Again</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Payment successfull screen end --> */}
    </>
  );
};
export default PaymentNotSuccsessful;
