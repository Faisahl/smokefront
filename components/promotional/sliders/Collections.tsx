"use client";

import React, { useCallback } from "react";
import { BrandObjType } from "@/app/types/BrandTypes";
import { ProductObject } from "@/app/types/ProductTypes";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Collections = ({ data }: { data: BrandObjType[] }) => {
  const items: ProductObject[] = data[0].attributes.waterpipes.data;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    slidesToScroll: "auto",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <div className="mx-auto my-2 md:my-12 lg:my-4 max-w-screen-xl px-4 py-8 sm:px-6 sm:pt-12 lg:px-8">
        <header>
          <h2 className="tracking-wide text-xl pb-1 border-b-4 border-custo-51 font-medium text-gray-900 dark:text-white sm:text-3xl  shadow-sm">
            GRAV Collection
          </h2>
        </header>
        <div className="embla relative mt-6">
          <div className="embla_viewport overflow-hidden" ref={emblaRef}>
            <div className="embla_container flex">
              {items.map((item) => {
                const image =
                  item.attributes.base[0].image.data[0].attributes.formats
                    .medium;
                return (
                  <div
                    key={item.attributes.base[0].name}
                    className="embla_slider mx-2 min-w-0 grow-0 shrink-0 basis-1/2 md:basis-1/3 lg:basis-1/4 "
                    // style={{ minWidth: 0, flex: "0 0 25%" }}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                      alt="Grav piece"
                      className="mx-auto md:mx-0"
                      width={300}
                    />
                    <div className=" bg-white dark:bg-gray-800 pt-3">
                      <h3 className="font-medium text-md text-gray-900 dark:text-white">
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
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={scrollPrev}
              className="embla__prev hidden lg:block relative bg-custo-51 text-white p-3 shadow-sm bottom-72 right-20 rounded-full my-2"
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </button>
            <button
              onClick={scrollNext}
              className="embla__next hidden lg:block relative bg-custo-51 text-white p-3 shadow-sm bottom-72 left-20 rounded-full my-2"
            >
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
