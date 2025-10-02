import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_64fg1dk", // Replace with your EmailJS Service ID
        "template_fk7xcv8", // Replace with your EmailJS Template ID
        form.current,
        "1TJkpNEj468njkm3f" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Contact Content */}
      <div className="w-full max-w-[90rem] grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Let's Connect <span className="ml-1">🤝</span>
            </h3>
            <p className="text-gray-400">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat about technology and development.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p className="text-gray-400">priyanka.dandapat@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-gray-400">Mathura, Uttar Pradesh</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-white font-medium mb-4">
                Connect on Social Media
              </h4>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/YourGitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/YourLinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* LeetCode */}
                <a
                  href="https://leetcode.com/YourLeetCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center hover:bg-purple-500/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-purple-500"
                    fill="currentColor"
                  >
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Send a Message <span className="ml-1">✉️</span>
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-6"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
            transition-all duration-300"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
            transition-all duration-300"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
            transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-700 
            focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
            transition-all duration-300"
            />

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8245ec] to-purple-500 py-4 text-white font-semibold 
            rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 
            transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
