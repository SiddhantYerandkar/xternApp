import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import GurujiLogo from "../assets/images/logo/logo.png";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2000ms delay + 3000ms fade out

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="loader-mask1">
          <div id="splashscreen">
            <div className="container">
              <div className="splashscreen-wrap">
                <div className="logo-img-sec">
                  <img src={GurujiLogo} alt="logo" />
                </div>
                <h1 className="logo-txt mt-24">Guruji</h1>
                <p className="logo-para mt-32">Learn Anytime and Anywhere</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
