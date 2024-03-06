"use client";

import CartView from "@/components/Cart/CartView";
import { getSS } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import { CartItemType } from "../types/CartItemType";

const page: React.FC = ({}) => {
  const [checkoutItems, setCheckoutItems] = useState<CartItemType[]>(
    () => getSS("cart") || []
  );

  const handleCheckoutItems = (data:CartItemType[]) => {
    setCheckoutItems(data)
  }

  useEffect(() => {}, [checkoutItems]);

  return (
    <section className="dark:bg-gray-800 h-screen">
        <CartView 
          data={checkoutItems} 
          setCI={handleCheckoutItems} 
        />
    </section>
    
  )
};

export default page;
