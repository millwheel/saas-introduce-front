// TODO 아래 코드 제거
export type TopicCardType = {
    id: string
    name: string
    emoji: string
    description: string
    productCount: number
    trending?: boolean
}

// TODO 아래 코드 제거
export type ProductCardType = {
    name: string
    slug: string
    summary: string
    tags: string[]
}

// ----- 아래부터 진짜 쓰이는 것

export type TopicSummaryResponse = {
    id: number
    slug: string
    name: string
    emoji: string
    productCount: number
}

export type TopicResponse = {
    id: number
    name: string
    slug: string
    emoji: string
    products: TopicProductResponse[]
}

export type TopicProductResponse = {
    id: number
    name: string
    slug: string
    summary: string
}