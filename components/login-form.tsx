"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, TrendingUp, Mail, Lock, Eye, EyeOff } from "lucide-react"

export function LoginForm() {
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
    <div className="w-full max-w-md">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0">
          <defs>
            <pattern id="login-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#32A9E6" opacity="0.3" />
              <circle cx="60" cy="40" r="1" fill="#27C48F" opacity="0.3" />
              <circle cx="100" cy="20" r="1" fill="#32A9E6" opacity="0.3" />
              <circle cx="40" cy="80" r="1" fill="#27C48F" opacity="0.3" />
              <circle cx="80" cy="100" r="1" fill="#32A9E6" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#login-pattern)" />
        </svg>
      </div>

      {/* Login Card */}
      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8" style={{ color: "#32A9E6" }} />
              <TrendingUp className="w-8 h-8" style={{ color: "#27C48F" }} />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">AIBuysStocks.com</h1>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Login to Your Account</h2>
          <p className="text-gray-400">Access your daily AI stock signals</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-white font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" style={{ color: "#32A9E6" }} />
              Email
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
              Password
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
        </form>

        {/* Forgot Password Link */}
        <div className="text-center mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="font-semibold hover:underline transition-colors duration-300"
              style={{ color: "#32A9E6" }}
            >
              Subscribe Now
            </a>
          </p>
        </div>

        {/* Security Badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Lock className="w-4 h-4" />
          <span>Secure login with 256-bit encryption</span>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="text-center mt-8">
        <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
