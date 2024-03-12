"use client";

import React from "react";

import CartWrap from "./CartWrap";
import SideCart from "./SideCart";
import CartList from "./CartList";
import useShoppingCart from "@/utils/hooks/useShoppingCart";
import useCartCalc from "@/utils/hooks/useCartCalc";

type Props = {
  
};

const CartView: React.FC = ({}) => {
  const { cart, handleCart, setItemQuantity, removeCartItem } = useShoppingCart();
  const { subTotal, taxes, total } = useCartCalc(cart);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="container mx-auto px-4 py-6 text-gray-900 dark:text-white">
          <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4">
              <CartWrap>
                  <CartList 
                    data={cart} 
                    setCI={handleCart}
                    removeCI={removeCartItem}
                    setQty={setItemQuantity}
                  />
              </CartWrap>
            </div>
            <div className="lg:w-1/4">
              <SideCart 
                data={cart}
                subtotal={subTotal} 
                taxes={taxes} 
                total={total} 
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-6 dark:text-white">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-3/4">
              <CartWrap>
                <tr>
                  <td
                    className="text-center text-2xl py-10"
                    colSpan={4}
                    rowSpan={4}
                  >
                    <span className="font-medium">
                      Add some items to checkout &#128512;
                    </span>
                  </td>
                </tr>
              </CartWrap>
            </div>
            <div className="lg:w-1/4">
              <SideCart 
                subtotal={subTotal} 
                taxes={taxes} 
                total={total} 
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartView;
