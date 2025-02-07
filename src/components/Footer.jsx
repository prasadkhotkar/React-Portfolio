import React from "react";

function Footer() {
  return (
    <footer className="w-full text-center py-4 bg-black footer">
      <span className="text-gray-400 text-sm">&copy; 2024 Copyright - </span>
      <a
        className="hover:underline text-cyan-400 font-bold transition duration-200"
        href="/"
      >
        Prasad Khotkar
      </a>
    </footer>
  );
}

export default Footer;
