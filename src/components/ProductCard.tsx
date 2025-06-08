'use client'

import Link from 'next/link'
import {ProductCard} from "@/data/type";

export type ReactionType = 'LIKE' | 'DISLIKE'

export type ProductCardProps = {
    slug: string
    name: string
    summary: string
    topics: string[]
}

export function ProductCard({
                                slug,
                                name,
                                summary,
                                tags,
                            }: ProductCard) {

    return (
        <div>
            <Link href={`/products/${slug}`}>
                <h2 className="text-xl font-bold mb-1 hover:underline">{name}</h2>
            </Link>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{summary}</p>

            <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                    #{tag}
                  </span>
                ))}
            </div>
        </div>
    )
}
