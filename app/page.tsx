import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Hammer, Building2, Palette, Zap } from 'lucide-react'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
     <Hero />

        {/* Services Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive construction solutions tailored to your project needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary">
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Architectural Design</h3>
                <p className="text-gray-600 mb-4">
                  Professional architectural design services including 3D rendering, structural analysis, and complete Bills of Quantities.
                </p>
                <Link href="/services" className="text-secondary font-semibold hover:text-primary transition flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Construction Services</h3>
                <p className="text-gray-600 mb-4">
                  Full construction management from concept to completion with modern technology and quality assurance at every stage.
                </p>
                <Link href="/services" className="text-secondary font-semibold hover:text-primary transition flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Precast Slab Systems</h3>
                <p className="text-gray-600 mb-4">
                  Manufacturing and installation of rib beams, flat beams, and blocks for cost-effective, durable building solutions.
                </p>
                <Link href="/services" className="text-secondary font-semibold hover:text-primary transition flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Why Choose Joric Builders?</h2>
                <p className="text-lg text-gray-600">
                  We combine expertise, modern technology, and quality craftsmanship to deliver construction excellence.
                </p>

                <div className="space-y-4">
                  {[
                    'Modern design-to-build solutions',
                    'Experienced architectural and structural team',
                    'Cost-effective building methods',
                    'Timely project completion',
                    'Quality assurance at every stage',
                    'Nationwide service coverage',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  About Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center min-h-96">
                <Palette className="w-32 h-32 text-secondary opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Get in touch with our team today for a consultation on your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+254745114480"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                +254 745 114 480
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
