import React from "react";
import brand2 from "../images/brand2.png";
import brand3 from "../images/bookingcom.png";
import model from "../images/model.jpg";
import verified from "../images/verified.png";

const ReviewSection = () => {
  const reviews = [
    {
      date: "February 12, 2024",
      name: "John Doe",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      platformImage: brand2,
      personImage: model,
      linkReview:
        "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    },
    {
      date: "February 12, 2024",
      name: "John Doe",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      platformImage: brand3,
      personImage: model,
      linkReview:
        "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    },
    {
      date: "February 12, 2024",
      name: "John Doe",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      platformImage: brand3,
      personImage: model,
      linkReview:
        "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    },
    {
      date: "February 12, 2024",
      name: "John Doe",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      platformImage: brand3,
      personImage: model,
      linkReview:
        "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    },
    {
      date: "February 12, 2024",
      name: "John Doe",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      platformImage: brand2,
      personImage: model,
      linkReview:
        "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    },
    {
      date: "February 12, 2024",
      name: "John Doe",
      reviewContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      platformImage: brand2,
      personImage: model,
      linkReview:
        "https://www.airbnb.co.id/rooms/747463323767904056?source_impression_id=p3_1699366028_2vnC3QUMFBDGpoNF",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="travigo-container mx-auto my-24">
      <h1 className="md:text-2xl text-5xl font-bold text-headingcolor mb-5">
        Customer review
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

export const Review = ({
  date,
  name,
  reviewContent,
  platformImage,
  personImage,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img
          src={personImage}
          alt="Person"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
      <p className="text-gray-800">{reviewContent}</p>
      <div className="flex items-center mt-4">
        <img src={platformImage} alt="Platform" className="w-auto h-8 mr-2" />
        <img src={verified} alt="Platform" className="w-auto h-4 mr-2" />
      </div>
    </div>
  );
};
