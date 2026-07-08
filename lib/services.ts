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
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'architectural-design',
    title: 'Architectural Design',
    shortDescription: 'Professional architectural design services including 3D rendering and structural analysis.',
    description: 'Our architectural design team creates innovative, functional, and aesthetically pleasing designs tailored to your vision. We handle everything from conceptualization to detailed construction drawings, ensuring compliance with local building codes and international standards.',
    icon: 'Hammer',
    image: '/images/architectural-design.png',
    features: [
      '3D Rendering & Visualization',
      'Detailed Construction Drawings',
      'Building Code Compliance',
      'Space Planning & Optimization',
      'Material Specifications',
      'Interior Design Concepts',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We meet with you to understand your vision, requirements, budget, and timeline for the project.',
      },
      {
        step: 2,
        title: 'Concept Design',
        description: 'Our architects develop initial concept sketches and 3D renderings for your review and feedback.',
      },
      {
        step: 3,
        title: 'Detailed Design',
        description: 'We refine the design and prepare detailed architectural and structural drawings.',
      },
      {
        step: 4,
        title: 'Technical Documentation',
        description: 'Complete specifications, material lists, and Bills of Quantities are prepared for construction.',
      },
    ],
    faq: [
      {
        question: 'How long does the architectural design process take?',
        answer: 'Typically 4-8 weeks depending on project complexity, scope, and revision cycles.',
      },
      {
        question: 'Do you provide 3D renderings?',
        answer: 'Yes, we provide high-quality 3D renderings for all architectural designs to help visualize the final project.',
      },
      {
        question: 'Are your designs compliant with Kenyan building codes?',
        answer: 'Absolutely. All our designs comply with Kenyan building codes, standards, and regulations.',
      },
      {
        question: 'Can you redesign an existing structure?',
        answer: 'Yes, we offer redesign services including additions, renovations, and modernization projects.',
      },
    ],
    relatedServices: ['2', '3'],
  },
  {
    id: '2',
    slug: 'structural-engineering',
    title: 'Structural Engineering',
    shortDescription: 'Expert structural analysis, design, and engineering for safe, durable buildings.',
    description: 'Our structural engineers provide comprehensive analysis and design services ensuring your building is safe, stable, and durable. We use advanced engineering software and proven methodologies to optimize structural integrity while minimizing costs.',
    icon: 'Building2',
    image: '/images/structural-engineering.png',
    features: [
      'Structural Analysis & Design',
      'Load Calculations',
      'Foundation Design',
      'Soil Investigation',
      'Safety Certifications',
      'Quality Assurance Testing',
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey & Analysis',
        description: 'We conduct soil investigations and site surveys to understand ground conditions and bearing capacity.',
      },
      {
        step: 2,
        title: 'Load Calculation',
        description: 'All structural loads are calculated based on building codes and project specifications.',
      },
      {
        step: 3,
        title: 'Design Development',
        description: 'Our engineers develop detailed structural designs using advanced CAD and engineering software.',
      },
      {
        step: 4,
        title: 'Documentation & Certification',
        description: 'Complete structural drawings and calculations are certified by registered structural engineers.',
      },
    ],
    faq: [
      {
        question: 'What is soil investigation and why is it important?',
        answer: 'Soil investigation determines the ground\'s bearing capacity and characteristics, essential for safe foundation design.',
      },
      {
        question: 'How do you ensure structural safety?',
        answer: 'We follow strict design codes, conduct thorough analysis, and apply safety factors to all calculations.',
      },
      {
        question: 'Can you handle complex structural designs?',
        answer: 'Yes, we have expertise in complex structures including multi-story buildings, bridges, and special structures.',
      },
      {
        question: 'What certifications do your structural engineers have?',
        answer: 'Our engineers are registered with Engineers Board of Kenya and certified in structural engineering.',
      },
    ],
    relatedServices: ['1', '3'],
  },
  {
    id: '3',
    slug: 'precast-slab-systems',
    title: 'Precast Slab Systems',
    shortDescription: 'Manufacturing and installation of rib beams, flat beams, and blocks for efficient construction.',
    description: 'We manufacture and install high-quality precast slab systems including rib beams, flat beams, and concrete blocks. Our systems offer cost-effective solutions with reduced construction time and superior quality control.',
    icon: 'Zap',
    image: '/images/precast-slabs.png',
    features: [
      'Rib Beam Production',
      'Flat Beam Manufacturing',
      'Block Production',
      'Professional Installation',
      'Quality Testing',
      'Cost Optimization',
    ],
    process: [
      {
        step: 1,
        title: 'Design Review',
        description: 'We review structural design specifications to determine optimal slab system configuration.',
      },
      {
        step: 2,
        title: 'Manufacturing',
        description: 'High-quality precast elements are manufactured in our state-of-the-art facilities.',
      },
      {
        step: 3,
        title: 'Quality Inspection',
        description: 'All precast units undergo rigorous testing and quality control before dispatch.',
      },
      {
        step: 4,
        title: 'Site Installation',
        description: 'Our experienced team professionally installs all precast elements on site with precision.',
      },
    ],
    faq: [
      {
        question: 'What are the advantages of precast slabs?',
        answer: 'Precast slabs offer faster construction, better quality control, cost savings, and durability.',
      },
      {
        question: 'How long does installation take?',
        answer: 'Installation speed depends on project size, but precast systems are typically 30-40% faster than cast-in-place.',
      },
      {
        question: 'Are precast elements durable?',
        answer: 'Yes, our precast units are designed for 50+ years lifespan and can withstand harsh environmental conditions.',
      },
      {
        question: 'Can you customize precast designs?',
        answer: 'Absolutely, we customize precast systems to match specific structural and architectural requirements.',
      },
    ],
    relatedServices: ['1', '4'],
  },
  {
    id: '4',
    slug: 'construction-management',
    title: 'Construction Management',
    shortDescription: 'Professional project management from concept to completion with quality assurance.',
    description: 'We provide end-to-end construction management services ensuring projects are completed on time, within budget, and to specification. Our experienced team manages all aspects of construction coordination, quality control, and safety.',
    icon: 'Hammer',
    image: '/images/construction-management.jpg',
    features: [
      'Project Planning & Scheduling',
      'Budget Management',
      'Site Supervision',
      'Quality Control',
      'Safety Management',
      'Contractor Coordination',
    ],
    process: [
      {
        step: 1,
        title: 'Project Planning',
        description: 'Comprehensive project plans are developed including schedules, budgets, and quality standards.',
      },
      {
        step: 2,
        title: 'Contractor Selection',
        description: 'Qualified contractors are selected based on experience, capability, and cost-effectiveness.',
      },
      {
        step: 3,
        title: 'Site Management',
        description: 'Our site managers oversee daily construction activities, quality, and safety compliance.',
      },
      {
        step: 4,
        title: 'Completion & Handover',
        description: 'Final inspections, punch-list corrections, and project handover to the client.',
      },
    ],
    faq: [
      {
        question: 'How do you manage construction budgets?',
        answer: 'We maintain strict cost control through vendor management, competitive bidding, and regular budget reviews.',
      },
      {
        question: 'What quality standards do you follow?',
        answer: 'We follow Kenyan building standards, ISO quality standards, and international best practices.',
      },
      {
        question: 'How do you handle project delays?',
        answer: 'Through proactive planning, contingency management, and quick problem-solving to minimize delays.',
      },
      {
        question: 'Do you provide project documentation?',
        answer: 'Yes, we maintain comprehensive project records including daily reports, invoices, and completion certificates.',
      },
    ],
    relatedServices: ['1', '2', '3'],
  },
  {
    id: '5',
    slug: 'interior-exterior-finishes',
    title: 'Interior & Exterior Finishes',
    shortDescription: 'High-quality finishing services including painting, tiling, and landscaping.',
    description: 'From premium interior finishes to exterior aesthetics, we deliver polished results that enhance both beauty and functionality. Our finishing services include painting, tiling, flooring, and landscape design.',
    icon: 'Palette',
    image: '/images/interior-finishes.jpg',
    features: [
      'Interior Painting & Decoration',
      'Exterior Finishing',
      'Tiling & Flooring',
      'Landscaping Design',
      'Facade Systems',
      'Custom Finishes',
    ],
    process: [
      {
        step: 1,
        title: 'Design Consultation',
        description: 'We consult on color schemes, materials, and finishes that match your vision and budget.',
      },
      {
        step: 2,
        title: 'Material Selection',
        description: 'Premium materials are selected ensuring durability and aesthetic appeal.',
      },
      {
        step: 3,
        title: 'Preparation & Installation',
        description: 'Surfaces are properly prepared and finishes are professionally applied.',
      },
      {
        step: 4,
        title: 'Final Inspection',
        description: 'Thorough quality check ensures all finishes meet your expectations.',
      },
    ],
    faq: [
      {
        question: 'What painting systems do you use?',
        answer: 'We use premium quality paints from reputable manufacturers with excellent durability and finish.',
      },
      {
        question: 'Can you handle custom tile designs?',
        answer: 'Yes, we can create custom tile patterns and designs for unique aesthetic appeal.',
      },
      {
        question: 'Do you offer landscaping services?',
        answer: 'Yes, we provide complete landscaping design and installation services for outdoor spaces.',
      },
      {
        question: 'How long do finishes last?',
        answer: 'Quality finishes typically last 10-15 years or more depending on maintenance and exposure.',
      },
    ],
    relatedServices: ['4', '6'],
  },
  {
    id: '6',
    slug: 'structural-extensions',
    title: 'Structural Extensions',
    shortDescription: 'Professional design and construction of building extensions and additions.',
    description: 'Whether you need additional space or structural upgrades, we design and construct extensions that seamlessly integrate with your existing structure. Our team ensures structural integrity, aesthetic harmony, and regulatory compliance.',
    icon: 'Building2',
    image: '/images/structural-extensions.jpg',
    features: [
      'Existing Structure Assessment',
      'Extension Design & Engineering',
      'Load Transfer Design',
      'Seamless Integration',
      'Code Compliance',
      'Minimal Disruption Construction',
    ],
    process: [
      {
        step: 1,
        title: 'Existing Building Audit',
        description: 'We assess the existing structure to understand its capacity and constraints.',
      },
      {
        step: 2,
        title: 'Extension Design',
        description: 'Extensions are designed to integrate seamlessly with proper load transfers.',
      },
      {
        step: 3,
        title: 'Engineering Approval',
        description: 'Designs are certified by structural engineers and approved by relevant authorities.',
      },
      {
        step: 4,
        title: 'Construction Implementation',
        description: 'Extensions are built with minimal disruption using phased construction techniques.',
      },
    ],
    faq: [
      {
        question: 'How do you ensure the extension matches the existing building?',
        answer: 'We match materials, architectural style, and design language for visual cohesion.',
      },
      {
        question: 'What approvals are needed for extensions?',
        answer: 'Extensions typically require council approvals and structural certifications, which we handle.',
      },
      {
        question: 'Can you extend old buildings?',
        answer: 'Yes, we specialize in extending buildings of all ages with proper structural reinforcement.',
      },
      {
        question: 'How long do extension projects take?',
        answer: 'Timeline depends on size and complexity, typically ranging from 2-6 months.',
      },
    ],
    relatedServices: ['1', '2', '4'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id);
}
