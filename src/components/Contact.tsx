export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact__text">
            Open to opportunities in data analysis, machine learning, and
            applied AI. Available for entry-level to associate roles where
            engineering rigor and ML experience are valued.
          </p>

          <div className="contact__links">
            {/* PLACEHOLDER: Replace # with actual LinkedIn URL */}
            <a
              href="#"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>

            {/* PLACEHOLDER: Replace # with actual GitHub URL */}
            <a
              href="#"
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              GitHub
            </a>

            {/* PLACEHOLDER: Replace with actual email */}
            <a
              href="mailto:placeholder@email.com"
              className="contact__link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Email
            </a>
          </div>

          {/* PLACEHOLDER: Add CV/resume file to public/ and update href */}
          <a
            href="#"
            className="btn btn--primary contact__cv"
          >
            Download CV
          </a>
        </div>
      </div>

      <style>{`
        .contact__inner {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }
        .contact__inner .section-label,
        .contact__inner .section-subtitle {
          text-align: center;
        }
        .contact__inner .section-title {
          text-align: center;
        }
        .contact__text {
          font-size: 16px;
          color: var(--color-text);
          line-height: 1.65;
          margin-bottom: 32px;
          margin-top: 8px;
        }
        .contact__links {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .contact__link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-heading);
          background: var(--color-bg-alt);
          border: 1px solid var(--color-border);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .contact__link:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        .contact__cv {
          margin-top: 8px;
        }
      `}</style>
    </section>
  )
}
