import Link from 'next/link';
import { ProductResponse } from "@/data/type";

async function getProduct(code: string): Promise<ProductResponse | null> {
    try {
        const res = await fetch(`http://localhost:8080/${code}`, {
            next: { revalidate: 60 }
        });

        if (!res.ok) {
            console.error(`Failed to fetch product: ${res.status} ${res.statusText}`);
            return null;
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatViews(views: number): string {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
}

export default async function ProductDetailPage({
                                                    params
                                                }: {
    params: { slug: string }
}) {
    const { slug } = params;
    const product = await getProduct(slug);

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-br from-red-50 to-pink-100 py-16">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            제품을 찾을 수 없습니다
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            요청하신 제품이 존재하지 않거나 삭제되었습니다.
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            홈으로 돌아가기
                        </Link>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-600 mb-6">
                        <Link href="/" className="hover:text-blue-600">
                            홈
                        </Link>
                        <span className="mx-2">→</span>
                        <span className="text-gray-900">{product.name}</span>
                    </nav>

                    <div className="text-center">
                        {/* Product Icon */}
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg opacity-90" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            {product.summary}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href={product.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                웹사이트 방문
                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                            <button className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                좋아요
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{formatViews(product.totalViews)}</div>
                                <div className="text-sm text-gray-600">총 조회수</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{formatDate(product.createdAt)}</div>
                                <div className="text-sm text-gray-600">등록일</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">{formatDate(product.updatedAt)}</div>
                                <div className="text-sm text-gray-600">수정일</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Description */}
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">제품 소개</h2>
                        <div className="prose prose-gray max-w-none">
                            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {product.description}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="border-t border-gray-200 p-8 bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">제품 정보</h3>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <dt className="text-sm font-medium text-gray-500">제품 코드</dt>
                                <dd className="mt-1 text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                                    {product.code}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">웹사이트</dt>
                                <dd className="mt-1">
                                    <a
                                        href={product.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 hover:text-blue-700 hover:underline break-all"
                                    >
                                        {product.websiteUrl}
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">등록일시</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {new Date(product.createdAt).toLocaleString('ko-KR')}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-500">수정일시</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {new Date(product.updatedAt).toLocaleString('ko-KR')}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            {/* Back Navigation */}
            <section className="max-w-4xl mx-auto px-4 pb-12">
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        다른 제품 둘러보기
                    </Link>
                </div>
            </section>
        </div>
    );
}