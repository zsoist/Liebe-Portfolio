export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <p className="hero__label animate-in">Engineer &middot; AI &middot; Data</p>

        <h1 className="hero__name animate-in delay-1">
          {/* PLACEHOLDER: Replace with candidate's full name */}
          Liebe
        </h1>

        <p className="hero__headline animate-in delay-2">
          Electrical &amp; Electronics Engineer with applied machine learning
          experience and current graduate training in AI Engineering.
        </p>

        <p className="hero__sub animate-in delay-3">
          Building data-driven solutions across signal analysis, classification,
          and technical experimentation. Prepared for entry-level roles in data,
          ML, and applied AI.
        </p>

        <div className="hero__cta animate-in delay-4">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--secondary">Get in Touch</a>
        </div>

        <div className="hero__tags animate-in delay-5">
          <span>Machine Learning</span>
          <span>Data Analysis</span>
          <span>AI Engineering</span>
          <span>Signal Processing</span>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          position: relative;
        }
        .hero__inner {
          max-width: 720px;
        }
        .hero__label {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 20px;
        }
        .hero__name {
          font-size: clamp(48px, 8vw, 72px);
          font-weight: 800;
          color: var(--color-text-heading);
          letter-spacing: -2px;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .hero__headline {
          font-size: clamp(18px, 2.5vw, 22px);
          font-weight: 500;
          color: var(--color-text-heading);
          line-height: 1.4;
          margin-bottom: 14px;
          max-width: 640px;
        }
        .hero__sub {
          font-size: 16px;
          color: var(--color-text-secondary);
          line-height: 1.65;
          max-width: 560px;
          margin-bottom: 32px;
        }
        .hero__cta {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
          cursor: pointer;
          border: none;
        }
        .btn--primary {
          background: var(--color-accent);
          color: #fff;
        }
        .btn--primary:hover {
          background: var(--color-accent-hover);
          color: #fff;
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }
        .btn--secondary {
          background: transparent;
          color: var(--color-text-heading);
          border: 1.5px solid var(--color-border);
        }
        .btn--secondary:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
          transform: translateY(-1px);
        }
        .hero__tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .hero__tags span {
          font-size: 12px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 20px;
          background: var(--color-tag-bg);
          color: var(--color-tag-text);
        }
      `}</style>
    </section>
  )
}
