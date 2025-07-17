"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, TrendingUp, Lock, CreditCard, User, Mail, MapPin } from "lucide-react"

export function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    // Handle Stripe checkout logic here
    console.log("Stripe checkout initiated:", formData)
  }

  return (
    <div className="min-h-screen py-12 px-6" style={{ backgroundColor: "#0A0D18" }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide mb-8">AIBuysStocks.com</h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Subscription</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get daily AI-powered stock signals — including entry, stop loss, and two take profits. Only{" "}
            <span style={{ color: "#32A9E6" }} className="font-bold text-2xl">
              $9.95 USD/month.
            </span>{" "}
            Cancel anytime.
          </p>
        </div>

        {/* Checkout Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6" style={{ color: "#32A9E6" }} />
            <h3 className="text-2xl font-bold text-white">Secure Checkout</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Personal Information</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium flex items-center gap-2">
                    <User className="w-4 h-4" style={{ color: "#32A9E6" }} />
                    Full Name
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
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" style={{ color: "#32A9E6" }} />
                    Email Address
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
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5" style={{ color: "#32A9E6" }} />
                Credit Card Information
              </h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="text-white font-medium">
                    Card Number
                  </label>
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
                  <div className="space-y-2">
                    <label htmlFor="expiryDate" className="text-white font-medium">
                      Expiry Date
                    </label>
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
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cvv" className="text-white font-medium">
                      CVV
                    </label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="text"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5" style={{ color: "#32A9E6" }} />
                Billing Address
              </h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="address" className="text-white font-medium">
                    Street Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-white font-medium">
                      City
                    </label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                      placeholder="New York"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="postalCode" className="text-white font-medium">
                      Postal Code
                    </label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12"
                      placeholder="10001"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-white font-medium">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white h-12 rounded-md px-3 focus:border-blue-400 focus:ring-blue-400 w-full"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="ES">Spain</option>
                      <option value="IT">Italy</option>
                      <option value="NL">Netherlands</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <span className="text-white text-lg font-semibold">AI Stock Signals Subscription</span>
                <span className="text-2xl font-bold" style={{ color: "#32A9E6" }}>
                  $9.95 USD/month
                </span>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <p>✓ Daily AI-powered stock signals</p>
                <p>✓ Entry, stop loss, and take profit levels</p>
                <p>✓ Visual charts and analysis</p>
                <p>✓ No contracts. Cancel anytime. Instant access to your dashboard.</p>
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
                  Processing Payment...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Start Subscription
                </div>
              )}
            </Button>
          </form>

          {/* Security Info */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
              <Lock className="w-4 h-4" />
              <span>🔒 Secure payment powered by Stripe.</span>
            </div>

            {/* Credit Card Icons */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-gray-400 text-xs">We accept:</div>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-400 text-sm">
          <p>
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
