import { Instagram } from "lucide-react"

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0B1426" }} className="text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">AIBuysStocks.com</h3>
            <p className="text-gray-400 mb-4">
              Your trusted source for AI-powered stock signals and trading insights. Join thousands of successful
              traders who rely on our advanced algorithms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/aibuysstocks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@aibuysstocks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@aibuysstocks.com" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="mt-4">
                <div className="text-gray-400 text-sm">
                  <div className="font-semibold text-white mb-2">Business Address</div>
                  <div>AIBuysStocks.com LLC</div>
                  <div>40 Wall Street, 28th Floor</div>
                  <div>New York, NY 10005</div>
                  <div>United States</div>
                </div>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/refund" className="text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AIBuysStocks.com. All rights reserved. |
            <span className="ml-2">Trading involves risk. Past performance does not guarantee future results.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
