import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Palette, Droplets, Calendar, Plus } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Sparkles className="w-16 h-16 text-blue-600" />,
      title: "Interior Detail",
      description: "Complete interior cleaning and protection service that transforms your vehicle's cabin.",
      features: [
        "Deep vacuum of all surfaces",
        "Leather cleaning and conditioning",
        "Fabric protection treatment",
        "Dashboard and trim restoration",
        "Window cleaning (interior)",
        "Air freshener application",
      ],
    },
    {
      icon: <Droplets className="w-16 h-16 text-blue-600" />,
      title: "Exterior Detail",
      description: "Premium exterior care that restores your vehicle's showroom shine and protection.",
      features: [
        "Multi-stage wash process",
        "Clay bar decontamination",
        "Paint correction (minor)",
        "Premium wax application",
        "Wheel and tire cleaning",
        "Chrome and trim polishing",
      ],
    },
    {
      icon: <Palette className="w-16 h-16 text-blue-600" />,
      title: "Paint Correction",
      description: "Professional paint restoration to remove imperfections and restore clarity.",
      features: [
        "Swirl mark removal",
        "Scratch elimination",
        "Oxidation treatment",
        "Multi-stage polishing",
        "Paint depth measurement",
        "Protective sealant application",
      ],
    },
    {
      icon: <Shield className="w-16 h-16 text-blue-600" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection with hydrophobic properties and enhanced gloss.",
      features: [
        "2-5 year protection",
        "Hydrophobic properties",
        "UV protection",
        "Chemical resistance",
        "Enhanced gloss",
        "Easy maintenance",
      ],
    },
    {
      icon: <Calendar className="w-16 h-16 text-blue-600" />,
      title: "Maintenance Detail",
      description: "Regular maintenance packages to keep your vehicle in pristine condition.",
      features: [
        "Monthly or bi-weekly scheduling",
        "Consistent vehicle maintenance",
        "Priority booking",
        "Discounted rates for subscribers",
        "Customizable service plans",
        "Flexible appointment times",
      ],
    },
  ]

  const addOnServices = [
    "Clay bar treatment - $50",
    "Car seat shampoo and stain extraction - $75",
    "Carpet shampoo and stain extraction - $60",
    "Basic interior vacuum - $25",
    "Headlight restoration - $80",
    "Engine bay cleaning - $100",
    "Pet hair removal - $40",
    "Odor elimination treatment - $90",
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional mobile detailing services designed to exceed your expectations. We bring luxury car care
            directly to your location with premium products and expert techniques.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
                <CardHeader className="text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={
                        service.title === "Interior Detail"
                          ? "/mercedesinterior.jpg"
                          : service.title === "Exterior Detail"
                          ? "/exteriorcar.jpg"
                          : service.title === "Paint Correction"
                          ? "/paint correction.jpg"
                          : service.title === "Ceramic Coating"
                          ? "/ceramiccoating.jpg"
                          : service.title === "Maintenance Detail"
                          ? "/maintenancewash.jpg"
                          : `/placeholder.svg?height=200&width=400&text=${service.title.replace(" ", "+")}`
                      }
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book This Service</Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Plus className="w-12 h-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-white">Add-on Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-center mb-8">
                Customize your detail with these additional services. Perfect for addressing specific needs or enhancing
                your chosen package.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOnServices.map((service, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-700 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-200">{service}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <a 
                  href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Customize Your Package</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference professional mobile detailing can make. Book your service today and see why our
            clients trust us with their vehicles.
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
                Get Free Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
