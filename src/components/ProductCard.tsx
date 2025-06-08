'use client'

import { useState } from 'react'
import Link from 'next/link'

export type ReactionType = 'LIKE' | 'DISLIKE'

export type ProductCardProps = {
    slug: string
    name: string
    summary: string
    websiteUrl: string
    viewCount: number
    likeCount: number
    dislikeCount: number
    topics: string[]
    userReaction?: ReactionType
    onLike?: () => void
    onDislike?: () => void
}

export function ProductCard({
                                slug,
                                name,
                                summary,
                                websiteUrl,
                                viewCount,
                                likeCount,
                                dislikeCount,
                                topics,
                                userReaction,
                            }: ProductCardProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="border rounded-xl p-5 transition-shadow bg-white hover:shadow-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Link href={`/products/${slug}`}>
                <h2 className="text-xl font-bold mb-1 hover:underline">{name}</h2>
            </Link>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{summary}</p>

            <div className="flex flex-wrap gap-2 mb-3">
                {topics.map((topic) => (
                    <span
                        key={topic}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
            #{topic}
          </span>
                ))}
            </div>

        </div>
    )
}
