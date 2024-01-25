import React from 'react'
import { retrieve } from '@/utils/api'
import { ProductResponse, ProductObject, ProductType } from '@/app/types/ProductTypes'
import Products from './Products'

type Props = {
    path: string
}


const ProductList = async ({ path }: Props) => {
    const res: ProductResponse = await retrieve(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?populate[0]=image`);
    
  return (
    <section id='Products' className=" w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" >
        <h2 className="sr-only">Cigarillos</h2>
        <Products data={res.data} />
    </section>
  )
}

export default ProductList