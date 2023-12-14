import React from "react";
import { Link } from "react-router-dom";

const Advertise = ({ brands }) => {
  return (
    <>
      <div className="travigo-container">
        <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2">
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
            Convenient Booking Available Here.
          </h1>
          <p className="text-xl lg:text-sm text-gray-900"></p>
        </div>
      </div>
      <div className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center lg:flex-wrap justify-center xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
        {brands?.map((val, i) => (
          <Link
            key={val.link}
            to={val.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              key={i}
              src={val.iconSrc}
              alt="brands/icon"
              className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Advertise;
