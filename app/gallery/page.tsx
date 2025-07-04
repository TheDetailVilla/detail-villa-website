import Gallery from "@/components/gallery"
import { Button } from "@/components/ui/button"
import { Camera, Award, Sparkles } from "lucide-react"

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Camera className="w-16 h-16 text-blue-200" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-blue-100 mb-8">
            Witness the incredible transformations we achieve with our professional mobile detailing services. Each
            image tells a story of dedication, skill, and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book Your Transformation
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

      {/* Gallery */}
      <Gallery showAll={true} />

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every transformation follows our proven process to ensure consistent, exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
              <p className="text-gray-400">
                We thoroughly inspect your vehicle to identify specific needs and create a customized treatment plan.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Treatment</h3>
              <p className="text-gray-400">
                Using premium products and professional techniques, we carefully restore and protect every surface.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transformation</h3>
              <p className="text-gray-400">
                Your vehicle emerges with renewed beauty, protection, and that coveted showroom shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Vehicles Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">3+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Award className="w-16 h-16 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied customers who have experienced the Detail Villa difference. Your vehicle's
            transformation is just one appointment away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Detail
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
