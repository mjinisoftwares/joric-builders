export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Institutional' | 'Healthcare';
  date: string;
  completionDate: string;
  description: string;
  challenge: string;
  solution: string;
  services: string[];
  images: string[];
  details: {
    label: string;
    value: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedProjects: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Parkside Residential Complex',
    location: 'Kiambu, Kenya',
    category: 'Residential',
    date: '2023-01-15',
    completionDate: '2023-08-20',
    description: 'A modern 12-storey residential complex featuring 240 units with state-of-the-art amenities including swimming pools, gym facilities, and recreational areas.',
    challenge: 'The site had challenging soil conditions and complex drainage requirements in a densely populated area with strict environmental regulations.',
    solution: 'We conducted comprehensive soil investigations, designed specialized foundations, and implemented sustainable drainage systems while maintaining community relations.',
    services: ['Architectural Design', 'Structural Engineering', 'Construction Management'],
    images: [
      '/images/parkside-1.jpg',
      '/images/parkside-2.jpg',
      '/images/parkside-3.jpg',
      '/images/parkside-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'High-Rise Residential' },
      { label: 'Size', value: '45,000 m²' },
      { label: 'Units', value: '240 Apartments' },
      { label: 'Duration', value: '8 Months' },
      { label: 'Team Size', value: '150+ Workers' },
      { label: 'Investment', value: 'KES 2.5 Billion' },
    ],
    faq: [
      {
        question: 'What made this project unique?',
        answer: 'The combination of high-rise construction in a challenging urban environment with stringent environmental compliance requirements.',
      },
      {
        question: 'How was quality maintained?',
        answer: 'Through continuous site inspections, material testing, and third-party quality audits at every construction stage.',
      },
      {
        question: 'What technology was used?',
        answer: 'Advanced BIM modeling, drone surveying, real-time project monitoring, and modern precast systems.',
      },
    ],
    relatedProjects: ['2', '3'],
  },
  {
    id: '2',
    title: 'Westgate Shopping Mall Expansion',
    location: 'Nairobi, Kenya',
    category: 'Commercial',
    date: '2022-06-01',
    completionDate: '2023-12-15',
    description: 'A 50,000 m² commercial expansion featuring retail spaces, offices, and modern entertainment facilities.',
    challenge: 'Expansion had to be completed while the existing mall remained operational, requiring careful phasing and traffic management.',
    solution: 'We implemented a phased construction approach with separate access points, advanced traffic management, and night-time construction for critical activities.',
    services: ['Architectural Design', 'Construction Management', 'Interior & Exterior Finishes'],
    images: [
      '/images/westgate-1.jpg',
      '/images/westgate-2.jpg',
      '/images/westgate-3.jpg',
      '/images/westgate-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Commercial Complex' },
      { label: 'Size', value: '50,000 m²' },
      { label: 'Retail Spaces', value: '200+' },
      { label: 'Duration', value: '18 Months' },
      { label: 'Concurrent Operations', value: 'Yes' },
      { label: 'Investment', value: 'KES 1.8 Billion' },
    ],
    faq: [
      {
        question: 'How did you manage traffic during construction?',
        answer: 'Through dedicated entry/exit points, traffic diversions, and coordination with authorities during peak hours.',
      },
      {
        question: 'Was there any business disruption?',
        answer: 'Minimal disruption due to careful phasing. The mall remained operational throughout the expansion.',
      },
      {
        question: 'What modern features were included?',
        answer: 'Smart building systems, energy-efficient HVAC, advanced fire safety systems, and modern security infrastructure.',
      },
    ],
    relatedProjects: ['1', '4'],
  },
  {
    id: '3',
    title: 'Thika Industrial Park',
    location: 'Thika, Kenya',
    category: 'Industrial',
    date: '2022-03-20',
    completionDate: '2023-09-10',
    description: 'A 100,000 m² industrial park with 8 manufacturing facilities, warehouses, and infrastructure.',
    challenge: 'Complex site with poor existing infrastructure and the need for specialized facilities with specific load requirements.',
    solution: 'We designed robust infrastructure including heavy-duty foundations, specialized utilities, and optimized logistics flow.',
    services: ['Structural Engineering', 'Precast Slab Systems', 'Construction Management'],
    images: [
      '/images/thika-industrial-1.jpg',
      '/images/thika-industrial-2.jpg',
      '/images/thika-industrial-3.jpg',
      '/images/thika-industrial-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Industrial Complex' },
      { label: 'Site Area', value: '100,000 m²' },
      { label: 'Facilities', value: '8 Manufacturing Units' },
      { label: 'Duration', value: '18 Months' },
      { label: 'Heavy Load Capacity', value: 'Yes' },
      { label: 'Investment', value: 'KES 1.2 Billion' },
    ],
    faq: [
      {
        question: 'What made the foundations special?',
        answer: 'Heavy-duty foundations were designed to support industrial machinery loads up to 500 tons per unit.',
      },
      {
        question: 'How was infrastructure managed?',
        answer: 'We installed dedicated utilities including 3-phase power supply, water systems, and waste management.',
      },
      {
        question: 'Is the facility expandable?',
        answer: 'Yes, the design allows for future expansion and additional facilities on reserved land.',
      },
    ],
    relatedProjects: ['5', '6'],
  },
  {
    id: '4',
    title: 'St. Mary\'s Hospital Wing',
    location: 'Nairobi, Kenya',
    category: 'Healthcare',
    date: '2023-05-10',
    completionDate: '2024-02-28',
    description: 'A 200-bed healthcare facility wing with modern operating theaters, ICU, and diagnostic centers.',
    challenge: 'Healthcare facility requirements demanded strict compliance with medical standards, minimal noise, and continuous operational capability.',
    solution: 'Specialized soundproofing, vibration isolation, advanced MEP systems, and careful scheduling ensured zero disruption to existing operations.',
    services: ['Architectural Design', 'Structural Engineering', 'Interior & Exterior Finishes'],
    images: [
      '/images/hospital-1.jpg',
      '/images/hospital-2.jpg',
      '/images/hospital-3.jpg',
      '/images/hospital-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Healthcare Facility' },
      { label: 'Bed Capacity', value: '200 Beds' },
      { label: 'Operating Theaters', value: '6' },
      { label: 'Duration', value: '10 Months' },
      { label: 'Medical Standards', value: 'ISO Certified' },
      { label: 'Investment', value: 'KES 850 Million' },
    ],
    faq: [
      {
        question: 'What medical standards were followed?',
        answer: 'WHO standards, ISO certifications, and Kenyan healthcare building regulations.',
      },
      {
        question: 'How was infection control addressed?',
        answer: 'With dedicated HVAC systems, isolation rooms, and antimicrobial materials throughout.',
      },
      {
        question: 'What emergency systems are in place?',
        answer: 'Backup power, emergency water systems, and redundant communication networks.',
      },
    ],
    relatedProjects: ['4', '7'],
  },
  {
    id: '5',
    title: 'Nairobi Technical University Campus',
    location: 'Nairobi, Kenya',
    category: 'Institutional',
    date: '2022-09-01',
    completionDate: '2024-03-31',
    description: 'A comprehensive university campus development with lecture halls, laboratories, student housing, and sports facilities.',
    challenge: 'Large complex project requiring coordination of multiple facility types with different requirements and phased occupancy.',
    solution: 'We used advanced project management, modular construction, and precast systems to deliver on schedule and budget.',
    services: ['Architectural Design', 'Precast Slab Systems', 'Construction Management'],
    images: [
      '/images/campus-1.jpg',
      '/images/campus-2.jpg',
      '/images/campus-3.jpg',
      '/images/campus-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Educational Campus' },
      { label: 'Total Area', value: '75,000 m²' },
      { label: 'Buildings', value: '12 Major Structures' },
      { label: 'Duration', value: '24 Months' },
      { label: 'Student Capacity', value: '5,000' },
      { label: 'Investment', value: 'KES 2.2 Billion' },
    ],
    faq: [
      {
        question: 'How were multiple building types managed?',
        answer: 'Through detailed master planning and phased construction allowing parallel development.',
      },
      {
        question: 'Were sustainability practices included?',
        answer: 'Yes, solar power, rainwater harvesting, and energy-efficient systems throughout.',
      },
      {
        question: 'How flexible is the campus design?',
        answer: 'Designed with future expansion capability and modular spaces for evolving needs.',
      },
    ],
    relatedProjects: ['1', '5'],
  },
  {
    id: '6',
    title: 'Riverside Office Tower',
    location: 'Nairobi, Kenya',
    category: 'Commercial',
    date: '2023-02-01',
    completionDate: '2024-05-30',
    description: 'A 30-storey premium office tower with 45,000 m² of Grade A office space, featuring smart building technology.',
    challenge: 'Urban location near river with flood risk, high-rise requirements, and sophisticated building systems integration.',
    solution: 'Advanced flood management systems, intelligent building automation, and premium finishes created a world-class office environment.',
    services: ['Architectural Design', 'Structural Engineering', 'Interior & Exterior Finishes'],
    images: [
      '/images/riverside-1.jpg',
      '/images/riverside-2.jpg',
      '/images/riverside-3.jpg',
      '/images/riverside-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Office Tower' },
      { label: 'Height', value: '110 Meters' },
      { label: 'Office Space', value: '45,000 m²' },
      { label: 'Storeys', value: '30' },
      { label: 'Duration', value: '24 Months' },
      { label: 'Investment', value: 'KES 3.5 Billion' },
    ],
    faq: [
      {
        question: 'What smart building features are included?',
        answer: 'IoT sensors, automated HVAC, smart lighting, energy management, and occupancy systems.',
      },
      {
        question: 'How is river flooding managed?',
        answer: 'Elevated foundation, advanced drainage systems, and flood-resistant design specifications.',
      },
      {
        question: 'What tenant amenities are provided?',
        answer: 'Modern cafeterias, fitness centers, conference facilities, and secure parking.',
      },
    ],
    relatedProjects: ['2', '3'],
  },
  {
    id: '7',
    title: 'Kilimani Residential Estate',
    location: 'Nairobi, Kenya',
    category: 'Residential',
    date: '2022-11-15',
    completionDate: '2023-10-20',
    description: 'A 50-acre upscale residential estate with 180 luxury homes, resort-style amenities, and lush landscaping.',
    challenge: 'Large site with topographical variations, environmental conservation requirements, and luxury standards.',
    solution: 'Integrated landscape design, staggered architecture, sustainable practices, and phased development.',
    services: ['Architectural Design', 'Interior & Exterior Finishes', 'Construction Management'],
    images: [
      '/images/kilimani-1.jpg',
      '/images/kilimani-2.jpg',
      '/images/kilimani-3.jpg',
      '/images/kilimani-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Luxury Estate' },
      { label: 'Site Area', value: '50 Acres' },
      { label: 'Homes', value: '180 Units' },
      { label: 'Duration', value: '12 Months' },
      { label: 'Amenities', value: 'Golf, Pool, Spa, Club' },
      { label: 'Investment', value: 'KES 1.5 Billion' },
    ],
    faq: [
      {
        question: 'What luxury features are included?',
        answer: 'Private pools, home automation, premium finishes, and personalized landscaping.',
      },
      {
        question: 'Is the development sustainable?',
        answer: 'Yes, with solar power, rainwater harvesting, and green building practices.',
      },
      {
        question: 'What security measures are in place?',
        answer: '24/7 security, CCTV, gated access, and comprehensive estate management.',
      },
    ],
    relatedProjects: ['1', '8'],
  },
  {
    id: '8',
    title: 'Kisumu Business Park',
    location: 'Kisumu, Kenya',
    category: 'Industrial',
    date: '2023-04-01',
    completionDate: '2024-01-15',
    description: 'A 45,000 m² mixed-use business park with retail, offices, and light industrial spaces.',
    challenge: 'Regional city infrastructure limitations and diverse tenant requirements needed to be accommodated.',
    solution: 'Comprehensive infrastructure development with flexible spaces and phased tenant on-boarding.',
    services: ['Structural Engineering', 'Construction Management', 'Precast Slab Systems'],
    images: [
      '/images/kisumu-1.jpg',
      '/images/kisumu-2.jpg',
      '/images/kisumu-3.jpg',
      '/images/kisumu-4.jpg',
    ],
    details: [
      { label: 'Project Type', value: 'Business Park' },
      { label: 'Total Area', value: '45,000 m²' },
      { label: 'Tenant Spaces', value: '50+' },
      { label: 'Duration', value: '10 Months' },
      { label: 'Infrastructure', value: 'Complete' },
      { label: 'Investment', value: 'KES 580 Million' },
    ],
    faq: [
      {
        question: 'What makes this park attractive to businesses?',
        answer: 'Strategic location, modern infrastructure, flexible space options, and excellent accessibility.',
      },
      {
        question: 'Are expansion options available?',
        answer: 'Yes, adjacent land is reserved for future phases and expansion.',
      },
      {
        question: 'What utilities are available?',
        answer: '3-phase power, water supply, waste management, and high-speed internet connectivity.',
      },
    ],
    relatedProjects: ['3', '6'],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category);
}
