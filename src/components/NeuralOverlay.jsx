import React from 'react'
import { motion } from 'framer-motion'

// Animated neural-network style overlay using SVG polylines
export default function NeuralOverlay() {
  const nodes = Array.from({ length: 16 }, (_, i) => ({
    x: (i % 4) * 25 + 5,
    y: Math.floor(i / 4) * 20 + 10,
  }))
  const links = [
    [0, 5], [1, 6], [2, 7], [3, 8],
    [4, 9], [5, 10], [6, 11], [7, 12],
    [8, 13], [9, 14], [10, 15],
    [0, 6], [1, 7], [2, 8], [3, 9],
  ]

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 80"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 1.2 }}
    >
      {links.map((l, idx) => (
        <motion.line
          key={idx}
          x1={nodes[l[0]].x}
          y1={nodes[l[0]].y}
          x2={nodes[l[1]].x}
          y2={nodes[l[1]].y}
          stroke="#00B8D9"
          strokeWidth={0.3}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: idx * 0.05, repeat: Infinity, repeatType: 'mirror' }}
        />
      ))}
      {nodes.map((n, idx) => (
        <motion.circle
          key={idx}
          cx={n.x}
          cy={n.y}
          r={0.8}
          fill="#00B8D9"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.5, delay: idx * 0.07, repeat: Infinity }}
        />
      ))}
    </motion.svg>
  )
}
