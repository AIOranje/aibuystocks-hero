"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star } from "lucide-react"

export function CustomerReviewsAccordion() {
  const reviewItems = [
    {
      title: "\"Best decision ever for trading" — 24-03-2025\",\
      content: "Incredible service. I don\'t need to do any analysis. Just follow the signals. Easy profits.",
    },
    {
      title: "\"Honest. Transparent. Profitable" — 25-03-2025",\
      content: "Incredible service. I don\'t need to do any analysis. Just follow the signals. Easy profits.",
    },
    {
      title: "\"TP1 smashed again" — 26-03-2025",\
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",\
    },
    {\
      title: "\"Doubled my account" — 27-03-2025",\
      content: "Incredible service. I don\'t need to do any analysis. Just follow the signals. Easy profits.",
    },
    {
      title: "\"Made my subscription back in a day" — 28-03-2025",\
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },\
    {\
      title: "\"Signals are insanely accurate" — 29-03-2025",\
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },\
    {\
      title: "\"TP1 smashed again" — 30-03-2025",\
      content: "Incredible service. I don\'t need to do any analysis. Just follow the signals. Easy profits.",
    },
    {
      title: "\"Signals are insanely accurate" — 31-03-2025",
      content: \"Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {\
      title: "\"Signals are insanely accurate" — 01-04-2025",
      content: \"Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Doubled my account" — 02-04-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 03-04-2025",
      content: "I no longer stress about trades. Signals are super easy and profitable.",
    },
    {
      title: ""Best decision ever for trading" — 04-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 05-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Doubled my account" — 06-04-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""TP2 hit perfectly" — 07-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Made my subscription back in a day" — 08-04-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Super simple to follow" — 09-04-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 10-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Doubled my account" — 11-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 12-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Signals are insanely accurate" — 13-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 14-04-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 15-04-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""TP2 hit perfectly" — 16-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""TP1 smashed again" — 17-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Super simple to follow" — 18-04-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Best decision ever for trading" — 19-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""TP1 smashed again" — 20-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 21-04-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 22-04-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Signals are insanely accurate" — 23-04-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Small price, big results" — 24-04-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Best decision ever for trading" — 25-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 26-04-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 27-04-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Made my subscription back in a day" — 28-04-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Signals are insanely accurate" — 29-04-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Super simple to follow" — 30-04-2025",
      content: "TP2 hit multiple times this week alone. Amazing accuracy.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 01-05-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""TP1 smashed again" — 02-05-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Made my subscription back in a day" — 03-05-2025",
      content: "I no longer stress about trades. Signals are super easy and profitable.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 04-05-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 05-05-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Signals are insanely accurate" — 06-05-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Signals are insanely accurate" — 07-05-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 08-05-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""TP2 hit perfectly" — 09-05-2025",
      content: "TP2 hit multiple times this week alone. Amazing accuracy.",
    },
    {
      title: ""TP2 hit perfectly" — 10-05-2025",
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },
    {
      title: ""Doubled my account" — 11-05-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 12-05-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""TP1 smashed again" — 13-05-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Doubled my account" — 14-05-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 15-05-2025",
      content: "TP2 hit multiple times this week alone. Amazing accuracy.",
    },
    {
      title: ""Doubled my account" — 16-05-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Small price, big results" — 17-05-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 18-05-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Super simple to follow" — 19-05-2025",
      content: "TP2 hit multiple times this week alone. Amazing accuracy.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 20-05-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Doubled my account" — 21-05-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Doubled my account" — 22-05-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Best decision ever for trading" — 23-05-2025",
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 24-05-2025",
      content: "I no longer stress about trades. Signals are super easy and profitable.",
    },
    {
      title: ""Small price, big results" — 25-05-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Made my subscription back in a day" — 26-05-2025",
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },
    {
      title: ""TP1 smashed again" — 27-05-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Small price, big results" — 28-05-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Doubled my account" — 29-05-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Doubled my account" — 30-05-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Best decision ever for trading" — 31-05-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""Small price, big results" — 01-06-2025",
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 02-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Best decision ever for trading" — 03-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Doubled my account" — 04-06-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""TP1 smashed again" — 05-06-2025",
      content: "Wins far outweigh the losses. This is an honest service that actually works.",
    },
    {
      title: ""Made my subscription back in a day" — 06-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Small price, big results" — 07-06-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Signals are insanely accurate" — 08-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Made my subscription back in a day" — 09-06-2025",
      content: "I no longer stress about trades. Signals are super easy and profitable.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 10-06-2025",
      content: "TP2 hit multiple times this week alone. Amazing accuracy.",
    },
    {
      title: ""Doubled my account" — 11-06-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 12-06-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Made my subscription back in a day" — 13-06-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Small price, big results" — 14-06-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""Signals are insanely accurate" — 15-06-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 16-06-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Made my subscription back in a day" — 17-06-2025",
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },
    {
      title: ""Best decision ever for trading" — 18-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Made my subscription back in a day" — 19-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 20-06-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""TP2 hit perfectly" — 21-06-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Super simple to follow" — 22-06-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Made my subscription back in a day" — 23-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""Made my subscription back in a day" — 24-06-2025",
      content: "Simple. Clear. Profitable. Can't ask for more at this price.",
    },
    {
      title: ""Best $9.95 USD I ever spent" — 25-06-2025",
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins.",
    },
    {
      title: ""Signals are insanely accurate" — 26-06-2025",
      content: "Low cost, huge value. TP1 hits so often. Highly recommended.",
    },
    {
      title: ""TP2 hit perfectly" — 27-06-2025",
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable.",
    },
    {
      title: ""TP1 smashed again" — 28-06-2025",
      content: "I no longer stress about trades. Signals are super easy and profitable.",
    },
    {
      title: ""Honest. Transparent. Profitable" — 29-06-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
    {
      title: ""TP2 hit perfectly" — 30-06-2025",
      content: "Not every trade wins, but most do. TP1 and TP2 hits are frequent. I love this platform.",
    },
    {
      title: ""Super simple to follow" — 01-07-2025",
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use.",
    },
  ]

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className="w-4 h-4 fill-current" style={{ color: "#27C48F" }} />
    ))
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">⭐ What Our Members Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real traders. Real results. Trusted by hundreds worldwide.
          </p>
        </div>

        {/* Reviews Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {reviewItems.map((review, index) => (
              <AccordionItem
                key={`review-${index}`}
                value={`review-${index}`}
                className="border rounded-xl px-6 py-2 hover:bg-opacity-70 transition-all duration-300"
                style={{
                  backgroundColor: "#111520",
                  borderColor: "#32A9E6",
                }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group" style={{ color: "#32A9E6" }}>
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="flex items-center gap-1 flex-shrink-0 mt-1">{renderStars()}</div>
                    <span className="text-lg font-semibold">{review.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="ml-20 text-white text-lg leading-relaxed">"{review.content}"</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Community</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the same success as our members. Start receiving daily AI-powered stock signals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white hover:bg-opacity-90 transition-all duration-300"
              style={{ backgroundColor: "#32A9E6" }}
            >
              Start Your Subscription
            </button>
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white border-2 hover:bg-white hover:text-gray-900 transition-all duration-300"
              style={{ borderColor: "#27C48F", color: "#27C48F" }}
            >
              View Example Signal
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
            <span>100+ Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
            <span>Verified Members</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
            <span>Real Results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
            <span>$9.95 USD/month</span>
          </div>
        </div>
      </div>
    </section>
  )
}
