const records = [
  {
    name: "SAM.gov U.S. Federal Entity Record",
    issuer: "U.S. Federal Government",
    identifier: "P2K2F5T4FE26",
    status: "Active Registration",
    expires: "September 28, 2027",
    url: "https://sam.gov/entities/view/P2K2F5T4FE26/coreData",
  },
  {
    name: "NATO Commercial and Government Entity (NCAGE) Code",
    issuer: "NATO Support and Procurement Agency (NSPA)",
    identifier: "8066Y",
    url: "https://eportal.nspa.nato.int/Codification/CageTool/cage-view/8066Y",
  },
  {
    name: "European Commission PIC Holder",
    issuer: "European Commission",
    identifier: "863543956",
  },
  {
    name: "Partner of Microsoft",
    issuer: "Microsoft",
    identifier: "7120024",
  },
  {
    name: "ISC2 Candidate",
    issuer: "ISC2",
    identifier: "Candidate record",
  },
  {
    name: "Gemini Certified Faculty",
    issuer: "Google",
    identifier: "Credential record",
  },
  {
    name: "Gemini Certified Student",
    issuer: "Gemini",
    identifier: "Credential record",
  },
  {
    name: "Working with Claude API",
    issuer: "Anthropic",
    identifier: "Credential record",
  },
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    identifier: "Credential record",
  },
];

const affiliations = [
  {
    name: "Intel Partner",
    url: "https://www.intel.com/content/www/us/en/partner/showcase/storefront/a5Scv0000004BhdEAE/mah-quantum.html",
  },
  {
    name: "Verified Partner — IBM Partner Plus",
  },
  {
    name: "Partner of Google Cloud",
  },
  {
    name: "NVIDIA NCG Organization",
  },
  {
    name: "FPGA & Semiconductor Corporate Authorization — Altera SSLC",
  },
  {
    name: "Fabless Semiconductor Enterprise Infrastructure — ChipFoundry / SkyWater",
  },
  {
    name: "Registered Overseas Supplier — UK Crown Commercial",
  },
  {
    name: "EU Verified SME",
  },
  {
    name: "KDEM Dhruva Cohort Programme Awardee — Top 1,111 Selection",
  },
];

const technologyAreas = [
  "DeepTech",
  "Artificial Intelligence",
  "Semiconductors",
  "Smart Grids",
  "Advanced Computing",
  "Quantum Computing",
  "Future Intelligence Systems",
  "Research & Development",
];

const groupProperties = [
  {
    name: "MAH Quantum International",
    description:
      "International relations, institutional engagement and international business activities.",
  },
  {
    name: "Devashri S Industries",
    description:
      "Industrial and deep-technology activities across semiconductor and smart-grid initiatives.",
    children: [
      "Devashri S Semiconductors",
      "Devashri S SmartGrids",
    ],
  },
  {
    name: "Quanta Industries",
    description:
      "Business operations, industry relationships and institutional partnership initiatives.",
  },
  {
    name: "MAH Quantum Research Institute",
    description:
      "Research, scholarly publishing, research collaboration and academic infrastructure.",
  },
  {
    name: "Queens Group",
    description:
      "Group initiative established within the MAH Quantum organizational structure in 2026.",
  },
];

const publicProperties = [
  ["Corporate website", "https://mahquantum.tech/"],
  ["Research Institute", "https://research.mahquantum.tech/"],
  ["Workspace & internships", "https://workspace.mahquantum.tech/"],
  ["GitHub organization", "https://github.com/mahquantum"],
  ["Hugging Face organization", "https://huggingface.co/mah-quantum"],
];

export default function Home() {
  return (
    <>
      <header className="top">
        <div className="wrap nav">
          <a className="brand" href="#profile">
            NIROOP H
          </a>

          <nav className="navlinks" aria-label="Primary navigation">
            <a href="#about">Profile</a>
            <a href="#organization">Organization</a>
            <a href="#records">Records</a>
            <a href="#education">Education</a>
            <a href="#links">Links</a>
          </nav>
        </div>
      </header>

      <main>

        {/* HERO / PERSON ENTITY */}

        <section className="hero" id="profile">
          <div className="wrap hero-grid">

            <div className="hero-copy">
              <p className="kicker">
                PROFESSIONAL PROFILE
              </p>

              <h1>Niroop H</h1>

              <p className="role">
                Founder &amp; Chief Executive Officer
              </p>

              <p className="company-line">
                MAH Quantum
              </p>

              <p className="lead">
                Niroop H is the Founder and Chief Executive Officer
                of MAH Quantum, based in Bengaluru, India. He oversees
                the organization&apos;s corporate direction, technology
                strategy, business operations and research initiatives.
              </p>

              <div className="location">
                Bengaluru, Karnataka, India
              </div>
            </div>

            <div className="hero-photo-wrap">
              <img
                className="photo"
                src="/niroop-h.jpeg"
                alt="Portrait of Niroop H"
                width="832"
                height="1088"
              />
            </div>

          </div>
        </section>


        {/* PROFILE */}

        <section
          className="section"
          id="about"
        >
          <div className="wrap two-col">

            <div>
              <p className="eyebrow">
                01
              </p>

              <h2>
                Profile
              </h2>
            </div>

            <div className="content">

              <p>
                Niroop H is the Founder and Chief Executive Officer
                of MAH Quantum. His responsibilities include
                organizational direction, technology strategy,
                business development, research initiatives and
                coordination across the organization&apos;s
                operating divisions.
              </p>

              <p>
                His professional and research activities cover
                DeepTech, Artificial Intelligence, Semiconductors,
                Smart Grids, Advanced Computing, Quantum Computing,
                Future Intelligence Systems and Research &amp;
                Development.
              </p>

            </div>

          </div>
        </section>


        {/* TECHNOLOGY */}

        <section className="section section-border">

          <div className="wrap two-col">

            <div>
              <p className="eyebrow">
                02
              </p>

              <h2>
                Technology &amp; Research Areas
              </h2>
            </div>

            <div className="technology-list">

              {technologyAreas.map((area) => (
                <div
                  className="technology-item"
                  key={area}
                >
                  {area}
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* ORGANIZATION */}

        <section
          className="section section-border"
          id="organization"
        >

          <div className="wrap">

            <p className="eyebrow">
              03
            </p>

            <h2>
              MAH Quantum
            </h2>

            <p className="section-intro">
              MAH Quantum is the principal organization through
              which Niroop H conducts technology, business and
              research activities.
            </p>


            <div className="structure">

              <div className="structure-root">

                <h3>
                  MAH Quantum
                </h3>

                <p>
                  Principal organization
                </p>

              </div>


              <div className="structure-grid">

                {groupProperties.map((item) => (

                  <article
                    className="structure-item"
                    key={item.name}
                  >

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                    {item.children && (

                      <div className="subunits">

                        {item.children.map((child) => (

                          <span key={child}>
                            {child}
                          </span>

                        ))}

                      </div>

                    )}

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* CURRENT POSITIONS */}

        <section className="section section-border">

          <div className="wrap">

            <p className="eyebrow">
              04
            </p>

            <h2>
              Current Positions
            </h2>


            <div className="role-list">

              <article className="role-item">

                <div>
                  <h3>
                    MAH Quantum
                  </h3>

                  <div className="meta">
                    Founder &amp; Chief Executive Officer ·
                    2026–Present
                  </div>
                </div>

                <p>
                  Corporate direction, technology strategy,
                  AI systems, advanced computing, research
                  and organizational development.
                </p>

              </article>


              <article className="role-item">

                <div>
                  <h3>
                    MAH Quantum Research Institute
                  </h3>

                  <div className="meta">
                    Founder &amp; Head of Research ·
                    2026–Present
                  </div>
                </div>

                <p>
                  Research activities, scholarly publishing,
                  research collaboration and academic
                  infrastructure.
                </p>

              </article>


              <article className="role-item">

                <div>
                  <h3>
                    Quanta Industries
                  </h3>

                  <div className="meta">
                    Head of Business Operations ·
                    2026–Present
                  </div>
                </div>

                <p>
                  Business operations, corporate relations,
                  partnerships and industry–academia
                  initiatives.
                </p>

              </article>


              <article className="role-item">

                <div>
                  <h3>
                    Devashri S Industries
                  </h3>

                  <div className="meta">
                    Head of Operations ·
                    2026–Present
                  </div>
                </div>

                <p>
                  International relations, deep-technology
                  initiatives, robotics and industrial
                  development across semiconductor and
                  smart-grid activities.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* RECORDS */}

        <section
          className="section section-border"
          id="records"
        >

          <div className="wrap">

            <p className="eyebrow">
              05
            </p>

            <h2>
              Professional Records &amp; Registrations
            </h2>

            <p className="section-intro">
              Government, institutional, professional and
              certification records associated with this profile.
              Organizational registrations are described as
              organizational records rather than personal
              certifications.
            </p>


            <div className="record-list">

              {records.map((record) => (

                <article
                  className="record"
                  key={record.name}
                >

                  <div>

                    <h3>
                      {record.name}
                    </h3>

                    <div className="issuer">
                      {record.issuer}
                    </div>

                    {record.status && (
                      <div className="record-status">
                        {record.status}
                      </div>
                    )}

                    {record.expires && (
                      <div className="record-expiry">
                        Expires {record.expires}
                      </div>
                    )}

                  </div>


                  <div className="record-right">

                    <div className="identifier">
                      {record.identifier}
                    </div>

                    {record.url && (

                      <a
                        className="record-link"
                        href={record.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Official record ↗
                      </a>

                    )}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* AFFILIATIONS */}

        <section className="section section-border">

          <div className="wrap">

            <p className="eyebrow">
              06
            </p>

            <h2>
              Organizational Affiliations
            </h2>

            <div className="affiliations">

              {affiliations.map((item) => (

                <div
                  className="affiliation"
                  key={item.name}
                >

                  {item.url ? (

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name} ↗
                    </a>

                  ) : (

                    item.name

                  )}

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* EDUCATION */}

        <section
          className="section section-border"
          id="education"
        >

          <div className="wrap two-col">

            <div>

              <p className="eyebrow">
                07
              </p>

              <h2>
                Education
              </h2>

            </div>


            <div className="content">

              <h3>
                Christ University, Bengaluru
              </h3>

              <p>
                B.Tech Computer Science &amp; Engineering
                <br />
                Honours — Artificial Intelligence &amp;
                Machine Learning
                <br />
                2025–2029
              </p>

            </div>

          </div>

        </section>


        {/* PUBLIC PROPERTIES */}

        <section
          className="section section-border"
          id="links"
        >

          <div className="wrap two-col">

            <div>

              <p className="eyebrow">
                08
              </p>

              <h2>
                Public Properties
              </h2>

            </div>


            <div className="links">

              {publicProperties.map(([label, url]) => (

                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                  <span>↗</span>
                </a>

              ))}


              <a
                href="https://www.linkedin.com/in/nirooph"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>


              <a
                href="https://github.com/mahquantum"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAH Quantum GitHub
                <span>↗</span>
              </a>


              <a
                href="https://huggingface.co/mah-quantum"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAH Quantum on Hugging Face
                <span>↗</span>
              </a>

            </div>

          </div>

        </section>

      </main>


      <footer className="footer">

        <div className="wrap">

          <span>
            NIROOP H
          </span>

          <span>
            Founder &amp; CEO · MAH Quantum
          </span>

          <span>
            Bengaluru, India
          </span>

        </div>

      </footer>
    </>
  );
}
