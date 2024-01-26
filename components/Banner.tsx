"use client";

import React, { useEffect, useState } from "react";

const Banner: React.FC = () => {
  const [closed, setClosed] = useState<boolean>(false);

  useEffect(()=>{

  },[closed])

  return (
    <div
      className={`${
        !closed ? "" : "hidden"
      } -z-50 relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1`}
    >
      {/* <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#4D77FF] to-[#42C2FF] opacity-60"
          // style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
        ></div>
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#4D77FF] to-[#42C2FF] opacity-60"
          // style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
        ></div>
      </div> */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Grand Opening!</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          Join us in celebrating with 3 for $45 Escobars!
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={()=>setClosed(true)}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
    // <div className="relative inset-x-0 top-0 z-50">
    //   <div className="bg-custo-50">
    //     <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
    //       <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
    //         <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
    //           <p className="ml-3 text-center font-medium text-white">

    //             To celebrate our <span className="font-semibold">Grand Opening</span>, we're offering <span className="font-semibold">3 for $45</span> vapes!
    //           </p>
    //         </div>
    //         <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
    //           <a
    //             className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-custo-51 shadow-sm hover:bg-teal-50"
    //             href="#pricing"
    //           >
    //             Buy now
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
