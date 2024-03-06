"use client";

import React, { useEffect, useState } from "react";
import { CartItemType } from "@/app/types/CartItemType";
import { setSS } from "@/utils/storage";
import {
  calculateSubTotal,
  calculateTaxes,
  calculateTotal,
} from "@/utils/utils";
import CartWrap from "./CartWrap";
import SideCart from "./SideCart";
import CartList from "./CartList";

type Props = {
  data: CartItemType[],
  setCI: (data:CartItemType[])=>void
};

const CartView: React.FC<Props> = ({ data, setCI }) => {
  const [subTotal, setSubtotal] = useState<number>(calculateSubTotal(data));
  const [taxes, setTaxes] = useState<number>(calculateTaxes(subTotal));
  const [total, setTotal] = useState<number>(0);
  
  // maybe extract this whole useeffect to its own small hook
  // useCartMonitor or something
  useEffect(() => {
    cartMonitor('cart',data); 
  }, [data,subTotal]);

  const cartMonitor = (key: string, data: CartItemType[]):void => {
      setSS(key,data);
      setSubtotal(calculateSubTotal(data));
      setTaxes(calculateTaxes(subTotal));
      setTotal(calculateTotal(subTotal, taxes));
  }

  const remove = (name:string):void => {
    const newCart:CartItemType[] = data.filter(i => i.name !== name);
    setCI(newCart);
  }

  return (
    <>
      {data.length !== 0 ? (
        <div className="container mx-auto px-4 py-6 text-gray-900 dark:text-white">
          <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4">
              <CartWrap>
                  <CartList 
                    data={data} 
                    remover={remove} 
                    setCI={setCI}
                  />
              </CartWrap>
            </div>
            <div className="lg:w-1/4">
              <SideCart 
                data={data}
                subtotal={subTotal} 
                taxes={taxes} 
                total={total} 
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-6 dark:text-white">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4">
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
            <div className="lg:w-1/4">
              <SideCart 
                subtotal={subTotal} 
                taxes={taxes} 
                total={total} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartView;
