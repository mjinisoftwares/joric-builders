"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const carouselImages = [
  "/joric.png",
  "/images/architectural-design.png",
  "/images/construction-management.png",
  "/images/structural-engineering.png"
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[#1B2342]">
      {/* Background */}
     

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>

            <h1 className="mt-6 text-5xl font-bold text-white">
             Let's Work Together on Your Next <span className="text-accent font-black ">Construction </span>Project
            </h1>

            <p className="mt-6 max-w-xl leading-6 text-slate-200 ">
              Joric Builders delivers premium residential, commercial,
              and industrial construction solutions across Kenya,
              combining modern technology, skilled craftsmanship,
              and exceptional project management.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Services

                <ArrowRight
                  size={20}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>

              <a
                href="tel:+254745114480"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/80 px-8 py-4 font-bold text-primary backdrop-blur transition-all hover:bg-white hover:text-primary"
              >
                <Phone size={18} className="mr-2" />
                Call Us Today
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                'Licensed Contractors',
                'Quality Guaranteed',
                'On-Time Delivery',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center text-slate-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mr-2 text-accent"
                  />
                  {item}
                </div>
              ))}
            </div>

          
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 blur-3xl" />

            <div className="relative">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-secondary to-accent opacity-30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="group relative flex items-center justify-center">
                  {carouselImages.map((src, index) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Joric Builders - Image ${index + 1}`}
                      width={650}
                      height={600}
                      priority={index === 0}
                      className={`absolute left-0 top-0 h-auto w-full object-contain transition-opacity duration-1000 rounded-[32px]  ${
                        index === currentImageIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Invisible placeholder to establish the container's natural size */}
                  <Image
                    src={carouselImages[0]}
                    alt="Placeholder"
                    width={650}
                    height={600}
                    className="pointer-events-none h-auto w-full object-contain opacity-0"
                    priority
                  />

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 space-x-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'w-8 bg-accent'
                            : 'w-2.5 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -left-8 top-8 rounded-2xl border border-white/10 bg-white/95 p-5 shadow-2xl">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-600">
                  Years Building Kenya
                </p>
              </div>

              {/* Floating Card */}
              <div className="absolute -right-8 bottom-8 rounded-2xl border border-white/10 bg-secondary p-5 text-white shadow-2xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}