'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Settings, Linkedin, Mail } from 'lucide-react'

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
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Settings className="w-8 h-8 text-stark-400 group-hover:text-stark-300 transition-colors animate-spin-slow" />
              <div className="absolute inset-0 w-8 h-8 bg-stark-400/20 rounded-full blur-md group-hover:bg-stark-300/30 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white group-hover:text-stark-300 transition-colors">
                Benjamin Freeman
              </span>
              <span className="text-sm text-gray-400 group-hover:text-stark-400 transition-colors">
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
              target="_blank"
              rel="noopener noreferrer"
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
              className="md:hidden mt-4 pb-4 border-t border-gray-800"
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
                  target="_blank"
                  rel="noopener noreferrer"
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
