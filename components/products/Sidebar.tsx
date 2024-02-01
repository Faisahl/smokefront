import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setValue: Dispatch<SetStateAction<string>>,
  setBrand: Dispatch<SetStateAction<string>>,
  brands: string[]
};

const Sidebar: React.FC<Props> = ({ setValue, setBrand, brands }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg p-6">
      <div className="h-fit">
        <label
          className="block mb-2 text-md text-gray-900 dark:text-white"
          htmlFor="prodsort"
        >
          Sort by:
        </label>
        <select
          defaultValue={"nosort"}
          name="productsort"
          className="p-1 rounded-sm text-sm"
        >
          <option value="nosort"></option>
          <option
            onClick={(e) => setValue(e.currentTarget.value)}
            value="lowtohigh"
          >
            Price low to high
          </option>
          <option
            onClick={(e) => setValue(e.currentTarget.value)}
            value="hightolow"
          >
            Price high to low
          </option>
          <option onClick={(e) => setValue(e.currentTarget.value)} value="AtoZ">
            A-Z
          </option>
        </select>

        <label
          className="block mt-4 text-gray-900 dark:text-white"
          htmlFor="brandradios"
        >
          Brands:
        </label>
        <fieldset id="brandradios" className="">
          {brands.map((brand) => (
            <div key={brand}>
              <input
                className="mt-2"
                type="radio"
                id={brand}
                name="radiobrand"
                value={brand}
                onClick={(e) => setBrand(e.currentTarget.value)}
              />
              <label
                className="ml-2 text-sm text-gray-900 dark:text-white"
                htmlFor={brand}
              >
                {brand}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default Sidebar;
