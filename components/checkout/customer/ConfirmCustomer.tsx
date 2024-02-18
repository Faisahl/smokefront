"use client";

import React, { useState } from "react";
import CustomerInfoForm from "./CustomerInfoForm";
import CustomerSubmitBtn from "./CustomerSubmitBtn";
import { useNavigationMonitor } from "@/utils/hooks/useNavigationMonitor";
import useBeforeUnload from "@/utils/hooks/useBeforeUnload";
import { useLeavePageConfirmation } from "@/utils/hooks/usePageUnloadGuard";


const ConfirmCustomer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dirty, setDirty] = useState<boolean>(false);
 
  const handleLoading = (data:boolean) => {
    setLoading(data)
  }

  const handleDirt = (data:boolean) => {
    setDirty(data)
  }

  useBeforeUnload(
    dirty,
    "Are you sure you want to leave? Your changes may not be saved."
  );
  // const listener = usePageUnloadGuard();
  // listener.onBeforeUnload = () => !!dirty

  // useLeavePageConfirmation(dirty, 'custom message')

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 h-screen">
        <div className="w-full max-w-3xl mx-auto p-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 mt-20">
            <h2 className="text-3xl font-medium text-gray-900 dark:text-white mb-6">
              Checkout
            </h2>
            <CustomerInfoForm loader={handleLoading} setDirt={handleDirt}>
              <CustomerSubmitBtn loading={loading} display="Confirm Order" />
            </CustomerInfoForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmCustomer;
