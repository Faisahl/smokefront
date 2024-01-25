export type ProductResponse = {
    data: ProductObject[]
}

export type ProductObject = {
    id: number,
    attributes: ProductType
}

export type ProductType = {
    id: number
    name: string,
    brand: string,
    description: string,
    price: number,
    sku: string,
    quantity?: number
    image: ImageResponse
}

export type ProductArray = {
    items: ProductType[]
}

