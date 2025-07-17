import { Brain, Mail, BarChart3, CheckCircle, CreditCard, ArrowRight, TrendingUp, Target, Shield } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "AI Scans Thousands of Stocks",
      description:
        "Our advanced AI algorithms analyze market data, patterns, and trends across thousands of stocks in real-time.",
      icon: Brain,
      color: "#32A9E6",
    },
    {
      number: 2,
      title: "You Receive a Stock Signal",
      description: "Get a complete trading setup delivered to you every trading day with:",
      details: ["Entry price", "Stop loss", "Take Profit 1 & 2"],
      icon: Mail,
      color: "#27C48F",
    },
    {
      number: 3,
      title: "Clear Chart Shows the Setup",
      description: "Visual charts make it easy to understand the trade setup and market context at a glance.",
      icon: BarChart3,
      color: "#32A9E6",
    },
    {
      number: 4,
      title: "You Decide: Take or Skip",
      description:
        "Complete control remains with you. Review the signal and decide whether to execute the trade or pass.",
      icon: CheckCircle,
      color: "#27C48F",
    },
    {
      number: 5,
      title: "Simple Subscription",
      description: "$9.95 USD/month gives you access to daily signals. Cancel anytime with no commitments.",
      icon: CreditCard,
      color: "#32A9E6",
    },
  ]

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple, transparent, and effective. Get professional-grade stock signals without the complexity of
            traditional analysis.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

              {steps.map((step, index) => (
                <div key={step.number} className="flex-1 relative">
                  <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                    {/* Step Number & Icon */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 border-4"
                      style={{
                        backgroundColor: step.color,
                        borderColor: "#0A0D18",
                      }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step Content */}
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-gray-400">STEP {step.number}</div>
                      <h3 className="text-xl font-bold text-white leading-tight">{step.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>

                      {/* Details List */}
                      {step.details && (
                        <ul className="space-y-2 text-sm">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center justify-center gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }}></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 -right-6 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-gray-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Vertical */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex gap-6">
                  {/* Step Icon & Number */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center border-4"
                      style={{
                        backgroundColor: step.color,
                        borderColor: "#0A0D18",
                      }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-3">
                    <div className="text-xs font-semibold text-gray-400 tracking-wide">STEP {step.number}</div>
                    <h3 className="text-xl font-bold text-white leading-tight">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>

                    {/* Details List */}
                    {step.details && (
                      <ul className="space-y-2 mt-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }}></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && <div className="absolute left-7 top-14 w-0.5 h-12 bg-gray-600"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5" style={{ color: "#27C48F" }} />
              <span>Daily Signals</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5" style={{ color: "#32A9E6" }} />
              <span>Clear Entry & Exit Points</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5" style={{ color: "#27C48F" }} />
              <span>Risk Management Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
