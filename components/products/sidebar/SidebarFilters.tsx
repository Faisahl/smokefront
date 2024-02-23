import { Component, FilterType } from "@/app/types/ProductTypes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {
  setOpen: (data: boolean) => void;
  brands: string[];
  setFilter: (
    comp: Component,
    type: FilterType,
    filt: string,
    val: string
  ) => void;
  open: boolean;
};

const SidebarFilters: React.FC<Props> = ({
  setOpen,
  brands,
  setFilter,
  open,
}) => {
  return (
    <>
      <label
        className="block mt-4 text-gray-900 dark:text-white"
        htmlFor="brandradios"
      >
        Brands:
      </label>

      <div
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
                id={brand}
                alt={brand}
                className="cursor-pointer"
                onChange={(e) =>
                  setFilter(
                    e.target.name as Component,
                    "name" as FilterType,
                    "$eqi",
                    e.target.value
                  )
                }
                name="brand"
                value={brand}
              />
              <label htmlFor={brand} className="mx-2 cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarFilters;
