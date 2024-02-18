'use client'

import React from "react";

type Props = {
  loading: boolean;
  display: string
};

const CustomerSubmitBtn: React.FC<Props> = ({ loading, display }) => {
  return (
    <button
      type="submit"
      className="bg-custo-50 hover:opacity-90 mx-auto mt-10 md:mt-0 md:mx-2 text-white text-xl md:text-base px-6 py-3 font-semibold rounded-full shadow"
    >
      {loading ? (
        <svg
          className="animate-spin mx-auto font-semibold"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21a9 9 0 0 1-7.441-3.949 9 9 0 0 1-.915-8.375 9 9 0 0 1 6.414-5.462A9 9 0 0 1 18.18 5.45a.75.75 0 0 1 0 1.06.74.74 0 0 1-.53.224.74.74 0 0 1-.53-.224 7.51 7.51 0 0 0-9.456-.654A7.51 7.51 0 0 0 5.1 14.982a7.51 7.51 0 0 0 8.413 4.367A7.51 7.51 0 0 0 19.5 12a.75.75 0 0 1 .75-.75.75.75 0 0 1 .75.75 9 9 0 0 1-9 9z"
            fill="#fff"
          />
        </svg>
      ) : (
        `${display}`
      )}
    </button>
  );
};

export default CustomerSubmitBtn;
