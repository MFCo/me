import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import ThemeChanger from "./theme-changer";

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  // Navigation Logic
  const navClassName = isHome 
    ? "bg-transparent" 
    : "bg-surface-light dark:bg-deep-black bg-opacity-80 dark:bg-opacity-80";

  return (
    <div className="flex flex-col min-h-screen justify-between font-sans">
      <div className={cn("flex flex-col justify-center sticky top-0 z-50 backdrop-blur-md transition-colors duration-300", navClassName)}>
        <nav className="flex items-center justify-between w-full relative max-w-4xl px-4 mx-auto py-6">
          <div className="flex space-x-6">
            <Link
              href="/"
              className={cn(
                router.pathname === "/"
                  ? "text-black dark:text-white font-bold border-b-2 border-accent-light dark:border-neon-lime"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white",
                "uppercase tracking-widest text-sm transition-all pb-1 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700"
              )}>

              <span>Home</span>

            </Link>
            <Link
              href="/blog"
              className={cn(
                router.pathname.includes("/blog")
                  ? "text-black dark:text-white font-bold border-b-2 border-accent-light dark:border-neon-lime"
                  : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white",
                "uppercase tracking-widest text-sm transition-all pb-1 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700"
              )}>

              <span>Blog</span>

            </Link>
          </div>
          <ThemeChanger />
        </nav>
      </div>
      
      {/* Content Wrapper */}
      {children}

      <footer className="w-full max-w-4xl mx-auto px-4 py-12 text-gray-500 text-sm uppercase tracking-widest">
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-between items-center">
          <span>Mariano Fernandez Cocirio © 2026</span>
        </div>
      </footer>
    </div>
  );
}
