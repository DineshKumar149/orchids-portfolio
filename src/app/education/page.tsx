"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "Sant Longowal Institute of Engineering and Technology",
    location: "Punjab, India",
    period: "August 2024 – June 2028",
    grade: "9.525 CGPA",
    status: "Pursuing",
    description: "Specializing in mechanical design, CAD/CAE, and simulation automation with focus on SolidWorks and ANSYS.",
    achievements: [
      "Top performer in engineering graphics and design courses",
      "Completed multiple design projects and simulations"
    ]
  },
  {
    degree: "Intermediate (12th - PCM)",
    institution: "Gaya College",
    location: "Gaya, Bihar",
    period: "February 2021 – February 2023",
    grade: "81.4%",
    status: "Completed",
    description: "Concentrated on Physics, Chemistry, and Mathematics with strong foundation in engineering principles.",
    achievements: [
      "Secured distinction in board examinations",
      "Developed interest in mechanical systems and design"
    ]
  },
  {
    degree: "Matriculation (10th)",
    institution: "Ramsahay High School",
    location: "Fatehpur, Gaya, Bihar",
    period: "February 2019 – February 2021",
    grade: "85.4%",
    status: "Completed",
    description: "Strong academic performance with emphasis on mathematics and science subjects.",
    achievements: [
      "School topper in mathematics",
      "Developed problem-solving skills"
    ]
  }
]

export default function EducationPage() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Education</h1>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            My academic journey and professional experience
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Academic Background</h2>
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ x: 4, scale: 1.01 }}
              className="p-6 lg:p-8 rounded-3xl relative bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  edu.status === "Pursuing" 
                    ? "bg-white/20 text-white" 
                    : "bg-white/10 text-white/80"
                }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                  {edu.status}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <GraduationCap className="w-6 h-6 text-white/80" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{edu.degree}</h3>
                  <p className="text-lg text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{edu.institution}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span className="font-semibold text-white">{edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-white/70 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>{edu.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Key Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-start gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <span className="text-white/70 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}