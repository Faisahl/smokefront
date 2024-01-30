'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import ProductList from '@/components/ProductList'
import ProductContainer from '@/components/ProductContainer'

// type Props = {}

const page: React.FC = ({}) => {
  const p:string = usePathname();
  const pa:string[] = p.split('/');
  const path = pa[pa.length-1]
  
  return (
    <section className='bg-white dark:bg-gray-800 h-screen'>
      <ProductContainer path={path} />
    </section>
  )
}

export default page