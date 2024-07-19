import React, { useEffect, useState } from "react";
import farmstay from "../images/farm.png";
import { getDataService } from "../service/apigetdata";

export const About = () => {

  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
      const fetchGuests = async () => {
          try {
              const data = await getDataService();
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
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container">
          <div className="grid items-center place-items-center text-center mt-36 mb-12 md:mt-28 md:mb-6">
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent  bg-orange-700 p-2">
              Welcome! We're thrilled to have you here
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">
              "Welcome to our haven! We're incredibly excited to have you as our
              guest. Get ready to unwind, create beautiful memories, and immerse
              yourself in a delightful experience with us."
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="travigo-container">
          <div className="lg:px-2 px-4 flex md:flex-col items-center justify-between py-12">
            {/* left side */}
            <div className="w-full mt-5">
              <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5">
                Authentic living <span className="text-primary"></span> at
                Farmstay Manangel
              </h1>
              <p className="text-base mb-2">
                Farmstay manangel welcomes you to an authentic rural Nestled in
                the countryside, our sustainable farm offers hands-on farm
                activities and the tranquility of nature. Enjoy comfortable,
                rustic-chic accommodations, waking up to birdsong and fresh
                country air.
              </p>
              <p className="text-base mb-2">
                Beyond cozy lodgings, we offer immersive experiences. Explore
                nature, indulge in farm-to-table dining, and relax by a bonfire
                under the starry sky. Our activities showcase the best of rural
                life.
              </p>

              <p className="text-base mb-2">
                We're dedicated to sustainable practices, conservation, and
                responsible tourism. We leave a positive impact on the
                environment and support the local community. Join us in
                celebrating the beauty of the land, the warmth of community, and
                the tranquility of farm life. Experience the magic of the
                countryside with Farmstay Manangel. Welcome to our farm family!
              </p>
            </div>
            <div className=" w-full">
              <img
                src={farmstay}
                alt=""
                className="w-full rounded-tl-full lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="travigo-container">
          <div className="px-4 flex md:flex-col items-center justify-between py-4 gap-5">
            {/* left side */}
            <div className=" w-full mt-5">
              <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5">
                Do Everything you want <span className="text-primary"></span>
              </h1>
              <p className="text-base">
                Living at our famstay means joining a close-knit community where
                everyone feels like family. It's more than just a place to
                stay—it's a welcoming home filled with connections, shared
                experiences, and a supportive atmosphere. We celebrate
                diversity, encourage interactions, and aim to make every
                individual feel valued and safe. Join us and become a part of
                our extended family!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-4 p-4">
            {guests.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 border rounded-md border-green-800 p-2"
              >
                <img src={`https://api.farmstaymanangel.com/assets/farmservice/${item.image}`} alt={item.name} className="w-full object-fill h-36" />
                <span>
                  <p className="text-center font-semibold text-green-800">
                    {item.title}
                  </p>
                  <p className="text-center">{item.description}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
