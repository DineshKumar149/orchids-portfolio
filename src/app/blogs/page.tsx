"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Mastering SolidWorks: Advanced Design Techniques",
    excerpt: "Explore advanced modeling techniques in SolidWorks that can significantly improve your design workflow and productivity.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "CAD Design",
    tags: ["SolidWorks", "3D Modeling", "Design"]
  },
  {
    id: 2,
    title: "FEA Best Practices with ANSYS",
    excerpt: "Learn the essential best practices for conducting finite element analysis using ANSYS to achieve accurate simulation results.",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Simulation",
    tags: ["ANSYS", "FEA", "Analysis"]
  },
  {
    id: 3,
    title: "Design for Manufacturing: Key Principles",
    excerpt: "Understanding how to design parts that are not only functional but also cost-effective and easy to manufacture.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Manufacturing",
    tags: ["DFM", "Manufacturing", "Engineering"]
  },
  {
    id: 4,
    title: "Optimizing Mechanical Systems with Topology Optimization",
    excerpt: "Discover how topology optimization can help you create lightweight, high-performance mechanical designs.",
    date: "February 28, 2024",
    readTime: "12 min read",
    category: "Optimization",
    tags: ["Topology", "Optimization", "Design"]
  },
  {
    id: 5,
    title: "Parametric Design: Building Flexible CAD Models",
    excerpt: "Master the art of creating parametric models that adapt easily to design changes and requirements.",
    date: "February 20, 2024",
    readTime: "7 min read",
    category: "CAD Design",
    tags: ["Parametric", "CAD", "Modeling"]
  },
  {
    id: 6,
    title: "Material Selection for Engineering Projects",
    excerpt: "A comprehensive guide to selecting the right materials for your mechanical engineering projects.",
    date: "February 15, 2024",
    readTime: "9 min read",
    category: "Materials",
    tags: ["Materials", "Engineering", "Design"]
  }
]

export default function BlogsPage() {
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
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Blog</h1>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Insights, tutorials, and thoughts on mechanical engineering and design
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
              
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Clock className="w-4 h-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-white/60 mb-4 line-clamp-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 px-2 py-1 text-xs bg-white/5 rounded-lg text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Calendar className="w-4 h-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{post.date}</span>
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-medium text-white/80"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center py-12">
          <p className="text-lg text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            More articles coming soon! Stay tuned for updates.
          </p>
        </motion.div>
      </div>
    </div>
  )
}