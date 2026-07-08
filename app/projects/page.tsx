import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Joric Builders | Portfolio of Completed Works',
  description: 'Explore our portfolio of completed construction projects across Kenya. View residential, commercial, and industrial projects by Joric Builders.',
  keywords: 'construction projects Kenya, completed buildings, residential projects, commercial buildings, Joric Builders portfolio',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      location: 'Nairobi, Kenya',
      date: '2023',
      type: 'Residential',
      description: 'Multi-unit residential complex with modern architecture and sustainable design',
      services: ['Design', 'Construction', 'Precast Slabs'],
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Commercial Office Building',
      location: 'Thika, Kiambu',
      date: '2023',
      type: 'Commercial',
      description: 'State-of-the-art office building with modern finishes and green spaces',
      services: ['Architectural Design', 'Construction Management', 'Interior Finishes'],
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Residential Home Extension',
      location: 'Nairobi, Kenya',
      date: '2022',
      type: 'Residential',
      description: 'Structural extension and renovation of existing residential property',
      services: ['Structural Engineering', 'Construction', 'Finishes'],
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      location: 'Nyeri County',
      date: '2022',
      type: 'Industrial',
      description: 'Large-scale industrial warehouse with modern roofing and layout',
      services: ['Design', 'Construction', 'Modern Roofing'],
      status: 'Completed',
    },
    {
      id: 5,
      title: 'Retail Shopping Complex',
      location: 'Kiambu, Kenya',
      date: '2023',
      type: 'Commercial',
      description: 'Multi-story shopping complex with comprehensive facilities',
      services: ['Architectural Design', 'Construction', 'Precast Slabs'],
      status: 'Completed',
    },
    {
      id: 6,
      title: 'Educational Facility',
      location: 'Nairobi, Kenya',
      date: '2022',
      type: 'Institutional',
      description: 'Modern educational building with learning spaces and amenities',
      services: ['Design', 'Construction', 'Interior Design'],
      status: 'Completed',
    },
    {
      id: 7,
      title: 'Apartment Development',
      location: 'Thika Town',
      date: '2023',
      type: 'Residential',
      description: 'Contemporary apartment complex with modern amenities',
      services: ['Full Design-to-Build', 'Precast Systems', 'Finishes'],
      status: 'Completed',
    },
    {
      id: 8,
      title: 'Healthcare Facility',
      location: 'Kiambu County',
      date: '2022',
      type: 'Healthcare',
      description: 'Professional healthcare facility with specialized spaces',
      services: ['Design', 'Construction', 'Specialized Finishes'],
      status: 'Completed',
    },
  ]

  const typeColors: { [key: string]: string } = {
    'Residential': 'bg-blue-100 text-blue-800',
    'Commercial': 'bg-orange-100 text-orange-800',
    'Industrial': 'bg-gray-100 text-gray-800',
    'Institutional': 'bg-green-100 text-green-800',
    'Healthcare': 'bg-purple-100 text-purple-800',
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
            <p className="text-xl text-gray-100">
              Portfolio of completed construction projects across Kenya
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary/20 mb-2">#{project.id}</div>
                      <p className="text-gray-400">{project.type}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          typeColors[project.type] || typeColors['Residential']
                        }`}
                      >
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {project.date}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">SERVICES</p>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-green-600">✓ {project.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Project Statistics</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Projects Completed', value: '50+' },
                { label: 'Satisfied Clients', value: '100+' },
                { label: 'Years of Experience', value: '10+' },
                { label: 'Team Members', value: '25+' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-lg">
                  <p className="text-4xl font-bold text-secondary mb-2">{stat.value}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Project Categories</h2>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { name: 'Residential', count: 25 },
                { name: 'Commercial', count: 15 },
                { name: 'Industrial', count: 8 },
                { name: 'Institutional', count: 3 },
                { name: 'Healthcare', count: 2 },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <p className="text-3xl font-bold text-secondary mb-2">{category.count}</p>
                  <p className="text-foreground font-semibold">{category.name} Projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-foreground text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Your Project Could Be Next</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
              Let us bring your vision to life with our expertise and proven track record
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="tel:+254745114480"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
