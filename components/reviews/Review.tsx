"use client";

import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

type Props = {
  data: ReviewType;
};

const Review: React.FC<Props> = ({ data }) => {
  return (
    <div key={data.name} className="text-left mx-auto max-w-sm">
      <div className="mb-4 text-black">
        <FormatQuoteIcon
          fontSize="large"
          className="text-custo-51 lg:hover:text-custo-50 transition duration-500 ease-in-out"
        />
        <p className="mt-2 text-base leading-6 light:text-gray-900 dark:text-white">
          {data.content}
        </p>
        <div className="text-sm mt-5">
          <p className="font-medium leading-none text-gray-900 dark:text-white cursor-default ">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
