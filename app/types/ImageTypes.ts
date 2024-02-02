type ImageResponse = {
    data: ImageObject[]
}

type ImageObject = {
    id: number
    attributes: ImageType
}

type ImageType = {
    formats: FormatType
}

type FormatType = {
    thumbnail: ThumbnailObject
    small: SmallImageObject
    medium: MediumImageObject
    large: LargeImageObject
}

type ThumbnailObject = {
    name: string
    size: number
    width: number
    height: number
    url: string    
}

type SmallImageObject = {
    name: string
    size: number
    width: number
    height: number
    url: string    
}
type MediumImageObject = {
    name: string
    size: number
    width: number
    height: number
    url: string    
}
type LargeImageObject = {
    name: string
    size: number
    width: number
    height: number
    url: string    
}