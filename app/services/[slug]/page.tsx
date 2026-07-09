import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, getServiceById, services } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Gallery from '@/components/Gallery';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Joric Builders`,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="py-16 bg-accent/5 overflow-hidden border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 text-left z-10 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Premium Service
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-light ">
                  {service.shortDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#overview" className="inline-flex justify-center items-center px-6 py-3 text-base font-bold rounded-xl text-white bg-primary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                    Explore Details
                  </Link>
                  <Link href="/contact" className="inline-flex justify-center items-center px-6 py-3 text-base font-bold rounded-xl text-white bg-accent hover:bg-secondary/20 transition-all">
                    Get a Quote
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative z-10 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-accent">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                </div>
                {/* Decorative blob shapes */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-70" />
                <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-70" />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section id="overview" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column (Content) */}
              <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                    <span className="w-8 h-1 bg-secondary mr-4 rounded-full"></span>
                    Service Overview
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="ml-3 text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                {service.process && service.process.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
                    <div className="space-y-6">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                          <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 group-hover:bg-secondary group-hover:text-white transition-colors rounded-full flex items-center justify-center text-secondary font-bold text-2xl mr-6">
                            {step.step}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{step.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              

                {/* FAQ */}
                {service.faq && service.faq.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {service.faq.map((faq, index) => (
                        <details key={index} className="group bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer overflow-hidden transition-all">
                          <summary className="flex justify-between items-center font-bold text-lg text-foreground p-6 list-none hover:bg-gray-50 transition-colors">
                            {faq.question}
                            <span className="transition-transform duration-300 group-open:rotate-180 bg-gray-100 p-2 rounded-full">
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            </span>
                          </summary>
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 bg-gray-50/50">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column (Sidebar/Gallery/Contact) */}
              <div className="space-y-8">
                {/* Sticky Sidebar */}
                <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-primary sticky top-32">
                  <div className="relative h-72 w-full rounded-xl overflow-hidden mb-8 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Gallery Quality
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Start Your Project</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Ready to transform your vision into reality? Our team is here to deliver exceptional {service.title.toLowerCase()} services.
                    </p>
                    <Link href="/contact" className="w-full inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-accent hover:bg-primary hover:-translate-y-1 shadow-lg hover:shadow-xl transition-all duration-300">
                      Get a Free Quote <ArrowRight className="ml-2 w-6 h-6" />
                    </Link>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Prefer to talk?</p>
                      <a href="tel:+254745114480" className="text-xl font-bold text-foreground hover:text-secondary transition-colors">
                        +254 745 114 480
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {service.gallery && service.gallery.length > 0 && (
          <Gallery images={service.gallery} title={service.title} />
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Related Services</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore other services that complement our {service.title.toLowerCase()} offerings to complete your project.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedServices.map((relatedService) => (
                  <ServiceCard key={relatedService.id} service={relatedService} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
