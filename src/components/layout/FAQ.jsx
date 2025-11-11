
console.log("FAQ component loaded");

import React, { useEffect, useState } from "react";
import "./FAQ.css";
import { getFaqs } from "../../services/api";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFaqs();
        setFaqs(data);
      } catch (err) {
        setError("Kunde inte ladda FAQ just nu. Försök igen senare.");
      }
    };
    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
       <section
      className="faq-section py-5"
      aria-label="Vanliga frågor"
      role="region"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {error && <p className="faq-error text-center">{error}</p>}

            <div className="faq-list" role="list">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={faq.id || index}
                    className={`faq-item ${isOpen ? "active" : ""}`}
                    role="listitem"
                  >
                    <button
                      id={questionId}
                      className="faq-question"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggleAccordion(index)}
                    >
                      {faq.title}
                      <span
                        className="faq-icon"
                        aria-hidden="true"
                      >
                        {isOpen ? "▾" : "▸"}
                      </span>
                    </button>

                    <div
                      id={answerId}
                      className="faq-answer-wrapper"
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                    >
                      <p className="faq-answer">{faq.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FAQ };
