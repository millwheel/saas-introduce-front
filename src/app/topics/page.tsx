import Link from 'next/link'
import {allTopics, trendingTopics} from "@/data/mock";

export default function TopicsPage() {

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
                </div>
            </section>

            {/* Topics Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                {/* Trending Topics Section */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Topics</h2>
                    {trendingTopics.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {trendingTopics.map((topic) => (
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
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No trending topics found matching your search</p>
                        </div>
                    )}
                </section>

                {/* All Topics Section */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">All Topics</h2>
                        <span className="text-sm text-gray-500">
                            {allTopics.length} topics found
                        </span>
                    </div>

                    {allTopics.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {allTopics.map((topic) => (
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
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No topics found matching your search</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}