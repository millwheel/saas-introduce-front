

export type TopicCardType = {
    id: string
    name: string
    emoji: string
    description: string
    productCount: number
    trending?: boolean
}

export type ProductCardType = {
    name: string
    slug: string
    summary: string
    tags: string[]
}

export type TopicType = {
    id: number
    slug: string
    name: string
    emoji: string
    productCount: number
}