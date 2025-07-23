"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

export function FolderAnimation() {
  const folderControls = useAnimation()
  const dashboardControls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      // Start animation loop
      while (true) {
        // 1. Folder opens
        await folderControls.start({
          rotateX: -15,
          transition: { duration: 0.8, ease: "easeOut" }
        })

        // 2. Dashboard slides out
        await dashboardControls.start({
          x: 60,
          opacity: 1,
          scale: 1,
          transition: { duration: 1, ease: "easeOut", delay: 0.2 }
        })

        // 3. Dashboard stays out for a moment
        await new Promise(resolve => setTimeout(resolve, 2000))

        // 4. Dashboard slides back in
        await dashboardControls.start({
          x: 0,
          opacity: 0.7,
          scale: 0.8,
          transition: { duration: 1, ease: "easeIn" }
        })

        // 5. Folder closes
        await folderControls.start({
          rotateX: 0,
          transition: { duration: 0.8, ease: "easeIn" }
        })

        // 6. Wait before repeating
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    animate()
  }, [folderControls, dashboardControls])

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Folder */}
      <motion.div
        className="relative w-32 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
        animate={folderControls}
        initial={{ rotateX: 0 }}
      >
        {/* Folder front */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg border-2 border-blue-400">
          <div className="absolute top-2 left-3 w-8 h-1 bg-blue-300 rounded"></div>
          <div className="absolute top-4 left-3 w-6 h-1 bg-blue-300 rounded"></div>
          <div className="absolute top-6 left-3 w-10 h-1 bg-blue-300 rounded"></div>
        </div>
        
        {/* Folder back (visible when open) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg border-2 border-blue-300"
          style={{ 
            transform: "rotateX(180deg)",
            transformOrigin: "bottom"
          }}
        >
          <div className="absolute top-2 left-3 w-8 h-1 bg-blue-200 rounded"></div>
          <div className="absolute top-4 left-3 w-6 h-1 bg-blue-200 rounded"></div>
        </motion.div>
      </motion.div>

      {/* Dashboard Preview */}
      <motion.div
        className="absolute left-16 w-20 h-16 bg-white rounded-lg shadow-xl border border-gray-200"
        animate={dashboardControls}
        initial={{ x: 0, opacity: 0.7, scale: 0.8 }}
        style={{ zIndex: 10 }}
      >
        {/* Dashboard content */}
        <div className="p-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-2 bg-green-500 rounded"></div>
            <div className="w-4 h-2 bg-gray-300 rounded"></div>
          </div>
          
          {/* Chart bars */}
          <div className="flex items-end justify-between space-x-1">
            <div className="w-2 h-4 bg-blue-400 rounded-sm"></div>
            <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
            <div className="w-2 h-3 bg-blue-400 rounded-sm"></div>
            <div className="w-2 h-5 bg-blue-500 rounded-sm"></div>
            <div className="w-2 h-4 bg-blue-400 rounded-sm"></div>
          </div>
          
          {/* Bottom text */}
          <div className="mt-2 flex justify-between">
            <div className="w-6 h-1 bg-gray-300 rounded"></div>
            <div className="w-4 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 