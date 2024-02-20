"use client";

import { removeSS, setSS } from "@/utils/storage";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { handleAlert } from "@/utils/utils";
import { OrderType } from "@/app/types/OrderTypes";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Spinner from "../ui/Spinner";

type Props = {
  data?: OrderType[];
  setter: (data:boolean)=>void;
};

const CheckoutButton: React.FC<Props> = ({ data, setter }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (data && data?.length !== 0) {
      setSS("checkout", data);
    }
    if (data?.length === 0) {
      removeSS("checkout");
    }
  }, [data]);

  const beginCheckout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (data?.length === 0) {
      handleAlert(setter);
    }
    if (data && data.length !== 0) {
      setLoading(true);
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
        {loading ? (
          <Spinner height={24} width={24} />
        ) : (
          "Checkout"
        )}
      </button>
    </div>
  );
};

export default CheckoutButton;
