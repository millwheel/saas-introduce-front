export type TopicSummaryResponse = {
    id: number
    code: string
    name: string
    emoji: string
    productCount: number
}

export type TopicResponse = {
    id: number
    name: string
    code: string
    emoji: string
    products: TopicProductResponse[]
}

export type TopicProductResponse = {
    id: number
    name: string
    slug: string
    summary: string
}