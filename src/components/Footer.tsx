'use client'

import { useState } from 'react'
import { X, Mail, User } from 'lucide-react'

export function Footer() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Benjamin Freeman. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <button 
                onClick={() => setShowContact(true)}
                className="text-gray-400 hover:text-stark-300 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close contact modal"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-stark-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-stark-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Benjamin Freeman</h3>
              <p className="text-gray-400 mb-6">Mechanical Engineering Student</p>
              
              <div className="flex items-center justify-center gap-3 p-4 bg-gray-800 rounded-lg">
                <Mail className="w-5 h-5 text-stark-400" />
                <a 
                  href="mailto:bencfreeman@outlook.com"
                  className="text-stark-300 hover:text-stark-200 transition-colors font-medium"
                >
                  bencfreeman@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
