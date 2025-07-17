import { Button } from "@/components/ui/button"
import { Star, User } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Super simple. I just follow the signal every day. No more stress, no overthinking.",
      author: "Alex J.",
    },
    {
      id: 2,
      rating: 5,
      text: "Best $9.95 USD I spend every month. Clear signals, perfect for busy traders like me.",
      author: "Megan W.",
    },
    {
      id: 3,
      rating: 5,
      text: "No more paying $200 USD/month for complicated platforms. This works.",
      author: "David S.",
    },
    {
      id: 4,
      rating: 5,
      text: "I love the simplicity. Entry, stop, take profit. Done. Easy to follow.",
      author: "Liam R.",
    },
    {
      id: 5,
      rating: 5,
      text: "Since joining, I've had more winning trades than ever. AI for the win!",
      author: "Isabella G.",
    },
    {
      id: 6,
      rating: 5,
      text: "The best part? I don't have to scan or analyze anything. AI does the work.",
      author: "Noah P.",
    },
    {
      id: 7,
      rating: 5,
      text: "Clear, accurate, and affordable. Highly recommend this to every trader.",
      author: "Emma D.",
    },
    {
      id: 8,
      rating: 5,
      text: "The daily signals are top-notch. Totally worth it.",
      author: "Michael T.",
    },
    {
      id: 9,
      rating: 5,
      text: "Take my money. Seriously, this saves me hours every day.",
      author: "Sofia M.",
    },
    {
      id: 10,
      rating: 5,
      text: "I was skeptical… but it's legit. Great results, great support.",
      author: "Ethan V.",
    },
    {
      id: 11,
      rating: 5,
      text: "This is exactly what traders need. No fluff, just signals.",
      author: "Olivia K.",
    },
    {
      id: 12,
      rating: 5,
      text: "I follow the signals every morning before work. Simple and effective.",
      author: "James L.",
    },
    {
      id: 13,
      rating: 5,
      text: "Finally, a service that delivers what it promises. Consistent and reliable.",
      author: "Ryan H.",
    },
    {
      id: 14,
      rating: 5,
      text: "The AI signals have improved my trading success rate significantly.",
      author: "Grace C.",
    },
    {
      id: 15,
      rating: 5,
      text: "Perfect for part-time traders. I check once a day and I'm done.",
      author: "Marcus B.",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-current" : "fill-none"}`}
        style={{ color: "#27C48F" }}
      />
    ))
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Members Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real traders. Real results. Trusted by hundreds worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300 hover:border-gray-700 hover:shadow-lg"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">{renderStars(testimonial.rating)}</div>

              {/* Review Text */}
              <blockquote className="text-white text-sm leading-relaxed mb-4 font-medium">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">– {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: "#27C48F" }}>
              4.9/5
            </div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: "#32A9E6" }}>
              95%
            </div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
            <p className="text-gray-300 mb-6">Join hundreds of traders using AI-powered stock signals daily.</p>
            <Button
              size="lg"
              className="text-lg px-8 py-4 font-semibold text-white hover:bg-opacity-90 transition-all duration-300"
              style={{ backgroundColor: "#32A9E6" }}
            >
              Start Your Subscription
            </Button>
            <p className="text-gray-400 text-sm mt-4">$9.95 USD/month • Cancel anytime • No setup required</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
              <span>Real Traders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
              <span>Authentic Feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
              <span>Growing Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
