import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const PolicyScreen = () => {
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
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
      <header id="top-header" className={isFixed ? "fixed" : ""}>
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
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Policy screen content start --> */}
      <section id="privacy-page">
        <h1 className="d-none">Privacy Page</h1>
        <div className="container">
          <div className="privacy-page-full mt-32">
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
                parturient ac euismod tortor malesuada pellentesque. Turpis leo
                blandit tristique eu phasellus viverra.
              </p>
            </div>
            <div className="privacy-second-content">
              <p className="privacy-txt3">User Information</p>
              <p className="privacy-txt4">
                Nisl porttitor amet vulputate quis eget eu urna. Et tempus
                tellus arcu, in. Morbi dolor volutpat vitae eu, tempor
                adipiscing volutpat vitae.
              </p>
              <p className="privacy-txt5">
                Sed mi condimentum tempor tempus ullamcorper sem faucibus arcu.
                Vel congue diam pretium duis ultricies mauris, suspendisse et.
              </p>
              <p className="privacy-txt6">
                Volutpat massa libero, orci quis eget ullamcorper mauris, sed.
                Nec dolor, sapien diam potenti donec. Eu sit amet integer
                potenti sed sed tellus interdum. Id hac phasellus sem quis
                facilisis turpis.
              </p>
            </div>
            <div className="privacy-second-content">
              <p className="privacy-txt3">Cookies</p>
              <p className="privacy-txt4">
                Quis ultricies donec ornare eget tempus in ut. In ipsum
                accumsan, magna dignissim praesent auctor pellentesque aenean.
              </p>
              <p className="privacy-txt5">
                Lobortis adipiscing vitae semper id tellus tortor massa. A
                vestibulum mattis ipsum, tortor at lectus maecenas. Nulla
                facilisis ornare ac, nunc praesent feugiat. Magna odio bibendum
                turpis eu in tempor vitae a laoreet. Nunc, pulvinar volutpat
                rutrum diam rhoncus et.
              </p>
              <p className="privacy-txt6">
                Tristique a sed sed condimentum consectetur hac. Consectetur
                pellentesque dolor, at elementum gravida non vitae. Odio nulla
                magna commodo vitae in elementum at. Adipiscing nunc in maecenas
                adipiscing. Ipsum non justo facilisi tincidunt venenatis quam
                pellentesque tristique et. Feugiat nisi vel nisl sit orci vel
                magna.{" "}
              </p>
            </div>
            <div className="privacy-second-content">
              <p className="privacy-txt3">Links To The Other Sites</p>
              <p className="privacy-txt4">
                Ornare pulvinar eleifend auctor eget. Quam sit sapien, augue
                pellentesque purus arcu tortor. Varius morbi in id tempus vitae
                lectus eu porttitor quis. Leo diam ipsum consequat mi pharetra
                sapien iaculis. Amet orci sodales id arcu etiam.
              </p>
            </div>
            <div className="privacy-second-content">
              <p className="privacy-txt3">Information Sharing</p>
              <p className="privacy-txt4">
                Nulla in enim eget aliquet mauris et. Lobortis ut lorem sit
                turpis sed eu. Odio nisl odio vitae eu faucibus. Venenatis,
                bibendum aliquet dignissim feugiat rhoncus, sed habitasse dictum
                augue.
              </p>
              <p className="privacy-txt5">
                Laoreet arcu praesent euismod urna ante mattis nunc. In magna
                aenean nec vitae consequat sit malesuada vitae in.
              </p>
              <p className="privacy-txt6">
                Sed sapien, praesent eu turpis. Non purus volutpat tellus dolor,
                mauris fames quam ultrices. Maecenas blandit sodales.{" "}
              </p>
            </div>
            <div className="privacy-second-content">
              <p className="privacy-txt3">Information Security</p>
              <p className="privacy-txt4">
                Lobortis nisl odio in habitasse adipiscing. Ridiculus in viverra
                ullamcorper feugiat viverra gravida condimentum lobortis quam.
              </p>
              <p className="privacy-txt5">
                Turpis non metus sagittis volutpat est tincidunt egestas
                suscipit. Aliquam, amet adipiscing nec in. Id neque, sit
                sagittis, viverra nec.
              </p>
              <p className="privacy-txt6">
                Sagittis orci, senectus scelerisque quam. Turpis viverra
                bibendum nunc euismod in erat ac est lacus.{" "}
              </p>
              <p className="privacy-txt5">
                Fusce a aenean sit viverra elit bibendum sem turpis. Dignissim
                lectus duis at risus nibh.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Policy screen content end --> */}
    </>
  );
};
export default PolicyScreen;
