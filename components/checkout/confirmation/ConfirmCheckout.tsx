"use client";

import { OrderType } from "@/app/types/OrderTypes";
import { getSS } from "@/utils/storage";
import React from "react";
import OrderList from "./OrderList";
import OrderTotals from "./OrderTotals";
import { affix } from "@/utils/api";
import CustInfoCard from "./CustInfoCard";

const ConfirmCheckout = ({ customer }: { customer: CustomerType }) => {
  const items: OrderType[] = getSS("checkout");
  const { orderId, cart } = items[0];
  const orderIdArr = orderId.split("-");

  const placeOrder = async () => {
    const orderObj = {
      completed: true,
      order_items: JSON.stringify(cart),
      token: orderId,
      customer_id: customer.id,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderObj),
    };
    const order = await affix(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/orders`,
      options
    );
    if (order) {
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 my-10">
          <div className="w-full  text-center">
            <p className="text-xl font-medium  text-gray-900 dark:text-white">
              Mala <span className="text-custo-50">Flor</span>
            </p>
            <p className="text-gray-900 dark:text-white">(305) 405-2055</p>
            <p className="text-gray-900 dark:text-white">
              4321 Address St, Austin, TX 42069
            </p>
            <p className="text-gray-900 dark:text-white">
              Order number:{" "}
              <span className="text-custo-50">#{`${orderIdArr[0]}`}</span>
            </p>
            <hr className="w-1/3 mx-auto my-2 border-t-2 border-custo-50" />
          </div>
          <div className="p-2">
            <CustInfoCard customer={customer} />
          </div>
          <div className="p-2">
            <OrderList items={items} />
          </div>
          <hr className="mt-20 border-t-2" />
          <div className="text-md lg:text-lg flex flex-col items-end mt-2">
            <OrderTotals items={items} />
          </div>
          <div className="flex flex-col items-center md:items-end mt-12 md:mt-6">
            <button
              className="bg-custo-50 text-white w-full md:w-auto hover:opacity-90 md:text-xl font-medium py-2 px-6 md:py-4 md:px-8 shadow-md rounded-full"
              onClick={() => placeOrder()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCheckout;
