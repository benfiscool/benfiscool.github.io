'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content: string
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
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-stark-400 hover:text-stark-300 transition-colors"
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
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-stark-400 mb-4">
            <span className="px-3 py-1 bg-stark-600/20 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author & Share */}
          <div className="flex items-center justify-between border-t border-b border-gray-800 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-stark-600/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-stark-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Benjamin Freeman</p>
                <p className="text-gray-400 text-sm">Mechanical Engineering Student</p>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-stark-400 hover:text-stark-300 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div 
            className="text-gray-300 leading-relaxed blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>

        {/* Article Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-stark-600/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-stark-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Benjamin Freeman</h3>
                <p className="text-gray-400">
                  Senior Mechanical Engineering Student at Embry-Riddle, 
                  specializing in jet propulsion systems.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Link 
                href="/blog"
                className="btn-primary"
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
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-stark-300 mb-8">More Posts Coming Soon</h2>
          
          <div className="card-glass p-8 text-center">
            <p className="text-gray-400 mb-4">
              I'm working on more blog posts about my engineering projects and experiences.
            </p>
            <p className="text-stark-400">
              Check back soon for updates!
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
