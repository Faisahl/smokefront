export type ProductResponseGql = {
  data: ProductObject
}

export type ProductObject = {
  [key:string]: ProductComponent
}

export type ProductComponent = {
  data: ProductPiece[]
}

export type ProductPiece = {
  id: number
  attributes: ProductFrag
}

export type ProductFrag = {
  base: ProductBase[]
  brand: BrandResponse
}

export type ProductBase = {
  id: number
  name: string
  description: string
  price: number
  image: ImageResponse
  quantity?: number
  count?: number
}

type BrandResponse = {
  data: BrandObject
}

type BrandObject = {
  id: number,
  attributes: BrandType
}

type BrandType = {
  name: string
}