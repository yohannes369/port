

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const TechButton = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative h-32 w-full sm:w-32 flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-colors overflow-hidden"
    >
      {/* Background rectangle (hidden by default) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 124 124"
      >
        <rect
          x="2"
          y="2"
          width="120"
          height="120"
          rx="16"
          strokeWidth="2"
          className="stroke-green-500 fill-transparent transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"
        />
      </svg>
      
      {/* Foreground animated rectangle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none transform -rotate-270 origin-center"
        viewBox="0 0 124 124"
      >
        <rect
          x="2"
          y="2"
          width="120"
          height="120"
          rx="16"
          strokeWidth="2"
          strokeDasharray="480"
          strokeDashoffset="480"
          className="stroke-green-300 fill-transparent transition-all duration-800 ease-in-out group-hover:stroke-dashoffset-0 group-hover:rotate-0"
        />
      </svg>
      
      {/* Content */}
      <div className="z-10 text-green-400 group-hover:text-green-300 transition-colors mb-2">
        {icon}
      </div>
      <span className="z-10 text-gray-300 text-lg font-medium">{name}</span>
    </motion.div>
  );
};

const About = () => {
  const technologies = [
    { icon: <FaReact size={48} />, name: "React" },
    { icon: <SiTypescript size={48} />, name: "TypeScript" },
    { icon: <SiNextdotjs size={48} />, name: "Next.js" },
    { icon: <FaNodeJs size={48} />, name: "Node.js" },
    { icon: <SiTailwindcss size={48} />, name: "Tailwind CSS" },
    { icon: <FaDatabase size={48} />, name: "Databases" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold inline border-b-4 border-green-500 pb-2">
            About
          </h2>
          <p className="py-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 relative">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-3xl font-semibold mb-8">Who I Am</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with 2+ years of experience
              building web applications. I specialize in JavaScript technologies
              across the whole stack (React.js, Node.js, Express, MongoDB).
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              My journey in web development started when I was studying Computer
              Science. Since then, I've worked with startups and established
              companies to build scalable, performant, and user-friendly
              applications.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
            I can build high-performance and scalable websites. I am also open to volunteering and collaborating on projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-3xl font-semibold mb-8">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <TechButton key={index} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Horizontal decorative line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5 }}
          className="max-w-8xl mx-auto flex justify-center mt-20 mb-4 relative"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-emerald-400 rounded-full"
            />
            <motion.div
              whileInView={{ opacity: [0.3, 1, 0.8, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.7 }}
              className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.6)]"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-emerald-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;