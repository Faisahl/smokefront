"use client";

import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { Badge } from "@mui/material";
import { CartItemType } from "@/app/types/CartItemType";
import { getSS } from "@/utils/storage";

const Button = () => {
  const cart: CartItemType[] = getSS("cart");
  const [leng, setLeng] = useState(cart ? cart.length : 0);

  useEffect(() => {}, [cart]);

  return (
    <>
      <Link href={"/basket"}>
        <ShoppingCartOutlinedIcon
          fontSize="large"
          className="m-2 hover:text-custo-50"
        />
      </Link>

      <button className="bg-custo-50 text-xl md:text-base text-white md:mx-2 px-6 py-2 rounded-full shadow">
        Order Pickup
      </button>
    </>
  );
};

export default Button;
