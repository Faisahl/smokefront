"use client";

import Spinner from "@/components/ui/Spinner";
import React from "react";

type Props = {
  loading: boolean;
  display: string;
};

const CustomerSubmitBtn: React.FC<Props> = ({ loading, display }) => {
  return (
    <button
      type="submit"
      className="bg-custo-50 hover:opacity-90 mx-auto mt-10 md:mt-0 md:mx-2 text-white text-xl md:text-base px-6 py-3 font-semibold rounded-full shadow"
    >
      {!loading ? `${display}` : <Spinner height={24} width={24} fill="#fff" />}
    </button>
  );
};

export default CustomerSubmitBtn;
