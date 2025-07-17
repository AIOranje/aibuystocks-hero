import { Users, TrendingUp, Brain, Target, Shield, Zap } from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why AIBuysStocks.com?</h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
              <p className="mb-6">
                <span className="text-white font-bold">We're traders — just like you.</span> Our AI scans thousands of
                stocks every day to deliver only the best setups with the highest chance of success.
              </p>
              <p className="mb-6">
                <span className="text-white font-semibold">No expensive software.</span>{" "}
                <span className="text-white font-semibold">No complicated analysis.</span> Just one clean stock signal
                every trading day when the market is open — entry, stop, and two take-profits — for only{" "}
                <span style={{ color: "#32A9E6" }} className="font-bold text-2xl">
                  $9.95 USD/month.
                </span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#32A9E6" }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">AI-Powered Analysis</h4>
                  <p className="text-gray-400 text-sm">Advanced algorithms scan thousands of stocks daily</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#27C48F" }}
                >
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">High Success Rate</h4>
                  <p className="text-gray-400 text-sm">Only the best setups with highest probability</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#32A9E6" }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Simple & Fast</h4>
                  <p className="text-gray-400 text-sm">No complex analysis needed, everything visualized</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#27C48F" }}
                >
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Risk Management</h4>
                  <p className="text-gray-400 text-sm">Built-in stop losses and take profit levels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-8 border border-gray-700/50">
              {/* Central AI Brain */}
              <div className="flex flex-col items-center text-center space-y-8">
                <div className="relative">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center relative z-10"
                    style={{ backgroundColor: "#32A9E6" }}
                  >
                    <Brain className="w-12 h-12 text-white" />
                  </div>

                  {/* Animated Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
                  <div className="absolute -inset-4 rounded-full border border-blue-400/20 animate-ping"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">AI Trading Engine</h3>
                  <p className="text-gray-400">Scanning thousands of stocks daily</p>
                </div>

                {/* Connection Lines to Features */}
                <div className="grid grid-cols-2 gap-8 w-full mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <p className="text-sm text-gray-300 font-medium">Best Setups</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-300 font-medium">For Traders</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-xs text-gray-400">Stocks Scanned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: "#32A9E6" }}>
                      1
                    </div>
                    <div className="text-xs text-gray-400">Daily Signal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: "#27C48F" }}>
                      $9.95
                    </div>
                    <div className="text-xs text-gray-400">Per Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 mb-6">Trusted by traders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
                <span className="text-sm">Daily Signals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
                <span className="text-sm">No Long-term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
                <span className="text-sm">Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
                <span className="text-sm">Risk Management Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
