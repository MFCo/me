import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../components/container";

export default function Custom404() {
  return (
    <Container title="404 - Page Not Found">
      <div className="flex flex-col items-center justify-center min-h-[70vh] relative overflow-hidden text-center px-4">
        {/* Background Decorative Elem */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-light dark:bg-neon-lime opacity-20 blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-multiply dark:mix-blend-screen" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[15vw] md:text-[12vw] font-display font-black leading-none text-transparent stroke-text select-none opacity-50"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 -mt-4 md:-mt-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            Lost in the digital void?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have vanished into thin air.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform rounded-full"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </Container>
  );
}
