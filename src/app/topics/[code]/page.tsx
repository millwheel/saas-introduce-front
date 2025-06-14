import Link from 'next/link'
import {TopicProductResponse, TopicResponse} from "@/data/type";

async function getTopic(code: string): Promise<TopicResponse | null> {
    try {
        const res = await fetch(`http://localhost:8080/topics/${code}`, {
            next: { revalidate: 60 }
        })

        if (!res.ok) {
            console.error(`Failed to fetch topic: ${res.status} ${res.statusText}`)
            return null
        }

        return res.json()
    } catch (error) {
        console.error('Error fetching topic:', error)
        return null
    }
}

function SimpleProductCard({ product }: { product: TopicProductResponse }) {
    return (
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md hover:border-blue-200 transition-all duration-200">
            <Link href={`/products/${product.slug}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
            </Link>
            <p className="text-gray-600 text-sm line-clamp-3">
                {product.summary}
            </p>
        </div>
    )
}

export default async function TopicDetailPage({params}: {
    params: { code: string }
}) {
    const { code } = await params
    const topic = await getTopic(code)
    
    if (!topic) {
        return (
            <div className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-br from-red-50 to-pink-100 py-16">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Topic Not Found
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            The topic doesn&#39;t exist.
                        </p>
                        <Link
                            href="/topics"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Browse All Topics
                        </Link>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-600 mb-6">
                        <Link href="/topics" className="hover:text-blue-600">
                            Topics
                        </Link>
                        <span className="mx-2">→</span>
                        <span className="text-gray-900">{topic.name}</span>
                    </nav>

                    <div className="text-center">
                        <div className="text-6xl mb-4">{topic.emoji}</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {topic.name}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Discover {topic.products.length} amazing products in {topic.name}
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Products in {topic.name}
                    </h2>
                    <span className="text-sm text-gray-500">
                        {topic.products.length} products found
                    </span>
                </div>

                {topic.products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topic.products.map((product) => (
                            <SimpleProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-6V8h6v5z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No products yet
                        </h3>
                        <p className="text-gray-500 mb-6">
                            There are no products in this topic at the moment.
                        </p>
                        <Link
                            href="/topics"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Browse Other Topics
                        </Link>
                    </div>
                )}
            </section>

            {/* Back to Topics */}
            <section className="max-w-6xl mx-auto px-4 pb-12">
                <div className="text-center">
                    <Link
                        href="/topics"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All Topics
                    </Link>
                </div>
            </section>
        </div>
    )
}