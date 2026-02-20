"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
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

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Portfolio
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            A curated showcase of engineering projects ranging from complex mechanical assemblies to innovative product designs.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white text-black rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.category}
                    </span>
                  </div>

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-2 text-white font-medium text-sm">
                      View Project <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tools & Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-2 py-1 bg-white/5 text-white/40 border border-white/5 rounded-md font-medium uppercase tracking-tighter"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-[10px] text-white/20 font-medium">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
