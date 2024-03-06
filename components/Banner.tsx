"use client";

import React, { useEffect } from "react";

const Banner: React.FC = () => {
  const [closed, setClosed] = React.useState(false);
  useEffect(()=>{},[closed])

  return (
    <div className={`${closed ? 'hidden' : 'flex flex-col md:grid md:grid-cols-3'} bg-white px-6 py-2.5 text-gray-900 `}>
      <div className="hidden md:flex md:justify-start"></div>
      <div className="flex justify-center text-sm text-center">
        <p>
          <strong className="font-semibold">Grand Opening! </strong>
          <br className="lg:hidden" />Join us in celebrating with 3 for $45 Escobars! 
        </p>
      </div>
      <div className="flex justify-end">
        <button className="" onClick={()=>setClosed(true)}>x</button>
      </div>
    </div>
    // <div
    //   className={`border-b -z-50 relative flex justify-center gap-x-6 dark:bg-gray-800 px-6 py-2.5 sm:px-3.5`}
    // >
    //   <div className="text-center gap-x-4 gap-y-2">
    //     <p className="text-sm leading-6 light:text-gray-900 dark:text-white">
    //       <strong className="font-semibold">Grand Opening!</strong>
    //       <br className="md:hidden"/> Join us in celebrating with 3 for $45 Escobars!
    //     </p>
    //   </div>
    // </div>
  );
};

export default Banner;
