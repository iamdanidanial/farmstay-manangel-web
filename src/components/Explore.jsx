import React from "react";

const Explore = ({ title, placesAPI }) => {
  return (
    <>
      <div className="relative my-7 md:mt-3">
        <div className="travigo-container">
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {placesAPI?.map((val, i) => (
              <div
                key={i}
                className="relative rounded-lg hover:bg-emerald-100 hover:scale-105"
              >
                <div className="items-center">
                  <img
                    src={val.placeImg}
                    alt={val.location}
                    className="w-full h-36 rounded-lg object-cover filter drop-shadow-lg"
                  />
                </div>

                <h1 className="absolute w-full bg-gradient-to-tl from-emerald-800 to-green-800 py-2 text-white bottom-0  text-center left-0 font-semibold">
                  {val.location}
                </h1>

                <p className="absolute top-0 right-0 bg-slate-700 text-white p-2 rounded-bl-xl">
                  {val.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
