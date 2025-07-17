"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  TrendingUp,
  CreditCard,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  X,
  Settings,
  LogOut,
} from "lucide-react"
import { Footer } from "@/components/footer"

export function Dashboard() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    subscriptionStatus: "Active",
    nextBilling: "February 15, 2025",
  })

  const [todaysSignal] = useState({
    ticker: "NVDA",
    company: "NVIDIA Corporation",
    entry: 875.5,
    stopLoss: 820.0,
    takeProfit1: 920.0,
    takeProfit2: 965.0,
    status: "Open",
    date: "January 15, 2025",
  })

  const [signalHistory] = useState([
    {
      date: "Jan 14, 2025",
      stock: "AAPL",
      entry: 185.5,
      stopLoss: 175.0,
      tp1: 195.0,
      tp2: 205.0,
      status: "Hit TP1",
      profit: "+5.1%",
    },
    {
      date: "Jan 13, 2025",
      stock: "MSFT",
      entry: 420.0,
      stopLoss: 395.0,
      tp1: 445.0,
      tp2: 465.0,
      status: "Hit TP2",
      profit: "+10.7%",
    },
    {
      date: "Jan 12, 2025",
      stock: "TSLA",
      entry: 245.0,
      stopLoss: 225.0,
      tp1: 265.0,
      tp2: 285.0,
      status: "Stopped",
      profit: "-8.2%",
    },
    {
      date: "Jan 11, 2025",
      stock: "GOOGL",
      entry: 165.0,
      stopLoss: 155.0,
      tp1: 175.0,
      tp2: 185.0,
      status: "Hit TP1",
      profit: "+6.1%",
    },
    {
      date: "Jan 10, 2025",
      stock: "META",
      entry: 520.0,
      stopLoss: 490.0,
      tp1: 550.0,
      tp2: 580.0,
      status: "Hit TP2",
      profit: "+11.5%",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "#32A9E6"
      case "Hit TP1":
        return "#27C48F"
      case "Hit TP2":
        return "#27C48F"
      case "Stopped":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <TrendingUp className="w-4 h-4" />
      case "Hit TP1":
        return <CheckCircle className="w-4 h-4" />
      case "Hit TP2":
        return <CheckCircle className="w-4 h-4" />
      case "Stopped":
        return <X className="w-4 h-4" />
      default:
        return <AlertTriangle className="w-4 h-4" />
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome, {user.name}</h2>
          <p className="text-xl text-gray-300">Here is your AI stock signal for today.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Signal */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" style={{ color: "#32A9E6" }} />
                  Today's Signal - {todaysSignal.date}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Signal Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{todaysSignal.ticker}</h3>
                      <p className="text-gray-400">{todaysSignal.company}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="text-gray-400 text-sm">Entry Price</p>
                        <p className="text-white font-bold text-lg">${todaysSignal.entry}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="text-gray-400 text-sm">Stop Loss</p>
                        <p className="text-red-400 font-bold text-lg">${todaysSignal.stopLoss}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="text-gray-400 text-sm">Take Profit 1</p>
                        <p className="text-blue-400 font-bold text-lg">${todaysSignal.takeProfit1}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <p className="text-gray-400 text-sm">Take Profit 2</p>
                        <p className="text-blue-400 font-bold text-lg">${todaysSignal.takeProfit2}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Status:</span>
                      <div className="flex items-center gap-2" style={{ color: getStatusColor(todaysSignal.status) }}>
                        {getStatusIcon(todaysSignal.status)}
                        <span className="font-semibold">{todaysSignal.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-4">Signal Chart</h4>
                    <div className="relative h-48 bg-gray-900 rounded overflow-hidden">
                      <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute inset-0">
                        {/* Grid */}
                        <defs>
                          <pattern id="chart-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#chart-grid)" />

                        {/* Price Line */}
                        <path
                          d="M 20 120 L 60 110 L 100 115 L 140 105 L 180 100 L 220 95 L 260 90 L 300 85 L 340 80 L 380 75"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                        />

                        {/* Entry Line */}
                        <line
                          x1="180"
                          y1="0"
                          x2="180"
                          y2="200"
                          stroke="#27C48F"
                          strokeWidth="2"
                          strokeDasharray="3,3"
                        />
                        <line x1="0" y1="100" x2="400" y2="100" stroke="#27C48F" strokeWidth="1" opacity="0.7" />

                        {/* Stop Loss */}
                        <line x1="0" y1="140" x2="400" y2="140" stroke="#ef4444" strokeWidth="1" opacity="0.7" />

                        {/* Take Profits */}
                        <line x1="0" y1="70" x2="400" y2="70" stroke="#32A9E6" strokeWidth="1" opacity="0.7" />
                        <line x1="0" y1="40" x2="400" y2="40" stroke="#32A9E6" strokeWidth="1" opacity="0.7" />

                        {/* Labels */}
                        <text x="185" y="95" fill="#27C48F" fontSize="10" fontWeight="bold">
                          Entry
                        </text>
                        <text x="10" y="135" fill="#ef4444" fontSize="10" fontWeight="bold">
                          Stop
                        </text>
                        <text x="10" y="65" fill="#32A9E6" fontSize="10" fontWeight="bold">
                          TP1
                        </text>
                        <text x="10" y="35" fill="#32A9E6" fontSize="10" fontWeight="bold">
                          TP2
                        </text>

                        {/* Entry Point */}
                        <circle cx="180" cy="100" r="4" fill="#27C48F" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Signal History */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Signal History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left text-gray-400 font-medium py-3">Date</th>
                        <th className="text-left text-gray-400 font-medium py-3">Stock</th>
                        <th className="text-left text-gray-400 font-medium py-3">Entry</th>
                        <th className="text-left text-gray-400 font-medium py-3">Stop Loss</th>
                        <th className="text-left text-gray-400 font-medium py-3">TP1</th>
                        <th className="text-left text-gray-400 font-medium py-3">TP2</th>
                        <th className="text-left text-gray-400 font-medium py-3">Status</th>
                        <th className="text-left text-gray-400 font-medium py-3">P&L</th>
                      </tr>
                    </thead>
                    <tbody>
                      {signalHistory.map((signal, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/30">
                          <td className="text-gray-300 py-3">{signal.date}</td>
                          <td className="text-white font-semibold py-3">{signal.stock}</td>
                          <td className="text-gray-300 py-3">${signal.entry}</td>
                          <td className="text-red-400 py-3">${signal.stopLoss}</td>
                          <td className="text-blue-400 py-3">${signal.tp1}</td>
                          <td className="text-blue-400 py-3">${signal.tp2}</td>
                          <td className="py-3">
                            <div className="flex items-center gap-2" style={{ color: getStatusColor(signal.status) }}>
                              {getStatusIcon(signal.status)}
                              <span className="text-sm font-medium">{signal.status}</span>
                            </div>
                          </td>
                          <td
                            className={`py-3 font-semibold ${signal.profit.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                          >
                            {signal.profit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subscription Status */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5" style={{ color: "#32A9E6" }} />
                  Subscription
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Plan Status</p>
                  <p className="text-white font-semibold">Active - $9.95 USD/month</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Next Billing Date</p>
                  <p className="text-white font-semibold">{user.nextBilling}</p>
                </div>
                <div className="space-y-2 pt-2">
                  <Button
                    variant="outline"
                    className="w-full text-blue-400 border-blue-400 hover:bg-blue-400/10 bg-transparent"
                  >
                    Update Payment Info
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-red-400 border-red-400 hover:bg-red-400/10 bg-transparent"
                  >
                    Cancel Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Settings className="w-5 h-5" style={{ color: "#32A9E6" }} />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Name</label>
                  <Input defaultValue={user.name} className="bg-gray-800/50 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Email</label>
                  <Input defaultValue={user.email} className="bg-gray-800/50 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Password</label>
                  <Input type="password" placeholder="••••••••" className="bg-gray-800/50 border-gray-700 text-white" />
                </div>
                <Button className="w-full text-white" style={{ backgroundColor: "#32A9E6" }}>
                  Update Settings
                </Button>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" style={{ color: "#32A9E6" }} />
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">Need help? Our support team responds within 24 hours.</p>
                <Button className="w-full text-white" style={{ backgroundColor: "#32A9E6" }}>
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
