import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  display: string
  type: string
  id: string
  placeholder: string
  isRequired: boolean
  message: string
  pattern?: RegExp
  patternMessage?: string
};

const OrderInput: React.FC<Props> = ({ display, type, id, placeholder, isRequired, message, pattern, patternMessage }) => {
  const {
    register,
    formState: { errors },
  } = useForm<CustomerType>();
  return (
    <div className="form-control">
      <label
        htmlFor="first_name"
        className="text-gray-900 dark:text-white font-medium"
      >
        {display}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register('first_name', {
          required: {
            value: isRequired,
            message: message,
          },
          pattern: {
            value:
              pattern ? pattern : ,
            message: patternMessage,
          },
          minLength: 2,
          maxLength: 80,
        })}
        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
      />
      <p className="text-red-500">{errors.first_name?.message}</p>
    </div>
  );
};

export default OrderInput;
