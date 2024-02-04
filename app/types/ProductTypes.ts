import { BrandResponse } from "./BrandTypes"

export type ProductResponse = {
    data: ProductObject[]
}

export type ProductObject = {
    id: number,
    attributes: ProductComponent
}

export type ProductComponent = {
    id: number
    base: ProductType[]
    brand: BrandResponse
}

export type ProductType = {
    id: number
    name: string,
    description: string,
    price: number,
    sku: string,
    quantity?: number,
    image: ImageResponse,
    count?: number
    // brand?: BrandResponse
}

