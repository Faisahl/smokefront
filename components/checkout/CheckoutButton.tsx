'use client'

import { CartItemType } from '@/app/types/CartItemType'
import { getSS, setSS } from '@/utils/storage'
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { handleAlert } from '@/utils/utils'
import { OrderType, OrderObjectType } from '@/app/types/OrderTypes'
import { isAuthenticated } from '@/utils/Auth'

type Props = {
  data?: CartItemType[],
  sub: number,
  tax: number,
  tot: number,
  setter: Dispatch<SetStateAction<boolean>>
}

const CheckoutButton: React.FC<Props> = ({  data, sub, tax, tot, setter }) => {
  const [order, setOrder] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const empty: boolean = sub === 0 || tax === 0 || tot === 0;

  const makeObj = () => {
    if(sub === 0 || tax === 0 || tot === 0){
      handleAlert(setter);
    }
    if(data){
      let checkoutItems:OrderObjectType[]=[];
        data.map(item => {
          const obj: OrderObjectType = {
            itemId: item.id,
            name: item.name,
            brand: item.brand,
            price: item.price,
            sku: item.sku,
            quantity: item.quantity,
            orderSubtotal: sub,
            orderTaxes: tax,
            orderTotal: tot
          }
          checkoutItems.push(obj)
        })
        const checkout: OrderType = {
          orderId: self.crypto.randomUUID(),
          cart: checkoutItems
        }
        setOrder([checkout]);
      } else {
        handleAlert(setter);
    }
  }

  const placeOrder = () => {
    setLoading(true);
    makeObj()
    if(order.length !== 0){
      setSS('checkout', order);
    }
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  return (
    <div className="flex">
      <Link 
        href={order.length !== 0 ? `/basket/checkout/${order[0].orderId}` : ''}
        onClick={()=>placeOrder()} 
        className="text-center bg-custo-50 text-white py-2 px-4 rounded-lg mt-4 w-full"
      >
        {loading 
        ? 
        <svg className='animate-spin mx-auto font-semibold' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 21a9 9 0 0 1-7.441-3.949 9 9 0 0 1-.915-8.375 9 9 0 0 1 6.414-5.462A9 9 0 0 1 18.18 5.45a.75.75 0 0 1 0 1.06.74.74 0 0 1-.53.224.74.74 0 0 1-.53-.224 7.51 7.51 0 0 0-9.456-.654A7.51 7.51 0 0 0 5.1 14.982a7.51 7.51 0 0 0 8.413 4.367A7.51 7.51 0 0 0 19.5 12a.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75 9 9 0 0 1-9 9z" fill="#FBFD8A"/>
        </svg>  
        : 
        'Checkout'}
      </Link>
    </div>
  )
}

export default CheckoutButton