import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Hammer, Building2, Palette, Zap } from 'lucide-react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
     <Hero />

     {/* Services Preview */}
     <Services limit={15} />

        {/* Why Choose Us */}
      <WhyChooseUs />

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
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
