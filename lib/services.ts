export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
  gallery?: string[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'cabros-and-pavers',
    title: 'Cabros & Pavers Experts',
    shortDescription: 'Expert installation of both colored and normal cabros.',
    description: 'We ensure all process is well done from leveling, hand packing, compressing, laying, table compaction & vanishing. Both colored and normal cabros.',
    icon: 'Layout',
    image: '/images/services/cabros-and-pavers/Cabros-and-pavers-4.webp',
    gallery: ["/images/services/cabros-and-pavers/Cabros-and-pavers-1.webp","/images/services/cabros-and-pavers/Cabros-and-pavers-2.webp","/images/services/cabros-and-pavers/Cabros-and-pavers-3.webp","/images/services/cabros-and-pavers/Cabros-and-pavers-4.webp","/images/services/cabros-and-pavers/Cabros-and-pavers-5.webp","/images/services/cabros-and-pavers/Cabros-and-pavers-6.webp","/images/services/cabros-and-pavers/Cabros-and-pavers-7.webp"],
    features: [
      'Leveling & Hand packing',
      'Compressing & Laying',
      'Table compaction',
      'Vanishing',
      'Colored and normal cabros',
    ],
    process: [
      { step: 1, title: 'Site Preparation', description: 'Clearing and leveling the ground.' },
      { step: 2, title: 'Installation', description: 'Hand packing and laying the cabros.' },
      { step: 3, title: 'Compaction', description: 'Table compaction for a firm surface.' },
      { step: 4, title: 'Finishing', description: 'Vanishing and final touches.' }
    ],
    faq: [
      { question: 'Do you offer colored cabros?', answer: 'Yes, we offer both colored and normal cabros.' },
      { question: 'How long does it take?', answer: 'It depends on the size of the area.' }
    ],
    relatedServices: ['2', '3']
  },
  {
    id: '2',
    slug: 'prestressed-beams-and-blocks',
    title: 'Prestressed Beams and Blocks',
    shortDescription: 'A modern, efficient, and cost-saving slab system designed for fast construction and superior structural performance.',
    description: 'A modern, efficient, and cost-saving slab system designed for fast construction and superior structural performance. Ideal for residential, commercial, extensions, and renovation projects.',
    icon: 'Building2',
    image: '/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1.webp',
    gallery: ["/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1-a.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1-b.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1-c.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1-d.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1-e.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-1.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-2-a.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-2.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-3.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-4.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-5.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-6.webp","/images/services/prestressed-beams-and-blocks/PRESTRESSED-BEAMS-AND-BLOCKS-7.webp"],
    features: [
      'Fast Installation: Minimal formwork, quick assembly',
      'Cost Effective: Reduced concrete and steel usage',
      'Strong & Durable: Prestressed beams offer high load capacity',
      'Thermal & Sound Insulation: Blocks improve comfort and reduce noise',
      'Clean & Safe Site: No bottom shuttering or trappers needed',
      'Accurate & Uniform Finish: Provides a level base for topping concrete'
    ],
    process: [
      { step: 1, title: 'Design & Planning', description: 'Determining the correct beams and blocks for the load.' },
      { step: 2, title: 'Delivery', description: 'Safe transport of materials to the site.' },
      { step: 3, title: 'Installation', description: 'Quick assembly with minimal formwork.' },
      { step: 4, title: 'Finishing', description: 'Pouring topping concrete for a level base.' }
    ],
    faq: [
      { question: 'Is this cost-effective?', answer: 'Yes, it significantly reduces concrete and steel usage.' },
      { question: 'What projects is this ideal for?', answer: 'Residential, commercial, extensions, and renovations.' }
    ],
    relatedServices: ['3', '4']
  },
  {
    id: '3',
    slug: 'concrete-fiber-mesh',
    title: 'Concrete Fiber Mesh',
    shortDescription: 'Strong. Durable. Crack Resistant. Upgrade your construction with high-performance concrete fiber mesh.',
    description: 'Upgrade your construction with high-performance concrete fiber mesh designed to improve structural strength and minimize surface cracking. Ideal for slabs, pavements, rib & beam systems, warehouses, driveways, and commercial floors.',
    icon: 'Grid',
    image: '/images/services/concrete-fiber-mesh/Concrete-fiber-mesh-1.webp',
    gallery: ["/images/services/concrete-fiber-mesh/Concrete-fiber-mesh-1.webp","/images/services/concrete-fiber-mesh/Concrete-fiber-mesh-2.webp","/images/services/concrete-fiber-mesh/Concrete-fiber-mesh-3.webp"],
    features: [
      'Reduces shrinkage cracks',
      'Improves durability and load distribution',
      'Faster installation compared to traditional mesh',
      'Cost-effective reinforcement solution',
      'Suitable for residential & commercial projects'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Determining the appropriate fiber mesh for your concrete.' },
      { step: 2, title: 'Mixing', description: 'Evenly distributing the fiber mesh in the concrete mix.' },
      { step: 3, title: 'Pouring', description: 'Pouring the reinforced concrete.' },
      { step: 4, title: 'Curing', description: 'Proper curing to minimize cracks.' }
    ],
    faq: [
      { question: 'Why use concrete fiber mesh?', answer: 'It reduces shrinkage cracks and improves durability.' },
      { question: 'Is it faster than traditional mesh?', answer: 'Yes, it is mixed directly into the concrete, saving installation time.' }
    ],
    relatedServices: ['1', '2']
  },
  {
    id: '4',
    slug: 'mansionnate-design',
    title: 'Mansionnate Design',
    shortDescription: 'Luxurious mansionates designed and built by Joricbuilders.',
    description: 'Elevate your lifestyle with a luxurious mansionate designed and built by Joricbuilders. We create spacious, elegant, and modern homes that reflect sophistication and comfort. Every design is tailored to your taste, combining style, functionality, and structural excellence.',
    icon: 'Home',
    image: '/images/services/mansionnate-design/mansionnate-design-1.webp',
    gallery: ["/images/services/mansionnate-design/mansionnate-design-1.webp","/images/services/mansionnate-design/mansionnate-design-2.webp","/images/services/mansionnate-design/mansionnate-design-3.webp","/images/services/mansionnate-design/mansionnate-design-4.webp","/images/services/mansionnate-design/mansionnate-design-5.webp"],
    features: [
      'Customized architectural and interior designs',
      '3D renders for a realistic view of your home',
      'Detailed structural drawings and calculations',
      'High-quality construction using premium materials',
      'Finishing works, plastering, flooring, and more',
      'Innovative, modern designs',
      'Superior craftsmanship and attention to detail',
      'Timely project delivery'
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Understanding your vision and requirements.' },
      { step: 2, title: 'Design & Rendering', description: 'Creating 3D renders and architectural designs.' },
      { step: 3, title: 'Construction', description: 'High-quality construction using premium materials.' },
      { step: 4, title: 'Finishing & Handover', description: 'Applying finishing touches and handing over the keys.' }
    ],
    faq: [
      { question: 'Do you provide 3D renders?', answer: 'Yes, we provide 3D renders for a realistic view of your home.' },
      { question: 'Are the designs customizable?', answer: 'Absolutely, every design is tailored to your taste.' }
    ],
    relatedServices: ['5', '8']
  },
  {
    id: '5',
    slug: 'roofing-experts',
    title: 'Roofing Experts',
    shortDescription: 'Modern, durable, and weather-resistant roofs designed to protect and impress.',
    description: 'Upgrade your home or project with high-quality roofing services. We specialize in modern, durable, and weather-resistant roofs designed to protect and impress.',
    icon: 'Hammer',
    image: '/images/services/roofing/roofing-1.webp',
    features: [
      'Mabati roofing (Box profile, Tile profile, Corrugated)',
      'Roof installation & repairs',
      'Timber structure & truss work',
      'Leak fixing & maintenance',
      'Custom designs for residential & commercial buildings',
      'Strong workmanship',
      'Clean finishing',
      'Timely delivery'
    ],
    process: [
      { step: 1, title: 'Inspection', description: 'Assessing the current roof or the structure for a new roof.' },
      { step: 2, title: 'Timber & Truss Work', description: 'Building a strong structural foundation for the roof.' },
      { step: 3, title: 'Roof Installation', description: 'Installing the selected roofing materials (Mabati, tiles, etc.).' },
      { step: 4, title: 'Finishing & Cleanup', description: 'Ensuring clean finishing and no leaks.' }
    ],
    faq: [
      { question: 'What types of roofing do you do?', answer: 'Mabati roofing (Box profile, Tile profile, Corrugated), and more.' },
      { question: 'Do you offer repair services?', answer: 'Yes, we handle leak fixing and general roof maintenance.' }
    ],
    relatedServices: ['4', '6']
  },
  {
    id: '6',
    slug: 'terrazzo-floors',
    title: 'Terrazzo Floors',
    shortDescription: 'Premium terrazzo floors that combine elegance, durability, and timeless style.',
    description: 'Crafted from high-quality marble, granite, and glass chips bonded into a seamless polished surface, our terrazzo flooring delivers exceptional strength for homes, offices, and commercial spaces. Designed for beauty and long-lasting performance, each finish offers low maintenance, stain resistance, and customizable patterns to match your interior vision.',
    icon: 'Sparkles',
    image: '/images/services/terrazzo-floors/terrazzo-floors-1.webp',
    gallery: ["/images/services/terrazzo-floors/terrazzo-floors-1.webp","/images/services/terrazzo-floors/terrazzo-floors-2.webp"],
    features: [
      'High-quality marble, granite, and glass chips',
      'Seamless polished surface',
      'Exceptional strength for homes, offices, and commercial spaces',
      'Low maintenance & stain resistance',
      'Customizable patterns',
      'Superior craftsmanship'
    ],
    process: [
      { step: 1, title: 'Design & Preparation', description: 'Selecting chips and patterns, preparing the base.' },
      { step: 2, title: 'Mixing & Pouring', description: 'Mixing the terrazzo composite and pouring it evenly.' },
      { step: 3, title: 'Grinding & Polishing', description: 'Grinding the surface smooth and polishing it to a high shine.' },
      { step: 4, title: 'Sealing', description: 'Applying a protective sealant for stain resistance.' }
    ],
    faq: [
      { question: 'Is terrazzo easy to maintain?', answer: 'Yes, it offers low maintenance and high stain resistance.' },
      { question: 'Can I customize the pattern?', answer: 'Yes, we offer customizable patterns to match your interior vision.' }
    ],
    relatedServices: ['7', '11']
  },
  {
    id: '7',
    slug: 'wall-panels',
    title: 'Wall Panels',
    shortDescription: 'Modern and efficient wall panels offering a smart alternative to traditional masonry.',
    description: 'Looking for a modern and efficient way to build your walls? Our wall panels offer a smart alternative to traditional masonry. Quick installation, strong structure, and cost-effective.',
    icon: 'Layers',
    image: '/images/services/wall-panels/wall-panels-1.webp',
    gallery: ["/images/services/wall-panels/wall-panels-1.webp","/images/services/wall-panels/wall-panels-2.webp","/images/services/wall-panels/wall-panels-3.webp","/images/services/wall-panels/wall-panels-4.webp","/images/services/wall-panels/wall-panels-5.webp"],
    features: [
      'Quick installation – saves time on site',
      'Strong & durable structure',
      'Smooth finish – less plastering required',
      'Cost-effective – reduces overall building cost',
      'Ideal for residential & commercial projects',
      'Custom sizes available to suit your design',
      'Reliable supply & delivery'
    ],
    process: [
      { step: 1, title: 'Measurement & Sizing', description: 'Customizing panels to suit your specific design needs.' },
      { step: 2, title: 'Delivery', description: 'Reliable supply and safe delivery to the site.' },
      { step: 3, title: 'Installation', description: 'Quick and efficient installation.' },
      { step: 4, title: 'Finishing', description: 'Minimal plastering required for a smooth finish.' }
    ],
    faq: [
      { question: 'Are wall panels faster to install?', answer: 'Yes, they save significant time on site compared to traditional masonry.' },
      { question: 'Do they require plastering?', answer: 'They offer a smooth finish, requiring much less plastering.' }
    ],
    relatedServices: ['2', '8']
  },
  {
    id: '8',
    slug: 'modern-apartment-design',
    title: 'Modern Apartment Design',
    shortDescription: 'Beautiful, strong, and modern apartment designs from concept to construction.',
    description: 'We design and build beautiful, strong, and modern apartments. From concept, approvals, to construction we handle everything professionally.',
    icon: 'Building',
    image: '/images/services/modern-apartment-design/modern-apartment-design-1.webp',
    gallery: ["/images/services/modern-apartment-design/modern-apartment-design-1.webp","/images/services/modern-apartment-design/modern-apartment-design-2.webp","/images/services/modern-apartment-design/modern-apartment-design-3.webp","/images/services/modern-apartment-design/modern-apartment-design-4.webp"],
    features: [
      'Concept design and architectural planning',
      'Handling of all necessary approvals',
      'Professional and high-quality construction',
      'Modern, beautiful, and strong finishes'
    ],
    process: [
      { step: 1, title: 'Concept', description: 'Developing the initial apartment design concept.' },
      { step: 2, title: 'Approvals', description: 'Handling all necessary building and construction approvals.' },
      { step: 3, title: 'Construction', description: 'Building the apartment complex professionally.' },
      { step: 4, title: 'Handover', description: 'Final inspections and handing over the apartments.' }
    ],
    faq: [
      { question: 'Do you handle approvals?', answer: 'Yes, we handle everything from concept to approvals to construction.' },
      { question: 'Are the designs modern?', answer: 'We specialize in beautiful, strong, and modern apartment designs.' }
    ],
    relatedServices: ['4', '9']
  },
  {
    id: '9',
    slug: 'swimming-pools-septics-boreholes',
    title: 'Swimming Pools, Septics & Boreholes',
    shortDescription: 'Expert construction of swimming pools, septic tanks, and boreholes.',
    description: 'We provide expert construction and installation of swimming pools, septic systems, and boreholes, ensuring high-quality, durable, and efficient solutions for your residential or commercial needs.',
    icon: 'Waves',
    image: '/images/services/swimming-pools/swimming-pools-1.webp',
    features: [
      'Custom swimming pool design and construction',
      'Efficient septic tank installation',
      'Professional borehole drilling',
      'Equipment installation and testing',
      'Maintenance and repair services'
    ],
    process: [
      { step: 1, title: 'Site Assessment', description: 'Evaluating the site for the pool, septic, or borehole.' },
      { step: 2, title: 'Excavation & Drilling', description: 'Earthworks required for the specific project.' },
      { step: 3, title: 'Construction/Installation', description: 'Building the pool, installing the septic, or casing the borehole.' },
      { step: 4, title: 'Testing & Handover', description: 'Testing the systems for optimal performance.' }
    ],
    faq: [
      { question: 'Do you design custom swimming pools?', answer: 'Yes, we offer custom designs to fit your space and preferences.' },
      { question: 'Can you handle commercial boreholes?', answer: 'Yes, we cater to both residential and commercial needs.' }
    ],
    relatedServices: ['4', '10']
  },
  {
    id: '10',
    slug: 'bio-digesta',
    title: 'Bio Digesta',
    shortDescription: 'Modern Bio digesta construction to utilize your space efficiently.',
    description: 'Modern Bio digesta construction, utilize your space, avoid odour and exhauster machines. An eco-friendly and cost-effective waste management solution.',
    icon: 'Leaf',
    image: '/images/services/bio-digesta/bio-digesta-1.webp',
    gallery: ["/images/services/bio-digesta/bio-digesta-1.webp","/images/services/bio-digesta/bio-digesta-2.webp","/images/services/bio-digesta/bio-digesta-3.webp","/images/services/bio-digesta/bio-digesta-4.webp"],
    features: [
      'Modern Bio digesta construction',
      'Space utilization optimization',
      'Odour-free system',
      'Eliminates the need for exhauster machines',
      'Eco-friendly waste management'
    ],
    process: [
      { step: 1, title: 'Site Inspection', description: 'Determining the best location for the bio digesta.' },
      { step: 2, title: 'Excavation', description: 'Digging the required space.' },
      { step: 3, title: 'Construction', description: 'Building the digesta chambers and plumbing.' },
      { step: 4, title: 'Commissioning', description: 'Testing the system and ensuring it is odour-free.' }
    ],
    faq: [
      { question: 'Does it produce odour?', answer: 'No, our modern systems are designed to avoid any odour.' },
      { question: 'Will I still need an exhauster?', answer: 'No, our bio digesta eliminates the need for exhauster machines.' }
    ],
    relatedServices: ['9', '11']
  },
  {
    id: '11',
    slug: 'interior-finishing',
    title: 'Interior Finishing',
    shortDescription: 'Professional interior finishing services to elevate your spaces.',
    description: 'We provide top-notch interior finishing services, ensuring a clean, modern, and aesthetically pleasing look for your residential or commercial property. From painting to fixtures, we handle it all with precision.',
    icon: 'Paintbrush',
    image: '/images/services/interior-finishing/interior-finishing-1.webp',
    gallery: ["/images/services/interior-finishing/interior-finishing-1.webp","/images/services/interior-finishing/interior-finishing-2.webp","/images/services/interior-finishing/interior-finishing-3.webp","/images/services/interior-finishing/interior-finishing-4.webp","/images/services/interior-finishing/interior-finishing-5.webp"],
    features: [
      'Professional painting and wall finishing',
      'Ceiling and lighting installations',
      'High-quality material sourcing',
      'Modern aesthetics and styling',
      'Clean and precise workmanship'
    ],
    process: [
      { step: 1, title: 'Consultation & Design', description: 'Discussing your aesthetic preferences and material choices.' },
      { step: 2, title: 'Preparation', description: 'Preparing surfaces and the workspace for finishing.' },
      { step: 3, title: 'Execution', description: 'Applying paints, installing fixtures, and finishing surfaces.' },
      { step: 4, title: 'Final Inspection', description: 'A thorough walkthrough to ensure everything meets our high standards.' }
    ],
    faq: [
      { question: 'Do you help with material selection?', answer: 'Yes, we source high-quality materials and assist with design choices.' },
      { question: 'Is this for residential or commercial properties?', answer: 'We provide services for both.' }
    ],
    relatedServices: ['4', '6']
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
