import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Hammer, Building2, Zap, Palette, Wrench, HomeIcon } from 'lucide-react'
import { Metadata } from 'next'
import ServicesGrid from '@/components/Services'

export const metadata: Metadata = {
  title: 'Services - Joric Builders | Construction & Design Solutions Kenya',
  description: 'Comprehensive construction services including architectural design, structural engineering, precast slabs, and modern building solutions in Kenya.',
  keywords: 'construction services Kenya, architectural design, structural engineering, precast slabs, rib beams, construction company',
}

export default function Services() {


  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto">
             We Offer a wide range of construction services to meet your needs.
             From design and planning to construction and completion, we've got you covered.
            </p>
          </div>
        </section>

        {/* Services Grid */}
     <ServicesGrid />

        {/* Service Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure project success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'Understand your project requirements and vision',
                },
                {
                  step: '02',
                  title: 'Design & Planning',
                  description: 'Create detailed plans and technical drawings',
                },
                {
                  step: '03',
                  title: 'Construction',
                  description: 'Execute with modern methods and quality control',
                },
                {
                  step: '04',
                  title: 'Completion',
                  description: 'Final inspections and handover of your project',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Our Services?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Experienced architects, engineers, and construction professionals with proven track record',
                },
                {
                  title: 'Modern Technology',
                  description: '3D rendering, advanced planning tools, and modern construction methods',
                },
                {
                  title: 'Quality Assured',
                  description: 'Rigorous quality control at every stage of construction',
                },
                {
                  title: 'Cost-Effective',
                  description: 'Smart solutions that maximize value without compromising quality',
                },
                {
                  title: 'On-Time Delivery',
                  description: 'Reliable scheduling and project management for timely completion',
                },
                {
                  title: 'Full Support',
                  description: 'Complete support from initial consultation to final handover',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/80 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Project to Life?</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and quotation
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
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
