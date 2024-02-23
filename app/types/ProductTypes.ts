import { BrandResponse } from "./BrandTypes";

export type ProductResponse = {
  data: ProductObject[];
};

export type ProductObject = {
  id: number;
  attributes: ProductComponent;
};

export type ProductComponent = {
  id: number;
  base: ProductType[];
  brand: BrandResponse;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  sku: string;
  quantity?: number;
  image: ImageResponse;
  count?: number;
  // brand?: BrandResponse
};

export type Filter = {
  component: Component;
  type: FilterType;
  filter?: string;
  value: string;
};

export type Component = "base" | "brand";
export type FilterType = "name" | "price" | "color";
