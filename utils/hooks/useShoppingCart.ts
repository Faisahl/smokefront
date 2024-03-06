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

  const addToCart = (meti: ProductObject) => {
    setSelected(meti.attributes.base[0].name);
    if (cart) {
      addNewCartItem(cart, handleCart, meti);
      handleAlert(setInCart, setSelected);
    }
  };

  const addNewCartItem = (
    cart: CartItemType[],
    setCart: (items:CartItemType[])=>void,
    meti: ProductObject
  ):void => {
    let obj: CartItemType;
    const existing = cart.find((i: CartItemType) => i.name === meti.attributes.base[0].name);
    if (!existing) {
      obj = {
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
      increaseExistingItemQuantity(existing, cart, setCart);
    }
  };

  const increaseExistingItemQuantity = (item:CartItemType, data: CartItemType[] ,setter: (data:CartItemType[])=>void):void => {
    const newArr = [...data];
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i].name === item.name){
        newArr[i].quantity++
      }
    }
    setter(newArr);
  }

  const setItemQuantity = (val: string|undefined, prod: CartItemType, setter: (data:CartItemType[])=>void):void => {
    const n = Number(val);
    // console.log(n, typeof n)
    if(n === 0) removeCartItem(prod.name, setter);  
    const narr = [...cart];
    const item = narr.findIndex(i => i.name === prod.name);
    narr[item].quantity = n
    setter(narr)
  };

  const removeCartItem = (name:string, setter: (data:CartItemType[])=>void):void => {
    const newCart:CartItemType[] = cart.filter(i => i.name !== name);
    setCart(newCart);
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