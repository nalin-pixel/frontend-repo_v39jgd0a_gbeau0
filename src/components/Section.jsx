import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, children, bg = 'bg-[#0B132B]', overlay }) {
  return (
    <section id={id} className={`relative w-full min-h-screen ${bg} text-white overflow-hidden`}>      
      {/* Parallax gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      {overlay}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16"
      >
        {children}
      </motion.div>
    </section>
  )
}
