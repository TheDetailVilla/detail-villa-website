import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Shield, Palette, Droplets } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Interior Detail",
      description: "Deep cleaning and protection for your vehicle's interior surfaces, seats, and carpets.",
    },
    {
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      title: "Exterior Detail",
      description: "Premium wash, wax, and protection to restore your car's showroom shine.",
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "Paint Correction",
      description: "Professional paint restoration to remove swirl marks, scratches, and imperfections.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Ceramic Coating",
      description: "Long-lasting protection with hydrophobic properties and enhanced gloss.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional mobile detailing services designed to keep your vehicle looking its absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-700 scale-105"
            >
              <CardContent className="md:p-12 p-8">
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
                        : `/placeholder.svg?height=200&width=300&text=${service.title.replace(" ", "+")}`
                    }
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 md:text-lg mb-6">{service.description}</p>
                <a 
                  href="https://app.squareup.com/appointments/book/vubh3j0ph1po97/LEJNWFZATAZ7V/start" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Book This Service
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
