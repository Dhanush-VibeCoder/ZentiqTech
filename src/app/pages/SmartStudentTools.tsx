import { motion } from "motion/react";
import { 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  ExternalLink, 
  FileText, 
  Calendar, 
  Calculator, 
  Lock,
  Layers,
  Sparkles
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import appIcon from "../../assets/smart-student-tools/app-icon.png";
import bannerImg from "../../assets/smart-student-tools/banner.png";

import shotDashboards from "../../assets/smart-student-tools/shot-dashboards.jpg";
import shotCgpa from "../../assets/smart-student-tools/shot-cgpa.jpg";
import shotCitation from "../../assets/smart-student-tools/shot-citation.jpg";
import shotImageTools from "../../assets/smart-student-tools/shot-image-tools.jpg";
import shotPasteTool from "../../assets/smart-student-tools/shot-paste-tool.jpg";

export function SmartStudentTools() {
  const features = [
    {
      icon: Calendar,
      title: "75% Attendance Tracker",
      description: "Know exactly how many classes you can safely skip or need to attend to hit the university 75% attendance threshold.",
    },
    {
      icon: Calculator,
      title: "University CGPA Converter",
      description: "Convert 10.0 scale CGPA to percentage using official university formulas (VTU, Anna University, Mumbai University, etc.).",
    },
    {
      icon: FileText,
      title: "IEEE & APA Citation Generator",
      description: "Format instant IEEE, APA 7, and MLA reference bibliographies for college seminars, research papers, and project reports.",
    },
    {
      icon: Lock,
      title: "Private In-Browser PDF Suite",
      description: "Merge, split, password-lock, and unlock PDF assignments 100% locally in your browser. Files never leave your computer.",
    },
    {
      icon: GraduationCap,
      title: "Grade & Backlog Trackers",
      description: "Track semester-wise arrears to protect placement eligibility and simulate target exam scores needed to score an A.",
    },
    {
      icon: Zap,
      title: "100% Free & No Sign-up",
      description: "Open and use immediately on any phone, tablet, or laptop. No login wall, no paywalls, no software installation.",
    },
  ];

  const showcaseScreenshots = [
    {
      title: "Academic Citation Generator",
      tag: "Research & Seminars",
      desc: "Instant reference formatting for IEEE, APA 7, MLA 9, and Harvard standards with real-time preview and export.",
      src: shotCitation,
      url: "smartstudenttools.xyz/citation-generator",
    },
    {
      title: "CGPA to Percentage Converter",
      tag: "Placements & Higher Studies",
      desc: "Formula-accurate conversion algorithm supporting VTU, Anna Univ, CBSE, and 4.0 international scales.",
      src: shotCgpa,
      url: "smartstudenttools.xyz/gpa-converter",
    },
    {
      title: "Browser-Based Image Suite",
      tag: "Productivity & OCR",
      desc: "Full suite of client-side image tools including handwritten text OCR, image-to-PDF compilation, and resize.",
      src: shotImageTools,
      url: "smartstudenttools.xyz/image-tools",
    },
    {
      title: "Instant Clipboard Paste & Convert",
      tag: "Fast Utilities",
      desc: "Paste images directly with Ctrl+V and convert between PNG, JPG, WebP, AVIF, and ICO without saving to disk.",
      src: shotPasteTool,
      url: "smartstudenttools.xyz/paste-image",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-24 pt-32 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 40%, rgba(255, 92, 0, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 171, 102, 0.12) 0%, transparent 50%),
            linear-gradient(180deg, rgba(11, 14, 16, 0.92) 0%, rgba(11, 14, 16, 1) 60%)
          `,
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl border border-border flex items-center justify-center mx-auto mb-6 bg-muted/60 p-3 shadow-xl">
              <img
                src={appIcon}
                alt="Smart Student Tools icon"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="section-kicker mb-4">Academic Productivity Suite</div>
            
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight">
              Smart Student <span className="text-primary">Tools</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A free, privacy-first web platform helping college students track attendance, convert university CGPA, format IEEE citations, and manage assignment PDFs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://smartstudenttools.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Launch Web App
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#screenshots"
                className="btn-secondary"
              >
                View Screenshots
              </a>
            </div>
          </motion.div>

          {/* Banner Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl bg-card"
          >
            <img
              src={bannerImg}
              alt="Smart Student Tools preview banner"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Main Dashboard View */}
      <section id="screenshots" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="section-kicker mb-4">Visual Interface</div>
            <h2 className="section-title mb-4">
              Explore the <span className="text-primary">Product Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clean, distraction-free dashboards engineered for students on mobile and desktop.
            </p>
          </motion.div>

          {/* Large Hero App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="glass-card overflow-hidden border border-border shadow-2xl">
              {/* Browser Header Bar */}
              <div className="px-5 py-3 border-b border-border/80 bg-background/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-muted-foreground font-mono bg-muted/60 px-4 py-1 rounded-full border border-border/60">
                  smartstudenttools.xyz/overview
                </div>
                <div className="w-12" />
              </div>
              
              <img
                src={shotDashboards}
                alt="Smart Student Tools Academic Dashboards Hub"
                className="w-full h-auto object-cover"
              />

              <div className="p-6 md:p-8 bg-card/60 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    Centralized Academic Hub
                  </div>
                  <h3 className="text-2xl font-bold">Academic Dashboards</h3>
                  <p className="text-muted-foreground text-sm mt-1 max-w-xl">
                    One-click navigation across all academic modules: attendance calculators, university CGPA conversions, exam grade predictors, and arrears trackers.
                  </p>
                </div>
                <a
                  href="https://smartstudenttools.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm whitespace-nowrap inline-flex items-center gap-2"
                >
                  Open Live Hub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2x2 Showcase Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {showcaseScreenshots.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card overflow-hidden border border-border group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Browser Topbar */}
                <div className="px-4 py-2.5 border-b border-border/80 bg-background/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono truncate max-w-[200px]">
                    {item.url}
                  </span>
                  <div className="w-8" />
                </div>

                <div className="overflow-hidden bg-black/40">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 bg-card/60 border-t border-border/60">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-primary mb-1 block">
                    {item.tag}
                  </span>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <a
                    href={`https://${item.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-semibold inline-flex items-center gap-1.5 hover:underline"
                  >
                    Try Tool Live
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="section-kicker mb-4">Capabilities</div>
            <h2 className="section-title mb-4">
              Built for <span className="text-primary">Real Student Workflows</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every tool is tailored to save time, eliminate guesswork, and maintain complete data privacy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Guarantee */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Zero Server Uploads & Client-Side Privacy</h3>
              <p className="text-muted-foreground leading-relaxed">
                When students merge PDFs or extract text, documents are processed entirely in the browser using client-side WebAssembly and JavaScript. No assignment files, grade records, or personal data are ever uploaded to remote servers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="section-kicker mb-4">Get Started</div>
            <h2 className="section-title mb-6">
              Empower Your <span className="text-primary">College Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students calculating attendance, grades, citations, and managing assignments effortlessly.
            </p>
            <a
              href="https://smartstudenttools.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Open Smart Student Tools
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
