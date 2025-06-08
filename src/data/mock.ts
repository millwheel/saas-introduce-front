

// 샘플 데이터
import {ProductCardProps} from "@/components/ProductCard";
import {ProductCard, TopicCard} from "@/data/type";

export const sampleProducts: ProductCardProps[] = [

]

export const homeFilter = ['ALL', 'AI', 'Productivity', 'Design', 'Developer Tools', 'Project Management', 'Creative Tools']

export const homeProducts: ProductCard[] = [
    {
        slug: 'notion-ai',
        name: 'Notion AI',
        summary: 'AI-powered workspace that combines notes, docs, and project management in one platform',
        tags: ['AI', 'Productivity', 'Workspace'],
    },
    {
        slug: 'figma-dev-mode',
        name: 'Figma Dev Mode',
        summary: 'Bridge the gap between design and development with enhanced developer tools',
        tags: ['Design', 'Developer Tools', 'Collaboration'],
    },
    {
        slug: 'vercel-v0',
        name: 'Vercel v0',
        summary: 'Generate UI components from text prompts using AI-powered design tools',
        tags: ['AI', 'Code Generation', 'Frontend'],
    },
    {
        slug: 'linear-ai',
        name: 'Linear AI',
        summary: 'Project management tool with AI-powered issue tracking and team collaboration',
        tags: ['Project Management', 'AI', 'Team Collaboration'],
    },
    {
        slug: 'cursor-editor',
        name: 'Cursor',
        summary: 'AI-first code editor built for pair programming with artificial intelligence',
        tags: ['AI', 'Code Editor', 'Developer Tools'],
    },
    {
        slug: 'midjourney-web',
        name: 'Midjourney Web',
        summary: 'Create stunning AI-generated artwork and images through web interface',
        tags: ['AI', 'Image Generation', 'Creative Tools'],
    }
]

export const trendingTopics: TopicCard[] = [
    { id: 'saas', name: 'SaaS', emoji: '💻', description: 'Software as a Service solutions', productCount: 2847, trending: true },
    { id: 'ai-tools', name: 'AI Tools', emoji: '🤖', description: 'Artificial Intelligence powered tools', productCount: 1923, trending: true },
    { id: 'developer-tools', name: 'Developer Tools', emoji: '🔧', description: 'Tools for developers and engineers', productCount: 1456, trending: true },
    { id: 'web-tools', name: 'Web Tools', emoji: '🔨', description: 'Web-based productivity tools', productCount: 1234, trending: true },
    { id: 'mobile', name: 'Mobile', emoji: '📱', description: 'Mobile applications and services', productCount: 987, trending: true },
    { id: 'productivity', name: 'Productivity', emoji: '⚡', description: 'Tools to boost your productivity', productCount: 856, trending: true },
    { id: 'design', name: 'Design', emoji: '🎨', description: 'Design tools and resources', productCount: 743, trending: true },
    { id: 'marketing', name: 'Marketing', emoji: '📈', description: 'Marketing and growth tools', productCount: 621, trending: true },
]

export const allTopics: TopicCard[] = [
    { id: '3d', name: '3D', emoji: '🎥', description: '3D design and modeling tools', productCount: 89 },
    { id: 'accounting', name: 'Accounting', emoji: '💰', description: 'Financial accounting solutions', productCount: 156 },
    { id: 'advertising', name: 'Advertising', emoji: '📢', description: 'Advertising platforms and tools', productCount: 234 },
    { id: 'ai-assistant', name: 'AI Assistant', emoji: '🤖', description: 'AI-powered personal assistants', productCount: 345 },
    { id: 'analytics', name: 'Analytics', emoji: '📊', description: 'Data analytics and insights', productCount: 467 },
    { id: 'api', name: 'API', emoji: '🔌', description: 'Application programming interfaces', productCount: 123 },
    { id: 'apps', name: 'Apps', emoji: '📱', description: 'Mobile and web applications', productCount: 789 },
    { id: 'automation', name: 'Automation', emoji: '⚙️', description: 'Process automation tools', productCount: 345 },
    { id: 'b2b', name: 'B2B', emoji: '💼', description: 'Business to business solutions', productCount: 567 },
    { id: 'blockchain', name: 'Blockchain', emoji: '⛓️', description: 'Blockchain and crypto tools', productCount: 234 },
    { id: 'business', name: 'Business', emoji: '🏢', description: 'General business tools', productCount: 678 },
    { id: 'collaboration', name: 'Collaboration', emoji: '👥', description: 'Team collaboration tools', productCount: 345 },
    { id: 'communication', name: 'Communication', emoji: '💬', description: 'Communication platforms', productCount: 456 },
    { id: 'content', name: 'Content', emoji: '📝', description: 'Content creation and management', productCount: 567 },
    { id: 'crm', name: 'CRM', emoji: '📋', description: 'Customer relationship management', productCount: 234 },
    { id: 'crypto', name: 'Crypto', emoji: '₿', description: 'Cryptocurrency tools and services', productCount: 189 },
    { id: 'customer-service', name: 'Customer Service', emoji: '🎧', description: 'Customer support solutions', productCount: 278 },
    { id: 'data', name: 'Data', emoji: '📊', description: 'Data management and processing', productCount: 445 },
    { id: 'e-commerce', name: 'E-commerce', emoji: '🛒', description: 'Online commerce solutions', productCount: 567 },
    { id: 'education', name: 'Education', emoji: '📚', description: 'Educational tools and platforms', productCount: 456 },
    { id: 'email', name: 'Email', emoji: '📧', description: 'Email management and marketing', productCount: 234 },
    { id: 'finance', name: 'Finance', emoji: '💵', description: 'Financial management tools', productCount: 345 },
    { id: 'fitness', name: 'Fitness', emoji: '💪', description: 'Health and fitness applications', productCount: 234 },
    { id: 'games', name: 'Games', emoji: '🎮', description: 'Gaming platforms and tools', productCount: 345 },
    { id: 'healthcare', name: 'Healthcare', emoji: '🏥', description: 'Healthcare and medical tools', productCount: 234 },
    { id: 'hr', name: 'HR', emoji: '👥', description: 'Human resources management', productCount: 189 },
    { id: 'lifestyle', name: 'Lifestyle', emoji: '🌟', description: 'Lifestyle and personal tools', productCount: 345 },
    { id: 'music', name: 'Music', emoji: '🎵', description: 'Music creation and streaming', productCount: 234 },
    { id: 'news', name: 'News', emoji: '📰', description: 'News and media platforms', productCount: 123 },
    { id: 'project-management', name: 'Project Management', emoji: '📋', description: 'Project planning and management', productCount: 456 },
    { id: 'real-estate', name: 'Real Estate', emoji: '🏠', description: 'Real estate management tools', productCount: 234 },
    { id: 'security', name: 'Security', emoji: '🔒', description: 'Cybersecurity and privacy tools', productCount: 345 },
    { id: 'social-media', name: 'Social Media', emoji: '💬', description: 'Social media management', productCount: 456 },
    { id: 'startups', name: 'Startups', emoji: '🚀', description: 'Startup tools and resources', productCount: 567 },
    { id: 'travel', name: 'Travel', emoji: '✈️', description: 'Travel planning and booking', productCount: 234 },
    { id: 'video', name: 'Video', emoji: '🎥', description: 'Video creation and editing', productCount: 345 },
    { id: 'web-design', name: 'Web Design', emoji: '💻', description: 'Web design and development', productCount: 456 },
]