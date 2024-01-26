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
    <div className="my-14">
      <h1 className="text-custo-51 text-center text-4xl font-bold">
        Testimonials
      </h1>
      <Image
        alt={"5-stars-img"}
        src={"/5-star-min.jpg"}
        width={200}
        height={200}
        className="mx-auto mt-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20">
        {reviews.map((review) => (
          <Review key={review.name} data={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSet;
