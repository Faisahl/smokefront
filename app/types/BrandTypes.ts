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