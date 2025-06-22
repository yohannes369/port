// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { id: 1, name: "Home", to: "home" },
//     { id: 2, name: "About", to: "about" },
//     { id: 3, name: "Experience", to: "experience" },
//     { id: 4, name: "Projects", to: "projects" },
//     { id: 5, name: "Contact", to: "contact" },
//   ];

//   return (
//     <div className={`fixed w-full h-20 flex justify-between items-center px-4 z-50 ${
//       scrolled ? "bg-gray-900/90 backdrop-blur-sm" : "bg-gray-900/80"
//     } transition-all duration-300`}>
//       <Link
//         to="home"
//         smooth={true}
//         duration={500}
//         className="flex items-center cursor-pointer"
//       >
//         <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//           Portfolio
//         </span>
//       </Link>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex items-center space-x-8">
//         {links.map(({ id, name, to }) => (
//           <li key={id}>
//             <Link
//               to={to}
//               smooth={true}
//               duration={500}
//               offset={-80}
//               className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium text-lg"
//             >
//               {name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Button */}
//       <div onClick={() => setNav(!nav)} className="md:hidden z-10 text-gray-300 hover:text-white cursor-pointer">
//         {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </div>

//       {/* Mobile Menu */}
//       <ul className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm flex flex-col justify-center items-center transition-all duration-300 ${nav ? 'translate-y-0' : '-translate-y-full'}`}>
//         {links.map(({ id, name, to }) => (
//           <li key={id} className="py-6 text-2xl">
//             <Link
//               to={to}
//               smooth={true}
//               duration={500}
//               offset={-80}
//               onClick={() => setNav(false)}
//               className="text-gray-300 hover:text-white transition-colors"
//             >
//               {name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navRef = useRef(null);

  const links = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Experience", to: "experience" },
    { id: 4, name: "Projects", to: "projects" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Highlight active section
      const scrollPosition = window.scrollY + 100;
      
      links.forEach(({ to }) => {
        const section = document.getElementById(to);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(to);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={navRef}
      className={`fixed w-full h-20 flex justify-between items-center px-4 z-50 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-gray-900/90 backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="flex items-center cursor-pointer"
      >
        <motion.span 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.span>
      </Link>

      {/* Desktop Navigation */}
      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex items-center space-x-6"
      >
        {links.map(({ id, name, to }) => (
          <motion.li 
            key={id}
            variants={itemVariants}
            className="relative"
          >
            <Link
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onSetActive={() => setActiveLink(to)}
              className={`px-3 py-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium relative group ${
                activeLink === to ? "text-white" : ""
              }`}
            >
              {name}
              <motion.span 
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 ${
                  activeLink === to ? "w-full" : "w-0 group-hover:w-full"
                } transition-all duration-300`}
                layoutId="underline"
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Mobile Navigation Button */}
      <motion.div 
        onClick={() => setNav(!nav)} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden z-50 text-gray-300 hover:text-white cursor-pointer p-2"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.ul 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-lg flex flex-col justify-center items-center z-40"
          >
            {links.map(({ id, name, to }) => (
              <motion.li 
                key={id} 
                className="py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setNav(false)}
                  className={`text-2xl px-6 py-3 rounded-lg ${
                    activeLink === to 
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                      : "text-gray-300 hover:text-white"
                  } transition-all`}
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;