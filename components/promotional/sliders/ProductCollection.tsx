import { retrieve } from "@/utils/api";
import React from "react";
import Collections from "./Collections";
import { BrandObjResponse } from "@/app/types/BrandTypes";
import { ProductResponse } from "@/app/types/ProductTypes";

const ProductCollection = async ({}) => {
  const sliderProd = 'waterpipes'
  const res: ProductResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${sliderProd}?filters[brand][name][$eqi]=grav&populate[base][populate]=image&populate=brand`
  );

  return (
    <>
      <Collections data={res.data} prod={sliderProd} />
    </>
  );
};

export default ProductCollection;
