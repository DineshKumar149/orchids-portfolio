"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Mechanical Engineering",
    institution: "Sant Longowal Institute of Engineering and Technology",
    location: "Sangrur, Punjab, India",
    duration: "August 2024 - June 2028",
    gpa: "SGPA: 9.40/10",
    status: "Current"
  },
  {
    degree: "Intermediate (12th)",
    field: "Physics, Chemistry, Mathematics (PCM)",
    institution: "Gaya College",
    location: "Gaya, Bihar",
    duration: "February 2021 - February 2023",
    gpa: "Percentage: 81.4%",
    status: "Completed"
  },
  {
    degree: "Matriculation (10th)",
    field: "Secondary Education",
    institution: "RS High School",
    location: "Fatehpur, Gaya, Bihar",
    duration: "February 2019 - February 2021",
    gpa: "Percentage: 85.4%",
    status: "Completed"
  }
]

const certifications = [
  {
    title: "SOLIDWORKS CAD Design Associate (CSWA)",
    issuer: "Dassault Systèmes",
    date: "November 2025",
    id: "C-BY64W23QFC",
    icon: Award
  }
]

const experience = [
  {
    title: "Mechanical Design Practice Projects",
    company: "Self-Initiated",
    duration: "July 2024 - Present",
    location: "Remote",
    responsibilities: [
      "Designed wide range of mechanical parts using SolidWorks including gears, gearboxes, and assemblies",
      "Created precise 2D technical drawings with AutoCAD following engineering standards",
      "Applied GD&T for tolerance control and drawing clarity",
      "Developed motion simulations and exploded views for assembly visualization",
      "Continuously improving skills through self-learning and real-world component modeling"
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />
      
      <div className="container mx-auto max-w-7xl">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and professional development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {/* Education Items */}
          <div className="space-y-8 mb-20">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-6 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background z-10 hidden md:block glow-effect"
                  whileHover={{ scale: 1.5 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(124, 58, 237, 0.4)",
                      "0 0 0 10px rgba(124, 58, 237, 0)",
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                />
                
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="md:ml-20"
                >
                  <Card className="magical-border hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <GraduationCap className="w-5 h-5 text-primary" />
                            </motion.div>
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">
                              {edu.status}
                            </span>
                          </div>
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                          <CardDescription className="text-base font-semibold text-foreground">
                            {edu.field}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-primary">{edu.gpa}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Experience</span>
            </h3>
          </motion.div>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12"
            >
              <motion.div 
                className="absolute left-6 top-6 w-5 h-5 bg-secondary rounded-full border-4 border-background z-10 hidden md:block glow-effect"
                whileHover={{ scale: 1.5 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
              />
              
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:ml-20"
              >
                <Card className="magical-border hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex gap-3 text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full magical-border hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5 group">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-effect"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <cert.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">{cert.title}</CardTitle>
                          <CardDescription className="text-sm">
                            <p className="font-semibold text-foreground">{cert.issuer}</p>
                            <p className="text-muted-foreground mt-1">{cert.date}</p>
                            <p className="text-xs text-primary mt-2 font-mono">ID: {cert.id}</p>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}