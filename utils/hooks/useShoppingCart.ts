'use client'

import { CartItemType } from "@/app/types/CartItemType";
import { ProductObject } from "@/app/types/ProductTypes";
import React from "react";
import { getSS, setSS } from "../storage";
import { handleAlert } from "../utils";


const useShoppingCart = () => {
  const [cart, setCart] = React.useState<CartItemType[]>(() => getSS("cart") || []);
  const [inCart, setInCart] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState("");

  const handleCart = (items: CartItemType[]) => {
    setCart(items)
  }

  React.useEffect(() => {
    setSS("cart", cart);
  }, [cart]);

  const addToCart = (meti: ProductObject):void => {
    setSelected(meti.attributes.base[0].name);
    if (cart) {
      addNewCartItem(cart, meti);
      handleAlert(setInCart, setSelected);
    }
  };

  const addNewCartItem = (
    cart: CartItemType[],
    meti: ProductObject
  ):void => {
    const existing = cart.find((i: CartItemType) => i.name === meti.attributes.base[0].name);
    if (!existing) {
      const obj = {
        id: meti.id,
        name: meti.attributes.base[0].name,
        brand: meti.attributes.brand.data.attributes.name ?? "Mala Flor",
        price: meti.attributes.base[0].price,
        // sku: meti.attributes.sku,
        quantity: 1,
        image: meti.attributes.base[0].image.data[0].attributes.formats.thumbnail.url,
      };
      setCart([...cart, obj]);
    } 
    else {
      increaseQuantity(existing, cart);
    }
  };

  const increaseQuantity = (item:CartItemType, data: CartItemType[] ):void => {
    const narr: CartItemType[] = data.map(ci => {
      if(ci.name === item.name){
        return {
          ...ci,
          quantity: ci.quantity + 1
        }
      }
      return ci;
    })
    setCart(narr);
  }

  const setItemQuantity = (val: string|undefined, prod: CartItemType, setter: (data:CartItemType[])=>void):void => {
    console.log(val)
    const n = Number(val);
    
    // // console.log(n, typeof n)
    if(n === 0) removeCartItem(prod.name);  

    const narr: CartItemType[] = cart.map(ci => {
      if(ci.name === prod.name){
        return {
          ...ci,
          quantity: n
        }
      }
      return ci;
    })
    setCart(narr);
  };

  const removeCartItem = (name:string):void => {
    const filteredItems: CartItemType[] = cart.filter(i => i.name !== name);
    setCart(filteredItems);
  }

  return { 
    cart,
    inCart,
    selected,
    addToCart,
    handleCart,
    removeCartItem,
    setItemQuantity
   };

}

export default useShoppingCart