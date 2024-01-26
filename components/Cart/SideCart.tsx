'use client'

import React, { Dispatch, SetStateAction, useEffect } from 'react'

type Props = {
  subtotal: number,
  taxes: number,
  total: number
}

const SideCart: React.FC<Props> = ({ subtotal, taxes, total }) => {

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
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
      <button className="bg-custo-50 text-white py-2 px-4 rounded-lg mt-4 w-full">
        Place Order
      </button>
    </div>
  )
}

export default SideCart