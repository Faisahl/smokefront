"use client";

import React from "react";
import Review from "./Review";
import Image from "next/image";

const ReviewSet: React.FC = () => {
  let reviews: ReviewType[] = [
    {
      name: "Jonathan Reinink",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendiseaque, exercitationem praesentium nihil.",
    },
    {
      name: "Flor Sanchez",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendiseaque, exercitationem praesentium nihil.",
    },
    {
      name: "Ahmed Kouhlait",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendiseaque, exercitationem praesentium nihil.",
    },
  ];

  return (
    <div className="mt-20 md:mt-6">
      {/* stars svgs */}
      <div className="flex gap-0.5 justify-center mb-6">
        <svg
          className="h-10 w-10 shrink-0 fill-amber-400"
          viewBox="0 0 256 256"
        >
          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
        </svg>
        <svg
          className="h-10 w-10 shrink-0 fill-amber-400"
          viewBox="0 0 256 256"
        >
          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
        </svg>
        <svg
          className="h-10 w-10 shrink-0 fill-amber-400"
          viewBox="0 0 256 256"
        >
          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
        </svg>
        <svg
          className="h-10 w-10 shrink-0 fill-amber-400"
          viewBox="0 0 256 256"
        >
          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
        </svg>
        <svg
          className="h-10 w-10 shrink-0 fill-amber-400"
          viewBox="0 0 256 256"
        >
          <path d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z"></path>
        </svg>
      </div>
      <h1 className="w-fit text-gray-900 mx-auto dark:text-white border-b-4 pb-2 border-custo-51 text-4xl md:text-5xl font-bold">
        Testimonials
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20">
        {reviews.map((review) => (
          <Review key={review.name} data={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSet;
