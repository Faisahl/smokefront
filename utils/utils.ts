
// export const addCart = (
//   cart: CartItemType[],
//   setCart: (items:CartItemType[])=>void,
//   meti: ProductObject
// ) => {
//   let obj: CartItemType;
//   const existing = cart.find((i: CartItemType) => i.name === meti.attributes.base[0].name);
//   if (!existing) {
//     obj = {
//       id: meti.id,
//       name: meti.attributes.base[0].name,
//       brand: meti.attributes.brand.data.attributes.name ?? "Mala Flor",
//       price: meti.attributes.base[0].price,
//       // sku: meti.attributes.sku,
//       quantity: 1,
//       image: meti.attributes.base[0].image.data[0].attributes.formats.thumbnail.url,
//     };
//     setCart([...cart, obj]);
//   } 
//   else {
//       updateQuantity('plus',existing, cart, setCart);
//   }
// };

// export const updateQuantity = (calc:string , item:CartItemType, data: CartItemType[] ,setter: (data:CartItemType[])=>void) => {
//   const newArr = [...data];
//   for(let i = 0; i < newArr.length; i++){
//     if(newArr[i].name === item.name && calc === 'plus'){
//       ++newArr[i].quantity;
//     }
//     if(newArr[i].name === item.name && calc === 'minus' && newArr[i].quantity > 1){
//       --newArr[i].quantity;
//     }
//   }
//   setter(newArr);
// };

// export const calculateTaxes = (subtotal: number): number => {
//   if (subtotal !== 0) {
//     const i: number = subtotal * 0.06; // fake sales tax
//     const j: number = subtotal * 0.03; // fake credit card tax
//     const k: number = subtotal * 0.07; // fake fake tax

//     return parseFloat((i + j + k).toFixed(2));
//   }
//   return 0;
// };

// export const calculateSubTotal = (items: any): number => {
//   if (items) {
//     let j: number = items.reduce(
//       (sum: number, { price, quantity }: { price: number; quantity: number }) =>
//         sum + price * quantity, 0
//     );
//     return parseFloat(j.toFixed(2));
//   }
//   return 0;
// };

// export const calculateTotal = (subtotal: number, tax: number) => {
//   if(!subtotal || !tax) return 0;
//   return parseFloat((subtotal + tax).toFixed(2));
// };

export const handleAlert = (
  setBool: (data:boolean)=>void,
  setString?: React.Dispatch<React.SetStateAction<string>>
) => {
  setBool(true);
  setTimeout(() => {
    setBool(false);
    if(setString){
      setString("");
    } 
    }, 1000);
};
