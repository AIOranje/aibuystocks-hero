import { Check } from "lucide-react"

export function SignalShowcase() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Does a Signal Look Like?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every signal comes with a clear visual chart and all the information you need to make informed trading
            decisions. Signals are provided on trading days when the US stock market is open.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Visualization */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
              {/* Chart Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">AI Stock Signal Example</h3>
                  <p className="text-gray-400">TP1 & TP2 Hit ✅</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$21.70</div>
                  <div className="text-green-400 text-sm">+67.6% (+$8.74)</div>
                </div>
              </div>

              {/* Real Trading Chart */}
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/images/trading-chart-example.png"
                  alt="AI Stock Signal Trading Chart Example showing successful TP1 and TP2 hits"
                  className="w-full h-auto"
                />
              </div>

              {/* Signal Details */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-green-400 font-bold">$12.96</div>
                  <div className="text-gray-400 text-sm">Entry</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-red-400 font-bold">$10.26</div>
                  <div className="text-gray-400 text-sm">Stop Loss</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-blue-400 font-bold">$17.33</div>
                  <div className="text-gray-400 text-sm">Take Profit 1 ✅</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-blue-400 font-bold">$21.70</div>
                  <div className="text-gray-400 text-sm">Take Profit 2 ✅</div>
                </div>
              </div>

              {/* Success Badge */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-green-400 font-semibold text-sm">Signal Completed Successfully</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">Every signal includes:</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">A clear entry</h4>
                    <p className="text-gray-300">Exact price point to enter the trade, marked clearly on the chart.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">A protective stop loss</h4>
                    <p className="text-gray-300">Risk management built-in to limit potential losses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Two take profits</h4>
                    <p className="text-gray-300">Multiple exit strategies to maximize your profit potential.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Simple chart with everything visualized</h4>
                    <p className="text-gray-300">
                      No complex analysis needed - everything is clearly marked and easy to understand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">✅ Lock-in profits at TP1</h4>
                    <p className="text-gray-300">
                      Once Take Profit 1 is hit, we recommend selling 50% of your position and moving the stop loss to
                      break-even. This locks in gains and lets the remaining position run toward TP2 — with zero risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
