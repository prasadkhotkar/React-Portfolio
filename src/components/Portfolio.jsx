import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import notes from "../assets/portfolio/Notes.png"
import shopping from "../assets/portfolio/shopping.png"
import speak from "../assets/portfolio/Type-N-Speak.png"
import BookList from "../assets/portfolio/BookList.png"
import weight from "../assets/portfolio/weight.png"
import relaxer from "../assets/portfolio/Relaxer.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: speak,
      link: 'https://prasadkhotkar.github.io/Text-to-Speech/',
      repo: 'https://github.com/prasadkhotkar/Text-to-Speech'
    },
    {
      id: 2,
      src: shopping,
      link: 'https://prasadkhotkar.github.io/ShoppingCart-React/',
      repo: 'https://github.com/prasadkhotkar/ShoppingCart-React'
    },
    {
      id: 3,
      src: notes,
      link: 'https://prasadkhotkar.github.io/React-NoteBookApp/',
      repo: 'https://github.com/prasadkhotkar/React-NoteBookApp'
    },
    {
      id: 4,
      src: BookList,
      link: 'https://prasadkhotkar.github.io/BookList-App/',
      repo: 'https://github.com/prasadkhotkar/BookList-App'
    },
    {
      id: 5,
      src: weight,
      link: 'https://prasadkhotkar.github.io/Weight-Converter/',
      repo: 'https://github.com/prasadkhotkar/Weight-Converter'
    },
    {
      id: 6,
      src: relaxer,
      link: 'https://prasadkhotkar.github.io/Relaxer/',
      repo: 'https://github.com/prasadkhotkar/Relaxer'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio pb-20 "
    >
      <div className="max-w-screen-lg p-4 pb-12 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-14">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
