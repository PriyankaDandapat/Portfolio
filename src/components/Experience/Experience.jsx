import React from "react";
import { experiences } from "../../constants";
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-4 sm:px-8 md:px-12 lg:px-24 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>
      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-[#8245ec]"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center justify-between mb-24 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            } sm:even:flex-row-reverse`}
          >
            {/* Timeline Node with Company Logo */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-4 sm:-translate-x-1/2 z-20">
              <div className="relative w-20 h-20 rounded-full p-1 bg-[#8245ec] ">
                <div className="absolute inset-0 rounded-full bg-[#8245ec] "></div>
                <div className="relative w-full h-full rounded-full bg-gray-900 p-2 backdrop-blur-sm">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full rounded-full object-contain bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div
              className={`w-[calc(100%-3rem)] sm:w-[calc(50%-4rem)] ml-16 sm:ml-0 ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              } transition-all duration-300 group`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl transform transition-all duration-300 
                group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(130,69,236,0.5)] group-hover:-translate-y-2
                ${
                  index % 2 === 0
                    ? "group-hover:-translate-x-4"
                    : "group-hover:translate-x-4"
                }`}
              >
                {/* Animated border gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#8245ec] rounded-2xl opacity-50 
                  transition-opacity duration-300 group-hover:opacity-70"
                ></div>

                {/* Content */}
                <div
                  className="relative m-[1px] bg-gray-900 rounded-2xl p-6 backdrop-blur-md 
                  transition-all duration-300 group-hover:p-7"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {experience.role}
                      </h3>
                      <h4 className="text-lg text-purple-400 font-medium">
                        {experience.company}
                      </h4>
                      <p className="text-sm text-gray-400">{experience.date}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {experience.desc}
                    </p>

                    {/* Skills */}
                    <div>
                      <h5 className="text-white font-medium mb-2">Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
