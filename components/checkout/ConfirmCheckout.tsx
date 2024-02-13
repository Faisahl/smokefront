"use client";

import { CartItemType } from "@/app/types/CartItemType";
import { OrderType } from "@/app/types/OrderTypes";
import { getSS } from "@/utils/storage";
import React, { useState } from "react";
import Custom401 from "../errors/401";

type Props = {};

const ConfirmCheckout = (props: Props) => {
  // const [arr, setArr] = useState<OrderType[]>(()=>getSS('checkout'))
  const arr: OrderType[] = getSS("checkout");
  const order = arr[0].orderId.split("-");

  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-screen">
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 mt-20">
          <div className="text-gray-900 dark:text-white flex">
            <h2 className=" text-2xl font-medium">
              Order:{" "}
              <span className="text-custo-50">
                #{`${order[0]}-${order[1]}`}
              </span>
            </h2>
            <button className="justify-end bg-custo-51 px-2 font-medium rounded-md">Place Order</button>
          </div>
          <div className="my-4 rounded-md p-2">
            <div className="flex lg:text-lg justify-between mb-1 text-gray-900 dark:text-white font-medium">
              <p className="">Product Name</p>
              <p className="justify-end">qty.</p>
            </div>
            <hr />
            {arr[0].cart.map((ci) => {
              const { brand, name, quantity, orderSubtotal } = ci;
              return (
                <p className="flex justify-between w-full text-md lg:text-lg text-gray-900 dark:text-white mt-2">
                  <span>
                    {brand} x {name}
                  </span>{" "}
                  <span className="justify-end mr-2">{quantity}</span>
                </p>
              );
            })}
          </div>
          <hr className="mt-20" />
          <div className="text-md lg:text-lg flex flex-col items-end mt-2">
            <p className=" text-gray-900 dark:text-white">
              subtotal: ${arr[0].cart[0].orderSubtotal}
            </p>
            <p className=" text-gray-900 dark:text-white">
              taxes: ${arr[0].cart[0].orderTaxes}
            </p>
            <p className=" text-gray-900 dark:text-white">
              Total: ${arr[0].cart[0].orderTotal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCheckout;
