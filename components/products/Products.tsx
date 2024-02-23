"use client";

import React from "react";
import { addCart, handleAlert } from "@/utils/utils";
import { getSS, setSS } from "@/utils/storage";
import { CartItemType } from "@/app/types/CartItemType";
import CartAdder from "../Cart/CartAdder";
import { ProductObject } from "@/app/types/ProductTypes";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Products: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  const [cart, setCart] = React.useState<CartItemType[]>(() => getSS("cart") || []);
  const [inCart, setInCart] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState("");
  const p = usePathname().split('/');
  const path = p[p.length - 1];

  const handleCart = (items: CartItemType[]) => {
    setCart(items)
  }

  React.useEffect(() => {
    setSS("cart", cart);
  }, [cart]);

  const add = (meti: ProductObject) => {
    setSelected(meti.attributes.base[0].name);
    if (cart) {
      addCart(cart, handleCart, meti);
      handleAlert(setInCart, setSelected);
    }
  };

  return (
    <>
      {data.map((p: ProductObject) => {
        const { name, price, id } = p.attributes.base[0];
        const image = p.attributes.base[0].image.data[0].attributes.formats.thumbnail;
        const brand = p.attributes.brand.data.attributes.name;
        return (
          <div className="border-b-2 border-r-2 dark:border-gray-700 shadow-sm dark:shadow-md rounded-sm" key={id}>
            <Link href={`/api/product-view/${path}/${id}`}>
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                alt="Dutches"
                className="mx-auto pt-2 object-cover object-center lg:hover:opacity-75"
                width={`${image.width}`}
                height={`${image.height}`}
              />
            </Link>
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
