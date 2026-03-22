import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export function CostOfLifePrivacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section
        className="py-24 pt-32 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 92, 0, 0.16) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 171, 102, 0.1) 0%, transparent 50%),
            linear-gradient(180deg, rgba(11, 14, 16, 0.92) 0%, rgba(11, 14, 16, 1) 60%)
          `,
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="section-kicker mb-4">Privacy</div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Cost Of Life Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Effective date: March 22, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <div className="glass-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cost Of Life is designed to respect your privacy. The app performs
                all calculations locally on your device and does not require an
                account.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not collect, store, or transmit personal data. Your wage
                and item price entries remain on your device.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cost Of Life does not use analytics or tracking services.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                The app does not share data with third parties because no data
                is collected or transmitted.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                If this policy changes, we will update the effective date above
                and publish the new policy on this page.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy questions, contact us at hellozentiqtech@.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
