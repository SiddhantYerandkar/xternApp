import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../components/Loading";
import PaymentDatePicker from "../components/PayementDatePicker";

const PaymentScreen = () => {
  const [activePayment, setActivePayment] = useState("#apply-pay");
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  const handlePaymentClick = (payment) => {
    setActivePayment(payment);
  };

  const settings = {
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    infinite: false,
    variableWidth: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
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
              <p>Payment Method</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Payment screen start --> */}
      <section id="payment-method-screen">
        <h1 className="d-none">Payment</h1>
        <h2 className="d-none">Hidden</h2>
        <div className="container">
          <div className="payment-method-screen-wrap">
            <div className="payment-top mt-32">
              <p>Choose your payment method</p>
            </div>
          </div>
        </div>
        <div className="payment-bottom mt-32">
          <div className="payment-bottom-wrap">
            <div className="insta_type_wrap payment-wrap mt-24">
              <Slider {...settings}>
                <a
                  href="#apply-pay"
                  className={`apply-pay pay-btn ${
                    activePayment === "#apply-pay" ? "active" : ""
                  }`}
                  onClick={() => handlePaymentClick("#apply-pay")}
                >
                  <div className="payment-btn">
                    <div className="check-select-mode">
                      <div className="payment-custom-radio custom-svg">
                        <svg
                          width="51"
                          height="22"
                          viewBox="0 0 51 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.45407 3.03395C8.86652 3.75241 7.92644 4.31908 6.98636 4.23813C6.86885 3.26669 7.3291 2.23454 7.86769 1.59704C8.45524 0.858342 9.48345 0.332148 10.3158 0.291672C10.4137 1.30358 10.0318 2.29526 9.45407 3.03395ZM10.3059 4.43038C9.47775 4.38113 8.72206 4.68776 8.11167 4.93544C7.71887 5.09482 7.38623 5.22979 7.13317 5.22979C6.84919 5.22979 6.50282 5.08761 6.11393 4.92796C5.60436 4.71878 5.02178 4.47962 4.41085 4.4911C3.01052 4.51134 1.70812 5.33099 0.993263 6.63635C-0.475615 9.24708 0.611355 13.1126 2.03127 15.2376C2.72654 16.29 3.5589 17.4436 4.65567 17.4031C5.13817 17.3843 5.48526 17.2321 5.84447 17.0746C6.25801 16.8932 6.68761 16.7049 7.3584 16.7049C8.00594 16.7049 8.41675 16.8883 8.8111 17.0644C9.18607 17.2319 9.54616 17.3927 10.0807 17.3828C11.2167 17.3626 11.9315 16.3305 12.6268 15.2781C13.3771 14.1486 13.7068 13.0462 13.7568 12.879L13.7627 12.8596C13.7615 12.8584 13.7523 12.854 13.7359 12.8463L13.7359 12.8462C13.4851 12.7276 11.568 11.8207 11.5496 9.38875C11.5311 7.3475 13.0702 6.31327 13.3124 6.15047C13.3272 6.14056 13.3371 6.13388 13.3416 6.13039C12.3624 4.63277 10.8347 4.47086 10.3059 4.43038ZM18.1694 17.2715V1.49583H23.8981C26.8554 1.49583 28.9216 3.60061 28.9216 6.67682C28.9216 9.75303 26.8162 11.878 23.8197 11.878H20.5392V17.2715H18.1694ZM20.539 3.56013H23.2711C25.3276 3.56013 26.5027 4.69348 26.5027 6.68694C26.5027 8.68041 25.3276 9.82387 23.2613 9.82387H20.539V3.56013ZM36.7459 15.3793C36.1192 16.6138 34.7385 17.393 33.25 17.393C31.0467 17.393 29.5093 16.037 29.5093 13.9929C29.5093 11.9691 30.9977 10.8054 33.7494 10.6334L36.7068 10.4513V9.58101C36.7068 8.29588 35.894 7.59766 34.4447 7.59766C33.25 7.59766 32.3785 8.23517 32.2022 9.2066H30.0674C30.136 7.16254 31.9966 5.67503 34.5133 5.67503C37.2258 5.67503 38.9884 7.1423 38.9884 9.4191V17.2715H36.7949V15.3793H36.7459ZM33.8864 15.5209C32.6231 15.5209 31.8201 14.8936 31.8201 13.9322C31.8201 12.9406 32.5938 12.3638 34.0724 12.2727L36.7066 12.1007V12.9912C36.7066 14.4685 35.4923 15.5209 33.8864 15.5209ZM46.2642 17.8888C45.3143 20.6513 44.2273 21.562 41.9163 21.562C41.74 21.562 41.1525 21.5418 41.0154 21.5013V19.6091C41.1623 19.6293 41.5246 19.6495 41.7107 19.6495C42.7585 19.6495 43.346 19.1942 43.7083 18.0102L43.9238 17.312L39.9088 5.82683H42.3863L45.1772 15.1465H45.2262L48.017 5.82683H50.426L46.2642 17.8888Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#gpay"
                  className={`gpay pay-btn ${
                    activePayment === "#gpay" ? "active" : ""
                  }`}
                  onClick={() => handlePaymentClick("#gpay")}
                >
                  <div className="payment-btn">
                    <div className="check-select-mode ">
                      <div className="payment-custom-radio">
                        <svg
                          width="50"
                          height="22"
                          viewBox="0 0 50 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.0603 16.703V10.7114H26.1786C27.4564 10.7114 28.535 10.2868 29.4142 9.44938L29.6252 9.23708C31.2313 7.5033 31.1258 4.80237 29.4142 3.19833C28.5584 2.34913 27.3861 1.88914 26.1786 1.91273H21.1729V16.703H23.0603ZM23.0605 8.89493V3.72896H26.2262C26.9063 3.72896 27.5511 3.98844 28.0319 4.46022C29.0519 5.45095 29.0754 7.10217 28.0905 8.12829C27.6098 8.63545 26.9297 8.91852 26.2262 8.89493H23.0605ZM38.4293 7.37352C37.6204 6.63047 36.5185 6.25305 35.1234 6.25305C33.3298 6.25305 31.9816 6.91353 31.0907 8.22272L32.7553 9.27242C33.3649 8.37605 34.1973 7.92786 35.2524 7.92786C35.9206 7.92786 36.5654 8.17554 37.0695 8.62373C37.5618 9.04833 37.8432 9.66164 37.8432 10.3103V10.7467C37.1163 10.3457 36.2019 10.1334 35.0765 10.1334C33.7635 10.1334 32.7085 10.4401 31.923 11.0652C31.1376 11.6903 30.739 12.5159 30.739 13.5656C30.7155 14.521 31.1258 15.4291 31.8527 16.0424C32.5912 16.7029 33.5291 17.0332 34.631 17.0332C35.9323 17.0332 36.9639 16.4552 37.7494 15.2994H37.8315V16.7029H39.6368V10.4637C39.6368 9.15448 39.2382 8.11657 38.4293 7.37352ZM33.3066 14.8394C32.9197 14.5564 32.6852 14.0964 32.6852 13.601C32.6852 13.0467 32.9432 12.5867 33.4473 12.2211C33.9632 11.8554 34.6081 11.6667 35.3702 11.6667C36.4255 11.6549 37.2462 11.8908 37.8325 12.3626C37.8325 13.1646 37.5159 13.8605 36.8945 14.4502C36.3317 15.0164 35.5696 15.3348 34.7723 15.3348C34.2446 15.3466 33.7287 15.1697 33.3066 14.8394ZM43.693 21.1494L50.0001 6.58328H47.9485L45.0295 13.8487H44.9943L42.0049 6.58328H39.9534L44.0916 16.0542L41.747 21.1494H43.693Z"
                            fill="#A0A0A0"
                          />
                          <path
                            d="M16.544 9.41404C16.544 8.83611 16.4971 8.25818 16.4034 7.69205H8.44336V10.9591H13.0037C12.8161 12.0088 12.2065 12.9524 11.3155 13.5421V15.6651H14.0353C15.6296 14.1908 16.544 12.0088 16.544 9.41404Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M8.44421 17.7174C10.7185 17.7174 12.6411 16.9625 14.0361 15.6651L11.3164 13.5421C10.5544 14.0611 9.58136 14.3559 8.44421 14.3559C6.24027 14.3559 4.37629 12.858 3.70807 10.853H0.90625V13.0467C2.33647 15.9128 5.25553 17.7174 8.44421 17.7174Z"
                            fill="#25D366"
                          />
                          <path
                            d="M3.70803 10.853C3.35628 9.80329 3.35628 8.65923 3.70803 7.59773V5.41576H0.905755C-0.301918 7.81003 -0.301918 10.6407 0.905755 13.035L3.70803 10.853Z"
                            fill="#FBBC04"
                          />
                          <path
                            d="M8.44421 4.09475C9.65169 4.07116 10.8123 4.53114 11.6798 5.36855L14.0948 2.93889C12.559 1.49997 10.5427 0.709743 8.44421 0.733332C5.25553 0.733332 2.33647 2.54968 0.90625 5.41573L3.70807 7.60949C4.37629 5.59264 6.24027 4.09475 8.44421 4.09475Z"
                            fill="#EA4335"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#visa"
                  className={`visa pay-btn ${
                    activePayment === "#visa" ? "active" : ""
                  }`}
                  onClick={() => handlePaymentClick("#visa")}
                >
                  <div className="payment-btn">
                    <div className="check-select-mode">
                      <div className="payment-custom-radio">
                        <svg
                          width="50"
                          height="17"
                          viewBox="0 0 50 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.1333 16.3773H8.89269L5.71272 3.99276C5.56179 3.42308 5.24131 2.91944 4.7699 2.68207C3.59343 2.08555 2.29705 1.61081 0.882812 1.37138V0.894577H7.71416C8.65698 0.894577 9.3641 1.61081 9.48195 2.44264L11.1319 11.376L15.3705 0.894577H19.4933L13.1333 16.3773ZM21.8503 16.3773H17.8454L21.1432 0.894577H25.1482L21.8503 16.3773ZM30.3296 5.18376C30.4474 4.34987 31.1545 3.87306 31.9795 3.87306C33.2759 3.75335 34.688 3.99278 35.8666 4.58724L36.5737 1.25374C35.3952 0.77694 34.0988 0.537506 32.9223 0.537506C29.0352 0.537506 26.2068 2.68209 26.2068 5.65849C26.2068 7.92279 28.2103 9.1117 29.6245 9.82794C31.1545 10.5421 31.7438 11.0189 31.6259 11.7331C31.6259 12.8043 30.4474 13.2812 29.2709 13.2812C27.8567 13.2812 26.4425 12.9241 25.1482 12.3275L24.441 15.6631C25.8553 16.2576 27.3853 16.497 28.7995 16.497C33.158 16.6146 35.8666 14.4721 35.8666 11.2563C35.8666 7.20656 30.3296 6.96919 30.3296 5.18376ZM49.8828 16.3773L46.7028 0.894577H43.2872C42.5801 0.894577 41.8729 1.37138 41.6372 2.08555L35.7487 16.3773H39.8715L40.6944 14.115H45.76L46.2314 16.3773H49.8828ZM43.8764 5.06404L45.0529 10.8992H41.7551L43.8764 5.06404Z"
                            fill="#172B85"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#paypal"
                  className={`paypal pay-btn ${
                    activePayment === "#paypal" ? "active" : ""
                  }`}
                  onClick={() => handlePaymentClick("#paypal")}
                >
                  <div className="payment-btn">
                    <div className="check-select-mode">
                      <div className="payment-custom-radio">
                        <svg
                          width="23"
                          height="28"
                          viewBox="0 0 23 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.08806 26.6652L7.5425 23.7066L6.53018 23.6824H1.6962L5.05565 1.84959C5.06611 1.78348 5.09995 1.72211 5.14936 1.67845C5.19901 1.63479 5.2623 1.61084 5.3285 1.61084H13.4793C16.1855 1.61084 18.0529 2.18789 19.0277 3.32702C19.4848 3.86141 19.7759 4.41999 19.9169 5.03447C20.0646 5.67937 20.067 6.44977 19.923 7.38956L19.9125 7.45792V8.06017L20.3696 8.32562C20.7544 8.53493 21.0604 8.77443 21.295 9.04861C21.6859 9.50566 21.9388 10.0865 22.0457 10.7748C22.1562 11.4828 22.1197 12.3255 21.9388 13.2796C21.7302 14.3768 21.3931 15.3325 20.9377 16.1144C20.519 16.8349 19.9855 17.4327 19.3519 17.8957C18.7471 18.3358 18.0285 18.6698 17.2161 18.8836C16.4287 19.0937 15.531 19.1997 14.5464 19.1997H13.9121C13.4587 19.1997 13.0181 19.3671 12.6722 19.6673C12.3254 19.9736 12.0961 20.3923 12.0257 20.8501L11.9778 21.1165L11.1748 26.3314L11.1385 26.5227C11.1288 26.5834 11.1122 26.6136 11.0879 26.634C11.0662 26.6527 11.0351 26.6652 11.0047 26.6652H7.08806Z"
                            fill="#28356A"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.8028 7.52747C20.7787 7.68688 20.7507 7.84979 20.7196 8.0172C19.6447 13.6739 15.9671 15.6281 11.2704 15.6281H8.87897C8.30454 15.6281 7.82041 16.0555 7.73108 16.6363L6.15991 26.8512C6.10174 27.2327 6.38847 27.5762 6.76379 27.5762H11.0053C11.5075 27.5762 11.9342 27.2023 12.0133 26.6946L12.0549 26.4738L12.8535 21.2793L12.9049 20.9944C12.983 20.485 13.4106 20.1108 13.9128 20.1108H14.5471C18.6565 20.1108 21.8735 18.4008 22.8138 13.4521C23.2064 11.3849 23.0032 9.65878 21.9638 8.44481C21.6494 8.07882 21.2592 7.77495 20.8028 7.52747Z"
                            fill="#298FC2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.6779 7.068C19.5136 7.01886 19.3442 6.97445 19.1704 6.93428C18.9956 6.89511 18.8167 6.86044 18.6325 6.83C17.9877 6.72322 17.2811 6.67258 16.5243 6.67258H10.1357C9.97825 6.67258 9.8288 6.709 9.69517 6.77486C9.40041 6.92006 9.18159 7.20597 9.12853 7.55599L7.76937 16.3791L7.73042 16.6363C7.81975 16.0555 8.30388 15.6282 8.87831 15.6282H11.2697C15.9665 15.6282 19.644 13.673 20.7189 8.01728C20.751 7.84988 20.7781 7.68697 20.8022 7.52755C20.5303 7.37961 20.2358 7.25312 19.9186 7.14534C19.8402 7.11865 19.7594 7.09295 19.6779 7.068Z"
                            fill="#22284F"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.1289 7.55602C9.18196 7.206 9.40078 6.92009 9.69554 6.77589C9.83014 6.70978 9.97862 6.67336 10.1361 6.67336H16.5247C17.2814 6.67336 17.988 6.72425 18.6328 6.83103C18.8171 6.86122 18.996 6.89614 19.1707 6.93531C19.3445 6.97523 19.5139 7.01989 19.6782 7.06878C19.7598 7.09373 19.8406 7.11968 19.9197 7.14537C20.2368 7.25315 20.5316 7.38063 20.8035 7.52758C21.1233 5.43718 20.8008 4.01389 19.6982 2.72507C18.4824 1.30603 16.2884 0.698792 13.4807 0.698792H5.32962C4.75616 0.698792 4.26692 1.12615 4.17832 1.70794L0.783332 23.7653C0.716396 24.2016 1.04475 24.5953 1.47411 24.5953H6.50623L9.1289 7.55602Z"
                            fill="#28356A"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#master-pay"
                  className={`mastercard pay-btn ${
                    activePayment === "#mastercard" ? "active" : ""
                  }`}
                  onClick={() => handlePaymentClick("#mastercard")}
                >
                  <div className="payment-btn">
                    <div className="check-select-mode">
                      <div className="payment-custom-radio">
                        <svg
                          width="47"
                          height="28"
                          viewBox="0 0 47 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.3685 24.3601C20.9307 26.3978 17.7686 27.6279 14.3132 27.6279C6.60315 27.6279 0.352936 21.5035 0.352936 13.9487C0.352936 6.3939 6.60315 0.269531 14.3132 0.269531C17.7686 0.269531 20.9307 1.49963 23.3685 3.5373C25.8062 1.49963 28.9684 0.269531 32.4238 0.269531C40.1338 0.269531 46.384 6.3939 46.384 13.9487C46.384 21.5035 40.1338 27.6279 32.4238 27.6279C28.9684 27.6279 25.8062 26.3978 23.3685 24.3601Z"
                            fill="#ED0006"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.3685 24.3601C26.3701 21.8511 28.2734 18.1177 28.2734 13.9487C28.2734 9.7797 26.3701 6.0463 23.3685 3.53729C25.8062 1.49962 28.9684 0.269531 32.4237 0.269531C40.1338 0.269531 46.384 6.3939 46.384 13.9487C46.384 21.5035 40.1338 27.6279 32.4237 27.6279C28.9684 27.6279 25.8062 26.3978 23.3685 24.3601Z"
                            fill="#F9A000"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.3685 24.36C26.3701 21.851 28.2734 18.1177 28.2734 13.9487C28.2734 9.77974 26.3701 6.04636 23.3685 3.53735C20.3669 6.04636 18.4636 9.77974 18.4636 13.9487C18.4636 18.1177 20.3669 21.851 23.3685 24.36Z"
                            fill="#FF5E00"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="#pay"
                  className={`pay pay-btn ${
                    activePayment === "#pay" ? "active" : ""
                  }`}
                  onClick={() => handlePaymentClick("#pay")}
                >
                  <div className="payment-btn">
                    <div className="check-select-mode">
                      <div className="payment-custom-radio">
                        <svg
                          width="42"
                          height="27"
                          viewBox="0 0 42 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.9642 21.449C33.3657 24.8208 26.6996 26.6136 20.9587 26.6136C12.9131 26.6136 5.66805 23.6585 0.185965 18.7403C-0.244388 18.354 0.138997 17.8265 0.656732 18.1261C6.57136 21.5456 13.8863 23.6053 21.4415 23.6053C26.538 23.6053 32.1402 22.5549 37.2957 20.3822C38.0723 20.0534 38.7244 20.8901 37.9642 21.449ZM39.8767 19.2786C40.4655 20.0274 39.2225 23.1105 38.6676 24.4876C38.4994 24.9044 38.8599 25.0726 39.24 24.7568C41.7063 22.7068 42.3442 18.4104 41.8396 17.7897C41.3382 17.1743 37.0259 16.6447 34.3936 18.4809C33.9883 18.7631 34.0582 19.1538 34.5072 19.0995C35.9894 18.9237 39.2891 18.5298 39.8767 19.2786Z"
                            fill="#FF9900"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M33.2204 13.7581L38.0067 1.6546C38.1072 1.40934 38.1586 1.23679 38.1586 1.13586C38.1586 0.963313 38.057 0.876495 37.8538 0.876495H36.636C36.4033 0.876495 36.2449 0.913393 36.1564 0.985017C36.0691 1.05773 35.9828 1.21617 35.8954 1.46143L32.9583 9.84692L29.9131 1.46143C29.8257 1.21617 29.7394 1.05773 29.652 0.985017C29.5646 0.913393 29.4052 0.876495 29.1725 0.876495H27.8672C27.6641 0.876495 27.5625 0.963313 27.5625 1.13586C27.5625 1.23679 27.6127 1.40934 27.7143 1.6546L31.913 11.9425L31.5001 13.0451C31.2533 13.7374 30.978 14.2128 30.6733 14.4721C30.3685 14.7315 29.9404 14.8606 29.3899 14.8606C29.143 14.8606 28.9475 14.8454 28.8033 14.8172C28.658 14.789 28.5488 14.7738 28.4767 14.7738C28.2594 14.7738 28.1501 14.9106 28.1501 15.184V15.7462C28.1501 15.948 28.1862 16.0956 28.2594 16.1889C28.3315 16.2823 28.4472 16.3517 28.6078 16.3941C28.9693 16.4939 29.3833 16.546 29.8475 16.546C30.6744 16.546 31.345 16.33 31.8595 15.897C32.3761 15.4662 32.8294 14.7521 33.2204 13.7581Z"
                            fill="#A0A0A0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.3524 3.8511C15.1416 3.15221 14.8412 2.55751 14.4491 2.06808C14.0581 1.57865 13.5797 1.20316 13.0139 0.943791C12.4492 0.684424 11.8178 0.555283 11.121 0.555283C10.4689 0.555283 9.8299 0.676827 9.20731 0.922087C8.58363 1.16735 7.99599 1.52764 7.44439 2.00297L7.33626 1.3106C7.29257 1.02301 7.12545 0.878678 6.83491 0.878678H5.87808C5.58863 0.878678 5.44336 1.02301 5.44336 1.3106V15.8569C5.44336 16.1456 5.58863 16.2888 5.87808 16.2888H7.16149C7.45204 16.2888 7.59622 16.1445 7.59622 15.8569V10.7998C8.53884 11.6495 9.66279 12.0749 10.968 12.0749C11.678 12.0749 12.3235 11.9338 12.9035 11.6538C13.4835 11.3728 13.9761 10.9799 14.3825 10.4753C14.7888 9.97174 15.1045 9.35967 15.3284 8.638C15.5534 7.91741 15.6659 7.11001 15.6659 6.21688C15.6681 5.33893 15.5621 4.54998 15.3524 3.8511ZM10.4689 10.3451C9.48147 10.3451 8.52464 9.99995 7.59731 9.30758V3.2781C8.51044 2.61503 9.48256 2.28404 10.5126 2.28404C12.4852 2.28404 13.4715 3.63188 13.4715 6.3254C13.4704 9.00589 12.4699 10.3451 10.4689 10.3451Z"
                            fill="#A0A0A0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.1622 1.40393C24.509 0.84287 23.4943 0.561798 22.117 0.561798C21.4354 0.561798 20.7538 0.623656 20.0722 0.7452C19.3896 0.86783 18.8172 1.02953 18.353 1.23138C18.1793 1.30409 18.0625 1.37897 18.0046 1.45819C17.9467 1.53741 17.9172 1.67849 17.9172 1.87925V2.46202C17.9172 2.72139 18.0111 2.85161 18.2001 2.85161C18.258 2.85161 18.3202 2.84076 18.3858 2.81905C18.4513 2.79735 18.5059 2.77999 18.5485 2.76479C19.6659 2.4338 20.7309 2.26776 21.7467 2.26776C22.6161 2.26776 23.2256 2.42621 23.574 2.74417C23.9225 3.06106 24.0961 3.60801 24.0961 4.38611V5.81209C23.0814 5.56683 22.1672 5.44529 21.3546 5.44529C20.0788 5.44529 19.0641 5.75891 18.3093 6.38509C17.5557 7.01126 17.1777 7.85122 17.1777 8.9028C17.1777 9.88383 17.4825 10.6641 18.092 11.248C18.7004 11.8318 19.5272 12.1226 20.5714 12.1226C21.1951 12.1226 21.8221 12 22.4534 11.7558C23.0847 11.5117 23.6603 11.1644 24.1824 10.7184L24.2917 11.4314C24.3354 11.7048 24.4948 11.8416 24.7712 11.8416H25.7061C25.9956 11.8416 26.142 11.6972 26.142 11.4097V4.01931C26.1409 2.8375 25.8143 1.96607 25.1622 1.40393ZM24.0961 9.402C23.6177 9.76229 23.1175 10.0358 22.5954 10.2235C22.0733 10.4113 21.573 10.5046 21.0946 10.5046C20.5288 10.5046 20.0941 10.357 19.7893 10.0618C19.4846 9.76663 19.3328 9.34557 19.3328 8.79753C19.3328 7.5441 20.152 6.91684 21.7904 6.91684C22.1672 6.91684 22.555 6.94289 22.9536 6.99281C23.3523 7.04382 23.7335 7.11218 24.0961 7.19792V9.402Z"
                            fill="#A0A0A0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Slider>
            </div>
            <div className="container mt-32">
              <div className="payment-boder"></div>
            </div>
            <div className="hero-heading">
              <div
                id="apply-pay"
                className="apply-pay-sec"
                style={{
                  display: activePayment === "#apply-pay" ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="payment-method-bottom-full mt-32">
                    <h3 className="pay-txt1">Apple Pay</h3>
                    <div className="payment-form mt-16">
                      <input
                        type="number"
                        id="apple-id"
                        className="custom-payment-input"
                        placeholder="Enter Apple ID"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="gpay"
                className="gpay-sec hello"
                style={{
                  display: activePayment === "#gpay" ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="payment-method-bottom mt-32">
                    <div className="payment-method-bottom-full">
                      <h3 className="pay-txt1">Google Pay</h3>
                      <div className="payment-form mt-16">
                        <input
                          type="number"
                          id="UPI-id"
                          className="custom-payment-input"
                          placeholder="Enter UPI ID"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="visa"
                className="visa-sec hello"
                style={{
                  display: activePayment === "#visa" ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="payment-method-bottom-full mt-32">
                    <h3 className="pay-txt1">Visa Card</h3>
                    <div className="payment-form mt-16">
                      <input
                        type="number"
                        id="visa-number"
                        className="custom-payment-input"
                        placeholder="Enter Card Number"
                      />
                      <input
                        type="text"
                        id="visa-name"
                        className="custom-payment-input margin-top"
                        placeholder="Card Holder Name"
                      />
                      <PaymentDatePicker />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="paypal"
                className="paypal-sec"
                style={{
                  display: activePayment === "#paypal" ? "block" : "none",
                }}
              >
                <div className="payment-method-bottom-full mt-32">
                  <div className="container">
                    <h3 className="pay-txt1">Paypal</h3>
                    <div className="payment-form mt-16">
                      <input
                        type="email"
                        id="paypal-id"
                        className="custom-payment-input"
                        placeholder="Enter Registered Email "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="master-pay"
                className="apply-pay-sec"
                style={{
                  display: activePayment === "#mastercard" ? "block" : "none",
                }}
              >
                <div className="container">
                  <div className="payment-method-bottom-full mt-32">
                    <h3 className="pay-txt1">Master Pay</h3>
                    <div className="payment-form mt-16">
                      <input
                        type="number"
                        id="master-id"
                        className="custom-payment-input"
                        placeholder="Enter Master ID"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="pay"
                className="amazon-sec"
                style={{
                  display: activePayment === "#pay" ? "block" : "none",
                }}
              >
                <div className="payment-method-bottom-full mt-32">
                  <div className="container">
                    <h3 className="pay-txt1">Amazon Pay</h3>
                    <div className="payment-form mt-16">
                      <input
                        type="number"
                        id="amzon-no"
                        className="custom-payment-input"
                        placeholder="Enter Registered Mobile Number  "
                      />
                      <input
                        type="number"
                        id="amzon-id"
                        className="custom-payment-input margin-top"
                        placeholder="Enter Amazon Pay UPI"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-save">
          <div className="container">
            <div className="switch-sec payment-switch">
              <div>
                <h4 className="pay-txt2">Save Information</h4>
              </div>
              <Link to="/">
                <div className="notification-option-switch">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider "></span>
                  </label>
                </div>
              </Link>
            </div>
            <div className="save-btn-payment">
              <Link to="/payment-successfull-screen">Save</Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Payment screen end --> */}
    </>
  );
};
export default PaymentScreen;
