import React, { useEffect, useRef, useState } from "react";

const OtpInputGroup = ({ length = 6, onComplete }) => {
  const [otpValues, setOtpValues] = useState(Array(length).fill("")); // OTP values
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus(); // Focus the first input on component mount
  }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      // Focus the next input
      if (index < length - 1) {
        inputsRef.current[index + 1].focus();
      }
      // If last input, trigger the onComplete callback
      if (index === length - 1 && newOtpValues.join("").length === length) {
        onComplete(newOtpValues.join(""));
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const { key } = e;
    if (key === "Backspace" || key === "Delete") {
      if (otpValues[index] === "") {
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      }
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
    }
  };

  return (
    <div className="digit-group otp-section">
      {otpValues.map((_, index) => (
        <input
          key={index}
          className="form-control otp"
          type="text"
          maxLength="1"
          value={otpValues[index]}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInputGroup;
