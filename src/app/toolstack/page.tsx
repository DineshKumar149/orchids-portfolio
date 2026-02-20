"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mainTools = [
  { 
    name: "SolidWorks", 
    icon: "https://img.icons8.com/?size=100&id=62397&format=png&color=000000",
    link: "https://www.solidworks.com" 
  },
  { 
    name: "Ansys", 
    icon: "https://companieslogo.com/img/orig/ANSS_BIG-4e994f5d.png?t=1720244490",
    link: "https://www.ansys.com" 
  },
  { 
    name: "Autocad", 
    icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/autocad-icon.png",
    link: "https://web.autocad.com/" 
  },
  { 
    name: "PVElite", 
    icon: "https://companieslogo.com/img/orig/HEXA-B.ST_BIG.D-57f5de2c.png?t=1746346636",
    link: "https://hexagon.com/" 
  },
  { 
    name: "ChatGPT", 
    icon: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg", 
    link: "https://chat.openai.com" 
  },
  { 
    name: "Canva", 
    icon: "https://img.icons8.com/?size=100&id=HGd2amAYhRGr&format=png&color=000000",
    link: "https://www.canva.com/" 
  },
];

const otherTools = [
  { name: "Affinity", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg" },
  { name: "Adobe Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Adobe_Photoshop_CS5_icon.svg" },
  { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { name: "Microsoft Word", icon: "https://cdn.worldvectorlogo.com/logos/microsoft-word-2013-logo.svg" },
  { name: "Discord", icon: "https://cdn.worldvectorlogo.com/logos/discord-6.svg" },
  { name: "PowerPoint", icon: "https://cdn.worldvectorlogo.com/logos/microsoft-powerpoint-2013.svg" },
  { name: "Google Ads", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
  { name: "Microsoft Teams", icon: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
  { name: "Google Analytics", icon: "https://upload.wikimedia.org/wikipedia/commons/8/89/Logo_Google_Analytics.svg" },
  { name: "Google", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Excel", icon: "https://cdn.worldvectorlogo.com/logos/excel-4.svg" },
  { name: "Skype", icon: "https://cdn.worldvectorlogo.com/logos/skype.svg" },
  { name: "Notion", icon: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "Blender", icon: "https://upload.wikimedia.org/wikipedia/commons/2/26/Blender-dynamic-premium.png" },
];

export default function ToolstackPage() {
  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: 'Inter, sans-serif' }}>
          Tool Stack
        </motion.h1>

        {/* Main Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6">
          {mainTools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 relative overflow-hidden">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {tool.name}
              </span>
              <svg
                className="ml-auto w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Other Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6">
          <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Other tools I use</h2>
          
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {otherTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.02 * index }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="aspect-square rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center justify-center p-3"
                title={tool.name}>
                <div className="w-full h-full flex items-center justify-center relative">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}