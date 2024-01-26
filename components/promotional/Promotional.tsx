"use client";

import Image from "next/image";
import React from "react";

const Promotional = () => {
  return (
    
    <div className="text-center p-8">
    <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image 
            alt={'papers'}
            src={'/papes-min.jpg'}
            width={400}
            height={240}
          />
            {/* <img src="https://picsum.photos/400/240" alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Simple integration
            </h3>
            <p className="sm:text-lg mt-6">
                Use the LocaleData gem to download translations directly into your Ruby on Rails
                projects using the provided command line interface. Just create a project and follow
                the step-by-step instructions.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left ">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image 
            alt={'papers'}
            src={'/buds-min.jpg'}
            width={400}
            height={240}
          />
            {/* <img src="https://picsum.photos/400/240" alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6">
                All LocaleData projects are private. Each project can have multiple collaborators
                with different roles and access permissions. You determine who can see and edit
                your translations. Just add admins, developers, translators and configure their
                access rights.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left  ">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
          <Image 
            alt={'papers'}
            src={'/tray-min.jpg'}
            width={400}
            height={240}
          />
            {/* <img src="https://picsum.photos/400/240" alt="editor" className="inline-block rounded shadow-lg border border-merino-400"/> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                No more syntax errors
            </h3>
            <p className="sm:text-lg mt-6">
                LocaleData provides you easy import/export functions for your YAML files.
                Use a simple editor with many predefined languages to manage your locales.
                LocaleData also supports multiple translation types, such as simple text, plural forms,
                numbers, booleans, symbols, arrays, ...
            </p>
        </div>
    </div>

    {/* <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Bulk editing
            </h3>
            <p className="sm:text-lg mt-6">
                Do you need to change the path of many translation keys at once? No problem, just
                use the bulk editing feature and enjoy the results.
            </p>
        </div>
    </div> */}

</div>



    // <div className="">
    //   <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
    //     <div className="space-y-16">
    //       <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
    //         <div className="w-full md:w-1/4 space-y-4">
    //           <h3 className="font-medium text-2xl text-custo-51">
    //             3-For-1 Papers
    //           </h3>
    //           <p>
    //             Elevate your smoking experience without breaking the bank, and
    //             roll up with style and affordability in every puff. For a
    //             limited time, indulge in the pleasure of three packs of premium
    //             rolling papers for just $1.
    //           </p>
    //         </div>
    //         {/* svg in this div */}
    //         <div className="mx-10 md:mx-auto w-1/2 md:w-1/3">
    //           <Image
    //             alt="paper deal"
    //             src={"/papes-min.jpg"}
    //             // fill={true}
    //             width={270}
    //             height={250}
    //           />
    //         </div>
    //       </div>
    //       <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
    //         <div className="w-full md:w-1/4 space-y-4">
    //           <h3 className="font-medium text-2xl text-custo-51">
    //             CBD + Kava + THC-A Drinks
    //           </h3>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //           </p>
    //         </div>
    //         {/* svg in this div */}
    //         <div className="mx-10 md:mx-auto w-1/2 md:w-1/3">
    //           <Image
    //             alt="paper deal"
    //             src={"/buds-min.jpg"}
    //             // fill={true}
    //             width={350}
    //             height={250}
    //           />
    //         </div>
    //       </div>
    //       <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
    //         <div className="w-full md:w-1/4 space-y-4">
    //           <h3 className="font-medium text-2xl text-custo-51">
    //             THC-A + CBD Edibles
    //           </h3>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //           </p>
    //         </div>
    //         {/* svg in this div */}
    //         <div className="mx-10 md:mx-auto w-1/2 md:w-1/3">
    //           <Image
    //             alt="paper deal"
    //             src={"/tray-min.jpg"}
    //             // fill={true}
    //             width={350}
    //             height={250}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Promotional;
