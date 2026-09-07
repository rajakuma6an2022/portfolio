import React, { useState } from "react";
import { portfolioData } from "../data/Portfolio";
import { motion, AnimatePresence } from "framer-motion";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Education" | "Skills" | "Certification"
  >("Education");

  const handleDownload = (certificate: string) => {
    const link = document.createElement("a");
    link.href = certificate;
    link.download = "Rajakumaran_Resume.pdf";
    link.click();
  };

  return (
//     <div className="md:p-5 p-2">
//       <h2 className="md:text-3xl text-xl font-bold mb-2 md:mb-6">About</h2>
//       {/* Tabs */}
//       <div className="flex flex-wrap justify-start sm:justify-start gap-[30px] mb-2 md:mb-8">
//         {(["Education", "Skills", "Certification"] as const).map((tab) => (
//           <motion.button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`relative px-0 py-2 text-sm sm:text-base font-medium transition-colors duration-300 inline-block ${
//               activeTab === tab
//                 ? "text-blue-500 after:block after:h-[2px] after:bg-blue-500 after:mt-1 after:w-[100%]"
//                 : "text-gray-700 hover:text-blue-500 text-text"
//             }`}
//           >
//             {tab}
//           </motion.button>
//         ))}
//       </div>
//       {activeTab === "Education" ? (
//         <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-[30px]">
//           {/* Education Section */}
//           <div className="w-full md:w-[50%]">
//             <h2 className="md:text-2xl text-lg md:text-4xl font-bold mb-2 md:mb-6">
//               Education
//             </h2>
//             <div className="space-y-4">
//               {portfolioData.educations.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-4 border rounded-lg bg-white dark:bg-gray-800 
//                      hover:shadow-2xl dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)] 
//                      transition-shadow"
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                 >
//                   <p className="font-semibold text-base md:text-lg">
//                     {edu.course}
//                   </p>
//                   <p className="text-gray-700 text-sm md:text-base dark:text-gray-300 py-2">
//                     {edu.college}
//                   </p>
//                   <p className="md:text-sm text-xs text-gray-500">
//                     {edu.year} {edu.percentage && "- " + edu.percentage}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : activeTab === "Skills" ? (
//         <div className="flex flex-wrap gap-4">
// {portfolioData.skills.flatMap(cat => cat.items).map(skill => (
//   <div
//     key={skill.name}
//     className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-sm hover:scale-110 transition"
//   >
//     <span style={{ color: skill.color }}>{skill.icon}</span>
//     <span className="text-sm font-medium">{skill.name}</span>
//   </div>
// ))}
// </div>

//       ) : (
//         <div className="w-full md:w-[50%]">
//           <h2 className="md:text-2xl text-lg sm:text-3xl md:text-4xl font-bold mb-2 md:mb-6">
//             Certifications
//           </h2>
//           <div className="space-y-4 relative">
//             {portfolioData.certifications.map((cert, index) => (
//               <motion.div
//                 key={index}
//                 className="p-4 border rounded-lg bg-white dark:bg-gray-800 
//                      hover:shadow-2xl dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)] 
//                      transition-shadow"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <p className="font-semibold text-base md:text-lg">{cert.courseName}</p>
//                 <p className="text-gray-700 dark:text-gray-300">
//                   {cert.platform}
//                 </p>
//                 <p className="text-sm text-gray-500">{cert.author}</p>
//                 <p className="text-sm text-gray-500">{cert.year}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
<div className="md:p-5 p-2">
  <h2 className="md:text-3xl text-xl font-bold mb-2 md:mb-6">
    About
  </h2>

  {/* Tabs */}
  <div className="flex flex-wrap justify-start gap-[30px] mb-2 md:mb-8">
    {(["Education", "Skills", "Certification"] as const).map((tab) => (
      <motion.button
        key={tab}
        onClick={() => setActiveTab(tab)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-0 py-2 text-sm sm:text-base font-medium transition-colors duration-300 inline-block ${
          activeTab === tab
            ? "text-blue-500 after:block after:h-[2px] after:bg-blue-500 after:mt-1 after:w-full"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
        }`}
      >
        {tab}
      </motion.button>
    ))}
  </div>

  {/* ===================================================== */}
  {/* EDUCATION */}
  {/* ===================================================== */}

  {activeTab === "Education" ? (
    <div className="w-full">
      <h2 className="md:text-2xl text-lg font-bold mb-4 md:mb-6">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.educations.map((edu, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg bg-white dark:bg-gray-800
              hover:shadow-2xl
              dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]
              transition-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-base md:text-lg">
              {edu.course}
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base py-2">
              {edu.college}
            </p>

            <p className="text-xs md:text-sm text-gray-500">
              {edu.year}
              {edu.percentage && ` - ${edu.percentage}`}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

  // ===================================================== */
  // SKILLS
  // ===================================================== */

  ) : activeTab === "Skills" ? (
    <div className="w-full">
      <h2 className="md:text-2xl text-lg font-bold mb-4 md:mb-6">
        Technical Skills
      </h2>

      <div className="space-y-7">
        {portfolioData.skills.map((category) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              {category.category}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{
                    scale: 1.06,
                    y: -2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                    bg-gray-100 dark:bg-gray-700
                    shadow-sm
                    hover:shadow-md
                    transition-shadow"
                >
                  <span
                    className="text-lg"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>

                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  // ===================================================== */
  // CERTIFICATION
  // ===================================================== */

  ) : (
    <div className="w-full">
      <h2 className="md:text-2xl text-lg font-bold mb-4 md:mb-6">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-lg bg-white dark:bg-gray-800
              hover:shadow-2xl
              dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)]
              transition-shadow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold text-base md:text-lg">
              {cert.courseName}
            </p>

            <p className="text-gray-700 dark:text-gray-300 py-2">
              {cert.platform}
            </p>

            <p className="text-sm text-gray-500">
              {cert.author}
            </p>

            <p className="text-sm text-gray-500">
              {cert.year}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )}
</div>
  );
};

export default About;
