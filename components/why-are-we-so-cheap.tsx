import { Brain, Shield, DollarSign } from "lucide-react"

export function WhyAreWeSoCheap() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Are We So Cheap?</h2>
        </div>

        {/* Main Content */}
        <div className="bg-gray-900/50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-800">
          <div className="space-y-8">
            {/* Opening Statement */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                No expensive offices. No analysts. No nonsense.
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We use advanced AI that scans the markets 24/7 to find the best trade setups. This allows us to save
                massively on costs.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-xl" style={{ color: "#32A9E6" }}>
                      ➡️
                    </span>
                  </div>
                </div>
                <p className="text-lg text-gray-300 font-medium">No overpriced analysts with sky-high salaries.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-xl" style={{ color: "#32A9E6" }}>
                      ➡️
                    </span>
                  </div>
                </div>
                <p className="text-lg text-gray-300 font-medium">No fancy Wall Street offices.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-xl" style={{ color: "#32A9E6" }}>
                      ➡️
                    </span>
                  </div>
                </div>
                <p className="text-lg text-gray-300 font-medium">No marketing hype or fluff.</p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="text-center py-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe that top-quality stock signals should be{" "}
                <span className="font-bold text-white">accessible to everyone.</span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                That's why you don't pay $100, $200, or $500 a month like with others — but only{" "}
                <span className="text-2xl font-bold" style={{ color: "#32A9E6" }}>
                  $9.95 per month.
                </span>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 py-6">
              <div className="flex items-center gap-2">
                <span className="text-xl" style={{ color: "#27C48F" }}>
                  ✅
                </span>
                <span className="font-semibold text-white">Honest pricing.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl" style={{ color: "#27C48F" }}>
                  ✅
                </span>
                <span className="font-semibold text-white">Pure value.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl" style={{ color: "#27C48F" }}>
                  ✅
                </span>
                <span className="font-semibold text-white">No nonsense.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#32A9E6" }}
            >
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">AI-Powered</h4>
            <p className="text-gray-400">Smarter than analysts</p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#32A9E6" }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Transparent</h4>
            <p className="text-gray-400">No hidden fees</p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#32A9E6" }}
            >
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Affordable</h4>
            <p className="text-gray-400">Accessible for every trader</p>
          </div>
        </div>
      </div>
    </section>
  )
}
