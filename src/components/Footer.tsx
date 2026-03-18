export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          &copy; {year} Liebe. Built with precision.
        </p>
      </div>

      <style>{`
        .footer {
          padding: 32px 0;
          border-top: 1px solid var(--color-border);
          text-align: center;
        }
        .footer__text {
          font-size: 13px;
          color: var(--color-text-secondary);
        }
      `}</style>
    </footer>
  )
}
