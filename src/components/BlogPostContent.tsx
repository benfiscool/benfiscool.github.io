'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowLeft, User } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  tags: string[]
  content: string
  // Optional: when provided, will load HTML from this path (e.g., `/blog/datsun-roadster/content.html`)
  contentPath?: string
}

interface BlogPostContentProps {
  post: BlogPost | null
  postId: string
}

export default function BlogPostContent({ post, postId }: BlogPostContentProps) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stark-300 mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-stark-400 hover:text-stark-300 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stark-400 mb-4">
            <span className="px-2 sm:px-3 py-1 bg-stark-600/20 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 glow-text leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs sm:text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-b border-gray-800 py-4 sm:py-6 gap-4 sm:gap-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stark-600/20 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-stark-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">Benjamin Freeman</p>
                <p className="text-gray-400 text-xs sm:text-sm">Mechanical Engineering Student</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none"
        >
          <ContentRenderer post={post} />
        </motion.article>

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-stark-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 sm:w-8 sm:h-8 text-stark-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">Benjamin Freeman</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Senior Mechanical Engineering Student at Embry-Riddle, 
                  specializing in jet propulsion systems.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link 
                href="/blog"
                className="btn-primary text-sm sm:text-base"
              >
                More Posts
              </Link>
            </div>
          </div>
        </motion.footer>

        {/* Related Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-stark-300 mb-6 sm:mb-8">More Posts Coming Soon</h2>
          
          <div className="card-glass p-6 sm:p-8 text-center">
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              I'm working on more blog posts about my engineering projects and experiences.
            </p>
            <p className="text-stark-400 text-sm sm:text-base">
              Check back soon for updates!
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

function ContentRenderer({ post }: { post: { content: string; contentPath?: string } }) {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    let ignore = false
    async function load() {
      if (post.contentPath) {
        try {
          const res = await fetch(post.contentPath)
          const text = await res.text()
          if (!ignore) setHtml(text)
        } catch (e) {
          if (!ignore) setHtml(post.content)
        }
      } else {
        setHtml(post.content)
      }
    }
    load()
    return () => { ignore = true }
  }, [post.contentPath, post.content])

  return (
    <div
      className="text-gray-300 leading-relaxed blog-content"
      dangerouslySetInnerHTML={{ __html: html ?? '' }}
    />
  )
}
