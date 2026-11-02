import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { useInView } from "./useInView";
import appIcon from "../../assets/smart-student-tools/app-icon.png";

export function Products() {
  const { ref, inView } = useInView();

  return (
    <section id="products" ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="section-kicker mb-4">Products</div>
          <h2 className="section-title mb-4">
            Focused apps for <span className="text-primary">real decisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautifully simple, privacy-first tools designed to solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Smart Student Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/smart-student-tools">
              <div className="group relative glass-card p-8 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted/60 p-2.5 flex items-center justify-center border border-border">
                      <img
                        src={appIcon}
                        alt="Smart Student Tools app icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      Live App
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Smart Student Tools</h3>
                  <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-[0.18em]">
                    Academic Productivity &amp; Utilities
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    An all-in-one suite of browser tools for college students: 75% attendance tracking, 
                    university CGPA converter (VTU, Anna Univ, etc.), IEEE/APA citation generator, 
                    and 100% private in-browser PDF utilities.
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm font-semibold text-primary">
                  <span className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    Product Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-muted-foreground text-xs font-normal">
                    smartstudenttools.xyz ↗
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative glass-card border-dashed p-8 flex flex-col items-center justify-center text-center min-h-[320px]"
          >
            <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-muted-foreground">Coming Soon</h3>
            <p className="text-muted-foreground">
              More focused apps on the way. Stay tuned for tools that simplify your everyday decisions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
