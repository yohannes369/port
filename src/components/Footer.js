
import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 px-4 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="flex items-center mb-4">
            Made with <FaHeart className="mx-2 text-red-500" /> by John Doe
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;