import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current,
        "user_id"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-green-500 pb-1">
            Get In Touch
          </h2>
          <p className="py-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Fill out the form below or 
            connect with me through my social media channels.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/2"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-6 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-white placeholder-gray-400"
                  required
                  placeholder=" YOHANNES"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-white placeholder-gray-400"
                  required
                  placeholder="yohannesyeneakal1@gmail"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-white placeholder-gray-400"
                  required
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-medium hover:from-emerald-500 hover:to-green-500 transition-all duration-300 text-white"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 h-full flex flex-col justify-center">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-green-400">Connect With Me</h3>
                <p className="text-gray-300 text-lg">
                  I'm actively seeking new opportunities and collaborations. Whether you have a
                  project idea, job offer, or just want to chat about tech, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-gray-200">Find me on:</h4>
                  <div className="flex space-x-6">
                    <motion.a
                      whileHover={{ y: -3, color: "#4ADE80" }}
                      href="https://www.linkedin.com/in/yohannes-yeneakal-a3b94034b/?originalSubdomain=et"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors text-3xl"
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3, color: "#4ADE80" }}
                      href="https://github.com/yohannes369"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors text-3xl"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -3, color: "#4ADE80" }}
                      href="mailto:yohannesyeneakal1@gmail.com"
                      className="text-gray-300 hover:text-green-400 transition-colors text-3xl"
                    >
                      <HiOutlineMail />
                    </motion.a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400">
                    Prefer email? Drop me a line at <br />
                    <a href="mailto:yohannesyeneakal1@gmail.com" className="text-green-400 hover:underline">
                      yohannesyeneakal1@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;