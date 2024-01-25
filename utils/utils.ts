import { CartItemType } from "@/app/types/CartItemType";
import { ProductObject } from "@/app/types/ProductTypes";

export const addCart = (
  cart: CartItemType[],
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  meti: ProductObject
) => {
  let obj: CartItemType;
  const existing = cart.find((i: CartItemType) => i.id === meti.id);
  if (!existing) {
    // let j = cart.map((ci: CartItemType) => {
    //      return { ...ci, quantity: ci.quantity + 1 };
    // });
    // setCart(j)
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
};

// export const updateItemQuantity = (cart: CartItemType[], item: CartItemType) => {
//     const increase: CartItemType[] = cart.map((ci:CartItemType) => {
//         ci.id === item.id ? { ...item, quantity: item.quantity+1 } : item;
//     });
//     return increase;
// };

export const calculateTaxes = (st: number): number => {
  if (st !== 0) {
    const i: number = st * 0.06; // fake sales tax
    const j: number = st * 0.03; // fake credit card tax
    const k: number = st * 0.07; // fake fake tax

    return Number((i + j + k).toFixed(2));
  }

  return 0;
};

export const calculateSubTotal = (items: any): number => {
  if (items) {
    return items.reduce(
      (sum: number, { price, quantity }: { price: number; quantity: number }) =>
        sum + price * quantity,
      0
    );
  }
  return 0;
};

export const calculateTotal = (st: number, t: number) => {
  return st + t;
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
