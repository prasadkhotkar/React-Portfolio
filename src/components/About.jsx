import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            About Me
          </motion.p>
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-gray-700"
        >
          <p className="text-lg sm:text-xl leading-relaxed">
            👋 Welcome to my portfolio! I am{" "}
            <span className="text-cyan-400 font-semibold">Prasad Khotkar</span>,
            a passionate Full Stack Web Developer. Currently pursuing a{" "}
            <span className="text-cyan-400 font-semibold">
              Bachelor's degree in Computer Science Engineering
            </span>{" "}
            at JSPM BSIOTR, Wagholi. I am in my final year and eager to step
            into the professional world.
          </p>

          <br />

          <p className="text-lg sm:text-xl leading-relaxed">
            With a strong foundation in both{" "}
            <span className="text-cyan-400 font-semibold">frontend</span> and{" "}
            <span className="text-cyan-400 font-semibold">backend</span>{" "}
            technologies, I specialize in building dynamic, responsive, and
            user-friendly web applications.
            <br />
            <br />
            🚀 I enjoy exploring new technologies, solving challenging problems,
            and continuously learning to enhance my development skills.
          </p>
        </motion.div>

        {/* Decorative Line */}
        <div className="mt-8 flex justify-center">
          <div className="w-1/3 h-1 bg-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
