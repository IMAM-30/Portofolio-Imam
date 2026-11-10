import Image from "next/image";
import { contactLinks, highlights, projects, skillGroups, workPrinciples } from "./data";
import { ThemeToggle } from "./components/theme-toggle";
import { SiteEnhancements } from "./components/site-enhancements";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="17" height="17">
      <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <SiteEnhancements />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          IH<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Open to new opportunities</p>
          <h1>Building digital products that are <em>useful</em> and meaningful.</h1>
          <p className="hero-lead">
            I&apos;m Imam Hudzaifah, an AI-assisted Software Developer and seventh-semester
            Computer Science student from Parepare. I build full-stack web applications and
            intelligent systems, using AI coding tools to work efficiently while carefully
            reviewing the results.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button secondary" href="/Imam-Hudzaifah-CV.pdf" download>
              Download CV
            </a>
          </div>
        </div>
        <aside className="hero-card reveal delay-1" aria-label="Profile summary">
          <div>
            <p className="card-kicker">Current focus</p>
            <h2>Full-stack web development, AI-assisted workflows & intelligent systems</h2>
          </div>
          <dl className="quick-facts">
            <div><dt>Location</dt><dd>Parepare, Indonesia</dd></div>
            <div><dt>Education</dt><dd>Computer Science · 7th Semester</dd></div>
            <div><dt>GPA</dt><dd>3.67 / 4.00</dd></div>
          </dl>
        </aside>
      </section>

      <section className="highlights section-shell reveal" aria-label="Career highlights">
        {highlights.map((item) => (
          <div className="highlight-item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about section-shell section" id="about">
        <div className="about-intro">
          <div className="section-heading reveal">
            <p className="section-number">01 / About</p>
            <h2>Practical software, built with curiosity and care.</h2>
          </div>
          <div className="about-copy reveal delay-1">
            <p>
              I&apos;m a seventh-semester Computer Science student at Bacharuddin Jusuf Habibie
              Institute of Technology with a 3.67/4.00 GPA. My experience includes full-stack
              web development, backend systems, frontend development, and intelligent systems.
            </p>
            <p>
              I use AI assistants for coding, debugging, refactoring, and technical
              exploration, then evaluate and refine their output to meet project requirements.
              I aim to build practical, reliable software that solves real problems.
            </p>
          </div>
        </div>
        <div className="principles-grid">
          {workPrinciples.map((principle, index) => (
            <article className={`principle reveal delay-${index + 1}`} key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
        <aside className="beyond-code reveal">
          <p className="card-kicker">Beyond code</p>
          <div>
            <h3>Hiking & mountaineering</h3>
            <p>Since 2023, I&apos;ve explored mountain peaks and highland areas across South Sulawesi. These trips have strengthened my navigation, trip and equipment planning, and ability to adapt to different terrain and conditions.</p>
          </div>
        </aside>
      </section>

      <section className="section-shell section" id="projects">
        <div className="section-heading reveal">
          <p className="section-number">02 / Selected projects</p>
          <h2>Work I&apos;ve built.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card${project.previews.length > 1 || project.visualSteps.length > 0 ? " is-wide" : ""} reveal delay-${Math.min(index + 1, 3)}`}
              key={project.title}
            >
              <div className="project-topline">
                <p>{project.category}</p>
                <span>0{index + 1}</span>
              </div>
              {project.previews.length > 0 && (
                <div className={`project-previews${project.previews.length > 1 ? " is-gallery" : ""}`}>
                  {project.previews.map((preview, previewIndex) => (
                    <a
                      className="project-preview"
                      href={project.links[previewIndex].url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${preview.label}`}
                      key={preview.src}
                    >
                      <Image src={preview.src} alt={preview.alt} fill sizes="(max-width: 820px) 82vw, 480px" />
                      {project.previews.length > 1 && <span>{preview.label}</span>}
                    </a>
                  ))}
                </div>
              )}
              {project.visualSteps.length > 0 && (
                <div className="system-flow" aria-label="Computer vision system workflow">
                  {project.visualSteps.map((step, stepIndex) => (
                    <div className="system-step" key={step}>
                      <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label="Technologies and focus">
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                        {link.label} <ArrowIcon />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section experience" id="experience">
        <div className="experience-layout">
          <div className="section-heading reveal">
            <p className="section-number">03 / Experience</p>
            <h2>Professional experience and education.</h2>
          </div>
          <div className="timeline reveal delay-1">
            <article>
              <div className="timeline-meta"><span>March 2026 — Present</span><span>Parepare</span></div>
              <h3>Website & Systems Developer</h3>
              <p className="organization">Owen Group</p>
              <p>Collaborating with the development team on website development and maintenance, frontend and backend features, database integration, debugging, and technical troubleshooting. My work includes the Botox &amp; Filler Lab website and a sales and inventory management website for Peptide OS, a U.S.-based supplement business.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2023 — Present</span><span>7th Semester</span></div>
              <h3>B.Sc. in Computer Science (In Progress)</h3>
              <p className="organization">Bacharuddin Jusuf Habibie Institute of Technology</p>
              <p>Studying software development, data processing, machine learning, and computer vision. GPA: 3.67/4.00.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2021 — Present</span><span>Parepare</span></div>
              <h3>Mosque Caretaker & Adhan Caller</h3>
              <p className="organization">Al-Istiqamah Mosque · Parepare City</p>
              <p>Supporting daily mosque operations and handling IT issues, electronic equipment, and electrical systems based on facility needs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell section skills-section">
        <div className="section-heading reveal">
          <p className="section-number">04 / Skills</p>
          <h2>Technologies I use.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className={`skill-group reveal delay-${index + 1}`} key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="skills-note"><strong>Languages:</strong> Indonesian (Native) · English (Basic Proficiency)</p>
      </section>

      <section className="contact section-shell section" id="contact">
        <div className="contact-card reveal">
          <p className="section-number">05 / Contact</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>I&apos;m open to discussing technology, collaboration, and new learning opportunities.</p>
          <div className="contact-grid">
            {contactLinks.map((contact) => (
              <a
                href={contact.href}
                target={contact.label === "Email" ? undefined : "_blank"}
                rel={contact.label === "Email" ? undefined : "noreferrer"}
                key={contact.label}
              >
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <p>© 2026 Imam Hudzaifah</p>
        <p>Designed & built with intention.</p>
      </footer>
    </main>
  );
}
