"use client";

import React from "react";

const Custom401: React.FC = ({}) => {
  return (
    <section className="flex justify-center h-screen w-full p-10 bg-gray-50 dark:bg-gray-800">
      <p className=" text-gray-600 dark:text-gray-100 text-center">
        <span className="font-bold text-4xl md:text-5xl">401</span> <br />
        <br /> <span className="text-2xl md:text-3xl">| Unauthorized</span>
      </p>
    </section>
  );
};

export default Custom401;
