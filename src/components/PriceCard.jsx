import React from "react";

const PriceCard = ({
  plan: { planicon, title, text, price, plancontent, buttonText },
}) => {
  // console.log(plan)
  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200 hover:scale-105 duration-300 transition-all cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-5">
            <div className="flex w-full h-48 lg:h-24">
              <img
                src={planicon}
                alt="planicon/img"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="grid items-center">
              <h1 className="text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base md:text-sm">
                {title}
              </h1>
              <p className="text-slate-900 font-normal text-sm lg:text-xs">
                {text}
              </p>
              <p className="text-slate-900 font-bold text-lg lg:text-xs">
                RP. {price}
              </p>
            </div>
          </div>
        </div>
        <div className="h-[0.1vh] bg-slate-200 my-5"></div>
        <div className="grid items-center gap-3 px-5">
          {plancontent?.map((val, i) => (
            <div key={i} className="flex items-center justify-start gap-5">
              <div className="grid items-center">
                <img
                  src={val.iconbox}
                  alt="iconbox/svg"
                  className="lg:w-5 lg:h-5"
                />
              </div>
              <div className="grid items-center">
                <h1 className="font-normal text-lg text-gray-900 filter drop-shadow-lg lg:text-base hover:text-emerald-500">
                  {val.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="grid items-center justify-items-center mt-7">
          <button type="button" className="button-emrald text-base">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
