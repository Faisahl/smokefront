"use client";

import { BrandObjResponse, BrandObjType } from "@/app/types/BrandTypes";
import { ProductObject } from "@/app/types/ProductTypes";
import Image from "next/image";
import React from "react";

// type Props = {}

const Collections = ({ data }: { data: BrandObjType[] }) => {
  const items: ProductObject[] = data[0].attributes.waterpipes.data

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-medium text-gray-900 dark:text-white lg:hover:text-custo-51 sm:text-3xl">
            GRAV Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500 dark:text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const image = item.attributes.base[0].image.data[0].attributes.formats.medium;
            return (
              <li className="">
                <a href="#" className="group block overflow-hidden">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                    alt="Grav Glass"
                    // fill={true}
                    width={300}
                    height={300}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white dark:bg-gray-800 pt-3">
                    <h3 className="font-medium text-md text-gray-700 dark:text-white">
                      {item.attributes.base[0].name}
                    </h3>

                    <p className="my-1">
                      <span className="sr-only"> Regular Price </span>

                      <span className="tracking-wider text-gray-900 dark:text-white">
                        {" "}
                        {`$${item.attributes.base[0].price}`}{" "}
                      </span>
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Collections;
