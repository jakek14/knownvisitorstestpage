
import { TooltipProvider } from "@/components/ui/tooltip";
import { HeroSection } from "@/components/hero-section";

function App() {
  return (
    <TooltipProvider>
      <div className="relative bg-white">
        {/* Full KnownVisitor Waitlist Page */}
        <HeroSection />
      </div>
    </TooltipProvider>
  );
}

export default App;