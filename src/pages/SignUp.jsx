import React, { useState } from "react";
import PhoneInput from "react-phone-input-2"; // Updated import for PhoneInput from react-phone-input-2
import "react-phone-input-2/lib/style.css"; // Import the required CSS for PhoneInput
import { Link, useNavigate } from "react-router-dom";
import Eyeicon from "../assets/svg/eye-fill.svg"; // Importing Eyeicon
import EyeiconFill from "../assets/svg/eye-off-fill.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState(""); // Added state for PhoneInput
  const [error, setError] = useState(""); // State to handle errors
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page in the history stack
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordVisible = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userData = {
        email: user.email,
        uid: user.uid, // Firebase user ID
        phone_number: `+${phone}`, // Phone number from state
        created_time: new Date().toISOString(), // Current timestamp
        display_name: document.getElementById("name").value
      };

      await setDoc(doc(db, "users", user.uid), userData);

      navigate("/signin"); // Redirect to sign-in page after successful signup
    } catch (error) {
      // Check for specific error codes
      if (error.code === 'auth/email-already-in-use') {
        setError("The email address is already in use by another account.");
      } else if (error.code === 'auth/invalid-email') {
        setError("The email address is not valid.");
      } else if (error.code === 'auth/weak-password') {
        setError("The password is too weak.");
      } else {
        setError("An unexpected error occurred: " + error.message);
      }
    }
  };

  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header">
        <div className="container">
          <div className="let-yoy-page-section-full pt-30">
            <div className="back-btn-page">
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
                  <rect width="24" height="24" fill="white" />
                </mask>
                <g mask="url(#mask0_330_7385)">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Sign up screen start --> */}
      <section id="sign-up-screen-content">
        <div className="container">
          <div className="sign-in-login mt-24">
            <h1 className="login-txt">Create Your Account</h1>
          </div>
          <div className="sign-up-login-form mt-24">
            <form onSubmit={handleSignUp}>
              <div className="form-details-sign-in">
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
                  id="name"
                  placeholder="Your Name"
                  className="sign-in-custom-input"
                />
              </div>
              <div className="form-details-sign-in mt-12">
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
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="sign-in-custom-input"
                />
              </div>
              {/* Replaced IntlTelInput with PhoneInput */}
              <div className="mobile-form mt-12">
                <PhoneInput
                  country={"in"} // Set default country
                  value={phone} // Pass phone state value
                  onChange={setPhone} // Update phone state on change
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                    className: "sign-in-custom-input", // Custom class for styling
                  }}
                />
              </div>
              <div className="form-details-sign-in mt-12">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_330_7136)">
                      <path
                        d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="sign-in-custom-input"
                />
                <img
                  src={isPasswordVisible ? Eyeicon : EyeiconFill}
                  alt="Password Visibility Toggle"
                  className="password-toggle-icon"
                  id="eye"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="form-details-sign-in mt-12">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_330_7136)">
                      <path
                        d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password1"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="sign-in-custom-input"
                />
                <img
                  src={showPassword ? Eyeicon : EyeiconFill}
                  alt="Password Visibility Toggle"
                  className="password-toggle-icon"
                  id="eye"
                  onClick={togglePasswordVisible}
                />
              </div>
              <div className="remember-section">
                <div className="footer-checkbox-sec">
                  <input
                    className="footer-checkbox-input"
                    id="footer-checkbox"
                    type="checkbox"
                  />
                  <label htmlFor="footer-checkbox" className="footer-chec-txt">
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="sign-up-btn mt-32 ">
                <button type="submit">Sign Up</button>
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="or-section mt-32">
                <p>or continue with</p>
              </div>
              <div className="sign-in-social-media">
                {/* Social media icons go here */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
