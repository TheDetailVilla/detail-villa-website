"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "Absolutely incredible service! My car looks better than when I first bought it. The team was professional, punctual, and the attention to detail was outstanding.",
    },
    {
      name: "Michael Chen",
      location: "Santa Monica, CA",
      rating: 5,
      text: "The Detail Villa exceeded all my expectations. The ceramic coating service was worth every penny. My car still looks amazing months later!",
    },
    {
      name: "Emily Rodriguez",
      location: "Manhattan Beach, CA",
      rating: 5,
      text: "Convenient, professional, and high-quality work. I love that they come to my location. Will definitely be using their services regularly.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300">Don't just take our word for it - hear from our satisfied customers.</p>
        </div>

        <div className="relative">
          <Card className="bg-gray-900 border-gray-700 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic">"{testimonials[currentIndex].text}"</blockquote>
              <div>
                <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">{testimonials[currentIndex].location}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
