export const HOME_DATA = {
  hero: {
    badge: 'Groundworks & Construction Specialists',
    title: 'Professional Groundwork. Quality Results.',
    description:
      'Calbernia Construction delivers professional groundwork and construction services built on over 10 years of experience, reliability and quality craftsmanship.',
    backgroundImage: '/images/plan1.jpg',
    primaryButton: 'Get a Free Quote',
    secondaryButton: 'Explore Our Services',
    contactPoints: ['Professional Groundworks', 'Residential & Commercial'],
  },

  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '4.9★', label: 'Customer Rating' },
    { value: '24/7', label: 'Support' },
  ],

  servicesSection: {
    label: 'WHAT WE DO',
    title: 'Our Professional Services',
    description:
      'From groundwork preparation to drainage, paving and landscaping, we provide dependable construction services to bring your project to life.',
  },

  services: [
    {
      icon: 'landscape',
      title: 'Groundworks',
      description:
        'Professional groundwork and excavation services for residential and commercial projects.',
      image: '/images/ground.webp',
      imageAlt: 'Groundwork and excavation project',
    },

    {
      icon: 'garden',
      title: 'Drainage',
      description: 'Reliable drainage installation, preparation and solutions.',
      image: '/images/drain.webp',
      imageAlt: 'Drainage installation project',
    },

    {
      icon: 'hardscape',
      title: 'Paving',
      description: 'Quality paving, patios and outdoor surfaces built to last.',
      image: '/images/pave.png',
      imageAlt: 'Paving and hardscape project',
    },

    {
      icon: 'roofing',
      title: 'Property Maintenance',
      description: 'Professional exterior improvements and property maintenance.',
      image: '/images/roofing.png',
      imageAlt: 'Roofing and property maintenance project',
    },
  ],

  projectsSection: {
    label: 'OUR WORK',
    title: 'Quality Workmanship. Lasting Results.',
    description: 'Explore our groundwork, paving and construction projects.',
  },

  projects: [
    {
      title: 'Groundwork Preparation',
      category: 'Groundworks',
      image: '/images/mud.png',
      imageAlt: 'Ground preparation and earthworks',
    },

    {
      title: 'Outdoor Decking',
      category: 'Outdoor Projects',
      image: '/images/deck.png',
      imageAlt: 'Outdoor decking project',
    },

    {
      title: 'Blockwork & Construction',
      category: 'Construction',
      image: '/images/block.png',
      imageAlt: 'Blockwork and construction project',
    },
  ],

  testimonialsSection: {
    label: 'CLIENT FEEDBACK',
    title: 'What Our Customers Say',
    description: 'We take pride in delivering reliable workmanship and professional service.',
  },

  testimonials: [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      quote:
        'Calbernia Construction completely transformed our outdoor space. The team was professional and the results were excellent.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },

    {
      name: 'David Reynolds',
      role: 'Property Manager',
      quote:
        'Reliable, professional and easy to work with. The quality of workmanship was excellent.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ],

  cta: {
    label: "LET'S GET YOUR PROJECT STARTED",
    title: 'Ready to Start Your Next Project?',
    description:
      'Contact us today and discover how we can help with your groundwork and construction requirements.',
    buttonText: 'Get Your Free Quote',
  },
} as const;
