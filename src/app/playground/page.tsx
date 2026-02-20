"use client"

import { motion } from "framer-motion"
import { Gamepad2, Code, Wrench, Sparkles, Layers, Box } from "lucide-react"

const experiments = [
  {
    id: 1,
    title: "3D Model Viewer",
    description: "Interactive 3D viewer for SolidWorks exports with rotation and zoom controls",
    icon: Box,
    status: "Active",
    tags: ["Three.js", "WebGL", "3D"]
  },
  {
    id: 2,
    title: "CAD Automation Scripts",
    description: "Python scripts for automating repetitive SolidWorks and ANSYS tasks",
    icon: Code,
    status: "In Progress",
    tags: ["Python", "Automation", "API"]
  },
  {
    id: 3,
    title: "Design Pattern Generator",
    description: "Parametric pattern generator for creating complex geometric designs",
    icon: Layers,
    status: "Active",
    tags: ["Algorithm", "Parametric", "Design"]
  },
  {
    id: 4,
    title: "Material Property Calculator",
    description: "Interactive tool for calculating material properties and stress analysis",
    icon: Wrench,
    status: "Beta",
    tags: ["Engineering", "Calculator", "FEA"]
  },
  {
    id: 5,
    title: "Animation Studio",
    description: "Create exploded views and assembly animations from CAD models",
    icon: Sparkles,
    status: "Coming Soon",
    tags: ["Animation", "Assembly", "Visualization"]
  },
  {
    id: 6,
    title: "Simulation Sandbox",
    description: "Real-time physics simulation playground for testing mechanical concepts",
    icon: Gamepad2,
    status: "Experimental",
    tags: ["Physics", "Simulation", "Interactive"]
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-white/20 text-white"
    case "In Progress": return "bg-white/15 text-white/80"
    case "Beta": return "bg-white/15 text-white/80"
    case "Coming Soon": return "bg-white/10 text-white/70"
    case "Experimental": return "bg-white/10 text-white/70"
    default: return "bg-white/10 text-white/60"
  }
}

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen p-8 lg:p-16 lg:pl-32">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-12 h-12 text-white/80" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Playground</h1>
          </div>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Experimental tools, demos, and interactive engineering experiments
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => {
            const Icon = experiment.icon
            return (
              <motion.div
                key={experiment.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                
                {/* Icon */}
                <div className="w-full aspect-square rounded-[16px] bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-12 h-12 text-white/70" />
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(experiment.status)}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                    {experiment.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {experiment.title}
                </h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {experiment.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {experiment.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-white/5 rounded-lg text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-[12px] font-medium text-white transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {experiment.status === "Coming Soon" ? "Coming Soon" : "Launch"}
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-8 rounded-[24px] bg-white/5 border border-white/10 text-center">
          <Sparkles className="w-12 h-12 text-white/70 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Experimental Zone</h2>
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            This is where I test new ideas, build interactive tools, and experiment with 
            cutting-edge technologies for mechanical design and simulation. Check back 
            regularly for new experiments and tools!
          </p>
        </motion.div>
      </div>
    </div>
  )
}