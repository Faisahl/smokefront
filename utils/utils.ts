import { CartItemType } from "@/app/types/CartItemType";
import { ProductObject } from "@/app/types/ProductTypes";
import { setSS } from "./storage";

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
  // else {
  //     const updated = updateItemQuantity(cart, meti);
  //     setSS('cart', updated)
  //     // setCart(updated);
  //     // console.log(cart)
  // }
};

export const updateItemQuantity = (cart: CartItemType[], item: ProductObject): CartItemType[] => {
  const narr = [...cart];
    for(let i=0; i < narr.length-1; i++){
      if(narr[i].name === item.attributes.name){
        // console.log(cart[i.id])
        narr[i].quantity = narr[i].quantity + 1; 
      }
    }
      return narr;
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
    return Number(j.toFixed(2))
  }
  return 0;
};

export const calculateTotal = (subtotal: number, tax: number) => {
  if(!subtotal || !tax) return 0;
  return Number((subtotal + tax).toFixed(2))
};

export const handleAlert = (
  setAdded: React.Dispatch<React.SetStateAction<boolean>>,
  setSelected: React.Dispatch<React.SetStateAction<string>>
) => {
  setAdded(true);
  setTimeout(() => {
    setAdded(false);
    setSelected("");
  }, 1000);
};
