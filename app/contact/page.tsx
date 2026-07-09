'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { useState } from 'react'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend service
    console.log('Form submitted:', formData)
    // Prepare WhatsApp message
    const whatsappNumber = '254745114480'
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    // Open WhatsApp chat in a new tab/window
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })

    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-100">
              We&apos;re ready to discuss your construction project
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info Cards */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-gray-600 mb-2">+254 745 114 480</p>
                <p className="text-sm text-gray-500">Available on WhatsApp</p>
                <a
                  href="tel:+254745114480"
                  className="inline-block mt-4 text-secondary font-semibold hover:text-primary transition"
                >
                  Call Now →
                </a>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-gray-600 mb-2">info@joricbuilders.com</p>
                <p className="text-sm text-gray-500">We respond within 24 hours</p>
                <a
                  href="mailto:info@joricbuilders.com"
                  className="inline-block mt-4 text-secondary font-semibold hover:text-primary transition"
                >
                  Send Email →
                </a>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-lg">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Office Location</h3>
                <p className="text-gray-600 mb-2">Thika Town, Kiambu County</p>
                <p className="text-sm text-gray-500">Kenya</p>
                <p className="inline-block mt-4 text-secondary font-semibold">
                  Available for site visits
                </p>
              </div>
            </div>

            {/* Contact Form and Info */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Thank you for your message! We will get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="design">Architectural Design</option>
                      <option value="construction">Construction Services</option>
                      <option value="precast">Precast Slab Systems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Quick Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Contact Us?</h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Clock,
                        title: 'Quick Response',
                        description: 'We respond to inquiries within 24 hours',
                      },
                      {
                        icon: Phone,
                        title: 'Direct Communication',
                        description: 'Speak directly with our project managers',
                      },
                      {
                        icon: Mail,
                        title: 'Free Consultation',
                        description: 'Get expert advice on your project needs',
                      },
                    ].map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div key={index} className="flex gap-4">
                          <Icon className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">{item.title}</p>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Service Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="font-semibold">Monday - Friday:</span> 8:00 AM - 5:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Saturday:</span> 9:00 AM - 1:00 PM
                    </p>
                    <p>
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Emergency inquiries available 24/7 via WhatsApp
                  </p>
                </div>

                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-foreground mb-3">Connect With Us</h3>
                  <p className="text-gray-600 mb-4">Follow us on social media for project updates and construction tips</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/joricbuilders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/joricbuilders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@joricbuilders"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 font-semibold">Thika Town, Kiambu County, Kenya</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-foreground text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-100 mb-6">
              Call us today or fill out the form above to schedule your consultation
            </p>
            <a
              href="tel:+254745114480"
              className="inline-block px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Call +254 745 114 480
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
