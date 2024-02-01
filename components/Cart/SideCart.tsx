'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CheckoutButton from '../checkout/CheckoutButton'
import { handleAlert } from '@/utils/utils'
import { UUID } from 'crypto'
import { CartItemType } from '@/app/types/CartItemType'
import { getSS, removeSS, setSS } from '@/utils/storage'
import { OrderObjectType, OrderType } from '@/app/types/OrderTypes'
import { create } from 'domain'

type Props = {
  subtotal: number,
  taxes: number,
  total: number,
  data?: CartItemType[]
}

const SideCart: React.FC<Props> = ({ data, subtotal, taxes, total }) => {
  const [alert, setAlert] = useState<boolean>(false);
  const [order, setOrder] = useState<OrderType[]>([]);

  useEffect(()=>{
    if(!data){
      setOrder([]);
      removeSS('checkout');
    }
    if(data && data.length !== 0){
      createOrder(data);
    }
  },[data]);

  const createOrder = (items:CartItemType[]) => {
    if(items){
      let orderArr: OrderObjectType[] = [];
      items.map(item => {
        const obj: OrderObjectType = {
          itemId: item.id,
          name: item.name,
          brand: item.brand,
          price: item.price,
          sku: item.sku,
          quantity: item.quantity,
          orderSubtotal: subtotal,
          orderTaxes: taxes,
          orderTotal: total
        }
        orderArr.push(obj)
      })
      if(orderArr.length !== 0){
        const checkout: OrderType = {
          orderId: self.crypto.randomUUID(),
          cart: orderArr
        }
        setOrder([checkout]);
      }
    }
  };




  return (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{`$${subtotal}`}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Taxes</span>
        <span>{`$${taxes}`}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Total</span>
        <span className="font-semibold">{`$${total}`}</span>
      </div>
      <p className={`${alert ? 'block' : 'hidden'} text-center mr-2 text-s text-red-500 font-semibold`}>  
          Please add items to proceed
      </p>

      <CheckoutButton 
        data={order}

        setter={setAlert}
      />
    </div>
  )
}

export default SideCart