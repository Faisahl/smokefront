'use client'

import React from 'react'
import ProductList from '@/components/ProductList';
import { usePathname } from 'next/navigation';

type Props = {}

const page: React.FC = ({  }) => {
    const p:string = usePathname();
    const pa:string[] = p.split('/');
    const path = pa[pa.length-1]

  return (
    <ProductList path={path} />
  )
}

export default page