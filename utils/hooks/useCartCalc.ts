import { CartItemType } from "@/app/types/CartItemType";
import React from "react";


const useCartCalc = (data:CartItemType[]) => {
  const [subTotal, setSubtotal] = React.useState<number>(0);
  const [taxes, setTaxes] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  
  React.useEffect(() => {
    const st = calculateSubTotal(data);
    const taxes = calculateTaxes(subTotal)
    const tot = calculateTotal(subTotal, taxes)
    setSubtotal(st);
    setTaxes(taxes);
    setTotal(tot);
  }, [data,subTotal]);

  function calculateTaxes(subtotal: number): number {
    if (subtotal !== 0) {
      const i: number = subtotal * 0.06; // fake sales tax
      const j: number = subtotal * 0.02; // fake credit card tax
  
      return parseFloat((i + j).toFixed(2));
    }
    return 0;
  };
  
  function calculateSubTotal(items: CartItemType[]): number {
    if (items) {
      let j: number = items.reduce(
        (sum: number, { price, quantity }: { price: number; quantity: number }) =>
          sum + price * quantity, 0
      );
      return parseFloat(j.toFixed(2));
    }
    return 0;
  };
  
  function calculateTotal(subtotal: number, tax: number) {
    console.log(subtotal,tax)
    if(!subtotal || !tax) return 0;
    return parseFloat((subtotal + tax).toFixed(2));
  };

  return {
    subTotal,
    taxes,
    total
  }

}

export default useCartCalc;