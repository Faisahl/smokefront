"use client";

import React from "react";
import Image from "next/image";
import storefront from '../../public/storefront-min.png'
import Link from "next/link";

const Promotional = () => {
  return (
    
    <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                <Image 
                    alt="feature"
                    src={ storefront }
                    className="object-cover object-center rounded-md mx-auto"
                    width={500}
                    // height={500}
                />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center my-6">
                <div className="flex flex-col mb-2 lg:items-start items-center light:text-gray-900 dark:text-white">
                    <div className="flex-grow">
                        <h2 className=" text-lg title-font font-medium mb-3">Cigarillos</h2>
                        <p className="leading-relaxed text-base">Indulge in luxury with our exquisite cigarillos – meticulously crafted for a rich, flavorful experience that embodies sophistication.</p>
                        <Link 
                            href={'/api/tobacco/cigarillos'}
                            className="mt-3 text-custo-51 inline-flex items-center"
                        >
                            Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            <div className="flex flex-col mb-2 lg:items-start items-center my-10 light:text-gray-900 dark:text-white">
                <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3">Glass Pieces</h2>
                <p className="leading-relaxed text-base">Elevate your smoking ritual with our curated collection of glass masterpieces, where form meets function for an unparalleled and stylish experience.</p>
                <a className="mt-3 text-custo-51 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="flex flex-col mb-2 lg:items-start items-center my-10 light:text-gray-900 dark:text-white">
                <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3">Vaporizers</h2>
                <p className="leading-relaxed text-base">Dive into a world of pure delight with our incredible lineup of vaporizers.</p>
                <a className="mt-3 text-custo-51 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="flex flex-col mb-2 lg:items-start items-center my-10 light:text-gray-900 dark:text-white">
                <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3">Hookah</h2>
                <p className="leading-relaxed text-base">Ignite the essence of relaxation with our premium hookahs and exquisite shisha blends.</p>
                <a className="mt-3 text-custo-51 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
};

export default Promotional;
