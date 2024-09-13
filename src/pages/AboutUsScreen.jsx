import React, { useEffect, useState } from "react";
import FacebookSvg from "../assets/images/about-us/facebook.svg";
import InstagramSvg from "../assets/images/about-us/instagram.svg";
import TwitterSvg from "../assets/images/about-us/twitter.svg";
import YouTubeSvg from "../assets/images/about-us/youtube.svg";

import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const AboutUsScreen = () => {
 //const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
              <p>About Us</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--About us screen content start --> */}
      <section id="about-us-section">
        <div className="container">
          <div className="about-us-section-wrap mt-32">
            <h1 className="d-none">About</h1>
            <h2 className="d-none">Hidden</h2>
            <div className="about-us-screen-full">
              <div className="privacy-first-content">
                <p className="privacy-txt1">
                  Egestas nunc neque sed lobortis tellus, sociis justo felis. Id
                  amet orci auctor diam dolor et metus. Fringilla nulla mauris
                  fermentum, nisl diam diam. Urna maecenas id non enim massa id
                  quis magna. Vulputate sapien elit habitasse elementum nibh
                  aliquam sed. Nisi aliquet mus commodo interdum nisi, faucibus.
                  Aliquet lectus ipsum massa viverra urna egestas.
                </p>
                <p className="privacy-txt2">
                  Libero vulputate porta nisl tortor vitae. Proin pellentesque
                  parturient ac euismod tortor malesuada pellentesque. Turpis
                  leo blandit tristique eu phasellus viverra. Faucibus neque,
                  urna nunc quis id. In luctus sagittis vitae aliquet. Felis
                  dolor in sit arcu ut enim dis. Nibh molestie cursus euismod
                  lacus leo, arcu magna enim blandit.
                </p>
                <p className="privacy-txt2">
                  At adipiscing bibendum ultricies vitae at scelerisque dui
                  turpis et. Aliquam lorem dui aliquet leo sed mauris, amet, at.
                  At volutpat vel eget leo. Integer rhoncus odio massa arcu
                  condimentum. Ac laoreet id malesuada vel metus egestas
                  lacinia.
                </p>
              </div>
            </div>
            <div className="about-us-social-media mt-32">
              <div className="about-us-icon-wrapper">
                <div className="social-detail-about ">
                  <div className="shape facebook-bg">
                    <Link to="https://www.facebook.com/" target="_blank">
                      <img src={FacebookSvg} alt="facebook" />
                    </Link>
                  </div>
                  <div>
                    <p className="about-social-txt">Facebbok</p>
                  </div>
                </div>
                <div className="social-detail-about ">
                  <div className="shape instragram-bg">
                    <Link to="https://www.instagram.com/" target="_blank">
                      <img src={InstagramSvg} alt="instagram" />
                    </Link>
                  </div>
                  <div>
                    <p className="about-social-txt">Instagram</p>
                  </div>
                </div>
                <div className="social-detail-about ">
                  <div className="shape twitter-bg">
                    <Link to="https://twitter.com/" target="_blank">
                      <img src={TwitterSvg} alt="twitter" />
                    </Link>
                  </div>
                  <div>
                    <p className="about-social-txt">Twitter</p>
                  </div>
                </div>
                <div className="social-detail-about ">
                  <div className="shape youtube-bg">
                    <Link to="https://www.youtube.com/" target="_blank">
                      <img src={YouTubeSvg} alt="youtube" />
                    </Link>
                  </div>
                  <div>
                    <p className="about-social-txt">YouTube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--About us screen content end --> */}
    </>
  );
};
export default AboutUsScreen;
