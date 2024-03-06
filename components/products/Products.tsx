"use client";

import React from "react";
import CartAdder from "../Cart/CartAdder";
import { ProductObject } from "@/app/types/ProductTypes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useShoppingCart from "@/utils/hooks/useShoppingCart";

const Products: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  const p = usePathname().split("/");
  const path = p[p.length - 1];
  console.log(path)
  const { addToCart, handleCart, selected } = useShoppingCart();

  return (
    <>
      {data.map((p: ProductObject) => {
        const { id } = p;
        const { name, price } = p.attributes.base[0];
        const image =
          p.attributes.base[0].image.data[0].attributes.formats.thumbnail;
        const brand = p.attributes.brand.data.attributes.name;
        return (
          <div
            className="border-b-2 border-r-2 dark:border-gray-700 shadow-sm dark:shadow-md rounded-sm"
            key={id}
          >
            <Link href={`/api/product-view/${path}/${id}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                alt="Dutches"
                className="mx-auto w-fit pt-2 object-cover object-center lg:hover:opacity-75"
                width={`${image.width}`}
                height={`${image.height}`}
              />
            </Link>
            <div className="px-4 py-3 w-72">
              <span className="tracking-wider cursor-default text-gray-400 mr-3 text-xs">
                {brand ?? "Mala Flor"}
              </span>
              <Link href={`/api/product-view/${path}/${id}`}>
                <p className="tracking-wide text-md font-medium text-black dark:text-white lg:hover:text-custo-51 truncate block capitalize">
                  {name}
                </p>
              </Link>
              <div className="flex items-center">
                <p className="text-md text-black dark:text-white cursor-default my-1">
                  {`$${price}`}
                </p>
                <div className="ml-auto">
                  <CartAdder cartSet={addToCart} item={p} selected={selected} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
