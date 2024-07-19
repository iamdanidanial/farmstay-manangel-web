import React, { useEffect, useState } from "react";
import { getDataCountries, getDataGuests } from "../service/apigetdata";

export const Guest = () => {
  const [guests, setGuests] = useState([]);
  const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [guestsPerPage] = useState(15); // Atur jumlah tamu per halaman

    useEffect(() => {
      const fetchGuests = async () => {
          setLoading(true);
          try {
              const data = await getDataGuests();
              const data2 = await getDataCountries();
              if (Array.isArray(data.data) && Array.isArray(data2.data)) {
                  setGuests(data.data);
                  setCountries(data2.data);
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

  const countrySort = countries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
       // Hitung jumlah halaman
       const totalPages = Math.ceil(guests.length / guestsPerPage);

       // Ambil data tamu untuk halaman saat ini
       const indexOfLastGuest = currentPage * guestsPerPage;
       const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
       const currentGuests = guests.slice(indexOfFirstGuest, indexOfLastGuest);

     // Fungsi untuk mengubah halaman
     const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0); // Scroll ke atas saat halaman berubah
  };


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
          <div className="grid items-center place-items-center text-center mt-36 mb-4 md:mt-28 md:mb-2">
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-orange-700 p-2">
            Our Diverse Guests from Around the World
            </h1>
          </div>

          <div className="flex flex-wrap gap-4 py-4">
        {countrySort.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.flags} alt={item.name} className="w-12 h-8" />
            {/* <p>{item.name}</p> */}
          </div>
        ))}
      </div>
        <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-green-700 mt-12 lg:mt-4">Here They Are</h1>
        <p className="text-lg mt-5  sm:text-sm">
              Our establishment welcomes guests from across the globe, embracing
              diversity and fostering a global community of cultural exchange
              and inclusivity.
            </p>
          <div className="grid grid-cols-5 lg:grid-cols-2 gap-4 my-12 ">
            {currentGuests.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-center items-center gap-2 my-2"
              >
                <img
                  src={`https://api.farmstaymanangel.com/assets/guest/${item.image}`} alt={item.name}
                  className="object-cover w-full h-72 lg:h-48"
                />
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-semibold text-xl">{item.name}</p>
                </div>
                <span className="absolute top-0 right-0 text-white">
                <img
                                src={item.country.flags}
                                alt={item.country.name}
                                className="w-16 h-10"
                            />
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-4 space-x-2">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 mx-1 rounded-lg ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-700'}`}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`px-3 py-1 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 mx-1 rounded-lg ${currentPage === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-700'}`}
                >
                    Next
                </button>
            </div>

        </div>

      </div>
    </>
  );
};
