"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react"

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
    value: "linkedin.com/in/dinesh1209",
    href: "http://www.linkedin.com/in/dinesh1209"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DineshKumar149",
    href: "https://github.com/DineshKumar149"
  }
]

const personalInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Sangrur, Punjab, India"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6204006452",
    href: "tel:+916204006452"
  }
]

export default function Contact() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dinesh_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Get In Touch
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's connect! I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about mechanical design and engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Connect With Me</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-6">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-white/60 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{method.label}</p>
                      <p className="font-semibold text-white break-all" style={{ fontFamily: 'Inter, sans-serif' }}>{method.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}

            <div className="pt-6 space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 2 }}
                >
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <info.icon className="w-5 h-5 text-white/70" />
                      <div>
                        <p className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>{info.label}</p>
                        <p className="font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                      <info.icon className="w-5 h-5 text-white/70" />
                      <div>
                        <p className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>{info.label}</p>
                        <p className="font-medium text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Card className="border-2 border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-2xl text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Let's Build Something Amazing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I'm currently seeking opportunities in mechanical design engineering, 
                  CAD/CAE roles, and simulation projects. Whether you're looking for a 
                  passionate engineer or want to collaborate on innovative projects, 
                  I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>What I'm Looking For:</h4>
                  <ul className="space-y-2 text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <li className="flex items-start gap-2">
                      <span className="text-white/70 mt-1">•</span>
                      <span>Mechanical Design & Product Development roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/70 mt-1">•</span>
                      <span>CAD/CAE engineering positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/70 mt-1">•</span>
                      <span>Simulation and analysis projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white/70 mt-1">•</span>
                      <span>Mentorship and learning opportunities</span>
                    </li>
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                  onClick={() => window.open('mailto:dineshkumar2729304@gmail.com', '_blank')}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Mail className="w-5 h-5" />
                  Send Me an Email
                </motion.button>

                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 border-2 border-white/20 rounded-xl font-semibold hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 text-white"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center pt-12 border-t border-white/10"
        >
          <p className="text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2024 Dinesh Kumar. Built with passion for mechanical design and engineering excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}