'use client'

import Link from 'next/link'

// 导航链接的类型定义
interface NavLink {
  href: string
  label: string
}

// 导航链接数据
const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

/**
 * Navbar 组件
 * 提供网站的主要导航功能
 * @returns {JSX.Element} 导航栏组件
 */
export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-white shadow-lg" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              <Link 
                href="/" 
                className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
                aria-label="Home page"
              >
                My Website
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-4 px-2 text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 