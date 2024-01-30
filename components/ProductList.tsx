'use client'

import React, { useEffect, useRef, useState } from "react";
import { ProductObject } from "@/app/types/ProductTypes";
import Products from "./Products";

const ProductList: React.FC<{data:ProductObject[]}> = ({data}) => {
  const [value, setValue] = useState<string>('');
  const[brand,setBrand] = useState<string>('')
  const priceRef = useRef<HTMLSelectElement>(null);
  const brandRef = useRef<HTMLSelectElement>(null);
  const [sortedItems, setSortedItems] = useState<ProductObject[]>(data);

  useEffect(()=>{
    switcher(value);
    filterBrand(brand, sortedItems);
  },[value])

  function switcher(key:string) {
    switch (value) {
      case "lowtohigh":
        setSortedItems(sortLowHigh(data))
        break;
      case "hightolow":
        setSortedItems(sortHighLow(data))
        break;   
      case 'atoz':
        setSortedItems(sortByAlphaAZ(data))
    }
  }

  const filterBrand = (brand:string, data:ProductObject[]) => {
    const branded: ProductObject[] = data.filter(item => item.attributes.brandName === brand);
    // setSortedItems(branded);
    return branded;
  }
  
  function brandList(data:ProductObject[]) {
    let arr:string[] = []
    data.forEach(i => arr.push(i.attributes.brandName));
    return arr;
  }

  const getSortValue = () => {
    if(priceRef.current && priceRef.current.value !== 'nosort'){
        setValue(priceRef.current.value);
    }
  };

  const getBrandValue = () => {
    if(brandRef.current && brandRef.current.value !== 'nosort'){
        setBrand(brandRef.current.value);
    }
  };

  const br = brandList(data);
  const brands = new Set(br);
  return (
    <>
      <section
        id="filtersort"
        className="w-fit mx-auto h-fit py-2 border-solid border-2 border-green-55"
      >
        <select 
          ref={brandRef}
          defaultValue={'nosort'} 
          onChange={()=>getSortValue()} 
          name="productsort" 
          className="p-2 mx-1 rounded-sm"
        >
          <option value="nosort">Brands:</option>
          {[...brands].map((brand:any) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select 
          ref={priceRef}
          defaultValue={'nosort'} 
          onChange={()=>getSortValue()} 
          name="productsort" 
          className="p-2 mx-1 rounded-sm"
        >
          <option value="nosort">Sort by:</option>
          <option value="lowtohigh">Price low to high</option>
          <option value="hightolow">Price high to low</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
        </select>
      </section>
    
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 mb-5"
      >
        <h2 className="sr-only">Cigarillos</h2>
        <Products data={!sortedItems ? data : sortedItems} />
      </section>
    </>
  );
};

export default ProductList;

function sortLowHigh(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].toSorted((a, b) => {
    return a.attributes.price - b.attributes.price
  });
  return sortedItems;
}

function sortHighLow(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return b.attributes.price - a.attributes.price
  })
  return sortedItems;
}

function sortByAlphaAZ(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedBooks:ProductObject[] = [...unsortedItems].sort((a,b) => {
    if(a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase()){
      return -1;
    } 
    if(a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()){
      return 1;
    }
    return 0;
  });
  return sortedBooks;
}

function filterBrand() {

}