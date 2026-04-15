function App() {
  return (
    <div style={styles.app}>
      <Header />

      <div style={styles.grid}>
        <About />
        <Status />
        <div id="projects">
          <Projects />
        </div>
        <Contact />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Aidan</h1>
      <p style={styles.subtitle}>Developer • Student • Builder</p>
      <p style={{ opacity: 0.5, fontSize: "12px" }}>
        Available for learning • Building in public • Open to collaboration
      </p>

      <nav style={styles.nav}>
        <a style={styles.link} href="#about">About</a>
        <a style={styles.link} href="#projects">Projects</a>
        <a style={styles.link} href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Status() {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>System Status</h2>
      <p>All systems operational</p>
      <p>Focus: Learning React + Web Dev</p>
    </div>
  );
}

function About() {
  return (
    <div id="about" style={styles.card}>
      <h2 style={styles.cardTitle}>About</h2>
      <p>
        I’m a student developer focused on building real-world tools and learning modern web technologies.
        Currently working on React-based applications and system-focused projects.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Projects</h2>

      <Project
        title="System Monitor"
        desc="Tracks CPU, RAM usage and system performance in real time."
        github="https://github.com/Aidanj404/system-monitor"
      />

      <Project
        title="Portfolio Website"
        desc="Custom React portfolio with dark UI"
        github="https://github.com/Aidanj404/portfolio"
        live="https://portfolio-q34lwfh0c-aidanj404s-projects.vercel.app"
      />

      <Project
        title="Automation Toolkit"
        desc="Small Python scripts to automate repetitive tasks."
        github="https://github.com/Aidanj404/automation-toolkit"
      />
    </div>
  );
}

function Project({ title, desc, github, live }) {
  return (
    <div
      style={styles.project}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid #00ff88";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(0, 255, 136, 0.3)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <h3>{title}</h3>
      <p style={{ opacity: 0.7 }}>{desc}</p>

      <div style={{ marginTop: "10px" }}>
        {github && (
          <a href={github} target="_blank" rel="noreferrer" style={styles.link}>
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" style={styles.link}>
            Live
          </a>
        )}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" style={styles.card}>
      <h2 style={styles.cardTitle}>Contact</h2>
      <p>Email: yourname@email.com</p>
      <p>GitHub: github.com/yourprofile</p>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#0a0a0a",
    color: "#00ff88",
    padding: "40px 20px",
    fontFamily: "system-ui",
  },

  header: {
    marginBottom: "30px",
  },

  title: {
    fontSize: "48px",
    marginBottom: "5px",
    letterSpacing: "1px",
  },

  subtitle: {
    opacity: 0.6,
    fontSize: "14px",
  },

  nav: {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
  },

  link: {
    color: "#00ff88",
    textDecoration: "none",
    opacity: 0.7,
    marginRight: "10px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    border: "1px solid #00ff88",
    padding: "20px",
    borderRadius: "8px",
    background: "#111",
  },

  cardTitle: {
    marginBottom: "10px",
  },

  project: {
    border: "1px solid rgba(0, 255, 136, 0.3)",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    background: "#0f0f0f",
    transition: "0.2s ease",
    cursor: "pointer",
  },
};

export default App;
