import React from "react";
import { SkillsInfo } from "../../constants";
const Skills = () => {
  return (
    <section
      id="skill"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          SKILLS
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-semibold px-4">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* skills categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
        {SkillsInfo.map((item) => (
          <div
            key={item.title}
            className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-2xl border border-white 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {item.title}
            </h3>

            {/* skillsitem grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 w-full">
              {item.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent border-2 border-gray-700 
                    hover:border-[#8245ec] rounded-2xl py-1.5 sm:py-2 px-2 sm:px-3 text-center transform transition-all 
                    duration-300 hover:scale-105 hover:bg-[#8245ec] group cursor-pointer"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110 object-contain"
                  />
                  <span
                    className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors whitespace-nowrap 
                    overflow-hidden text-ellipsis max-w-[80px] sm:max-w-[100px]"
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
