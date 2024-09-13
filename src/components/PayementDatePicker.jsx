import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [showLayer, setShowLayer] = useState(false);
  const datePickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowLayer(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [datePickerRef]);

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowLayer(false);
  };

  const handleFocus = () => {
    setShowLayer(true);
  };

  return (
    <div className="date-picker-sec mt-16">
      <div>
        <div className="input-daterange input-group" id="flight-datepicker">
          <div className="form-item">
            <ul className="input date-picker-input">
              <li className="input__list" ref={datePickerRef}>
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  dateFormat="MM/yy"
                  showMonthYearPicker
                  placeholderText="MM/YY"
                  onFocus={handleFocus}
                  className="input__item custom-payment-input"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <input
          type="number"
          id="visa-cvc"
          className="custom-payment-input"
          placeholder="CVV"
        />
      </div>
      {showLayer && <div className="datepicker-layer show" />}
    </div>
  );
};

export default PaymentDatePicker;
