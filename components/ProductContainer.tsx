import { ProductResponse } from '@/app/types/ProductTypes';
import { retrieve } from '@/utils/api';
import React from 'react'
import ProductList from './ProductList';

const ProductContainer: React.FC<{ path: string }> = async ({ path }) => {
  const res: ProductResponse = await retrieve(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}?populate[0]=image`
  );
  return (
    <ProductList data={res.data} />
  )
}

export default ProductContainer