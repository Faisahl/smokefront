'use client'

import React from "react";

type Props = {};

const Custom404 = (props: Props) => {
  return (
    <section className="flex justify-center h-screen w-full p-10 bg-gray-50 dark:bg-gray-800">
      <p className=" text-gray-600 dark:text-gray-100 text-center">
        <span className="font-bold text-4xl md:text-5xl">404</span> <br />
        <br /> <span className="text-2xl md:text-3xl">| Not Found</span>
      </p>
    </section>
  );
};

export default Custom404;
