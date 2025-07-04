"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Instagram, Facebook, Youtube, Video } from "lucide-react"
import { sendEmail } from "@/lib/emailjs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendEmail(formData);
      setSubmitStatus(result);
      
      if (result.success) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          vehicle: '',
          service: '',
          location: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialMediaLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/thedetailvilla",
      color: "hover:text-pink-400",
      description: "Follow our daily work",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://facebook.com/thedetailvilla",
      color: "hover:text-blue-500",
      description: "Like our page",
    },
    {
      name: "TikTok",
      icon: <Video className="w-6 h-6" />,
      url: "https://tiktok.com/@thedetailvilla",
      color: "hover:text-red-400",
      description: "Watch our videos",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://youtube.com/@thedetailvilla",
      color: "hover:text-red-500",
      description: "Subscribe for tutorials",
    },
  ]

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 mb-8">
            Ready to give your vehicle the care it deserves? We're here to help you schedule your appointment and answer
            any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9158011200">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (915) 801-1200
              </Button>
            </a>
            <a href="sms:9158011200">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-300">
              Choose the method that works best for you. We respond quickly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Call Us</h3>
                <p className="text-gray-400 mb-4">Speak directly with our team</p>
                <p className="text-blue-400 font-bold">(915) 801-1200</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Sun: 7AM-7PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Text Message</h3>
                <p className="text-gray-400 mb-4">Quick and convenient</p>
                <p className="text-blue-400 font-bold">(915) 801-1200</p>
                <p className="text-sm text-gray-500 mt-2">Response within 1 hour</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Email</h3>
                <p className="text-gray-400 mb-4">Detailed inquiries welcome</p>
                <p className="text-blue-400 font-bold text-sm">thedetailvilla@gmail.com</p>
                <p className="text-sm text-gray-500 mt-2">Response within 4 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Online Booking</h3>
                <Button className="bg-blue-600 hover:bg-blue-700 text-sm text-white">Book Online</Button>
                <p className="text-sm text-gray-500 mt-2">Instant confirmation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Follow Us on Social Media</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay connected and see our latest work, tips, and behind-the-scenes content!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialMediaLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="text-center hover:shadow-lg transition-all duration-300 bg-gray-900 border-gray-700 hover:border-blue-500 cursor-pointer">
                  <CardContent className="p-6">
                    <div
                      className={`text-gray-400 ${social.color} transition-colors duration-300 flex justify-center mb-3`}
                    >
                      {social.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {social.name}
                    </h3>
                    <p className="text-sm text-gray-500">{social.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Tag us in your posts and use <span className="text-blue-400 font-semibold">#TheDetailVilla</span> to be
              featured!
            </p>
            <div className="flex justify-center space-x-6">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.color} transition-colors duration-300 p-2 rounded-full hover:bg-gray-700`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-800 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you within 4 hours during business hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      type="tel"
                      placeholder="(915) 801-1200"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">
                      Vehicle Information
                    </label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      placeholder="2023 BMW X5, Black"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="casita">The Casita</option>
                      <option value="hacienda">The Hacienda</option>
                      <option value="estate">The Estate Elegance</option>
                      <option value="ceramic">Ceramic Coating</option>
                      <option value="paint-protection">Paint Protection</option>
                      <option value="maintenance">Maintenance Detail</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Beverly Hills, CA"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your vehicle, preferred timing, or any specific requests..."
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>

                  {submitStatus && (
                    <div className={`p-3 rounded-md ${
                      submitStatus.success 
                        ? 'bg-green-900/50 border border-green-500 text-green-300' 
                        : 'bg-red-900/50 border border-red-500 text-red-300'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gray-800 border-gray-700 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Service Area</h3>
                      <div className="space-y-4">
                        <div>
                          <strong>El Paso:</strong> Central El Paso, West El Paso, East El Paso, Northeast El Paso, and surrounding areas
                        </div>
                        <div>
                          <strong>Canutillo:</strong> Canutillo, Vinton, and surrounding communities
                        </div>
                        <div>
                          <strong>Horizon:</strong> Horizon City, Montana Vista, and surrounding areas
                        </div>
                        <div>
                          <strong>Socorro:</strong> Socorro, San Elizario, and surrounding communities
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 mt-3">
                        Don't see your area? Contact us - we may still be able to serve you!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Business Hours</h3>
                      <div className="space-y-2 text-gray-300">
                        <div className="flex justify-between">
                          <span>Monday - Sunday:</span>
                          <span className="font-medium">7:00 AM - 7:00 PM</span>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 mt-3">Emergency services available by appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">We'll confirm your appointment 24 hours in advance</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">Our team arrives with all necessary equipment and supplies</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">We only need access to water and electricity</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">Payment is due upon completion of service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Service?</h2>
          <p className="text-xl text-blue-100 mb-8">
            For urgent requests or same-day service, call us directly. We'll do our best to accommodate your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9158011200">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call (915) 801-1200
              </Button>
            </a>
            <a href="sms:9158011200">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Text for Quick Response
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
