import React, { useEffect, useState } from "react";
import { getDataGuests } from "../service/apigetdata";

export const Guest = () => {
  const [guests, setGuests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [guestsPerPage] = useState(15); // Atur jumlah tamu per halaman

    useEffect(() => {
      const fetchGuests = async () => {
          try {
              const data = await getDataGuests();
              console.log('Data received from API:', data);
              if (Array.isArray(data.data)) {
                  setGuests(data.data);
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
            {currentGuests.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-center items-center gap-2 my-2"
              >
                <img
                  src={`https://api.farmstaymanangel.com/assets/guest/${item.image}`} alt={item.name}
                  className="object-cover lg:object-fill w-full h-72 lg:h-48"
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
