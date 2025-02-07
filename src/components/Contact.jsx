import React from "react";
import { motion } from "framer-motion";

// Function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            Contact Me
          </motion.p>
          <p className="py-4 text-gray-300">
            Submit the form below to get in touch with me.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex justify-center items-center">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className="flex flex-col w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg shadow-gray-700"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              required
              className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 transition duration-300 shadow-lg shadow-cyan-500/50"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 flex justify-center">
          <div className="w-1/3 h-1 bg-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
