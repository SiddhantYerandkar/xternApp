import React from "react";

const OtpInputGroup = ({ onChange }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Ensure the input only accepts numbers and limits the length to 6 characters
    if (value.length <= 6 && /^\d*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <div className="otp-input-group">
      <input
        type="text"
        maxLength="6"
        placeholder="Enter OTP"
        onChange={handleInputChange}
        className="otp-input"
      />
    </div>
  );
};

export default OtpInputGroup;
