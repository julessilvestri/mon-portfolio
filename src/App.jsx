import { useEffect, useState } from 'react'
import './App.css'

const FORMATIONS = [
  {
    title: "Master Management S2IN",
    subtitle: "Système d'information et innovation numérique",
    school: "IAE d'Annecy",
    period: "2024 – 2026",
    color: "indigo",
  },
  {
    title: "BUT Informatique",
    subtitle: null,
    school: "IUT d'Annecy",
    period: "2021 – 2024",
    color: "emerald",
  },
  {
    title: "Bac Technologique STI2D",
    subtitle: "Science et technologie de l'industrie et du développement durable",
    school: "Lycée de l'Albanais – Rumilly",
    period: "2021",
    color: "amber",
  },
]

const EXPERIENCES = [
  {
    title: "Chargé de projet informatique",
    company: "Fédération Française de Ski",
    period: "Sept. 2024 – Présent",
    type: "Alternance",
    color: "indigo",
    description:
      "Pilotage de la refonte de l'intranet en méthodologie Agile Scrum, de l'analyse des besoins à la mise en production. Conception des maquettes UX/UI, rédaction des spécifications techniques, tests et déploiement.",
    tags: ["Agile Scrum", "Symfony", "UX/UI", "GitLab CI/CD", "Sécurité SI"],
  },
  {
    title: "Développeur web",
    company: "Fédération Française de Ski",
    period: "Sept. 2023 – Août 2024",
    type: "Alternance",
    color: "emerald",
    description:
      "Conception et développement d'un outil interne de planification de formations en PHP/JavaScript, utilisé par les 13 comités régionaux de France. Cycle complet : recueil du besoin, architecture BDD, développement full-stack, tests et déploiement.",
    tags: ["PHP", "JavaScript", "MySQL", "Full-stack"],
  },
  {
    title: "Développeur Power Apps",
    company: "TEFAL SAS – Groupe SEB",
    period: "Avr. – Juil. 2023",
    type: "Stage",
    color: "violet",
    description:
      "Conception et développement d'une application métier interne (Microsoft Power Apps) en suivant un cahier des charges fonctionnel pour répondre à un besoin métier du Groupe SEB.",
    tags: ["Power Apps", "Microsoft 365", "Low-code"],
  },
]

const PROJECTS = [
  {
    title: "Refonte de l'intranet – FFS",
    description:
      "Pilotage en Agile Scrum de la refonte de l'intranet Symfony de la FFS. Coordination d'équipe, conception UX/UI et CI/CD.",
    tech: ["Symfony", "PHP", "Agile Scrum", "GitLab CI/CD"],
    accent: "indigo",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "Outil de planification – FFS",
    description:
      "Outil interne PHP/JS pour gérer les formations sportives, utilisé par les 13 comités régionaux. Du cadrage fonctionnel à la mise en production, en totale autonomie.",
    tech: ["PHP", "JavaScript", "MySQL"],
    accent: "emerald",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "Portfolio Personnel",
    description:
      "Portfolio conçu et développé avec React et Vite. Animations JS, design responsive, déployé sur GitHub Pages.",
    tech: ["React", "Vite", "CSS"],
    accent: "violet",
    github: null,
    demo: null,
    image: null,
  },
  {
    title: "AeroF1",
    description:
      "Application iOS publiée sur l'App Store, dédiée à la Formule 1. Développée nativement en Swift et SwiftUI, de la conception à la publication.",
    tech: ["Swift", "SwiftUI", "iOS"],
    accent: "orange",
    github: null,
    demo: null,
    appstore: "https://apps.apple.com/us/app/aerof1/id6757757888",
    noHeader: false,
  },
]

const SKILL_GROUPS = [
  {
    label: "Front-end",
    color: "blue",
    skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    label: "Back-end",
    color: "emerald",
    skills: ["PHP", "Symfony", "Laravel", "Node.js", "Express"],
  },
  {
    label: "Base de données",
    color: "amber",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Gestion de projet",
    color: "rose",
    skills: ["Agile Scrum", "UX/UI", "Linear", "Cahier des charges", "Sécurité SI"],
  },
  {
    label: "Outils & DevOps",
    color: "violet",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Power Apps"],
  },
]

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function Nav({ theme, onToggle }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" onClick={close}>
          <span className="nav-dot" aria-hidden="true" />
          Jules Silvestri
        </a>

        <nav className={`nav-menu${open ? ' nav-menu--open' : ''}`} aria-label="Navigation principale">
          <ul className="nav-links">
            <li><a href="#parcours"  onClick={close}>Parcours</a></li>
            <li><a href="#projects"  onClick={close}>Projets</a></li>
            <li><a href="#skills"    onClick={close}>Compétences</a></li>
            <li><a href="#contact"   onClick={close}>Contact</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </div>
    </header>
  )
}

function CodeCard() {
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-chrome">
        <span className="chrome-dot chrome-dot--red" />
        <span className="chrome-dot chrome-dot--yellow" />
        <span className="chrome-dot chrome-dot--green" />
        <span className="code-chrome-label">dev.js</span>
      </div>
      <pre className="code-pre">
        <span className="code-line" style={{ animationDelay: '0.3s' }}>
          <span className="t-kw">const</span>{' '}
          <span className="t-name">dev</span>{' '}
          <span className="t-op">=</span>{' {'}{'\n'}
        </span>
        <span className="code-line" style={{ animationDelay: '0.6s' }}>
          {'  '}<span className="t-prop">name</span>
          <span className="t-op">:</span>{' '}
          <span className="t-str">"Jules Silvestri"</span>,{'\n'}
        </span>
        <span className="code-line" style={{ animationDelay: '0.9s' }}>
          {'  '}<span className="t-prop">role</span>
          <span className="t-op">:</span>{' '}
          <span className="t-str">"Fullstack & Projet IT"</span>,{'\n'}
        </span>
        <span className="code-line" style={{ animationDelay: '1.2s' }}>
          {'  '}<span className="t-prop">stack</span>
          <span className="t-op">:</span>{' '}
          [<span className="t-str">"React"</span>,{' '}
          <span className="t-str">"PHP"</span>,{' '}
          <span className="t-str">"Symfony"</span>],{'\n'}
        </span>
        <span className="code-line" style={{ animationDelay: '1.5s' }}>
          {'  '}<span className="t-prop">disponible</span>
          <span className="t-op">:</span>{' '}
          <span className="t-bool">true</span>{'\n'}
        </span>
        <span className="code-line" style={{ animationDelay: '1.8s' }}>
          {'}'}
        </span>
      </pre>
    </div>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="available-badge fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="available-dot" aria-hidden="true" />
            Disponible pour de nouvelles opportunités
          </div>
          <h1 className="hero-name fade-in" style={{ animationDelay: '0.3s' }}>
            Jules<br />Silvestri
          </h1>
          <p className="hero-role fade-in" style={{ animationDelay: '0.5s' }}>
            Développeur web Fullstack{' '}
            <span className="hero-role-sep">&</span>{' '}
            <span className="hero-role-accent">Chargé de projet IT</span>
          </p>
          <p className="hero-desc fade-in" style={{ animationDelay: '0.65s' }}>
            Profil hybride technique et fonctionnel — je développe en PHP et
            JavaScript tout en pilotant la coordination projet, la conception
            UX/UI et la documentation.
          </p>
          <div className="hero-actions fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#parcours" className="btn btn-primary">Mon parcours</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
        </div>
        <div className="hero-visual">
          <CodeCard />
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ title, company, period, type, color, description, tags, delay = 0, isLast }) {
  return (
    <div className="exp-item" data-reveal style={{ '--reveal-delay': `${delay}s` }}>
      <div className="exp-marker">
        <span className={`exp-dot exp-dot--${color}`} />
        {!isLast && <span className="exp-line" />}
      </div>
      <div className="exp-content">
        <div className="exp-header">
          <div>
            <h3 className="exp-title">{title}</h3>
            <p className="exp-company">{company}</p>
          </div>
          <div className="exp-meta">
            <span className="exp-period">{period}</span>
            <span className={`exp-type exp-type--${color}`}>{type}</span>
          </div>
        </div>
        <p className="exp-desc">{description}</p>
        <div className="exp-tags">
          {tags.map((tag) => <span key={tag} className="exp-tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

function FormationItem({ title, subtitle, school, period, color, delay = 0, isLast }) {
  return (
    <div className="exp-item" data-reveal style={{ '--reveal-delay': `${delay}s` }}>
      <div className="exp-marker">
        <span className={`exp-dot exp-dot--${color}`} />
        {!isLast && <span className="exp-line" />}
      </div>
      <div className="formation-card">
        <span className="formation-period">{period}</span>
        <h3 className="formation-title">{title}</h3>
        {subtitle && <p className="formation-subtitle">{subtitle}</p>}
        <p className="formation-school">{school}</p>
      </div>
    </div>
  )
}

function Parcours() {
  return (
    <section id="parcours" className="section section-alt">
      <div className="section-inner">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Parcours</h2>
          <p className="section-desc">3 ans d'alternance dans le développement et la gestion de projets IT.</p>
        </div>
        <div className="parcours-grid">
          <div className="parcours-col">
            <p className="parcours-col-title">Expériences</p>
            <div className="exp-list">
              {EXPERIENCES.map((exp, i) => (
                <ExperienceItem
                  key={exp.title}
                  {...exp}
                  delay={i * 0.12}
                  isLast={i === EXPERIENCES.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="parcours-col">
            <p className="parcours-col-title">Formations</p>
            <div className="exp-list">
              {FORMATIONS.map((f, i) => (
                <FormationItem
                  key={f.title}
                  {...f}
                  delay={0.15 + i * 0.1}
                  isLast={i === FORMATIONS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, tech, accent, github, demo, appstore, noHeader, delay = 0 }) {
  const hasRealGithub = github && github !== '#'
  const hasRealDemo = demo && demo !== '#'
  const hasAppStore = appstore && appstore !== '#'

  return (
    <article
      className={`project-card project-card--${accent}`}
      data-reveal
      style={{ '--reveal-delay': `${delay}s` }}
    >
      {!noHeader && (
        <div className="project-card-header">
          <div className="card-dots">
            <span /><span /><span />
          </div>
          <span className="card-tech-tag">{tech[0]}</span>
        </div>
      )}
      <div className="project-card-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tech">
          {tech.map((t) => <span key={t} className="tech-badge">{t}</span>)}
        </div>
        <div className="project-links">
          {hasRealGithub && (
            <a href={github} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
          )}
          {hasRealDemo && (
            <a href={demo} target="_blank" rel="noreferrer" className="project-link">Démo ↗</a>
          )}
          {hasAppStore && (
            <a href={appstore} target="_blank" rel="noreferrer" className="project-link">App Store ↗</a>
          )}
          {!hasRealGithub && !hasRealDemo && !hasAppStore && (
            <span className="project-link-soon">Projet interne</span>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Projets</h2>
          <p className="section-desc">Des réalisations concrètes, du cadrage à la mise en production.</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ label, color, skills, delay = 0 }) {
  return (
    <div
      className={`skill-group skill-group--${color}`}
      data-reveal
      style={{ '--reveal-delay': `${delay}s` }}
    >
      <div className="skill-group-header">
        <span className="skill-group-dot" aria-hidden="true" />
        <p className="skill-group-title">{label}</p>
        <span className="skill-group-count">{skills.length}</span>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-badge">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <div className="section-header" data-reveal>
          <h2 className="section-title">Compétences</h2>
          <p className="section-desc">Technologies, méthodologies et outils maîtrisés.</p>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g, i) => (
            <SkillGroup key={g.label} {...g} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="section-inner">
        <div className="contact-content" data-reveal>
          <h2 className="contact-title">Travaillons ensemble</h2>
          <p className="contact-desc">
            Disponible pour des opportunités en CDI à partir de
            septembre 2026. N'hésitez pas à me contacter.
          </p>
          <div className="contact-links">
            <a href="mailto:jules.sil05@gmail.com" className="btn btn-white">
              Envoyer un e-mail
            </a>
            <a href="https://www.linkedin.com/in/jules-silvestri/" target="_blank" rel="noreferrer" className="btn btn-white-outline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jules Silvestri</p>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useScrollReveal()

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Nav theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <Parcours />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
