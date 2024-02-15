'use client'
import { OrderType } from "@/app/types/OrderTypes";
import React from "react";

type Props = {
  items: OrderType[]
};

const OrderList: React.FC<Props> = ({ items }) => {
  return (
    <>
      <div className="flex md:text-lg justify-between mt-8 mb-1 text-gray-900 dark:text-white font-medium">
        <p className="">Product Name</p>
        <p className="justify-end">qty.</p>
      </div>
      <hr className="mb-4" />
      {items[0].cart.map((ci) => {
        const { brand, name, quantity } = ci;
        return (
          <div 
            key={ci.itemId}
            className="flex justify-between w-full text-md md:text-lg text-gray-900 dark:text-white mt-3"
          >
            <p key={ci.itemId} className="">
              <span className="md:pl-2">
                {name} | <span className="text-sm">{brand}</span>
              </span>{" "}
            </p>
            <p className="justify-end mr-2">{quantity}</p>
          </div>
        );
      })}
    </>
  );
};

export default OrderList;
