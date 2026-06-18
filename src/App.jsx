
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from "./components/Skills";
import Achievement from './components/Achievement'
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
   const [loading, setLoading] = useState(true);

      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
      }, []);

      if (loading) {
        return <Loader />;
      }

  return (
    <div>
      <ScrollProgress />

      <Navbar />
      <Hero />
      <Skills />
      {/* <Achievement /> */}
      <Projects />
      
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;


