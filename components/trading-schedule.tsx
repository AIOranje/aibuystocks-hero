"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, TrendingUp, AlertTriangle } from "lucide-react"

export function TradingSchedule() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isClient) {
    return <div className="animate-pulse bg-gray-700 rounded-lg p-6 h-64"></div>
  }

  const getNextTradingDays = () => {
    const days = []
    const today = new Date()

    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const dayOfWeek = date.getDay()
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5

      if (isWeekday) {
        const nyTime = new Date(date.toLocaleString("en-US", { timeZone: "America/New_York" }))
        const hour = nyTime.getHours()
        const minute = nyTime.getMinutes()
        const currentTimeMinutes = hour * 60 + minute

        const marketOpen = 9 * 60 + 30 // 9:30 AM
        const marketClose = 16 * 60 // 4:00 PM

        let status = "Upcoming"
        let statusColor = "#32A9E6"

        if (i === 0) {
          // Today
          if (currentTimeMinutes >= marketOpen && currentTimeMinutes < marketClose) {
            status = "Open Now"
            statusColor = "#27C48F"
          } else if (currentTimeMinutes < marketOpen) {
            status = "Opens Soon"
            statusColor = "#F59E0B"
          } else {
            status = "Closed"
            statusColor = "#EF4444"
          }
        }

        days.push({
          date: date,
          dayName: date.toLocaleDateString("en-US", { weekday: "long", timeZone: "America/New_York" }),
          dateString: date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            timeZone: "America/New_York",
          }),
          status,
          statusColor,
          isToday: i === 0,
        })
      }
    }

    return days
  }

  const tradingDays = getNextTradingDays()

  const getUSTime = (timezone: string) => {
    const now = new Date()
    return now.toLocaleString("en-US", {
      timeZone: timezone,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  const timezones = [
    { name: "Eastern", zone: "America/New_York", abbr: "ET" },
    { name: "Central", zone: "America/Chicago", abbr: "CT" },
    { name: "Mountain", zone: "America/Denver", abbr: "MT" },
    { name: "Pacific", zone: "America/Los_Angeles", abbr: "PT" },
  ]

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6" style={{ color: "#32A9E6" }} />
        <h3 className="text-xl font-bold text-white">US Trading Schedule</h3>
      </div>

      {/* US Time Zones */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {timezones.map((tz) => (
          <div key={tz.zone} className="bg-gray-800/50 rounded-lg p-3 text-center">
            <div className="text-gray-400 text-sm mb-1">{tz.name}</div>
            <div className="text-white font-mono font-semibold">{getUSTime(tz.zone)}</div>
            <div className="text-gray-500 text-xs">{tz.abbr}</div>
          </div>
        ))}
      </div>

      {/* Trading Days */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white mb-4">Next Trading Days</h4>
        {tradingDays.map((day, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${
              day.isToday ? "bg-blue-500/10 border-blue-500/30" : "bg-gray-800/30 border-gray-700 hover:bg-gray-800/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-white font-semibold">{day.dayName}</div>
                <div className="text-gray-400 text-sm">{day.dateString}</div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">9:30 AM - 4:00 PM ET</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {day.status === "Open Now" && <TrendingUp className="w-4 h-4" style={{ color: day.statusColor }} />}
              {day.status === "Opens Soon" && <AlertTriangle className="w-4 h-4" style={{ color: day.statusColor }} />}
              <span
                className="font-semibold text-sm px-3 py-1 rounded-full"
                style={{
                  color: day.statusColor,
                  backgroundColor: `${day.statusColor}20`,
                  border: `1px solid ${day.statusColor}40`,
                }}
              >
                {day.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Market Hours Info */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            <strong className="text-white">Regular Trading Hours:</strong> Monday - Friday, 9:30 AM - 4:00 PM ET
          </p>
          <p>
            <strong className="text-white">Pre-Market:</strong> 4:00 AM - 9:30 AM ET •
            <strong className="text-white ml-2">After Hours:</strong> 4:00 PM - 8:00 PM ET
          </p>
        </div>
      </div>
    </div>
  )
}
