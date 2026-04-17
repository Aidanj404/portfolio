export const siteData = {
  name: 'Aidan Kumar',
  role: 'Junior Frontend & Web Developer',
  email: 'aidan.dev@example.com',
  location: 'India',
  focus: 'Frontend, UI design, and full-stack learning',
  availableFor: 'Internships, freelance projects, junior roles',
  seoDescription:
    'A modern student developer portfolio featuring projects, case studies, skills, and contact details for internships and future jobs.',
  intro:
    'I am 16 and just entering the coding field, but I am already focused on building real projects, improving fast, and turning curiosity into strong technical work. This portfolio is designed to grow with me as I learn and ship more.',
  about:
    'I am a student developer who enjoys turning ideas into websites and web apps that feel polished, useful, and easy to understand. Right now I am building my fundamentals in JavaScript, React, and modern frontend development while also learning how good developers explain their work, structure projects, and keep improving over time.',
  links: {
    github: 'https://github.com/yourusername',
    vercel: 'https://vercel.com/yourusername',
  },
  highlights: [
    { value: '3+', label: 'Featured projects ready to show' },
    { value: '100%', label: 'Responsive pages across devices' },
    { value: '1 place', label: 'To grow your career story' },
  ],
  recruiterPoints: [
    'You ship projects instead of only following tutorials.',
    'You can explain what you built, why it matters, and what you learned.',
    'Your portfolio already has structure for future internships and case studies.',
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
      title: 'Internship-ready case studies',
      description: 'Turning projects into stronger writeups with goals, challenges, and results that employers can scan quickly.',
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
    status: 'Live foundation',
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
      live: 'https://your-portfolio.vercel.app',
      github: 'https://github.com/yourusername/portfolio',
    },
  },
  {
    slug: 'task-tracker-dashboard',
    title: 'Task Tracker Dashboard',
    category: 'Web App',
    year: '2026',
    status: 'Concept project',
    role: 'Frontend developer',
    description:
      'A productivity dashboard concept for students to track assignments, deadlines, and daily focus sessions in one place.',
    stack: ['React', 'CSS Grid', 'Local Storage', 'JavaScript'],
    challenge:
      'Design a student-friendly dashboard that feels simple while still showing enough information to be useful.',
    solution:
      'Used a card-based layout, strong visual hierarchy, and lightweight storage patterns to keep the app fast and clear.',
    learnings:
      'Small UX choices like grouping, spacing, and empty states matter as much as code when building a useful interface.',
    outcomes: [
      'Practiced state management and UI composition.',
      'Built a cleaner dashboard layout for desktop and mobile.',
      'Created a project that can evolve into a more complete SaaS idea later.',
    ],
    links: {
      live: 'https://task-tracker-demo.vercel.app',
      github: 'https://github.com/yourusername/task-tracker-dashboard',
    },
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
