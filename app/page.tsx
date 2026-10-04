const organizations = [
  {
    name: "MAH Quantum™",
    role: "Founder & Chief Executive Officer",
    description:
      "Technology and research organization working across AI, advanced computing, DeepTech and intelligent systems.",
    category: "Primary",
    href: "https://mahquantum.tech/",
  },
  {
    name: "MAH Quantum Research Institute",
    role: "Founder & Head of Research",
    description:
      "Research-focused division working across scholarly publishing, research collaboration and academic infrastructure.",
    category: "Research",
    href: "https://research.mahquantum.tech/",
  },
  {
    name: "Devashri S Industries™",
    role: "Leadership & International Relations",
    description:
      "Industrial and deep-technology activities including semiconductor technologies and SmartGrid initiatives.",
    category: "Industry",
    href: "https://mahquantum.tech/industries",
  },
  {
    name: "Quanta Industries",
    role: "Business Operations & Industry Relations",
    description:
      "Business operations, institutional relationships and industry partnership initiatives.",
    category: "Industry",
    href: "https://mahquantum.tech/industries",
  },
];

const records = [
  {
    title: "SAM.gov U.S. Federal Entity Record",
    issuer: "U.S. Federal Government",
    reference: "P2K2F5T4FE26",
    label: "GOVERNMENT RECORD",
    href:
      "https://sam.gov/entities/view/P2K2F5T4FE26/coreData?status=Active&regId=18292847",
    featured: true,
  },
  {
    title: "NATO Commercial and Government Entity",
    issuer: "NATO Support and Procurement Agency",
    reference: "NCAGE 8066Y",
    label: "NATO RECORD",
    href:
      "https://eportal.nspa.nato.int/Codification/CageTool/cage-view/8066Y",
    featured: true,
  },
  {
    title: "European Commission PIC Holder",
    issuer: "European Commission",
    reference: "PIC 863543956",
    label: "EUROPEAN COMMISSION",
    href: "https://ec.europa.eu/",
    featured: false,
  },
  {
    title: "Intel Partner",
    issuer: "Intel",
    reference: "Intel Partner Directory",
    label: "TECHNOLOGY PARTNER",
    href:
      "https://www.intel.com/content/www/us/en/partner/showcase/storefront/a5Scv0000004BhdEAE/mah-quantum.html",
    featured: false,
  },
  {
    title: "IBM Business Partner",
    issuer: "IBM",
    reference: "IBM Partner",
    label: "TECHNOLOGY PARTNER",
    href: "https://www.ibm.com/partnerplus",
    featured: false,
  },
  {
    title: "Microsoft AI Cloud Partner",
    issuer: "Microsoft",
    reference: "Microsoft Partner",
    label: "TECHNOLOGY PARTNER",
    href: "https://partner.microsoft.com/",
    featured: false,
  },
  {
    title: "Google Cloud Partner",
    issuer: "Google Cloud",
    reference: "Google Cloud Partner",
    label: "TECHNOLOGY PARTNER",
    href: "https://cloud.google.com/partners",
    featured: false,
  },
];

const education = [
  {
    institution: "Christ University, Bangalore",
    qualification: "B.Tech Computer Science & Engineering",
    detail: "Honours: Artificial Intelligence & Machine Learning",
    period: "2025 - 2029",
  },
  {
    institution: "CBSE",
    qualification: "Senior Secondary Education",
    detail: "Class XI — XII",
    period: "2023 — 2025",
  },
  {
    institution: "CISCE",
    qualification: "School Education",
    detail: "Class I — X",
    period: "2013 — 2023",
  },
];

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nirooph",
  },
  {
    label: "MAH Quantum",
    href: "https://mahquantum.tech/",
  },
  {
    label: "GitHub",
    href: "https://github.com/mahquantum",
  },
  {
    label: "Research Institute",
    href: "https://research.mahquantum.tech/",
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/mah-quantum",
  },
  {
    label: "Workspace",
    href: "https://workspace.mahquantum.tech/",
  },
];

const focusAreas = [
  "Artificial Intelligence",
  "DeepTech",
  "Advanced Computing",
  "Semiconductors",
  "Smart Grids",
  "Research & Development",
];

export default function Home() {
  const featuredRecords = records.filter((record) => record.featured);
  const secondaryRecords = records.filter((record) => !record.featured);

  return (
    <main id="top">
      {/* ================================================== */}
      {/* HEADER */}
      {/* ================================================== */}

      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            NIROOP H
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">Profile</a>
            <a href="#organizations">Organizations</a>
            <a href="#records">Records</a>
            <a href="#education">Education</a>
            <a href="#links">Links</a>
          </nav>
        </div>
      </header>

      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section id="about" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              Professional Profile
            </div>

            <h1>
              Niroop <span>H</span>
            </h1>

            <div className="hero-role">
              <strong>Founder & Chief Executive Officer</strong>

              <a
                href="https://mahquantum.tech/"
                target="_blank"
                rel="noreferrer"
              >
                MAH Quantum
              </a>
            </div>

            <p className="hero-description">
              Niroop H is the Founder and Chief Executive Officer of MAH
              Quantum, based in Bengaluru, India. His work spans technology
              strategy, intelligent systems, advanced computing, DeepTech and
              research initiatives.
            </p>

            <div className="hero-location">
              <span className="location-dot" />
              Bengaluru, Karnataka, India
            </div>

            <div className="hero-actions">
              <a
                className="primary-button"
                href="https://www.linkedin.com/in/nirooph"
                target="_blank"
                rel="noreferrer"
              >
                View professional profile
                <span>↗</span>
              </a>

              <a className="text-button" href="#organizations">
                Explore work
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src="/niroop-h.jpeg"
                alt="Niroop H"
                className="profile-photo"
              />

              <div className="photo-overlay">
                <span>NIROOP H</span>
                <span>MAH QUANTUM</span>
              </div>
            </div>

            <div className="visual-note">
              <span>01</span>
              Official personal profile
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* PROFILE STATEMENT */}
      {/* ================================================== */}

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="section-index">01 / PROFILE</div>

          <div className="intro-content">
            <p className="large-statement">
              Building at the intersection of{" "}
              <em>technology, research and industry.</em>
            </p>

            <p className="body-copy">
              Niroop H leads MAH Quantum and its associated initiatives,
              focusing on the development of intelligent systems and
              technology-driven projects across artificial intelligence,
              advanced computing, semiconductors and related fields.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* AREAS OF WORK */}
      {/* ================================================== */}

      <section className="focus-section">
        <div className="container">
          <div className="focus-header">
            <div>
              <span className="mini-label">Areas of work</span>

              <h2>Technology & research</h2>
            </div>

            <p>
              A broad technical focus shaped around intelligent systems,
              computing infrastructure and applied research.
            </p>
          </div>

          <div className="focus-list">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* ORGANIZATIONS */}
      {/* ================================================== */}

      <section
        id="organizations"
        className="section organizations-section"
      >
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <span className="mini-label">Organizations</span>
            </div>

            <h2>Work & affiliations</h2>

            <p>
              Organizations and initiatives associated with Niroop H&apos;s
              professional work.
            </p>
          </div>

          <div className="organization-list">
            {organizations.map((organization, index) => (
              <a
                href={organization.href}
                target="_blank"
                rel="noreferrer"
                className="organization-row"
                key={organization.name}
              >
                <div className="organization-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="organization-main">
                  <div className="organization-title-line">
                    <h3>{organization.name}</h3>

                    <span>{organization.category}</span>
                  </div>

                  <p className="organization-role">
                    {organization.role}
                  </p>

                  <p className="organization-description">
                    {organization.description}
                  </p>
                </div>

                <div className="organization-arrow">↗</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* PROFESSIONAL RECORD */}
      {/* ================================================== */}

      <section id="records" className="section records-section">
        <div className="container">
          <div className="section-heading records-heading">
            <div>
              <span className="section-number">03</span>
              <span className="mini-label">
                Professional record
              </span>
            </div>

            <h2>Institutional references</h2>

            <p>
              Selected government, institutional and technology-partner
              records associated with the professional profile and
              MAH Quantum.
            </p>
          </div>

          {/* ---------------------------------------------- */}
          {/* FEATURED RECORDS */}
          {/* ---------------------------------------------- */}

          <div className="featured-records">
            {featuredRecords.map((record) => (
              <a
                href={record.href}
                target="_blank"
                rel="noreferrer"
                className="featured-record"
                key={record.title}
              >
                <div className="featured-record-top">
                  <span>{record.label}</span>

                  <strong>↗</strong>
                </div>

                <div className="featured-record-title">
                  {record.title}
                </div>

                <div className="featured-record-issuer">
                  {record.issuer}
                </div>

                <div className="featured-record-reference">
                  {record.reference}
                </div>
              </a>
            ))}
          </div>

          {/* ---------------------------------------------- */}
          {/* SECONDARY RECORDS */}
          {/* ---------------------------------------------- */}

          <div className="records-table secondary-records">
            {secondaryRecords.map((record, index) => (
              <a
                href={record.href}
                target="_blank"
                rel="noreferrer"
                className="record-row"
                key={record.title}
              >
                <div className="record-index">
                  {String(index + 3).padStart(2, "0")}
                </div>

                <div className="record-name">
                  <strong>{record.title}</strong>

                  <span>{record.issuer}</span>
                </div>

                <div className="record-reference">
                  {record.reference}
                </div>

                <div className="record-link">↗</div>
              </a>
            ))}
          </div>

          <p className="record-note">
            References link to the respective public institutional or
            partner websites.
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* EDUCATION */}
      {/* ================================================== */}

      <section id="education" className="section education-section">
        <div className="container education-grid">
          <div className="section-heading education-heading">
            <div>
              <span className="section-number">04</span>
              <span className="mini-label">Education</span>
            </div>

            <h2>Academic background</h2>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <article
                className="education-item"
                key={item.institution}
              >
                <div className="education-period">
                  {item.period}
                </div>

                <div>
                  <h3>{item.institution}</h3>

                  <strong>{item.qualification}</strong>

                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* LINKS */}
      {/* ================================================== */}

      <section id="links" className="section links-section">
        <div className="container">
          <div className="links-top">
            <div>
              <span className="section-number">05</span>
              <span className="mini-label">
                Online presence
              </span>
            </div>

            <h2>Professional links</h2>
          </div>

          <div className="links-grid">
            {links.map((link, index) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="profile-link"
                key={link.label}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{link.label}</strong>

                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-name">Niroop H</div>

            <p>
              Founder & Chief Executive Officer · MAH Quantum
            </p>
          </div>

          <div className="footer-right">
            <span>Bengaluru, India</span>
            <span>© 2026</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
