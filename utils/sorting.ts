import { ProductObject } from "@/app/types/ProductTypes";

export function sortLowHigh(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return a.attributes.price - b.attributes.price;
  });
  return sortedItems;
}

export function sortHighLow(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    return b.attributes.price - a.attributes.price;
  });
  return sortedItems;
}

export function sortByAlphaAZ(unsortedItems: ProductObject[]): ProductObject[] {
  const sortedItems = [...unsortedItems].sort((a, b) => {
    if (a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase()) {
      return -1;
    }
    if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return sortedItems;
}