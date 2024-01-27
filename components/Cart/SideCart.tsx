'use client'

import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CheckoutButton from '../checkout/CheckoutButton'
import { handleAlert } from '@/utils/utils'
import { UUID } from 'crypto'
import { CartItemType } from '@/app/types/CartItemType'
import { setSS } from '@/utils/storage'

type Props = {
  subtotal: number,
  taxes: number,
  total: number,
  data?: CartItemType[]
}

const SideCart: React.FC<Props> = ({ data, subtotal, taxes, total }) => {
  const [alert, setAlert] = useState<boolean>(false);

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
        data={data}
        sub={subtotal}
        tax={taxes}
        tot={total}
        setter={setAlert}
      />
    </div>
  )
}

export default SideCart