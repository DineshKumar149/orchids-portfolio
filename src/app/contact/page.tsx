"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin,ExternalLink, Github, MapPin, Phone, Download } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "dineshkumar2729304@gmail.com",
    href: "mailto:dineshkumar2729304@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "dinesh1209",
    href: "https://www.linkedin.com/in/dinesh1209"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "DineshKumar149",
    href: "https://github.com/DineshKumar149"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-6204006452",
    href: "tel:+916204006452"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Punjab, India",
    href: "https://maps.app.goo.gl/8kTRjuNag8LrAcds9"
  }
]

export default function ContactPage() {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

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

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Get In Touch</h1>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            const isClickable = method.href !== null
            
            const content = (
              <>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-medium text-white/60 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {method.label}
                  </h3>
                  <p className="text-lg font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {method.value}
                  </p>
                </div>
              </>
            )

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={isClickable ? { y: -4, scale: 1.02 } : {}}
                whileTap={isClickable ? { scale: 0.98 } : {}}
              >
                {isClickable ? (
                  <a
                    href={method.href}
                    target={method.href?.startsWith("http") ? "_blank" : undefined}
                    rel={method.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-6 rounded-3xl flex items-center gap-4 cursor-pointer block bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="p-6 rounded-3xl flex items-center gap-4 bg-white/5 border border-white/10">
                    {content}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-8 lg:p-12 rounded-3xl text-center space-y-6 bg-white/5 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Let's Work Together</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            I'm currently open to new opportunities and collaborations. Whether you need help with mechanical design, 3D modeling, or simulation projects, I'm here to help bring your ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <motion.a
              href="mailto:dineshkumar2729304@gmail.com"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-semibold flex items-center gap-2 transition-all text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1CCIkqkfANb94VZWkWBw7KLFcdnc2vHT5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 border-2 border-white/20 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all text-white"
              style={{ fontFamily: 'Inter, sans-serif',
                  background: "radial-gradient(55.8% 104.9% at 51.3% -6.9%, rgb(97, 97, 97) 0%, rgb(18, 18, 18) 60%)",
                  boxShadow: "rgba(158, 158, 158, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 0.12px 0.08px, rgba(0, 0, 0, 0.25) 0px 1px 0.7px",
                  cursor: "pointer" }}
            >
              <ExternalLink className="w-4 h-4" />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>Follow me on social media</p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/dinesh1209"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/DineshKumar149"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}