import React from "react";

export const Field = ({
  label,
  display,
  children,
}: {
  label: string;
  display: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="text-gray-900 dark:text-white font-medium mx-1"
      >
        {display}
      </label>
      {children}
    </div>
  );
};

export const Input = ({
  type,
  id,
  place,
  options,
}: {
  type: string;
  id: string;
  place: string;
  options: any;
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={place}
      {...options}
      className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
    />
  );
};

// const FirstNameInput = ({ children, options}: { children: React.ReactNode, options: any }) => {
//   return (
//     <Field label="first_name" display="First Name">
//       <Input
//         type="text"
//         id="first_name"
//         place="First name"
//         {...options}
//       />
//       {children}
//       <p className="text-red-500">{errors.first_name?.message}</p>
//     </Field>
//   );
// };

// export { Field, Input };
