'use client'

import { motion } from 'framer-motion'
import { StreamlineHeading } from './StreamlineHeading'

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
          <motion.div variants={itemVariants}>
            <StreamlineHeading className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
              About Me
            </StreamlineHeading>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="card-glass p-8 md:p-12">
              <div className="text-lg text-gray-300 leading-relaxed mb-8">
                <p>
                  Hello, and thanks for visiting my site! I'm Ben, a mechanical engineering senior at Embry-Riddle Aeronautical University in Prescott, Arizona. I love my degree, and I especially love the hands-on experience that it affords me. I've been the president of our on-campus makerspace for two years, assisting students in 3D printing, operation of shop tools, and programming and running our Shopbot CNC router. I also love to be outdoors - especially mountain biking, whether by my home in Phoenix or up at school in Prescott! I'm eager to continue my work in engineering as I graduate college and move on to developing in my career. I appreciate you taking the time to browse my site, and thanks for stopping by!
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
