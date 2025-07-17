"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, TrendingUp, LogOut, Instagram, Linkedin, Twitter, Send, CheckCircle, X, Target } from "lucide-react"

export function JsonDashboard() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
  })

  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSupportFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSupportForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSupportForm({ name: "", email: "", message: "" })
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "TP2 Hit":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "TP1 Hit":
        return <Target className="w-4 h-4 text-blue-400" />
      case "Stopped Out":
        return <X className="w-4 h-4 text-red-400" />
      default:
        return <div className="w-4 h-4 rounded-full bg-gray-400"></div>
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "TP2 Hit":
        return "text-green-400"
      case "TP1 Hit":
        return "text-blue-400"
      case "Stopped Out":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">AIBuysStocks.com</h1>
              <p className="text-gray-400 text-sm">Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white font-medium">{user.name}</p>
              <p className="text-gray-400 text-sm">{user.email}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-400 border-gray-700 hover:bg-gray-800 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome to Your Dashboard</h2>
          <p className="text-xl text-white">Here's your AI stock signal for today's trading session.</p>
        </div>

        {/* Today's Signal Card */}
        <Card className="border-gray-800" style={{ backgroundColor: "#111520" }}>
          <CardHeader>
            <CardTitle className="text-white">Today's Signal – NVDA (NVIDIA Corporation)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Signal Details */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-green-400">✅</span>
                    <span>Entry: $12.96</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-red-400">❌</span>
                    <span>Stop Loss: $10.26</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-blue-400">🎯</span>
                    <span>Take Profit 1: $17.33</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="text-blue-400">🎯</span>
                    <span>Take Profit 2: $21.70</span>
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <div className="text-center">
                  <img
                    src="/images/trading-chart-example.png"
                    alt="Trading chart showing signal levels"
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Signal History Table */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Signal History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-white font-medium py-3">Date</th>
                    <th className="text-left text-white font-medium py-3">Ticker</th>
                    <th className="text-left text-white font-medium py-3">Entry</th>
                    <th className="text-left text-white font-medium py-3">Stop</th>
                    <th className="text-left text-white font-medium py-3">TP1</th>
                    <th className="text-left text-white font-medium py-3">TP2</th>
                    <th className="text-left text-white font-medium py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="text-gray-300 py-3">2025-07-01</td>
                    <td className="text-white font-semibold py-3">NVDA</td>
                    <td className="text-gray-300 py-3">$12.96</td>
                    <td className="text-red-400 py-3">$10.26</td>
                    <td className="text-blue-400 py-3">$17.33</td>
                    <td className="text-blue-400 py-3">$21.70</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon("TP2 Hit")}
                        <span className={`text-sm font-medium ${getStatusColor("TP2 Hit")}`}>TP2 Hit</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="text-gray-300 py-3">2025-06-30</td>
                    <td className="text-white font-semibold py-3">TSLA</td>
                    <td className="text-gray-300 py-3">$7.40</td>
                    <td className="text-red-400 py-3">$6.20</td>
                    <td className="text-blue-400 py-3">$9.50</td>
                    <td className="text-blue-400 py-3">$11.00</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon("TP1 Hit")}
                        <span className={`text-sm font-medium ${getStatusColor("TP1 Hit")}`}>TP1 Hit</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/30">
                    <td className="text-gray-300 py-3">2025-06-29</td>
                    <td className="text-white font-semibold py-3">AAPL</td>
                    <td className="text-gray-300 py-3">$150</td>
                    <td className="text-red-400 py-3">$143</td>
                    <td className="text-blue-400 py-3">$165</td>
                    <td className="text-blue-400 py-3">$180</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        {getStatusIcon("Stopped Out")}
                        <span className={`text-sm font-medium ${getStatusColor("Stopped Out")}`}>Stopped Out</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subscription Status Card */}
          <Card className="border-gray-800" style={{ backgroundColor: "#111520" }}>
            <CardHeader>
              <CardTitle className="text-white">Subscription Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-white">
                <p>Plan: Active – $9.95 USD/month</p>
                <p>Next billing date: February 15, 2025</p>
                <p className="text-gray-300">Manage your subscription below.</p>
              </div>
              <div className="space-y-3 pt-4">
                <Button
                  variant="outline"
                  className="w-full text-red-400 border-red-400 hover:bg-red-400/10 bg-transparent"
                >
                  Cancel Subscription
                </Button>
                <Button className="w-full text-white" style={{ backgroundColor: "#32A9E6" }}>
                  Update Payment Info
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support Form */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Contact Support</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSupportSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="support-name" className="text-white font-medium">
                    Name *
                  </label>
                  <Input
                    id="support-name"
                    name="name"
                    type="text"
                    value={supportForm.name}
                    onChange={handleSupportFormChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="support-email" className="text-white font-medium">
                    Email *
                  </label>
                  <Input
                    id="support-email"
                    name="email"
                    type="email"
                    value={supportForm.email}
                    onChange={handleSupportFormChange}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="support-message" className="text-white font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="support-message"
                    name="message"
                    value={supportForm.message}
                    onChange={handleSupportFormChange}
                    required
                    rows={4}
                    className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white"
                  style={{ backgroundColor: "#32A9E6" }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="pt-16 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" style={{ color: "#32A9E6" }} />
                <TrendingUp className="w-6 h-6" style={{ color: "#27C48F" }} />
                <span className="text-white font-bold">AIBuysStocks.com</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered stock signals for smarter trading</p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", url: "/" },
                  { label: "How It Works", url: "/how-it-works" },
                  { label: "Pricing", url: "/pricing" },
                  { label: "FAQ", url: "/faq" },
                  { label: "Contact", url: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm" style={{ color: "#D9D9D9" }}>
              © 2025 AIBuysStocks.com — All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
