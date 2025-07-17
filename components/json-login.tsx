"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, TrendingUp, Mail, Lock, Eye, EyeOff } from "lucide-react"

export function JsonLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Handle login logic here
    console.log("Login attempt:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">AIBuysStocks.com</h1>
        </div>

        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Login to Your Account</h2>
          <p className="text-lg text-white">Access your daily AI stock signals.</p>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl p-8 border border-gray-800 mb-8" style={{ backgroundColor: "#111520" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-white font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "#32A9E6" }} />
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
                placeholder="your.email@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-white font-medium flex items-center gap-2">
                <Lock className="w-4 h-4" style={{ color: "#32A9E6" }} />
                Password *
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 h-12 pr-12"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 text-lg font-semibold text-white hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
              style={{ backgroundColor: "#32A9E6" }}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </Button>

            {/* Links */}
            <div className="space-y-4 pt-4">
              <div className="text-center">
                <a
                  href="/forgot-password"
                  className="text-white hover:text-gray-300 transition-colors duration-300 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  href="/checkout"
                  className="text-white hover:text-gray-300 transition-colors duration-300 hover:underline"
                >
                  Don't have an account? Subscribe
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "#D9D9D9" }}>
            © 2025 AIBuysStocks.com — All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
