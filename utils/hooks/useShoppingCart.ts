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
  ) => {
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
      updateExistingCartItemQuantity('plus',existing, cart, setCart);
    }
  };

  const updateExistingCartItemQuantity = (calc:string , item:CartItemType, data: CartItemType[] ,setter: (data:CartItemType[])=>void) => {
    const newArr = [...data];
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i].name === item.name && calc === 'plus'){
        newArr[i].quantity++;
      }
      if(newArr[i].name === item.name && calc === 'minus' && newArr[i].quantity > 1){
        --newArr[i].quantity;
      }
    }
    setter(newArr);
  };

  return { 
    cart,
    addToCart,
    handleCart,
    inCart,
    selected,
    updateExistingCartItemQuantity
   };

}

export default useShoppingCart