"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="/FullLogo_Transparent.png" alt="The Detail Villa Logo" className="h-11 w-11" />
            <Link href="/" className="text-2xl font-bold text-blue-400">
              The Detail Villa
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a 
            href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400"
                  onClick={() => {
                    setIsOpen(false)
                    window.scrollTo(0, 0)
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Book Now</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
