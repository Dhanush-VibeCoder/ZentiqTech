import { motion } from "motion/react";
import { 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  ExternalLink, 
  FileText, 
  Calendar, 
  Calculator, 
  Lock 
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import appIcon from "../../assets/smart-student-tools/app-icon.png";
import bannerImg from "../../assets/smart-student-tools/banner.png";

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
                href="#features"
                className="btn-secondary"
              >
                Explore Features
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

      {/* Features Grid */}
      <section id="features" className="py-24 bg-secondary/30">
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
      <section className="py-20 bg-background border-y border-border">
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

