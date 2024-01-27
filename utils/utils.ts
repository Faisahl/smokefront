import { CartItemType } from "@/app/types/CartItemType";
import { ProductObject } from "@/app/types/ProductTypes";
import { Dispatch, SetStateAction } from "react";

export const addCart = (
  cart: CartItemType[],
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  meti: ProductObject
) => {
  let obj: CartItemType;
  const existing = cart.find((i: CartItemType) => i.name === meti.attributes.name);
  if (!existing) {
    obj = {
      id: meti.attributes.id,
      name: meti.attributes.name,
      brand: meti.attributes.brand ?? "Galaxy Smoke",
      price: meti.attributes.price,
      sku: meti.attributes.sku,
      quantity: 1,
      image: meti.attributes.image.data[0].attributes.formats.thumbnail.url,
    };
    setCart([...cart, obj]);
  } 
  else {
      updateQuantity('plus',existing, cart, setCart);
  }
};

export const updateQuantity = (calc:string , item:CartItemType, data: CartItemType[] ,setter: Dispatch<SetStateAction<CartItemType[]>>) => {
  const newArr = [...data];
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].name === item.name && calc === 'plus'){
      newArr[i].quantity += 1;
    }
    if(newArr[i].name === item.name && calc === 'minus' && newArr[i].quantity > 1){
      newArr[i].quantity -= 1;
    }
  }
  setter(newArr);
};

export const calculateTaxes = (subtotal: number): number => {
  if (subtotal !== 0) {
    const i: number = subtotal * 0.06; // fake sales tax
    const j: number = subtotal * 0.03; // fake credit card tax
    const k: number = subtotal * 0.07; // fake fake tax

    return Number((i + j + k).toFixed(2));
  }
  return 0;
};

export const calculateSubTotal = (items: any): number => {
  if (items) {
    let j: number = items.reduce(
      (sum: number, { price, quantity }: { price: number; quantity: number }) =>
        sum + price * quantity, 0
    );
    return Number(j.toFixed(2));
  }
  return 0;
};

export const calculateTotal = (subtotal: number, tax: number) => {
  if(!subtotal || !tax) return 0;
  return Number((subtotal + tax).toFixed(2));
};

export const handleAlert = (
  setBool: React.Dispatch<React.SetStateAction<boolean>>,
  setString?: React.Dispatch<React.SetStateAction<string>>
) => {
  setBool(true);
  if(setString){
    setTimeout(() => {
      setBool(false);
      setString("");
    }, 1000);
  } else {
    setTimeout(() => {
      setBool(false);
    }, 1000);
  }
};
