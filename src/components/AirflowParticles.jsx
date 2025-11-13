import React, { useRef, useEffect } from 'react'

// Subtle airflow particle animation using Canvas
export default function AirflowParticles({ color = 'rgba(0,184,217,0.35)', density = 0.0015 }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      const count = Math.floor(width * height * density)
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        v: 0.3 + Math.random() * 0.7,
        a: Math.random() * Math.PI * 2,
        l: 8 + Math.random() * 24,
        o: 0.25 + Math.random() * 0.6,
      }))
    }

    const flowField = (x, y) => {
      // Pseudo flow field combining sine waves to evoke aerodynamic streamlines
      const s = Math.sin(y * 0.002) * 0.7 + Math.cos(x * 0.0025) * 0.3
      return s * Math.PI
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1
      particlesRef.current.forEach(p => {
        const a = flowField(p.x, p.y) + p.a
        const dx = Math.cos(a) * p.v
        const dy = Math.sin(a) * p.v
        const x2 = p.x + dx * p.l
        const y2 = p.y + dy * p.l
        ctx.strokeStyle = color
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(x2, y2)
        ctx.stroke()
        p.x = (x2 + width) % width
        p.y = (y2 + height) % height
      })
      rafRef.current = requestAnimationFrame(step)
    }

    initParticles()
    step()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [color, density])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
      style={{ filter: 'blur(0.2px)' }}
    />
  )
}
