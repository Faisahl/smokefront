"use server";

import { affix } from "./api";

export const createCustomer = async (
  data: CustomerType
) => {
  const cust: CustomerType = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cust),
  };
  const customer: CustomerType = await affix(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/customers`,
    options
  );

  return customer;
};
