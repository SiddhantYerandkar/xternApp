import React, { useEffect, useState } from "react";

const DarkLightmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mode", "light");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="icon-name ">
        <p id="modeText">{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
      </div>
      <div className="notification-option-switch">
        <label className="switch">
          <span className="mode" title="Toggle Mode">
            <input
              id="toggle"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggle}
            />
            <span className="slider theme-change"></span>
          </span>
        </label>
        <div className="slide-block slide-out"></div>
      </div>
    </>
  );
};
export default DarkLightmode;
