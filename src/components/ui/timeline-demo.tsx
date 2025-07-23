'use client';

import * as React from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { cn } from '@/lib/utils';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  completed?: boolean;
}

interface TimelineProps {
  steps?: TimelineStep[];
  currentStep?: number;
  className?: string;
}

const defaultSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Add the Pixel",
            description: "Copy your KnownVisitors pixel into your site's <head> or use your tag manager.",
    completed: true
  },
  {
    id: 2,
    title: "Capture Visitors",
    description: "Start identifying anonymous and known users in real time.",
    completed: true
  },
  {
    id: 3,
    title: "Connect Your Tools",
    description: "Sync data with Klaviyo, Google, Meta, and more.",
    completed: false
  },
  {
    id: 4,
    title: "Boost Conversions",
    description: "Retarget high-intent visitors with emails, ads, and automation.",
    completed: false
  }
];

const Timeline: React.FC<TimelineProps> = ({ 
  steps = defaultSteps, 
  currentStep = 2,
  className 
}) => {
  const [activeStep, setActiveStep] = React.useState<number>(1);
  const [expandedStep, setExpandedStep] = React.useState<number | null>(1);
  const mobileSliderRef = React.useRef<HTMLDivElement>(null);

  // MOBILE: horizontal slider logic
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Auto-update activeStep on mobile scroll
  React.useEffect(() => {
    const slider = mobileSliderRef.current;
    if (!slider) return;
    const handleScroll = () => {
      const children = Array.from(slider.children) as HTMLElement[];
      const sliderRect = slider.getBoundingClientRect();
      let minDiff = Infinity;
      let closestIdx = 0;
      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const diff = Math.abs(center - (window.innerWidth / 2));
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveStep(steps[closestIdx].id);
      setExpandedStep(steps[closestIdx].id);
    };
    slider.addEventListener('scroll', handleScroll, { passive: true });
    // Initial update
    handleScroll();
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <div className={cn("w-full max-w-6xl mx-auto p-4 sm:p-8", className)}>
      {/* Light gradient circle background */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-0">
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-green-300/40 via-green-400/30 to-green-300/20 blur-3xl ml-32"></div>
      </div>
      <div className="relative z-10">
        {/* Progress Line (desktop only) */}
        <div className="absolute top-8 left-0 w-full h-0.5 bg-border hidden sm:block">
          <motion.div
            className="h-full bg-[#3bb143]"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Steps: Desktop */}
        <div className="relative justify-between hidden sm:flex">
          {steps.map((step, index) => {
            const isActive = index + 1 === activeStep;
            const isExpanded = step.id <= (expandedStep || 1);
            return (
              <motion.div
                key={step.id}
                className="flex flex-col items-center max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                {/* Step Indicator */}
                <motion.div
                  className={cn(
                    "relative flex items-center justify-center w-16 h-16 rounded-full border-4 bg-background transition-all duration-300 cursor-pointer mt-2 overflow-visible",
                    (index < activeStep) 
                      ? "border-[#3bb143] bg-[#3bb143] text-white" 
                      : isActive
                      ? "border-[#3bb143] text-[#3bb143]"
                      : "border-muted text-muted-foreground hover:border-[#3bb143]/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveStep(step.id);
                    setExpandedStep(step.id);
                  }}
                >
                  {(index < activeStep) ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <CheckIcon className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <span className="text-lg font-semibold">{step.id}</span>
                  )}
                  {/* Active pulse effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-[#3bb143] shadow-lg"
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.7, 0.25, 0.7],
                        boxShadow: [
                          '0 0 0 0 rgba(59,177,67,0.7)',
                          '0 0 0 16px rgba(59,177,67,0)',
                          '0 0 0 0 rgba(59,177,67,0.7)'
                        ]
                      }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ pointerEvents: 'none' }}
                    />
                  )}
                </motion.div>
                {/* Step Content */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  <h3 className={cn(
                    "text-xl sm:text-2xl font-semibold mb-2 transition-colors cursor-pointer",
                    (index < activeStep) || isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => {
                    setActiveStep(step.id);
                    setExpandedStep(step.id);
                  }}>
                    {step.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 0.8, y: isExpanded ? 0 : 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="bg-card rounded-lg border shadow-lg drop-shadow-lg p-4 mt-4 mx-2 mb-6">
                      <p className="text-base sm:text-lg text-black leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Steps: Mobile - horizontal slider */}
        <div
          ref={mobileSliderRef}
          className="sm:hidden flex flex-nowrap overflow-x-auto snap-x snap-mandatory w-full pt-2 gap-4 scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollSnapType: 'x mandatory',
            overflowY: 'hidden',
            msOverflowStyle: 'none', // IE/Edge
            scrollbarWidth: 'none' // Firefox
          }}
        >
          {steps.map((step, index) => {
            const isActive = index + 1 === activeStep;
            const isExpanded = step.id <= (expandedStep || 1);
            return (
              <div
                key={step.id}
                className="flex flex-col items-center min-w-full w-full flex-shrink-0 snap-center relative px-2"
              >
                {/* Step Indicator */}
                <motion.div
                  className={cn(
                    "relative flex items-center justify-center w-16 h-16 rounded-full border-4 bg-background transition-all duration-300 cursor-pointer mt-2 overflow-visible",
                    (index < activeStep) 
                      ? "border-[#3bb143] bg-[#3bb143] text-white" 
                      : isActive
                      ? "border-[#3bb143] text-[#3bb143]"
                      : "border-muted text-muted-foreground hover:border-[#3bb143]/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveStep(step.id);
                    setExpandedStep(step.id);
                  }}
                >
                  {/* On mobile, always show the number in white for completed/active steps; on desktop, show checkmark for completed */}
                  <span className={cn(
                    "text-lg font-semibold",
                    (index < activeStep || isActive) ? "text-white" : ""
                  )}>
                    {step.id}
                  </span>
                  {/* Active pulse effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-[#3bb143] shadow-lg"
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.7, 0.25, 0.7],
                        boxShadow: [
                          '0 0 0 0 rgba(59,177,67,0.7)',
                          '0 0 0 16px rgba(59,177,67,0)',
                          '0 0 0 0 rgba(59,177,67,0.7)'
                        ]
                      }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ pointerEvents: 'none' }}
                    />
                  )}
                </motion.div>
                {/* Step Content */}
                <div className="mt-6 text-center w-full">
                  <h3 className={cn(
                    "text-xl sm:text-2xl font-semibold mb-2 transition-colors cursor-pointer",
                    (index < activeStep) || isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => {
                    setActiveStep(step.id);
                    setExpandedStep(step.id);
                  }}>
                    {step.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 0.8, y: isExpanded ? 0 : 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="bg-card rounded-lg border shadow-lg drop-shadow-lg p-4 mt-4 mx-2 mb-6">
                      <p className="text-base sm:text-lg text-black leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Mobile dots navigation */}
        <div className="sm:hidden flex justify-center gap-2 mt-2">
          {steps.map((_, idx) => (
            <span
              key={idx}
              className={
                idx === (activeStep - 1)
                  ? 'inline-block w-3 h-3 rounded-full bg-[#3bb143]'
                  : 'inline-block w-3 h-3 rounded-full border border-[#3bb143] bg-transparent'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Usage Example
const TimelineDemo: React.FC = () => {
  return (
    <div className={cn("min-h-screen py-16")}>
      <div className="container mx-auto">
        <Timeline />
      </div>
    </div>
  );
};

export default TimelineDemo; 