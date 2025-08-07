'use client'

import { useEffect, useRef } from 'react'

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix characters
    const chars = '0123456789ABCDEF'
    const charArray = chars.split('')

    const fontSize = 14
    const columns = canvas.width / fontSize

    // Array of drop positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    // Animation function
    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text style
      ctx.fillStyle = 'rgba(14, 165, 233, 0.1)'
      ctx.font = `${fontSize}px monospace`

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop randomly or when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
      style={{ background: 'transparent' }}
    />
  )
}
