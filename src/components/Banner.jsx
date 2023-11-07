import React from "react";

const Banner = ({ bannerAPI: { title, text, btnText, imgSrc } }) => {
  return (
    <>
      <div className="relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg">
        <div className="relative flex items-center">
          <img
            src={imgSrc}
            alt="banner/api"
            className=" lg:h-[45vh] h-[75vh] w-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 left-12 p-4 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14">
          <h1 className="lg:text-3xl text-5xl font-bold text-white drop-shadow-lg filter">
            {title}
          </h1>
          <p className="text-xl text-white sm:text-sm">{text}</p>
          <button
            type="button"
            className="py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
