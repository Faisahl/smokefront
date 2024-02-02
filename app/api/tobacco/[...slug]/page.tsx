import React from 'react'
import ProductContainer from '@/components/products/ProductContainer'
import { ProductResponse } from '@/app/types/ProductTypes';
import { retrieve } from '@/utils/api';

const page = async ({params}: {params: {slug: string}}) => {
  const res: ProductResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${params.slug}?populate[base][populate]=image&populate=brand`
  );
  return (
    <section className='bg-white dark:bg-gray-800 h-screen'>
      <ProductContainer data={res.data} />
    </section>
  )
}

export default page