import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItem(itemId);
    setIsOpen(false);
    const section = document.getElementById(itemId);
    if (section) {
      const navHeight = 80; // approximate height of your navbar
      const targetPosition =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav
        className={`fixed z-50 top-0 w-full transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw]
      ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Priyanka</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Dandapat</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* menu bar */}
          <ul className=" hidden md:flex space-x-8 text-gray-200">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeMenuItem === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {/* social media icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/PriyankaDandapat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanka-dandapat-ba9149238/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* mobile menu icons */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            )}
          </div>
        </div>

        {/* mobile menu bar */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter  backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeMenuItem === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      handleMenuItemClick(item.id);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              {/* social media icons */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/PriyankaDandapat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanka-dandapat-ba9149238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8245ec]"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
