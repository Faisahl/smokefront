"use client";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
type Props = {
  setSort: (data: string) => void;
  // setBrand: (data: string[]) => void;
  // brands: string[];
};

const Sidebar: React.FC<Props> = ({ setSort }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [brandFilterArray, setBrandFilterArray] = useState<string[]>([]);

  const handleClear = () => {
    setSort("nosort");
    // setBrand([]);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand = e.target.value;
    setBrandFilterArray(prev => {
      if(prev.includes(brand)){
        return prev.filter(i => i !== brand)
      } else {
        return [...prev, brand]
      }
    })
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg p-6 mx-2 lg:mt-24 lg:ml-4">
      <div className="h-fit">
        <div className="flex items-center justify-between">
          <p className="text-gray-900 dark:text-white text-2xl mb-1">Filters</p>
          <button
            onClick={() => handleClear()}
            className="text-sm text-custo-51"
          >
            Clear
          </button>
        </div>
        <hr className="mb-4" />
        <label
          className="block mb-2 text-md text-gray-900 dark:text-white"
          htmlFor="prodsort"
        >
          Sort by:
        </label>
        <div id="prodsort">
          <select
            defaultValue={""}
            name="productsort"
            className="p-1 rounded-sm text-sm bg-gray-100"
          >
            <option value=""></option>
            <option
              onClick={(e) => setSort(e.currentTarget.value)}
              value="priceAscending"
            >
              Price low to high
            </option>
            <option
              onClick={(e) => setSort(e.currentTarget.value)}
              value="priceDescending"
            >
              Price high to low
            </option>
            <option
              onClick={(e) => setSort(e.currentTarget.value)}
              value="nameAscending"
            >
              A-Z
            </option>
          </select>
        </div>

        <label
          className="block mt-4 text-gray-900 dark:text-white"
          htmlFor="brandradios"
        >
          Brands:
        </label>

        {/* <div
          onClick={() => setOpen(!open)}
          className="w-full lg:w-2/3 text-sm px-1 bg-gray-100 rounded-sm"
        >
          <div className="flex justify-end">
            <label htmlFor="" className={`mx-2 ${!open ? "" : "rotate-180"}`}>
              <KeyboardArrowDownIcon fontSize="small" />
            </label>
          </div>
          <div className={`${!open ? "hidden" : "block"} h-14 overflow-y-auto`}>
            {brands.map((brand) => (
              <div key={brand} className="my-1">
                <input
                  type="checkbox"
                  // onClick={(e) => handleCheck(e)}
                  id="check"
                  onChange={(e) => handleFilter(e)}
                  name={brand}
                  value={brand}
                />
                <label htmlFor="check" className="mx-2">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
