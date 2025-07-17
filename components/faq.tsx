import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our AI stock signals service
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              How does the AI stock signal system work?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Our advanced AI analyzes thousands of stocks daily using machine learning algorithms, technical
              indicators, and market sentiment data. It identifies high-probability trading opportunities and delivers
              one carefully selected stock signal each trading day with entry price, stop loss, and two take profit
              levels.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              When do I receive the signals?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Signals are delivered every trading day when the US stock market is open (Monday-Friday, excluding
              holidays). You'll receive them via email and in your dashboard before market open, typically between
              6:00-8:30 AM EST, giving you time to prepare for the trading day.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              What information is included in each signal?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Each signal includes: Stock symbol and company name, recommended entry price, stop loss level, two take
              profit targets, brief analysis of why the stock was selected, and risk management guidelines. Everything
              you need to make informed trading decisions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              Can I cancel my subscription anytime?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes, absolutely! You can cancel your subscription at any time through your PayPal account or by contacting
              our support team. There are no long-term commitments or cancellation fees. Your access will continue until
              the end of your current billing period.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              What's the success rate of the AI signals?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Our AI system has maintained a strong track record with detailed performance metrics available in your
              dashboard. While past performance doesn't guarantee future results, our algorithms are continuously
              learning and improving. We provide transparent reporting of all signal outcomes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              Do I need any special software or broker?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              No special software required! Our signals work with any broker that offers US stock trading. We're
              compatible with popular brokers like TradeStation, Interactive Brokers, Saxo Bank, and many others. You
              just need a standard brokerage account to execute the trades.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              Is this suitable for beginners?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Yes! Our signals are designed to be simple and actionable for traders of all experience levels. Each
              signal comes with clear entry, stop loss, and take profit levels, plus educational content to help you
              understand the reasoning behind each pick.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
            <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-gray-300">
              What happens on market holidays?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              On days when the US stock market is closed (weekends, holidays), no signals are sent. Your subscription
              continues normally, and signals resume on the next trading day. You're only charged monthly regardless of
              the number of trading days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
