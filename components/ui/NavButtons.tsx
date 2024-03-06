"use client";

import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import ButtonUi from "./ButtonUi";

const NavButtons = () => {

  return (
    <>
      <Link href={"/basket"}>
        <ShoppingCartOutlinedIcon
          fontSize="large"
          className="m-2 hover:text-custo-50"
        />
      </Link>

      <ButtonUi 
        link='/how-to-pickup'
        styles="bg-custo-50 hidden lg:inline md:mx-2 text-white text-xl md:text-base px-6 py-2 font-medium rounded-full shadow"
        display='Order Pickup'
      />
    </>
  );
};

export default NavButtons;
