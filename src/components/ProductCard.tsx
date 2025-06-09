'use client'

import Link from 'next/link'
import {ProductCardType} from "@/data/type";


export function ProductCard({
                                slug,
                                name,
                                summary,
                                tags,
                            }: ProductCardType) {
    return (
        <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            {/* Gradient overlay for visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative p-6">
                {/* Header with icon placeholder */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        {/* Product icon placeholder */}
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <div className="w-6 h-6 bg-white rounded opacity-90" />
                        </div>
                        <div className="flex-1">
                            <Link href={`/products/${slug}`}>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                                    {name}
                                </h3>
                            </Link>
                        </div>
                    </div>

                    {/* Trending indicator */}
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-600 font-medium">Trending</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                    {summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1.5 rounded-full font-medium bg-blue-100 text-blue-700 group-hover:bg-blue-200 transition-all duration-200"
                        >
                            {tag}
                        </span>
                    ))}
                    {tags.length > 3 && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                            +{tags.length - 3}
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                        {/* Stats */}
                        <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{Math.floor(Math.random() * 100) + 50}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{Math.floor(Math.random() * 50) + 10}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}