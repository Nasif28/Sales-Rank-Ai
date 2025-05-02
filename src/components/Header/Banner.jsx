import React from "react";

const Banner = () => {
  return (
    <section className="my-20 grid grid-cols-1 md:grid-cols-2 ">
      {/* Left Content */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-medium leading-tight text-black">
          Your AI-
          <br />
          Powered
          <br />
          Sales Coach
        </h1>

        <div className="flex items-center gap-16 mt-6">
          <div className="">
            <img
              src="/images/miniRobo.svg"
              alt="Protection Icon"
              className="w-51 h-49 rounded-2xl"
            />
          </div>
          <div>
            <p className="text-[#05131D]/70 text-base md:text-lg max-w-[330px] leading-8">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex flex-wrap gap-14 mt-20">
          <div className="flex items-center gap-8 ">
            <div
              className="bg-white p-4 rounded-2xl "
              style={{
                boxShadow: "15.575px 16.688px 20.47px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <img
                src="/SVG/backup_table.svg"
                alt="Protection Icon"
                className="w-14 h-14"
              />
            </div>
            <div className="gap-1 flex flex-col">
              <p className="text-number text-4xl font-semibold">2000+</p>
              <p className="text-lg text-paragraph/70">Your protection</p>
            </div>
          </div>
          <div className="flex items-center gap-8 ">
            <div
              className="bg-white p-4 rounded-2xl "
              style={{
                boxShadow: "15.575px 16.688px 20.47px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <img
                src="/SVG/atr.svg"
                alt="Protection Icon"
                className="w-14 h-14"
              />
            </div>
            <div className="gap-1 flex flex-col">
              <p className="text-number text-4xl font-semibold">7001+</p>
              <p className="text-lg text-paragraph/70">Provide tailored</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex justify-end items-start">
        <div className="overflow-hidden  w-[583px] h-auto ">
          <img
            src="/images/hero.svg"
            alt="AI Robot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating card */}
        <div
          className="absolute bottom-[-3rem] left-1/2 transform -translate-x-11/12 bg-white py-12 px-6 rounded-3xl"
          style={{
            boxShadow: "15.575px 16.688px 20.47px 0px rgba(0, 0, 0, 0.07)",
          }}
        >
          <div className="flex justify-between text-5xl font-semibold text-foundationBlue mb-5">
            <span>721+</span>
            <span>1000+</span>
          </div>

          <p className="text-paragraph font-semibold mb-10 text-2xl">
            Growth is our priority.
          </p>
          <p className="text-md text-paragraph/70 w-sm pr-16">
            As a full-service business agency, we specialize in helping
            companies of all sizes optimize their operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
