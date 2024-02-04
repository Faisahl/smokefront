import { retrieve } from "@/utils/api";
import React from "react";
import Collections from "./Collections";
import { BrandObjResponse } from "@/app/types/BrandTypes";
import SecondCollections from "./SecondCollections";

const SecondProductCollection = async ({}) => {

  const deltares: BrandObjResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/brands?populate[delta_8s][populate][base][populate]=image&filters[name][$eqi]=cookies`
  );
  const edibleres: BrandObjResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/brands?populate[edibles][populate][base][populate]=image&filters[name][$eqi]=cookies`
  );

  // const [deltas, edibles] = await Promise.all([deltares,edibleres]);
    
  return (
    <>
      <SecondCollections 
        deltaData={deltares.data} 
        edibleData={edibleres.data}
      />
    </>
  );
};

export default SecondProductCollection;
