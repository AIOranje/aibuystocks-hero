"use client"

import { Button } from "@/components/ui/button"
import { Brain, TrendingUp } from "lucide-react"

export function JsonWelcome() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">AIBuysStocks.com</h1>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">🎉 Welcome to AIBuysStocks.com</h2>
          <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
            Your subscription is active. You now have full access to AI-powered stock signals on every trading day.
          </p>
        </div>

        {/* Next Step Card */}
        <div className="rounded-2xl p-8 border border-gray-800 mb-12" style={{ backgroundColor: "#111520" }}>
          <h3 className="text-2xl font-bold text-white mb-6">Your Next Step</h3>

          <div className="space-y-4 mb-8">
            <p className="text-white text-lg">👉 Visit your dashboard on trading days to get:</p>
            <ul className="space-y-3 ml-6">
              <li className="text-white flex items-center gap-2">
                <span>- ✅ Today's Signal</span>
              </li>
              <li className="text-white flex items-center gap-2">
                <span>- ✅ Entry, Stop, TP1, TP2</span>
              </li>
              <li className="text-white flex items-center gap-2">
                <span>- ✅ Simple chart with every signal</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 font-semibold text-white hover:bg-opacity-90 transition-all duration-300"
              style={{ backgroundColor: "#32A9E6" }}
            >
              <a href="/dashboard">Go to Dashboard</a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "#D9D9D9" }}>
            Need help? Contact support@aibuystocks.com
          </p>
        </div>
      </div>
    </div>
  )
}
