export const siteData = {
  name: 'Aidan J',
  role: 'Student Developer',
  email: 'aidanj6583@outlook.com',
  location: 'India',
  focus: 'Frontend development and learning full-stack fundamentals',
  availableFor: 'Learning, building projects, and future opportunities',

  seoDescription:
    'Portfolio of a student developer building real projects using React and modern web technologies.',

  intro:
    'I am a student developer focused on learning by building real projects. I am currently working with JavaScript and React and improving by building and deploying projects.',

  about:
    'I enjoy building simple and clean web interfaces and improving them over time. My current focus is strengthening my frontend skills, understanding how real projects are structured, and learning how to turn ideas into working applications.',

  links: {
    github: 'https://github.com/Aidanj404',
    portfolio: 'https://portfolio-88s9mt81h-aidanj404s-projects.vercel.app',
  },

  highlights: [
    { value: '2', label: 'Projects built' },
    { value: 'React', label: 'Primary framework' },
    { value: '16', label: 'Age while learning development' },
  ],

  recruiterPoints: [
    'Builds projects while learning instead of only following tutorials.',
    'Understands basic React structure and deployment workflow.',
    'Portfolio is structured to improve over time with better projects.',
  ],

  learningNow: [
    'Improving React projects with routing and reusable components',
    'Writing cleaner JavaScript and understanding core concepts',
    'Building projects from scratch instead of following tutorials',
    'Understanding Git and deployment workflows',
  ],

  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Vite',
    'Responsive Design',
    'Git',
    'GitHub',
    'Vercel',
  ],

  timeline: [
    {
      period: 'Now',
      title: 'Learning by building',
      description:
        'Working on portfolio projects and small applications to improve fundamentals.',
    },
    {
      period: 'Next',
      title: 'Stronger projects',
      description:
        'Building more complete projects with better structure and real use cases.',
    },
    {
      period: 'Future',
      title: 'Career growth',
      description:
        'Preparing for internships and real-world development work.',
    },
  ],
};

export const projects = [
  {
    slug: 'student-portfolio-system',
    title: 'Portfolio Website',
    category: 'Portfolio',
    year: '2026',
    status: 'In progress',
    role: 'Frontend developer',

    description:
      'A personal portfolio built using React to showcase projects and track learning progress.',

    stack: ['React', 'React Router', 'Vite', 'CSS'],

    challenge:
      'Build a clean and structured portfolio while still learning core frontend concepts.',

    solution:
      'Created reusable components, added routing, and structured project data to make the site scalable.',

    learnings:
      'Learned how React components, routing, and deployment work together in a real project.',

    outcomes: [
      'Built and deployed a portfolio using Vercel',
      'Structured content using reusable data files',
      'Improved understanding of project organization',
    ],

    links: {
      live: 'https://portfolio-88s9mt81h-aidanj404s-projects.vercel.app',
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
      'A planned dashboard to help students manage tasks and deadlines.',

    stack: ['React', 'CSS', 'Local Storage'],

    challenge:
      'Design a simple and useful dashboard for managing daily tasks.',

    links: {
      github: 'https://github.com/Aidanj404/task-tracker-dashboard',
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
      'A simple personal links page to share GitHub and other profiles in one place.',

    stack: ['HTML', 'CSS', 'JavaScript'],

    challenge:
      'Create a lightweight page that loads fast and looks clean.',

    solution:
      'Used simple layout and responsive design to keep it minimal and usable.',

    learnings:
      'Improved understanding of layout, spacing, and basic deployment.',

    outcomes: [
      'Built a responsive static page',
      'Deployed using Vercel',
      'Created a simple shareable profile page',
    ],

    links: {
      live: 'https://developer-links-hub.vercel.app',
      // ADD GitHub only if it actually exists
    },
  },
];

export const projectCategories = ['All', ...new Set(projects.map((project) => project.category))]
