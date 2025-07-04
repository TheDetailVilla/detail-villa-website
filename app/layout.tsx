import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Detail Villa - Premium Mobile Detailing",
  description: "Luxury mobile car detailing services at your location. Professional, eco-friendly, and convenient.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} ${playfair.className} bg-gray-900 text-white`}>
        <Navigation />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
