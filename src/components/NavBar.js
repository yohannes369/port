// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");
//   const navRef = useRef(null);

//   const links = [
//     { id: 1, name: "Home", to: "home" },
//     { id: 2, name: "About", to: "about" },
//     { id: 3, name: "Experience", to: "experience" },
//     { id: 4, name: "Projects", to: "projects" },
//     { id: 5, name: "Contact", to: "contact" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   const mobileMenuVariants = {
//     hidden: { 
//       y: "-100vh",
//       opacity: 0
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 100
//       }
//     },
//     exit: {
//       y: "-100vh",
//       opacity: 0,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
      
//       // Highlight active section
//       const scrollPosition = window.scrollY + 100;
      
//       links.forEach(({ to }) => {
//         const section = document.getElementById(to);
//         if (section) {
//           const sectionTop = section.offsetTop;
//           const sectionHeight = section.offsetHeight;
          
//           if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             setActiveLink(to);
//           }
//         }
//       });
//     };
    
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Custom scroll function that prevents URL changes
//   const handleScrollClick = (to) => {
//     const element = document.getElementById(to);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//       setActiveLink(to);
//       setNav(false); // For mobile menu
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 100 }}
//       ref={navRef}
//       className={`fixed w-full h-20 flex justify-between items-center px-4 z-50 ${
//         scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-gray-900/90 backdrop-blur-sm"
//       } transition-all duration-300`}
//     >
//       <div 
//         onClick={() => handleScrollClick('home')}
//         className="flex flex-col items-center cursor-pointer"
//       >
//         <motion.div 
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex flex-col items-center"
//         >
//           <img 
//             src="/log.jpg" 
//             alt="Yohannes Yeneakla Logo" 
//             className="w-12 h-12 object-contain rounded-full bg-white p-1"
//           />
//           <span className="text-sm font-semibold text-white mt-1">
//             Yohannes Yeneakal
//           </span>
//         </motion.div>
//       </div>

//       {/* Desktop Navigation */}
//       <motion.ul 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="hidden md:flex items-center space-x-6"
//       >
//         {links.map(({ id, name, to }) => (
//           <motion.li 
//             key={id}
//             variants={itemVariants}
//             className="relative"
//           >
//             <div
//               onClick={() => handleScrollClick(to)}
//               className={`px-3 py-2 text-gray-300 hover:text-white transition-colors cursor-pointer font-medium relative group ${
//                 activeLink === to ? "text-white" : ""
//               }`}
//             >
//               {name}
//               <motion.span 
//                 className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 ${
//                   activeLink === to ? "w-full" : "w-0 group-hover:w-full"
//                 } transition-all duration-300`}
//                 layoutId="underline"
//               />
//             </div>
//           </motion.li>
//         ))}
//       </motion.ul>

//       {/* Mobile Navigation Button */}
//       <motion.div 
//         onClick={() => setNav(!nav)} 
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="md:hidden z-50 text-gray-300 hover:text-white cursor-pointer p-2"
//       >
//         {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </motion.div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {nav && (
//           <motion.ul 
//             variants={mobileMenuVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-lg flex flex-col justify-center items-center z-40"
//           >
//             {links.map(({ id, name, to }) => (
//               <motion.li 
//                 key={id} 
//                 className="py-4 text-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <div
//                   onClick={() => handleScrollClick(to)}
//                   className={`px-6 py-3 text-2xl text-gray-300 hover:text-white cursor-pointer font-medium relative group ${
//                     activeLink === to ? "text-white" : ""
//                   }`}
//                 >
//                   {name}
//                   <motion.span 
//                     className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 ${
//                       activeLink === to ? "w-4/5" : "w-0 group-hover:w-4/5"
//                     } transition-all duration-300`}
//                   />
//                 </div>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Responsive Navbar that transforms into a slide-in **side-drawer** on mobile.
 *
 * ‣ Locks body scroll while the drawer is open.
 * ‣ Uses Framer-Motion for buttery transitions.
 * ‣ Keeps all previous desktop behaviour / active-link highlighting.
 */
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navRef = useRef(null);

  /* ──────────────────────────────
   * Links
   * ────────────────────────────── */
  const links = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Experience", to: "experience" },
    { id: 4, name: "Projects", to: "projects" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  /* ──────────────────────────────
   * Motion variants
   * ────────────────────────────── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const sideVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
    exit: { x: "100%", transition: { duration: 0.25 } },
  };

  /* ──────────────────────────────
   * Scroll / active-link logic
   * ────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + 120; // adjust for header height
      links.forEach(({ to }) => {
        const section = document.getElementById(to);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) setActiveLink(to);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ──────────────────────────────
   * Lock body scroll while drawer is open
   * ────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [navOpen]);

  /* ──────────────────────────────
   * Smooth-scroll helper
   * ────────────────────────────── */
  const scrollTo = (to) => {
    const el = document.getElementById(to);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(to);
    setNavOpen(false);
  };

  /* ──────────────────────────────
   * Render
   * ────────────────────────────── */
  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      {/* Logo */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollTo("home")}
        className="flex flex-col items-center cursor-pointer"
      >
        <img
          src="/log.jpg"
          alt="Yohannes Yeneakal Logo"
          className="w-12 h-12 object-contain rounded-full bg-white p-1"
        />
        <span className="text-sm font-semibold text-white mt-1 select-none">
          Yohannes Yeneakal
        </span>
      </motion.button>

      {/* Desktop nav */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex items-center space-x-6"
      >
        {links.map(({ id, name, to }) => (
          <motion.li key={id} variants={itemVariants} className="relative">
            <button
              onClick={() => scrollTo(to)}
              className={`px-3 py-2 font-medium transition-colors relative group ${
                activeLink === to ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {name}
              {/* animated underline */}
              <motion.span
                layoutId="underline"
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-500 ${
                  activeLink === to ? "w-full" : "w-0 group-hover:w-full"
                } transition-all duration-300`}
              />
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* Burger */}
      <motion.button
        onClick={() => setNavOpen(!navOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden z-50 text-gray-300 hover:text-white p-2"
        aria-label="Toggle navigation"
      >
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </motion.button>

      {/* Mobile overlay + side-drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 flex z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <div
              className="flex-1 backdrop-blur-sm bg-black/40"
              onClick={() => setNavOpen(false)}
            />

            {/* Side-drawer */}
            <motion.nav
              className="h-full w-3/4 max-w-xs bg-gray-900/95 backdrop-blur-lg p-8 flex flex-col"
              variants={sideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="space-y-6 mt-8">
                {links.map(({ id, name, to }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(to)}
                      className={`w-full text-left text-lg font-medium ${
                        activeLink === to
                          ? "text-emerald-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
