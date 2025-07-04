import { CheckCircle, Leaf, Clock, Award } from "lucide-react"

export default function About() {
  const benefits = [
    {
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
      title: "Eco-Friendly",
      description: "Environmentally safe products and water-saving techniques",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Fast Service",
      description: "Efficient service without compromising on quality",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Professional",
      description: "Trained technicians with years of experience",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all services",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose The Detail Villa?</h2>
            <p className="text-lg text-gray-300 mb-8">
              We bring premium car detailing services directly to your location. Our team of experienced professionals
              uses only the finest products and techniques to ensure your vehicle receives the care it deserves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
  )
}
