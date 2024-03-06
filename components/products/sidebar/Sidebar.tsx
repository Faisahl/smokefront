"use client"

import React from "react";
import SidebarSort from "./SidebarSort";
import SidebarFilters from "./SidebarFilters";
import {
  Component,
  FilterType,
} from "@/app/types/ProductTypes";
type Props = {
  setSort: (data: string) => void
  setFilterSelection: (
    data: Component,
    data1: FilterType,
    data2: string,
    data3: string
  ) => void
  brands: string[]
  handleClear: () => void
};

const Sidebar: React.FC<Props> = ({
  setSort,
  brands,
  setFilterSelection,
  handleClear
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = (data: boolean) => {
    setOpen(data);
  };

  return (
    <div className="bg-white dark:bg-gray-800 dark:border dark:border-gray-700 rounded-lg shadow-md dark:shadow-lg p-6 mx-2 lg:mt-24 lg:ml-4">
      <div className="h-fit">
        <div className="flex justify-between">
          <p className="text-gray-900 dark:text-white font-medium text-2xl mb-1">Filters</p>
          <button
            onClick={() => handleClear()}
            className="text-sm text-custo-50 font-semibold"
          >
            Clear
          </button>
        </div>
        <hr className="mb-4" />

        <SidebarSort setSort={setSort} />
        <SidebarFilters
          setOpen={handleOpen}
          brands={brands}
          setFilter={setFilterSelection}
          open={open}
        />
      </div>
    </div>
  );
};

export default Sidebar;
