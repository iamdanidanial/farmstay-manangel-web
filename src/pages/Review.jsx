import React, { useEffect, useState } from "react";
import { getDataGuests, getDataReview } from "../service/apigetdata";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import farmstay from "../images/review1.svg";
import photo from "../images/simonangie.jpg";
import leonardo from "../images/guest/leonardo-switzerland.jpg"
import ava_j from "../images/guest/ava-j.png"
import ava_a from "../images/guest/ava-a.png"
import ava_h from "../images/guest/ava-h.png"
import ava_l from "../images/guest/ava-l.png"
import hans from "../images/guest/hans.webp"
import lucie from "../images/guest/lucie.webp"
import melissa from "../images/guest/melissa.webp"
import nico from "../images/guest/nico.webp"
import sara from "../images/guest/sara.webp"
import yakub from "../images/guest/yakub.webp"
import karla from "../images/guest/karla.webp"

export function PlatformBadge({ item }) {
  let className;
  if (item === "Booking.com") {
    className =
      "text-base border border-blue-50 bg-blue-100 rounded-full text-blue-800 px-2 text-center";
  } else if (item === "airbnb.com") {
    className =
      "text-base border border-red-50 bg-red-100 rounded-full text-red-800 px-2 text-center";
  } else if (item === "Google Maps") {
    className =
      "text-base border border-yellow-50 bg-yellow-100 rounded-full text-yellow-800 px-2 text-center";
  } else {
    className =
      "text-base border border-red-50 bg-red-100 rounded-full text-red-800 px-2 text-center";
  }

  return <p className={className}>{item}</p>;
}

export const Review = () => {
  const dataReview = [
    {
      id: 2,
      name: "Leandro",
      title: "Wonderful stay for all lovers of nature and good society, I absolutely recommend it!",
      review:
        "Wonderful stay for all lovers of nature, I absolutely recommend it! The guys of the staff built everything on their own, are super kind and it feels like being part of a family. They showed me the surrounding area with wonderful terraced paddy fields and banana plantations.",
      image: leonardo,
      country: "Switzerland",
      platform: "Booking.com",
    },
    {
      id: 10,
      name: "Hans",
      title: "The accommodation was truly a back to nature experience",
      review:
        "We were in the jungle. The people of the homestay used everything from nature for both the food and the accommodation. The food was delicious, little meat, but fine replacements for that. It was super fairy with Ari, Uyung and Harris. A lot of talking to them, 2 hikes done, one with homemade lunch during the hike. This farmstay is highly recommended to nature lovers. Ari, Uyung, Harris (July), thanks for the great days, we will remember it often. who knows, see you soon.",
      image: hans,
      country: "Netherlands",
      platform: "Airbnb.com",
    },
    {
      id: 11,
      name: "Lucía",
      title: "I can't say enough about Ari and his friends hospitality!",
      review:
        "They made us feel at home and he was extremely attentive and helpful! The area is gorgeous and the food was amazing. I think we had to experience a real Indonesian experience staying at his place. As is a little bit secluded make sure you stay at least 3 nights or more so you get to enjoy more of what the area has to offer. Thank you Ari for everything, you are a great host!",
      image: lucie,
      country: "Indiana",
      platform: "Airbnb.com",
    },
    {
      id: 12,
      name: "Mélissa",
      title: "Endroit incroyable avec des hôtes très accueillants, bienveillants et ouverts",
      review:
        "J’ai passé de très beaux moments, de partage, de découverte, mais aussi de rire. Vous êtes entourés de nature et d’adorables animaux qui vous donneront plein d’amour. Sand parler de la nourriture proposée qui est excellente. Je recommande à 100% sans hésitation.",
      image: melissa,
      country: "France",
      platform: "Airbnb.com",
    },
  ];


  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [guestsPerPage] = useState(16);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null); // Atur jumlah tamu per halaman

  useEffect(() => {
    const fetchGuests = async () => {
        try {
            const data = await getDataReview();
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
     const currentGuests = guests.slice(indexOfFirstGuest, indexOfLastGuest).sort((a, b) => {
      return a.guest.name.localeCompare(b.guest.name);
    });


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
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent  bg-orange-700 p-2">
              Tranquil Farmstay: An Immersive Nature Experience
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">
              This review delves into the experience of staying at a farmstay,
              highlighting the beauty of nature, serene ambiance, and various
              activitie s that visitors can enjoy. It also includes information
              about accommodations, services, as well as impressions and
              takeaways from the experience.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="travigo-container">
          <div className="lg:px-2 px-4 flex md:flex-col gap-4  justify-between ">
            {/* left side */}

            <div className="w-full">
              <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5">
                Customer Review
              </h1>
              <p className="text-2xl">
                Empowering Consumers with Genuine Feedback: Your Trusted Source
                for Unbiased Reviews
              </p>
              <img
                src={farmstay}
                alt=""
                className="w-full h-96 lg:rounded-none"
              />
            </div>

            <div className="w-full">
              <div className="grid md:grid-cols-1 grid-cols-2 gap-2 ">
                {dataReview.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col border  border-red-50 p-4 bg-gray-50 rounded-sm"
                  >
                    <div className="flex items-center gap-2 ">
                      <img
                        src={item.image}
                        className="rounded-full object-cover h-12 w-12 mr-2 bg-blue-700"
                        alt="Gambar Produk"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-lg">{item.name}</p>
                      </div>
                    </div>

                    <p className="font-medium py-2">{item.title}</p>
                    <p className="line-clamp-5">{item.review}</p>
                    <p>{item.name}</p>
                    <PlatformBadge item={item.platform} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 bg-gray-50 p-5">
      {currentGuests.map((review) => (
         <div key={review.id} className="bg-white shadow-md rounded-lg p-5 mb-5">
         <div className="flex items-center">
           <img
            src={`https://api.farmstaymanangel.com/assets/guest/${review.guest.image}`}
             alt={review.guest.name}
             className="w-16 h-16 rounded-full mr-4"
           />
           <div>
             <h2 className="text-xl font-semibold">{review.guest.name}</h2>
             <div className="flex items-center mt-2">
               <img src={review.guest.country.flags} alt={review.guest.country.name} className="w-6 h-4 mr-2"/>
               <span>{review.guest.country.name}</span>
             </div>
           </div>
         </div>
         <div className="mt-5">
           <h3 className="text-lg font-semibold">{review.title}</h3>
           <p className="text-gray-700 line-clamp-5">{review.content}</p>
         </div>
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
    </>
  );
};
