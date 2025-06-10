'use client'

import axios from 'axios';
import Link from 'next/link'
import {useEffect, useState} from "react";
import {TopicType} from "@/data/type";

export default function TopicsPage() {
    const [topics, setTopics] = useState<TopicType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:8080/topics')
            .then((res) => {
                console.log('data', res.data)
                setTopics(res.data)
            })
            .catch((err) => {
                console.error('Failed to fetch topics', err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Browse Topics
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        {loading ? 'Loading topics...' : `Browse saas across ${topics.length} topics`}
                    </p>
                </div>
            </section>

            {/* Topics Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">All Topics</h2>
                        <span className="text-sm text-gray-500">
                            {topics.length} topics found
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {topics.map((topic) => (
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
                </section>
            </div>
        </div>
    )
}