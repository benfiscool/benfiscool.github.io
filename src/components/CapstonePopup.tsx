'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, BookOpen } from 'lucide-react'
import Link from 'next/link'

export function CapstonePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds, but only if not previously dismissed
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('capstone-popup-dismissed')
      if (!dismissed) {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    localStorage.setItem('capstone-popup-dismissed', 'true')
  }

  const handleReadMore = () => {
    setIsVisible(false)
    // Navigate to blog post (will be created later)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 100, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.6 
          }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-xs sm:max-w-sm mx-4 sm:mx-0"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-2xl p-4 sm:p-6 backdrop-blur-xl relative">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Honeywell logo/badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">SPONSORED BY HONEYWELL</span>
            </div>

            {/* Main content */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-stark-400" />
                My Capstone Project
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover my senior capstone project sponsored by Honeywell! An exciting engineering challenge involving cutting-edge aerospace technology.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <Link
                href="/blog/5" // Will be the capstone blog post ID
                className="flex-1 bg-stark-600 hover:bg-stark-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                onClick={handleReadMore}
              >
                <ExternalLink className="w-4 h-4" />
                Read More
              </Link>
              <button
                onClick={handleDismiss}
                className="px-4 py-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                Later
              </button>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-stark-500/10 to-red-500/10 rounded-xl pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
