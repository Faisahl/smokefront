import React from 'react'
import ProductContainer from '@/components/products/ProductContainer';

type Props = {}

const page = ({params}: {params: {slug: string}}) => {
  return (
    <ProductContainer path={params.slug} />
  )
}

export default page