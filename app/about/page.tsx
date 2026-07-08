import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Users, Zap, Award } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Joric Builders | Construction Company Kenya',
  description: 'Learn about Joric Builders, a leading design-to-build construction company in Kenya. Our mission, values, and commitment to excellence.',
  keywords: 'about Joric Builders, construction company Kenya, our team, company values',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">About Joric Builders</h1>
            <p className="text-xl text-gray-100">
              Leading construction solutions across Kenya since 2013
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg text-gray-600">
                  Joric Builders Ltd is a professional design-to-build construction company based in Kenya that specializes in residential, commercial, and industrial turnkey developments.
                </p>
                <p className="text-lg text-gray-600">
                  Founded with a vision to transform the construction industry in Kenya, we combine modern technology with expert craftsmanship to deliver exceptional results. Our team of experienced architects, engineers, and construction professionals brings over a decade of expertise to every project.
                </p>
                <p className="text-lg text-gray-600">
                  Operating primarily across Kiambu, Nairobi, and Nyeri counties, we provide comprehensive services nationwide, from initial design to final handover.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center h-96">
                <Image
                  src="/logo.png"
                  alt="Joric Builders Logo"
                  width={250}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Mission & Values</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver innovative, sustainable, and cost-effective construction solutions that exceed client expectations while maintaining the highest standards of quality and professionalism.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading design-to-build construction company in East Africa, recognized for excellence, innovation, and delivering transformative projects that enhance communities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-accent mb-4">Our Values</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Integrity and professionalism</li>
                  <li>• Quality and excellence</li>
                  <li>• Innovation and technology</li>
                  <li>• Client satisfaction</li>
                  <li>• Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 flex items-center justify-center h-96">
                <Award className="w-40 h-40 text-primary opacity-30" />
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">Why We Do What We Do</h2>
                <p className="text-lg text-gray-600">
                  We believe that quality construction is the foundation of strong communities. Our commitment extends beyond buildings—we&apos;re committed to creating spaces where people live, work, and thrive.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: Zap,
                      title: 'Innovation',
                      description: 'Using modern technology to improve efficiency and quality',
                    },
                    {
                      icon: Users,
                      title: 'Teamwork',
                      description: 'Collaborative approach with clients and partners',
                    },
                    {
                      icon: Award,
                      title: 'Excellence',
                      description: 'Commitment to highest standards in every project',
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">{item.title}</p>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Services We Provide</h3>
                <div className="space-y-3">
                  {[
                    'Architectural Design',
                    'Structural Engineering',
                    'Precast Slab Systems Manufacturing',
                    'Construction Management',
                    'Interior & Exterior Finishes',
                    'Structural Extensions',
                    'Regulatory Approvals',
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <p className="text-gray-700">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-secondary mb-6">Project Types</h3>
                <div className="space-y-3">
                  {[
                    'Residential Buildings',
                    'Commercial Complexes',
                    'Industrial Facilities',
                    'Healthcare Facilities',
                    'Educational Institutions',
                    'Mixed-Use Developments',
                  ].map((type, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <p className="text-gray-700">{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Service Coverage</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Primary Markets</h3>
                <div className="space-y-2">
                  <p>• Nairobi County</p>
                  <p>• Kiambu County</p>
                  <p>• Nyeri County</p>
                </div>
              </div>

              <div className="bg-secondary text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Thika Base</h3>
                <p className="text-sm leading-relaxed">
                  Headquartered in Thika Town, Kiambu County, our central location enables efficient service delivery across Kenya.
                </p>
              </div>

              <div className="bg-accent text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Nationwide</h3>
                <p className="text-sm leading-relaxed">
                  We provide comprehensive construction services throughout Kenya for projects of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Experience the difference that expertise, innovation, and quality commitment can bring to your project
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                View Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
