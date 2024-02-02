"use client"

import React, { useEffect, useRef, useState } from "react";
import { ProductComponent, ProductObject } from "@/app/types/ProductTypes";
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
