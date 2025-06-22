


// import React from "react";
// import Navbar from "./components/NavBar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Projects from "./components/Project";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-900">
//       <Navbar />
//       <main className="flex-grow">
//         <Home />
//         <About />
//         <Experience />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;