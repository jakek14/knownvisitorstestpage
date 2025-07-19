import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { TooltipProvider } from "@/components/ui/tooltip"

import { TwentyFirstToolbar } from "@21st-extension/toolbar-react"
import { ReactPlugin } from "@21st-extension/react"
import RainingLetters from "@/components/ui/modern-animated-hero-section"

function App() {
  // Skip onboarding and show main app directly
  const [showMainApp] = useState(true)

  if (showMainApp) {
    return (
      <TooltipProvider>
        <TwentyFirstToolbar
          config={{
            plugins: [ReactPlugin],
          }}
        />
        <div className="relative">
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          
          <div className="fixed bottom-6 left-6 z-50">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                localStorage.removeItem('phion-onboarding-completed')
                window.location.reload()
              }}
            >
              Reset Onboarding
            </Button>
          </div>

          <RainingLetters />
        </div>
      </TooltipProvider>
    )
  }

  return null
}

export default App