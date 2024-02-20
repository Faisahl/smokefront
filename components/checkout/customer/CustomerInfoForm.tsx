"use client"

import { Field, Input } from "@/components/forms/Forms";
import { createCustomer } from "@/utils/actions/createCustomer";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

type Props = {
  loader: (data:boolean) => void;
  children: React.ReactNode;
  setDirt: (data:boolean)=>void;
};

const CustomerInfoForm: React.FC<Props> = ({ loader, children, setDirt }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isDirty },
  } = useForm<CustomerType>({ defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
  } });

  useEffect(()=>{
    // console.log(isDirty)
    setDirt(isDirty);
    // console.log(errors)
    if(errors){
    //   // console.log(errors)
      errorsTimer()
    }
  },[isDirty,errors])

  const errorsTimer = () => {
    setTimeout(() => {
      // clearErrors("customer")
    }, 1000);
  }

  
  const onSubmit = async (data: CustomerType) => {
    loader(true)
    const customer = await createCustomer(data);
    if (customer) {
      setTimeout(() => {
        loader(false);
        router.push(`/basket/checkout/confirm-pickup/${customer.id}`);
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-6">
        <Field label="first_name" display="First Name">
          <Input
            type="text"
            id="first_name"
            place="First name"
            options={{
              ...register("first_name", {
                required: {
                  value: true,
                  message: "First name is required",
                },
                minLength: 2,
                maxLength: 80,
              }),
            }}
          />
          <p className="text-red-500">{errors.first_name?.message}</p>
        </Field>

        <Field label="last_name" display="Last Name">
          <Input
            type="text"
            id="last_name"
            place="Last name"
            options={{
              ...register("last_name", {
                required: {
                  value: true,
                  message: "Last name is required",
                },
                minLength: 2,
                maxLength: 80,
              }),
            }}
          />
          <p className="text-red-500">{errors.last_name?.message}</p>
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-6">
        <Field label="email" display="Email">
          <Input
            type="email"
            id="email"
            place="Email"
            options={{
              ...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
                minLength: 2,
                maxLength: 80,
              }),
            }}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </Field>

        <Field label="phone" display="Phone No:">
          <Input
            type="tel"
            id="phone"
            place="Mobile number"
            options={{
              ...register("phone", {
                required: {
                  value: true,
                  message: "Phone no. is required",
                },
                pattern: {
                  value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                  message: "Invalid phone format",
                },
                minLength: 2,
                maxLength: 80,
              }),
            }}
          />
          <p className="text-red-500">{errors.phone?.message}</p>
        </Field>
      </div>

      <div className="mt-4">
        <label
          htmlFor="pickuptime"
          className="text-gray-700 dark:text-white font-medium mx-1"
        >
          Pickup time:
        </label>
        <input
          readOnly={true}
          type="text"
          placeholder="~10 minutes"
          className="block text-gray-700 border dark:bg-gray-700 dark:text-white mb-1 p-2 dark:border-none rounded-lg"
          id="pickuptime"
        />
      </div>

      <div className="flex justify-end">{children}</div>
    </form>
  );
};

export default CustomerInfoForm;
