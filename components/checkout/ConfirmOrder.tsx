"use client";

import Custom404 from "@/components/errors/404";
import { isAuthenticated } from "@/utils/Auth";
import React, { useState } from "react";
import OrderForm from "./OrderForm";
import { usePathname } from "next/navigation";
// import { IsAuthContext } from "@/ctx/IsAuthContext";

const ConfirmOrder: React.FC = ({}) => {
  // const { isAuth } = useState(IsAuthContext);
  const [customer, setCustomer] = useState<CustomerType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const path = usePathname();

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 h-screen">
        <div className="w-full max-w-3xl mx-auto p-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 mt-20">
            <h2 className="text-3xl font-medium text-gray-900 dark:text-white mb-6">
              Checkout
            </h2>
            {!loading ? (
              <OrderForm 
                setter={setCustomer} 
                loader={setLoading}
                path={path}
              />
            ) : (
              <div>
                <p className="mx-auto text-gray-900 dark:text-white">
                Moving to final confirmation
                </p>
              </div>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
