// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import joImage from "./jo.jpg";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// const Home = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       const windowHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;
//       const totalScroll = docHeight - windowHeight;
//       const progress = (scrollTop / totalScroll) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleDownloadResume = () => {
//     // Updated with your resume file path
//     const resumeUrl = "/resume/yohCv.pdf";
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Yohannes_Yeneakal_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-20 px-4 overflow-hidden relative"
//     >
//       {/* Vertical buttons on left side */}
//       <motion.div 
//         initial={{ opacity: 0, x: -40 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//         className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8"
//       >
//         {/* Parallelogram Button 1 */}
//         <motion.div
//           initial={{ skewX: -15, x: -20 }}
//           animate={{ skewX: -15, x: 0 }}
//           transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
//           whileHover={{ 
//             x: 10,
//             scale: 1.05,
//             boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
//           }}
//           className="relative"
//         >
//           <motion.a
//             whileTap={{ scale: 0.95 }}
//             href="#projects"
//             className="relative px-6 py-4 text-lg font-bold text-white border border-emerald-400 bg-transparent skew-x-12 transform-gpu"
//             style={{
//               clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
//               writingMode: 'vertical-rl'
//             }}
//           >
//             <motion.span 
//               className="transform rotate-180"
//               whileHover={{ color: "#4ade80" }}
//               transition={{ duration: 0.3 }}
//             >
//               Explore Work
//             </motion.span>
//           </motion.a>
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 1.6 }}
//             className="absolute -bottom-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
//           />
//         </motion.div>

//         {/* Parallelogram Button 2 */}
//         <motion.div
//           initial={{ skewX: -15, x: -20 }}
//           animate={{ skewX: -15, x: 0 }}
//           transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
//           whileHover={{ 
//             x: 10,
//             scale: 1.05,
//             boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
//           }}
//           className="relative"
//         >
//           <motion.a
//             whileTap={{ scale: 0.95 }}
//             href="#contact"
//             className="relative px-6 py-4 text-lg font-bold text-white border border-emerald-400 bg-transparent skew-x-12 transform-gpu"
//             style={{
//               clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
//               writingMode: 'vertical-rl'
//             }}
//           >
//             <motion.span 
//               className="transform rotate-180"
//               whileHover={{ color: "#4ade80" }}
//               transition={{ duration: 0.3 }}
//             >
//               Connect Now
//             </motion.span>
//           </motion.a>
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 1.7 }}
//             className="absolute -bottom-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Main content container */}
//       <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pt-32 pb-16">
//         {/* Profile Image Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex-1 flex justify-center order-1"
//         >
//           <div className="relative group border-4 border-emerald-400/50 rounded-2xl p-4 shadow-2xl">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg transition-all duration-500"
//             >
//               <motion.img
//                 initial={{ scale: 1.1 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 src={joImage}
//                 alt="Professional Headshot"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//             <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg" />
//             <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg" />
//             <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg" />
//             <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg" />
//           </div>
//         </motion.div>

//         {/* Text Content Section */}
//         <div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2 lg:ml-8">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
//           >
//             Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-500">Yohannes Yeneakal</span>
//           </motion.h1>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 h-14"
//           >
//             <TypeAnimation
//               sequence={[
//                 "Full Stack Developer",
//                 2000,
//                 "React Specialist",
//                 2000,
//                 "UI/UX Designer",
//                 2000,
//                 "Problem Solver",
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="text-gray-300"
//             />
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//             className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed"
//           >
//             I create exceptional digital experiences with cutting-edge web technologies, 
//             focusing on responsive, performant, and accessible applications.
//           </motion.p>
//         </div>
//       </div>

//       {/* Horizontal decorative line */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, margin: "-20%" }}
//         transition={{ duration: 1.5 }}
//         className="max-w-8xl mx-auto flex justify-center mt-60 mb-4 relative"
//       >
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "80%" }}
//           viewport={{ once: true, margin: "-20%" }}
//           transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
//           className="relative"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, type: "spring" }}
//             className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-emerald-400 rounded-full"
//           />
//           <motion.div
//             whileInView={{ opacity: [0.3, 1, 0.8, 1] }}
//             viewport={{ once: true }}
//             transition={{ duration: 2, delay: 0.7 }}
//             className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.6)]"
//           />
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.5, type: "spring" }}
//             className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-emerald-400 rounded-full"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Download CV Button - Right side above scroll indicator */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.8 }}
//         className="fixed right-8 bottom-32 z-20"
//       >
//         <motion.div
//           whileHover={{ 
//             scale: 1.05,
//             boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
//           }}
//           className="relative"
//         >
//           <motion.button
//             onClick={handleDownloadResume}
//             whileTap={{ scale: 0.95 }}
//             className="relative px-3 py-4 text-sm font-bold text-white border border-emerald-400 bg-transparent cursor-pointer"
//           >
//             <div className="flex flex-col items-center justify-center h-full space-y-0.5">
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 D
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 O
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 W
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 N
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 L
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 O
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 A
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 D
//               </motion.span>
//               <motion.span 
//                 className="block text-xs mt-2"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 C
//               </motion.span>
//               <motion.span 
//                 className="block text-xs"
//                 whileHover={{ color: "#4ade80" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 V
//               </motion.span>
//             </div>
//             <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-emerald-400 rounded-full" />
//           </motion.button>
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 1.7 }}
//             className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Scroll Progress Circle in Bottom Right Corner */}
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.8 }}
//         className="fixed bottom-8 right-8 z-20 w-16 h-16 flex items-center justify-center"
//       >
//         <svg className="w-full h-full" viewBox="0 0 36 36">
//           {/* Background circle */}
//           <path
//             d="M18 2.0845
//               a 15.9155 15.9155 0 0 1 0 31.831
//               a 15.9155 15.9155 0 0 1 0 -31.831"
//             fill="none"
//             stroke="#374151"
//             strokeWidth="2"
//           />
//           {/* Progress circle - color changes based on percentage */}
//           <path
//             d="M18 2.0845
//               a 15.9155 15.9155 0 0 1 0 31.831
//               a 15.9155 15.9155 0 0 1 0 -31.831"
//             fill="none"
//             stroke={scrollProgress > 90 ? "#10B981" : "#D1D5DB"}
//             strokeWidth="2"
//             strokeDasharray={`${scrollProgress}, 100`}
//             strokeLinecap="round"
//             style={{ transition: "stroke-dasharray 0.3s ease-out, stroke 0.5s ease" }}
//           />
//         </svg>
//         <motion.span 
//           className="absolute text-sm font-medium"
//           style={{
//             color: scrollProgress > 90 ? "#10B981" : "#D1D5DB",
//             transition: "color 0.5s ease"
//           }}
//         >
//           {Math.round(scrollProgress)}%
//         </motion.span>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import joImage from "./jo.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "/resume/yohCv.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Yohannes_Yeneakal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white pt-20 px-4 overflow-hidden relative"
    >
      {/* Vertical buttons on left side - UNCHANGED */}
      <motion.div 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8"
      >
        {/* Parallelogram Button 1 - UNCHANGED */}
        <motion.div
          initial={{ skewX: -15, x: -20 }}
          animate={{ skewX: -15, x: 0 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
          whileHover={{ 
            x: 10,
            scale: 1.05,
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
          }}
          className="relative"
        >
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="relative px-6 py-4 text-lg font-bold text-white border border-emerald-400 bg-transparent skew-x-12 transform-gpu"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
              writingMode: 'vertical-rl'
            }}
          >
            <motion.span 
              className="transform rotate-180"
              whileHover={{ color: "#4ade80" }}
              transition={{ duration: 0.3 }}
            >
              Explore Work
            </motion.span>
          </motion.a>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute -bottom-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
          />
        </motion.div>

        {/* Parallelogram Button 2 - UNCHANGED */}
        <motion.div
          initial={{ skewX: -15, x: -20 }}
          animate={{ skewX: -15, x: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
          whileHover={{ 
            x: 10,
            scale: 1.05,
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
          }}
          className="relative"
        >
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="relative px-6 py-4 text-lg font-bold text-white border border-emerald-400 bg-transparent skew-x-12 transform-gpu"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
              writingMode: 'vertical-rl'
            }}
          >
            <motion.span 
              className="transform rotate-180"
              whileHover={{ color: "#4ade80" }}
              transition={{ duration: 0.3 }}
            >
              Connect Now
            </motion.span>
          </motion.a>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute -bottom-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Main content container */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 pt-32 pb-16">
        {/* Profile Image Section - UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center order-1"
        >
          <div className="relative group border-4 border-emerald-400/50 rounded-2xl p-4 shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg transition-all duration-500"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src={joImage}
                alt="Professional Headshot"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-emerald-400 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Text Content Section - IMPROVED */}
{/* Text Content Section - LUXURY STRUCTURE */}
<div className="flex-1 flex flex-col justify-center text-center lg:text-left order-2 lg:ml-8">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mb-6"
  >
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-400 mb-1 leading-tight font-serif">
      Greetings, I am
    </h1>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent tracking-tight font-sans">
      Yohannes Yeneakal
    </h1>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.8 }}
    className="mb-8"
  >
    <div className="h-14 flex items-center justify-center lg:justify-start">
      <TypeAnimation
        sequence={[
          "Full-Stack Developer",
          1500,
          "React & React Native Specialist",
          1500,
          "Modern Web Architect",
          1500,
          "UI/UX Craftsman",
          1500,
          "Performance Optimizer",
          1500
        ]}
        wrapper="span"
        speed={25}
        deletionSpeed={40}
        style={{
          display: 'inline-block',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '1.25rem',
          letterSpacing: '-0.5px'
        }}
        repeat={Infinity}
        className="text-emerald-300"
      />
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="max-w-xl mx-auto lg:mx-0"
  >
    <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4 font-sans">
      With <span className="text-emerald-300 font-medium">2+ years</span> of focused experience, I develope 
      <span className="text-emerald-300 font-medium"> secure</span>, 
      <span className="text-emerald-300 font-medium"> scalable</span>, and 
      <span className="text-emerald-300 font-medium"> high-performance</span> web applications using cutting-edge technologies.
    </p>
    <p className="text-base md:text-lg text-gray-400 leading-relaxed font-sans">
      Specializing in the <span className="text-emerald-300 font-medium">React ecosystem</span>, I deliver pixel-perfect interfaces 
      with robust backend architectures, following industry best practices for 
      <span className="text-emerald-300 font-medium"> security</span> and 
      <span className="text-emerald-300 font-medium"> maintainability</span>.
    </p>
  </motion.div>
</div>
      </div>

      {/* Horizontal decorative line - UNCHANGED */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.5 }}
        className="max-w-8xl mx-auto flex justify-center mt-60 mb-4 relative"
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

      {/* Download CV Button - Right side above scroll indicator - UNCHANGED */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="fixed right-8 bottom-32 z-20"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(74, 222, 128, 0.6)"
          }}
          className="relative"
        >
          <motion.button
            onClick={handleDownloadResume}
            whileTap={{ scale: 0.95 }}
            className="relative px-3 py-4 text-sm font-bold text-white border border-emerald-400 bg-transparent cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-0.5">
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                D
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                O
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                W
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                N
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                L
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                O
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                A
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                D
              </motion.span>
              <motion.span 
                className="block text-xs mt-2"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                C
              </motion.span>
              <motion.span 
                className="block text-xs"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.3 }}
              >
                V
              </motion.span>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-emerald-400 rounded-full" />
          </motion.button>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Progress Circle in Bottom Right Corner - UNCHANGED */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="fixed bottom-8 right-8 z-20 w-16 h-16 flex items-center justify-center"
      >
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke={scrollProgress > 90 ? "#10B981" : "#D1D5DB"}
            strokeWidth="2"
            strokeDasharray={`${scrollProgress}, 100`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.3s ease-out, stroke 0.5s ease" }}
          />
        </svg>
        <motion.span 
          className="absolute text-sm font-medium"
          style={{
            color: scrollProgress > 90 ? "#10B981" : "#D1D5DB",
            transition: "color 0.5s ease"
          }}
        >
          {Math.round(scrollProgress)}%
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Home;