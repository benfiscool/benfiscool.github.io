'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

// This should match the blog posts from your blog page
const featuredProjects = [
  {
    id: 5,
    title: 'Senior Capstone Project: Foil Bearing Test Rig',
    description: 'My senior capstone project sponsored by Honeywell Aerospace - developing a test rig to evaluate the lifespan of foil bearings used in gas turbine engines.',
    date: '2025-01-20',
    tags: ['Honeywell', 'Aerospace', 'Foil Bearings', 'Test Rig', 'Senior Project'],
    category: 'Capstone'
  },
  {
    id: 1,
    title: 'Datsun Roadster Project',
    description: 'A 30-year restoration project involving reverse engineering, 3D scanning, and CNC machining to create a custom dashboard conversion kit for the Datsun community.',
    date: '2024-12-15',
    tags: ['Restoration', 'CNC', '3D Scanning', 'Reverse Engineering'],
    category: 'Projects'
  },
  {
    id: 6,
    title: 'Robotic Golf Caddy',
    description: 'Building an autonomous golf cart that uses computer vision and machine learning to follow me around the golf course while avoiding hazards like water and sand bunkers.',
    date: '2024-10-01',
    tags: ['Robotics', 'Computer Vision', 'Machine Learning', 'DIY', 'Golf'],
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
