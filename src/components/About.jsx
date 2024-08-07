import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-lg mt-5">
        Welcome to my portfolio ! I am Prasad Khotkar, a passionate and dedicated Full Stack Web Developer. Currently pursuing a Bachelor's degree in Computer Science Engineering from JSPM BSIOTR, Wagholi, I am in my final year and eagerly preparing to step into the professional world.
       
        </p>

        <br />

        <p className="text-lg">
        With a strong foundation in both frontend and backend technologies, I specialize in creating dynamic, responsive, and user-friendly web applications. My expertise spans across various programming languages and frameworks.
        <br />
        <br />
        I am always eager to learn and explore new technologies, and I enjoy tackling challenging problems head-on.
        </p>
      </div>
    </div>
  );
};

export default About;
