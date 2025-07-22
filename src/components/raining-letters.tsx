import React, { useState, useEffect, useCallback } from "react"

interface Character {
  char: string
  x: number
  y: number
  speed: number
}

const RainingLetters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set())

  const createCharacters = useCallback(() => {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    // Reduce character count on mobile for better performance
    const charCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 300
    const newCharacters: Character[] = []

    for (let i = 0; i < charCount; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.075 + Math.random() * 0.225, // Reduced to 75% of original speed (0.075-0.3 instead of 0.1-0.4)
      })
    }

    return newCharacters
  }, [])

  useEffect(() => {
    setCharacters(createCharacters())
  }, [createCharacters])

  useEffect(() => {
    const updateActiveIndices = () => {
      // Removed the blue flashing effect - no more active indices
      setActiveIndices(new Set())
    }

    const flickerInterval = setInterval(updateActiveIndices, 50)
    return () => clearInterval(flickerInterval)
  }, [characters.length])

  useEffect(() => {
    let animationFrameId: number

    const updatePositions = () => {
      setCharacters(prevChars => 
        prevChars.map(char => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"[
              Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?".length)
            ],
          }),
        }))
      )
      animationFrameId = requestAnimationFrame(updatePositions)
    }

    animationFrameId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {characters.map((char, index) => {
        return (
          <span
            key={index}
            className="absolute text-xs font-light text-gray-600"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              transform: 'translate(-50%, -50%)',
              opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.4,
              willChange: 'transform, top',
              fontSize: typeof window !== 'undefined' && window.innerWidth < 768 ? '1.2rem' : '1.8rem'
            }}
          >
            {char.char}
          </span>
        )
      })}
    </div>
  )
}

export default RainingLetters 