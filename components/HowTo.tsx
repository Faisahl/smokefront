"use client";

import React from "react";
import Image from "next/image";
import arrow from "@/public/how_to_arrow.png";
import Link from "next/link";

type Props = {};

const HowTo = (props: Props) => {
  return (
    <div className="max-w-screen-sm lg:max-w-screen-md text-gray-900 bg-white py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-semibold text-lg">STEPS</p>
        <p className="mt-2 font-bold text-3xl">
          How it <span className="text-custo-50">Works?</span>
        </p>
      </div>

      <div className=" flex flex-col w-96 mx-auto text-center p-4 mt-10 border-4 border-custo-51 shadow rounded-lg">
        <p className="w-fit tracking-wide mx-auto font-semibold text-xl block border-b-4 border-custo-50">
          Step 1
        </p>
        <p className="font-regular text-xl my-4 p-4">
          Browse through the available products and select the items you wish to
          purchase.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Image src={arrow} alt="next step" width={80} />
      </div>

      <div className="flex flex-col w-96 mx-auto text-center p-4 mt-10 border-4 border-custo-51 shadow rounded-lg">
        <p className="w-fit tracking-wide mx-auto font-semibold text-xl block border-b-4 border-custo-50">
          Step 2
        </p>
        <p className="font-regular text-xl my-4 p-4">
          Proceed to the checkout page where you will be prompted to provide
          contact information such as your name, phone number, and email
          address. This information is used <span className="font-bold">only to notify you when pickup is ready.</span> 
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Image
          src={arrow}
          alt="next step"
          width={80}
          // height={20}
        />
      </div>

      <div className="flex flex-col w-96 mx-auto text-center p-4 mt-10 border-4 border-custo-51 shadow rounded-lg">
        <p className="w-fit tracking-wide mx-auto font-semibold text-xl block border-b-4 border-custo-50">
          Step 3
        </p>
        <p className="font-regular text-xl my-4 p-4">
          Upon arrival, inform the staff that you are there to pick up your
          online order. They will retrieve your items and present them for
          verification. You can then pay for your purchase, and you're all set!
        </p>
        <button className="w-full md:w-48 mx-auto px-8 py-4 bg-custo-50 shadow-md hover:opacity-90 text-xl font-medium rounded-full text-white">
          <Link href={"/"}>Get Started</Link>
        </button>
      </div>

      {/* <div className='flex flex-col w-fit mx-auto my-10'>
        <button className='px-8 py-4 bg-custo-50 shadow-md hover:opacity-90 text-xl font-medium rounded-full text-white'>
          <Link 
            href={'/'}
          >
            Get Started
          </Link>
        </button>
      </div> */}
    </div>
  );
};

export default HowTo;
