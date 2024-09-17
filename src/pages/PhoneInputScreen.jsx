import React, { useState, useEffect } from "react";
import { auth, setUpRecaptcha } from "../firebaseConfig"; // Import Firebase config and recaptcha setup
import { signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const PhoneInputScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ReCAPTCHA should be initialized when the component mounts
  useEffect(() => {
    setUpRecaptcha(); // Call the setup function when component mounts
  }, []);

  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation for phone number length
    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier; // Get the initialized ReCAPTCHA verifier

      // Send OTP to the provided phone number
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+91${phoneNumber}`, // Adjust the format for country code as needed
        appVerifier
      );

      // Store the confirmation result for use in the verification step
      window.confirmationResult = confirmationResult;
      setLoading(false);
      navigate("/verifyscreen"); // Navigate to the OTP verification screen
    } catch (err) {
      setError("Error sending OTP. Please try again.");
      setLoading(false);
      console.error("Error in sending OTP:", err);
    }
  };

  return (
    <>
      <form onSubmit={handlePhoneNumberSubmit}>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {/* ReCAPTCHA container should exist in the component */}
        <div id="recaptcha-container"></div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </>
  );
};

export default PhoneInputScreen;
