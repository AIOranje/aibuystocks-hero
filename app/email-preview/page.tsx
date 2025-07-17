import { OnboardingEmail } from "@/components/onboarding-email"

export default function EmailPreviewPage() {
  return (
    <div className="min-h-screen py-12 px-6" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Email Template Preview</h1>
          <p className="text-gray-600">Onboarding Email for AIBuysStocks.com</p>
        </div>

        {/* Email Subject Line Preview */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="text-sm text-gray-500 mb-2">Subject Line:</div>
          <div className="font-semibold text-gray-900">
            🎉 Welcome to AIBuysStocks.com — Your AI Stock Signals Start Now
          </div>
        </div>

        {/* Email Template */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <OnboardingEmail
            firstName="John"
            dashboardUrl="https://aibuystocks.com/dashboard"
            supportEmail="support@aibuystocks.com"
          />
        </div>

        {/* Usage Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Usage Instructions</h3>
          <div className="text-blue-800 text-sm space-y-2">
            <p>• This email template can be integrated with your email service provider</p>
            <p>• Customize the firstName, dashboardUrl, and supportEmail props as needed</p>
            <p>• The template is responsive and works well in most email clients</p>
            <p>• Subject line: "🎉 Welcome to AIBuysStocks.com — Your AI Stock Signals Start Now"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
