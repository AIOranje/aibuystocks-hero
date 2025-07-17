import { Brain, TrendingUp, CheckCircle, Mail, ExternalLink } from "lucide-react"

interface OnboardingEmailProps {
  firstName: string
  dashboardUrl?: string
  supportEmail?: string
}

export function OnboardingEmail({
  firstName = "John",
  dashboardUrl = "https://aibuystocks.com/dashboard",
  supportEmail = "support@aibuystocks.com",
}: OnboardingEmailProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white">
      {/* Email Header */}
      <div className="text-center py-8 px-6" style={{ backgroundColor: "#0A0D18" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
            <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
          </div>
        </div>
        <h1 className="text-xl font-bold text-white tracking-wide mb-4">AIBuysStocks.com</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Welcome to AI-powered trading.</h2>
      </div>

      {/* Email Body */}
      <div className="px-6 py-8">
        {/* Greeting */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Hi {firstName},</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Thank you for subscribing to AIBuysStocks.com. You're now set to receive AI-generated stock signals on every
            trading day when the market is open. Each signal includes:
          </p>
        </div>

        {/* Features List */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" style={{ color: "#27C48F" }} />
              <span className="text-gray-800 font-medium">Entry price</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" style={{ color: "#27C48F" }} />
              <span className="text-gray-800 font-medium">Stop loss</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" style={{ color: "#27C48F" }} />
              <span className="text-gray-800 font-medium">Take Profit 1 & 2</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5" style={{ color: "#27C48F" }} />
              <span className="text-gray-800 font-medium">Simple chart for clarity</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Your first signal will be delivered to your email and be available in your dashboard on the next trading
            day.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <div className="inline-block">
            <a
              href={dashboardUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity duration-300"
              style={{ backgroundColor: "#32A9E6" }}
            >
              <ExternalLink className="w-5 h-5" />
              Access Your Dashboard
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-3">👉 Click above to login and view your signals</p>
        </div>

        {/* Support */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1" style={{ color: "#32A9E6" }} />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Need help?</h4>
              <p className="text-gray-700 mb-2">
                Contact us anytime at{" "}
                <a href={`mailto:${supportEmail}`} className="font-medium hover:underline" style={{ color: "#32A9E6" }}>
                  {supportEmail}
                </a>
              </p>
              <p className="text-gray-600 text-sm">We respond within 24 hours.</p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-2">Happy trading,</p>
          <p className="text-gray-900 font-semibold text-lg">The AIBuysStocks.com Team</p>
        </div>
      </div>

      {/* Email Footer */}
      <div className="px-6 py-8 border-t border-gray-200 bg-gray-50">
        <div className="text-center space-y-4">
          {/* Company Info */}
          <div>
            <p className="text-gray-900 font-semibold mb-2">AIBuysStocks.com</p>
            <p className="text-gray-600 text-sm">AI-powered stock signals for smarter trading</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="https://aibuystocks.com" className="text-gray-600 hover:text-gray-900 hover:underline">
              Visit Website
            </a>
            <a href="https://aibuystocks.com/dashboard" className="text-gray-600 hover:text-gray-900 hover:underline">
              Dashboard
            </a>
            <a href="https://aibuystocks.com/faq" className="text-gray-600 hover:text-gray-900 hover:underline">
              FAQ
            </a>
            <a href="https://aibuystocks.com/contact" className="text-gray-600 hover:text-gray-900 hover:underline">
              Support
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">LinkedIn</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Twitter</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Instagram</span>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </a>
          </div>

          {/* Legal */}
          <div className="pt-4 border-t border-gray-300">
            <p className="text-gray-500 text-xs mb-2">© 2025 AIBuysStocks.com. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline">
                Unsubscribe
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-4">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Risk Disclaimer:</strong> Trading involves substantial risk and is not suitable for all investors.
              Past performance does not guarantee future results. Please trade responsibly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
