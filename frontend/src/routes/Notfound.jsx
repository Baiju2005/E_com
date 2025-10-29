import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-200 text-center px-4">

      <img
        src="/Raju.png"
        alt="Lost Cartoon"
        className="w-60 h-60 object-contain mb-6 animate-bounce"
      />


      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        404 – Page Lost in Space 🚀
      </h1>


      <p className="text-lg text-gray-700 mb-6">
        Looks like this page went on a coffee break ☕ <br />
        or maybe it’s debugging itself somewhere in the multiverse!
      </p>


      <p className="italic text-gray-500 mb-8">
        “Tip: Always console.log before you panic!”
      </p>


      <Link
        to="/"
        className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold shadow-md hover:scale-105 transition-transform"
      >
        🏠 Back to Safety
      </Link>
    </div>
  );
};

export default Notfound;
