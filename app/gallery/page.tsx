'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { services } from '@/lib/services';
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera, ArrowRight, Filter } from 'lucide-react';

type GalleryImage = {
  src: string;
  serviceTitle: string;
  serviceSlug: string;
  serviceIndex: number;
  imageIndex: number;
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Build flat list of all gallery images grouped by service
  const allImages: GalleryImage[] = useMemo(() => {
    const images: GalleryImage[] = [];
    services.forEach((service, sIdx) => {
      const gallery = service.gallery || [service.image];
      gallery.forEach((src, iIdx) => {
        images.push({
          src,
          serviceTitle: service.title,
          serviceSlug: service.slug,
          serviceIndex: sIdx,
          imageIndex: iIdx,
        });
      });
    });
    return images;
  }, []);

  // Get services that have galleries
  const servicesWithGallery = useMemo(() => {
    return services.filter(s => (s.gallery && s.gallery.length > 0) || s.image);
  }, []);

  // Filter images based on active filter
  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return allImages;
    return allImages.filter(img => img.serviceSlug === activeFilter);
  }, [activeFilter, allImages]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    if (e.key === 'ArrowRight') setSelectedImage((selectedImage + 1) % filteredImages.length);
    if (e.key === 'ArrowLeft') setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    if (e.key === 'Escape') setSelectedImage(null);
  };

  // Group images by service for the sectioned view
  const groupedByService = useMemo(() => {
    const groups: { service: typeof services[0]; images: GalleryImage[] }[] = [];
    const filtered = activeFilter === 'all' ? allImages : allImages.filter(img => img.serviceSlug === activeFilter);
    
    const seen = new Set<string>();
    filtered.forEach(img => {
      if (!seen.has(img.serviceSlug)) {
        seen.add(img.serviceSlug);
        groups.push({
          service: services[img.serviceIndex],
          images: filtered.filter(i => i.serviceSlug === img.serviceSlug),
        });
      }
    });
    return groups;
  }, [activeFilter, allImages]);

  // Get the flat index for lightbox from grouped view
  const getFlatIndex = (serviceSlug: string, imageIndex: number): number => {
    return filteredImages.findIndex(
      img => img.serviceSlug === serviceSlug && img.imageIndex === imageIndex
    );
  };

  return (
    <div className="min-h-screen flex flex-col" onKeyDown={handleKeyDown} tabIndex={-1}>
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 bg-gradient-to-br from-[#01466d] via-[#0b6ea7] to-[#01466d] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#f6880f]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f6880f]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-6 border border-white/10">
                <Camera className="w-4 h-4" />
                Our Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Project <span className="text-[#f6880f]">Gallery</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                Explore our portfolio of completed projects across Kenya. From luxury mansionettes to modern
                apartments, every image tells a story of craftsmanship and excellence.
              </p>
              <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f6880f] animate-pulse" />
                  {allImages.length} Photos
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f6880f] animate-pulse" />
                  {servicesWithGallery.length} Services
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <button
                onClick={() => setActiveFilter('all')}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === 'all'
                    ? 'bg-[#01466d] text-white shadow-lg shadow-[#01466d]/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                All Projects ({allImages.length})
              </button>
              {servicesWithGallery.map(service => {
                const count = allImages.filter(i => i.serviceSlug === service.slug).length;
                return (
                  <button
                    key={service.slug}
                    onClick={() => setActiveFilter(service.slug)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === service.slug
                        ? 'bg-[#01466d] text-white shadow-lg shadow-[#01466d]/25'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    {service.title.replace(/ in Kenya$/, '').replace(/ Kenya$/, '')} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Sections by Service */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
            <div className="space-y-20">
              {groupedByService.map(({ service, images }) => (
                <div key={service.slug} id={service.slug}>
                  {/* Service Header */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-10 h-1 bg-[#f6880f] rounded-full" />
                        <span className="text-sm font-semibold text-[#f6880f] uppercase tracking-wider">
                          {images.length} {images.length === 1 ? 'Photo' : 'Photos'}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {service.title.replace(/ in Kenya$/, '').replace(/ Kenya$/, '')}
                      </h2>
                      <p className="text-gray-500 mt-1 max-w-xl">{service.shortDescription}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#01466d] bg-[#01466d]/5 hover:bg-[#01466d]/10 transition-all group flex-shrink-0"
                    >
                      View Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Images Grid - Masonry-inspired layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {images.map((img, idx) => {
                      // Make first image of each service span 2 columns & rows for visual interest
                      const isFeatureImage = idx === 0 && images.length > 2;
                      return (
                        <div
                          key={`${img.serviceSlug}-${img.imageIndex}`}
                          className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group cursor-pointer transition-all duration-500 hover:-translate-y-1 ${
                            isFeatureImage
                              ? 'col-span-2 row-span-2 h-[300px] sm:h-[400px] md:h-[500px]'
                              : 'h-[200px] sm:h-[240px] md:h-[260px]'
                          }`}
                          onClick={() => setSelectedImage(getFlatIndex(img.serviceSlug, img.imageIndex))}
                        >
                          <Image
                            src={img.src}
                            alt={`${img.serviceTitle} - Image ${img.imageIndex + 1}`}
                            fill
                            sizes={isFeatureImage ? '(max-width: 640px) 100vw, 50vw' : '(max-width: 640px) 50vw, 25vw'}
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white text-sm font-medium truncate">
                                {img.serviceTitle}
                              </p>
                              <p className="text-white/70 text-xs">
                                Image {img.imageIndex + 1} of {images.length}
                              </p>
                            </div>
                          </div>
                          {/* Zoom icon */}
                          <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                            <ZoomIn className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f6880f]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-primary">Dream Project</span>?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-light">
              Our portfolio speaks for itself. Let us bring the same level of excellence and
              craftsmanship to your next construction project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-[#01466d] bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+254745114480"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Call: +254 745 114 480
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && filteredImages[selectedImage] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          style={{ animation: 'fadeIn 200ms ease-out' }}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all z-10 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-7 h-7" />
          </button>

          <button
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10 backdrop-blur-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-6xl h-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedImage].src}
              alt={`${filteredImages[selectedImage].serviceTitle} - Full view`}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          <button
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10 backdrop-blur-sm"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Bottom bar with info */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
            <span className="text-white font-medium text-sm hidden sm:block">
              {filteredImages[selectedImage].serviceTitle}
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="text-white/80 text-sm font-medium">
              {selectedImage + 1} / {filteredImages.length}
            </span>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
