"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  {
    id: 1,
    title: "BMW X5 - The Estate Elegance",
    before: "/placeholder.svg?height=300&width=400&text=Before",
    after: "/placeholder.svg?height=300&width=400&text=After",
    service: "The Estate Elegance",
    description: "Complete transformation with paint correction and ceramic coating",
  },
  {
    id: 2,
    title: "Mercedes-Benz GLE - Interior Detail",
    before: "/placeholder.svg?height=300&width=400&text=Before",
    after: "/placeholder.svg?height=300&width=400&text=After",
    service: "The Hacienda",
    description: "Deep interior cleaning and leather conditioning",
  },
  {
    id: 3,
    title: "Tesla Model S - Ceramic Coating",
    before: "/placeholder.svg?height=300&width=400&text=Before",
    after: "/placeholder.svg?height=300&width=400&text=After",
    service: "Ceramic Coating",
    description: "Professional ceramic coating application for long-lasting protection",
  },
  {
    id: 4,
    title: "Porsche 911 - Paint Correction",
    before: "/placeholder.svg?height=300&width=400&text=Before",
    after: "/placeholder.svg?height=300&width=400&text=After",
    service: "Paint Correction",
    description: "Multi-stage paint correction removing years of swirl marks",
  },
  {
    id: 5,
    title: "Range Rover Sport - Full Detail",
    before: "/placeholder.svg?height=300&width=400&text=Before",
    after: "/placeholder.svg?height=300&width=400&text=After",
    service: "The Estate Elegance",
    description: "Complete interior and exterior transformation",
  },
  {
    id: 6,
    title: "Audi Q7 - Maintenance Detail",
    before: "/placeholder.svg?height=300&width=400&text=Before",
    after: "/placeholder.svg?height=300&width=400&text=After",
    service: "Maintenance Detail",
    description: "Regular maintenance keeping the vehicle in pristine condition",
  },
]

interface GalleryProps {
  showAll?: boolean
  limit?: number
}

export default function Gallery({ showAll = false, limit = 6 }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [currentView, setCurrentView] = useState<"before" | "after">("before")

  const displayImages = showAll ? galleryImages : galleryImages.slice(0, limit)

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the incredible transformations we achieve with our professional detailing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayImages.map((image) => (
            <Card
              key={image.id}
              className="bg-gray-900 border-gray-700 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={image.before || "/placeholder.svg"}
                    alt={`${image.title} - Before`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    Before
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={image.after || "/placeholder.svg"}
                    alt={`${image.title} - After`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    After
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{image.title}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-2">{image.service}</p>
                  <p className="text-gray-400 text-sm">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Full Gallery</Button>
            </Link>
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">{selectedImage.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <div className="flex bg-gray-800 rounded-lg p-1">
                    <Button
                      variant={currentView === "before" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentView("before")}
                      className={
                        currentView === "before" ? "bg-red-600 hover:bg-red-700" : "text-gray-400 hover:text-white"
                      }
                    >
                      Before
                    </Button>
                    <Button
                      variant={currentView === "after" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentView("after")}
                      className={
                        currentView === "after" ? "bg-green-600 hover:bg-green-700" : "text-gray-400 hover:text-white"
                      }
                    >
                      After
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={currentView === "before" ? selectedImage.before : selectedImage.after}
                    alt={`${selectedImage.title} - ${currentView}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="text-blue-400 font-medium mb-2">{selectedImage.service}</p>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export { galleryImages }
