"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProductObject } from "@/app/types/ProductTypes";
import { addCart, handleAlert } from "@/utils/utils";
import { getSS, setSS } from "@/utils/storage";
import { CartItemType } from "@/app/types/CartItemType";
import CartAdder from "./Cart/CartAdder";

const Products: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  const [cart, setCart] = useState<CartItemType[]>(() => getSS("cart") || []);
  const [inCart, setInCart] = useState<boolean>(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSS("cart", cart);
  }, [data, cart]);

  const add = (meti: ProductObject) => {
    setSelected(meti.attributes.name);
    if (cart) {
      addCart(cart, setCart, meti);
      handleAlert(setInCart, setSelected);
    }
  };

  return (
    <>
      {data.map((p: ProductObject) => {
        const { name, price, sku, brandName } = p.attributes;
        // const image = p.attributes.image.data[0].attributes.formats.thumbnail;
        return (
          <div key={p.id} className="">
            {/* <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
              alt="Dutches"
              className="mx-auto object-cover object-center lg:hover:opacity-75"
              width={`${image.width}px`}
              height={`${image.height}px`}
            /> */}
            <div className="px-4 py-3 w-72">
              <span className="cursor-default text-gray-400 mr-3 uppercase text-xs">
                {brandName ? brandName : "Mala Flor"}
              </span>
              <p className="cursor-pointer text-lg font-bold text-black dark:text-white truncate block capitalize">
                {name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black dark:text-white cursor-default my-2">
                  {price}
                </p>
                <div className="ml-auto">
                  <CartAdder setter={add} item={p} selected={selected} />
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
