import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 15% 30%, rgba(255, 92, 0, 0.18) 0%, transparent 45%),
          radial-gradient(circle at 85% 20%, rgba(255, 171, 102, 0.14) 0%, transparent 45%),
          linear-gradient(180deg, rgba(11, 14, 16, 0.9) 0%, rgba(11, 14, 16, 1) 60%)
        `,
      }}
    >
      <div className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="section-kicker mb-6">Product studio</div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold mb-6 leading-tight"
          >
            ZentiqTech builds focused apps that make{" "}
            <span className="text-primary">everyday decisions</span> clearer.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
          >
            We design tools that turn complexity into clarity — fast, usable, and elegant.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("products")}
              className="btn-primary group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Our Apps
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary"
            >
              Contact
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 92, 0, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 92, 0, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
