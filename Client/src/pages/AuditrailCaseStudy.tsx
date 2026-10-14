import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaDatabase,
  FaLock,
  FaTachometerAlt,
  FaServer,
  FaCheckCircle,
  FaPlay,
  FaTimes,
} from "react-icons/fa";

const AuditrailCaseStudy: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Google Drive Preview URL
  const DEMO_VIDEO_URL =
    "https://drive.google.com/file/d/15UtjlAmUlf1bMTEPXEyR3-SWWOYGr6j_/preview";

  const closeVideo = () => setIsVideoOpen(false);

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    if (isVideoOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isVideoOpen]);
  
  const stats = [
    { label: "Events Tested", value: "510K+" },
    { label: "Pagination Speed", value: "391× faster" },
    { label: "Tests Written", value: "205+" },
    { label: "Lighthouse", value: "100 / 94" },
  ];

  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "TanStack Query",
    "TanStack Virtual",
    "Zod",
    "Vitest",
    "Playwright",
    "GitHub Actions",
    "Vercel",
    "Render",
    "Neon",
  ];

  const solutions = [
    "Implemented keyset pagination using a composite PostgreSQL index instead of OFFSET pagination.",
    "Built a virtualized infinite-scroll table using TanStack Query + TanStack Virtual so only visible rows stay in the DOM.",
    "Synchronized search, level, service, action and date-range filters with the URL for shareable and back-button-safe views.",
    "Passwordless magic-link authentication with SHA-256 hashed single-use tokens and httpOnly cookie sessions.",
    "Server-enforced tenant isolation — tenant ID always comes from the verified session, never from the client.",
    "Hardened with Zod validation, rate limiting, Helmet, request IDs and structured logs that never expose tokens.",
  ];

  const results = [
    {
      title: "Pagination Performance",
      desc: "Keyset pagination: 0.117 ms median vs OFFSET 45.792 ms at 50,000-row depth → ~391× faster in the measured environment.",
    },
    {
      title: "Index Impact",
      desc: "Filtered first-page query improved from 575 ms (sequential scan) to ~0.5 ms with a composite PostgreSQL index.",
    },
    {
      title: "Test Coverage",
      desc: "161 Vitest tests (54 API unit + 12 real-DB integration + 95 frontend) and 44 Playwright E2E tests including axe WCAG AA checks in light & dark mode.",
    },
    {
      title: "Lighthouse Scores",
      desc: "Desktop: 100 Performance / Accessibility / Best Practices / SEO. Mobile: 94 Performance.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="md:p-5 p-2">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 md:mt-8 text-2xl md:text-4xl font-bold tracking-tight"
        >
          Auditrail — Multi-Tenant Audit Log Explorer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl"
        >
          A full-stack audit-log explorer built and tested on{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            510,501 events
          </span>
          , featuring keyset pagination, virtualized infinite scroll, tenant
          isolation, magic-link authentication, automated testing and CI/CD.
        </motion.p>

        {/* Quick Stats */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
              className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 text-center shadow-sm"
            >
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
            <FaServer className="text-blue-600 dark:text-blue-400 text-base" />
            Tech Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/40 px-3 py-1 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-lg md:text-2xl font-semibold">Problem</h2>
          <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Audit logs can grow to hundreds of thousands of rows. Loading all
            records is impractical, and classic OFFSET pagination becomes
            extremely slow at deep page positions. In a multi-tenant product,
            one tenant must never be able to access another tenant’s events —
            even if the client tampers with requests.
          </p>
        </section>

        {/* Solution */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
            <FaTachometerAlt className="text-blue-600 dark:text-blue-400 text-base" />
            Solution
          </h2>
          <ul className="mt-4 space-y-3">
            {solutions.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex gap-3 text-sm md:text-base text-gray-700 dark:text-gray-300"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-blue-600 dark:text-blue-400 text-sm" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Measured Results */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
            <FaDatabase className="text-blue-600 dark:text-blue-400 text-base" />
            Measured Results
          </h2>
          <div className="mt-5 grid gap-4">
            {results.map((result, i) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 md:p-5 shadow-sm"
              >
                <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base">
                  {result.title}
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {result.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
            <FaLock className="text-blue-600 dark:text-blue-400 text-base" />
            Architecture
          </h2>
          <div className="mt-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 md:p-5 shadow-sm">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Browser → Next.js on Vercel (proxies{" "}
              <code className="text-blue-600 dark:text-blue-400 font-mono text-xs md:text-sm">
                /api/*
              </code>
              ) → Express API on Render → PostgreSQL on Neon.
            </p>
            <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
              The browser only talks to the Next.js origin, so the session
              cookie stays first-party and secure.
            </p>
          </div>
        </section>

{/* ========== DEMO VIDEO SECTION ========== */}
        <section className="mt-10 md:mt-14">
          <h2 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
            <FaPlay className="text-blue-600 dark:text-blue-400 text-base" />
            Demo Video
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-sm group cursor-pointer"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg transition"
              >
                <FaPlay className="text-sm" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <p className="mt-3 text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
            Click to play a short walkthrough of Auditrail
          </p>
        </section>

        {/* CTA Buttons */}
        <section className="mt-10 md:mt-14 flex flex-wrap gap-3 md:gap-4">
          <motion.a
            href="https://github.com/rajakuma6an2022/auditrail-web"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm md:text-base font-semibold shadow transition"
          >
            <FaGithub /> View Frontend Code
          </motion.a>

          <motion.a
            href="https://github.com/rajakuma6an2022/auditrail-api"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white px-5 py-2.5 text-sm md:text-base font-semibold transition"
          >
            <FaGithub /> View API Code
          </motion.a>
        </section>

        {/* Footer note */}
        <p className="mt-14 md:mt-16 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
          Built as a production-style portfolio project to demonstrate
          real-world engineering practices.
        </p>
      </div>

      {/* ========== VIDEO MODAL ========== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl rounded-xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition"
                aria-label="Close video"
              >
                <FaTimes />
              </button>

              {/* Google Drive Video Embed */}
              <div className="aspect-video w-full">
                <iframe
                  src={DEMO_VIDEO_URL}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Auditrail Demo Video"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default AuditrailCaseStudy;