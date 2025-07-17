"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, TrendingUp, Lock, CreditCard } from "lucide-react"

export function StreamlinedCheckout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate Stripe payment processing
    await new Promise((resolve) => setTimeout(resolve, 2500))

    setIsProcessing(false)
    // Redirect to Stripe Checkout or handle payment
    console.log("Stripe checkout initiated:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide mb-8">AIBuysStocks.com</h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Subscription</h2>
          <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
            Get daily AI-powered stock signals with entry, stop loss, and two take profits. Only{" "}
            <span style={{ color: "#32A9E6" }} className="font-bold text-xl">
              $9.95 USD/month.
            </span>{" "}
            Cancel anytime.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-white font-medium">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-white font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                placeholder="john@example.com"
              />
            </div>

            {/* Card Information */}
            <div className="space-y-4">
              <label className="text-white font-medium flex items-center gap-2">
                <CreditCard className="w-4 h-4" style={{ color: "#32A9E6" }} />
                Card Information *
              </label>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    type="text"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  <Input
                    id="cvv"
                    name="cvv"
                    type="text"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                    placeholder="CVV"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full h-14 text-lg font-semibold text-white hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
              style={{ backgroundColor: "#32A9E6" }}
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                "Start Subscription"
              )}
            </Button>

            {/* Security Note */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Lock className="w-4 h-4" />
                <span>🔒 Secure payment powered by Stripe.</span>
              </div>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "#D9D9D9" }}>
            By subscribing, you agree to the{" "}
            <a href="#" className="hover:text-white underline" style={{ color: "#32A9E6" }}>
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="hover:text-white underline" style={{ color: "#32A9E6" }}>
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
