import React from "react";
import farmstay from "../images/farm.png";
import makanan1 from "../images/makanan1.jpg";
import makanan2 from "../images/makanan2.jpg";
import makanan3 from "../images/makanan3.jpg";
import makanan4 from "../images/makanan4.jpg";

import exterior1 from "../images/exterior1.jpg";
import exterior2 from "../images/exterior2.jpg";
import exterior3 from "../images/exterior3.jpg";
import exterior4 from "../images/exterior4.jpg";

export const Experience = () => {
  const image = [makanan1, makanan2, makanan3, makanan4];
  const secondImage = [exterior1, exterior2, exterior3, exterior4];
  const firstData = [
    {
      id: 1,
      title: "Close-to-Nature Living",
      description:
        "Surrounded by natural beauty—fresh air, open spaces, and stunning landscapes—immersing in a serene environment away from city life's hustle.",
    },
    {
      id: 2,
      title: "Hands-On Activities",
      description:
        "Engage in various farm tasks like tending to animals, cultivating crops, or harvesting produce, learning practical skills and connecting with the land.",
    },
    {
      id: 3,
      title: "Rural Lifestyle",
      description:
        "Experience the rhythms of rural life—waking up to nature's sounds, participating in farm chores, and embracing a simpler, slower pace of life.",
    },
    {
      id: 4,
      title: "Connection with Animals",
      description:
        "Interact with farm animals, fostering responsibility, compassion, and an appreciation for their role in sustainable living.",
    },
  ];

  const secondData = [
    {
      id: 5,
      title: "Fresh and Local Produce",
      description:
        "Enjoy farm-fresh produce, relishing the flavors of homegrown fruits, vegetables, and dairy straight from the source.",
    },
    {
      id: 6,
      title: "Community and Camaraderie",
      description:
        "Farm life fosters connections within a close-knit community, sharing experiences, stories, and traditions.",
    },
    {
      id: 7,
      title: "Appreciation for Sustainability",
      description:
        "Develop a deeper understanding of sustainability and environmental stewardship through composting, conservation, and eco-friendly practices.",
    },
    {
      id: 8,
      title: "Mindful Living",
      description:
        "Farm life encourages mindfulness and appreciation for life's simple joys—a stunning sunset, a bountiful harvest, or the companionship of animals.",
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container">
          <div className="grid items-center place-items-center text-center mt-36 mb-12 md:mt-28 md:mb-6">
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-purple-800 p-2">
              Discover and Embrace the Ultimate Experience
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">
              A beautiful experience is life's masterpiece—calming sunrises,
              stirring melodies, delightful flavors. It's genuine connections,
              unexpected kindness, triggering scents—a tapestry of joy, wonder,
              and magic.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="travigo-container">
          <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5">
            The best experience
          </h1>
          <div className="flex md:flex-col justify-between gap-4 py-4">
            {/* left side */}

            <div className="w-full">
              {firstData.map((item) => (
                <div key={item.id} className="flex flex-col gap-2  p-4">
                  <p className="text-base text-green-800">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {image.map((item) => (
                <img
                  src={item}
                  alt=""
                  className="w-full h-48 object-cover rounded-sm"
                />
              ))}
            </div>
          </div>
          <div className="flex md:flex-col justify-between gap-4 py-4">
            {/* left side */}
            <div className="grid grid-cols-2 gap-2">
              {secondImage.map((item) => (
                <img
                  src={item}
                  alt=""
                  className="w-full h-48 object-cover rounded-sm"
                />
              ))}
            </div>

            <div className="w-full">
              {secondData.map((item) => (
                <div key={item.id} className="flex flex-col px-6 py-2">
                  <p className="text-xl font-semibold text-green-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
