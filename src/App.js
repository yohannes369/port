import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
          <div className="flex flex-col items-center">
            <div className="flex space-x-2 sm:space-x-4">
              {"LOADING".split("").map((letter, index) => (
                <span
                  key={index}
                  className="text-green-400 text-xl sm:text-2xl md:text-3xl font-bold animate-wave"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    display: 'inline-block',
                  }}
                >
                  {letter}
                </span>
              ))}
              {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                <span
                  key={`dot-${index}`}
                  className="text-green-400 text-xl sm:text-2xl md:text-3xl font-bold animate-wave"
                  style={{ animationDelay: `${(index + 7) * 0.2}s`, display: 'inline-block' }}
                >
                  .
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

// Add this CSS in your global stylesheet (e.g., index.css)
const styles = `
@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-wave {
  animation: wave 1s ease-in-out infinite;
}

/* Smooth transition for loading screen */
.fixed.inset-0 {
  transition: opacity 0.5s ease-in-out;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .space-x-2 {
    gap: 0.25rem;
  }
  .text-xl {
    font-size: 1rem;
  }
}
`;

export default App;