import React from "react";
import NotFoundImg from "../assets/images/result-found/not-found-img.png";
const SearchNoResultScreen = () => {
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header">
        <div class="container">
          <div class="top-header-full">
            <div class="back-btn">
              <a href="javascript:history.go(-1)">
                <svg
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div class="header-title">
              <p>Search</p>
            </div>
          </div>
        </div>
        <div class="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Result not found screen content start --> */}
      <section id="result-found">
        <div class="container">
          <div class="result-found-top">
            <div class="serachbar-homepage2 mt-24">
              <div class="input-group search-page-searchbar ">
                <span class="input-group-text search-iconn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9395 1.9313C5.98074 1.9313 1.94141 5.97063 1.94141 10.9294C1.94141 15.8881 5.98074 19.9353 10.9395 19.9353C13.0575 19.9353 15.0054 19.193 16.5449 17.9606L20.293 21.7067C20.4821 21.888 20.7347 21.988 20.9967 21.9854C21.2587 21.9827 21.5093 21.8775 21.6947 21.6924C21.8801 21.5073 21.9856 21.2569 21.9886 20.9949C21.9917 20.7329 21.892 20.4802 21.7109 20.2908L17.9629 16.5427C19.1963 15.0008 19.9395 13.0498 19.9395 10.9294C19.9395 5.97063 15.8982 1.9313 10.9395 1.9313ZM10.9395 3.93134C14.8173 3.93134 17.9375 7.05153 17.9375 10.9294C17.9375 14.8072 14.8173 17.9352 10.9395 17.9352C7.06162 17.9352 3.94141 14.8072 3.94141 10.9294C3.94141 7.05153 7.06162 3.93134 10.9395 3.93134Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  value="3D Desigm"
                  class="form-control search-text-result"
                  id="search-input"
                />
              </div>
              <button class="close-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_210_244"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="white" />
                  </mask>
                  <g mask="url(#mask0_210_244)">
                    <path
                      d="M14 8C15.1046 8 16 7.10457 16 6C16 4.89543 15.1046 4 14 4C12.8954 4 12 4.89543 12 6C12 7.10457 12.8954 8 14 8Z"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 6H12"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 6H20"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 12H6"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 12H20"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 18H15"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 18H20"
                      stroke="#F97316"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div class="result-found-middle mt-32">
            <div class="result-found-middle-wrap">
              <div class="result-txt">
                <span class="result-txt1">
                  Results for <span class="result-txt2">“3D Design”</span>
                </span>
                <span class="result-txt3">0 Founds</span>
              </div>
            </div>
          </div>
          <div class="noresult-bottom-sec mt-16">
            <div class="noresult-top">
              <img src={NotFoundImg} alt="not found img" />
            </div>
            <div class="noresult-bottom mt-24">
              <h1>Not Found</h1>
              <p class="mt-16">
                Sorry, the keyword you entered cannot be found, please check
                again or search with another keyword.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Result not found screen content end --> */}
    </>
  );
};
export default SearchNoResultScreen;
