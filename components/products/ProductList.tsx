"use client";

import Products from "./Products";
import { ProductPiece } from "@/app/types/GqlProductTypes";
import Spinner from "../ui/Spinner";

const ProductList: React.FC<{ data: ProductPiece[], loading: boolean, sr:string }> = ({
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
          <p className="dark:hidden font-medium pt-36">
            <Spinner height={80} width={80} fill="#4D77FF" />
          </p>
          <p className="hidden dark:visible font-medium pt-36">
            <Spinner height={80} width={80} fill="#fff" />
          </p>
        </section>
      )}
    </>
  );
};

export default ProductList;
