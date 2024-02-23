"use client";

import { ProductObject } from "@/app/types/ProductTypes";
import useShoppingCart from "@/utils/hooks/useShoppingCart";
import React from "react";

const ProductView: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  const { name, price, description, image } = data[0].attributes.base[0];
  const brand = data[0].attributes.brand.data.attributes.name;
  const imag = image.data[0].attributes.formats.medium;

  const { addToCart, inCart } = useShoppingCart()

  return (
    <div className="h-screen bg-white dark:bg-gray-800">
      <div className="container mx-auto mt-10 bg-white dark:bg-gray-800">
        <div className="flex flex-col md:flex-row gap-x-4">
          <div className="lg:w-2/5 bg-gray-50 border shadow-md">
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imag.url}`}
              alt={name}
              className="mx-auto w-1/5 md:w-1/4 my-6"
            />
          </div>
          <div className="lg:w-3/5 border bg-gray-50 shadow-md">
            <div className="p-6 text-gray-900 dark:text-white">
              <div id="prodHead" className="flex justify-between">
                <h2 className="font-semibold text-2xl tracking-wide">{name}</h2>
                <h2 className="font-medium text-xl tracking-wide">${price}</h2>
              </div>
              <div id="prodInfoLabels" className="my-6">
                <p className="">
                  <span className="font-medium">Brand:</span>{" "}
                  <span className="">{brand}</span>
                </p>
                <p className=" mt-1">
                  <span className="font-medium">Color:</span>{" "}
                  <span className="">{}</span>
                </p>
                <p className=" mt-1">
                  <span className="font-medium">Weight:</span>{" "}
                  <span className="">{}</span>
                </p>
                <p className=" mt-1">
                  <span className="font-medium">Height:</span>{" "}
                  <span className="">{}</span>
                </p>
                <p className=" mt-1">
                  <span className="font-medium">Width:</span>{" "}
                  <span className="">{}</span>
                </p>
              </div>
              <div id="pridDesc" className="mx-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quod cum, pariatur necessitatibus sunt expedita molestiae quisquam facilis fugiat aut dolores mollitia ut suscipit iure quibusdam minus cupiditate nisi ab.
              </div>
            </div>
            <div id="prodButton" className="flex flex-col mb-6">
              <button onClick={()=>addToCart(data[0])} className="shadow-md mx-auto text-white bg-custo-51 p-3 w-1/2 rounded-md font-semibold text-xl tracking-wide hover:lg:opacity-90">
                Add to Cart
              </button>
              <h3 className={`${inCart ? 'block' : 'hidden'} mx-auto font-bold text-lg text-green-500`}>Item added!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
