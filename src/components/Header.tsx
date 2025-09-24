'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, Linkedin, Mail } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-gray-900/90 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <svg 
                className="w-8 h-8 text-stark-400 group-hover:text-stark-300 transition-colors animate-spin-slow" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
              </svg>
              <div className="absolute inset-0 w-8 h-8 bg-stark-400/20 rounded-full blur-md group-hover:bg-stark-300/30 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-white group-hover:text-stark-300 transition-colors">
                Benjamin Freeman
              </span>
              <span className="text-xs text-gray-400 group-hover:text-stark-400 transition-colors leading-tight">
                Mechanical Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-stark-300 transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stark-400 transition-all group-hover:w-full" />
              </Link>
            ))}
            
            {/* LinkedIn Button */}
            <Link
              href="https://www.linkedin.com/in/bcfreem/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-stark-300 transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">Connect</span>
            </Link>
            
            {/* Email Button */}
            <Link
              href="mailto:bencfreeman@outlook.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-stark-300 transition-colors group"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-stark-300 transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-md rounded-b-lg -mx-6 px-6"
            >
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-stark-300 transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile LinkedIn Link */}
                <Link
                  href="https://www.linkedin.com/in/bcfreem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-stark-300 transition-colors py-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </Link>
                
                {/* Mobile Email Link */}
                <Link
                  href="mailto:bencfreeman@outlook.com"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-stark-300 transition-colors py-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
