
import React from 'react';
import { HeroSection } from './components/hero-section';
import Footer from './components/footer';
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  console.log('App component is loading...');
  
  React.useEffect(() => {
    console.log('App component mounted successfully');
  }, []);

  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="relative bg-background transition-colors duration-200 min-h-screen">
          <HeroSection />
          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;