'use client'

import React from "react";

type Props = {};

const Custom404 = (props: Props) => {
  return (
    <section className="flex items-center h-screen w-full p-10 bg-gray-50 dark:bg-gray-700">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h1 className="text-4xl">
            yo
          </h1>
          <h1 className="font-extrabold text-3xl text-gray-600 dark:text-gray-100">
            <span className="sr-only">Error</span>
            404
          </h1>
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            Sorry, we couldn't find this page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
