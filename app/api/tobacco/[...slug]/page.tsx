"use client"

import { usePathname } from "next/navigation";
import ProductList from "@/components/products/ProductList";
import Sidebar from "@/components/products/Sidebar";
import useProductSort from "@/utils/hooks/useProductSort";


const page: React.FC<{}> = ({}) => {
  const p = usePathname().split("/");
  const path = p[p.length - 1];

  const { loading, products, handleSort } = useProductSort(path);

  return (
    <section className="bg-white dark:bg-gray-800 h-screen">
      <div className="container bg-white dark:bg-gray-800 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 pt-20 m-2">
            <Sidebar
              setSort={handleSort}
            />
          </div>
          <div className="md:w-3/4">
            <ProductList data={products} loading={loading} sr={path} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
