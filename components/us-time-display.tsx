"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar } from "lucide-react"

interface USTimeDisplayProps {
  timezone?: "EST" | "CST" | "MST" | "PST" | "EDT" | "CDT" | "MDT" | "PDT"
  format?: "12" | "24"
  showDate?: boolean
  showTimezone?: boolean
  className?: string
  size?: "sm" | "md" | "lg"
}

export function USTimeDisplay({
  timezone = "EST",
  format = "12",
  showDate = true,
  showTimezone = true,
  className = "",
  size = "md",
}: USTimeDisplayProps) {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [isClient, setIsClient] = useState(false)

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "sm":
        return "text-sm"
      case "lg":
        return "text-lg"
      default:
        return "text-base"
    }
  }

  const getIconSize = (size: string) => {
    switch (size) {
      case "sm":
        return "w-4 h-4"
      case "lg":
        return "w-6 h-6"
      default:
        return "w-5 h-5"
    }
  }

  useEffect(() => {
    setIsClient(true)

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isClient) {
    return <div className={`animate-pulse bg-gray-700 rounded ${getSizeClasses(size)} ${className}`}></div>
  }

  const getTimezoneString = (tz: string) => {
    const timezoneMap: { [key: string]: string } = {
      EST: "America/New_York",
      EDT: "America/New_York",
      CST: "America/Chicago",
      CDT: "America/Chicago",
      MST: "America/Denver",
      MDT: "America/Denver",
      PST: "America/Los_Angeles",
      PDT: "America/Los_Angeles",
    }
    return timezoneMap[tz] || "America/New_York"
  }

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: getTimezoneString(timezone),
      hour: format === "12" ? "numeric" : "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: format === "12",
    }
    return date.toLocaleTimeString("en-US", options)
  }

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: getTimezoneString(timezone),
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return date.toLocaleDateString("en-US", options)
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Time Display */}
      <div className={`flex items-center gap-2 text-white ${getSizeClasses(size)}`}>
        <Clock className={`${getIconSize(size)}`} style={{ color: "#32A9E6" }} />
        <span className="font-mono font-semibold">
          {formatTime(currentTime)}
          {showTimezone && <span className="ml-2 text-gray-400 text-sm">{timezone}</span>}
        </span>
      </div>

      {/* Date Display */}
      {showDate && (
        <div className={`flex items-center gap-2 text-gray-300 ${getSizeClasses(size)}`}>
          <Calendar className={`${getIconSize(size)}`} style={{ color: "#27C48F" }} />
          <span>{formatDate(currentTime)}</span>
        </div>
      )}
    </div>
  )
}
