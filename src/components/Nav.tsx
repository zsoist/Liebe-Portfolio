import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#" className="nav__logo" aria-label="Home">
          L<span className="nav__logo-dot">.</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav__link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background var(--transition-base), box-shadow var(--transition-base);
        }
        .nav--scrolled {
          background: var(--color-bg);
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid var(--color-border);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav__logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--color-text-heading);
          text-decoration: none;
          letter-spacing: -1px;
        }
        .nav__logo-dot {
          color: var(--color-accent);
        }
        .nav__links {
          display: flex;
          gap: 32px;
        }
        .nav__link {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .nav__link:hover {
          color: var(--color-text-heading);
        }
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav__toggle span {
          width: 20px;
          height: 2px;
          background: var(--color-text-heading);
          border-radius: 1px;
          transition: transform var(--transition-fast);
        }
        @media (max-width: 768px) {
          .nav__toggle { display: flex; }
          .nav__links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            gap: 0;
            background: var(--color-bg);
            border-bottom: 1px solid var(--color-border);
            max-height: 0;
            overflow: hidden;
            transition: max-height var(--transition-base);
          }
          .nav__links--open {
            max-height: 320px;
          }
          .nav__link {
            padding: 14px 24px;
            border-top: 1px solid var(--color-border);
          }
        }
      `}</style>
    </header>
  )
}
