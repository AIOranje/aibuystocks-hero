import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { SignalShowcase } from "@/components/signal-showcase"
import { SuccessfulTradesUSD } from "@/components/successful-trades-usd"
import { WhyAreWeSoCheap } from "@/components/why-are-we-so-cheap"
import { AboutUs } from "@/components/about-us"
import { TestimonialsDropdown } from "@/components/testimonials-dropdown"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LiveSalesNotifications } from "@/components/live-sales-notifications"
import { BrokerShowcase } from "@/components/broker-showcase"

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0B1426" }}>
      <HeroSection />
      <HowItWorks />
      <SignalShowcase />
      <SuccessfulTradesUSD />
      <WhyAreWeSoCheap />
      <AboutUs />
      <TestimonialsDropdown />
      <FAQ />
      <Contact />
      <BrokerShowcase />
      <Footer />
      <LiveSalesNotifications />
    </main>
  )
}
