"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProductObject } from "@/app/types/ProductTypes";
import Products from "./Products";

const ProductList: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  
  useEffect(()=>{

  },[data])

  return (
    <>
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 pt-24 md:ml-6 mb-5"
      >
        <h2 className="sr-only">Cigarillos</h2>
        {!data ? "Loading Products..." : <Products data={data} />}
      </section>
    </>
  );
};

export default ProductList;

function sortLowHigh(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return a.attributes.price - b.attributes.price;
  });
  return sortedItems;
}

function sortHighLow(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return b.attributes.price - a.attributes.price;
  });
  return sortedItems;
}

function sortByAlphaAZ(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    if (a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase()) {
      return -1;
    }
    if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return sortedItems;
}
