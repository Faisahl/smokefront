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
        <section className="pt-24 w-fit mx-auto justify-center">
          <p className="text-gray-900 dark:text-white font-medium pt-32">
            <Spinner height={80} width={80} />
          </p>
        </section>
      )}
    </>
  );
};

export default ProductList;
