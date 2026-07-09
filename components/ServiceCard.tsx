import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layout, Building2, Grid, Home, Hammer, Sparkles, Layers, Building, Waves, Leaf, Paintbrush } from 'lucide-react';
import { Service } from '@/lib/services';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Building2,
  Grid,
  Home,
  Hammer,
  Sparkles,
  Layers,
  Building,
  Waves,
  Leaf,
  Paintbrush
};

export default function ServiceCard({ service }: { service: Service }) {
  const IconComponent = iconMap[service.icon] || Hammer;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full border-t-4 border-primary">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
          {service.shortDescription}
        </p>
        <Link 
          href={`/services/${service.slug}`} 
          className="text-accent border border-accent px-4 py-2 rounded-md w-fit  font-semibold hover:text-primary transition-colors flex items-center mt-auto"
        >
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
