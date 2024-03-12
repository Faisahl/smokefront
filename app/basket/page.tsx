"use client";

import CartView from "@/components/Cart/CartView";
import { getSS } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import { CartItemType } from "../types/CartItemType";
import useShoppingCart from "@/utils/hooks/useShoppingCart";

const page: React.FC = ({}) => {

  return (
    <section className="dark:bg-gray-800 h-screen">
      <CartView />
    </section>
  );
};

export default page;
