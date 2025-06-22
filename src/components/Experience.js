import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

const Experience = () => {
  const techs = [
    { 
      id: 1, 
      title: "HTML", 
      icon: <FaHtml5 size={50} />, 
      style: "shadow-orange-500",
      description: "Expert in crafting semantic, accessible, and SEO-friendly web structures."
    },
    { 
      id: 2, 
      title: "CSS", 
      icon: <FaCss3Alt size={50} />, 
      style: "shadow-blue-500",
      description: "Skilled in creating responsive, visually appealing designs with modern CSS techniques."
    },
    { 
      id: 3, 
      title: "JavaScript", 
      icon: <FaJs size={50} />, 
      style: "shadow-yellow-500",
      description: "Proficient in building dynamic, interactive web applications with vanilla JS and ES6+."
    },
    { 
      id: 4, 
      title: "React", 
      icon: <FaReact size={50} />, 
      style: "shadow-green-400",
      description: "Experienced in developing scalable, component-based user interfaces with React."
    },
    { 
      id: 5, 
      title: "Node.js", 
      icon: <FaNodeJs size={50} />, 
      style: "shadow-green-500",
      description: "Adept at building robust server-side applications and APIs using Node.js."
    },
    { 
      id: 6, 
      title: "Tailwind", 
      icon: <SiTailwindcss size={50} />, 
      style: "shadow-green-300",
      description: "Fluent in utilizing Tailwind CSS for rapid, utility-first styling."
    },
    { 
      id: 7, 
      title: "GraphQL", 
      icon: <SiGraphql size={50} />, 
      style: "shadow-pink-500",
      description: "Knowledgeable in designing and consuming efficient GraphQL APIs."
    },
    { 
      id: 8, 
      title: "MongoDB", 
      icon: <SiMongodb size={50} />, 
      style: "shadow-green-400",
      description: "Experienced in managing and querying NoSQL databases with MongoDB."
    },
    { 
      id: 9, 
      title: "Git", 
      icon: <FaGitAlt size={50} />, 
      style: "shadow-orange-600",
      description: "Proficient in version control and collaborative workflows using Git."
    },
  ];

  return (
    <section
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-green-500 pb-1">
            Experience
          </h2>
          <p className="py-6 text-lg text-gray-300">
            These are the technologies I've worked with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {techs.map(({ id, title, icon, style, description }) => (
            <motion.div
              key={id}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)"
              }}
              className={`shadow-md hover:shadow-lg rounded-lg py-6 ${style} transition-all duration-300 border border-gray-700 hover:border-green-400`}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl mb-4">{icon}</div>
                <p className="text-xl font-semibold">{title}</p>
                <p className="text-base text-gray-300 mt-2 px-4">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;