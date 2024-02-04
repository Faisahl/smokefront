"use client";

import React from "react";
import Image from "next/image";
import storefront from "../../public/storefront-min.png";
import Link from "next/link";
import swisherbundle from '../../public/swisherbundle.png'
import dmbundle from '../../public/dmbundle.png'
import dispobundle from '../../public/dispo-bundle.png'
import gummybundle from '../../public/gummybundle.png'

const Promotional = () => {
  return (
    <section className="border-t-4 md:mt-80 lg:mt-4 border-double border-custo-51 my-8 text-gray-900 dark:text-white body-font">
      <div className="container px-14 py-10 mx-auto grid grid-cols-1 md:grid-cols-2">
        
        <div className="md:mb-2 md:mr-1 shadow border-2 border-gray-700 rounded-md p-6">
          {/* <div className="w-fit mx-auto"> */}
            <Image 
              src={swisherbundle}
              alt="swisher bundle"
              width='100'
              className="mx-auto my-4"
            />
          {/* </div> */}
          <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">Cigarillos</h2>
          <p className="leading-relaxed text-base mb-2">
            Indulge in luxury with our exquisite cigarillos – meticulously
            crafted for a rich, flavorful experience that embodies
            sophistication.
          </p>
          <Link
            href={"/api/tobacco/cigarillos"}
            className="text-custo-51 underline items-center"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 inline ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <div className="mt-2 md:mb-2 md:ml-1 shadow border-2 border-gray-700 rounded-md p-6">
          <Image 
            src={dmbundle}
            alt="swisher bundle"
            width={110}
            className="mx-auto my-4"
          />
          <h2 className=" text-lg title-font font-medium mb-2">Glass Pieces</h2>
          <p className="leading-relaxed text-base mb-2">
            Elevate your smoking ritual with our curated collection of glass
            masterpieces, where form meets function for an unparalleled and
            stylish experience.
          </p>
          <a className="text-custo-51 underline items-center inline">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1 inline"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <div className="mt-2 md:mr-1 shadow border-2 border-gray-700 rounded-md p-6">
          <Image 
            src={dispobundle}
            alt="swisher bundle"
            width={160}
            className="mx-auto my-4"
          />
          <h2 className=" text-lg title-font font-medium mb-2">Disposables</h2>
          <p className="leading-relaxed text-base mb-2">
            Dive into a world of pure delight with our incredible lineup of
            vaporizers.
          </p>
          <a className="mt-3 text-custo-51 underline  items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1 inline"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <div className="mt-2 md:ml-1 shadow border-2 border-gray-700 rounded-md p-6">
          <Image 
            src={gummybundle}
            alt="CBD gummy bundle"
            width={140}
            className="mx-auto my-4"
          />
          <h2 className=" text-lg title-font font-medium mb-2">CBD, Delta-8, THC-A Gummies</h2>
          <p className="leading-relaxed text-base mb-2">
            Ignite the essence of relaxation with our premium hookahs and
            exquisite shisha blends.
          </p>
          <a className="mt-3 text-custo-51 underline items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1 inline"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promotional;
