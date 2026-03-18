const categories = [
  {
    title: 'Data & Analysis',
    skills: [
      'Data preprocessing & cleaning',
      'Exploratory data analysis',
      'Statistical analysis',
      'Time-series analysis',
      'Data visualization',
      'SQL & database queries',
      'Jupyter notebooks',
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      'Supervised learning',
      'Neural networks (CNN)',
      'Model training & evaluation',
      'Feature engineering',
      'Classification pipelines',
      'AI tool integration',
      'Prompt engineering',
    ],
  },
  {
    title: 'Programming & Tooling',
    skills: [
      'Python',
      'SQL',
      'Git & version control',
      'Jupyter / Colab',
      'API integration',
      'Automation scripting',
      'Technical documentation',
    ],
  },
  {
    title: 'Engineering Domains',
    skills: [
      'Electrical systems',
      'Electronics design',
      'Signal processing',
      'Power systems analysis',
      'Simulation workflows',
      'Experimental design',
      'Technical reporting',
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section-label">Technical Profile</p>
        <h2 className="section-title">Capabilities</h2>
        <p className="section-subtitle">
          Structured overview of technical skills across data, ML, programming,
          and engineering domains.
        </p>

        <div className="skills__grid">
          {categories.map((cat) => (
            <div className="skill-group" key={cat.title}>
              <h3 className="skill-group__title">{cat.title}</h3>
              <ul className="skill-group__list">
                {cat.skills.map((s) => (
                  <li key={s} className="skill-group__item">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .skill-group {
          background: var(--color-bg-alt);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          transition: border-color var(--transition-fast);
        }
        .skill-group:hover {
          border-color: var(--color-border-hover);
        }
        .skill-group__title {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-text-heading);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--color-accent);
        }
        .skill-group__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skill-group__item {
          font-size: 13.5px;
          color: var(--color-text);
          padding-left: 14px;
          position: relative;
          line-height: 1.5;
        }
        .skill-group__item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-accent);
          opacity: 0.5;
        }
        @media (max-width: 1024px) {
          .skills__grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
