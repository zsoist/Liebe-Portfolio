const timeline = [
  {
    type: 'education',
    title: "Master's in AI Engineering",
    org: '/* PLACEHOLDER: University Name */',
    period: 'In Progress',
    detail: 'Graduate studies in artificial intelligence, machine learning systems, and applied AI engineering.',
    current: true,
  },
  {
    type: 'education',
    title: 'Electrical Engineering',
    org: '/* PLACEHOLDER: University Name */',
    period: '/* PLACEHOLDER: Year Range */',
    detail: 'Core training in power systems, circuit analysis, signal processing, and electrical system design.',
  },
  {
    type: 'education',
    title: 'Electronics Engineering',
    org: '/* PLACEHOLDER: University Name */',
    period: '/* PLACEHOLDER: Year Range */',
    detail: 'Foundation in electronics design, embedded systems, sensor technologies, and hardware-software integration.',
  },
  // PLACEHOLDER: Add professional experience entries below
  // {
  //   type: 'work',
  //   title: 'Role Title',
  //   org: 'Company Name',
  //   period: 'Year – Year',
  //   detail: 'Brief description of role and contributions.',
  // },
]

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education & Experience</h2>
        <p className="section-subtitle">
          Academic foundation and professional trajectory.
        </p>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div className={`timeline__item ${item.current ? 'timeline__item--current' : ''}`} key={i}>
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__title">{item.title}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience {
          background: var(--color-bg-alt);
        }
        .timeline {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          padding-left: 32px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 7px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--color-border);
        }
        .timeline__item {
          position: relative;
          padding-bottom: 32px;
        }
        .timeline__item:last-child {
          padding-bottom: 0;
        }
        .timeline__marker {
          position: absolute;
          left: -32px;
          top: 6px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          z-index: 1;
        }
        .timeline__item--current .timeline__marker {
          border-color: var(--color-accent);
          background: var(--color-accent);
          box-shadow: 0 0 0 4px var(--color-accent-subtle);
        }
        .timeline__content {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 20px 24px;
          transition: border-color var(--transition-fast);
        }
        .timeline__content:hover {
          border-color: var(--color-border-hover);
        }
        .timeline__header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }
        .timeline__title {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-text-heading);
        }
        .timeline__period {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          color: var(--color-accent);
          white-space: nowrap;
        }
        .timeline__org {
          font-size: 14px;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }
        .timeline__detail {
          font-size: 14px;
          color: var(--color-text);
          margin-top: 8px;
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .timeline__header {
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>
    </section>
  )
}
