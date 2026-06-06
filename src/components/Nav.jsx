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
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [pathname, hash])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
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
        
          href="/#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="btn btn-ghost btn-sm"
        >
          Let's talk →
        </a>
        
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