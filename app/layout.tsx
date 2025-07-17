import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { VacationBanner } from "@/components/vacation-banner"
import { ContentProtection } from "@/components/content-protection"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Login - AIBuysStocks.com",
  description: "Login to access your daily AI-powered stock signals and trading dashboard.",
  viewport: "width=device-width, initial-scale=1.0",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className} style={{ backgroundColor: "#0B1426" }}>
        <VacationBanner />
        <ContentProtection />
        {children}
      </body>
    </html>
  )
}
