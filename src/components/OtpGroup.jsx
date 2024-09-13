import React, { useEffect, useRef } from "react";

const OtpInputGroup = ({ length = 6, onAutoSubmit = () => {} }) => {
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleKeyUp = (e, index) => {
    const { keyCode, target } = e;
    const value = target.value;
    if (keyCode === 8 || keyCode === 37) {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (/^\d$/.test(value)) {
      if (index < length - 1) {
        inputsRef.current[index + 1].focus();
      } else {
        onAutoSubmit();
      }
    } else {
      target.value = "";
    }
  };

  return (
    <div
      className="digit-group otp-section"
      data-group-name="digits"
      data-autosubmit="false"
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          className="form-control otp"
          type="text"
          maxLength="1"
          ref={(el) => (inputsRef.current[index] = el)}
          onKeyUp={(e) => handleKeyUp(e, index)}
          data-next={`digit-${index + 2}`}
          data-previous={`digit-${index}`}
        />
      ))}
    </div>
  );
};

export default OtpInputGroup;
