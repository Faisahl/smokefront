"use client";

import { removeSS, setSS } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import { handleAlert } from "@/utils/utils";
import { OrderType } from "@/app/types/OrderTypes";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Spinner from "../ui/Spinner";

type Props = {
  data?: OrderType[];
  setter: (data: boolean) => void;
};

const CheckoutButton: React.FC<Props> = ({ data, setter }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const beginCheckout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (data?.length === 0) {
      handleAlert(setter);
    }
    if (data && data.length !== 0) {
      setLoading(true);
      setSS("checkout", data);
      setCookie("isAuth", String(true));
      setTimeout(() => {
        setLoading(false);
        router.push(`/basket/checkout/customer-contact`);
      }, 750);
    }
  };

  return (
    <div className="flex">
      <button
        onClick={(e) => beginCheckout(e)}
        className="bg-custo-50 text-white hover:opacity-90 shadow-sm font-medium md:text-lg text-center py-2 px-4 rounded-full mt-4 w-full"
      >
        {loading ? <Spinner height={24} width={24} fill="#fff" /> : "Checkout"}
      </button>
    </div>
  );
};

export default CheckoutButton;
