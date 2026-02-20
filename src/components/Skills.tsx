"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cog, Cpu, Code, Wrench, Box, LineChart } from "lucide-react"

const skills = [
  {
    icon: Cog,
    title: "SolidWorks",
    level: "Advanced",
    description: "3D CAD modeling, assemblies, motion simulation, and technical drawings",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Cpu,
    title: "ANSYS",
    level: "Intermediate",
    description: "FEA/CFD analysis, structural simulation, and thermal analysis",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "AutoCAD",
    level: "Advanced",
    description: "2D drafting, technical drawings, and precision layouts",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Code,
    title: "Python",
    level: "Beginner",
    description: "Simulation automation, scripting, and data analysis",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Box,
    title: "Product Design",
    level: "Advanced",
    description: "Mechanical design, product development, and GD&T",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: LineChart,
    title: "CAE Analysis",
    level: "Intermediate",
    description: "Computer-aided engineering and simulation workflows",
    color: "from-indigo-500 to-violet-500"
  }
]

const projects = [
  {
    title: "Multi-Part Gearbox Assembly",
    description: "Designed complex gearbox with multiple gears and shafts, including motion simulation",
    tags: ["SolidWorks", "Assembly", "Motion Study"]
  },
  {
    title: "Industrial Trolley Design",
    description: "Material-handling trolley with focus on strength, weight balance, and ergonomics",
    tags: ["Product Design", "SolidWorks", "GD&T"]
  },
  {
    title: "Bird Flying Mechanism",
    description: "Creative mechanism using spur gear assembly with animated wing movement simulation",
    tags: ["SolidWorks", "Animation", "Kinematics"]
  },
  {
    title: "Mechanical Parts Library",
    description: "Comprehensive library of gears, brackets, pulleys, shafts, flanges, and cams",
    tags: ["3D Modeling", "Technical Drawings", "AutoCAD"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in industry-standard tools and technologies for mechanical design and simulation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full magical-border hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <motion.div 
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 glow-effect`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <skill.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{skill.title}</CardTitle>
                    <CardDescription className="text-sm font-semibold text-primary">
                      {skill.level}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" id="projects">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience with real-world mechanical design challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full magical-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 group">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 cursor-default"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}