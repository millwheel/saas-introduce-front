

// 샘플 데이터
import {ProductCardProps} from "@/components/ProductCard";

export const sampleProducts: ProductCardProps[] = [
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

export const topics = ['AI', 'Productivity', 'Design', 'Developer Tools', 'Project Management', 'Creative Tools']
export const homeFilter = ['ALL', ...topics]