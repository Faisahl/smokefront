"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItemType } from "@/app/types/CartItemType";
import { setSS } from "@/utils/storage";
import {
  calculateSubTotal,
  calculateTaxes,
  calculateTotal,
} from "@/utils/utils";
import Image from "next/image";
import CartWrap from "./CartWrap";
import SideCart from "./SideCart";
import CartList from "./CartList";
import { OrderObjectType, OrderType } from "@/app/types/OrderTypes";

type Props = {
  data: CartItemType[],
  setter: Dispatch<SetStateAction<CartItemType[]>>
};

const CartView: React.FC<Props> = ({ data, setter }) => {
  const [subTotal, setSubtotal] = useState<number>(calculateSubTotal(data));
  const [taxes, setTaxes] = useState<number>(calculateTaxes(subTotal));
  const [total, setTotal] = useState<number>(0);

  // const [order, setOrder] = useState<OrderType[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const empty: boolean = sub === 0 || tax === 0 || tot === 0;

  // const makeObj = () => {
  //   if(data){
  //     let checkoutItems:OrderObjectType[]=[];
  //       data.map(item => {
  //         const obj: OrderObjectType = {
  //           itemId: item.id,
  //           name: item.name,
  //           brand: item.brand,
  //           price: item.price,
  //           sku: item.sku,
  //           quantity: item.quantity,
  //           orderSubtotal: subTotal,
  //           orderTaxes: taxes,
  //           orderTotal: total
  //         }
  //         checkoutItems.push(obj)
  //       })
  //       // if(checkoutItems !== ){
  //         const checkout: OrderType = {
  //           orderId: self.crypto.randomUUID(),
  //           cart: checkoutItems
  //         // }
  //       }
  //       // return checkout
  //       setOrder([checkout]);
  //     } else {
  //       setOrder([])
  //       // handleAlert(setter);
  //   }
  // }

  // const placeOrder = () => {
  //   // setLoading(true);
  //   makeObj()
  //   if(order.length !== 0){
  //     setSS('checkout', order);
  //   }
  //   // setTimeout(() => {
  //   //   setLoading(false)
  //   // }, 1000);
  // }

  useEffect(() => {
    setSS('cart',data);
    setSubtotal(calculateSubTotal(data));
    setTaxes(calculateTaxes(subTotal));
    setTotal(calculateTotal(subTotal, taxes));
  }, [data,subTotal]);

  const sourcer = (i: string) => {
    return `${process.env.NEXT_STRAPI_PUBLIC_URL}${i}`;
  };

  const remove = (name:string) => {
    const newCart:CartItemType[] = data.filter(i => i.name !== name);
    setter(newCart);
  }

  return (
    <React.Fragment>
      {data.length !== 0 ? (
        <div className="container mx-auto px-4 py-6 dark:text-white">
          <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <CartWrap>
                {/* <tbody className="dark:shadow-2xl"> */}
                  <CartList 
                    data={data} 
                    remover={remove} 
                    setter={setter}
                  />
                {/* </tbody> */}
              </CartWrap>
            </div>
            <div className="md:w-1/4">
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
