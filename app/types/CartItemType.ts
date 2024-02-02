export type CartItemType = {
    id: number
    name: string,
    brand: string,
    // brandName: string,
    // description?: string,
    price: number,
    // sku: string,
    quantity: number,
    image: string
}

export type CartItemArray = {
    items: CartItemType[]
}