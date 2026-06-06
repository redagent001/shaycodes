import { Link } from 'react-router-dom'
import styles from './PostLayout.module.css'

export default function PostLayout({ children, backHref = '/#blog', backLabel = '← Back to posts', accentColor = 'teal' }) {
  return (
    <div className={styles.wrap} data-accent={accentColor}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}

export function PostCover({ gradient, icon }) {
  return (
    <div className={styles.cover} style={{ background: gradient }}>
      <span className={styles.coverIcon}>{icon}</span>
    </div>
  )
}

export function PostHero({ category, title, meta, desc, tags }) {
  return (
    <div className={styles.hero}>
      <div className={styles.category}>{category}</div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        {meta.map((m, i) => (
          <span key={i}>{typeof m === 'string' ? m : <span className={styles.metaDot} />}</span>
        ))}
      </div>
      {desc && <p className={styles.desc}>{desc}</p>}
      {tags && (
        <div className={styles.tags}>
          {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      )}
    </div>
  )
}

export function PostBody({ children }) {
  return <div className={styles.body}>{children}</div>
}

export function Callout({ children, variant = 'teal' }) {
  return <div className={`${styles.callout} ${styles[variant]}`}><p>{children}</p></div>
}

export function FAQ({ items }) {
  return (
    <div className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      {items.map(({ q, a }) => (
        <div key={q} className={styles.faqItem}>
          <div className={styles.faqQ}>{q}</div>
          <p className={styles.faqA}>{a}</p>
        </div>
      ))}
    </div>
  )
}

export function PostCTA({ title, desc, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <div className={styles.cta}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={styles.ctaActions}>
        <a href={primaryHref} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">{primaryLabel}</a>
        {secondaryHref && (
          <Link to={secondaryHref} className="btn btn-outline">{secondaryLabel}</Link>
        )}
      </div>
    </div>
  )
}
