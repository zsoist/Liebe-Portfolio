export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">Engineering Foundation, AI Direction</h2>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Dual-qualified Electrical and Electronics Engineer currently
              completing a Master's degree in AI Engineering. Over three years
              of hands-on experience integrating AI tools into technical
              workflows, from CNN-based classification models to data-driven
              experimental analysis.
            </p>
            <p>
              Technical thesis work has spanned applied machine learning for
              power systems transient classification and scientific
              experimentation in materials engineering. This combination
              reflects a consistent focus: applying computational and
              data-oriented methods to solve real engineering problems.
            </p>
            <p>
              Currently targeting roles in data analysis, machine learning
              engineering, and applied AI, with growing interest in
              life-sciences and scientific applications of AI.
            </p>
          </div>

          <div className="about__highlights">
            <div className="about__card">
              <span className="about__card-number">2</span>
              <span className="about__card-label">Engineering Degrees</span>
              <span className="about__card-detail">Electrical &amp; Electronics</span>
            </div>
            <div className="about__card">
              <span className="about__card-number">M.Sc.</span>
              <span className="about__card-label">AI Engineering</span>
              <span className="about__card-detail">In progress</span>
            </div>
            <div className="about__card">
              <span className="about__card-number">3+</span>
              <span className="about__card-label">Years with AI Tools</span>
              <span className="about__card-detail">Applied in projects &amp; workflows</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-top: 32px;
          align-items: start;
        }
        .about__text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 15.5px;
          line-height: 1.7;
          color: var(--color-text);
        }
        .about__highlights {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .about__card {
          background: var(--color-bg-alt);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          transition: border-color var(--transition-fast);
        }
        .about__card:hover {
          border-color: var(--color-border-hover);
        }
        .about__card-number {
          font-size: 28px;
          font-weight: 800;
          color: var(--color-accent);
          letter-spacing: -1px;
          line-height: 1.2;
        }
        .about__card-label {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-heading);
        }
        .about__card-detail {
          font-size: 13px;
          color: var(--color-text-secondary);
        }
        @media (max-width: 768px) {
          .about__grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  )
}
