// import React from "react";
// import { motion } from "framer-motion";
// import { FiGithub, FiExternalLink } from "react-icons/fi";

// // Import images directly from the same directory
// import image1 from "./i.jpg";
// import image2 from "./p.jpg";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with payment integration, admin dashboard, and product management system.",
//       tech: ["React", "Node.js", "MongoDB", "Stripe API"],
//       image: image1,
//       github: "https://github.com/yourusername/ecommerce",
//       live: "https://yourapp.com",
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "Real-time collaborative task manager with drag-and-drop functionality and team permissions.",
//       tech: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
//       image: image2,
//       github: "https://github.com/yourusername/task-manager",
//       live: "https://tasks.yourdomain.com",
//     },
//     {
//       id: 3,
//       title: "AI Content Generator",
//       description: "AI-powered content creation tool with GPT-3.5 integration for blog posts and social media content.",
//       tech: ["TypeScript", "OpenAI API", "Express", "PostgreSQL"],
//       image: image1,
//       github: "https://github.com/yourusername/ai-writer",
//       live: "https://ai.yourdomain.com",
//     },
//   ];

//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const hoverEffect = {
//     scale: 1.02,
//     transition: { duration: 0.3 }
//   };

//   const tapEffect = {
//     scale: 0.98
//   };

//   return (
//     <section
//       id="projects"
//       className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             className="text-4xl font-bold inline border-b-4 border-green-500 pb-1"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             My Projects
//           </motion.h2>
//           <motion.p 
//             className="py-6 text-lg text-gray-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             Here are some of my featured works
//           </motion.p>
//         </motion.div>

//         <motion.div 
//           className="space-y-28"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               variants={item}
//               whileHover={hoverEffect}
//               whileTap={tapEffect}
//               className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center justify-between`}
//             >
//               {/* Enhanced Project Image Container */}
//               <motion.div 
//                 className="w-full md:w-1/2 relative group"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true }}
//               >
//                 {/* Glowing Border Effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl opacity-75 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-sm"></div>
                
//                 {/* Thin Green Border */}
//                 <div className="absolute inset-0 border-2 border-green-500/30 rounded-xl group-hover:border-green-400 transition-all duration-500 -z-10"></div>
                
//                 {/* Main Image Container */}
//                 <div className="relative rounded-xl overflow-hidden h-full">
//                   <motion.img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-auto rounded-xl shadow-xl object-cover aspect-video"
//                     whileHover={{ scale: 1.03 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                     style={{
//                       maxHeight: "400px",
//                       objectFit: "cover",
//                       objectPosition: "top center"
//                     }}
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
//                   {/* Project Title on Image */}
//                   <motion.h3 
//                     className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     {project.title}
//                   </motion.h3>
//                 </div>
//               </motion.div>

//               {/* Enhanced Project Content */}
//               <motion.div 
//                 className="w-full md:w-1/2 space-y-6"
//                 initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.h3 
//                   className="text-2xl font-bold text-green-400 md:hidden"
//                   whileHover={{ x: 5 }}
//                 >
//                   {project.title}
//                 </motion.h3>
                
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 {/* Tech Stack with Glowing Effect */}
//                 <div className="flex flex-wrap gap-3 py-2">
//                   {project.tech.map((tech) => (
//                     <motion.span 
//                       key={tech} 
//                       className="px-4 py-1.5 bg-gray-800 rounded-full text-sm text-green-300 relative overflow-hidden"
//                       whileHover={{ 
//                         scale: 1.05,
//                         boxShadow: "0 0 8px rgba(74, 222, 128, 0.6)"
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       {/* Glowing background effect */}
//                       <span className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
//                       {tech}
//                     </motion.span>
//                   ))}
//                 </div>

//                 {/* Enhanced Action Buttons */}
//                 <div className="flex gap-6 pt-4">
//                   <motion.a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors group"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <div className="relative">
//                       <FiGithub size={22} className="group-hover:text-green-400 transition-colors" />
//                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
//                     </div>
//                     <span className="font-medium">View Code</span>
//                   </motion.a>
                  
//                   <motion.a
//                     href={project.live}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors group"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <div className="relative">
//                       <FiExternalLink size={22} className="group-hover:text-green-400 transition-colors" />
//                       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
//                     </div>
//                     <span className="font-medium">Live Demo</span>
//                   </motion.a>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// Import images directly from the same directory
import image1 from "./i.jpg";
import image2 from "./p.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and product management system.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: image1,
      github: "https://github.com/yourusername/ecommerce",
      live: "https://yourapp.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task manager with drag-and-drop functionality and team permissions.",
      tech: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
      image: image2,
      github: "https://github.com/yourusername/task-manager",
      live: "https://tasks.yourdomain.com",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "AI-powered content creation tool with GPT-3.5 integration for blog posts and social media content.",
      tech: ["TypeScript", "OpenAI API", "Express", "PostgreSQL"],
      image: image1,
      github: "https://github.com/yourusername/ai-writer",
      live: "https://ai.yourdomain.com",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.3 }
  };

  const tapEffect = {
    scale: 0.98
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold inline border-b-4 border-green-500 pb-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="py-6 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Here are some of my featured works
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-28"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={hoverEffect}
              whileTap={tapEffect}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center justify-between`}
            >
              {/* Enhanced Project Image Container */}
              <motion.div 
                className="w-full md:w-1/2 relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Clean Green Border */}
                <div className="absolute inset-0 border-2 border-green-500 rounded-xl transition-all duration-300 group-hover:border-green-400 -z-10"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-xl overflow-hidden h-full">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video filter group-hover:brightness-110 transition-all duration-500"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{
                      maxHeight: "400px",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  {/* Project Title on Image */}
                  <motion.h3 
                    className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </motion.div>

              {/* Enhanced Project Content */}
              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-green-400 md:hidden"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 py-2">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="px-4 py-1.5 bg-gray-800 rounded-full text-sm text-green-300 border border-green-500/30"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(74, 222, 128, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-all group border border-gray-700 hover:border-green-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub size={20} className="group-hover:text-green-400 transition-colors" />
                    <span className="font-medium">View Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600/10 rounded-lg text-green-400 hover:text-white hover:bg-green-600/30 transition-all group border border-green-600/30 hover:border-green-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink size={20} className="group-hover:text-white transition-colors" />
                    <span className="font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;