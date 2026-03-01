import { motion } from "motion/react";
import { Link } from "react-router";
import { Clock, ArrowRight } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { blogPosts } from "../data/blogPosts";

export function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
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
            <div className="section-kicker mb-4">Insights</div>
            <h1 className="text-5xl md:text-6xl font-semibold mb-6">
              The ZentiqTech <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights on product development, design philosophy, and building tools that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="glass-card p-8 h-full transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="text-primary font-semibold">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

