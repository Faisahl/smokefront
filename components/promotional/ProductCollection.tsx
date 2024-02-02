import { retrieve } from "@/utils/api";
import React from "react";
import Collections from "./Collections";
import { BrandObjResponse } from "@/app/types/BrandTypes";

const ProductCollection = async ({}) => {

  const res: BrandObjResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/brands?populate[waterpipes][populate][base][populate]=image&filters[name][$eqi]=grav`
  );

  return (
    <>
      <Collections data={res.data} />
    </>
  );
};

export default ProductCollection;
