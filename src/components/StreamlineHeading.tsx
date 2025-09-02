'use client'

import { ReactNode } from 'react'

interface StreamlineHeadingProps {
  children: ReactNode
  className?: string
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function StreamlineHeading({ 
  children, 
  className = '', 
  level = 'h2' 
}: StreamlineHeadingProps) {
  const Tag = level

  return (
    <div className="streamline-container relative overflow-hidden py-4">
      {/* Main heading */}
      <Tag className={`relative z-10 ${className}`}>
        {children}
      </Tag>
      
      {/* Top streamline */}
      <div 
        className="streamline streamline-top animate-streamline-1"
        style={{ 
          top: '-8px',
          animationDelay: '0s'
        }}
      />
      
      {/* Middle streamline */}
      <div 
        className="streamline streamline-middle animate-streamline-2"
        style={{ 
          top: '50%',
          transform: 'translateY(-50%)',
          animationDelay: '2.5s'
        }}
      />
      
      {/* Bottom streamline */}
      <div 
        className="streamline streamline-bottom animate-streamline-3"
        style={{ 
          bottom: '-8px',
          animationDelay: '5s'
        }}
      />

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle animate-particle-flow"
          style={{
            top: `${20 + i * 15}%`,
            left: '-10px',
            animationDelay: `${i * 1.2}s`,
            animationDuration: '6s'
          }}
        />
      ))}
    </div>
  )
}
