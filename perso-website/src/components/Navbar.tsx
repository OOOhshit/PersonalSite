"use client"

import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="text-xl font-bold">
            PM Portfolio
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            About
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
} 