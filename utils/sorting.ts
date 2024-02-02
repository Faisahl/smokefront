import { ProductComponent, ProductObject } from "@/app/types/ProductTypes";

export function sortLowHigh(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return a.attributes.base[0].price - b.attributes.base[0].price;
  });
  return sortedItems;
}

export function sortHighLow(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return b.attributes.base[0].price - a.attributes.base[0].price;
  });
  return sortedItems;
}

export function sortByAlphaAZ(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    if (a.attributes.base[0].name.toLowerCase() < b.attributes.base[0].name.toLowerCase()) {
      return -1;
    }
    if (a.attributes.base[0].name.toLowerCase() > b.attributes.base[0].name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return sortedItems;
}