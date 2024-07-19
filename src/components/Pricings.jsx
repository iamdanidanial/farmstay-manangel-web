import React, { useEffect, useState } from "react";
import { getDataFacility, getDataRoom } from "../service/apigetdata";
import { Link } from "react-router-dom";
import checkbox from "../images/checkbox.svg";
import { FaWhatsapp } from 'react-icons/fa';

const Pricings = ({ brands, pricingapi: { title, text, btn1, btn2, plans } }) => {
  const [guests, setGuests] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchGuests = async () => {
        setLoading(true);
        try {
            const data = await getDataRoom();
            const data2 = await getDataFacility();
            if (Array.isArray(data.data) && Array.isArray(data2.data)) {
                setGuests(data.data);
                setFacilities(data2.data);
            } else {
                throw new Error('Data format is not an array');
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchGuests();
}, []);

  return (
    <>
      <div className="my-16 relative" id="pricing">
        <div className="travigo-container">
          <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
            <p className="text-xl lg:text-sm text-gray-900">{text}</p>
          </div>
          <div className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center gap-4 lg:flex-wrap justify-center xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
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
              className="w-60 h-auto object-fill xl:w-48 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md"
            />
          </Link>
        ))}
      </div>
          <div className="grid grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap-5 m-auto">
          {guests.map((item)=>(
          <div className="flex items-center justify-between ">

                <div className="flex flex-col items-center gap-5 ">
                <div className="flex w-full h-72 lg:h-60">
                  <img
                   src={`https://api.farmstaymanangel.com/assets/room/${item.image}`} alt={item.name}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
                <div className="grid items-center gap-4">
                  <h1 className="text-gray-900 font-semibold text-2xl filter drop-shadow-lg lg:text-base md:text-sm">
                    {item.name}
                  </h1>
                  <p className="text-slate-900 font-normal text-base lg:text-sm">
                    {item.description}
                  </p>
                  <p className="text-slate-900 font-bold text-lg lg:text-xs">
                    RP. {item.price}
                  </p>
                </div>
              </div>
              </div>
            ))}

            </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col gap-4 my-6 p-0 lg:p-6">
        <h2 className="text-2xl font-semibold">All room included</h2>
        <div className="grid grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-4 m-auto ">
              {facilities.map((item) => (
                <div key={item.id} className="flex items-center justify-start gap-5">
                  <div className="grid items-center">
                    <img
                      src={checkbox}
                      alt="iconbox/svg"
                      className="lg:w-5 lg:h-5"
                    />
                  </div>
                  <div className="grid items-center">
                    <h1 className="font-normal text-base text-gray-900 filter drop-shadow-lg lg:text-base hover:text-emerald-500">
                    {item.name}
                    </h1>
                  </div>
                </div>
              ))}
              </div>
              <div className="grid items-center justify-items-center mt-6 ">
              <Link
                to="https://wa.me/+6285161012014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className=" bg-green-600 rounded-full text-white text-2xl lg:text-base px-12 lg:px-2 py-6 lg:py-2 flex items-center gap-2">
                  <FaWhatsapp />
                  Direct booking on WhatsApp
                </button>
              </Link>
            </div>
        </div>

      </div>

    </>
  );
};

export default Pricings;
