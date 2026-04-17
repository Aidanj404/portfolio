import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectCategories, projects, siteData } from './content/siteData'

const MotionMain = motion.main

const pageMeta = {
  '/': {
    title: `${siteData.name} | Junior Developer Portfolio`,
    description: siteData.seoDescription,
  },
  '/about': {
    title: `About | ${siteData.name}`,
    description: `Learn more about ${siteData.name}, a student developer building web projects and growing a strong coding foundation.`,
  },
  '/projects': {
    title: `Projects | ${siteData.name}`,
    description: `Explore featured projects, experiments, and case studies built by ${siteData.name}.`,
  },
  '/contact': {
    title: `Contact | ${siteData.name}`,
    description: `Get in touch with ${siteData.name} for internships, freelance opportunities, or collaborations.`,
  },
}

function App() {
  return <SiteLayout />
}

function SiteLayout() {
  const location = useLocation()
  const meta = pageMeta[location.pathname] ?? {
    title: `Page Not Found | ${siteData.name}`,
    description: `The page you're looking for does not exist.`,
  }

  useEffect(() => {
    document.title = meta.title

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', meta.description)
  }, [meta.description, meta.title])

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <NavLink className="brand" to="/">
          <span className="brand-mark">AK</span>
          <div>
            <strong>{siteData.name}</strong>
            <span>{siteData.role}</span>
          </div>
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <a className="button button-small button-outline" href={siteData.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </header>

      <AnimatePresence mode="wait">
        <MotionMain
          key={location.pathname}
          className="page-shell"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MotionMain>
      </AnimatePresence>

      <footer className="site-footer">
        <p>Built with React, Vite, and a plan for steady growth.</p>
        <div className="footer-links">
          <a href={siteData.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteData.links.vercel} target="_blank" rel="noreferrer">
            Vercel
          </a>
          <a href={`mailto:${siteData.email}`}>Email</a>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
    >
      {children}
    </NavLink>
  )
}

function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Student developer portfolio</p>
          <h1>
            Building real projects now so future internships and jobs can see the work, not just the promise.
          </h1>
          <p className="hero-lead">{siteData.intro}</p>

          <div className="hero-actions">
            <NavLink className="button" to="/projects">
              View Projects
            </NavLink>
            <NavLink className="button button-secondary" to="/contact">
              Contact Me
            </NavLink>
          </div>

          <div className="hero-stats">
            {siteData.highlights.map((item) => (
              <article className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-title">Quick Snapshot</p>
          <ul className="info-list">
            <li>
              <span>Focus</span>
              <strong>{siteData.focus}</strong>
            </li>
            <li>
              <span>Location</span>
              <strong>{siteData.location}</strong>
            </li>
            <li>
              <span>Available For</span>
              <strong>{siteData.availableFor}</strong>
            </li>
          </ul>

          <div className="tag-grid">
            {siteData.skills.slice(0, 6).map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="grid-section">
        <SectionHeader
          eyebrow="Featured work"
          title="Projects that show your progress clearly"
          body="Each card is tied to editable data, so you can keep adding projects without redesigning the site every time."
        />

        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="glass-card">
          <SectionHeader
            eyebrow="Why this works"
            title="Made for where you are right now"
            body="You do not need ten years of experience to have a strong portfolio. You need clear projects, honest writing, and a site that looks intentional."
          />
        </div>

        <div className="glass-card">
          <p className="panel-title">What recruiters should notice</p>
          <ul className="bullet-list">
            {siteData.recruiterPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="page-stack">
      <section className="glass-card long-card">
        <SectionHeader eyebrow="About me" title="A strong start matters more than pretending to be senior" />
        <p className="body-copy">{siteData.about}</p>
      </section>

      <section className="split-section">
        <div className="glass-card">
          <p className="panel-title">Current learning path</p>
          <ul className="bullet-list">
            {siteData.learningNow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="glass-card">
          <p className="panel-title">Skills stack</p>
          <div className="tag-grid">
            {siteData.skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-card">
        <SectionHeader
          eyebrow="Journey"
          title="A portfolio should make growth visible"
          body="This timeline gives your site a real story instead of just a list of tools."
        />

        <div className="timeline">
          {siteData.timeline.map((step) => (
            <article className="timeline-item" key={step.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-kicker">{step.period}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="page-stack">
      <section className="glass-card long-card">
        <SectionHeader
          eyebrow="Projects"
          title="A growing library of work, experiments, and case studies"
          body="Update the data file with each new project and this page will expand automatically."
        />

        <div className="filter-row" role="tablist" aria-label="Project categories">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-pill${activeCategory === category ? ' filter-pill-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <div className="page-stack">
      <section className="hero-card project-hero-card">
        <div className="hero-copy">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="hero-lead">{project.description}</p>

          <div className="hero-actions">
            <a className="button" href={project.links.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a className="button button-secondary" href={project.links.github} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-title">Project Details</p>
          <ul className="info-list">
            <li>
              <span>Year</span>
              <strong>{project.year}</strong>
            </li>
            <li>
              <span>Status</span>
              <strong>{project.status}</strong>
            </li>
            <li>
              <span>Role</span>
              <strong>{project.role}</strong>
            </li>
          </ul>
        </aside>
      </section>

      <section className="split-section">
        <div className="glass-card">
          <p className="panel-title">Stack</p>
          <div className="tag-grid">
            {project.stack.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <p className="panel-title">Key wins</p>
          <ul className="bullet-list">
            {project.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="glass-card long-card">
        <p className="panel-title">Case Study</p>
        <div className="case-study">
          <article>
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </article>
          <article>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </article>
          <article>
            <h3>What I learned</h3>
            <p>{project.learnings}</p>
          </article>
        </div>
      </section>
    </div>
  )
}

function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
    )

    window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with a ready-to-send message.')
  }

  return (
    <div className="page-stack">
      <section className="split-section">
        <div className="glass-card">
          <SectionHeader
            eyebrow="Contact"
            title="Ready for internships, freelance work, and collaborations"
            body="This form opens a drafted email so people can contact you immediately without needing a backend."
          />

          <div className="contact-links">
            <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
            <a href={siteData.links.github} target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
            <a href={siteData.links.vercel} target="_blank" rel="noreferrer">
              Vercel Portfolio Deployments
            </a>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formState.name} onChange={handleChange} placeholder="Your name" required />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about the role, project, or opportunity."
              rows="6"
              required
            />
          </label>

          <button className="button" type="submit">
            Open Email Draft
          </button>

          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </section>
    </div>
  )
}

function NotFoundPage() {
  return (
    <section className="glass-card long-card not-found-card">
      <SectionHeader
        eyebrow="404"
        title="That page is missing"
        body="The route does not exist yet, but your portfolio is ready to keep growing."
      />
      <NavLink className="button" to="/">
        Back Home
      </NavLink>
    </section>
  )
}

function SectionHeader({ eyebrow, title, body }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p className="section-body">{body}</p> : null}
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <p className="project-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tag-grid compact-tags">
        {project.stack.slice(0, 4).map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <NavLink className="text-link" to={`/projects/${project.slug}`}>
          Read case study
        </NavLink>
        <a className="text-link" href={project.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}

export default App
