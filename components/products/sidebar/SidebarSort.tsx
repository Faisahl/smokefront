import React from "react";

type Props = {};

const SidebarSort: React.FC<{setSort: (data:string)=>void}> = ({setSort}) => {
  return (
    <>
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
          <option 
          value=""
          onClick={(e) => setSort(e.currentTarget.value)}
          ></option>
          <option
            onClick={(e) => setSort(e.currentTarget.value)}
            value="base.price:asc"
          >
            Price low to high
          </option>
          <option
            onClick={(e) => setSort(e.currentTarget.value)}
            value="base.price:desc"
          >
            Price high to low
          </option>
          <option
            onClick={(e) => setSort(e.currentTarget.value)}
            value="base.name:asc"
          >
            A-Z
          </option>
        </select>
      </div>
    </>
  );
};

export default SidebarSort;
