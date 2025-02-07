import React from "react"; 
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center"
    >
      <div className="max-w-screen-xl w-full mx-auto flex flex-col-reverse md:flex-row items-center px-8 md:px-16 gap-16">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center h-full text-center md:text-left w-full md:w-1/2"
        >
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight">
            I'm a <span className="text-cyan-400">Full Stack</span> <br /> Web Developer
          </h2>
          <p className="text-gray-400 py-6 max-w-lg text-lg">
            Hi, I'm <span className="text-cyan-400 font-semibold">Prasad Khotkar</span>, a passionate Full Stack Web Developer and final-year Computer Science Engineering student at JSPM BSIOTR, Wagholi.
            I specialize in building robust, scalable applications using <span className="text-cyan-300 font-semibold">React, Node.js, and MongoDB</span>. Always eager to learn and improve!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-md shadow-cyan-500/50 hover:scale-105 transition-transform duration-300 text-lg"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={28} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center w-full md:w-1/2"
        >
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl w-56 md:w-80 max-w-md shadow-lg shadow-gray-700 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default Home;
