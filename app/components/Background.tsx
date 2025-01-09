
import React, { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  speed: number
  size: number
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 1000)
      return Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.1 + Math.random() * 0.3,
        size: 1 + Math.random()
      }))
    }

    let stars = createStars()

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#ffffff'
      stars.forEach(star => {
        ctx.fillRect(star.x, star.y, star.size, star.size)
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })
      animationFrameId = requestAnimationFrame(drawStars)
    }

    drawStars()

    const handleResize = () => {
      resizeCanvas()
      stars = createStars()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, #0A141E, #310A31)',
        zIndex: -1,
      }}
    />
  )
}

