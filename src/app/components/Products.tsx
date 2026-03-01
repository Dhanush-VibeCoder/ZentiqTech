import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { useInView } from "./useInView";
import appIcon from "../../assets/cost-of-life/app-icon.png";

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
            Beautifully simple apps designed to help you make better decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cost Of Life App Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/cost-of-life">
              <div className="group relative glass-card p-8 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <img
                      src={appIcon}
                      alt="Cost Of Life app icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Cost Of Life</h3>
                  <p className="text-primary text-sm font-semibold mb-4 uppercase tracking-[0.2em]">
                    Convert prices into hours of work.
                  </p>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A simple way to evaluate purchases using time instead of money. See the true 
                  cost of your spending decisions and make more mindful choices about what you buy.
                </p>
                
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
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
