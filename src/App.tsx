import { useEffect } from 'react';
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Section from "./Components/Section";
import ScrollReveal from "./Components/ScrollReveal";

const App = () => {
  // Optional: Add scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      // Update scroll progress bar if you add one
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (  
    <>
      {/* Optional: Scroll Progress Bar */}
      <div 
        id="scroll-progress" 
        className="fixed top-0 left-0 w-0 h-1 bg-black z-50 transition-all duration-300"
        style={{ width: '0%' }}
      ></div>
      
      <div className="overflow-x-hidden">
        <ScrollReveal>
          <Home />
        </ScrollReveal>
        
        <ScrollReveal>
          <About />
        </ScrollReveal>
        
        <ScrollReveal>
          <Section />
        </ScrollReveal>
        
        <Footer />
      </div>
    </>
  );
}

export default App;