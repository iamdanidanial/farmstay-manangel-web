import React, { useEffect, useState } from "react";
import { gallery } from "../data/gallery";
import ImageSlider from "../components/ImageSlider";
import { getDataGallery } from "../service/apigetdata";

export const Gallery = () => {
  const filteredfruite = gallery.filter((item) => item.type === "fruit");
  const sortfruit = filteredfruite.sort((a, b) => (a.title > b.title ? 1 : -1));

  const filteredInterior = gallery.filter((item) => item.type === "interior");
  const sortinterior = filteredInterior.sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  const filteredLandscape = gallery.filter((item) => item.type === "landscape");
  const sortlandscape = filteredLandscape.sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  const filteredActivity = gallery.filter((item) => item.type === "activity");
  const sortactivity = filteredActivity.sort((a, b) =>
    a.title > b.title ? 1 : -1
  );

  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
        try {
            const data = await getDataGallery();
            if (Array.isArray(data.data)) {
              setGalleryData(data.data);
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

  const slides = [
    {
      image: 'https://via.placeholder.com/800x600?text=Image+1',
      title: 'Beautiful Sunset',
      description: 'Experience the beauty of the sunset over the mountains.',
    },
    {
      image: 'https://via.placeholder.com/800x600?text=Image+2',
      title: 'Majestic Forest',
      description: 'Explore the lush and green forest filled with wildlife.',
    },
    {
      image: 'https://via.placeholder.com/800x600?text=Image+3',
      title: 'Serene Lake',
      description: 'Relax by the serene lake with crystal clear water.',
    },
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1));
  };

  if (!galleryData.length) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
      <div className="travigo-container">
        <div className="grid items-center place-items-center text-center mt-36 mb-12 md:mt-28 md:mb-6">
          <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-orange-700 p-2">
            Explore, Appreciate, Immerse beutiful picture
          </h1>
          <p className="text-base my-5 text-center sm:text-sm">
            A picture gallery is a captivating space with diverse artworks,
            inviting visitors to explore and appreciate each unique piece,
            creating a connection to the world of imagination and emotion.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <img
        src={`https://api.farmstaymanangel.com/assets/gallery/${galleryData[currentIndex].image}`}
        alt={galleryData[currentIndex].title}
        className="w-full object-cover h-96"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-black p-4 text-white">
        <h2 className="text-2xl font-bold">{galleryData[currentIndex].title}</h2>
        <p className="mt-2">{galleryData[currentIndex].description}</p>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>

        <h1 className="font-semibold text-4xl">Interior</h1>
        <div className="grid lg:grid-cols-2 grid-cols-3 gap-4 my-6">
          {sortinterior.map((item) => (
            <div key={item.id}>
              <ImageGallery
                image={item.image}
                title={item.title}
                subtitle={item.description}
              />
            </div>
          ))}
        </div>

        <h1 className="font-semibold text-4xl">Fruit</h1>
        <div className="grid lg:grid-cols-2 grid-cols-4 gap-4 my-6">
          {sortfruit.map((item) => (
            <div key={item.id}>
              <ImageGallery
                image={item.image}
                title={item.title}
                subtitle={item.description}
              />
            </div>
          ))}
        </div>

        <h1 className="font-semibold text-4xl">Landscape</h1>
        <div className="grid lg:grid-cols-2 grid-cols-5 gap-4 my-6">
          {sortlandscape.map((item) => (
            <div key={item.id}>
              <ImageGallery
                image={item.image}
                title={item.title}
                subtitle={item.description}
              />
            </div>
          ))}
        </div>

          {/* <h1 className="font-semibold text-4xl">Activity</h1>
          <div className="grid lg:grid-cols-2 grid-cols-3 gap-4 my-6">
            {sortactivity.map((item) => (
              <div key={item.id}>
                <ImageGallery
                  image={item.image}
                  title={item.title}
                  subtitle={item.description}
                />
              </div>
            ))}
          </div> */}

      </div>
    </div>

  );
};

export const ImageGallery = ({ keys, image, title, subtitle }) => {
  return (
    <div
      key={keys}
      className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
    >
      <div className="flex">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={image}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50"></div>
      <div className="absolute inset-5 flex translate-y-[60%] flex-col items-center justify-center lg:px-0 px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif lg:text-sm text-xl font-bold text-white">
          {title}
        </h1>
        <p className="mb-3 lg:text-xs text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {subtitle}
        </p>
        {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          See More
        </button> */}
      </div>
    </div>
  );
};
