import { Chat } from '@/components/Chat'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, BarChart2, Users, Lightbulb } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-[640px]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Crafting Exceptional Product Experiences
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Senior Product Manager focused on user experience design and innovation. Helping businesses create competitive digital products that drive user satisfaction and business growth.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">User Experience Design</h3>
              <p className="text-muted-foreground">
                Deep understanding of user needs to design intuitive interfaces that enhance user satisfaction and product competitiveness.
              </p>
            </Card>
            <Card className="p-6">
              <BarChart2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data-Driven Decisions</h3>
              <p className="text-muted-foreground">
                Leveraging data analysis and user research to develop fact-based product strategies and optimize performance.
              </p>
            </Card>
            <Card className="p-6">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product Innovation</h3>
              <p className="text-muted-foreground">
                Combining market trends and technological innovation to develop forward-thinking features that maintain competitive advantage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post preview cards will go here */}
          </div>
        </div>
      </section>

      {/* Chat Component */}
      <Chat />
    </div>
  )
}
