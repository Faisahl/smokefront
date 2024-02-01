"use client"

import { ProductObject } from "@/app/types/ProductTypes";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

const ProductContainer = ({ data }: { data: ProductObject[] }) => {
  const [sortedItems, setSortedItems] = useState<ProductObject[]>(data);
  const [value, setValue] = useState<string>("nosort");
  const [brand, setBrand] = useState<string>("");

  useEffect(() => {
    sortSwitcher(value);
    if (brand !== "") {
      filterBrand(brand, data);
    } 
  }, [value, brand]);

  function sortSwitcher(key: string) {
    switch (key) {
      case "lowtohigh":
        setSortedItems(sortLowHigh(data));
        break;
      case "hightolow":
        setSortedItems(sortHighLow(data));
        break;
      case "AtoZ":
        setSortedItems(sortByAlphaAZ(data));
        break;
    }
  }

  const filterBrand = (key: string, data: ProductObject[]) => {
    setSortedItems(
      data.filter((i) => i.attributes.brand?.data.attributes.name === key)
    );
  };

  function brandList(data: ProductObject[]) {
    let arr: string[] = [];
    data.forEach((i) => {
      if (i.attributes.brand) {
        arr.push(i.attributes.brand.data.attributes.name);
      }
    });
    return [...new Set(arr)];
  }

  const brands = brandList(data);

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 pt-20 m-2">
          <Sidebar 
            setValue={setValue} 
            setBrand={setBrand} 
            brands={brands}
          />
        </div>
        <div className="md:w-3/4">
          <ProductList data={sortedItems} />
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;

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
