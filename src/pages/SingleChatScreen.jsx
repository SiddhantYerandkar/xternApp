import React, { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import CommentIcon from "../assets/images/single-courses/comment-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const SingleChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  const FakeMessages = [
    "Hey",
    "GM 🔆, How was your UI/UX Design Course like? 😂",
    "How are you?",
    "Not too bad, thanks",
    "What do you do?",
    "That's awesome",
    "I think you're a nice person",
    "Why do you think that?",
    "Can you explain?",
    "Anyway I've gotta go now",
    "It was a pleasure chat with you",
    "Bye",
    ":)",
  ];

  const [fakeMessageIndex, setFakeMessageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      addFakeMessage();
    }, 1000);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMessageSubmit = () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      text: inputValue,
      sender: "user",
      timestamp: getCurrentTime(),
    };

    const botResponse = {
      text: FakeMessages[fakeMessageIndex],
      sender: "bot",
      timestamp: getCurrentTime(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");
    scrollToBottom();

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      setFakeMessageIndex((prevIndex) => prevIndex + 1);
      scrollToBottom();
    }, 2000);
  };

  const addFakeMessage = () => {
    if (fakeMessageIndex < FakeMessages.length) {
      const newMessage = {
        text: FakeMessages[fakeMessageIndex],
        sender: "bot",
        timestamp: getCurrentTime(),
      };

      setMessages([...messages, newMessage]);
      setFakeMessageIndex(fakeMessageIndex + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleMessageSubmit();
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      {/* <!-- Header start --> */}
      <header id="top-navbar" className="top-navbar">
        <div className="container">
          <div className="top-navbar_full">
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
            <div className="top-navbar-title">
              <p>Jenny Wilona</p>
            </div>
            <div className="skip-btn-goal">
              <Link to="/chat-screen">
                <img src={CommentIcon} alt="comment-icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!-- Single chat content start--> */}
      <section id="single-chat-screen">
        <div className="container">
          <div className="amigo-chat-AI-main">
            <h1 className="d-none">Chat</h1>
            <h2 className="d-none">Hidden</h2>
            <div className="chat">
              <Scrollbars className="messages" autohide>
                <div className="messages-content">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${
                        msg.sender === "user" ? "message-personal" : "new"
                      }`}
                    >
                      {msg.text}
                      <span className="timestamp">{msg.timestamp}</span>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </Scrollbars>
              <div className="chat-input">
                <button
                  type="submit"
                  className="message-submit messages-plus-icon"
                  onClick={handleMessageSubmit}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_231_828"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_231_828)">
                      <path
                        d="M12 5V19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
                <div className="message-box">
                  <textarea
                    className="message-input"
                    placeholder="Write here......"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  ></textarea>
                  <svg
                    className="specker"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_3_3619"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_3_3619)">
                      <path
                        className="specker-file"
                        d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V5Z"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="specker-file"
                        d="M5 10C5 11.8565 5.7375 13.637 7.05025 14.9497C8.36301 16.2625 10.1435 17 12 17C13.8565 17 15.637 16.2625 16.9497 14.9497C18.2625 13.637 19 11.8565 19 10"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="specker-file"
                        d="M8 21H16"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="specker-file"
                        d="M12 17V21"
                        stroke="#555555"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <button
                  type="submit"
                  className="message-submit"
                  onClick={handleMessageSubmit}
                >
                  <svg
                    className="send-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_3_3689"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="white" />
                    </mask>
                    <g mask="url(#mask0_3_3689)">
                      <path
                        className="icon-send-message"
                        d="M10 14L21 3"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        className="icon-send-message"
                        d="M21.0006 3L14.5006 21C14.4567 21.0957 14.3862 21.1769 14.2976 21.2338C14.209 21.2906 14.1059 21.3209 14.0006 21.3209C13.8952 21.3209 13.7921 21.2906 13.7035 21.2338C13.6149 21.1769 13.5444 21.0957 13.5006 21L10.0006 14L3.00056 10.5C2.90482 10.4561 2.82369 10.3857 2.7668 10.2971C2.70992 10.2084 2.67969 10.1053 2.67969 10C2.67969 9.89468 2.70992 9.79158 2.7668 9.70295C2.82369 9.61431 2.90482 9.54387 3.00056 9.5L21.0006 3Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Single chat content end--> */}
    </>
  );
};
export default SingleChatScreen;
