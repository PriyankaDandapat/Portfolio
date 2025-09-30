import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-8 md:px-12 lg:px-24 font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and qualifications
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-6xl mx-auto space-y-12">
        {education.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 
              hover:shadow-[0_0_30px_rgba(130,69,236,0.5)] hover:-translate-y-2"
          >
            {/* Gradient Border */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#8245ec] rounded-2xl opacity-50 
              transition-opacity duration-300 group-hover:opacity-70"
            ></div>

            {/* Content */}
            <div className="relative m-[1px] bg-gray-900 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side - Image */}
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-xl overflow-hidden bg-white p-4">
                    <img
                      src={item.img}
                      alt={item.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="md:w-3/4 space-y-4">
                  {/* School Name */}
                  <h3 className="text-2xl font-bold text-white">
                    {item.school}
                  </h3>

                  {/* Degree */}
                  <h4 className="text-xl text-purple-400 font-medium">
                    {item.degree}
                  </h4>

                  {/* Date and Grade */}
                  <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {item.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      {item.grade}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
