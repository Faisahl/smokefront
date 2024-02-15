"use client";

import React from "react";
import Image from "next/image";
import storefront from "../../public/storefront-min.png";
import Link from "next/link";
import swisherbundle from "../../public/swisherbundle.png";
import dmbundle from "../../public/dmbundle.png";
import dispobundle from "../../public/dispo-bundle.png";
import gummybundle from "../../public/gummybundle.png";

const Promotional = () => {
  return (
    <section className="border-t-2 dark:border-gray-700 border-custo-51 md:mt-80 lg:mt-4 my-8 text-gray-900 dark:text-white body-font">
      <div className="container lg:px-10 py-10 mx-auto grid grid-cols-1 md:grid-cols-3">
        
        <div className="mt-2 mx-2 md:mx-0 md:ml-2 md:w-60 lg:w-96 shadow border dark:border-gray-700 rounded-md p-6">
          <Image
            src={gummybundle}
            alt="Delta 8 edibles"
            // width={140}
            className="mx-auto w-28 lg:w-32 mb-4"
          />
          <h2 className=" text-lg title-font font-medium mb-2">
            CBD, Delta-8, THC-A Gummies
          </h2>
          <p className="leading-relaxed text-base mb-2">
            Ignite the essence of relaxation with our premium hookahs and
            exquisite shisha blends.
          </p>
          <Link href={"#"} className=" text-custo-51 underline items-center">
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
          </Link>
        </div>

        <div className="mt-2 mx-2 md:mx-0 md:ml-2 md:w-60 lg:w-96 shadow border dark:border-gray-700 rounded-md p-6">
          <Image
            src={dmbundle}
            alt="cigarillo link"
            // width={110}
            className="mx-auto w-20 lg:w-24 mb-4"
          />
          <h2 className=" text-lg title-font font-medium mb-2">Cigarillos</h2>
          <p className="leading-relaxed text-base mb-2">
            Indulge in luxury with our exquisite cigarillos – meticulously
            crafted for a rich, flavorful experience.
          </p>
          <Link
            href={'/api/tobacco/cigarillos'}
            className="text-custo-51 underline items-center inline"
          >
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
          </Link>
        </div>

        <div className="mt-2 mx-2 md:mx-auto md:mr-2 md:w-60 lg:w-96 shadow border dark:border-gray-700 rounded-md p-6">
          <Image
            src={dispobundle}
            alt="disposables link"
            // width={160}
            className="mx-auto w-32 mb-4"
          />
          <h2 className=" text-lg title-font font-medium mb-2">Disposables</h2>
          <p className="leading-relaxed text-base mb-2">
            Dive into a world of pure delight with our incredible lineup of
            vaporizers.
          </p>
          <Link
            href={"#"}
            className="mt-3 text-custo-51 underline  items-center"
          >
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Promotional;
