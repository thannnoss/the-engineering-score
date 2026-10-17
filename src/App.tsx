import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const staffLines = [0, 1, 2, 3, 4];

const projects = [
  {
    number: "01",
    title: "AI Study Coach",
    category: "FLYRANK AI / ARTIFICIAL INTELLIGENCE",
    description:
      "An AI study assistant that works with study material to help learners find answers to their questions.",
    tags: ["AI", "RAG", "Education"],
    href: "https://github.com/thannnoss/AI-Study-Coach",
    linkLabel: "VIEW SOURCE",
    featured: false,
    group: "FLYRANK AI",
  },
  {
    number: "02",
    title: "PDF Report Generator",
    category: "FLYRANK AI / AUTOMATION",
    description:
      "A backend project focused on generating PDF reports through a software workflow.",
    tags: ["Automation", "PDF", "Backend"],
    href: "https://github.com/thannnoss/pdf-report-generator",
    linkLabel: "VIEW SOURCE",
    featured: false,
    group: "FLYRANK AI",
  },
  {
    number: "03",
    title: "Career Compass AI",
    category: "FLYRANK AI / CAREER GUIDANCE",
    description:
      "An AI application focused on career guidance and decision-making.",
    tags: ["AI", "Career", "Web App"],
    href: "https://careercompass-ai-71.lovable.app",
    linkLabel: "OPEN LIVE PROJECT",
    featured: false,
    group: "FLYRANK AI",
  },
  {
    number: "04",
    title: "Image Match AI",
    category: "FLYRANK AI / IMAGE MATCHING",
    description:
      "An AI-oriented web application built around image matching.",
    tags: ["AI", "Images", "Web App"],
    href: "https://content-sense-engine.lovable.app",
    linkLabel: "OPEN LIVE PROJECT",
    featured: false,
    group: "FLYRANK AI",
  },
  {
    number: "05",
    title: "AI Decision Weaver",
    category: "FLYRANK AI / DECISION SUPPORT",
    description:
      "An AI application designed around structured decision-making.",
    tags: ["AI", "Decision Support", "Web App"],
    href: "https://decision-canvas-58.lovable.app",
    linkLabel: "OPEN LIVE PROJECT",
    featured: false,
    group: "FLYRANK AI",
  },
  {
    number: "06",
    title: "One Click — Cyber Safety",
    category: "HACKFUSHION / CYBERSECURITY",
    description:
      "A gamified cyber-safety platform featuring lessons, simulations, quizzes, dashboards, and educator analytics. Built by a four-member team during a 20-hour hackathon.",
    tags: ["Cybersecurity", "Gamification", "Hackathon"],
    href: "https://one-click-frontend-aexm.vercel.app/",
    linkLabel: "EXPLORE LIVE PROJECT",
    featured: true,
    group: "HACKATHON",
  },
];

const certifications = [
  {
    title: "Claude on Google Cloud",
    issuer: "Anthropic",
    date: "July 2026",
    href: "",
  },
  {
    title: "Claude with Google Vertex AI",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/n78dxh4xirno",
  },
  {
    title: "Claude with Amazon Bedrock",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/zamr4ps3fvgg",
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/msyjyrmgvicy",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/o6iizxmefi3y",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/uutoa4np23uh",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/5mvrh8js4b7f",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "July 2026",
    href: "https://verify.skilljar.com/c/8yny2ujy4r6s",
  },
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "February 2026",
    href: "https://www.credly.com/badges/a45b733e-8976-42e7-93f1-8aded6519481/print",
  },
  {
    title: "Goldman Sachs — Operations Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    href: "https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_68bbcc6f011e194f47a605e3_1768294150728_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia — Technology Job Simulation",
    issuer: "Forage",
    date: "December 2025",
    href: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68bbcc6f011e194f47a605e3_1765016281562_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia — Cyber Job Simulation",
    issuer: "Forage",
    date: "September 2025",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_68bbcc6f011e194f47a605e3_1757749121400_completion_certificate.pdf",
  },
  {
    title: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    date: "September 2025",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68bbcc6f011e194f47a605e3_1757142750121_completion_certificate.pdf",
  },
];

function MusicalStaff() {
  return (
    <div
      className="score-system"
      aria-label="Musical score evolving into engineering circuitry"
    >
      <div className="score-heading">
        <span>OPUS 001</span>
        <span>ENGINEERING IN MOTION</span>
      </div>

      <div className="musical-staff" aria-hidden="true">
        {staffLines.map((line) => (
          <div className="staff-line" key={line}>
            <span className={`staff-note note-${line}`} />
          </div>
        ))}

        <span className="clef-symbol">𝄞</span>
        <span className="score-note score-note-one">●</span>
        <span className="score-note score-note-two">●</span>
        <span className="score-note score-note-three">●</span>

        <svg
          className="circuit-overlay"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="circuit-path circuit-path-one"
            d="M 500 65 L 610 65 L 650 25 L 760 25 L 800 65 L 940 65"
          />
          <path
            className="circuit-path circuit-path-two"
            d="M 650 25 L 650 95 L 720 95 L 750 65"
          />
          <path
            className="circuit-path circuit-path-three"
            d="M 800 65 L 830 95 L 920 95"
          />
          <circle className="circuit-node node-a" cx="650" cy="25" r="4" />
          <circle className="circuit-node node-b" cx="800" cy="65" r="4" />
          <circle className="circuit-node node-c" cx="920" cy="95" r="4" />
        </svg>

        <span className="signal signal-one" />
        <span className="signal signal-two" />
      </div>

      <div className="score-caption">
        <span>IDEA</span>
        <span className="caption-line" />
        <span>STRUCTURE</span>
        <span className="caption-line" />
        <span>EXECUTION</span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <motion.article
      className={`project-row${project.featured ? " featured-project" : ""}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <span className="project-number">{project.number}</span>

      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          className="project-link"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.linkLabel}: ${project.title}`}
        >
          {project.linkLabel} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <span className="project-type">
        {project.featured ? "FEATURED" : project.number}
      </span>

      <span className="project-arrow" aria-hidden="true">
        ↗
      </span>
    </motion.article>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [issuer, setIssuer] = useState("ALL");

  const issuers = [
    "ALL",
    ...Array.from(new Set(certifications.map((item) => item.issuer))),
  ];

  const filteredCertifications = useMemo(
    () =>
      certifications.filter((item) => {
        const matchesSearch = `${item.title} ${item.issuer} ${item.date}`
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchesIssuer =
          issuer === "ALL" || item.issuer === issuer;

        return matchesSearch && matchesIssuer;
      }),
    [search, issuer],
  );

  return (
    <main className="portfolio">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Back to home">
          AK<span>.</span>
        </a>

        <span className="edition">PERSONAL PORTFOLIO / 2026</span>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Selected work</a>
          <a href="#journey">Education</a>
          <a href="#credentials">Certifications</a>
        </nav>

        <a className="contact-link" href="#contact">
          Let&apos;s talk <span>↗</span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          onClick={(event) => {
            const nav = document.querySelector(".desktop-nav");
            const isOpen =
              nav?.classList.toggle("mobile-nav-open") ?? false;

            event.currentTarget.setAttribute(
              "aria-expanded",
              String(isOpen),
            );
          }}
        >
          <span>☰</span>
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-meta">
          <span>
            <i /> SOFTWARE / ARTIFICIAL INTELLIGENCE
          </span>
          <span>STUDENT / BACKEND AI ENGINEERING</span>
        </div>

        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            ADITYA KULKARNI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            Building
            <br />
            <span>AI-powered applications.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              I&apos;m Aditya Kulkarni. I build AI-powered applications
              and backend systems, with hands-on experience as a Backend
              AI Engineering Intern at Flyrank AI.
            </p>

            <a
              href="#work"
              className="round-link"
              aria-label="Explore my work"
            >
              ↘
            </a>
          </motion.div>

          <div className="hero-actions">
            <a
              className="project-link"
              href="/Aditya_Kulkarni_Resume_ATS.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW RÉSUMÉ <span aria-hidden="true">↗</span>
            </a>

            <a className="project-link" href="#contact">
              CONTACT ME <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <motion.div
          className="score-entrance"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          <MusicalStaff />
        </motion.div>

        <div className="hero-footer">
          <span>01 — PROFILE</span>
          <span>EDUCATION / EXPERIENCE / PROJECTS</span>
          <a href="#work">EXPLORE THE WORK ↓</a>
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <p className="section-index">I. ABOUT</p>

        <div>
          <h2>
            Learning by building.
            <br />
            <span>Growing through experience.</span>
          </h2>

          <p className="body-copy">
            I enjoy working on practical software projects, exploring AI
            technologies, and improving my development skills through
            hands-on experience. My work includes AI applications,
            backend development, automation, and cybersecurity.
          </p>

          <div className="stat-grid">
            <div>
              <strong>7th</strong>
              <span>SEMESTER</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>EXPECTED GRADUATION</span>
            </div>
            <div>
              <strong>7.55</strong>
              <span>CGPA / 10</span>
            </div>
          </div>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-heading">
          <p className="section-index">II. EXPERIENCE</p>
          <span>PROFESSIONAL PRACTICE / 001</span>
        </div>

        <div className="experience-card">
          <div className="experience-topline">
            <span>BACKEND AI ENGINEERING INTERN</span>
            <span>JUL 2026 — PRESENT</span>
          </div>

          <h2>Flyrank AI</h2>

          <p className="body-copy">
            Working on backend services and AI-powered workflows,
            including REST APIs for AI-agent and Model Context Protocol
            (MCP) integrations, a retrieval-augmented generation (RAG)
            study coach, and a PDF reporting pipeline connected to SQLite.
          </p>

          <div className="project-tags">
            {[
              "Node.js",
              "Express.js",
              "REST APIs",
              "RAG",
              "MCP",
              "SQLite",
              "Git",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading">
          <p className="section-index">III. PROJECTS</p>
          <span>PROJECT ARCHIVE / 001—006</span>
        </div>

        <h2>
          Selected <span>work.</span>
        </h2>

        <p className="work-intro">
          Five projects from my work at Flyrank AI, along with One Click,
          a cybersecurity project developed during a hackathon.
        </p>

        <div className="project-group-label">FLYRANK AI PROJECTS</div>

        <div className="project-list">
          {projects
            .filter((project) => project.group === "FLYRANK AI")
            .map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
        </div>

        <div className="project-group-label">HACKATHON PROJECT</div>

        <div className="project-list">
          {projects
            .filter((project) => project.group === "HACKATHON")
            .map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
        </div>

        <p className="project-note">
          OPEN EACH PROJECT TO EXPLORE ITS LIVE APPLICATION OR SOURCE.
        </p>
      </section>

      <section className="journey section-pad" id="journey">
        <p className="section-index">IV. EDUCATION &amp; ACHIEVEMENTS</p>

        <div>
          <h2>
            Education and
            <br />
            <span>experience.</span>
          </h2>

          <p className="body-copy">
            My experience includes my engineering degree, backend AI
            development, and collaborative project work.
          </p>

          <div className="journey-item">
            <span>2027 / EXPECTED</span>
            <div>
              <h3>B.E. Computer Science &amp; Engineering</h3>
              <p>
                Artificial Intelligence &amp; Machine Learning
                <br />
                KLS Vishwanathrao Deshpande Institute of Technology
                <br />
                CGPA: 7.55 / 10
              </p>
            </div>
          </div>

          <div className="journey-item">
            <span>2026 / PRESENT</span>
            <div>
              <h3>Backend AI Engineering Intern</h3>
              <p>Flyrank AI</p>
            </div>
          </div>

          <div className="journey-item">
            <span>HACKFUSHION</span>
            <div>
              <h3>Third Place</h3>
              <p>
                Worked with a four-member team to build One Click — Cyber
                Safety during a 20-hour hackathon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="credentials section-pad" id="credentials">
        <div className="section-heading">
          <p className="section-index">V. CERTIFICATIONS</p>
          <span>{certifications.length} CERTIFICATIONS</span>
        </div>

        <h2>
          Courses and <span>credentials.</span>
        </h2>

        <p className="work-intro">
          Certifications and job simulations covering AI, Claude,
          cloud platforms, and technology.
        </p>

        <div className="credential-controls">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title or issuer..."
            aria-label="Search certifications"
          />

          <select
            value={issuer}
            onChange={(event) => setIssuer(event.target.value)}
            aria-label="Filter certifications by issuer"
          >
            {issuers.map((name) => (
              <option key={name} value={name}>
                {name === "ALL" ? "All issuers" : name}
              </option>
            ))}
          </select>
        </div>

        <div className="credential-list">
          {filteredCertifications.map((credential) => (
            <article className="credential-row" key={credential.title}>
              <div>
                <span className="project-category">
                  {credential.issuer.toUpperCase()} /{" "}
                  {credential.date.toUpperCase()}
                </span>
                <h3>{credential.title}</h3>
              </div>

              {credential.href ? (
                <a
                  href={credential.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  VERIFY ↗
                </a>
              ) : (
                <span className="credential-unavailable">
                  LINK NOT PROVIDED
                </span>
              )}
            </article>
          ))}

          {filteredCertifications.length === 0 && (
            <p className="body-copy">
              No certifications match your search.
            </p>
          )}
        </div>
      </section>

      <section className="skills section-pad" id="skills">
        <div className="section-heading">
          <p className="section-index">VI. TECHNICAL SKILLS</p>
          <span>TECHNOLOGIES &amp; TOOLS</span>
        </div>

        <h2>
          Technologies I <span>work with.</span>
        </h2>

        <div className="skills-grid">
          <div>
            <h3>LANGUAGES</h3>
            <p>Python · Java · JavaScript · C · C++ · SQL</p>
          </div>

          <div>
            <h3>BACKEND &amp; WEB</h3>
            <p>
              Node.js · Express.js · Flask · React · REST APIs · HTML · CSS
            </p>
          </div>

          <div>
            <h3>AI &amp; DATA</h3>
            <p>
              Generative AI · RAG · AI Agents · MCP · Scikit-learn ·
              Pandas · NumPy
            </p>
          </div>

          <div>
            <h3>DATABASES &amp; TOOLS</h3>
            <p>SQLite · MySQL · MongoDB · Git · GitHub · Postman</p>
          </div>
        </div>
      </section>

      <footer className="footer section-pad" id="contact">
        <div>
          <p className="section-index">VII. CONTACT</p>

          <h2>
            Let&apos;s talk about <span>your next project.</span>
          </h2>

          <p className="body-copy">
            I&apos;m open to connecting about software development,
            AI projects, and relevant opportunities.
          </p>

          <a
            className="footer-contact"
            href="mailto:adityakulkarni22222@gmail.com"
          >
            adityakulkarni22222@gmail.com <span>↗</span>
          </a>
        </div>

        <div className="footer-bottom">
          <span>ADITYA KULKARNI © 2026</span>
          <span>SOFTWARE / ARTIFICIAL INTELLIGENCE</span>

          <div className="social-links">
            <a
              href="https://github.com/thannnoss"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              in
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;