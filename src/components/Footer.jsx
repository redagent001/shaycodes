import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const links = [
  { label: 'About',     href: '/#about' },
  { label: 'Services',  href: '/#services' },
  { label: 'Work',      href: '/#projects' },
  { label: 'Content',   href: '/#blog' },
  { label: 'Resources', href: '/#whitepapers' },
  { label: 'Contact',   href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        ShayCodes<span className={styles.dot}>.</span>
      </Link>
      <span className={styles.copy}>// Shay · Cleveland, OH · {new Date().getFullYear()}</span>
      <ul className={styles.links}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
