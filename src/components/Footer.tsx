import { footerSocialLinks } from '../data/site'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-social">
        {footerSocialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
      <p>© {year} Teodora Dimitrova. All rights reserved.</p>
    </footer>
  )
};
