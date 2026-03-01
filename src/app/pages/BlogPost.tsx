import { motion } from "motion/react";
import { Link, useParams, Navigate } from "react-router";
import { Clock, User } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { blogPosts } from "../data/blogPosts";

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Article Header */}
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
            className="max-w-3xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-muted/70 border border-border text-primary rounded-full text-sm font-semibold uppercase tracking-[0.2em]">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-invert prose-lg"
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.article>
        </div>
      </section>

      {/* More Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="section-kicker mb-3">Next</div>
            <h3 className="text-2xl font-semibold mb-8">More from ZentiqTech</h3>
            <div className="grid gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
                    className="block glass-card rounded-xl p-6 hover:border-primary transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                      <span className="text-primary font-semibold">
                        {relatedPost.category}
                      </span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-muted-foreground">{relatedPost.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

