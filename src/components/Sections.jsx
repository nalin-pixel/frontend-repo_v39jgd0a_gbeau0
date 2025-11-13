import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function Sections() {
  return (
    <>
      {/* About Section */}
      <Section id="about" overlay={<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,184,217,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" /> }>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About the Platform</h2>
            <p className="mt-4 text-slate-200 leading-relaxed">
              Developed in alignment with Dr. Amir Zanj’s Advanced Wind Energy Technology (AWET) Group, Flinders University.
            </p>
            <p className="mt-3 text-slate-300">
              VAWTelligence fuses AI, aerodynamics, and advanced mechatronics to accelerate research on Darrieus VAWTs. The system emphasizes rigorous, reproducible experimentation and a modern scientific workflow.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6">
              <div className="h-full w-full rounded-lg bg-[#1F2937] flex items-center justify-center text-slate-300">
                Engineering visuals
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Optimization Dashboard */}
      <Section id="dashboard" bg="bg-[#0B132B]">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">AI Optimization Dashboard</h2>
          <p className="mt-3 text-slate-300">Pareto fronts across Torque–Efficiency–Fatigue with Cp and TSR monitors. Algorithms: NSGA-II, PSO, RL.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card title="Pareto Fronts (Torque–Efficiency–Fatigue)">
            <div className="h-40 bg-[#1F2937] rounded-md" />
          </Card>
          <Card title="Power Coefficient (Cp) vs TSR">
            <div className="h-40 bg-[#1F2937] rounded-md" />
          </Card>
          <Card title="Algorithm Suite">
            <ul className="text-slate-200 list-disc pl-5 space-y-1">
              <li>NSGA-II</li>
              <li>Particle Swarm Optimization (PSO)</li>
              <li>Reinforcement Learning (RL)</li>
            </ul>
          </Card>
        </div>
        <div className="mt-8">
          <a href="#" className="px-5 py-3 rounded-md bg-cyan-500 text-[#0B132B] font-semibold hover:bg-cyan-400 transition">Run AI Optimization</a>
        </div>
      </Section>

      {/* Deflector Lab */}
      <Section id="deflector" overlay={<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,184,217,0.05),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_40%)]" /> }>
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Deflector Lab</h2>
          <p className="mt-3 text-slate-300">3D adaptive deflector with maglev augmentation and generative geometry.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Adaptive Deflector – Schematic">
            <div className="h-52 bg-[#1F2937] rounded-md" />
          </Card>
          <Card title="Electromagnetic Augmentation">
            <div className="h-52 bg-[#1F2937] rounded-md" />
          </Card>
        </div>
      </Section>

      {/* Pitch Intelligence Studio */}
      <Section id="pitch" bg="bg-[#0B132B]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Pitch Intelligence Studio</h2>
            <p className="mt-3 text-slate-300">Dual-shaft electromagnetic VAWT control with AI-driven blade pitch.</p>
            <p className="mt-5 text-cyan-300 font-mono">AI Suggested Pitch: +14° at TSR 1.35</p>
          </div>
          <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6">
            <div className="h-full w-full rounded-lg bg-[#1F2937]" />
          </div>
        </div>
      </Section>

      {/* Digital Twin & Surrogate Models */}
      <Section id="twin" overlay={<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,184,217,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_40%)]" /> }>
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Digital Twin & Surrogate Models</h2>
          <p className="mt-3 text-slate-300">CFD–FEM meshes, stress plots, and prediction vs simulation.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card title="Stress Plot">
            <div className="h-40 bg-[#1F2937] rounded-md" />
          </Card>
          <Card title="CFD Streamlines">
            <div className="h-40 bg-[#1F2937] rounded-md" />
          </Card>
          <Card title="Prediction vs Simulation">
            <div className="h-40 bg-[#1F2937] rounded-md" />
          </Card>
        </div>
      </Section>

      {/* Research & Publications */}
      <Section id="research" bg="bg-[#0B132B]">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Research & Publications</h2>
        </div>
        <div className="space-y-4 text-slate-200">
          <Pub title="AI-Based Optimization Frameworks for Wind and Hybrid Renewable Systems – Brainstorm Document" authors="Sina Mohammadi" />
          <Pub title="Selected Publications – Dr. Amir Zanj and the AWET Group" authors="Flinders University" />
        </div>
      </Section>

      {/* Contact & Collaboration */}
      <Section id="contact" overlay={<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,184,217,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.07),transparent_40%)]" /> }>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Contact & Collaboration</h2>
            <p className="mt-4 text-slate-300">Night-time wind farm ambiance.</p>
            <div className="mt-6 space-y-2 text-slate-200">
              <p>Dr. Amir Zanj: <a className="text-cyan-300" href="mailto:amir.zanj@flinders.edu.au">amir.zanj@flinders.edu.au</a></p>
              <p>Sina Mohammadi: <a className="text-cyan-300" href="mailto:sina.engr@gmail.com">sina.engr@gmail.com</a></p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#" className="px-5 py-3 rounded-md bg-cyan-500 text-[#0B132B] font-semibold hover:bg-cyan-400 transition">Join Collaboration</a>
              <a href="#" className="px-5 py-3 rounded-md border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition">Request Meeting</a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6">
            <div className="h-full w-full rounded-lg bg-[#1F2937]" />
          </div>
        </div>
        <div className="mt-12 text-slate-400 text-sm">
          Developed in collaboration with Dr. Amir Zanj’s AWET Group — Flinders University
          <br />
          Platform & AI Integration: Sina Mohammadi
        </div>
      </Section>
    </>
  )
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5">
      <h3 className="text-lg font-semibold text-white/90">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function Pub({ title, authors }) {
  return (
    <div className="rounded-lg border border-white/10 p-4 hover:border-cyan-400/40 transition">
      <div className="font-medium">{title}</div>
      <div className="text-slate-400 text-sm mt-1">{authors}</div>
    </div>
  )
}
