"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Clock, AlertCircle } from "lucide-react"

export function MarketHoursIndicator() {
  const [marketStatus, setMarketStatus] = useState<{
    isOpen: boolean
    status: string
    nextEvent: string
    timeUntil: string
  }>({
    isOpen: false,
    status: "Loading...",
    nextEvent: "",
    timeUntil: "",
  })

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const checkMarketHours = () => {
      const now = new Date()
      const nyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }))

      const day = nyTime.getDay() // 0 = Sunday, 1 = Monday, etc.
      const hour = nyTime.getHours()
      const minute = nyTime.getMinutes()
      const currentTimeMinutes = hour * 60 + minute

      // Market hours: Monday-Friday 9:30 AM - 4:00 PM ET
      const marketOpen = 9 * 60 + 30 // 9:30 AM
      const marketClose = 16 * 60 // 4:00 PM

      const isWeekday = day >= 1 && day <= 5
      const isMarketHours = currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose

      let status = ""
      let nextEvent = ""
      let timeUntil = ""
      let isOpen = false

      if (!isWeekday) {
        // Weekend
        status = "Market Closed - Weekend"
        const daysUntilMonday = day === 0 ? 1 : 8 - day // If Sunday, 1 day. If Saturday, 2 days.
        nextEvent = "Market opens Monday at 9:30 AM ET"

        const nextMonday = new Date(nyTime)
        nextMonday.setDate(nyTime.getDate() + daysUntilMonday)
        nextMonday.setHours(9, 30, 0, 0)

        const timeDiff = nextMonday.getTime() - nyTime.getTime()
        const hoursUntil = Math.floor(timeDiff / (1000 * 60 * 60))
        const minutesUntil = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

        timeUntil = `${hoursUntil}h ${minutesUntil}m`
      } else if (isMarketHours) {
        // Market is open
        status = "Market Open"
        isOpen = true
        nextEvent = "Market closes at 4:00 PM ET"

        const closeTime = new Date(nyTime)
        closeTime.setHours(16, 0, 0, 0)

        const timeDiff = closeTime.getTime() - nyTime.getTime()
        const hoursUntil = Math.floor(timeDiff / (1000 * 60 * 60))
        const minutesUntil = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

        timeUntil = `${hoursUntil}h ${minutesUntil}m`
      } else if (currentTimeMinutes < marketOpen) {
        // Before market open
        status = "Pre-Market"
        nextEvent = "Market opens at 9:30 AM ET"

        const openTime = new Date(nyTime)
        openTime.setHours(9, 30, 0, 0)

        const timeDiff = openTime.getTime() - nyTime.getTime()
        const hoursUntil = Math.floor(timeDiff / (1000 * 60 * 60))
        const minutesUntil = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

        timeUntil = `${hoursUntil}h ${minutesUntil}m`
      } else {
        // After market close
        status = "After Hours"
        nextEvent = "Market opens tomorrow at 9:30 AM ET"

        const nextOpen = new Date(nyTime)
        nextOpen.setDate(nyTime.getDate() + 1)
        nextOpen.setHours(9, 30, 0, 0)

        const timeDiff = nextOpen.getTime() - nyTime.getTime()
        const hoursUntil = Math.floor(timeDiff / (1000 * 60 * 60))
        const minutesUntil = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

        timeUntil = `${hoursUntil}h ${minutesUntil}m`
      }

      setMarketStatus({
        isOpen,
        status,
        nextEvent,
        timeUntil,
      })
    }

    // Check immediately and then every minute
    checkMarketHours()
    const interval = setInterval(checkMarketHours, 60000)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) {
    return <div className="animate-pulse bg-gray-700 rounded-lg p-4 w-64 h-20"></div>
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
      <div className="flex items-center gap-3 mb-2">
        {marketStatus.isOpen ? (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <AlertCircle className="w-5 h-5 text-red-400" />
          </div>
        )}
        <span className={`font-semibold ${marketStatus.isOpen ? "text-green-400" : "text-red-400"}`}>
          {marketStatus.status}
        </span>
      </div>

      <div className="text-gray-300 text-sm">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-4 h-4" style={{ color: "#32A9E6" }} />
          <span>{marketStatus.nextEvent}</span>
        </div>
        <div className="text-gray-400 text-xs">Time remaining: {marketStatus.timeUntil}</div>
      </div>
    </div>
  )
}
