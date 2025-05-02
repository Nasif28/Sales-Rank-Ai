import React from "react";

const Courses = () => {
  return (
    <section className="myContainer">
      <div className="flex md:flex-row  flex-col justify-between items-end pt-16 mb-12">
        <div>
          <h2 className="text-5xl font-semibold text-title leading-18">
            Our Courses
          </h2>
          <p className="text-subTitle mt-2 max-w-5xl text-lg">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <button className="bg-buttonBG  text-white px-6 py-4 rounded-lg ">
          View All
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-7 pb-28">
        {/* Course Card 1 */}
        <div className="bg-cardBG p-12 rounded-2xl border border-[#F1F1F3]">
          <img
            src="/images/C1.png"
            alt="Course 1"
            className="rounded-lg mb-4 w-full h-[380ox] object-cover"
          />
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-lg text-cardTag my-7">
            <div className="flex gap-3 ">
              <span className="bg-white px-4 py-2 rounded-lg">4 Weeks</span>
              <span className="bg-white px-4 py-2 rounded-lg">Beginner</span>
            </div>
            <span className="text-title text-xl">By John Smith</span>
          </div>

          <h3 className="text-2xl font-semibold text-title inline-block mb-3.5">
            Web Design Fundamentals
          </h3>
          <p className="text-lg text-cardTag mb-7">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <button className=" bg-buttonBG  text-white w-full py-4 rounded-lg text-lg">
            Get it Now
          </button>
        </div>

        {/* Course Card 2 */}
        <div className="bg-cardBG p-12 rounded-2xl border border-[#F1F1F3]">
          <img
            src="/images/C2.png"
            alt="Course 1"
            className="rounded-lg mb-4 w-full h-[380ox] object-cover"
          />
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-lg text-cardTag my-7">
            <div className="flex gap-3 ">
              <span className="bg-white px-4 py-2 rounded-lg">4 Weeks</span>
              <span className="bg-white px-4 py-2 rounded-lg">Beginner</span>
            </div>
            <span className="text-title text-xl">By John Smith</span>
          </div>

          <h3 className="text-2xl font-semibold text-title inline-block mb-3.5">
            Web Design Fundamentals
          </h3>
          <p className="text-lg text-cardTag mb-7">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <button className=" bg-buttonBG  text-white w-full py-4 rounded-lg text-lg">
            Get it Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
