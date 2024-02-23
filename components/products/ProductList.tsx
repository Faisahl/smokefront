"use client";

import Products from "./Products";
import Spinner from "../ui/Spinner";
import { ProductObject } from "@/app/types/ProductTypes";

const ProductList: React.FC<{ data: ProductObject[], loading: boolean, sr:string }> = ({
  data,
  loading,
  sr
}) => {

  return (
    <>
      {!loading ? (
        <section
          id="Products"
          className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 pt-24 md:ml-16 mb-5"
        >
          <h2 className="sr-only">{sr}</h2>
          <Products data={data} />
        </section>
      ) : (
        <section className="w-full pt-24 mx-auto justify-center">
          <p className="font-medium pt-36">
            <Spinner height={80} width={80} fill="#4D77FF" />
          </p>
        </section>
      )}
    </>
  );
};

export default ProductList;
