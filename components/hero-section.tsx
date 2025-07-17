import { TrendingUp, Brain } from "lucide-react"
import { PayPalSubscriptionButton } from "./paypal-subscription-button"
import { ActiveUsersCounter } from "./active-users-counter"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0D18" }}
    >
      {/* Active Users Counter - Fixed Top Left */}
      <ActiveUsersCounter />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0">
          {/* Neural Network Pattern */}
          <defs>
            <pattern id="neural-network" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#32A9E6" opacity="0.3" />
              <circle cx="60" cy="40" r="2" fill="#27C48F" opacity="0.3" />
              <circle cx="100" cy="20" r="2" fill="#32A9E6" opacity="0.3" />
              <circle cx="40" cy="80" r="2" fill="#27C48F" opacity="0.3" />
              <circle cx="80" cy="100" r="2" fill="#32A9E6" opacity="0.3" />
              <line x1="20" y1="20" x2="60" y2="40" stroke="#32A9E6" strokeWidth="0.5" opacity="0.2" />
              <line x1="60" y1="40" x2="100" y2="20" stroke="#27C48F" strokeWidth="0.5" opacity="0.2" />
              <line x1="20" y1="20" x2="40" y2="80" stroke="#32A9E6" strokeWidth="0.5" opacity="0.2" />
              <line x1="60" y1="40" x2="80" y2="100" stroke="#27C48F" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-network)" />
        </svg>

        {/* Candlestick Chart Pattern */}
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0">
          <defs>
            <pattern id="candlestick" x="0" y="0" width="80" height="120" patternUnits="userSpaceOnUse">
              {/* Bullish Candle */}
              <rect x="15" y="40" width="8" height="30" fill="#27C48F" opacity="0.1" />
              <line x1="19" y1="30" x2="19" y2="80" stroke="#27C48F" strokeWidth="1" opacity="0.1" />
              {/* Bearish Candle */}
              <rect x="35" y="50" width="8" height="25" fill="#32A9E6" opacity="0.1" />
              <line x1="39" y1="35" x2="39" y2="85" stroke="#32A9E6" strokeWidth="1" opacity="0.1" />
              {/* Another Bullish */}
              <rect x="55" y="45" width="8" height="20" fill="#27C48F" opacity="0.1" />
              <line x1="59" y1="35" x2="59" y2="75" stroke="#27C48F" strokeWidth="1" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#candlestick)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">AIBuysStocks.com</h1>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
          AI Buys Stocks. <span style={{ color: "#27C48F" }}>You Profit.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          Get one simple stock signal every trading day when the market is open. Entry. Stop Loss. Two Take Profits.{" "}
          <span className="text-white font-semibold">No stress. No analysis.</span>{" "}
          <span style={{ color: "#32A9E6" }} className="font-bold">
            $9.95 USD/month.
          </span>{" "}
          Cancel anytime.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <PayPalSubscriptionButton />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
            <span>Trading Day Signals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
    </section>
  )
}
