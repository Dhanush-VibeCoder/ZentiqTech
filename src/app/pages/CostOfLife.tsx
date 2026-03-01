import { motion } from "motion/react";
import { Clock, Shield, Zap, Download } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import appIcon from "../../assets/cost-of-life/app-icon.png";
import appScreenshot1 from "../../assets/cost-of-life/shot1.png";
import appScreenshot2 from "../../assets/cost-of-life/shot2.png";
import appScreenshot3 from "../../assets/cost-of-life/shot3.png";
import appScreenshot4 from "../../assets/cost-of-life/shot4.png";

export function CostOfLife() {
  const features = [
    {
      icon: Clock,
      title: "Time-Based Pricing",
      description: "See how many hours of work any purchase actually costs you.",
    },
    {
      icon: Zap,
      title: "Instant Calculations",
      description: "Enter your hourly wage once, then instantly evaluate any purchase.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All calculations happen locally. Your financial data never leaves your device.",
    },
  ];

  const screenshots = [
    { src: appScreenshot1, alt: "Cost Of Life initial screen" },
    { src: appScreenshot2, alt: "Cost Of Life calculation example" },
    { src: appScreenshot3, alt: "Cost Of Life about dialog" },
    { src: appScreenshot4, alt: "Cost Of Life with inputs" },
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
            <div className="w-20 h-20 rounded-2xl border border-border flex items-center justify-center mx-auto mb-6 bg-muted/60">
              <img
                src={appIcon}
                alt="Cost Of Life app icon"
                className="w-10 h-10 object-contain"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              Cost Of Life
            </h1>
            
            <p className="text-2xl text-primary mb-4 uppercase tracking-[0.2em]">
              Convert prices into hours of work.
            </p>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make smarter purchasing decisions by understanding the true cost of your spending—measured in your most valuable resource: time.
            </p>

            <button className="btn-primary">
              <Download className="w-5 h-5" />
              Download App
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="section-kicker mb-4">Workflow</div>
            <h2 className="section-title mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Cost Of Life helps you make more mindful purchasing decisions by reframing prices in terms of your time.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="section-kicker mb-2">Step 1</div>
                <h3 className="text-3xl font-semibold mb-4">Enter Your Hourly Wage</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tell the app how much you earn per hour. The calculator automatically adjusts for take-home pay (estimating 75% after taxes and deductions).
                </p>
              </div>
              <div className="flex-1">
                <div className="device-frame aspect-[9/19] mx-auto max-w-[320px] md:max-w-none">
                  <img
                    src={appScreenshot1}
                    alt="Enter hourly wage"
                    className="device-screen"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row-reverse items-center gap-8"
            >
              <div className="flex-1">
                <div className="section-kicker mb-2">Step 2</div>
                <h3 className="text-3xl font-semibold mb-4">Enter the Item Price</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Input the cost of something you're considering buying. It could be a coffee, a new gadget, or anything else.
                </p>
              </div>
              <div className="flex-1">
                <div className="device-frame aspect-[9/19] mx-auto max-w-[320px] md:max-w-none">
                  <img
                    src={appScreenshot4}
                    alt="Enter item price"
                    className="device-screen"
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <div className="section-kicker mb-2">Step 3</div>
                <h3 className="text-3xl font-semibold mb-4">See the True Cost</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Instantly see how many hours of work that purchase represents. A visual bar shows what percentage of a standard 40-hour work week you'd spend on this item.
                </p>
              </div>
              <div className="flex-1">
                <div className="device-frame aspect-[9/19] mx-auto max-w-[320px] md:max-w-none">
                  <img
                    src={appScreenshot2}
                    alt="See calculation results"
                    className="device-screen"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="section-kicker mb-4">Highlights</div>
            <h2 className="section-title mb-4">
              Key <span className="text-primary">Features</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-16 h-16 rounded-2xl border border-border flex items-center justify-center mb-6 bg-muted/60">
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

      {/* Screenshots Gallery */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="section-kicker mb-4">Gallery</div>
            <h2 className="section-title mb-4">
              App <span className="text-primary">Screenshots</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="device-frame aspect-[9/19] mx-auto max-w-[260px] transition-transform duration-300 group-hover:-translate-y-1">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="device-screen"
                  />
                </div>
              </motion.div>
            ))}
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
            <div className="section-kicker mb-4">Download</div>
            <h2 className="section-title mb-6">
              Ready to Make <span className="text-primary">Smarter Decisions</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download Cost Of Life and start evaluating purchases in terms of what truly matters: your time.
            </p>
            <button className="btn-primary">
              <Download className="w-5 h-5" />
              Download Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

