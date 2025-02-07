import React from "react";
import notes from "../assets/portfolio/Notes.png";
import shopping from "../assets/portfolio/shopping.png";
import speak from "../assets/portfolio/Type-N-Speak.png";
import BookList from "../assets/portfolio/BookList.png";
import weight from "../assets/portfolio/weight.png";
import relaxer from "../assets/portfolio/Relaxer.png";
import CurrencyConverter from "../assets/portfolio/CurrencyConverter.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: speak,
      link: "https://prasadkhotkar.github.io/Text-to-Speech/",
      repo: "https://github.com/prasadkhotkar/Text-to-Speech",
    },
    {
      id: 2,
      src: shopping,
      link: "https://prasadkhotkar.github.io/ShoppingCart-React/",
      repo: "https://github.com/prasadkhotkar/ShoppingCart-React",
    },
    {
      id: 3,
      src: CurrencyConverter,
      link: "https://currency-converter-blue-xi-97.vercel.app/",
      repo: "https://github.com/prasadkhotkar/currencyConverter",
    },
    {
      id: 4,
      src: notes,
      link: "https://prasadkhotkar.github.io/React-NoteBookApp/",
      repo: "https://github.com/prasadkhotkar/React-NoteBookApp",
    },
    {
      id: 5,
      src: BookList,
      link: "https://prasadkhotkar.github.io/BookList-App/",
      repo: "https://github.com/prasadkhotkar/BookList-App",
    },
    {
      id: 6,
      src: weight,
      link: "https://prasadkhotkar.github.io/Weight-Converter/",
      repo: "https://github.com/prasadkhotkar/Weight-Converter",
    },
    {
      id: 7,
      src: relaxer,
      link: "https://prasadkhotkar.github.io/Relaxer/",
      repo: "https://github.com/prasadkhotkar/Relaxer",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full py-8 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full px-6">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="py-4 text-gray-400">Check out some of my work below</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolios.map(({ id, src, link, repo }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-600 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt="Project Preview"
                className="w-full h-40 object-cover"
              />
              <div className="flex justify-between p-4 bg-gray-900">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition duration-300"
                >
                  Demo
                </a>
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
