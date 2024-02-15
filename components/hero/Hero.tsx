"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

const Hero: React.FC = () => {
  return (
    <div className="md:relative -z-11 flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:pt-12 xl:max-w-6xl">
      <div className="w-full h-64 lg:w-1/2 lg:h-[650px]">
        <img
          className="h-full w-full object-cover lg:rounded-md"
          src="https://images.unsplash.com/photo-1561136210-9a8f843af2d2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero image"
          width={200}
        />
      </div>
      <div className=" max-w-lg rounded-md bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-custo-51 lg:text-4xl">
            Welcome to Mala Flor
          </h2>
          <h3 className="text-xl text-gray-900 lg:text-2xl my-1 font-medium">
            Austin's #1 Smoke Shop
          </h3>
          <p className="mt-3 text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-8">
            {/* <Image 
              src={'/logo-malaflor.png'}
              alt="mala flor logo"
              width={70}
              height={70}
            /> */}
            {/* <a
              href="#"
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-custo-50 py-4 px-10 lg:hover:text-xl hover:shadow-md md:w-48 rounded-md"
            >
              Read More
            </a> */}
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-900"></span>
              <span className="shrink-0 px-6 font-semibold text-gray-900"><FilterVintageIcon fontSize="medium" /></span>
              <span className="h-px flex-1 bg-gray-900"></span>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
