"use client";

import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";

const Button = () => {

  return (
    <>
      <Link href={"/basket"}>
        <ShoppingCartOutlinedIcon
          fontSize="large"
          className="m-2 hover:text-custo-50"
        />
      </Link>

      <button className="bg-custo-50 text-xl md:text-base text-white md:mx-2 px-6 py-2 rounded-full shadow">
        <Link
          href={'/how-to-pickup'}
        >
          Order Pickup
        </Link> 
      </button>
    </>
  );
};

export default Button;
