import React, { useState } from "react";
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
      image: ava_h,
      country: "Belgia",
      platform: "Google Maps",
    },
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
      id: 3,
      name: "Lieve",
      title: "Beautifull, calming & heartwarming.",
      review:
        "Ari and Uyung made sure our stay was as pleasent as possible and showed us their home and their homevillage. The surroundings are very beautifull. Totally worth it!",
      image: ava_l,
      country: "Belanda",
      platform: "Booking.com",
    },
    {
      id: 4,
      name: "Anna",
      title: "Magico 💫",
      review: "Ospitalità e gentilezza assoluta in questa splendida famiglia nel cuore della natura. Raccomandatissimo per chi vuole vivere esperienze autentiche nella realtà locale",
      image: ava_a,
      country: "Italia",
      platform: "Booking.com",
    },
    {
      id: 5,
      name: "Jassim",
      title: "Exceptional",
      review:
        "t's the right places for people who want to explore a real local cultural life, we just stayed two nights but we felt like we're staying with our family.",
      image: ava_j,
      country: "Bahrain",
      platform: "Booking.com",
    }, 
    {
      id: 6,
      name: "Abbey",
      title: "Incredible place and hosts",
      review:
        "This stay was so cozy, overlooking the hills, and so peaceful. We loved it",
      image: ava_a,
      country: "Italia",
      platform: "Booking.com",
    },
    {
      id: 7,
      name: "Abdulrhman",
      title: "Best experience in Indonesia so far",
      review:
        "- Staff were helpful with everything, Ari and Uyung are the best, Uyung mom she is the one preparing food and doing the cleaning. the way they treated me in there, I felt like it’s my own home, they did take me around the village, we also did some fun activities together, I won’t forget the good times I spent in the farmstay, thank you guys so much, - the views, it’s breathtaking, - the simple and quiet life in there that I enjoyed a lot , escaping from reality and from big noisy life in city’s 😅, - the friendly villagers",
      image: ava_a,
      country: "Saudi Arabia",
      platform: "Booking.com",
    },
    {
      id: 8,
      name: "Julia",
      title: "Exceptional",
      review:
        "Ari and Uyung are amazing hosts and make you feel at home from the very first moment. Mananggel the right place for anybody who wants to experience the rural life of Indonesia including its food culture. Big recommendations for this farmstay.",
      image: ava_j,
      country: "Austria",
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
    {
      id: 13,
      name: "Nico",
      title: "We had two incredibly beautiful days",
      review:
        "We had two incredibly beautiful days at Ari's on his farm. With other guests, we went on excursions together and ate together with everyone in the evening. The accommodation is fantastic and in the middle of the nature. We thank you for the great experience :).",
      image: nico,
      country: "Germany",
      platform: "Airbnb.com",
    },
    {
      id: 14,
      name: "Sára",
      title: "the farm was fantastic!",
      review:
        "Our stay at the farm was fantastic! The place is beautiful and right in the nature. You just can't get enough of that view from the window! Ari and the guys are super kind and always helpful. Ari is also an amazing tour gide, he showed us the best places around the town.",
      image: sara,
      country: "Hungary",
      platform: "Airbnb.com",
    },
    {
      id: 15,
      name: "Karla",
      title: "Great to stay",
      review:
        "I had a great time at the Airbnb. It is surrounded by a lot of nature and a great landscape. The hosts are very helpful and showed me typical indonesian food in addition to the area. I highly recommend an overnight stay",
      image: karla,
      country: "Germany",
      platform: "Airbnb.com",
    },
    {
      id: 16,
      name: "Jákup Á Rógvi J",
      title: "100% Recomended",
      review:
        "This is a really nice place if you want to get know about the local Indonesian culture, the environment here is so beautiful. Ari is the best host ever, and his friends are really friendly too. I would 100% recommend",
      image: yakub,
      country: "Farue Island",
      platform: "Airbnb.com",
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
              <div className="grid grid-cols-4 md:grid-cols-1 gap-2">
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
                    See all review from{" "}
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
            <div className="grid grid-cols-4 md:grid-cols-1 gap-2">
              {dataReview
                .filter((review) => review.platform === "Airbnb.com")
                .map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              <a
                  href="https://www.airbnb.com/rooms/747463323767904056/reviews?adults=1&category_tag=Tag%3A8678&children=0&infants=0&check_in=2024-05-15&check_out=2024-05-20&source_impression_id=p3_1714720822_8NJOEtbG2hOozpcA&previous_page_section_name=1000&federated_search_id=4d8c5c53-e159-4d54-9a1e-9c70e3f586a1"
                  target="_blank"
                  className="cursor-pointer border border-grey-400 text-center flex justify-center font-semibold items-center bg-cover bg-center relative rounded-md"
                >
                  <span className="absolute inset-0 z-10 bg-red-100"></span>
                  <span className="z-20 relative text-gray-800 text-lg">
                    See all review from{" "}
                    <p className="text-blue-500 text-2xl">AIRBNB.COM</p>
                  </span>
                </a>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5">
            <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5 text-yellow-500">
              Google Maps
            </h1>
            <div className="grid grid-cols-4 md:grid-cols-1 gap-2">
              {dataReview
                .filter((review) => review.platform === "Google Maps")
                .map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
            </div>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-4 p-4">
          {dataReview
                
                .map((review) => (
                  <div class="flex items-center justify-center ">
                  <div class="group h-96 w-96 [perspective:1000px]">
                    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="relative h-96 w-full">
  <img className="absolute inset-0 h-full w-full object-cover rounded-xl shadow-xl shadow-black/40" src={review.image} alt="" />
  <p className="absolute inset-x-0 bottom-4 text-center text-2xl font-semibold text-white">{review.name}</p>
</div>

                      <div class="absolute inset-0 h-full w-full rounded-xl bg-gray-800 px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col gap-2 justify-center">
                          <h1 class="text-3xl font-bold">{review.name}</h1>
                          <p class="text-base">{review.title}</p>
                          <p class="text-xs">{review.review}</p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                ))}
          
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
