'use client'

import { useState } from 'react'
import { ProductCard, ProductCardProps } from '@/components/ProductCard'
import {sampleProducts, topics} from "@/data/mock";


export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>(sampleProducts)
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [timeFilter, setTimeFilter] = useState<'7days' | '30days'>('7days')

  // 토픽 필터링
  const filteredProducts = selectedTopic === 'All'
      ? products
      : products.filter(product => product.topics.includes(selectedTopic))

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">IntroduceSaaS</h1>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {/* Topics Dropdown */}
                <div className="relative group">
                  <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                    Topics
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {topics.filter(topic => topic !== 'All').map((topic) => (
                          <button
                              key={topic}
                              onClick={() => setSelectedTopic(topic)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            {topic}
                          </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Products */}
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Top Products</a>

                {/* User Menu Dropdown */}
                <div className="relative group">
                  <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                    내 활동
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* User Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        내 반응
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        회원 정보
                      </a>
                      <hr className="my-1 border-gray-200" />
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        로그아웃
                      </a>
                    </div>
                  </div>
                </div>

                {/* Submit Product Button */}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Submit Product
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-gray-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

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
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-lg font-bold text-gray-900 mb-4">ProductHunt</h4>
                <p className="text-gray-600 mb-4">
                  최고의 SaaS 제품들을 발견하고 탐색하여 생산성과 워크플로를 향상시키세요.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h5 className="font-medium text-gray-900 mb-4">제품</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">제품 둘러보기</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">제품 등록</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">카테고리</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">인기 제품</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">신규 제품</a></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h5 className="font-medium text-gray-900 mb-4">회사</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-gray-900 transition-colors">소개</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">문의</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors flex items-center">
                    GitHub
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">개인정보처리방침</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">이용약관</a></li>
                  <li><a href="#" className="hover:text-gray-900 transition-colors">뉴스레터</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500">
                <div className="mb-4 md:mb-0">
                  © 2025 ProductHunt. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-gray-700 transition-colors">FAQ</a>
                  <a href="#" className="hover:text-gray-700 transition-colors">고객지원</a>
                  <a href="#" className="hover:text-gray-700 transition-colors">API</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}