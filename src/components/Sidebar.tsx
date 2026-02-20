"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Award,
  Briefcase,
  Wrench,
  GraduationCap,
  BookOpen,
  Music,
  Gamepad2,
  Mail,
  Menu,
  X } from
"lucide-react";

const navLinks = [
{ name: "Home", href: "/", icon: Home },
{ name: "About", href: "/about", icon: User },
{ name: "Education", href: "/education", icon: GraduationCap },
{ name: "Certification", href: "/certifications", icon: Award },
{ name: "Projects", href: "/projects", icon: Briefcase },
{ name: "Toolstack", href: "/toolstack", icon: Wrench },
{ name: "Contact", href: "/contact", icon: Mail }];


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 left-6 z-50 lg:hidden p-3 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors"
        aria-label="Toggle menu">

        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" />

        }
      </AnimatePresence>

      {/* Desktop Sidebar - Icon Only with Hover Text */}
      <motion.aside
        initial={{ x: 0 }}
        className="hidden lg:flex fixed top-1/2 left-8 -translate-y-1/2 bg-[#1a1a1a]/70 backdrop-blur-xl rounded-[28px] border border-[#2a2a2a]/60 z-40 flex-col items-start py-5 px-2.5 gap-1.5 shadow-2xl !w-[65px] !h-[352px]">

        {/* Navigation Links */}
        <nav className="flex flex-col gap-0.5 w-full">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            const isHovered = hoveredIndex === index;

            return (
              <Link key={link.name} href={link.href}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative cursor-pointer group">

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2.5 px-3.5 py-3 rounded-[14px] transition-all duration-200 overflow-hidden !flex ${
                    isActive ?
                    "bg-white/10 text-white shadow-lg shadow-white/5" :
                    "text-gray-400 hover:text-white hover:bg-white/5"}`
                    }>

                    <Icon className="flex-shrink-0 !w-5 !h-full" strokeWidth={2} />
                    
                    {/* Text appears on hover - inline with icon */}
                    <motion.span
                      initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        width: isHovered ? "auto" : 0,
                        marginLeft: isHovered ? 0 : 0
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden"
                      style={{ fontFamily: 'Inter, sans-serif' }}>

                      {link.name}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </Link>);

          })}
        </nav>
      </motion.aside>

      {/* Mobile Sidebar - Full Width with Labels */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", damping: 20 }}
        className="lg:hidden fixed top-0 left-0 h-screen w-64 bg-[#1a1a1a]/95 backdrop-blur-xl border-r border-[#2a2a2a] z-40">

        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-12 cursor-pointer"
              onClick={() => setIsOpen(false)}>

              <h2 className="text-3xl font-bold gradient-text">DK</h2>
              <p className="text-sm text-muted-foreground mt-1">Portfolio</p>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-[14px] transition-all cursor-pointer ${
                    isActive ?
                    "bg-white/10 text-white" :
                    "text-gray-400 hover:text-white hover:bg-white/5"}`
                    }>

                    <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                    <span className="font-medium text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {link.name}
                    </span>
                  </motion.div>
                </Link>);

            })}
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-[#2a2a2a]">
            <p className="text-xs text-gray-500 text-center">
              © 2025 Dinesh Kumar
            </p>
          </div>
        </div>
      </motion.aside>
    </>);

}