'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-0 md:items-center">
      <motion.div 
        className="absolute inset-0 will-change-transform"
        style={{ y, opacity }}
      >
        <Image
          src="/bck.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          className="scale-110"
          priority
        />
      </motion.div>
      
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <div className="relative z-10 text-center px-3 sm:px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-stark-400/20 shadow-2xl" />
          
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8 lg:mb-12">
              <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                <motion.p
                  className="text-stark-400 text-sm sm:text-base lg:text-lg mb-4 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Hello, I'm
                </motion.p>

                <motion.h1
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 glow-text leading-tight break-words"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Benjamin Freeman
                </motion.h1>

                <motion.p
                  className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 lg:mb-6 font-light break-words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Mechanical Engineering Student
                </motion.p>

                <motion.p
                  className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-400 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-1 sm:px-2 break-words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  Senior at <span className="text-stark-400 font-semibold">Embry-Riddle Aeronautical University</span>{' '}
                  specializing in <span className="text-stark-400 font-semibold">jet engine propulsion systems</span>.
                  Passionate about pushing the boundaries of mechanical engineering.
                </motion.p>
              </div>

              <motion.div
                className="flex-shrink-0 order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="relative w-48 h-60 sm:w-64 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-stark-400/30 shadow-2xl mx-auto">
                  <Image
                    src="/portrait.jpg"
                    alt="Benjamin Freeman"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-stark-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <Link href="/resume" className="btn-primary flex items-center gap-2 group w-full sm:w-auto justify-center">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                View Resume
              </Link>
              <Link href="/about" className="btn-secondary flex items-center gap-2 group w-full sm:w-auto justify-center">
                <Rocket className="w-5 h-5 group-hover:animate-pulse" />
                Learn More
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-stark-400 cursor-pointer hover:text-stark-300 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-stark-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-stark-300 rounded-full animate-float opacity-40" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-stark-500 rounded-full animate-float opacity-80" />
      <div className="absolute bottom-60 right-10 w-2 h-2 bg-stark-400 rounded-full animate-float opacity-50" />
    </section>
  )
}
