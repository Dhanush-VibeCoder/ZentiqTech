import { motion } from "motion/react";
import { Zap, RefreshCw, Shield } from "lucide-react";
import { useInView } from "./useInView";

export function WhyZentiqTech() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Zap,
      title: "Focused design",
      description: "Every feature serves a purpose. No bloat, no distractions—just what you need.",
    },
    {
      icon: RefreshCw,
      title: "Fast iterations",
      description: "We move quickly, listen carefully, and constantly improve based on real feedback.",
    },
    {
      icon: Shield,
      title: "Privacy-first",
      description: "Your data stays yours. We build with transparency and respect at the core.",
    },
  ];

  return (
    <section id="why" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-kicker mb-4">Principles</div>
          <h2 className="section-title mb-4">
            Why <span className="text-primary">ZentiqTech</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="text-center glass-card p-8"
            >
              <div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center mx-auto mb-6 bg-muted/60">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
