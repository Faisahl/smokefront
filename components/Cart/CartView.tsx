"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItemType } from "@/app/types/CartItemType";
import { getSS, setSS } from "@/utils/storage";
import {
  calculateSubTotal,
  calculateTaxes,
  calculateTotal,
} from "@/utils/utils";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Image from "next/image";
import CartWrap from "./CartWrap";
import SideCart from "./SideCart";

type Props = {
  data: CartItemType[],
  setter: Dispatch<SetStateAction<CartItemType[]>>
};

const CartView: React.FC<Props> = ({ data, setter }) => {
  const [subTotal, setSubtotal] = useState<number>(calculateSubTotal(data));
  const [taxes, setTaxes] = useState<number>(calculateTaxes(subTotal));
  const [total, setTotal] = useState<number>(0);
  // const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    setSS('cart',data);
    setSubtotal(calculateSubTotal(data));
    setTaxes(calculateTaxes(subTotal));
    setTotal(calculateTotal(subTotal, taxes));
  }, [data,subTotal,taxes]);

  const sourcer = (i: string) => {
    return `${process.env.NEXT_STRAPI_PUBLIC_URL}${i}`;
  };

  const remove = (name:string) => {
    const newCart:CartItemType[] = data.filter(i => i.name !== name);
    setter(newCart);
  }

  const increase = (name:string) => {
    const narr = [...data];
    
    for(let i=0; i < narr.length-1; i++){
      if(narr[i].name === name){
        console.log(narr[i].name) 
      }
    }
    setter(narr);
  }

  return (
    <React.Fragment>
      {data.length !== 0 ? (
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <CartWrap>
                {data.map((item) => (
                  <tr key={item.name} >
                    <td className="py-4">
                      <div className="flex items-center">
                        {/* <Image
                          className="h-16 w-16 mr-4"
                          src={sourcer(item.image)}
                          width={50}
                          height={50}
                          style={{ objectFit: "contain" }}
                          alt="Product image"
                        /> */}
                        <span className="font-semibold">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-4 ">{`$${item.price}`}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button
                          // onClick={() => item.quantity - 1}
                          className="border rounded-md py-2 px-4 mr-2"
                        >
                          -
                        </button>
                        <span className="text-center w-8">{item.quantity}</span>
                        <button
                          onClick={() => increase(item.name)}
                          className="border rounded-md py-2 px-4 ml-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-red-500">
                      <span onClick={()=>remove(item.name)} className="cursor-pointer">
                        <RemoveShoppingCartIcon />
                      </span>
                    </td>
                  </tr>
                ))}
              </CartWrap>
            </div>
            <div className="md:w-1/4">
              <SideCart 
                subtotal={subTotal} 
                taxes={taxes} 
                total={total} 
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <CartWrap>
                <tr>
                  <td
                    className="text-center text-2xl py-10"
                    colSpan={4}
                    rowSpan={4}
                  >
                    <span className="font-medium">
                      Add some items to checkout &#128512;
                    </span>
                  </td>
                </tr>
              </CartWrap>
            </div>
            <div className="md:w-1/4">
              <SideCart 
                subtotal={subTotal} 
                taxes={taxes} 
                total={total} 
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CartView;
