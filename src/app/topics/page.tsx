'use client'

import { useState } from 'react'
import Link from 'next/link'
import {allTopics, trendingTopics} from "@/data/mock";

export default function TopicsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<'trending' | 'all'>('trending')

    // 검색 필터링
    const filteredTopics = (selectedCategory === 'trending' ? trendingTopics : allTopics)
        .filter(topic =>
            topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            topic.description.toLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Browse Topics
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Browse {(trendingTopics.length + allTopics.length).toLocaleString()} startups across {allTopics.length} topics
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative mb-8">
                        <input
                            type="text"
                            placeholder="Search topics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Category Toggle */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => setSelectedCategory('trending')}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                selectedCategory === 'trending'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Trending
                        </button>
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                selectedCategory === 'all'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Browse All
                        </button>
                    </div>
                </div>
            </section>

            {/* Topics Grid */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                {selectedCategory === 'trending' && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Topics</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {filteredTopics.map((topic) => (
                                <Link key={topic.id} href={`/topics/${topic.id}`}>
                                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer group">
                                        <div className="text-center">
                                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                                                {topic.emoji}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {topic.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                {topic.description}
                                            </p>
                                            <div className="text-xs text-blue-600 font-medium">
                                                {topic.productCount.toLocaleString()} products
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {selectedCategory === 'all' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">All Topics</h2>
                            <span className="text-sm text-gray-500">
                {filteredTopics.length} topics found
              </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredTopics.map((topic) => (
                                <Link key={topic.id} href={`/topics/${topic.id}`}>
                                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer group">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-2xl group-hover:scale-110 transition-transform">
                                                {topic.emoji}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                                                    {topic.name}
                                                </h3>
                                                <p className="text-xs text-gray-500">
                                                    {topic.productCount.toLocaleString()} products
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {filteredTopics.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
                        <p className="text-gray-500">Try adjusting your search terms</p>
                    </div>
                )}
            </section>
        </div>
    )
}