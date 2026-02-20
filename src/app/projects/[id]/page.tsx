"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  CheckCircle2, 
  Settings, 
  FileText, 
  Layout, 
  Layers, 
  Box, 
  Wrench,
  Package,
  ChevronRight,
  X,
  BoxIcon,
  Download,
  FlaskConical,
  Activity,
  Shield,
  AlertTriangle
} from "lucide-react";
import { getProjectById } from "@/lib/projects";
import { notFound } from "next/navigation";

const font = { fontFamily: 'Inter, sans-serif' };

function TableCell({ children, header = false, className = "" }: { children: React.ReactNode; header?: boolean; className?: string }) {
  const base = header
    ? "px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/50 bg-white/5 border border-white/10"
    : "px-4 py-3 text-sm text-white/80 border border-white/10";
  return header ? <th className={`${base} ${className}`} style={font}>{children}</th> : <td className={`${base} ${className}`} style={font}>{children}</td>;
}

function SectionCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-bold text-white" style={font}>{title}</h3>
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
}

function StatusBadge({ pass }: { pass: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
      pass ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"
    }`}>
      {pass ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
      {pass ? "PASS" : "FAIL"}
    </span>
  );
}

// Full analysis data from the PDF
const analysisData = {
  problemStatement: {
    designCode: "ASME Sec VIII Div 2, Part 5",
    material: "SA516 Gr60",
    designTemp: "150 °C",
    internalPressure: "2 MPa",
    shell: { id: 1000, thk: 20, length: 1000 },
    nozzle: { id: 250, thk: 15, length: 150 },
    nozzleLoading: {
      FL: "1000 N", FP: "1200 N", FC: "1000 N",
      MC: "1×10⁴ N·mm", MT: "2×10⁴ N·mm", ML: "1×10⁴ N·mm"
    },
    output: ["Von Mises Stress", "Deformation", "Linearized Stress at Critical Locations"],
    checks: ["Protection Against Plastic Collapse", "Protection Against Ratcheting", "Protection Against Local Failure"]
  },
  materialProperties: {
    designTemp: { symbol: "T", value: "150", unit: "°C" },
    syms: { symbol: "Syms", value: "220", unit: "MPa" },
    utsMin: { symbol: "UTSmin", value: "415", unit: "MPa" },
    allowableS: { symbol: "S", value: "130", unit: "MPa" },
    yieldSy: { symbol: "Sy", value: "195", unit: "MPa" },
    uts: { symbol: "UTS", value: "414", unit: "MPa" }
  },
  mesh: {
    method: "Sweep Method",
    nozzleSizing: "15 mm",
    shellSizing: "20 mm",
    divisions: 4,
    nodes: "157,370",
    elements: "32,548"
  },
  paths: [
    { id: 1, name: "In Shell at Junction with Nozzle" },
    { id: 2, name: "In Nozzle at Junction of Shell" },
    { id: 3, name: "At Max Stress Location" },
    { id: 4, name: "Away from Junction in Shell" },
    { id: 5, name: "Away from Junction in Nozzle" }
  ],
  allowableCriteria: {
    SPL: "195 MPa",
    SPS: "415 MPa",
    S: "130 MPa",
    fourS: "520 MPa"
  },
  elasticResults: [
    {
      path: 1, location: "In Shell at Junction with Nozzle",
      rows: [
        { category: "PL", stress: 131.58, allowable: "SPL = 195", check: "Plastic Collapse", pass: true },
        { category: "PL + Pb + Q", stress: 169.99, allowable: "SPS = 415", check: "Ratcheting", pass: true },
        { category: "S₁+S₂+S₃", stress: 232.75, allowable: "4S = 520", check: "Local Failure", pass: true }
      ]
    },
    {
      path: 2, location: "In Nozzle at Junction of Shell",
      rows: [
        { category: "PL", stress: 123.37, allowable: "SPL = 195", check: "Plastic Collapse", pass: true },
        { category: "PL + Pb + Q", stress: 150.02, allowable: "SPS = 415", check: "Ratcheting", pass: true },
        { category: "S₁+S₂+S₃", stress: 214.08, allowable: "4S = 520", check: "Local Failure", pass: true }
      ]
    },
    {
      path: 3, location: "At Max Stress Location",
      rows: [
        { category: "PL", stress: 154.70, allowable: "SPL = 195", check: "Plastic Collapse", pass: true },
        { category: "PL + Pb + Q", stress: 214.80, allowable: "SPS = 415", check: "Ratcheting", pass: true },
        { category: "S₁+S₂+S₃", stress: 193.924, allowable: "4S = 520", check: "Local Failure", pass: true }
      ]
    },
    {
      path: 4, location: "Away from Junction in Shell",
      rows: [
        { category: "Pm", stress: 43.36, allowable: "S = 130", check: "Plastic Collapse", pass: true },
        { category: "PM + Pb", stress: 44.882, allowable: "SPL = 195", check: "Plastic Collapse", pass: true },
        { category: "S₁+S₂+S₃", stress: 74.548, allowable: "4S = 520", check: "Local Failure", pass: true }
      ]
    },
    {
      path: 5, location: "Away from Junction in Nozzle",
      rows: [
        { category: "Pm", stress: 8.625, allowable: "S = 130", check: "Plastic Collapse", pass: true },
        { category: "PM + Pb", stress: 36.156, allowable: "SPL = 195", check: "Plastic Collapse", pass: true },
        { category: "S₁+S₂+S₃", stress: 51.665, allowable: "4S = 520", check: "Local Failure", pass: true }
      ]
    }
  ],
  localFailureCalc: {
    sigma1: { label: "Maximum Principal Stress", symbol: "σ₁", value: "202.07", unit: "MPa" },
    sigma2: { label: "Middle Principal Stress", symbol: "σ₂", value: "2.1109", unit: "MPa" },
    sigma3: { label: "Minimum Principal Stress", symbol: "σ₃", value: "3.1904", unit: "MPa" },
    sigmaE: { label: "Von Mises Stress", symbol: "σₑ", value: "204.723", unit: "MPa" },
    epsCF: { label: "Cold Forming Strain", symbol: "εCF", value: "0.000", unit: "" },
    alphaSL: { label: "Material Factor (Multiaxial Strain Limit)", symbol: "αSL", value: "2.200", unit: "" },
    Sy: { label: "Min. Specified Yield Strength", symbol: "Sy", value: "195.0", unit: "MPa" },
    Suts: { label: "Min. Specified Ultimate Tensile Strength", symbol: "SUTS", value: "414.0", unit: "MPa" },
    R: { label: "Ratio Sy/SUTS", symbol: "R", value: "0.471", unit: "" },
    m2: { label: "Factor m₂", symbol: "m₂", value: "0.317", unit: "" },
    epsLU: { label: "Uniaxial Strain Limit", symbol: "εLU", value: "0.381", unit: "" },
    epsL: { label: "Limiting Triaxial Strain", symbol: "εL", value: "0.3896", unit: "" },
    epsPEQ: { label: "Equivalent Plastic Strain", symbol: "εPEQ", value: "0.0020", unit: "" },
    epsTotal: { label: "Total Equivalent Plastic Strain", symbol: "εPEQ + εCF", value: "0.0020", unit: "" }
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = getProjectById(id);
  const isAnalysisProject = id === "shell-nozzle-failure-analysis";
  
  type TabType = "overview" | "parts" | "assembly" | "models" | "analysis";
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [selectedStep, setSelectedStep] = useState<number>(0);

  if (!project) {
    notFound();
  }

  const selectedPartData = project.parts.find(p => p.id === selectedPart);

  const tabs = [
    { id: "overview", label: "Overview", icon: FileText },
    ...(isAnalysisProject ? [{ id: "analysis", label: "Analysis Report", icon: FlaskConical }] : []),
    { id: "parts", label: isAnalysisProject ? "Components & Paths" : "Parts List", icon: Package },
    { id: "assembly", label: isAnalysisProject ? "Analysis Steps" : "Assembly Guide", icon: Wrench },
    { id: "models", label: "3D Models", icon: BoxIcon },
  ];

  return (
    <div className="min-h-screen p-8 lg:p-16">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span style={font}>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full" style={font}>
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight" style={font}>
                {project.title}
              </h1>
            </div>
            <p className="text-lg text-white/70 leading-relaxed" style={font}>{project.description}</p>
            <div className="flex flex-wrap gap-3 pt-4">
              {project.tools.map((tool) => (
                <div key={tool} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/80 text-sm">
                  <Settings className="w-3 h-3 text-white/40" />
                  <span style={font}>{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16 mb-8">
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                  activeTab === tab.id ? "bg-white text-black shadow-lg" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                style={font}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={font}>
                    <FileText className="w-6 h-6 text-white/40" /> Project Overview
                  </h2>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-white/80 leading-relaxed text-lg" style={font}>{project.longDescription}</p>
                  </div>
                </section>
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={font}>
                    <Layout className="w-6 h-6 text-white/40" /> Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
                        <CheckCircle2 className="w-5 h-5 text-white/40 mt-1 flex-shrink-0 group-hover:text-white/80 transition-colors" />
                        <span className="text-white/70 group-hover:text-white transition-colors" style={font}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
              <motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="space-y-8">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white" style={font}>Technical Specifications</h3>
                  <div className="space-y-6">
                    {Object.entries(project.specifications).map(([key, value], idx) => (
                      <div key={idx} className="space-y-1 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/40" style={font}>{key}</p>
                        <p className="text-white font-medium" style={font}>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 text-center space-y-4">
                  <p className="text-white/70 text-sm" style={font}>Interested in this project or looking for a custom engineering solution?</p>
                  <Link href="/contact" className="block">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all shadow-xl" style={font}>
                      Start a Conversation
                    </motion.button>
                  </Link>
                </div>
              </motion.aside>
            </motion.div>
          )}

          {/* ANALYSIS TAB — only for shell-nozzle project */}
          {activeTab === "analysis" && isAnalysisProject && (
            <motion.div key="analysis" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">

              {/* Problem Statement */}
              <SectionCard title="Problem Statement" icon={<FileText className="w-5 h-5 text-white/40" />}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-1" style={font}>Design Code</p>
                      <p className="text-white font-semibold text-lg" style={font}>{analysisData.problemStatement.designCode}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40 mb-1" style={font}>Material</p>
                        <p className="text-white font-medium" style={font}>{analysisData.problemStatement.material}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/40 mb-1" style={font}>Design Temp.</p>
                        <p className="text-white font-medium" style={font}>{analysisData.problemStatement.designTemp}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-1" style={font}>Internal Pressure</p>
                      <p className="text-white font-medium" style={font}>{analysisData.problemStatement.internalPressure}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-1" style={font}>Shell Geometry (ID × THK × L)</p>
                      <p className="text-white font-medium" style={font}>{analysisData.problemStatement.shell.id} × {analysisData.problemStatement.shell.thk} × {analysisData.problemStatement.shell.length} mm</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-1" style={font}>Nozzle Geometry (ID × THK × L)</p>
                      <p className="text-white font-medium" style={font}>{analysisData.problemStatement.nozzle.id} × {analysisData.problemStatement.nozzle.thk} × {analysisData.problemStatement.nozzle.length} mm</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-2" style={font}>Need to Check</p>
                      <div className="space-y-2">
                        {analysisData.problemStatement.checks.map((c, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-white/40" />
                            <span className="text-white/70 text-sm" style={font}>{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionCard>

              {/* Nozzle Loading */}
              <SectionCard title="Nozzle Loading" icon={<Activity className="w-5 h-5 text-white/40" />}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        {Object.keys(analysisData.problemStatement.nozzleLoading).map(k => (
                          <TableCell key={k} header>{k}</TableCell>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {Object.values(analysisData.problemStatement.nozzleLoading).map((v, i) => (
                          <TableCell key={i}>{v}</TableCell>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </SectionCard>

              {/* Material Properties */}
              <SectionCard title="Material Properties — SA516 Gr60 at 150°C" icon={<Settings className="w-5 h-5 text-white/40" />}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TableCell header>Property</TableCell>
                        <TableCell header>Symbol</TableCell>
                        <TableCell header>Value</TableCell>
                        <TableCell header>Unit</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(analysisData.materialProperties).map((prop, idx) => (
                        <tr key={idx}>
                          <TableCell>{Object.keys(analysisData.materialProperties)[idx].replace(/([A-Z])/g, ' $1').trim()}</TableCell>
                          <TableCell className="font-mono">{prop.symbol}</TableCell>
                          <TableCell className="font-semibold text-white">{prop.value}</TableCell>
                          <TableCell>{prop.unit}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionCard>

              {/* Mesh Details */}
              <SectionCard title="Mesh Configuration" icon={<Layers className="w-5 h-5 text-white/40" />}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { label: "Method", value: analysisData.mesh.method },
                    { label: "Nozzle Body Sizing", value: analysisData.mesh.nozzleSizing },
                    { label: "Shell Body Sizing", value: analysisData.mesh.shellSizing },
                    { label: "Through-Thickness Divisions", value: String(analysisData.mesh.divisions) },
                    { label: "Total Nodes", value: analysisData.mesh.nodes },
                    { label: "Total Elements", value: analysisData.mesh.elements }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1" style={font}>{item.label}</p>
                      <p className="text-white font-semibold text-lg" style={font}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Linearization Paths */}
              <SectionCard title="Stress Linearization Paths" icon={<Activity className="w-5 h-5 text-white/40" />}>
                <div className="space-y-3">
                  {analysisData.paths.map((path) => (
                    <div key={path.id} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-lg">{path.id}</div>
                      <div>
                        <p className="text-xs text-white/40 uppercase tracking-wider" style={font}>Path {path.id}</p>
                        <p className="text-white font-medium" style={font}>{path.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Boundary Conditions */}
              <SectionCard title="Boundary Conditions" icon={<Wrench className="w-5 h-5 text-white/40" />}>
                <div className="space-y-6">
                  {[
                    { title: "Elastic Analysis", factor: "1.0×", pressure: "2 MPa", desc: "Displacement: Cylinder CS (X=Free, Y=0, Z=0). Internal Pressure = 2 MPa. Remote Force at Cartesian CS origin." },
                    { title: "Limit Load Analysis", factor: "1.5×", pressure: "3 MPa", desc: "All loads factored by 1.5. Internal Pressure = 2 × 1.5 = 3 MPa. Remote forces scaled by 1.5." },
                    { title: "Plastic Collapse (Elastic-Plastic)", factor: "2.4×", pressure: "4.8 MPa", desc: "All loads factored by 2.4. Internal Pressure = 2 × 2.4 = 4.8 MPa. Nonlinear material model." },
                    { title: "Local Failure (Elastic-Plastic)", factor: "1.7×", pressure: "3.4 MPa", desc: "All loads factored by 1.7. Internal Pressure = 2 × 1.7 = 3.4 MPa. Extraction of principal stresses & plastic strain." }
                  ].map((bc, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-bold bg-white/10 text-white rounded-full">{bc.factor}</span>
                        <h4 className="text-white font-bold" style={font}>{bc.title}</h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed" style={font}>{bc.desc}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Elastic Analysis Results — Full Table */}
              <SectionCard title="Elastic Analysis — Linearized Stress Results" icon={<FlaskConical className="w-5 h-5 text-white/40" />}>
                <div className="space-y-8">
                  {analysisData.elasticResults.map((pathResult) => (
                    <div key={pathResult.path}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-white text-sm">{pathResult.path}</div>
                        <h4 className="text-white font-bold" style={font}>{pathResult.location}</h4>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <TableCell header>Stress Category</TableCell>
                              <TableCell header>Induced Stress (MPa)</TableCell>
                              <TableCell header>Allowable Stress</TableCell>
                              <TableCell header>Failure Check</TableCell>
                              <TableCell header>Status</TableCell>
                            </tr>
                          </thead>
                          <tbody>
                            {pathResult.rows.map((row, idx) => (
                              <tr key={idx}>
                                <TableCell className="font-mono font-semibold text-white">{row.category}</TableCell>
                                <TableCell className="font-semibold text-white">{row.stress.toFixed(2)}</TableCell>
                                <TableCell>{row.allowable}</TableCell>
                                <TableCell>{row.check}</TableCell>
                                <TableCell><StatusBadge pass={row.pass} /></TableCell>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {/* Convergence Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <SectionCard title="Limit Load Analysis — Convergence" icon={<Activity className="w-5 h-5 text-white/40" />}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white/80" style={font}>Force Convergence — Achieved</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white/80" style={font}>Displacement Convergence — Achieved</span>
                    </div>
                    <p className="text-white/50 text-sm pt-2" style={font}>Solution converged at load factor 1.5×, confirming protection against plastic collapse per Limit Load method.</p>
                  </div>
                </SectionCard>
                <SectionCard title="Plastic Collapse E-P — Convergence" icon={<Activity className="w-5 h-5 text-white/40" />}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white/80" style={font}>Force Convergence — Achieved</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-white/80" style={font}>Displacement Convergence — Achieved</span>
                    </div>
                    <p className="text-white/50 text-sm pt-2" style={font}>Solution converged at load factor 2.4×, confirming protection against plastic collapse per Elastic-Plastic method.</p>
                  </div>
                </SectionCard>
              </div>

              {/* Local Failure Calculations */}
              <SectionCard title="Local Failure — Elastic-Plastic Analysis Calculations" icon={<AlertTriangle className="w-5 h-5 text-white/40" />}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TableCell header>Variable</TableCell>
                        <TableCell header>Symbol</TableCell>
                        <TableCell header>Value</TableCell>
                        <TableCell header>Unit</TableCell>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(analysisData.localFailureCalc).map((row, idx) => (
                        <tr key={idx} className={row.symbol === "εL" || row.symbol === "εPEQ + εCF" ? "bg-white/5" : ""}>
                          <TableCell>{row.label}</TableCell>
                          <TableCell className="font-mono font-semibold text-white">{row.symbol}</TableCell>
                          <TableCell className="font-semibold text-white">{row.value}</TableCell>
                          <TableCell>{row.unit}</TableCell>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-bold mb-3" style={font}>Local Strain Limit Check</h4>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-wider text-white/40" style={font}>Limiting Triaxial Strain (εL)</p>
                      <p className="text-white font-bold text-xl" style={font}>0.3896</p>
                    </div>
                    <span className="text-white/40 text-2xl font-bold">&gt;</span>
                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-[10px] uppercase tracking-wider text-white/40" style={font}>Total Eq. Plastic Strain (εPEQ + εCF)</p>
                      <p className="text-white font-bold text-xl" style={font}>0.0020</p>
                    </div>
                    <StatusBadge pass={true} />
                  </div>
                  <p className="text-white/50 text-sm mt-3" style={font}>
                    εL (0.3896) &gt;&gt; εPEQ + εCF (0.0020) — The local strain is well within the triaxial strain limit. Protection against local failure is confirmed.
                  </p>
                </div>
              </SectionCard>

              {/* Final Summary */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6" style={font}>Analysis Summary — All Checks Passed</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Plastic Collapse", methods: ["Elastic (Linearized)", "Limit Load (1.5×)", "E-P Analysis (2.4×)"] },
                    { title: "Ratcheting", methods: ["PL+Pb+Q ≤ SPS at all paths"] },
                    { title: "Local Failure", methods: ["S₁+S₂+S₃ ≤ 4S (Elastic)", "εPEQ + εCF ≤ εL (E-P at 1.7×)"] }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-white/40" />
                        <h4 className="text-white font-bold text-sm" style={font}>{item.title}</h4>
                      </div>
                      <div className="space-y-2">
                        {item.methods.map((m, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/60 text-xs" style={font}>{m}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3">
                        <StatusBadge pass={true} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* PARTS TAB */}
          {activeTab === "parts" && (
            <motion.div key="parts" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={font}>
                  <Package className="w-6 h-6 text-white/40" />
                  {isAnalysisProject ? "Components & Paths" : "Component Parts"} ({project.parts.length})
                </h2>
                <div className="text-sm text-white/50" style={font}>Click on a part for details</div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {project.parts.map((part, idx) => (
                  <motion.div key={part.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedPart(part.id)}
                    className="group cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 hover:bg-white/10 transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={part.image} alt={part.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white rounded-md">
                          Qty: {part.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-bold text-white group-hover:text-primary transition-colors" style={font}>{part.name}</h3>
                      <p className="text-xs text-white/50 line-clamp-2" style={font}>{part.material}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <AnimatePresence>
                {selectedPart && selectedPartData && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedPart(null)}>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-[#0a0a0a] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="relative h-64">
                        <Image src={selectedPartData.image} alt={selectedPartData.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        <button onClick={() => setSelectedPart(null)} className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>
                      <div className="p-8 space-y-6">
                        <div className="space-y-2">
                          <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full">Quantity: {selectedPartData.quantity}</span>
                          <h3 className="text-3xl font-bold text-white" style={font}>{selectedPartData.name}</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed text-lg" style={font}>{selectedPartData.description}</p>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                          <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-2" style={font}>Material</h4>
                          <p className="text-xl font-semibold text-white" style={font}>{selectedPartData.material}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ASSEMBLY TAB */}
          {activeTab === "assembly" && (
            <motion.div key="assembly" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={font}>
                <Wrench className="w-6 h-6 text-white/40" />
                {isAnalysisProject ? "Analysis Procedure" : "Assembly Guide"}
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                  {project.assemblySteps.map((step, idx) => (
                    <motion.button key={step.step} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}
                      onClick={() => setSelectedStep(idx)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all ${
                        selectedStep === idx ? "bg-white/10 border-white/30" : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                      }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                          selectedStep === idx ? "bg-white text-black" : "bg-white/10 text-white/60"
                        }`}>{step.step}</div>
                        <span className={`font-medium ${selectedStep === idx ? "text-white" : "text-white/70"}`} style={font}>{step.title}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    <motion.div key={selectedStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                      className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                      <div className="relative h-80">
                        <Image src={project.assemblySteps[selectedStep].image} alt={project.assemblySteps[selectedStep].title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <span className="px-4 py-2 bg-white text-black font-bold text-sm rounded-full">
                            Step {project.assemblySteps[selectedStep].step} of {project.assemblySteps.length}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-white" style={font}>{project.assemblySteps[selectedStep].title}</h3>
                        <p className="text-white/70 leading-relaxed text-lg" style={font}>{project.assemblySteps[selectedStep].description}</p>
                        <div className="flex gap-3 pt-4">
                          <button onClick={() => setSelectedStep(Math.max(0, selectedStep - 1))} disabled={selectedStep === 0}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronLeft className="w-4 h-4" /> Previous
                          </button>
                          <button onClick={() => setSelectedStep(Math.min(project.assemblySteps.length - 1, selectedStep + 1))} disabled={selectedStep === project.assemblySteps.length - 1}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                            Next <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {/* MODELS TAB */}
          {activeTab === "models" && (
            <motion.div key="models" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={font}>
                <BoxIcon className="w-6 h-6 text-white/40" /> 3D Models & Downloads
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.models3D.map((model, idx) => (
                  <motion.div key={model.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                    className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/30 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={model.previewImage} alt={model.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${
                          model.type === "assembly" ? "bg-white/20 text-white border border-white/30" : "bg-white/10 text-white/70 border border-white/20"
                        }`}>{model.type === "assembly" ? "Assembly" : "Part"}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Box className="w-4 h-4 text-white/60" />
                          <span className="text-xs text-white/60">{model.polyCount}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="font-bold text-white text-lg" style={font}>{model.name}</h3>
                      <div className="space-y-2">
                        <p className="text-xs font-medium uppercase tracking-wider text-white/40" style={font}>Available Formats</p>
                        <div className="flex flex-wrap gap-2">
                          {model.fileFormat.split(" / ").map((format) => (
                            <span key={format} className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded-md">{format}</span>
                          ))}
                        </div>
                      </div>
                      <Link href="/contact">
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all" style={font}>
                          <Download className="w-4 h-4" /> Request Model
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-8 h-8 text-white/60" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2" style={font}>Need Custom {isAnalysisProject ? "FEA Analysis" : "3D Models"}?</h3>
                    <p className="text-white/60" style={font}>
                      Contact me for custom {isAnalysisProject ? "stress analysis, pressure vessel design review, or ASME compliance verification" : "CAD work, modifications to existing designs, or complete engineering solutions"} tailored to your requirements.
                    </p>
                  </div>
                  <Link href="/contact">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all shadow-xl whitespace-nowrap" style={font}>
                      Get in Touch
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
