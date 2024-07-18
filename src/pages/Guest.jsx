import React, { useEffect, useState } from "react";
import { getDataGuests } from "../service/apigetdata";

export const Guest = () => {
  const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const data = await getDataGuests();
                setGuests(data.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchGuests();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container">
          <div className="grid items-center place-items-center text-center mt-36 mb-12 md:mt-28 md:mb-6">
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-orange-700 p-2">
              Our guests come from around the world
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">
              Our establishment welcomes guests from across the globe, embracing
              diversity and fostering a global community of cultural exchange
              and inclusivity.
            </p>
          </div>

          <div className="grid grid-cols-5 lg:grid-cols-2 gap-4 my-4">
            {guests.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-center items-center gap-2 my-2"
              >
                <img
                  src={`https://api.farmstaymanangel.com/assets/guest/${item.image}`} alt={item.name}
                  className="object-cover lg:object-fill w-full h-72"
                />
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-semibold text-xl">{item.name}</p>
                </div>
                <span className="absolute top-0 right-0 text-white">
                <img
                                src={item.country.googlemaps}
                                alt={item.country.name}
                                className="w-12 h-8 border"
                            />
                </span>
              </div>
            ))}
          </div>
          {/*
          <div className="flex gap-2 mx-auto justify-end px-6 py-2">
            <Pagination
              currentPage={page}
              totalPages={pages}
              onPageChange={handlePageChange}
            />
          </div> */}
        </div>
      </div>
    </>
  );
};
