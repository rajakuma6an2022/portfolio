import React, { useState } from "react";
import { portfolioData } from "../data/Portfolio";
import TypingEffect from "../components/TypingEffect";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { name, role, description, resumeLink, image, email, phone, location } =
    portfolioData.hero;

  const handleDownload = (resume: string) => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Rajakumaran_Resume.pdf";
    link.click();
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[80vh] text-center md:text-left gap-6 p-2 md:p-4">
      {/* Left Side - Text Content */}
      <div className="flex flex-col items-center md:items-start max-w-full md:max-w-lg">
        <motion.h1
          className="md:text-3xl text-xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <TypingEffect text={name} />
        </motion.h1>

        <motion.h2
          className="md:text-xl text-lg md:text-2xl font-semibold text-text mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {role}
        </motion.h2>

        <motion.p
          className="mb-4 text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="text-gray-400 text-sm sm:text-base flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Location */}
          <span>{location}</span>

          {/* Separator */}
          <motion.span
            className="hidden sm:inline-block text-blue-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            •
          </motion.span>

          {/* Email */}
          <span>{email}</span>

          {/* Separator */}
          <motion.span
            className="hidden sm:inline-block text-blue-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            •
          </motion.span>

          {/* Phone */}
          <span>{phone}</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <motion.button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </motion.button>

          <motion.a
            onClick={() => handleDownload(resumeLink)}
            className="px-4 py-2 cursor-pointer border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </div>

        <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
          {portfolioData.jobPortals.map((category) => (
            <React.Fragment key={category.category}>
              {category.items.map(({ portal, icon, link }, index) => (
                <button
                  key={index}
                  onClick={() => window.open(link, "_blank")}
                  className="p-2 rounded hover:bg-gray-700 transition"
                  title={portal}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    {portal === "Naukri" && typeof icon === "string" ? (
                      <img
                        src={icon}
                        alt={portal}
                        className="w-full h-full object-contain"
                      />
                    ) : React.isValidElement(icon) ? (
                      React.cloneElement(icon, { size: 28 }) // smaller size on mobile
                    ) : (
                      icon
                    )}
                  </div>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 mb-4 md:mb-0"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/fallback.jpg";
          }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
