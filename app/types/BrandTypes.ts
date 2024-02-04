import { ProductResponse } from "./ProductTypes"

export type BrandResponse = {
  data: BrandObject
}

export type BrandObject = {
  id: number,
  attributes: BrandType
}

type BrandType = {
  name: string
}

export type BrandObjResponse = {
  data: BrandObjType[]
}

export type BrandObjType = {
  id: number,
  attributes: BrandObj
}

type BrandObj = {
  name: string,
  waterpipes: ProductResponse
  cigarillos: ProductResponse
  delta_8s: ProductResponse
  edibles: ProductResponse
}