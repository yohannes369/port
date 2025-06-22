import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiThreeDotJs, SiWebgl } from "react-icons/si";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Footer = () => {
  const threeContainer = useRef(null);

  useEffect(() => {
    if (!threeContainer.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 150);
    renderer.setClearColor(0x000000, 0);
    threeContainer.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create 3D text
    const createText = (text, yPos) => {
      const loader = new THREE.FontLoader();
      loader.load(
        "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          const geometry = new THREE.TextGeometry(text, {
            font: font,
            size: 0.5,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.01,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5,
          });

          const material = new THREE.MeshPhongMaterial({
            color: 0x4fd1c5,
            specular: 0x111111,
            shininess: 30,
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.x = -text.length * 0.25;
          mesh.position.y = yPos;
          scene.add(mesh);
        }
      );
    };

    createText("Yohannes", 1);
    createText("Yenakal", 0);
    createText("Web Developer", -1);

    // Add floating cubes
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.7,
    });

    for (let i = 0; i < 5; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.x = (Math.random() - 0.5) * 5;
      cube.position.y = (Math.random() - 0.5) * 3;
      cube.position.z = Math.random() * -5;
      scene.add(cube);
      cubes.push(cube);
    }

    camera.position.z = 5;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube, idx) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.y = Math.sin(Date.now() * 0.001 + idx) * 0.5;
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (threeContainer.current) {
        threeContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-4 border-t border-gray-800">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* 3D Animation Container */}
          <div
            ref={threeContainer}
            className="w-full h-40 mb-6 flex items-center justify-center"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 p-4 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-sm"
          >
            <p className="text-xl font-mono">
              <span className="text-cyan-400">{"<"}</span>
              <span className="text-purple-400">CreativeDeveloper</span>
              <span className="text-cyan-400">{">"}</span>
              <span className="mx-2">Yohannes Yenakal</span>
              <span className="text-cyan-400">{"</"}</span>
              <span className="text-purple-400">CreativeDeveloper</span>
              <span className="text-cyan-400">{">"}</span>
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="flex flex-col items-center"
            >
              <FaReact className="text-4xl text-cyan-400 mb-2" />
              <span className="text-xs">React</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -15 }}
              className="flex flex-col items-center"
            >
              <SiThreeDotJs className="text-4xl text-green-300 mb-2" />
              <span className="text-xs">Three.js</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="flex flex-col items-center"
            >
              <FaNodeJs className="text-4xl text-green-500 mb-2" />
              <span className="text-xs">Node.js</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -15 }}
              className="flex flex-col items-center"
            >
              <SiWebgl className="text-4xl text-yellow-400 mb-2" />
              <span className="text-xs">WebGL</span>
            </motion.div>
          </div>

          <motion.p
            className="flex items-center mb-4"
            whileHover={{ scale: 1.1 }}
          >
            Crafted with <FaHeart className="mx-2 text-red-500 animate-pulse" />{" "}
            by Yohannes Yenakal
          </motion.p>

          <motion.p
            className="text-sm opacity-80"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &copy; {new Date().getFullYear()} All Rights Reserved | 3D Web
            Experiences
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;