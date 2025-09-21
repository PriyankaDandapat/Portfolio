import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profilepicLinkedln2 from "../../assets/profile/profilepicLinkedln2.jpeg";
const About = () => {
  const cursor = "|";
  return (
    <>
      <section
        id="about"
        className="py-0.5 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* leftside */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
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
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[34rem]">
              {/* Animated background blobs */}
              <motion.div
                className="absolute top-0 left-0 w-[calc(100%-3rem)] h-full mx-6"
                style={{
                  background: "linear-gradient(45deg, #8245ec, #a855f7)",
                  filter: "blur(15px)",
                  opacity: 0.4,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  borderRadius: [
                    "55% 45% 45% 55% / 55% 45% 55% 45%",
                    "40% 60% 55% 45% / 45% 50% 50% 55%",
                    "55% 45% 45% 55% / 55% 45% 55% 45%",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 mx-6"
                  style={{
                    background: "linear-gradient(45deg, #8245ec, #a855f7)",
                    borderRadius: "55% 45% 45% 55% / 55% 45% 55% 45%",
                  }}
                  animate={{
                    borderRadius: [
                      "55% 45% 45% 55% / 55% 45% 55% 45%",
                      "40% 60% 55% 45% / 45% 50% 50% 55%",
                      "55% 45% 45% 55% / 55% 45% 55% 45%",
                    ],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image container */}
                <motion.div
                  className="absolute inset-0 mx-6"
                  animate={{
                    borderRadius: [
                      "55% 45% 45% 55% / 55% 45% 55% 45%",
                      "40% 60% 55% 45% / 45% 50% 50% 55%",
                      "55% 45% 45% 55% / 55% 45% 55% 45%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-purple-300"
                    style={{ borderRadius: "inherit" }}
                  />
                  <div
                    className="relative w-full h-full overflow-hidden p-1"
                    style={{ borderRadius: "inherit" }}
                  >
                    <img
                      src={profilepicLinkedln2}
                      alt="Priyanka Dandapat"
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "inherit" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
