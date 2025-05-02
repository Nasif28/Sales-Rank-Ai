import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why should I choose Humestic?",
      answer:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      question: "I like your works, how do we start a project?",
      answer:
        "We usually start with a quick discovery call to understand your goals, timelines, and budget. From there, we outline a roadmap and begin the creative process.",
    },
    {
      question: "What info is required to get a quotation?",
      answer:
        "We’d need a general idea of your project's scope, desired features, deadlines, and your preferred budget range to provide an accurate estimate.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="myContainer pt-40">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row items-start mb-20 gap-6 md:gap-26">
          <p className="text-2xl font-questrial text-foundationBlue">
            Frequently asked <br /> questions
          </p>

          <h2 className="text-3xl md:text-5xl font-questrial">
            Constant collaboration is how we roll. <br />
            Let’s see if we are a good fit.
          </h2>
        </div>

        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-faq/30 pb-10">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-10">
                  <span className="text-3xl font-questrial font-semibold text-foundationYellow800">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-3 pr-10 ">
                    <span className="text-4xl font-questrial  text-black ">
                      {faq.question}
                    </span>
                    {openIndex === index && (
                      <p className="text-md font-inter font-light leading-6  text-faq">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>

                <span className="text-4xl text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
