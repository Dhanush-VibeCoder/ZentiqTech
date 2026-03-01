import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { useInView } from "./useInView";

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="section-kicker mb-4">Contact</div>
          <h2 className="section-title mb-8">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 hover:border-primary transition-all group"
          >
            <Mail className="w-6 h-6 text-primary" />
            <a
              href="mailto:hello@zentiqtech.com"
              className="text-xl font-semibold group-hover:text-primary transition-colors"
            >
              hello@zentiqtech.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
