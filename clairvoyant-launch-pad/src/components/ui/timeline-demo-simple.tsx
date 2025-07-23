import React from "react";
import { TimelineSimple } from "@/components/ui/timeline-simple";

export default function TimelineDemoSimple() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-sm">Image 1</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-sm">Image 2</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-sm">Image 3</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-sm">Image 4</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-sm">Hero Template</span>
            </div>
            <div className="h-20 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
              <span className="text-sm">Feature Template</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <TimelineSimple data={data} />
    </div>
  );
} 