import { USTimeDisplay } from "@/components/us-time-display"
import { MarketHoursIndicator } from "@/components/market-hours-indicator"
import { TradingSchedule } from "@/components/trading-schedule"

export default function TimePage() {
  return (
    <main className="min-h-screen py-12 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">US Time & Trading Hours</h1>
          <p className="text-xl text-gray-300">Stay synchronized with US market hours and trading schedules</p>
        </div>

        <div className="space-y-8">
          {/* Current US Times */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Current US Time Zones</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Eastern Time</h3>
                <USTimeDisplay timezone="EST" size="lg" showTimezone={true} />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Central Time</h3>
                <USTimeDisplay timezone="CST" size="lg" showTimezone={true} />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Mountain Time</h3>
                <USTimeDisplay timezone="MST" size="lg" showTimezone={true} />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-4">Pacific Time</h3>
                <USTimeDisplay timezone="PST" size="lg" showTimezone={true} />
              </div>
            </div>
          </div>

          {/* Market Status */}
          <div className="flex justify-center">
            <MarketHoursIndicator />
          </div>

          {/* Trading Schedule */}
          <TradingSchedule />

          {/* Important Notes */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">📈 Trading Signal Schedule</h3>
            <div className="space-y-2 text-gray-300">
              <p>• AI stock signals are delivered every trading day when the US market is open</p>
              <p>• Signals arrive before market open (typically 6:00-8:30 AM ET)</p>
              <p>• No signals on weekends or US market holidays</p>
              <p>• All prices and levels are in USD for US-listed stocks only</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
