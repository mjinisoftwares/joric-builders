export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'James Mwangi',
    role: 'Project Manager',
    company: 'Parkside Developments',
    image: '/images/testimonial-1.jpg',
    testimonial: 'Joric Builders delivered exceptional quality on our residential complex. Their attention to detail, professionalism, and commitment to timelines was outstanding. I highly recommend them for any construction project.',
    rating: 5,
    project: 'Parkside Residential Complex',
  },
  {
    id: '2',
    name: 'Sarah Kipchoge',
    role: 'Development Director',
    company: 'Westgate Properties',
    image: '/images/testimonial-2.jpg',
    testimonial: 'The expansion project was completed while our mall remained fully operational. Joric Builders\' expertise in project management and traffic coordination was impressive. Professional team!',
    rating: 5,
    project: 'Westgate Shopping Mall Expansion',
  },
  {
    id: '3',
    name: 'David Kariuki',
    role: 'Operations Manager',
    company: 'Thika Industrial Solutions',
    image: '/images/testimonial-3.jpg',
    testimonial: 'Our industrial park is now fully operational with zero production delays. The structural engineering and heavy-load design specifications were perfect. Great partnership with Joric Builders.',
    rating: 5,
    project: 'Thika Industrial Park',
  },
  {
    id: '4',
    name: 'Dr. Grace Njoroge',
    role: 'Medical Director',
    company: 'St. Mary\'s Hospital',
    image: '/images/testimonial-4.jpg',
    testimonial: 'The new hospital wing met all medical standards and opened on schedule. The team\'s understanding of healthcare facility requirements was evident in every detail. Excellent work!',
    rating: 5,
    project: 'St. Mary\'s Hospital Wing',
  },
  {
    id: '5',
    name: 'Prof. Peter Omondi',
    role: 'Vice Chancellor',
    company: 'Nairobi Technical University',
    image: '/images/testimonial-5.jpg',
    testimonial: 'The campus development was executed flawlessly with minimal disruption to ongoing academic activities. Joric Builders\' project management expertise was invaluable.',
    rating: 5,
    project: 'Nairobi Technical University Campus',
  },
  {
    id: '6',
    name: 'Michael Chen',
    role: 'Property Developer',
    company: 'Riverside Development Ltd',
    image: '/images/testimonial-6.jpg',
    testimonial: 'The office tower is now a landmark in Nairobi. Smart building systems work perfectly, and the architectural design is stunning. Joric Builders exceeded our expectations!',
    rating: 5,
    project: 'Riverside Office Tower',
  },
];
