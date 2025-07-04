'use client'

import React, { HTMLInputTypeAttribute, useRef } from 'react'
import { CartItemType } from '@/app/types/CartItemType'
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import useShoppingCart from '@/utils/hooks/useShoppingCart';

type Props = {
  data: CartItemType[],
  setCI: (data:CartItemType[])=>void
  removeCI: (i:string)=>void
  setQty: (i: string|undefined, j: CartItemType, setter: (data:CartItemType[])=>void)=>void
}

const CartList: React.FC<Props> = ({ data, setCI, removeCI, setQty }) => {
  const qtyRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {data.map((item) => (
        <tr key={item.name}>
          <td className="py-4">
            <div className="flex items-center">
              <img
                className="h-16 w-16 mr-4"
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image}`}
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
                alt="Product image"
              />
              <span className="font-semibold">{item.name}</span>
            </div>
          </td>
          <td className="py-4 ">{`$${item.price}`}</td>
          <td className="py-4">
            <div className="flex justify-center">
              <input 
                ref={qtyRef}
                type="text" 
                name="qty" 
                id="qty" 
                // inputMode='numeric'  
                pattern='[0-9]*' 
                defaultValue={item.quantity}
                className='border rounded-md text-center w-14 px-1 text-gray-900 font-semibold'
                onBlur={()=>setQty(qtyRef.current?.value, item, setCI)}
              />
            </div>
          </td>
          <td className="py-4 px-6 text-red-500">
            <span onClick={()=>removeCI(item.name)} className="cursor-pointer">
              <RemoveShoppingCartIcon />
            </span>
          </td>
        </tr>
      ))}
    </>
  )
}

export default CartList