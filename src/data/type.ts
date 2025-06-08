

export type TopicCard = {
    id: string
    name: string
    emoji: string
    description: string
    productCount: number
    trending?: boolean
}

export type ProductCard = {
    name: string
    slug: string
    summary: string
    tags: string[]
}