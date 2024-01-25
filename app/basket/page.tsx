'use client'

import CartView from '@/components/Cart/CartView'
import { getSS } from '@/utils/storage'
import React, { useEffect, useState } from 'react'
import { CartItemArray, CartItemType } from '../types/CartItemType'

// type Props = {}

const page: React.FC = ({  }) => {
  // const [temp, setTemp] = useState()
  let data: CartItemType[] = getSS('cart')

  useEffect(()=>{
    // data = getSS('cart');
  },[data]);
  // console.log(data)

  return (
    <CartView data={data} />
  )
}

export default page