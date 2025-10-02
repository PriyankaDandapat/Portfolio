import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profilepicLinkedln2 from "../../assets/profile/profilepicLinkedln2.jpeg";
const About = () => {
  const cursor = "|";
  return (
    <>
      <section
        id="about"
        className="py-12 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto font-sans"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          {/* leftside */}
          <div className="md:w-3/5 text-center md:text-left mt-8 md:mt-0">
            {/* greeting */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>
            {/* name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Priyanka Dandapat
            </h2>

            {/* skills + typing effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "FullStack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#8245ec]"
              />
            </h3>

            {/* about me paragraph */}
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              necessitatibus adipisci, libero debitis fuga unde illo, rem
              sapiente illum quae ipsum omnis numquam accusamus perferendis
              architecto possimus, quidem odio nisi harum ipsam sunt repellendus
              aut.
            </p>

            {/* resume button */}
            <a
              href="https://drive.google.com/file/d/1ZNzxVKP7Boh90e6qllMiVH-48Bir2-LQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* rightside */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={500}
              scale={1}
              transitionSpeed={500}
              gyroscope={true}
            >
              <img
                src={profilepicLinkedln2}
                alt="Tarun Kaushik"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
