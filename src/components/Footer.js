import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Footer = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(ww, wh);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.OrthographicCamera(ww/-2, ww/2, wh/2, wh/-2, 0, 1000);
    camera.position.set(0, 0, 500);
    cameraRef.current = camera;
    scene.add(camera);

    // Particles container
    const particles = new THREE.Group();
    particlesRef.current = particles;
    scene.add(particles);

    // Mouse position
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX - (ww/2);
      mouse.y = (wh/2) - e.clientY;
    };

    // Handle window resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      cameraRef.current.left = -newWidth / 2;
      cameraRef.current.right = newWidth / 2;
      cameraRef.current.top = newHeight / 2;
      cameraRef.current.bottom = -newHeight / 2;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(newWidth, newHeight);
    };

    // Create particle
    const createParticle = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([mouse.x, mouse.y, -10]);
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      
      const material = new THREE.PointsMaterial({
        color: 0x4ade80, // Tailwind green-400
        size: 3,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: false
      });

      const particle = new THREE.Points(geometry, material);
      particle.speed = Math.random() / 100 + 0.002;
      particle.direction = {
        x: (Math.random() - 0.5) * ww * 2,
        y: (Math.random() - 0.5) * wh * 2
      };

      particles.add(particle);
    };

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      createParticle();

      const particles = particlesRef.current;
      if (!particles) return;

      for (let i = particles.children.length - 1; i >= 0; i--) {
        const particle = particles.children[i];
        const positions = particle.geometry.attributes.position.array;

        positions[0] += (particle.direction.x - positions[0]) * particle.speed;
        positions[1] += (particle.direction.y - positions[1]) * particle.speed;
        particle.material.opacity -= 0.005;
        particle.geometry.attributes.position.needsUpdate = true;

        if (particle.material.opacity < 0.05) {
          particles.remove(particle);
        }
      }

      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', (e) => {
      handleMouseMove(e.touches[0]);
    });
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden h-48">
      {/* Particle canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
      />
      
      {/* Footer content */}
      <div className="container mx-auto px-4 py-8 relative z-10 h-full flex flex-col justify-center items-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((link, index) => (
            <a
              key={index}
              href={`/${link.toLowerCase().replace(' ', '-')}`}
              className="text-green-400 hover:text-green-300 transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;