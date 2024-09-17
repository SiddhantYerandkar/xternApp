import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/images/courses/profile-img.png";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2"; // Import the new PhoneInput package
import "react-phone-input-2/lib/style.css"; // Import the styles for PhoneInput
import Loading from "../components/Loading";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Jessica Smith");
  const [email, setEmail] = useState("jessicasmith@mail.com"); // Initialize email state
  const [mobile, setMobile] = useState("235 654 8899");

  const handleChange = (event) => {
    setEmail(event.target.value); // Update email state when input changes
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileChange = (value) => {
    setMobile(value); // Update mobile state when input changes (PhoneInput provides value directly)
  };

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

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
              <p>Profile Edit</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Profile edit screen start --> */}
      <section id="profile-edit">
        <div className="container">
          <h1 className="d-none">Profile</h1>
          <h2 className="d-none">Hidden</h2>
          <div className="profile-edit-wrap mt-32">
            <div className="profile-edit-img">
              <img src={ProfileImg} alt="profile-img" />
              <div className="image-input">
                <input type="file" accept="image/*" id="imageInput" />
                <label htmlFor="imageInput" className="image-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_202_7638"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_202_7638)">
                      <path
                        d="M5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </label>
              </div>
            </div>
            <div className="profile-edit-bottom">
              <div className="sign-up-login-form mt-32">
                <form>
                  <div className="form-details-sign-in margin-top">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_204_148"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="white" />
                        </mask>
                        <g mask="url(#mask0_204_148)">
                          <path
                            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                    <input
                      type="text"
                      value={name} // Use email state as value
                      onChange={handleNameChange} // Handle changes with handleChange function
                      className="profile-custom-input"
                    />
                  </div>
                  <div className="form-details-sign-in margin-top">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_330_7186"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="white" />
                        </mask>
                        <g mask="url(#mask0_330_7186)">
                          <path
                            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 7L12 13L21 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="value"
                      value={email} // Use email state as value
                      onChange={handleChange} // Handle changes with handleChange function
                      className="profile-custom-input"
                    />
                  </div>
                  {/* Updated PhoneInput component */}
                  <div className="mobile-form margin-top">
                    <PhoneInput
                      country={"us"} // Set default country
                      value={mobile} // Pass mobile state value
                      onChange={handleMobileChange} // Update mobile state
                      inputProps={{
                        name: "mobile",
                        required: true,
                        className: "profile-custom-input", // Apply the same custom class for styling
                      }}
                    />
                  </div>
                  <div className="form-details-sign-in margin-top">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_231_958"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="white" />
                        </mask>
                        <g mask="url(#mask0_231_958)">
                          <path
                            d="M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 12V12.01"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                    <select
                      name="persons"
                      className="profile-edit-option arrow-icon"
                    >
                      <option>Freelancer</option>
                      <option>Remote</option>
                      <option>Freelancer</option>
                      <option>Remote</option>
                      <option>Freelancer</option>
                      <option>Remote</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="save-changes-btn mt-32 ">
            <Link to="/profile">Save Changes</Link>
          </div>
        </div>
      </section>
      {/* <!-- Profile edit screen end --> */}
    </>
  );
};

export default ProfileEdit;
