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
        <a className="brand" href="#top" aria-label="Kembali ke awal">
          IH<span>.</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#projects">Proyek</a>
          <a href="#experience">Pengalaman</a>
          <a href="#contact">Kontak</a>
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Terbuka untuk kesempatan baru</p>
          <h1>Membangun produk digital yang <em>berguna</em> dan bermakna.</h1>
          <p className="hero-lead">
            Saya Imam Hudzaifah, Software Developer dari Parepare dengan fokus pada web
            development dan intelligent systems. Saya menggabungkan pemikiran teknis,
            kepekaan terhadap kebutuhan pengguna, dan kemauan belajar untuk membangun solusi
            yang relevan.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">Lihat proyek</a>
            <a className="button secondary" href="/Imam-Hudzaifah-CV.docx" download>
              Unduh CV
            </a>
          </div>
        </div>
        <aside className="hero-card reveal delay-1" aria-label="Ringkasan profil">
          <div>
            <p className="card-kicker">Current focus</p>
            <h2>Web development, intelligent systems & digital products</h2>
          </div>
          <dl className="quick-facts">
            <div><dt>Lokasi</dt><dd>Parepare, Indonesia</dd></div>
            <div><dt>Pendidikan</dt><dd>Computer Science</dd></div>
            <div><dt>IPK</dt><dd>3.67 / 4.00</dd></div>
          </dl>
        </aside>
      </section>

      <section className="highlights section-shell reveal" aria-label="Ringkasan pencapaian">
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
            <p className="section-number">01 / Tentang</p>
            <h2>Developer yang tumbuh melalui masalah nyata.</h2>
          </div>
          <div className="about-copy reveal delay-1">
            <p>
              Saya adalah mahasiswa Ilmu Komputer di Institut Teknologi Bacharuddin Jusuf
              Habibie. Saya menikmati proses memahami kebutuhan, menyederhanakan masalah,
              lalu menerjemahkannya menjadi produk digital yang dapat digunakan.
            </p>
            <p>
              Pengalaman saya mencakup pengembangan website profesional, digitalisasi layanan
              publik, serta eksperimen machine learning dan computer vision. Bagi saya,
              teknologi terbaik bukan hanya bekerja dengan baik—tetapi juga terasa jelas dan
              relevan bagi penggunanya.
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
            <h3>Hiking membentuk cara saya menghadapi tantangan.</h3>
            <p>Aktif menjelajahi pegunungan Sulawesi Selatan melatih navigasi, persiapan, adaptasi, dan ketenangan dalam mengambil keputusan di kondisi yang berubah.</p>
          </div>
        </aside>
      </section>

      <section className="section-shell section" id="projects">
        <div className="section-heading reveal">
          <p className="section-number">02 / Proyek terpilih</p>
          <h2>Pekerjaan yang sudah saya bangun.</h2>
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
                      aria-label={`Buka ${preview.label}`}
                      key={preview.src}
                    >
                      <Image src={preview.src} alt={preview.alt} fill sizes="(max-width: 820px) 82vw, 480px" />
                      {project.previews.length > 1 && <span>{preview.label}</span>}
                    </a>
                  ))}
                </div>
              )}
              {project.visualSteps.length > 0 && (
                <div className="system-flow" aria-label="Alur kerja sistem Computer Vision">
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
                <ul className="tag-list" aria-label="Teknologi dan fokus">
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
            <p className="section-number">03 / Pengalaman</p>
            <h2>Pengalaman profesional dan pendidikan.</h2>
          </div>
          <div className="timeline reveal delay-1">
            <article>
              <div className="timeline-meta"><span>Mar 2026 — Sekarang</span><span>Parepare</span></div>
              <h3>Website & System Developer</h3>
              <p className="organization">Owen Group</p>
              <p>Mengembangkan dan memelihara website bersama tim, mengerjakan fitur frontend dan backend, integrasi database, serta penyelesaian masalah teknis proyek.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2023 — Sekarang</span><span>Semester 7</span></div>
              <h3>Sarjana Ilmu Komputer</h3>
              <p className="organization">Institut Teknologi Bacharuddin Jusuf Habibie</p>
              <p>Mempelajari pengembangan perangkat lunak, pengolahan data, machine learning, dan computer vision. IPK 3.67/4.00.</p>
            </article>
            <article>
              <div className="timeline-meta"><span>2021 — Sekarang</span><span>Parepare</span></div>
              <h3>Marbot & Muadzin</h3>
              <p className="organization">Masjid Al-Istiqamah</p>
              <p>Mendukung operasional kegiatan masjid sekaligus menangani kebutuhan IT, perangkat elektronik, dan kelistrikan fasilitas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-shell section skills-section">
        <div className="section-heading reveal">
          <p className="section-number">04 / Kemampuan</p>
          <h2>Teknologi yang saya gunakan.</h2>
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
      </section>

      <section className="contact section-shell section" id="contact">
        <div className="contact-card reveal">
          <p className="section-number">05 / Kontak</p>
          <h2>Mari membangun sesuatu yang berguna.</h2>
          <p>Saya terbuka untuk berdiskusi tentang teknologi, kolaborasi, dan kesempatan belajar baru.</p>
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
