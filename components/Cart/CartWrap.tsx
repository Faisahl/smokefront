"use client";

import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CartWrap: React.FC<Props> = ({ children }) => {
  return (
    <div className="rounded-lg shadow-md p-6 mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left font-semibold">Product</th>
            <th className="text-left hidden md:inline-table font-semibold">
              Price
            </th>
            <th className="text-left font-semibold">Quantity</th>
            <th className="text-left font-semibold">Remove?</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default CartWrap;
