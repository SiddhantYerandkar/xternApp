import React, { useEffect, useState } from "react";
import OngoingImg2 from "../assets/images/courses/ongoing-2.png";
import OrangeIcon from "../assets/svg/orange-icon.svg";
import TimeIcon from "../assets/images/checkout-screen/time-icon.svg";
import CertificateImg from "../assets/images/courses/Certificate.png";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const ProgressCircle = ({ percent, colorClass }) => {
  const [counter, setCounter] = useState(0);
  const [transformStyle, setTransformStyle] = useState({});
  const [percentMore, setPercentMore] = useState(false);

  useEffect(() => {
    const dataDeg = percent * 3.6;
    setTransformStyle({ transform: `rotate(${parseInt(dataDeg + 180)}deg)` });

    const timer = setTimeout(() => {
      if (percent >= 51) {
        setTransformStyle({ transform: "rotate(360deg)" });
        setTimeout(() => {
          setPercentMore(true);
          setTransformStyle({
            transform: `rotate(${parseInt(dataDeg + 180)}deg)`,
          });
        }, 1000);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [percent]);

  useEffect(() => {
    let start = 0;
    const end = percent;
    if (start === end) return;

    let duration = 2000;
    let stepTime = Math.abs(Math.floor(duration / (end - start)));
    let obj = { current: start };
    const step = () => {
      obj.current++;
      setCounter(obj.current);
      if (obj.current < end) {
        setTimeout(step, stepTime);
      }
    };
    step();
  }, [percent]);

  return (
    <div
      className={`circle_percent ${
        percentMore ? "percent_more" : ""
      } ${colorClass}`}
      data-percent={percent}
    >
      <div className="circle_inner">
        <div className={`round_per ${colorClass}`} style={transformStyle}></div>
      </div>
      <div className="circle_inbox">
        <span className="percent_text">{counter}%</span>
      </div>
    </div>
  );
};
const SingleCourseComplete = () => {
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
              <p>My Course</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Single Course start --> */}
      <section id="single-courses-complete">
        <div className="container">
          <div className="single-courses-complete-wrap">
            <div className="single-courses-complete-top mt-32">
              <div className="ongoing-section-details-wrap">
                <div className="ongoing-first">
                  <img
                    src={OngoingImg2}
                    alt="course-img"
                    className="img-fluid"
                  />
                </div>
                <div className="ongoing-second">
                  <div className="ongoing-second-wrap">
                    <div className="ongoing-details">
                      <h1 className="d-none">Courses</h1>
                      <h2 className="ongoing-txt1">
                        Responsive Design with Grids. A Guide...
                      </h2>
                      <div className="mt-16">
                        <span className="ongoing-img">
                          <img src={TimeIcon} alt="time-icon" />
                        </span>
                        <span className="ongoing-txt2">1h 30m</span>
                      </div>
                    </div>
                    <div className="ongoing-progressbar">
                      <ProgressCircle
                        percent={100}
                        colorClass="black-progressbar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-courses-complete-bottom">
              <div className="ongoing-section-wrap mt-32">
                <ul
                  className="nav nav-pills ongoing-courses-tab"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-lesson-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-lesson"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Lessons
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-certificate-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-certificate"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Certificate
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-32" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-lesson"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div className="lesson-tabbar">
                      <div className="lesson-tabbar-content">
                        <div className="lesson-tabbar-title">
                          <span className="tab-lesson1">1 - Introduction</span>
                          <span className="tab-lesson2">5 min</span>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">Promotion</div>
                          <div className="play-btn-time">01:53</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">Introduction</div>
                          <div className="play-btn-time">01:25</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">Course Material</div>
                          <div className="play-btn-time">01:49</div>
                        </div>
                      </div>
                      <div className="lesson-tabbar-content mt-24">
                        <div className="lesson-tabbar-title">
                          <span className="tab-lesson1">
                            2 - How Grids Work
                          </span>
                          <span className="tab-lesson2">21 min</span>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Columns Gutter & Margin
                          </div>
                          <div className="play-btn-time">02:34</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Adding Elements to the Grid
                          </div>
                          <div className="play-btn-time">02:35</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Avoid Positioning Mistakes
                          </div>
                          <div className="play-btn-time">02:46</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">A little something</div>
                          <div className="play-btn-time">00:37</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Making the Grid Responsive
                          </div>
                          <div className="play-btn-time">03:05</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Which Breakpoints Should I Use?
                          </div>
                          <div className="play-btn-time">03:13</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Why Those Breakpoints?
                          </div>
                          <div className="play-btn-time">01:42</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Responsive vs Adaptive Grids
                          </div>
                          <div className="play-btn-time">04:16</div>
                        </div>
                      </div>
                      <div className="lesson-tabbar-content mt-24">
                        <div className="lesson-tabbar-title">
                          <span className="tab-lesson1">
                            3 - Grids in Figma
                          </span>
                          <span className="tab-lesson2">26 min</span>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Setting Up Grids in Figma
                          </div>
                          <div className="play-btn-time">02:34</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Responsive Design Setup in Figma
                          </div>
                          <div className="play-btn-time">02:35</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Avoid Content to Adaptive Grids
                          </div>
                          <div className="play-btn-time">02:46</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Avoid Content to Responsive Grids
                          </div>
                          <div className="play-btn-time">00:37</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Need One Design per Breakpoint
                          </div>
                          <div className="play-btn-time">03:05</div>
                        </div>
                      </div>
                      <div className="lesson-tabbar-content mt-24">
                        <div className="lesson-tabbar-title">
                          <span className="tab-lesson1">4 - CSS Grids</span>
                          <span className="tab-lesson2">26 min</span>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            CSS Grid Course Material
                          </div>
                          <div className="play-btn-time">01:53</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Introduction to CSS Grid
                          </div>
                          <div className="play-btn-time">01:18</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">Setting up a Grid</div>
                          <div className="play-btn-time">02:08</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Fluid Design with Fraction Units
                          </div>
                          <div className="play-btn-time">03:37</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Advanced Distribution Grid
                          </div>
                          <div className="play-btn-time">03:00</div>
                        </div>
                        <div className="tabbar-bottom">
                          <div className="lesson-play-btn">
                            <div>
                              <img src={OrangeIcon} alt="play-icon" />
                            </div>
                          </div>
                          <div className="play-btn-txt">
                            Responsive CSS Grid
                          </div>
                          <div className="play-btn-time">03:42</div>
                        </div>
                      </div>
                    </div>
                    <div className="start-course-btn">
                      <Link to="/single-course-description">
                        Start Course Again
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-certificate"
                    role="tabpanel"
                    tabIndex="0"
                  >
                    <div className="Certificate-tabbar">
                      <img
                        src={CertificateImg}
                        alt="Certificate-img"
                        className="w-100"
                      />
                    </div>
                    <div className="download-btn mt-32">
                      <Link to="/complete-course-rating">Download</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Single Course end --> */}
    </>
  );
};
export default SingleCourseComplete;
