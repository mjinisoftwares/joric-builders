'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Gallery({ images, title }: { images: string[], title: string }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Project Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore images of our {title.toLowerCase()} projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl group cursor-pointer"
                onClick={() => setSelectedImage(idx)}
              >
                <Image
                  src={img}
                  alt={`${title} gallery image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-10"
            onClick={prevImage}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImage]}
              alt={`${title} gallery image full`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all z-10"
            onClick={nextImage}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 bg-black/50 px-4 py-2 rounded-full text-sm font-medium">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
