'use client'

import Navbar from '@/components/Navbar'

/**
 * 主页组件
 * 展示网站的欢迎信息和主要入口
 * @returns {JSX.Element} 主页组件
 */
export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen" role="main">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Website
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a personal website built with Next.js and Tailwind CSS.
        </p>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          onClick={() => window.location.href = '/about'}
          aria-label="Get started with the website"
        >
          Get Started
        </button>
      </div>
    </main>
  )
} 