"use client";

import React from "react";

type Props = {
  customer: CustomerType;
};

const CustInfoCard: React.FC<Props> = ({ customer }) => {
  // console.log(customer);
  return (
    <>
      <div className="mt-8">
        <h2 className="text-md md:text-lg text-gray-900 dark:text-white font-semibold">
          Customer info:
        </h2>
      </div>
      <div className="text-gray-900  dark:text-white text-md md:text-lg ml-2 mt-2">
        <p className="capitalize">
          {customer.first_name} {customer.last_name}
        </p>
        <p>{customer.email}</p>
        <p>{customer.phone}</p>
      </div>
    </>
  );
};

export default CustInfoCard;
