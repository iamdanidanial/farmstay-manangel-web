import React, { useState } from "react";
import farmstay from "../images/review1.svg";
import photo from "../images/simonangie.jpg";
import booking from "../images/bookingcom.png";

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

const ReviewCard = ({ review }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className={`max-w-sm rounded overflow-hidden  ${
        review.platform === "Booking.com"
          ? "bg-gray-50"
          : review.platform === "Airbnb.com"
          ? "bg-gray-50"
          : review.platform === "Google Maps"
          ? "bg-gray-50"
          : "bg-gray-50"
      }  ${isFlipped ? "transform rotate-y-180" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="flip-inner">
        <div
          className={`flip-front p-6 transition-transform ${
            isFlipped ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center mb-4">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-bold text-xl">{review.name}</div>
              <p className="text-gray-600">{review.country}</p>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl mb-2">{review.title}</div>
            <p className="text-gray-700 text-base line-clamp-3">
              {review.review}
            </p>
            {/* <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-600">{review.platform}</p>
            </div> */}
          </div>
        </div>
        <div
          className={`flip-back p-6 transition-transform bg-gray-200 ${
            isFlipped ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center mb-4">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-bold text-xl">{review.name}</div>
              <p className="text-gray-600">{review.country}</p>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl mb-2">{review.title}</div>
            <p className="text-gray-700 text-base">{review.review}</p>
            {/* <div className="mt-4 flex justify-between items-center">
              <p className="text-gray-600">{review.platform}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Review = () => {
  const dataReview = [
    {
      id: 1,
      name: "Hanne",
      title: "Fantastis!",
      review:
        "Ari, Uyung and Uyungs mom make you feel immediatly at home. We would say: if you are looking for authentic adventure, peace and quiet, learning about the culture of Indonesia and about farming, a good laugh, a warm family feeling: GO TO FARMSTAY. Beautiful and clean place to stay!",
      image: photo,
      country: "Belgia",
      platform: "Google Maps",
    },
    {
      id: 2,
      name: "Lieve",
      title: "Beautifull, calming & heartwarming.",
      review:
        "Ari and Uyung made sure our stay was as pleasent as possible and showed us their home and their homevillage. The surroundings are very beautifull. Totally worth it!",
      image: photo,
      country: "Belanda",
      platform: "Booking.com",
    },
    {
      id: 3,
      name: "Anna",
      title: "",
      review: "lorem lorem lorem",
      image: photo,
      country: "Italia",
      platform: "Booking.com",
    },
    {
      id: 4,
      name: "Dani dddd",
      title: "",
      review:
        "ri and Uyung made sure our stay was as pleasent as possible and showed us their home and their homevillage. The surroundings are very beautifull. Totally worth it!",
      image: photo,
      country: "Italia",
      platform: "Airbnb.com",
    },
    {
      id: 5,
      name: "Luar biasa",
      title: "",
      review:
        "Mas Ari dan Mas Uyung sangat membantu mulai dari awal mencari titik penginapan hingga tiba saatnya pulang. Serasa main ke rumah nenek di desa. Tersedia banyak aktivitas yang disediakan",
      image: photo,
      country: "Indonesia",
      platform: "airbnb.com",
    },
    {
      id: 6,
      name: "Abbey",
      title: "Incredible place and hosts",
      review:
        "This stay was so cozy, overlooking the hills, and so peaceful. We loved it",
      image: photo,
      country: "Italia",
      platform: "Booking.com",
    },
    {
      id: 7,
      name: "Abbey",
      title: "Incredible place and hosts",
      review:
        "This stay was so cozy, overlooking the hills, and so peaceful. We loved it",
      image: photo,
      country: "Italia",
      platform: "Booking.com",
    },
    {
      id: 8,
      name: "Abbey",
      title: "Incredible place and hosts",
      review:
        "This stay was so cozy, overlooking the hills, and so peaceful. We loved it",
      image: photo,
      country: "Italia",
      platform: "Booking.com",
    },
  ];
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
              <div className="grid grid-cols-2 gap-2 ">
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
                    {/* {item.platform === "Booking.com" ? (
                      <p className="text-base border border-blue-50 bg-blue-100 rounded-full text-blue-800 px-2 text-center">
                        {item.platform}
                      </p>
                    ) : (
                      <p className="text-base border border-red-50 bg-red-100 rounded-full text-red-800 px-2 text-center">
                        {item.platform}
                      </p>
                    )} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="travigo-container">
          <div className="px-4 flex flex-col mx-auto justify-end items-end py-4 gap-4">
            {/* left side */}
            <div className="flex flex-col w-full mt-5">
              <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5 text-blue-700">
                Booking.com
              </h1>
              <div className="grid grid-cols-4 gap-2">
                {dataReview.slice(0, 7).map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}

                <a
                  href="https://www.booking.com/hotel/id/farmstay-mananggel-kabupaten-cianjur1.id.html#tab-reviews"
                  target="_blank"
                  className="cursor-pointer border border-grey-400 text-center flex justify-center font-semibold items-center bg-cover bg-center relative rounded-md"
                >
                  <span className="absolute inset-0 z-10 bg-blue-100"></span>
                  <span className="z-20 relative text-gray-800 text-lg">
                    See All Review From{" "}
                    <p className="text-blue-500 text-2xl">BOOKING.COM</p>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5 text-red-500">
              Airbnb.com
            </h1>
            <div className="grid grid-cols-4 gap-2">
              {dataReview
                .filter((review) => review.platform === "Airbnb.com")
                .map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              <div className="border border-grey-400 text-center flex justify-center font-semibold items-center bg-cover bg-center relative">
                <span className="absolute inset-0 z-10 bg-black opacity-50"></span>
                <span className="z-20 relative text-white">SEE ALL REVIEW</span>
                <img
                  src={farmstay}
                  alt="Background Image"
                  className="absolute inset-0 object-cover z-0 h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5 text-yellow-500">
              Google Maps
            </h1>
            <div className="grid grid-cols-4 gap-2">
              {dataReview
                .filter((review) => review.platform === "Google Maps")
                .map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
            </div>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-4 p-4">
            {/* {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 border rounded-md border-green-800 p-2"
              >
                <img src={item.image} className="w-full object-fill h-36" />
                <span>
                  <p className="text-center font-semibold text-green-800">
                    {item.title}
                  </p>
                  <p className="text-center">{item.description}</p>
                </span>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};
