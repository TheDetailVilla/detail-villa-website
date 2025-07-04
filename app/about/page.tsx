import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Leaf, Clock, Award, Users, MapPin } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Excellence",
      description: "We strive for perfection in every detail, using only premium products and proven techniques.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-600" />,
      title: "Sustainability",
      description: "Eco-friendly products and water-saving methods that protect both your car and the environment.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Service",
      description: "Customer satisfaction is our priority. We go above and beyond to exceed expectations.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Reliability",
      description: "Punctual, professional service that respects your time and schedule.",
    },
  ]

  const stats = [
    { number: "50+", label: "Happy Customers" },
    { number: "50+", label: "Vehicles Detailed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About The Detail Villa</h1>
              <p className="text-xl text-blue-100 mb-8">
                We are a locally owned detailing business located in the El Paso Area. We provide 3+ years of experience with dozens of happy customers as well as dozens of other vehicles professionally cleaned and maintenance. We're passionate about transforming vehicles and exceeding expectations. Our mobile detailing service brings professional-grade care directly to your location, combining convenience with uncompromising quality.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </div>
            <div className="relative">
              <img
                src="/FullLogo_Transparent.png"
                alt="The Detail Villa Logo"
                className="rounded-lg shadow-lg w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The Detail Villa was founded with a simple mission: to provide luxury car care services that fit into your
              busy lifestyle. We recognized that car enthusiasts and busy professionals needed a better solution than
              traditional car washes and inconvenient shop visits. Our mobile service brings professional detailing
              directly to your home or office, saving you time while delivering exceptional results.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What started as a passion project has grown into a trusted service that hundreds of customers rely on to
              keep their vehicles looking their best. We've built our reputation on attention to detail, premium
              products, and personalized service that treats every vehicle as if it were our own.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure every customer receives the exceptional service
              they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">By the Numbers</h2>
            <p className="text-xl text-blue-100">Our track record speaks for itself</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose The Detail Villa?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Professional Equipment</h3>
                    <p className="text-gray-300">
                      We use commercial-grade equipment and premium products that deliver superior results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Trained Technicians</h3>
                    <p className="text-gray-300">
                      Our team is trained in the latest techniques and continuously educated on new methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Fully Insured</h3>
                    <p className="text-gray-300">
                      Complete insurance coverage gives you peace of mind during every service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Satisfaction Guarantee</h3>
                    <p className="text-gray-300">
                      We stand behind our work with a 100% satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/car.jpg"
                alt="Professional car detailing process"
                className="rounded-lg shadow-lg w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <MapPin className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Service Area</h2>
          <p className="text-xl text-gray-300 mb-8">
            We proudly serve customers throughout the El Paso area, bringing our premium mobile detailing services
            directly to your location.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-3">El Paso</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>East Side</li>
                  <li>West Side</li>
                  <li>Northeast</li>
                  <li>Central</li>
                  <li>And surrounding areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-3">Canutillo</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>Canutillo Proper</li>
                  <li>Vinton</li>
                  <li>Westway</li>
                  <li>And surrounding areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-3">Horizon</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>Horizon City</li>
                  <li>Montana Vista</li>
                  <li>And surrounding areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-3">Socorro</h3>
                <ul className="text-gray-400 space-y-1">
                  <li>Socorro Proper</li>
                  <li>San Elizario</li>
                  <li>And surrounding areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied customers who trust The Detail Villa with their vehicles. Book your appointment
            today and discover why we're the premier mobile detailing service in the El Paso area.
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
