"use client"

import { useEffect, useState } from "react"

interface ActiveUsersCounterProps {
  className?: string
}

export function ActiveUsersCounter({ className = "" }: ActiveUsersCounterProps) {
  const [displayCount, setDisplayCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [targetCount, setTargetCount] = useState(0)

  useEffect(() => {
    // Generate random number between 212 and 943
    const randomCount = Math.floor(Math.random() * (943 - 212 + 1)) + 212
    setTargetCount(randomCount)
    setIsAnimating(true)

    // Movie-like animation with multiple phases
    const phases = [
      { progress: 0.1, duration: 300 }, // Quick start
      { progress: 0.3, duration: 500 }, // Acceleration
      { progress: 0.6, duration: 700 }, // Mid-point buildup
      { progress: 0.85, duration: 400 }, // Dramatic slowdown
      { progress: 1.0, duration: 300 }, // Final climactic approach
    ]

    let currentPhase = 0
    let startTime = Date.now()
    let startCount = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const phase = phases[currentPhase]

      if (elapsed >= phase.duration) {
        // Move to next phase
        startCount = Math.floor(randomCount * phase.progress)
        setDisplayCount(startCount)
        currentPhase++
        startTime = Date.now()

        if (currentPhase >= phases.length) {
          setDisplayCount(randomCount)
          setIsAnimating(false)
          startFluctuations(randomCount)
          return
        }
      }

      // Smooth interpolation within current phase
      const progress = elapsed / phase.duration
      const easeProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out
      const phaseStart = currentPhase > 0 ? phases[currentPhase - 1].progress : 0
      const phaseEnd = phase.progress
      const targetForPhase = Math.floor(randomCount * (phaseStart + (phaseEnd - phaseStart) * easeProgress))

      setDisplayCount(Math.max(startCount, targetForPhase))
      requestAnimationFrame(animate)
    }

    const animationTimeout = setTimeout(() => {
      animate()
    }, 500) // Start animation after 500ms

    return () => clearTimeout(animationTimeout)
  }, [])

  const startFluctuations = (baseCount: number) => {
    const fluctuate = () => {
      const variation = Math.floor(Math.random() * 7) - 3 // ±3 people
      const newCount = Math.max(212, Math.min(943, baseCount + variation))
      setDisplayCount(newCount)

      // Schedule next fluctuation
      const nextFluctuation = Math.random() * 5000 + 3000 // 3-8 seconds
      setTimeout(fluctuate, nextFluctuation)
    }

    // Start fluctuations after main animation
    setTimeout(fluctuate, 2000)
  }

  return (
    <div className={`fixed top-4 left-4 z-50 ${className}`}>
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-500 ${
          isAnimating
            ? "bg-gray-900/50 border-green-500/30 backdrop-blur-sm shadow-lg shadow-green-500/10"
            : "bg-gray-900/30 border-gray-700/50 backdrop-blur-sm"
        }`}
      >
        <span className={`text-lg transition-all duration-300 ${isAnimating ? "animate-bounce text-2xl" : "text-lg"}`}>
          ⚡
        </span>
        <span className="text-gray-300 text-sm">
          Currently,{" "}
          <span
            className={`font-bold transition-all duration-300 ${
              isAnimating ? "scale-110 text-shadow-lg" : "scale-100"
            }`}
            style={{
              color: "#00c48c",
              textShadow: isAnimating ? "0 0 10px rgba(0, 196, 140, 0.5)" : "none",
            }}
          >
            {displayCount.toLocaleString()}
          </span>{" "}
          people are active on this site.
          {isAnimating && (
            <span className="ml-2 text-xs text-gray-400 animate-pulse">
              <span className="inline-block animate-pulse">.</span>
              <span className="inline-block animate-pulse animation-delay-200">.</span>
              <span className="inline-block animate-pulse animation-delay-400">.</span>
            </span>
          )}
        </span>
      </div>
    </div>
  )
}
