"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

// Using images from public folder
const images = [
  "/Klaviyo.png",
  "/Google.png", 
  "/Big.png",
  "/Woo.png",
  "/Wix.png",
  "/Tiktok.png",
  "/Squarespace.png",
  "/Snapchat.png",
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const }

const Carousel = memo(
  ({
    controls,
    cards,
  }: {
    controls: any
    cards: string[]
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 400 : 600
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Auto-rotate effect
    useEffect(() => {
      const interval = setInterval(() => {
        rotation.set(rotation.get() + 0.5)
      }, 50) // Rotate 0.5 degree every 50ms for smoother auto-rotation

      return () => clearInterval(interval)
    }, [rotation])

    return (
      <div
        className="flex h-full items-center justify-center bg-transparent"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          className="relative flex h-full origin-center justify-center pointer-events-none"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-transparent p-1 pointer-events-none"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
            >
              <motion.img
                src={imgUrl}
                alt={`carousel-image-${i}`}
                layoutId={`img-${imgUrl}`}
                className="pointer-events-none w-full h-full rounded-xl object-contain bg-white p-1 border-2 border-gray-300 shadow-lg"
                style={{
                  transform: `perspective(1000px) rotateY(${i * (360 / faceCount)}deg)`,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.1)'
                }}
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel() {
  const controls = useAnimation()
  const cards = useMemo(() => images, [])

  return (
    <motion.div layout className="relative w-full h-full">
      <div className="relative h-full w-full overflow-hidden">
        <Carousel
          controls={controls}
          cards={cards}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }; 