import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { label: 'About',     href: '/#about' },
  { label: 'Services',  href: '/#services' },
  { label: 'Work',      href: '/#projects' },
  { label: 'Content',   href: '/#blog' },
  { label: 'Resources', href: '/#whitepapers' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoDot} />
        ShayCodes
      </Link>

      <ul className={styles.links}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={isHome ? href : `/${href}`} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href="/#contact" className="btn btn-ghost btn-sm">Let's talk →</a>
        <a
          href="https://redagentsol.com/intake"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm"
        >
          Book a call
        </a>
      </div>
    </nav>
  )
}
