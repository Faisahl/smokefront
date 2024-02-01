import { ProductResponse } from "./ProductTypes"

export type CategoryResponse = {
  data: CatObject[]
}

export type CatObject = {
  id: number
  attributes: CatType
}

export type CatType = {
  category: string
  bubblers?: ProductResponse
  cigarillos?: ProductResponse
  handpipes?: ProductResponse
}

