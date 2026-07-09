import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    "Modern design-to-build solutions",
    "Experienced architectural and structural team",
    "Cost-effective building methods",
    "Timely project completion",
    "Quality assurance at every stage",
    "Nationwide service coverage",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/joric-1.png" // Replace with your image
                alt="Joric Builders Construction Team"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl px-8 py-6">
                <h3 className="text-4xl font-black text-primary">10+</h3>
                <p className="text-gray-600 font-medium">
                  Years of Construction Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary mb-6">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl  font-black text-primary mb-6">
             Why We're the Best
              <span className="block text-accent">
               Construction
              </span>
               Company In Kenya
            </h2>

            <p className="text-md text-gray-600 leading-8 mb-8">
              At <strong>Joric Builders</strong>, we combine innovative
              construction techniques, skilled professionals, and quality
              craftsmanship to deliver projects that exceed expectations.
              Every project is completed with precision, integrity, and an
              unwavering commitment to excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <div className="mt-1">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>

                  <p className="text-gray-700 text-xs">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:bg-accent hover:shadow-xl hover:-translate-y-1"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}