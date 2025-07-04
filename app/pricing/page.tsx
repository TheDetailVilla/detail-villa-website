import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Calendar, Shield, Sparkles, Palette } from "lucide-react"

export default function PricingPage() {
  const packages = [
    {
      name: "The Casita",
      description: "Essential exterior care for your vehicle",
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      services: [
        "Exterior foam bath",
        "Hand wash",
        "Clean wheels and tires",
        "Clean door jambs",
        "Windows cleaned outside",
        "UV-protected exterior plastics",
        "UV-protected tires",
      ],
      pricing: {
        compact: "$90",
        midsize: "$110",
        large: "$130",
      },
      duration: "45-60 minutes",
      ideal: "Regular maintenance and basic exterior care",
    },
    {
      name: "The Hacienda",
      description: "Complete interior & exterior detailing",
      icon: <Star className="w-8 h-8 text-blue-600" />,
      services: [
        "Everything in The Casita",
        "Deep interior vacuum",
        "All surfaces wiped and protected",
        "Clean flooring",
        "Clean seats",
        "Windows cleaned in and out",
        "Air freshener",
      ],
      pricing: {
        compact: "$165",
        midsize: "$195",
        large: "$235",
      },
      duration: "90-120 minutes",
      ideal: "Comprehensive cleaning inside and out",
      popular: true,
    },
    {
      name: "The Estate Elegance",
      description: "Premium full-service luxury detail",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      services: [
        "Everything in The Hacienda",
        "Iron decontamination",
        "Clay bar treatment",
        "Hydro sealant to protect paint",
        "Engine bay cleaning",
      ],
      pricing: {
        compact: "$275",
        midsize: "$305",
        large: "$345",
      },
      duration: "150-180 minutes",
      ideal: "Ultimate luxury treatment and protection",
    },
  ]

  const additionalServices = [
    {
      name: "Maintenance Detail",
      description:
        "Keep your vehicle looking its best with regular maintenance details. Enroll in monthly or bi-weekly services for consistent care and special pricing.",
      price: "Starting at $120",
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      features: [
        "Monthly or bi-weekly scheduling",
        "Consistent vehicle maintenance",
        "Priority booking",
        "Discounted rates for subscribers",
      ],
    },
    {
      name: "Paint Correction",
      description:
        "Professional multi-stage paint correction service to remove swirl marks, scratches, and oxidation. Restore your vehicle's paint to like-new condition with our expert polishing techniques.",
      price: "Starting at $400",
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      features: [
        "Multi-stage polishing process",
        "Swirl mark and scratch removal",
        "Paint depth measurement",
        "Professional grade compounds",
      ],
    },
    {
      name: "Ceramic Coating",
      description:
        "Long-lasting ceramic coating for ultimate protection and shine. Professional-grade coatings with hydrophobic properties.",
      price: "Starting at $600",
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      features: ["2-5 year protection", "Hydrophobic properties", "Enhanced gloss and depth", "Easy maintenance"],
    },
  ]

  const addOnServices = [
    { name: "Clay bar treatment", price: "$50" },
    { name: "Car seat shampoo and stain extraction", price: "$75" },
    { name: "Carpet shampoo and stain extraction", price: "$60" },
    { name: "Basic interior vacuum", price: "$25" },
    { name: "Headlight restoration", price: "$80" },
    { name: "Engine bay cleaning", price: "$100" },
    { name: "Pet hair removal", price: "$40" },
    { name: "Odor elimination treatment", price: "$90" },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Pricing</h1>
          <p className="text-xl text-blue-100 mb-8">
            Transparent pricing for premium mobile detailing services. Choose the perfect package for your vehicle and
            budget.
          </p>
          <div className="bg-blue-800/50 rounded-lg p-6 inline-block">
            <p className="text-blue-100 mb-2">
              <strong>All services performed at your location</strong>
            </p>
            <p className="text-blue-200 text-sm">
              No travel fees within our service area • Fully insured • 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Detailing Packages</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our signature packages are designed to meet different needs and budgets while maintaining our high
              standards of quality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative bg-gray-800 border-gray-700 ${pkg.popular ? "border-blue-500 border-2 scale-105" : ""} hover:shadow-lg transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={
                        pkg.name === "The Casita"
                          ? "/miata.jpg"
                          : pkg.name === "The Hacienda"
                          ? "/mustang.jpg"
                          : pkg.name === "The Estate Elegance"
                          ? "/jeep.jpg"
                          : `/placeholder.svg?height=200&width=300&text=${pkg.name.replace(" ", "+")}`
                      }
                      alt={pkg.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-4">{pkg.icon}</div>
                  <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>
                  <p className="text-gray-400">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    {pkg.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Compact/Sedan:</span>
                        <span className="font-bold text-lg text-blue-600">{pkg.pricing.compact}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Midsize SUV/Pickup:</span>
                        <span className="font-bold text-lg text-blue-600">{pkg.pricing.midsize}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Large Truck/Van/RV:</span>
                        <span className="font-bold text-lg text-blue-600">{pkg.pricing.large}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500 mb-1">Duration: {pkg.duration}</p>
                    <p className="text-sm text-gray-400">Ideal for: {pkg.ideal}</p>
                  </div>

                  <a 
                    href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                      Book {pkg.name}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Specialized Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced services for specific needs and long-term vehicle protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={
                        service.name === "Maintenance Detail"
                          ? "/detail.jpg"
                          : service.name === "Paint Correction"
                          ? "/polish.jpg"
                          : service.name === "Ceramic Coating"
                          ? "/ceramic.jpg"
                          : `/placeholder.svg?height=200&width=300&text=${service.name.replace(" ", "+")}`
                      }
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.name}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <Check className="w-4 h-4 text-blue-500 mr-2" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-2xl font-bold text-blue-400 mb-6">{service.price}</p>
                  <a 
                    href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      Book Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Add-on Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Customize your detail with these additional services. Mix and match to create the perfect package for your
              specific needs.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 font-medium">{service.name}</span>
                  </div>
                  <span className="text-blue-600 font-bold">{service.price}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-6">
                Want to create a custom package? Contact us to discuss your specific needs and get a personalized quote.
              </p>
              <a 
                href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-600 hover:bg-blue-700">Create Custom Package</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Pricing FAQ</h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">What's included in the pricing?</h3>
                <p className="text-gray-300">
                  All pricing includes labor, premium products, equipment, and travel to your location within our
                  service area. No hidden fees or surprise charges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Do you charge extra for travel?</h3>
                <p className="text-gray-300">
                  No travel fees within our standard service area (El Paso, Canutillo, Horizon, and Socorro). Extended
                  travel may incur additional charges, which will be discussed upfront.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept cash, all major credit cards, Venmo, and Zelle. Payment is due upon completion of service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Do you offer discounts for regular customers?</h3>
                <p className="text-gray-300">
                  Yes! Our maintenance detail program offers discounted rates for monthly or bi-weekly services. We also
                  offer loyalty discounts for frequent customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your package and schedule your appointment today. Experience the convenience of premium mobile
            detailing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Now
              </Button>
            </a>
            <a 
              href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Get Custom Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
