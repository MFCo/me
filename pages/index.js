import Link from "next/link";
import groq from "groq";
import client from "../client";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import Container from "../components/container";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IndexPage({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Stagger variants for the hero
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotate: 5 },
    show: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4
      }
    },
  };

  if (!mounted) return null;

  return (
    <Container className="mt-0" navClassName="bg-transparent">
      {/* HERO SECTION */}
      <section className="min-h-[60vh] md:h-screen flex flex-col justify-center relative md:pt-0">
        <motion.div
          style={{ y }}
          className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-neon-lime opacity-10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-[60] mix-blend-multiply dark:mix-blend-screen"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="z-10 px-4 md:px-8"
        >
          <motion.h1 variants={itemVariants} className="text-[10vw] md:text-[8vw] leading-[0.85] font-display font-black uppercase text-black dark:text-white mb-6 md:mb-8 tracking-tighter mix-blend-difference break-normal">
            Mariano<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-neon-lime dark:to-green-500">Cocirio</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end w-full max-w-4xl border-t-4 border-accent-light dark:border-white pt-6 md:pt-8 mt-4 md:mt-8">
            <div className="flex-1">
              <p className="text-xl md:text-3xl font-bold font-display uppercase leading-tight text-black dark:text-white">
                Product Manager &<br />
                System Engineer
              </p>
            </div>
            <div className="flex-1 text-base md:text-xl text-gray-800 dark:text-gray-300 font-mono">
              <p>
                Building the future of agents at <strong className="bg-cyan-200 dark:bg-neon-lime text-black px-1">Google DeepMind</strong>.
                Based in Berlin, from Rauch.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* LATEST ARTICLES - Horizontal/Skew Scroll Vibe */}
      <section className="py-16 md:py-32 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-4 mb-2">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white uppercase">
              Latest
            </h2>
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black text-transparent stroke-text mb-8 md:mb-16 text-black dark:text-gray-800 opacity-20 select-none absolute top-0 left-0 -z-10 translate-y-8 translate-x-4">
            LATEST
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 px-4">
          {posts.length > 0 && posts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Link href="/blog/[slug]" as={`/blog/${post.slug.current}`} className="group block relative">
                <div className="absolute inset-0 bg-accent-light dark:bg-neon-lime translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 -z-10" />
                <div className="bg-surface-light dark:bg-surface-dark border-2 border-accent-light dark:border-white p-8 md:p-12 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
                  <span className="font-mono text-gray-500 dark:text-neon-lime text-sm tracking-widest uppercase mb-4 block font-bold">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", { month: 'long', year: 'numeric' })}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white leading-tight group-hover:underline decoration-4 underline-offset-8 decoration-accent-light dark:decoration-neon-lime transition-all">
                    {post.title}
                  </h3>
                  <div className="mt-8 flex justify-end">
                    <span className="text-4xl text-black dark:text-white group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog" className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            View All Archives
          </Link>
        </div>
      </section>

      {/* CONTACT / SOCIALS */}
      <section className="py-32 border-t-2 border-dashed border-gray-300 dark:border-gray-800 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-black dark:text-white uppercase leading-none">
            Let's<br />Connect
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Twitter', url: 'https://x.com/mcocirio' },
              { name: 'GitHub', url: 'https://github.com/MFCo' },
              { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mcocirio' },
              { name: 'Email', url: 'mailto:marianococirio@gmail.com' }
            ].map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-display font-bold uppercase text-gray-500 dark:text-gray-400 hover:text-accent-light dark:hover:text-neon-lime transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Container >
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}
