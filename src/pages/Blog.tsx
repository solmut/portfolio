import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise",
    excerpt: "How large language models are transforming the way businesses operate and scale their digital infrastructure.",
    author: "Sarah Chen",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "AI & ML",
    image: "https://picsum.photos/seed/ai/800/600"
  },
  {
    id: 2,
    title: "Scaling to 1 Million Requests Per Second",
    excerpt: "A deep dive into Lumina's edge network architecture and how we handle massive traffic spikes with zero downtime.",
    author: "Marcus Thorne",
    date: "Mar 12, 2024",
    readTime: "12 min read",
    category: "Engineering",
    image: "https://picsum.photos/seed/scale/800/600"
  },
  {
    id: 3,
    title: "Designing for the Neural Web",
    excerpt: "Why traditional UX patterns are failing and how to design interfaces that feel intuitive in an AI-first world.",
    author: "Elena Rodriguez",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "https://picsum.photos/seed/design/800/600"
  },
  {
    id: 4,
    title: "Security in the Age of Autonomous Agents",
    excerpt: "New challenges and solutions for protecting sensitive data when AI agents are making decisions on your behalf.",
    author: "David Kim",
    date: "Mar 05, 2024",
    readTime: "10 min read",
    category: "Security",
    image: "https://picsum.photos/seed/security/800/600"
  }
];

const Blog = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
              Lumina <br />
              <span className="text-emerald-400 italic font-serif">Journal.</span>
            </h1>
            <p className="text-lg text-white/50 max-w-md leading-relaxed">
              Insights, engineering deep-dives, and product updates from the team building the future.
            </p>
          </motion.div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden glass border border-white/10 mb-20 group cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src={BLOG_POSTS[0].image} 
                alt={BLOG_POSTS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  Featured
                </span>
                <span className="text-white/30 text-xs uppercase tracking-widest font-bold">
                  {BLOG_POSTS[0].category}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-emerald-400 transition-colors">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                {BLOG_POSTS[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div>
                    <div className="font-bold text-sm">{BLOG_POSTS[0].author}</div>
                    <div className="text-xs text-white/30">{BLOG_POSTS[0].date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  Read More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-[2rem] border border-white/5 overflow-hidden group cursor-pointer hover:border-emerald-500/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="text-xs font-bold text-white/60">{post.author}</div>
                  <div className="text-xs text-white/30">{post.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[3rem] bg-emerald-500 text-black text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Stay in the loop.</h2>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto opacity-70">
              Get the latest updates on AI infrastructure and Lumina product releases delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-black/10 border border-black/10 rounded-2xl focus:outline-none focus:border-black/30 transition-colors placeholder:text-black/40 font-bold"
              />
              <button className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
