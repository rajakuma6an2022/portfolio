import React, { useState } from "react";
import { portfolioData } from "../data/Portfolio";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Work Projects" | "Personal Creations"
  >("Work Projects");

  const displayedProjects =
    activeTab === "Work Projects"
      ? portfolioData?.companyProjects || []
      : portfolioData?.personalProjects || [];

  return (
    <section className="md:p-5 p-2 mx-auto">
      <h2 className="md:text-3xl text-xl font-bold mb-2 md:mb-6">Projects</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-start gap-4 mb-8">
        {["Work Projects", "Personal Creations"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab as "Work Projects" | "Personal Creations")
            }
            className={`relative pb-1 text-sm sm:text-base font-medium transition-colors ${
              activeTab === tab
                ? "text-blue-600"
                : "text-text hover:text-blue-500"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-blue-600"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
        {displayedProjects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 md:p-6 p-2 rounded-xl shadow-lg flex flex-col relative"
              >
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0px 6px 20px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md cursor-pointer transition-all duration-300"
                    title="Live Demo"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5" // smaller icon size
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </motion.a>
                )}

                <h3 className="md:text-xl text-base font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 md:text-base text-sm dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full cursor-pointer transition-all duration-300 bg-white/30 dark:bg-gray-700/30"
                      style={{ color: tech.color }}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="md:text-base text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-lg font-medium"
          >
            🚫 No Data Found
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
