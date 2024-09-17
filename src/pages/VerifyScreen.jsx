import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, setUpRecaptcha } from "../firebaseConfig";
import { signInWithPhoneNumber } from "firebase/auth";
import OtpInputGroup from "../components/OtpGroup"; // Custom OTP component
import PhoneInput from "react-phone-input-2"; // Phone input with country selector
import "react-phone-input-2/lib/style.css";
import { CgSpinner } from "react-icons/cg"; // Spinner for loading
import { toast, Toaster } from "react-hot-toast";

const VerifyScreen = () => {
  const [seconds, setSeconds] = useState(50);
  const [otp, setOtp] = useState(""); // OTP state
  const [ph, setPh] = useState(""); // Phone number state
  const [loading, setLoading] = useState(false); // Loading state
  const [showOTP, setShowOTP] = useState(false); // Show OTP input
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ReCAPTCHA should be initialized when the component mounts
  useEffect(() => {
    setUpRecaptcha(); // Call the setup function when the component mounts
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);
  const disposeRecaptcha = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear(); // Dispose of the ReCAPTCHA verifier instance
      delete window.recaptchaVerifier; // Remove the reference
    }
  };
  // Avoid clearing or resetting recaptcha if it hasn't been initialized or is destroyed
  const resetRecaptcha = () => {
    if (window.recaptchaVerifier && !window.recaptchaVerifier.destroyed) {
      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  };

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!ph || ph.length < 10) {
      setError("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier; // Only set this once, when initialized
      const formatPh = "+" + ph; // Phone number with country code

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formatPh,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sent successfully!");
    } catch (err) {
      resetRecaptcha(); // Only reset if there's an issue
      setError("Error sending OTP. Please try again.");
      setLoading(false);
      console.error("Error in sending OTP:", err);
    }
  };

  const handleVerifyOtp = async (otp) => {
    setLoading(true);
    setError("");

    try {
      const confirmationResult = window.confirmationResult;
      const result = await confirmationResult.confirm(otp); // Verify OTP
      disposeRecaptcha();

      console.log("User signed in successfully:", result.user);
      setLoading(false);
      navigate("/homescreen"); // Navigate after successful verification
    } catch (err) {
      setError("Invalid OTP. Please try again.");
      setLoading(false);
      console.error("Error in verifying OTP:", err);
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <>
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
              <p>Verify Phone Number</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>

      <section id="verify-screen">
        <div className="container">
          <div className="verify-screen-wrap">
            <div className="forget-password-screen-top mt-32">
              {showOTP ? (
                <>
                  <p className="title-sec">Enter your OTP</p>
                  <form
                    className="mt-32"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleVerifyOtp(otp);
                    }}
                  >
                    <OtpInputGroup
                      length={6}
                      onAutoSubmit={() => handleVerifyOtp(otp)}
                      onComplete={(completedOtp) => {
                        setOtp(completedOtp); // Store OTP
                      }}
                    />
                    <div className="verify-btn mt-32">
                      <button type="submit" className="btn" disabled={loading}>
                        {loading ? (
                          <span>
                            <CgSpinner size={20} className="animate-spin" />{" "}
                            Verifying..
                          </span>
                        ) : (
                          "Verify"
                        )}
                      </button>
                    </div>
                  </form>
                  {error && (
                    <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                  )}
                </>
              ) : (
                <>
                  <p className="title-sec">Please enter your phone number</p>
                  <form className="mt-32" onSubmit={handlePhoneNumberSubmit}>
                    <PhoneInput
                      country={"in"}
                      value={ph}
                      onChange={setPh}
                      inputStyle={{
                        width: "100%",
                        padding: "20px 25px",
                        paddingLeft: "60px",
                        borderRadius: "12px",
                        border: error ? "2px solid red" : "2px solid #ccc",
                        outline: "none",
                        fontSize: "16px",
                        transition: "all 0.3s ease-in-out",
                        boxShadow: error
                          ? "0 0 8px rgba(255, 0, 0, 0.2)"
                          : "0 0 5px rgba(0, 0, 0, 0.1)",
                        backgroundColor: error ? "#ffeeee" : "white",
                      }}
                      containerStyle={{
                        width: "100%",
                        maxWidth: "450px",
                        margin: "0 auto",
                      }}
                    />

                    {error && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "14px",
                          marginTop: "5px",
                          paddingLeft: "65px",
                        }}
                      >
                        {error}
                      </p>
                    )}
                    <div id="recaptcha-container"></div>
                    <div className="verify-btn mt-32">
                      <button type="submit" className="btn" disabled={loading}>
                        {loading ? (
                          <span>
                            <CgSpinner size={20} className="animate-spin" />{" "}
                            Sending...
                          </span>
                        ) : (
                          "Send OTP"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
              {showOTP ? (
                <>
                  <div className="otp-resend mt-16">
                    <span className="resend-txt1">Not yet received?</span>
                    <span className="resend-txt2">
                      <Link to="/verifyscreen">Resend OTP</Link>
                    </span>
                  </div>
                  <div className="text-center counter-sec">
                    <div className="otp-timer timer">
                      <div className="border"></div>
                      <div className="d-flex timer-counter-content">
                        <div className="time-left" id="counter">
                          {seconds > 0 ? seconds : ""}
                        </div>
                        <div className="timer-text">Sec</div>
                      </div>
                      <p className="otp-left mb-0">left</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="otp-resend mt-16">
                  <span className="resend-txt1">Not yet received?</span>
                  <span className="resend-txt2">
                    <Link to="/verifyscreen">Resend OTP</Link>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <Toaster position="bottom-left" reverseOrder={false} />
      </section>
    </>
  );
};

export default VerifyScreen;
