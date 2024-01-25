"use client";

import React, { useEffect, useState } from "react";
import { CartItemType } from "@/app/types/CartItemType";
import { getSS } from "@/utils/storage";
import {
  calculateSubTotal,
  calculateTaxes,
  calculateTotal,
} from "@/utils/utils";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Image from "next/image";
import CartWrap from "./CartWrap";

type Props = {
  data: CartItemType[];
};

const CartView: React.FC<Props> = ({ data }) => {
  const [subTotal, setSubtotal] = useState(calculateSubTotal(data));
  let taxes: number = calculateTaxes(subTotal);
  let total: number = calculateTotal(subTotal, taxes);
  const empty: boolean = data?.length === 0;

  let foo = data !== null;

  useEffect(() => {
    console.log(data);
  }, [subTotal, data]);

  const sourcer = (i: string) => {
    return `${process.env.NEXT_STRAPI_PUBLIC_URL}${i}`;
  };

  return (
    <>
      {data !== null ? (
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <CartWrap>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        <Image
                          className="h-16 w-16 mr-4"
                          src={""}
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
                          onClick={() => item.quantity - 1}
                          className="border rounded-md py-2 px-4 mr-2"
                        >
                          -
                        </button>
                        <span className="text-center w-8">{item.quantity}</span>
                        <button
                          onClick={() => item.quantity + 1}
                          className="border rounded-md py-2 px-4 ml-2"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-red-500">
                      <span className="cursor-pointer">
                        <RemoveShoppingCartIcon />
                      </span>
                    </td>
                  </tr>
                ))}
              </CartWrap>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{`$${subTotal}`}</span>
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
                  <span className="font-semibold">{`$${total.toFixed(
                    2
                  )}`}</span>
                </div>
                <button className="bg-custo-50 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Place Order
                </button>
              </div>
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
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{`$${subTotal}`}</span>
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
                  <span className="font-semibold">{`$${total.toFixed(
                    2
                  )}`}</span>
                </div>
                <button className="bg-custo-50 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartView;

// export const switcher = (items:CartItemType[]) => {
//   let r:boolean = !items;
//   switch(!r){
//     case items !== null:
//       return (

//       )
//   }
// }
