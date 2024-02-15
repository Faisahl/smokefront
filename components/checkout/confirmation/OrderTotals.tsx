'use client';

import { OrderType } from "@/app/types/OrderTypes";
import React from "react";

type Props = {
  items: OrderType[]
};

const OrderTotals: React.FC<Props> = ({ items }) => {
  return (
    <div className="md:text-lg text-right">
      <p className="lg:mr-2 text-gray-900 dark:text-white">
        subtotal: ${items[0].cart[0].orderSubtotal}
      </p>
      <p className="lg:mr-2 text-gray-900 dark:text-white">
        taxes: ${items[0].cart[0].orderTaxes}
      </p>
      <p className="lg:mr-2 text-gray-900 dark:text-white">
        total: ${items[0].cart[0].orderTotal}
      </p>
    </div>
  );
};

export default OrderTotals;
