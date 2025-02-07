import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import java from "../assets/java.png";
import postgres from "../assets/postgres.png";

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: node, title: "NodeJs", style: "shadow-green-400" },
    { id: 6, src: express, title: "Express", style: "shadow-white" },
    { id: 7, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
    { id: 8, src: postgres, title: "Postgres", style: "shadow-green-500" },
    { id: 9, src: redux, title: "Redux", style: "shadow-purple-500" },
    { id: 10, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 11, src: java, title: "JAVA", style: "shadow-white" },
    { id: 12, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full py-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full px-6">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </h2>
          <p className="py-4 text-gray-400">
            These are the technologies I've worked with in my projects.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`transition transform hover:scale-110 duration-300 ease-in-out py-6 px-4 rounded-lg ${style} hover:shadow-2xl`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto mb-4" />
              <p className="text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
