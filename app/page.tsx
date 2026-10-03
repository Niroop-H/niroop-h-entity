const records = [
  ['SAM.gov U.S. Federal Entity Record', 'U.S. Federal Government', 'P2K2F5T4FE26'],
  ['NATO Commercial and Government Entity (NCAGE) Code', 'NATO Support and Procurement Agency (NSPA)', '8066Y'],
  ['European Commission PIC Holder', 'European Commission', '863543956'],
  ['Partner of Microsoft', 'Microsoft', '7120024'],
  ['ISC2 Candidate', 'ISC2', 'Candidate record'],
  ['Gemini Certified Faculty', 'Google', 'Credential record'],
  ['Gemini Certified Student', 'Gemini', 'Credential record'],
  ['Working with Claude API', 'Anthropic', 'Credential record'],
  ['Claude Code in Action', 'Anthropic', 'Credential record']
];

const affiliations = [
  'Intel Partner',
  'Verified Partner — IBM Partner Plus',
  'Partner of Google Cloud',
  'NVIDIA NCG Organization',
  'FPGA & Semiconductor Corporate Authorization — Altera SSLC',
  'Fabless Semiconductor Enterprise Infrastructure — ChipFoundry / SkyWater',
  'Registered Overseas Supplier — UK Crown Commercial',
  'EU Verified SME',
  'KDEM Dhruva Cohort Programme Awardee — Top 1,111 Selection'
];

export default function Home() {
  return (
    <>
      <header className="top">
        <div className="wrap nav">
          <div className="brand">NIROOP H</div>
          <nav className="navlinks" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#roles">Roles</a>
            <a href="#records">Records</a>
            <a href="#links">Links</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="profile">
          <div className="wrap hero-grid">
            <div>
              <p className="kicker">Professional profile</p>
              <h1>Niroop H</h1>
              <p className="role">Founder &amp; CEO, MAH Quantum</p>
              <p className="lead">
                Founder and technology professional based in Bengaluru, India, working across AI systems,
                advanced computing, embedded technologies, semiconductors and research.
              </p>
            </div>
            <img className="photo" src="/niroop-h.jpeg" alt="Portrait of Niroop H" width="832" height="1088" />
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap two-col">
            <div>
              <h2>About</h2>
              <p>
                Niroop H is the Founder &amp; CEO of MAH Quantum. His work includes technology strategy,
                AI systems development, advanced computing, embedded systems integration, research,
                prototyping and collaboration across technical and institutional projects.
              </p>
            </div>
            <div>
              <h2>Current focus</h2>
              <p>
                AI systems, intelligent architectures, advanced computing, embedded systems, robotics,
                semiconductor technologies and research infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="roles">
          <div className="wrap">
            <h2>Organizations &amp; roles</h2>
            <div className="role-list">
              <article className="role-item">
                <h3>MAH Quantum</h3>
                <div className="meta">Founder &amp; CEO · 2026–Present</div>
                <p>Technology vision, AI systems, advanced computing, embedded systems, research, prototyping and organizational strategy.</p>
              </article>
              <article className="role-item">
                <h3>MAH Quantum Research Institute</h3>
                <div className="meta">Founder &amp; Head of Research · 2026–Present</div>
                <p>Research and scholarly publishing initiative covering research collaboration, editorial workflows, DOI registration and academic infrastructure.</p>
              </article>
              <article className="role-item">
                <h3>Quanta Industries</h3>
                <div className="meta">Head of Business Operations · 2026–Present</div>
                <p>Business operations, partnerships, corporate relations and industry–academia initiatives.</p>
              </article>
              <article className="role-item">
                <h3>Devashri S Industries</h3>
                <div className="meta">Head of Operations · 2026–Present</div>
                <p>International relations, deep-tech, robotics and expansion initiatives across semiconductors, smart grids and renewable energy.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="records">
          <div className="wrap">
            <h2>Professional records &amp; credentials</h2>
            <p>
              The entries below use the names and identifiers supplied for this profile. Organizational registrations,
              partnerships and programme records are distinguished from individual certifications.
            </p>
            <div className="record-list">
              {records.map(([name, issuer, identifier]) => (
                <article className="record" key={name}>
                  <div>
                    <h3>{name}</h3>
                    <div className="issuer">{issuer}</div>
                  </div>
                  <div className="identifier">{identifier}</div>
                </article>
              ))}
            </div>
            <p className="note">
              Source and verification links should be attached to individual records where the issuing organization
              provides a public canonical record. This page does not describe an organizational registration as a personal certification.
            </p>

            <h2 style={{marginTop: '48px'}}>Organizational affiliations</h2>
            <div className="affiliations">
              {affiliations.map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap two-col">
            <div>
              <h2>Education</h2>
              <p><strong>Christ University, Bengaluru</strong><br />B.Tech Computer Science &amp; Engineering · Hons. Artificial Intelligence &amp; Machine Learning · 2025–2029</p>
            </div>
            <div>
              <h2>Research</h2>
              <p>Research and project work across AI systems, intelligent architectures, embedded systems, advanced computing, robotics and semiconductor technologies.</p>
            </div>
          </div>
        </section>

        <section className="section" id="links">
          <div className="wrap">
            <h2>Canonical links</h2>
            <div className="links">
              <a href="https://www.linkedin.com/in/nirooph" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="https://mahquantum.tech/" rel="noopener noreferrer">MAH Quantum ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">© {new Date().getFullYear()} Niroop H · Bengaluru, India</div>
      </footer>
    </>
  );
}
