"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Download, Star, Tag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "SolidWorks Design Templates",
    description: "Professional CAD templates for mechanical components and assemblies",
    price: "$49",
    rating: 4.8,
    reviews: 124,
    category: "Templates",
    featured: true
  },
  {
    id: 2,
    name: "ANSYS Simulation Scripts",
    description: "Automation scripts for common FEA workflows and analysis tasks",
    price: "$79",
    rating: 4.9,
    reviews: 89,
    category: "Scripts"
  },
  {
    id: 3,
    name: "CAD Model Library",
    description: "Collection of 500+ parametric mechanical parts and components",
    price: "$129",
    rating: 4.7,
    reviews: 203,
    category: "Assets"
  },
  {
    id: 4,
    name: "Design Calculations Toolkit",
    description: "Excel-based toolkit for mechanical engineering calculations",
    price: "$39",
    rating: 4.6,
    reviews: 156,
    category: "Tools"
  },
  {
    id: 5,
    name: "Engineering Documentation Bundle",
    description: "Professional templates for technical drawings and documentation",
    price: "$59",
    rating: 4.8,
    reviews: 178,
    category: "Templates"
  },
  {
    id: 6,
    name: "Complete Design Package",
    description: "All-in-one bundle with templates, scripts, and models",
    price: "$249",
    rating: 4.9,
    reviews: 67,
    category: "Bundle",
    featured: true
  }
]

export default function ShopPage() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingCart className="w-12 h-12 text-white/80" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Shop</h1>
          </div>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Professional tools, templates, and resources for mechanical engineers
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
              
              {/* Featured Badge */}
              {product.featured && (
                <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-white/10 text-white">
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="w-full aspect-square rounded-[16px] bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <Download className="w-12 h-12 text-white/70" />
              </div>

              {/* Category */}
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-white/50" />
                <span className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {product.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {product.name}
              </h3>
              <p className="text-sm text-white/60 mb-4 line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-white/70 text-white/70' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  ({product.reviews})
                </span>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {product.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-[12px] font-medium text-white text-sm transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-8 rounded-[24px] bg-white/5 border border-white/10 text-center">
          <ShoppingCart className="w-12 h-12 text-white/70 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>More Products Coming Soon</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            I'm constantly developing new tools, templates, and resources for mechanical engineers. 
            Subscribe to get notified when new products are available.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-[12px] font-medium text-white transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            Get Notified
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}