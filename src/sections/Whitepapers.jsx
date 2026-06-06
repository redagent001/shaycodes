import { Link } from 'react-router-dom'
import styles from './Whitepapers.module.css'

const papers = [
  {
    slug: '/resources/build-buy-hire',
    icon: '⚖️',
    gradient: 'linear-gradient(135deg,#0a2420 0%,#0d9e87 60%,#e8622a 100%)',
    badge: '✓ Free Access', badgeStyle: 'free',
    cat: 'Decision Framework · 12 min',
    title: 'Build vs Buy vs Hire',
    desc: 'The complete decision framework for choosing between SaaS, no-code platforms, and custom development — with a real cost breakdown over 36 months.',
    linkLabel: 'Read whitepaper →', linkColor: 'orange',
  },
  {
    slug: '/resources/app-audit',
    icon: '🔍',
    gradient: 'linear-gradient(135deg,#1a0a00 0%,#6e2a0d 50%,#e8622a 100%)',
    badge: '⚿ Free — Email Required', badgeStyle: 'gated',
    cat: 'Audit Framework · 15 min',
    title: 'The Small Business App Audit',
    desc: 'Score every tool in your stack, identify which workflows are ready for a custom build, and get a 3-phase action plan template.',
    linkLabel: 'Get free access →', linkColor: 'teal',
  },
  {
    slug: null,
    icon: '🚀',
    gradient: 'linear-gradient(135deg,#0d1a2e 0%,#0d3d6e 100%)',
    badge: 'Coming Soon', badgeStyle: 'soon',
    cat: 'Developer Guide · ~20 min',
    title: 'The Solo Dev Stack',
    desc: 'A complete guide to building, deploying, and maintaining client apps with Vite, Firebase, and Netlify — from zero to production.',
    linkLabel: 'Notify me when live', linkColor: 'muted',
  },
]

export default function Whitepapers() {
  return (
    <section id="whitepapers">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div>
            <div className="eyebrow">Free Resources</div>
            <h2>Whitepapers & <span className="grad">Guides.</span></h2>
          </div>
          <span className={styles.sub}>// download or read online</span>
        </div>

        <div className={`${styles.grid} reveal reveal-delay-1`}>
          {papers.map(({ slug, icon, gradient, badge, badgeStyle, cat, title, desc, linkLabel, linkColor }) => (
            <div key={title} className={`${styles.card} ${badgeStyle === 'soon' ? styles.dimmed : ''}`}>
              <div className={styles.thumb} style={{ background: gradient }}>
                <span className={styles.thumbIcon}>{icon}</span>
                <span className={`${styles.badge} ${styles[badgeStyle]}`}>{badge}</span>
              </div>
              <div className={styles.info}>
                <div className={styles.cat}>{cat}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {slug ? (
                  <Link to={slug} className={`${styles.link} ${styles[linkColor]}`}>{linkLabel}</Link>
                ) : (
                  <span className={`${styles.link} ${styles.muted}`}>{linkLabel}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
