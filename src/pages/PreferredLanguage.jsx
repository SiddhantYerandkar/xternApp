import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const PreferredLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-header">
        <div className="container">
          <div className="skip-section">
            <div className="skip-btn">
              <Link to="/primarygoalscreen">Skip</Link>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Preferred language screen start --> */}
      <section id="select-language-page">
        <div className="container">
          <h1 className="hey-txt">Hey, Jesica</h1>
          <p className="select-lang">
            Please select your preferred language to facilitate communication.
          </p>
          <form className="select-lang-sec mt-32">
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang1"
                name="select-language"
                value="English"
                checked={selectedLanguage === "English"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang" htmlFor="select-lang1">
                English
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang2"
                name="select-language"
                value="Chinese"
                checked={selectedLanguage === "Chinese"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang2">
                Chinese
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang3"
                name="select-language"
                value="Hindi"
                checked={selectedLanguage === "Hindi"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang3">
                Hindi
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang4"
                name="select-language"
                value="Portugese"
                checked={selectedLanguage === "Portugese"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang4">
                Portuguese
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang5"
                name="select-language"
                value="Spanish"
                checked={selectedLanguage === "Spanish"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang5">
                Spanish
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang6"
                name="select-language"
                value="Arabic"
                checked={selectedLanguage === "Arabic"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang6">
                Arabic
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang7"
                name="select-language"
                value="Bulgarian"
                checked={selectedLanguage === "Bulgarian"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang7">
                Bulgarian
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang8"
                name="select-language"
                value="French"
                checked={selectedLanguage === "French"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang8">
                French
              </label>
            </div>
            <div className="lang-sec">
              <input
                type="radio"
                id="select-lang9"
                name="select-language"
                value="Russian"
                checked={selectedLanguage === "Russian"}
                onChange={handleLanguageChange}
              />
              <label className="custom-radio-sel-lang " htmlFor="select-lang9">
                Russian
              </label>
            </div>
          </form>
          <div className="next-btn mt-32">
            <Link to="/primarygoalscreen">Select</Link>
          </div>
        </div>
      </section>
      {/* <!-- Preferred language screen end --> */}
    </>
  );
};
export default PreferredLanguage;
