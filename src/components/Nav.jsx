import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Nav.module.css'

const links = [
  { label: 'About',     id: 'about' },
  { label: 'Services',  id: 'services' },
  { label: 'Work',      id: 'projects' },
  { label: 'Content',   id: 'blog' },
  { label: 'Resources', id: 'whitepapers' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    if (pathname === '/') {
      // Already on home — just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On a sub-page — navigate home then scroll
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoDot} />
        ShayCodes
      </Link>

      <ul className={styles.links}>
        {links.map(({ label, id }) => (
          <li key={label}>
            
              href={`/#${id}`}
              className={styles.link}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-ghost btn-sm">Let's talk →</a>
        
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