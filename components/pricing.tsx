import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  const packages = [
    {
      name: "The Casita",
      description: "Essential exterior care",
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
    },
    {
      name: "The Hacienda",
      description: "Complete interior & exterior",
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
      popular: true,
    },
    {
      name: "The Estate Elegance",
      description: "Premium full-service detail",
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
    },
  ]

  const additionalServices = [
    {
      name: "Maintenance Detail",
      description:
        "Keep your vehicle looking its best with regular maintenance details. Enroll in monthly or bi-weekly services.",
      price: "Starting at $120",
    },
    {
      name: "Paint Correction",
      description: "Advanced paint correction service to remove swirl marks, scratches, and restore paint clarity.",
      price: "Starting at $400",
    },
    {
      name: "Ceramic Coating",
      description: "Long-lasting ceramic coating for ultimate protection and shine.",
      price: "Starting at $600",
    },
  ]

  const addOnServices = [
    "Clay bar treatment",
    "Car seat shampoo and stain extraction",
    "Carpet shampoo and stain extraction",
    "Basic interior vacuum",
    "Headlight restoration",
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Packages</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect detailing package for your vehicle. All services are performed at your location.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative bg-gray-800 border-gray-700 ${pkg.popular ? "border-blue-500 border-2" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
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
                    className={
                      pkg.name === "The Hacienda" || pkg.name === "The Estate Elegance" || pkg.name === "The Casita"
                        ? "w-full h-60 object-cover"
                        : "w-full h-32 object-cover"
                    }
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>
                <p className="text-gray-400">{pkg.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {pkg.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Compact/Sedan:</span>
                    <span className="font-semibold text-white">{pkg.pricing.compact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Midsize SUV/Pickup:</span>
                    <span className="font-semibold text-white">{pkg.pricing.midsize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Large Truck/Van/RV:</span>
                    <span className="font-semibold text-white">{pkg.pricing.large}</span>
                  </div>
                </div>

                <a 
                  href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"} text-white`}
                  >
                    Book {pkg.name}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 overflow-hidden rounded-lg">
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
                  <h4 className="text-xl font-semibold mb-3 text-white">{service.name}</h4>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <p className="text-lg font-bold text-blue-400 mb-4">{service.price}</p>
                  <a 
                    href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Book Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-on Services */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-4">Add-on Services</h3>
          <p className="text-center text-gray-400 mb-6">
            Customize your detail with these additional services. Mix and match to create the perfect package for your
            needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOnServices.map((service, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
