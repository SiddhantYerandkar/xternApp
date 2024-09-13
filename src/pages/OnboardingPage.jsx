import React, { useEffect, useState } from "react";
import onBoardingImg1 from "../assets/images/onboarding-screen/onboarding-1.png";
import onBoardingImg2 from "../assets/images/onboarding-screen/onboarding-2.png";
import onBoardingImg3 from "../assets/images/onboarding-screen/onboarding-3.png";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const OnboardingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      className: "first_slide",
      imgSrc: onBoardingImg1,
      title: "We provide the best learning courses & great mentors!",
    },
    {
      id: 1,
      className: "second_slide",
      imgSrc: onBoardingImg2,
      title: "Learn anytime and anywhere easily and conveniently",
    },
    {
      id: 2,
      className: "third_slide",
      imgSrc: onBoardingImg3,
      title: "Let’s improve your skills together with Guruji right now!",
    },
  ];

  const handleNext = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handleSkip = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlideIndex = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlideIndex);
    }, 2500); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [activeSlide, slides.length]);

  return (
    <>
      <div className="site-content">
        {/* <!-- Preloader start --> */}
        <Loader />
        {/* <!-- Preloader end --> */}

        {/* <!-- Onboarding screen start --> */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide onboarding-slider"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${slide.className} ${
                  activeSlide === index ? "active" : ""
                }`}
                id={`slide${slide.id + 1}`}
              >
                <div className={`Onboarding-Screen-1 slide${slide.id + 1}`}>
                  <div className="container">
                    <div className="Onboarding-Screen-1-full">
                      {index < slides.length - 1 && (
                        <div
                          className={`skip_btn_${
                            index + 1
                          } skip_btn-onboading pt-30`}
                          onClick={handleSkip}
                        >
                          <a href="">Skip</a>
                        </div>
                      )}
                      <div className="onboarding-img mt-32">
                        <img src={slide.imgSrc} alt="onboarding-img" />
                      </div>
                      <div className="boarding-title mt-32">
                        <h1>{slide.title}</h1>
                      </div>
                      {index < slides.length - 1 ? (
                        <div
                          className={`onboarding-next-btn skip_btn_${
                            index + 1
                          }`}
                          onClick={handleNext}
                        >
                          <Link to="">Next</Link>
                        </div>
                      ) : (
                        <div className="onboarding-next-btn skip_btn_">
                          <Link to="/letyouscreen">Get Started</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-indicators custom-slider-btn">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                id={`slide${slide.id}`}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={`custom-slider-dots ${
                  activeSlide === index ? "active" : ""
                }`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
        </div>
        {/* <!-- Onboarding Screen End --> */}
      </div>
    </>
  );
};
export default OnboardingPage;
