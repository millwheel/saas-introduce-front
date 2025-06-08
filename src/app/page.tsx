'use client'

import { useState } from 'react'
import { ProductCard, ProductCardProps, ReactionType } from '@/components/ProductCard'

// 샘플 데이터
const sampleProducts: ProductCardProps[] = [
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    summary: 'AI-powered workspace that combines notes, docs, and project management in one platform',
    websiteUrl: 'https://notion.so',
    viewCount: 1250,
    likeCount: 89,
    dislikeCount: 5,
    topics: ['AI', 'Productivity', 'Workspace'],
    userReaction: undefined
  },
  {
    slug: 'figma-dev-mode',
    name: 'Figma Dev Mode',
    summary: 'Bridge the gap between design and development with enhanced developer tools',
    websiteUrl: 'https://figma.com',
    viewCount: 980,
    likeCount: 76,
    dislikeCount: 3,
    topics: ['Design', 'Developer Tools', 'Collaboration'],
    userReaction: 'LIKE'
  },
  {
    slug: 'vercel-v0',
    name: 'Vercel v0',
    summary: 'Generate UI components from text prompts using AI-powered design tools',
    websiteUrl: 'https://v0.dev',
    viewCount: 2100,
    likeCount: 156,
    dislikeCount: 8,
    topics: ['AI', 'Code Generation', 'Frontend'],
    userReaction: undefined
  },
  {
    slug: 'linear-ai',
    name: 'Linear AI',
    summary: 'Project management tool with AI-powered issue tracking and team collaboration',
    websiteUrl: 'https://linear.app',
    viewCount: 750,
    likeCount: 45,
    dislikeCount: 2,
    topics: ['Project Management', 'AI', 'Team Collaboration'],
    userReaction: undefined
  },
  {
    slug: 'cursor-editor',
    name: 'Cursor',
    summary: 'AI-first code editor built for pair programming with artificial intelligence',
    websiteUrl: 'https://cursor.sh',
    viewCount: 1890,
    likeCount: 134,
    dislikeCount: 7,
    topics: ['AI', 'Code Editor', 'Developer Tools'],
    userReaction: 'DISLIKE'
  },
  {
    slug: 'midjourney-web',
    name: 'Midjourney Web',
    summary: 'Create stunning AI-generated artwork and images through web interface',
    websiteUrl: 'https://midjourney.com',
    viewCount: 3200,
    likeCount: 245,
    dislikeCount: 12,
    topics: ['AI', 'Image Generation', 'Creative Tools'],
    userReaction: undefined
  }
]

const topics = ['All', 'AI', 'Productivity', 'Design', 'Developer Tools', 'Project Management', 'Creative Tools']

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>(sampleProducts)
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [timeFilter, setTimeFilter] = useState<'7days' | '30days'>('7days')

  // 토픽 필터링
  const filteredProducts = selectedTopic === 'All'
      ? products
      : products.filter(product => product.topics.includes(selectedTopic))

  // 반응 처리 함수들
  const handleLike = (slug: string) => {
    setProducts(prev => prev.map(product => {
      if (product.slug === slug) {
        const wasLiked = product.userReaction === 'LIKE'
        const wasDisliked = product.userReaction === 'DISLIKE'

        return {
          ...product,
          userReaction: wasLiked ? undefined : 'LIKE' as ReactionType,
          likeCount: wasLiked ? product.likeCount - 1 : product.likeCount + 1,
          dislikeCount: wasDisliked ? product.dislikeCount - 1 : product.dislikeCount
        }
      }
      return product
    }))
  }

  const handleDislike = (slug: string) => {
    setProducts(prev => prev.map(product => {
      if (product.slug === slug) {
        const wasLiked = product.userReaction === 'LIKE'
        const wasDisliked = product.userReaction === 'DISLIKE'

        return {
          ...product,
          userReaction: wasDisliked ? undefined : 'DISLIKE' as ReactionType,
          dislikeCount: wasDisliked ? product.dislikeCount - 1 : product.dislikeCount + 1,
          likeCount: wasLiked ? product.likeCount - 1 : product.likeCount
        }
      }
      return product
    }))
  }

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">ProductHunt</h1>
                <span className="text-sm text-gray-500">Discover amazing SaaS products</span>
              </div>

              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Topics</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Submit Product
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover the Best SaaS Products
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find and explore cutting-edge SaaS tools that can transform your workflow and boost productivity
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
                {topics.map((topic) => (
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
        <main className="max-w-6xl mx-auto px-4 py-8">
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
                    onLike={() => handleLike(product.slug)}
                    onDislike={() => handleDislike(product.slug)}
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
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-bold text-gray-900 mb-4">ProductHunt</h4>
                <p className="text-gray-600 mb-4">
                  Discover and explore the best SaaS products to enhance your productivity and workflow.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-4">Product</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Browse Products</a></li>
                  <li><a href="#" className="hover:text-gray-900">Submit Product</a></li>
                  <li><a href="#" className="hover:text-gray-900">Categories</a></li>
                  <li><a href="#" className="hover:text-gray-900">Featured</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-4">Company</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">About</a></li>
                  <li><a href="#" className="hover:text-gray-900">Contact</a></li>
                  <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
              © 2025 ProductHunt. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
  )
}