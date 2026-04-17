export const siteData = {
  name: 'Aidan J',
  role: 'Student Developer',
  location: 'India',
  focus: 'Frontend development, UI design, and learning full-stack fundamentals',
  availableFor: 'Learning, building projects, and collaboration',
  seoDescription:
    'Portfolio of a student developer building real projects with React, focusing on clean UI, structured code, and continuous improvement.',
  intro:
    'I am a student developer focused on learning by building real projects. I am currently improving my skills in JavaScript, React, and modern web development while creating projects that show clear progress over time.',
  about:
    'I am a student developer who enjoys turning ideas into websites and web apps that feel polished, useful, and easy to understand. Right now I am building my fundamentals in JavaScript, React, and modern frontend development while also learning how good developers explain their work, structure projects, and keep improving over time.',
  links: {
    github: 'https://github.com/Aidanj404',
    vercel: 'https://portfolio-cyan-eight-75.vercel.app',
  },
  highlights: [
    { value: '3', label: 'Projects built and documented' },
    { value: 'React', label: 'Main frontend framework' },
    { value: '16', label: 'Age while building this portfolio' },
  ],
  recruiterPoints: [
    'I focus on building projects instead of only following tutorials.',
  'I can clearly explain what I build and what I learn from it.',
  'This portfolio is structured to grow as I improve my skills.',
  ],
  learningNow: [
    'Building stronger React projects with reusable components and routing.',
    'Writing cleaner JavaScript and understanding APIs more deeply.',
    'Improving design taste so projects look intentional, not generic.',
    'Learning how deployment, GitHub workflows, and Vercel fit into real work.',
  ],
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Responsive Design', 'Git', 'GitHub', 'Vercel', 'Figma'],
  timeline: [
    {
      period: 'Now',
      title: 'Learning by building',
      description: 'Creating portfolio projects, UI experiments, and practical websites to strengthen fundamentals.',
    },
    {
      period: 'Next',
      title: 'Improving project depth',
      description: 'Turning projects into clearer case studies with better explanations and structure.',
    },
    {
      period: 'Future',
      title: 'Professional growth',
      description: 'Using this site as the base for freelance work, internships, and eventually a full developer resume.',
    },
  ],
}

export const projects = [
  {
    slug: 'student-portfolio-system',
    title: 'Student Portfolio System',
    category: 'Portfolio',
    year: '2026',
    status: 'In progress',
    role: 'Designer and developer',
    description:
      'A multi-page personal portfolio with editable project data, detailed case studies, and a contact flow designed for internships and future jobs.',
    stack: ['React', 'React Router', 'Vite', 'CSS', 'Framer Motion'],
    challenge:
      'Create a website that feels professional early in a coding journey without pretending to have years of experience.',
    solution:
      'Built a clean multi-page structure with honest writing, strong visual design, and reusable data-driven sections so the site can grow over time.',
    learnings:
      'A good portfolio is not about sounding advanced. It is about showing progress clearly and making updates easy.',
    outcomes: [
      'Created reusable project cards and dynamic detail pages.',
      'Added a contact experience without requiring a backend.',
      'Made the content easy to update from one data file.',
    ],
    links: {
      live: 'https://portfolio-cyan-eight-75.vercel.app',
      github: 'https://github.com/Aidanj404/portfolio',
    },
  },
  {
    slug: 'task-tracker-dashboard',
    title: 'Task Tracker Dashboard',
    category: 'Web App',
    year: '2026',
    status: 'Planned',
    role: 'Frontend developer',
    description:
      'A productivity dashboard concept for students to track tasks and deadlines.',
    challenge:
      'Design a simple and useful student dashboard.',
  },
  {
    slug: 'developer-links-hub',
    title: 'Developer Links Hub',
    category: 'Landing Page',
    year: '2025',
    status: 'Shipped',
    role: 'Frontend developer',
    description:
      'A branded profile hub for sharing GitHub, project demos, social links, and contact details in a single polished page.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    challenge:
      'Build something lightweight that loads fast, looks memorable, and gives visitors a clear next step.',
    solution:
      'Focused on a bold visual style, responsive layout, and short copy that helps people reach the right destination quickly.',
    learnings:
      'Fast, focused sites can still feel premium when typography, spacing, and color choices are handled carefully.',
    outcomes: [
      'Improved understanding of layout and responsive design.',
      'Created a practical asset for sharing work online.',
      'Learned how deployment on Vercel fits into a frontend workflow.',
    ],
    links: {
      live: 'https://developer-links-hub.vercel.app',
      github: 'https://github.com/yourusername/developer-links-hub',
    },
  },
]

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
