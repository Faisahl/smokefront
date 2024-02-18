'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { CartItemType } from '@/app/types/CartItemType'
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { updateQuantity } from '@/utils/utils';

type Props = {
  data: CartItemType[],
  remover: (arg: string)=>void,
  setter: (data:CartItemType[])=>void
}

const CartList: React.FC<Props> = ({ data, remover, setter }) => {
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
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity('minus',item,data,setter)}
                className="border rounded-md py-2 px-4 mr-2"
              >
                -
              </button>
              <span className="text-center w-8">{item.quantity}</span>
              <button
                onClick={() => updateQuantity('plus',item,data,setter)}
                className="border rounded-md py-2 px-4 ml-2"
              >
                +
              </button>
            </div>
          </td>
          <td className="py-4 px-6 text-red-500">
            <span onClick={()=>remover(item.name)} className="cursor-pointer">
              <RemoveShoppingCartIcon />
            </span>
          </td>
        </tr>
      ))}
    </>
  )
}

export default CartList