"use client";

import { usePathname } from "next/navigation";
import ProductList from "@/components/products/ProductList";
import Sidebar from "@/components/products/sidebar/Sidebar";
import useCollections from "@/utils/hooks/useCollections";

const page: React.FC<{}> = ({}) => {
  const p = usePathname().split("/");
  const path = p[p.length - 1];

  const { 
    loading, 
    products, 
    clearProducts,
    handleSort,
    getBrands, 
    clearFilter,
    onFilterSelection 
  } = useCollections(path);
  const brands = [...getBrands(products)];

  return (
    <section className="bg-white dark:bg-gray-800 h-screen">
      <div className="container bg-white dark:bg-gray-800 ">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            <Sidebar 
              setSort={handleSort} 
              brands={brands} 
              setFilterSelection={onFilterSelection} 
              clearFilter={clearFilter}
              clearProducts={clearProducts}
            />
          </div>
          <div className="lg:w-3/4 ">
            <ProductList 
              data={products} 
              loading={loading} 
              sr={path} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
