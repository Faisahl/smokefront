import { ProductResponse } from '@/app/types/ProductTypes'
import ProductView from '@/components/products/ProductView'
import { retrieve } from '@/utils/api'
import React from 'react'

type Props = {}

const page = async ({params}: {params: {slug: string[]}}) => {

  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${params.slug[0]}?filters[id][$eq]=${params.slug[1]}&populate[base][populate]=image&populate=brand`
  const res: ProductResponse = await retrieve(url)
  
  return (
    <ProductView data={res.data}/>
  )
}

export default page