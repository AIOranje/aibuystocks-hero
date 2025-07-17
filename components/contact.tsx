"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Clock, CheckCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        // Handle error - you could show an error state here
        console.error("Contact form error:", result.error)
        alert(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#0B1426" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Reach out anytime. We reply within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div
              className="backdrop-blur-sm rounded-2xl p-8 border"
              style={{ backgroundColor: "#1A2B47", borderColor: "#2A4A6B" }}
            >
              {!isSubmitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "#32A9E6", opacity: 0.2 }}
                  >
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Us Directly</h3>
                  <p className="text-gray-300 mb-6">Send us an email and we'll get back to you within 24 hours.</p>
                  <a
                    href="mailto:info@aibuysstocks.com"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                    style={{ backgroundColor: "#32A9E6" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-5 h-5" />
                    info@aibuysstocks.com
                  </a>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#27C48F", opacity: 0.2 }}
                  >
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you have questions about our AI signals, need technical support, or want to learn more about our
                trading approach, we're here to help.
              </p>
            </div>

            {/* Contact Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#32A9E6" }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                  <p className="text-gray-400">We reply to all messages within 24 hours, usually much faster.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#27C48F" }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Direct Support</h4>
                  <p className="text-gray-400">Get help directly from our team of experienced traders.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#32A9E6" }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Personalized Help</h4>
                  <p className="text-gray-400">Every question gets a thoughtful, personalized response.</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-xl p-6 border" style={{ backgroundColor: "#1A2B47", borderColor: "#2A4A6B" }}>
              <h4 className="text-white font-semibold mb-3">Common Questions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• How to get started with signals</li>
                <li>• Technical analysis explanations</li>
                <li>• Account and billing support</li>
                <li>• Trading platform integration</li>
                <li>• Risk management guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 pt-12 border-t text-center" style={{ borderColor: "#2A4A6B" }}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
              <span>Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#32A9E6" }}></div>
              <span>Personalized Help</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#27C48F" }}></div>
              <span>No Question Too Small</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
