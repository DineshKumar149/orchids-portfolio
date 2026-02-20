"use client"

import { motion } from "framer-motion"
import { Award, Download, ExternalLink, CheckCircle } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    name: "SOLIDWORKS Certified Associate (CSWA)",
    issuer: "Dassault Systèmes",
    issueDate: "Nov 2025",
    certificateId: "C-BY64W23QFC",
    description: "Official certification demonstrating proficiency in SolidWorks 3D CAD design, including part modeling, assembly creation, and engineering drawing generation.",
    skills: [
      "3D Part Modeling",
      "Assembly Design",
      "Engineering Drawings",
      "Design Intent",
      "Feature-Based Modeling"
    ],
    verifyUrl: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-BY64W23QFC",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",
    pdfUrl: "https://drive.google.com/file/d/1LRlN6venC--J4sjSen99pAH5yE_ZRipF/view"
  },
  {
    name: "SOLIDWORKS Certified Professional (CSWP)",
    issuer: "Dassault Systèmes",
    issueDate: "Dec 2025",
    certificateId: "C-3ZVSC2875M",
    description: "The CSWP certification demonstrates advanced proficiency in SOLIDWORKS, including multi-body part modeling, configurations, assembly design, design modifications, and understanding of engineering documentation.",
    skills: [
      "Advanced Part Modeling",
      "Multi-Body Part Design",
      "Configurations & Design Changes",
      "Assembly Modeling & Mating",
      "Assembly Modifications",
      "Feature-Based Modeling",
      "Parametric Modeling",
      "Design Intent",
      "Engineering Drawing Interpretation"
    ],
    verifyUrl: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-3ZVSC2875M",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",
    pdfUrl: "https://drive.google.com/file/d/1uQ4L667wPWZ70TkKzbXSeWLqrj36ZYQU/view"
  },
  {
    name: "SOLIDWORKS Sheet Metal Professional (CSWP-SM)",
    issuer: "Dassault Systèmes",
    issueDate: "Dec 2025",
    certificateId: "C-EXJMWFGU6V",
    description: "Certified SOLIDWORKS Professional Sheet Metal (CSWP-SM) validates advanced expertise in SOLIDWORKS sheet metal design, including base and edge flanges, lofted bends, miter flanges, forming tools, conversion of solid parts to sheet metal, bend parameters, flat pattern development, and design modifications.",
    skills: [
    "Sheet Metal Part Modeling",
    "Base & Edge Flanges",
    "Miter & Hem Features",
    "Lofted Bends",
    "Convert to Sheet Metal",
    "Bend Allowance & K-Factor",
    "Flat Pattern & Manufacturing Readiness",
    "Design Modifications",
    "Engineering Documentation"
    ],
    verifyUrl: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-EXJMWFGU6V",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/SolidWorks_Logo.svg",
    pdfUrl: "https://drive.google.com/file/d/1kF1RqjyqP928REoTw7G-LKBi_hs2IQk0/view"
  }

]

const courses = [
  {
    name: "Python for Machine Learning",
    platform: "Self-Learning",
    status: "In Progress",
    description: "Learning Python libraries for machine learning applications in engineering automation and data analysis.",
    topics: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow Basics"]
  },
  {
    name: "ANSYS Simulation Fundamentals",
    platform: "Self-Learning",
    status: "In Progress",
    description: "Advancing skills in FEA and CFD simulation for structural and fluid analysis applications.",
    topics: ["FEA Analysis", "CFD Simulation", "Mesh Generation", "Result Interpretation"]
  }
]

export default function CertificationsPage() {
  const handleDownload = () => {
    window.open('/cswa-certification.pdf', '_blank');
  };

  return (
    <div className="min-h-screen p-8 lg:p-16">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Certifications</h1>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Achievement certifications and continuous learning
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="space-y-8">
         {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="p-6 lg:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.logo}
                        alt={cert.issuer}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.name}</h3>
                      <Award className="w-6 h-6 text-white/70 flex-shrink-0" />
                    </div>
                    <p className="text-lg text-white/80 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.issuer}</p>
                    <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Issued: {cert.issueDate} • Certificate ID: {cert.certificateId}
                    </p>
                    <p className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>{cert.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Skills Validated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full flex items-center gap-1"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          <CheckCircle className="w-3 h-3" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                   <motion.a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border-2 border-white/20 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </motion.a>

                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border-2 border-white/20 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all text-white"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses in Progress */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Continuous Learning</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{course.name}</h3>
                      <span className="px-2 py-1 bg-white/10 text-white text-xs font-semibold rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {course.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{course.platform}</p>
                    <p className="text-sm text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>{course.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Learning Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 bg-white/5 text-white/70 rounded-full"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programming Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Programming Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["C", "Python", "HTML", "CSS"].map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl text-center font-semibold text-white transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}