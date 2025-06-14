export default function Home() {

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

      </>
  )
}