export type OrderObjectType = {
  itemId: number,
  orderId?: string,
  name: string,
  brand: string,
  price: number,
  sku: string,
  quantity: number,
  orderSubtotal: number,
  orderTaxes: number,
  orderTotal: number
}

export type OrderType = {
  orderId: string,
  cart: OrderObjectType[]
}

export type StrapiOrderType = {
  
}