"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProductComponent, ProductObject } from "@/app/types/ProductTypes";
import { addCart, handleAlert } from "@/utils/utils";
import { getSS, setSS } from "@/utils/storage";
import { CartItemType } from "@/app/types/CartItemType";
import CartAdder from "../Cart/CartAdder";

const Products: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  const [cart, setCart] = useState<CartItemType[]>(() => getSS("cart") || []);
  const [inCart, setInCart] = useState<boolean>(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSS("cart", cart);
  }, [cart]);

  const add = (meti: ProductObject) => {
    setSelected(meti.attributes.base[0].name);
    if (cart) {
      addCart(cart, setCart, meti);
      handleAlert(setInCart, setSelected);
    }
  };

  return (
    <>
      {data.map((p: ProductObject) => {
        const { name, price, sku, id } = p.attributes.base[0];
        const image = p.attributes.base[0].image.data[0].attributes.formats.thumbnail;
        const brand = p.attributes.brand.data.attributes.name;
        return (
          <div key={id}>
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
              alt="Dutches"
              className="mx-auto object-cover object-center lg:hover:opacity-75"
              width={`${image.width}`}
              height={`${image.height}`}
            />
            <div className="px-4 py-3 w-72">
              <span className="tracking-wider cursor-default text-gray-400 mr-3 text-xs">
                {brand ?? "Mala Flor"}
              </span>
              <p className="tracking-wide cursor-pointer text-md font-medium text-black dark:text-white truncate block capitalize">
                {name}
              </p>
              <div className="flex items-center">
                <p className="text-md text-black dark:text-white cursor-default my-1">
                  {`$${price}`}
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
