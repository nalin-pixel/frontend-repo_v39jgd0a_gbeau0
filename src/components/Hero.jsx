import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import AirflowParticles from './AirflowParticles'
import NeuralOverlay from './NeuralOverlay'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#0B132B] text-white overflow-hidden">
      {/* 3D VAWT */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/eCQ2E3PpnWVVY5aw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0">
        <AirflowParticles />
        <NeuralOverlay />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            style={{ textShadow: '0 2px 24px rgba(0,184,217,0.25)' }}
          >
            VAWTelligence – AWET Research Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-4 text-lg sm:text-2xl text-slate-200"
          >
            AI-Driven Multi-Objective Optimization for Vertical-Axis Wind Turbines
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#dashboard" className="px-5 py-3 rounded-md bg-cyan-500 text-[#0B132B] font-semibold hover:bg-cyan-400 transition">Explore Platform</a>
            <a href="#research" className="px-5 py-3 rounded-md border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition">Research Papers</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition">Contact</a>
          </motion.div>
        </div>
      </div>

      {/* Parallax hint text */}
      <div className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-xs text-slate-300">
        Parallax airflow + CFD contours
      </div>
    </section>
  )
}
