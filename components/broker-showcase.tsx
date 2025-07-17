"use client"

export function BrokerShowcase() {
  const brokers = [
    {
      name: "TradeStation",
      logo: (
        <div className="w-full h-full relative overflow-hidden rounded-lg">
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{
              background: "linear-gradient(135deg, #4C1D95 0%, #1E1B4B 100%)",
            }}
          >
            {/* 3D Card Stack Effect */}
            <div className="relative">
              {/* Back cards for 3D effect */}
              <div className="absolute top-0.5 left-0.5 w-8 h-8 bg-gray-400/40 rounded transform rotate-2"></div>
              <div className="absolute top-0.5 left-0.5 w-8 h-8 bg-gray-300/60 rounded transform rotate-1"></div>

              {/* Main card with TradeStation T logo */}
              <div className="relative w-8 h-8 bg-white rounded flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    d="M3 4 C3 2 4 2 6 2 L18 2 C20 2 21 2 21 4 C21 4 21 4 21 4 L21 6 C21 6 21 6 21 6 L13 6 L13 20 C13 21 12 22 11 22 C10 22 9 21 9 20 L9 6 L3 6 C3 6 3 4 3 4 Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M15 6 C17 8 19 12 19 16 C19 18 18 20 16 20 C15 20 15 19 15 18 C15 14 15 10 15 6 Z"
                    fill="#60A5FA"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ),
      color: "#3B82F6",
      rating: "4.5",
      badge: "PLATINUM",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      reviews: "15.6K",
      accounts: "110.4K",
      promotion: "Options trading available",
      assets: "Stocks, Futures, Options",
    },
    {
      name: "Interactive Brokers",
      logo: (
        <div className="w-full h-full relative overflow-hidden rounded bg-black flex items-center justify-center">
          <svg viewBox="0 0 40 20" className="w-8 h-4">
            <polygon points="5,5 12,10 5,15 2,12 2,8" fill="#DC2626" />
            <polygon points="15,5 22,10 15,15 12,12 12,8" fill="#DC2626" />
            <polygon points="25,7 32,10 25,13 22,11 22,9" fill="#DC2626" />
          </svg>
        </div>
      ),
      color: "#DC2626",
      rating: "4.5",
      badge: "PLATINUM",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      reviews: "30.6K",
      accounts: "236.5K",
      promotion: "Low Trading Costs",
      assets: "Stocks, Forex, Futures, Bonds, Options",
    },
    {
      name: "Trader Brokerage",
      logo: (
        <div className="w-full h-full relative overflow-hidden rounded bg-black flex items-center justify-center">
          <svg viewBox="0 0 40 20" className="w-8 h-4">
            <defs>
              <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="25%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="75%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <polygon points="5,10 18,5 18,8 32,8 35,10 32,12 18,12 18,15" fill="url(#arrow-gradient)" />
          </svg>
        </div>
      ),
      color: "#EC4899",
      rating: "4.0",
      badge: "GOLD",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      reviews: "311",
      accounts: "3.6K",
      promotion: "Trade commission-free!",
      assets: "Stocks",
    },
    {
      name: "Saxo Bank",
      logo: (
        <div
          className="w-full h-full relative overflow-hidden rounded flex flex-col items-center justify-center text-white"
          style={{ backgroundColor: "#1E40AF" }}
        >
          <div className="text-xs font-bold tracking-wider">SAXO</div>
          <div className="text-[8px] font-normal tracking-wide opacity-90">BE INVESTED</div>
        </div>
      ),
      color: "#1E40AF",
      rating: "3.8",
      badge: "GOLD",
      badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      reviews: "1.6K",
      accounts: "21.1K",
      promotion: "Above Average",
      assets: "Stocks, Futures",
    },
  ]

  // Duplicate the array to create seamless loop
  const duplicatedBrokers = [...brokers, ...brokers]

  return (
    <section className="py-12 px-6 border-t border-gray-800" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ⚡ Compatible with All Major Brokers Worldwide
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Use our AI signals with any broker you prefer. Our signals work with all major trading platforms globally.
          </p>
        </div>

        {/* Broker Counter */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gray-900/50 rounded-lg px-3 py-1 border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Showing {brokers.length} Premium Brokers</span>
          </div>
        </div>

        {/* Compact Broker Showcase */}
        <div className="relative bg-gray-900/30 rounded-xl border border-gray-700/50 overflow-hidden">
          <div className="py-6 px-4 relative overflow-hidden">
            <div className="flex animate-slow-scroll gap-4">
              {duplicatedBrokers.map((broker, index) => (
                <div
                  key={`${broker.name}-${index}`}
                  className="flex-shrink-0 w-64 bg-gray-800/90 rounded-lg border border-gray-600 p-4 transform hover:scale-105 transition-transform duration-300"
                >
                  {/* Header with Badge and Rating */}
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-bold border ${broker.badgeColor}`}>
                      {broker.badge}
                    </span>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-white text-sm font-bold">{broker.rating}</span>
                        <span className="text-yellow-400 text-sm">★</span>
                      </div>
                      <div className="text-gray-400 text-xs">{broker.reviews} Reviews</div>
                    </div>
                  </div>

                  {/* Broker Logo */}
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-8 rounded shadow-lg overflow-hidden border border-gray-700">
                      {broker.logo}
                    </div>
                  </div>

                  {/* Broker Info - More structured layout for perfect alignment */}
                  <div className="text-center">
                    {/* Top section - fixed height */}
                    <div className="h-16 flex flex-col justify-center space-y-1">
                      <h4 className="text-white font-bold text-lg leading-tight">{broker.name}</h4>
                      <p className="text-gray-400 text-xs leading-tight">Tradable assets: {broker.assets}</p>
                    </div>

                    {/* Middle section - fixed height */}
                    <div className="h-12 flex flex-col justify-center">
                      <div className="text-white font-bold text-base">{broker.accounts}</div>
                      <div className="text-gray-500 text-xs">Accounts</div>
                    </div>

                    {/* Bottom section - fixed height and consistent spacing */}
                    <div className="h-16 flex flex-col justify-end space-y-2">
                      {/* Promotion - fixed height */}
                      <div className="h-8 flex items-center justify-center">
                        <div className="bg-green-500/20 border border-green-500/30 rounded px-3 py-1">
                          <span className="text-green-400 font-semibold text-xs leading-tight">{broker.promotion}</span>
                        </div>
                      </div>

                      {/* Compatible Badge - fixed position */}
                      <div className="h-6 flex items-center justify-center">
                        <div className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span className="text-blue-400 font-semibold text-xs">Compatible with AI Signals</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Our AI signals provide clear entry, stop loss, and take profit levels that work with any broker. Simply copy
            the signal details into your preferred trading platform.{" "}
            <span className="text-white font-semibold">Works with {brokers.length}+ major brokers worldwide.</span>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
            <span>{brokers.length} Premium Brokers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
            <span>Global Compatibility</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
            <span>Easy to Copy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
            <span>Clear Instructions</span>
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes slow-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slow-scroll {
          animation: slow-scroll 25s linear infinite;
        }

        .animate-slow-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
