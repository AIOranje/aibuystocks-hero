"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star } from "lucide-react"

export function CustomerReviewsAccordion() {
  const reviewItems = [
    {
      title: "Best decision ever for trading — 24-03-2025",
      content: "Incredible service. I don't need to do any analysis. Just follow the signals. Easy profits."
    },
    {
      title: '"Honest. Transparent. Profitable" — 25-03-2025',
      content: "Incredible service. I don't need to do any analysis. Just follow the signals. Easy profits."
    },
    {
      title: '"TP1 smashed again" — 26-03-2025',
      content: "For only $9.95 USD/month this is unbeatable. The signals are super accurate and easy to use."
    },
    {
      title: '"Doubled my account" — 27-03-2025',
      content: "Incredible service. I don't need to do any analysis. Just follow the signals. Easy profits."
    },
    {
      title: '"Made my subscription back in a day" — 28-03-2025',
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins."
    },
    {
      title: '"Signals are insanely accurate" — 29-03-2025',
      content: "This service is a game changer. I followed signals like QUBT and CRCL — huge wins."
    },
    {
      title: '"TP1 smashed again" — 30-03-2025',
      content: "Incredible service. I don't need to do any analysis. Just follow the signals. Easy profits."
    },
    {
      title: '"Signals are insanely accurate" — 31-03-2025',
      content: "Clear signals, TP1 and TP2 hit regularly. Perfect for beginners and pros. Very affordable."
    }
  ]

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className="w-4 h-4 fill-current" style={{ color: "#27C48F" }} />
    ))
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">⭐ What Our Members Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real traders. Real results. Trusted by hundreds worldwide.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {reviewItems.map((review, index) => (
              <AccordionItem
                key={`review-${index}`}
                value={`review-${index}`}
                className="border rounded-xl px-6 py-2 hover:bg-opacity-70 transition-all duration-300"
                style={{ backgroundColor: "#111520", borderColor: "#32A9E6" }}
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
