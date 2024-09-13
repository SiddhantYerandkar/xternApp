import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="nested-accordion">
      <h3
        className={`faq-txt1 mt-16 ${isOpen ? "selected" : ""}`}
        onClick={onClick}
      >
        {title}
      </h3>
      {isOpen && <div className="comment mt-12">{content}</div>}
    </div>
  );
};

const FaqScreen = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  //const [loading, setLoading] = useState(true);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const handleTopClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in the history stack
  };

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500); // Simulate loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  const accordionData = [
    {
      sectionTitle: "Refund Status: Common Questions",
      items: [
        {
          title: "How can I submit a refund request?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "When will I receive my refund?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Why was my refund request denied?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "What is a “credit refund”?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "Payment Methods on Guruji",
      items: [
        {
          title: "How can I submit a refund request?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "When will I receive my refund?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Why was my refund request denied?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "What is a “credit refund”?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "How to Find Your Missing Course",
      items: [
        {
          title: "How can I submit a refund request?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "When will I receive my refund?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Why was my refund request denied?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "What is a “credit refund”?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "How to Refund a Course",
      items: [
        {
          title: "How can I submit a refund request?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "When will I receive my refund?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Why was my refund request denied?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "What is a “credit refund”?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
    {
      sectionTitle: "Downloading Course Resources",
      items: [
        {
          title: "How can I submit a refund request?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "When will I receive my refund?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "Why was my refund request denied?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
        {
          title: "What is a “credit refund”?",
          content:
            "Refund requests are submitted immediately to your payment processor or financial institution after Udemy has received and processed your request. It may take 5 to 10 business days or longer to post the funds in your account, depending on your financial institution or location.",
        },
      ],
    },
  ];

  return (
    <>
      {/* <!-- Header start --> */}
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
              <p>FAQs</p>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      {/* <!-- Header end --> */}
      {/* <!--Faq screen content start --> */}
      <section id="faq-sec">
        <div className="container">
          <div className="faq-full-sec mt-32">
            <h1 className="d-none">Faq Page</h1>
            <h2 className="d-none">Hidden</h2>
            {accordionData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`nested-accordion mt-24 ${
                  openIndex === `top-${sectionIndex}` ? "selected" : ""
                }`}
              >
                <h3
                  className={`boder-top ${
                    openIndex === `top-${sectionIndex}` ? "selected" : ""
                  }`}
                  onClick={() => handleTopClick(`top-${sectionIndex}`)}
                >
                  {section.sectionTitle}
                </h3>
                <div className="comment">
                  {openIndex === `top-${sectionIndex}` &&
                    section.items.map((item, index) => (
                      <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === `${sectionIndex}-${index}`}
                        onClick={() => handleClick(`${sectionIndex}-${index}`)}
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--Faq screen content end --> */}
    </>
  );
};
export default FaqScreen;
