
import React from 'react';
import { HeroSection } from './components/hero-section';
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  console.log('App component is loading...');
  
  React.useEffect(() => {
    console.log('App component mounted successfully');
  }, []);

  return (
    <TooltipProvider>
      <div className="relative bg-white">
        <HeroSection />
      </div>
    </TooltipProvider>
  );
}

export default App;