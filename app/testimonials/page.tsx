"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      vehicle: "2023 BMW X5",
      rating: 5,
      text: "Absolutely incredible service! My car looks better than when I first bought it. The team was professional, punctual, and the attention to detail was outstanding. The ceramic coating they applied has kept my car looking pristine for months.",
      service: "The Estate Elegance + Ceramic Coating",
    },
    {
      name: "Michael Chen",
      location: "Santa Monica, CA",
      vehicle: "2022 Tesla Model S",
      rating: 5,
      text: "The Detail Villa exceeded all my expectations. The ceramic coating service was worth every penny. My car still looks amazing months later! The hydrophobic properties are incredible - water just beads right off.",
      service: "Ceramic Coating Package",
    },
    {
      name: "Emily Rodriguez",
      location: "Manhattan Beach, CA",
      vehicle: "2021 Porsche 911",
      rating: 5,
      text: "Convenient, professional, and high-quality work. I love that they come to my location. The paint correction they did removed years of swirl marks. Will definitely be using their services regularly.",
      service: "Paint Correction + The Hacienda",
    },
    {
      name: "David Thompson",
      location: "Newport Beach, CA",
      vehicle: "2020 Range Rover Sport",
      rating: 5,
      text: "I've been using The Detail Villa for over a year now with their maintenance program. My Range Rover always looks showroom ready. The team is reliable, professional, and uses top-quality products.",
      service: "Monthly Maintenance Detail",
    },
    {
      name: "Lisa Park",
      location: "West Hollywood, CA",
      vehicle: "2023 Mercedes-Benz GLE",
      rating: 5,
      text: "The interior detail was phenomenal! They removed pet hair and odors that I thought were permanent. The leather conditioning made my seats look and feel like new. Highly recommend their services.",
      service: "The Hacienda + Pet Hair Removal",
    },
    {
      name: "Robert Martinez",
      location: "Thousand Oaks, CA",
      vehicle: "2019 Audi Q7",
      rating: 5,
      text: "Professional service from start to finish. The paint protection film installation was flawless, and the team explained everything they were doing. Great value for the level of service provided.",
      service: "Paint Protection Film",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-blue-100">
            Don't just take our word for it - hear from our satisfied customers who trust us with their vehicles.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Card className="bg-gray-800 border-gray-700 shadow-xl border-0">
              <CardContent className="p-12 text-center">
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />

                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-300 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="mb-4">
                  <p className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-400">{testimonials[currentIndex].location}</p>
                  <p className="text-blue-400 font-medium">{testimonials[currentIndex].vehicle}</p>
                </div>

                <div className="inline-block bg-gray-700 px-4 py-2 rounded-full">
                  <p className="text-sm text-blue-300 font-medium">Service: {testimonials[currentIndex].service}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full p-3 bg-transparent">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full p-3 bg-transparent">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">All Reviews</h2>
            <p className="text-xl text-gray-300">
              Read what our customers have to say about their experience with The Detail Villa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-300 mb-4 italic text-sm leading-relaxed">
                    "{testimonial.text.length > 150 ? testimonial.text.substring(0, 150) + "..." : testimonial.text}"
                  </blockquote>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    <p className="text-blue-400 text-sm font-medium">{testimonial.vehicle}</p>
                    <p className="text-gray-500 text-xs mt-2">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the same exceptional service that has earned us these amazing reviews. Book your appointment
            today and see why our customers keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Your Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
