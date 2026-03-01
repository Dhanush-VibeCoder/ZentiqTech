import { motion } from "motion/react";
import { useInView } from "./useInView";

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="section-kicker mb-4 text-center">About</div>
          <h2 className="section-title mb-8 text-center">
            About <span className="text-primary">ZentiqTech</span>
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              ZentiqTech is a product studio focused on creating simple, high-impact applications 
              that solve real problems. We believe in the power of clarity—turning overwhelming 
              decisions into intuitive, actionable insights.
            </p>
            <p>
              Our mission is to build tools that respect your time, protect your privacy, and 
              empower you to make better choices every day. Each app we create is carefully 
              crafted to be fast, elegant, and effortlessly usable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

