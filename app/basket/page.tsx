"use client";

import CartView from "@/components/Cart/CartView";
import { getSS } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import { CartItemType } from "../types/CartItemType";

const page: React.FC = ({}) => {
  let [checkoutItems, setCheckoutItems] = useState<CartItemType[]>(
    () => getSS("cart") || []
  );

  useEffect(() => {}, [checkoutItems]);

  return (
    <section className="dark:bg-gray-800 h-screen">
      <CartView 
        data={checkoutItems} 
        setter={setCheckoutItems} 
      />
    </section>
    
  )
};

export default page;
