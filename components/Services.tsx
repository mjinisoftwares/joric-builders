import Link from 'next/link';
import { services } from '@/lib/services';
import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  limit?: number;
}

export default function Services({ limit }: ServicesProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {limit && limit < services.length && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
