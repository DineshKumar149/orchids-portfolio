"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random()
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random(), 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ x: 10 }}
              >
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <h2 className="text-lg sm:text-xl font-medium text-muted-foreground">
                  Hello, I'm
                </h2>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <motion.span 
                  className="gradient-text inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Dinesh Kumar
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Mechanical Design Engineer
              </h3>
              <p className="text-xl text-muted-foreground">
                SolidWorks Enthusiast | Simulation Engineer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Passionate about mechanical design, 3D modeling, and engineering problem-solving. 
              Specializing in creating detailed, functional, and industry-ready designs with 
              expertise in CAD/CAE and simulation automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all glow-effect cursor-pointer"
                >
                  Get In Touch
                </motion.div>
              </Link>
              <Link href="/projects">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary rounded-full font-semibold hover:bg-primary/10 transition-all cursor-pointer"
                >
                  View Projects
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
                whileHover={{ scale: 1.05, borderColor: "rgba(124, 58, 237, 0.8)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20231124_160544_927-1764108143678.jpg?width=800&height=800&resize=contain"
                  alt="Dinesh Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary rounded-full opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-secondary rounded-full opacity-50"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/4 -right-8 w-12 h-12 border-4 border-accent rounded-lg opacity-30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}