'use client'

import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
          >
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="card-glass p-8 md:p-12">
              <div className="text-lg text-gray-300 leading-relaxed mb-8">
                <p>
                  Hello, and thanks for visiting my site! I'm Ben, a mechanical engineer and recent graduate from Embry-Riddle Aeronautical University. With a strong foundation in CAD design, machining, and fabrication, I'm eager to launch my career in mechanical engineering. As a former Machine Shop Student Employee at ERAU's campus machine shop, I helped students with CNC and manual machining while producing parts from conception to completion. I've also worked as a Product Designer at Dyno-Comp Performance Tuning, where I conducted 3D scans and CFD analysis for performance vehicles. I love being outdoors - especially mountain biking, whether by my home in Phoenix or up in Prescott! I'm eager to grow my career in engineering and apply my diverse skill set to challenging projects. Thanks for taking the time to browse my site!
                </p>
              </div>
              <div className="text-center">
                <motion.a
                  href="/about"
                  className="btn-primary inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
