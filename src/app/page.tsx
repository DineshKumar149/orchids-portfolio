"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ExternalLink,Instagram, Linkedin, Github, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const [showExplore, setShowExplore] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      if (scrollHeight - scrollTop - clientHeight < 200) {
        setShowExplore(true);
      } else {
        setShowExplore(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  const handleDownload = (filename: string) => {
    window.open(`/${filename}`, '_blank');
  };

  return (
    <div className="min-h-screen pl-8 pr-8 lg:pl-32 lg:pr-16 py-16">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto space-y-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8">

          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-32 h-32">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/IMG_20231124_160544_927-1764108143678.jpg?width=400&height=400&resize=contain"
                alt="Dinesh Kumar"
                fill
                className="object-cover"
                priority />
            </div>
          </motion.div>

          {/* Greeting */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl lg:text-3xl font-bold text-white"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Hey, Dinesh here
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              How's your {currentDay} ?
            </motion.p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base leading-relaxed text-white/80 max-w-l"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            I'm a passionate mechanical design engineer with 1+ years of experience transforming complex concepts into 
            innovative engineering solutions. Specializing in SolidWorks, ANSYS, and advanced CAD/CAE workflows, 
            I bring precision, creativity, and technical excellence to every project. Whether collaborating with dynamic 
            teams or leading independent initiatives, I deliver designs that exceed expectations.
          </motion.p>

          {/* Contact & Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-[12px] font-medium text-sm transition-all px-8 py-3.5 text-white"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  background: "radial-gradient(55.8% 104.9% at 51.3% -6.9%, rgb(97, 97, 97) 0%, rgb(18, 18, 18) 60%)",
                  boxShadow: "rgba(158, 158, 158, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 0.12px 0.08px, rgba(0, 0, 0, 0.25) 0px 1px 0.7px",
                  cursor: "pointer"
                }}>
                Contact
              </motion.button>
            </Link>

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


            <motion.a
              href="https://drive.google.com/file/d/1LRlN6venC--J4sjSen99pAH5yE_ZRipF/view?usp=drive_link"
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
              CSWA Cert
            </motion.a>


            <motion.a
              href="https://drive.google.com/file/d/1uQ4L667wPWZ70TkKzbXSeWLqrj36ZYQU/view?usp=drive_link"
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
              CSWP Cert
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-8">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Study
          </h2>

          {/* Main Work Card */}
          <Link href="https://sliet.ac.in/">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-[32px] overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
              <div className="relative rounded-[30px] overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/SLIET_Longowal_Main_Building.jpg?width=800&height=800&resize=contain"
                    alt="Study Project"
                    fill
                    className="object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      <Image 
                        src="https://www.endeavoursliet.in/images/logoSlietWhite.png"
                        alt="SLIET"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>SLIET</h3>
                      <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>(2024- Present)</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Side Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="space-y-6">
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Side Projects
          </h2>

            <div className="space-y-3">
              <Link href="/projects/shell-nozzle-failure-analysis">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="https://companieslogo.com/img/orig/ANSS_BIG-4e994f5d.png?t=1720244490"
                      alt="ANSYS"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="flex-1 text-white/80 group-hover:text-white text-base font-medium transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Failure Analysis of Shell Nozzles
                  </span>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                </motion.div>
              </Link>

              <Link href="/projects">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image 
                      src="https://companieslogo.com/img/orig/ANSS_BIG-4e994f5d.png?t=1720244490"
                      alt="ANSYS"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <span className="flex-1 text-white/80 group-hover:text-white text-base font-medium transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Ansys Nozzle Analysis Wizard
                  </span>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                </motion.div>
              </Link>
            </div>
        </motion.div>

        {/* Tool Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="space-y-8">
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tool Stack
          </h2>

          {/* Primary Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/2S">
            {[
              { 
                name: "SolidWorks", 
                icon: "https://img.icons8.com/?size=100&id=62397&format=png&color=000000",
                link: "https://www.solidworks.com/" 
              },
              { 
                name: "Ansys", 
                icon: "https://companieslogo.com/img/orig/ANSS_BIG-4e994f5d.png?t=1720244490",
                link: "https://www.ansys.com/"
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
                icon: "https://img.icons8.com/?size=100&id=4yTYWN9WaC69&format=png&color=000000",
                link: "https://chatgpt.com/"
              },
              { 
                name: "Canva", 
                icon: "https://img.icons8.com/?size=100&id=HGd2amAYhRGr&format=png&color=000000",
                link: "https://www.canva.com/"
              }
            ].map((tool, index) =>
              <motion.a
                key={index}
                href={tool.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-5 rounded-[16px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-[10px] bg-white/10 flex items-center justify-center overflow-hidden">
                  {typeof tool.icon === 'string' && tool.icon.startsWith('http') ? (
                    <Image 
                      src={tool.icon}
                      alt={tool.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-bold text-white text-lg">{tool.icon}</span>
                  )}
                </div>

                <span className="text-white font-medium text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {tool.name}
                </span>

                {tool.link && <ChevronRight className="ml-auto w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />}
              </motion.a>
            )}
          </div>

        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="space-y-8 text-center py-12">
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Newsletter
          </h2>
          
          <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            I document my learnings once a month. I would love to share them with you over mail.<br />
            No bulls**t. No spam. Straight up value.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              required
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-[14px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all hover:bg-white/10 hover:border-white/20"
              style={{ fontFamily: 'Inter, sans-serif' }} />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/90 text-black rounded-[14px] font-medium hover:bg-white transition-all"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              Subscribe
            </motion.button>
          </form>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 pt-6">
            {[
              { icon: Instagram, href: "https://www.instagram.com/dineshk.6/", label: "Instagram" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/dinesh1209", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/DineshKumar149", label: "Github" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-[16px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                  aria-label={social.label}>
                  <Icon className="w-6 h-6 text-white/70" />
                </motion.a>
              );
            })}
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
            className="pt-12">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ddc0b108-c184-40e6-8f6a-f0bc56c63339/visual-edit-uploads/1764256575639-rwkwtii2u1.png"
              alt="Signature"
              width={200}
              height={80}
              className="mx-auto opacity-70 !w-[200px] !h-full !max-w-[200px]" />
          </motion.div>

          {/* Thanks Message */}
          <div className="space-y-2 pt-8">
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Thanks for Visiting.
            </h3>
            <p className="text-base text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore Around. Until Next Time.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Explore Button */}
      <AnimatePresence>
        {showExplore &&
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-white/50 flex items-center gap-2 font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              🎉 You've reached the end. Wait! Really?
            </motion.p>
            
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1a1a1a]/70 backdrop-blur-xl border border-[#2a2a2a]/60 rounded-[16px] py-4 flex items-center gap-3 shadow-2xl hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group !mx-0 !px-6">
                <span className="font-medium text-white text-sm !mx-0 !px-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Explore More
                </span>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
              </motion.div>
            </Link>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
}