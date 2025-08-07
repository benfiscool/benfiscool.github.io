'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

// This should match the blog posts from your blog page
const featuredProjects = [
  {
    id: 1,
    title: 'Datsun Roadster Project',
    description: 'A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.',
    date: '2024-12-15',
    tags: ['Restoration', 'CNC', '3D Scanning', 'Reverse Engineering'],
    category: 'Projects'
  }
]

export function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blog/${project.id}`} className="group block">
                <div className="card-glass p-6 h-full hover:bg-gray-800/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-2 text-sm text-stark-400 mb-3">
                    <span className="px-2 py-1 bg-stark-600/20 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-stark-300 mb-3 group-hover:text-stark-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-stark-400 font-semibold group-hover:text-stark-300 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          
          {/* Placeholder projects to fill the grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass p-6 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-center min-h-[300px]"
          >
            <div className="text-gray-500 mb-3">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">More Projects Coming Soon</h3>
            <p className="text-gray-500 text-sm">
              Additional engineering projects and case studies will be featured here.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-glass p-6 border-2 border-dashed border-gray-700 flex flex-col items-center justify-center text-center min-h-[300px]"
          >
            <div className="text-gray-500 mb-3">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Engineering Projects</h3>
            <p className="text-gray-500 text-sm">
              Stay tuned for more detailed engineering analyses and project breakdowns.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/blog" className="btn-secondary inline-flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
