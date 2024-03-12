import Spinner from "@/components/ui/Spinner";
// import React from "react";

export default function Loading() {
  return (
    <section className="w-full pt-24 mx-auto justify-center">
      <p className="font-medium pt-36">
        <Spinner height={80} width={80} fill="#4D77FF" />
      </p>
    </section>
  );
};
