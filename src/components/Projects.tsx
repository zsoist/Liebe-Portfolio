const projects = [
  {
    flag: 'Flagship',
    title: 'CNN-Based Classification of Electromagnetic Transients',
    subtitle: 'Applied ML thesis in power systems engineering',
    problem:
      'Power systems generate complex electromagnetic transients that require fast, accurate classification for fault detection and grid stability analysis.',
    method:
      'Designed and trained a convolutional neural network on simulated time-series data from electromagnetic transient models. Implemented signal preprocessing, feature extraction, and multi-class classification pipelines.',
    impact:
      'Demonstrated that CNN architectures can reliably classify transient events in power systems, contributing a data-driven approach to a traditionally physics-based domain.',
    tags: ['Python', 'CNN', 'Time-Series', 'Signal Processing', 'Simulation', 'Power Systems'],
    // PLACEHOLDER: Add GitHub repo URL
    github: '#',
  },
  {
    title: 'Microrobots for Azo Dye Degradation in Wastewater',
    subtitle: 'Scientific experimentation with data-driven validation',
    problem:
      'Azo dyes in wastewater pose environmental hazards. Efficient, scalable degradation methods are needed beyond conventional treatment.',
    method:
      'Functionalized microrobots with silanes and laccase enzyme. Conducted systematic experiments measuring degradation efficiency under controlled conditions, with quantitative data analysis of results.',
    impact:
      'Validated a bio-functionalized microrobot approach for pollutant degradation, combining materials engineering with rigorous experimental data collection and analysis.',
    tags: ['Experimental Design', 'Data Analysis', 'Materials Engineering', 'Environmental'],
    github: '#',
  },
  {
    title: 'MaracuyAI — Audio Classification',
    subtitle: 'Applied ML for bioacoustic pattern recognition',
    problem:
      'Classifying audio signals in ecological or bioacoustic contexts requires robust feature extraction and model training on spectral data.',
    method:
      'Built an audio classification pipeline using spectral feature extraction and machine learning models. Processed raw audio into structured datasets for training and evaluation.',
    impact:
      'Created a functional classifier for audio pattern recognition, demonstrating applied ML skills in a domain with scientific and environmental relevance.',
    tags: ['Python', 'Audio Processing', 'ML Classification', 'Spectral Analysis'],
    github: '#',
  },
  {
    title: 'AI-Powered Daily Digest Automation',
    subtitle: 'Workflow automation with AI agents',
    problem:
      'Keeping up with distributed information sources is time-intensive and error-prone for professionals.',
    method:
      'Designed an automated pipeline integrating AI tools and APIs to aggregate, summarize, and deliver curated daily content digests.',
    impact:
      'Demonstrates current proficiency with AI tooling, API integration, and automation workflows relevant to data engineering and AI operations roles.',
    tags: ['AI Agents', 'Automation', 'API Integration', 'Python'],
    github: '#',
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Technical projects spanning applied machine learning, scientific
          experimentation, and AI-driven automation.
        </p>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <article className="project-card" key={i}>
              {p.flag && <span className="project-card__flag">{p.flag}</span>}
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>

              <div className="project-card__body">
                <div className="project-card__section">
                  <span className="project-card__label">Problem</span>
                  <p>{p.problem}</p>
                </div>
                <div className="project-card__section">
                  <span className="project-card__label">Approach</span>
                  <p>{p.method}</p>
                </div>
                <div className="project-card__section">
                  <span className="project-card__label">Outcome</span>
                  <p>{p.impact}</p>
                </div>
              </div>

              <div className="project-card__footer">
                <div className="project-card__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {p.github && p.github !== '#' && (
                  <a
                    href={p.github}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          background: var(--color-bg-alt);
        }
        .projects__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 40px;
        }
        .project-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 14px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .project-card:hover {
          border-color: var(--color-border-hover);
          box-shadow: var(--shadow-md);
        }
        .project-card:first-child {
          grid-column: 1 / -1;
          border-left: 3px solid var(--color-accent);
        }
        .project-card__flag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 8px;
        }
        .project-card__title {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text-heading);
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .project-card__subtitle {
          font-size: 14px;
          color: var(--color-text-secondary);
          margin-bottom: 20px;
          font-style: italic;
        }
        .project-card__body {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex: 1;
        }
        .project-card__section p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-text);
        }
        .project-card__label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-accent);
          display: block;
          margin-bottom: 4px;
        }
        .project-card__footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .project-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tag {
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 16px;
          background: var(--color-tag-bg);
          color: var(--color-tag-text);
        }
        .project-card__link {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          text-decoration: none;
        }
        .project-card__link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .projects__grid {
            grid-template-columns: 1fr;
          }
          .project-card:first-child {
            grid-column: 1;
          }
        }
      `}</style>
    </section>
  )
}
