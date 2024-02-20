import { useEffect } from "react"

const useProductFilter = (path:string, brands: string[]) => {
  useEffect(()=>{

  })

  const r = brands.map(brand => (
    `?filters[]`
  ))
  
  const res: ProductResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?populate[base][populate]=image&populate=brand`
  );


}