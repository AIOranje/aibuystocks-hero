"use client"

import { useEffect, useState } from "react"

export function PayPalSubscriptionButton() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPayPal, setShowPayPal] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load PayPal SDK
    const loadPayPalScript = () => {
      if (window.paypal) {
        setIsLoading(false)
        return
      }

      const script = document.createElement("script")
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AcD0BZEIFfvLPw31tu2UBRpI-cZBEUlVISaq440a9tfErdbdLIG2FjtNBLGPyIfR8BTBteEI2e-_7EBL&vault=true&intent=subscription&locale=en_US"
      script.setAttribute("data-sdk-integration-source", "button-factory")

      script.onload = () => {
        setIsLoading(false)
      }

      script.onerror = () => {
        setError("Failed to load PayPal. Please refresh the page and try again.")
        setIsLoading(false)
      }

      document.head.appendChild(script)
    }

    loadPayPalScript()
  }, [])

  useEffect(() => {
    if (!showPayPal || isLoading || !window.paypal) return

    const renderPayPalButton = () => {
      const container = document.getElementById("paypal-container")
      if (!container) return

      // Clear any existing buttons
      container.innerHTML = ""

      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription: (data: any, actions: any) => {
            setIsProcessing(true)
            return actions.subscription.create({
              plan_id: "P-2HD23974SE560601MNBXIH2A",
            })
          },
          onApprove: (data: any, actions: any) => {
            setIsProcessing(false)
            alert(`Subscription successful! Your subscription ID is: ${data.subscriptionID}`)
            setShowPayPal(false)
          },
          onError: (err: any) => {
            setIsProcessing(false)
            console.error("PayPal error:", err)
            setError("Payment failed. Please try again.")
            setShowPayPal(false)
          },
          onCancel: () => {
            setIsProcessing(false)
            setShowPayPal(false)
          },
        })
        .render("#paypal-container")
    }

    renderPayPalButton()
  }, [showPayPal, isLoading])

  const handleStartNowClick = () => {
    if (isLoading) return
    setError(null)
    setShowPayPal(true)
  }

  const handleBackClick = () => {
    setShowPayPal(false)
    setError(null)
  }

  if (error) {
    return (
      <div className="text-center">
        <div className="text-red-400 mb-4">{error}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    )
  }

  if (showPayPal) {
    return (
      <div className="text-center">
        {isProcessing && <div className="mb-4 text-blue-400">Processing your payment...</div>}
        <div id="paypal-container" className="mb-4"></div>
        <button
          onClick={handleBackClick}
          className="text-gray-400 hover:text-white text-sm underline"
          disabled={isProcessing}
        >
          ← Back to Start Now
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleStartNowClick}
        disabled={isLoading}
        className="px-7 py-3 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: "#00c48c",
          fontSize: "16px",
          minWidth: "140px",
        }}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Loading...
          </span>
        ) : (
          "Start Now"
        )}
      </button>

      <div className="flex items-center gap-2">
        <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* PayPal Logo Icon - Simplified */}
          <g>
            {/* First P - Dark Blue */}
            <path d="M3 2h6.5c3.8 0 6.8 3.1 6.8 6.9 0 3.8-2.9 6.9-6.8 6.9h-3.9l-1 4.8H2L3 2z" fill="#003087" />

            {/* Second P - Light Blue */}
            <path d="M12 2h6.5c3.8 0 6.8 3.1 6.8 6.9 0 3.8-2.9 6.9-6.8 6.9h-3.9l-1 4.8H11L12 2z" fill="#0070BA" />
          </g>
        </svg>

        <span className="text-white font-semibold text-lg tracking-wide">
          Pay<span className="text-[#0070BA]">Pal</span>
        </span>
      </div>
    </div>
  )
}
