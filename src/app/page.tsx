'use client'

import { useState } from 'react'
import { ProductCard, ProductCardProps } from '@/components/ProductCard'
import {homeFilter, sampleProducts} from "@/data/mock";

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>(sampleProducts)
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [timeFilter, setTimeFilter] = useState<'7days' | '30days'>('7days')

  // 토픽 필터링
  const filteredProducts = selectedTopic === 'All'
      ? products
      : products.filter(product => product.topics.includes(selectedTopic))

  return (
      <>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              최고의 SaaS 제품을 만나보세요
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              워크플로우를 혁신하고 생산성을 향상시킬 수 있는 최첨단 SaaS 도구를 찾고 탐색하세요
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Time Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Trending:</span>
                <button
                    onClick={() => setTimeFilter('7days')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        timeFilter === '7days'
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Last 7 days
                </button>
                <button
                    onClick={() => setTimeFilter('30days')}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        timeFilter === '30days'
                            ? 'bg-blue-100 text-blue-800 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Last 30 days
                </button>
              </div>

              {/* Topic Filter */}
              <div className="flex flex-wrap gap-2">
                {homeFilter.map((topic) => (
                    <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                            selectedTopic === topic
                                ? 'bg-blue-100 text-blue-800 font-medium'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                    >
                      {topic}
                    </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedTopic === 'All' ? 'All Products' : `${selectedTopic} Products`}
            </h3>
            <span className="text-sm text-gray-500">
            {filteredProducts.length} products found
          </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.slug}
                    {...product}
                />
            ))}
          </div>

          {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
          )}
        </section>
      </>
  )
}