"use client";

import { motion } from "framer-motion";

export default function About() {
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

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>About Me</h1>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>Get to know more about my journey</p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8">
          
          {/* Professional Story */}
          <div className="p-8 rounded-3xl space-y-4 bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>My Professional Story</h2>
            <p className="text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              I'm Dinesh Kumar, a passionate Mechanical Design Engineer with over 1+ years of experience 
              in transforming complex engineering challenges into innovative solutions. My expertise lies 
              in SolidWorks, ANSYS, and advanced CAD/CAE workflows.
            </p>
            <p className="text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Throughout my career, I've specialized in creating precise mechanical designs, conducting 
              structural analyses, and optimizing engineering processes. I believe in the power of 
              continuous learning and pushing the boundaries of what's possible in mechanical engineering.
            </p>
          </div>

          {/* Skills & Expertise */}
          <div className="p-8 rounded-3xl space-y-4 bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>CAD Design</h3>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>Expert in SolidWorks, AutoCAD, and 3D modeling</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>CAE Analysis</h3>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>Proficient in ANSYS, FEA, and structural simulations</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Manufacturing</h3>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>Knowledge of manufacturing processes and DFM</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Project Management</h3>
                <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>Leading teams and delivering projects on time</p>
              </div>
            </div>
          </div>

          {/* Values & Philosophy */}
          <div className="p-8 rounded-3xl space-y-4 bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>My Philosophy</h2>
            <p className="text-lg text-white/80 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              I believe that great engineering is not just about technical skills—it's about understanding 
              the problem deeply, thinking creatively, and delivering solutions that make a real impact. 
              I'm committed to continuous improvement, staying updated with the latest technologies, and 
              contributing to projects that push the boundaries of innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}