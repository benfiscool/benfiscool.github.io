'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Datsun Roadster Project',
    excerpt: 'A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.',
    content: 'Full content here...',
    date: '2024-12-15',
    readTime: '6 min read',
    category: 'Projects',
    tags: ['Restoration', 'CNC', '3D Scanning', 'Reverse Engineering'],
    featured: true
  },
  {
    id: 2,
    title: 'CNC Tubing Coper',
    excerpt: 'Building a custom CNC machine to help the Formula SAE team cope tubing with high accuracy and minimal human intervention, solving chassis asymmetry issues.',
    content: 'Full content here...',
    date: '2024-11-20',
    readTime: '8 min read',
    category: 'Projects',
    tags: ['CNC', 'Formula SAE', 'Manufacturing', 'Automation', 'Plasma Cutting'],
    featured: false
  },
  {
    id: 3,
    title: 'DIY Balancing Skateboard',
    excerpt: 'Building my own OneWheel-inspired balancing skateboard from scratch using a VESC motor controller, aluminum chassis, and custom PID tuning for the perfect ride.',
    content: 'Full content here...',
    date: '2024-10-15',
    readTime: '5 min read',
    category: 'Projects',
    tags: ['DIY', 'Electric Vehicle', 'PID Control', 'VESC', 'Fabrication'],
    featured: false
  },
  {
    id: 4,
    title: 'CNC Machined Custom Shift Knob',
    excerpt: 'Learning CNC machining through hands-on experience creating a custom aluminum shift knob using both lathe and mill operations in a machine shop class.',
    content: 'Full content here...',
    date: '2024-09-20',
    readTime: '4 min read',
    category: 'Projects',
    tags: ['CNC Machining', 'Lathe', 'Mill', 'Aluminum', 'CAM Programming'],
    featured: false
  },
  {
    id: 5,
    title: 'Senior Capstone: Honeywell Aerospace Project',
    excerpt: 'My senior capstone project sponsored by Honeywell, focusing on cutting-edge aerospace technology and engineering innovation.',
    content: 'Full content here...',
    date: '2025-08-30',
    readTime: '10 min read',
    category: 'Capstone',
    tags: ['Honeywell', 'Aerospace', 'Capstone', 'Senior Project', 'Engineering'],
    featured: true
  }
]

const categories = ['All', 'Projects', 'Capstone']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Engineering Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thoughts, discoveries, and insights from my journey through mechanical engineering 
            and jet propulsion systems. Join me as I explore the fascinating world of aerospace technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-stark-500 hover:text-stark-300 transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-stark-300 mb-8">Featured Posts</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="card-glass p-6 h-full hover:bg-gray-800/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-2 text-sm text-stark-400 mb-3">
                    <span className="px-2 py-1 bg-stark-600/20 rounded-full">
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
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-stark-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-stark-400 font-semibold group-hover:text-stark-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* All Posts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-stark-300 mb-8">All Posts</h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="card-glass p-6 h-full hover:bg-gray-800/50 transition-all duration-300 group-hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-stark-600/20 text-stark-400 rounded-full text-sm">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-stark-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-stark-400 text-sm font-semibold group-hover:text-stark-300 transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
