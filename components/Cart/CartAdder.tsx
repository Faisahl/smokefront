import React from "react";
import { ProductObject } from "@/app/types/ProductTypes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartAdder: React.FC<{ item: ProductObject, cartSet: (arg: ProductObject) => void, selected: string }> = ({ item, cartSet, selected }) => {
  return (
    <div
      className="cursor-pointer lg:hover:text-custo-51"
      onClick={() => cartSet(item)}
    >
      <p
        className={`${
          item.attributes.base[0].name === selected ? "inline" : "hidden"
        } mr-2 text-s text-green-55 font-semibold`}
      >
        Item Added!
      </p>
      <AddShoppingCartIcon 
        className="text-black dark:text-white lg:hover:text-custo-51" 
      />
    </div>
  );
};

export default CartAdder;
