"use client";

import { ProductObject } from "@/app/types/ProductTypes";
import React from "react";
import ProductRow from "./ProductRow";

const ProductView: React.FC<{ data: ProductObject[] }> = ({ data }) => {
  return (
    <div className="h-screen bg-white dark:bg-gray-800">
      <div className="container mx-auto pt-10 bg-white dark:bg-gray-800">
        <ProductRow product={data[0]} />
      </div>
    </div>
  );
};

export default ProductView;
