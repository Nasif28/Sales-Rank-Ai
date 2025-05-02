import React, { useState } from "react";

const Review = () => {
  const testimonials = [
    {
      quote:
        "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
      name: "Michael Kaiser",
      title: "CEO of Basecamp Corp",
      avatar: "",
    },
    {
      quote:
        "Their ability to understand our brand and translate it into compelling strategies is unmatched. We've seen measurable improvements in our engagement and customer retention since partnering with them.",
      name: "Sarah Thompson",
      title: "CMO at PixelWave Solutions",
      avatar: "",
    },
    {
      quote:
        "The team delivered beyond our expectations. Their work ethic, creativity, and dedication were instrumental in launching our new product successfully across global markets.",
      name: "Liam Chen",
      title: "Global Product Manager at NexaTech",
      avatar: "",
    },
    {
      quote:
        "Their insights into data-driven marketing have given us a significant edge. We're now reaching the right audience with much higher conversion rates than before.",
      name: "Rachel Adams",
      title: "Director of Marketing at InnovateX",
      avatar: "",
    },
    {
      quote:
        "From day one, they felt like an extension of our own team. Their professionalism and agility made the whole process smooth, efficient, and highly productive.",
      name: "James Lee",
      title: "Founder at Elevate Ventures",
      avatar: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { quote, name, title, avatar } = testimonials[currentIndex];

  return (
    <section className="relative">
      <img
        src="/deco/RectangleR.svg"
        alt="Protection Icon"
        className="absolute bottom-0 left-1/2 -z-10 transform -translate-x-1/2 translate-y-1/6 w-2xl h-2xl rounded-full  blur-lg"
      />

      <div className="myContainer">
        <div className="max-w-7xl mx-auto my-28">
          <p className="text-2xl md:text-4xl font-semibold leading-15  text-button mb-10">
            “ {quote}”
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center my-18 gap-4">
            {/* Name  */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-18 h-18 bg-gray-300 rounded-full">
                <img
                  src="/user.png"
                  alt="User"
                  className="w-18 h-18 rounded-full p-3 object-cover "
                />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-button">{name}</p>
                <p className="text-md text-role">{title}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className=" flex items-center justify-center gap-8 text-gray-600">
              <button
                onClick={prevTestimonial}
                className="py-4 px-8 rounded-full border border-foundationBlue flex items-center justify-center hover:bg-gray-200 transition"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5"
                    stroke="#00245F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5L5 12L12 19"
                    stroke="#00245F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <span className="text-xl font-semibold text-foundationBlue">
                {String(currentIndex + 1).padStart(2, "0")}
                <span className="text-foundationBlue/40">
                  /{String(total).padStart(2, "0")}
                </span>
              </span>

              <button
                onClick={nextTestimonial}
                className="py-4 px-8 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-700 transition"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
