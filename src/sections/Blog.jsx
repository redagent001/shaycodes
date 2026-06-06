import { Link } from 'react-router-dom'
import styles from './Blog.module.css'

const posts = [
  {
    slug: '/blog/full-stack-apps',
    featured: true,
    icon: '💼',
    gradient: 'linear-gradient(135deg,#0d2e28 0%,#0d9e87 100%)',
    cat: 'Business · 6 min read',
    date: 'Jun 2026', tag: 'For Business Owners',
    title: '5 Signs Your Business Needs a Custom Web App (Not Another SaaS Tool)',
    desc: 'Still paying for 6 different tools that don\'t talk to each other? Here\'s how to know when it\'s time to build something purpose-made — and what that actually costs.',
  },
  {
    slug: '/blog/flow-designer-patterns',
    icon: '🔍',
    gradient: 'linear-gradient(135deg,#1a1200 0%,#3d2e00 100%)',
    cat: 'Business · 5 min',
    date: 'May 2026', tag: 'Client Work',
    title: 'What a Developer Actually Does in a Discovery Call',
  },
  {
    slug: '/blog/firestore-data-modeling',
    icon: '⚡',
    gradient: 'linear-gradient(135deg,#0d1a2e 0%,#0d3d6e 100%)',
    cat: 'Dev · 7 min',
    date: 'Apr 2026', tag: 'Development',
    title: 'Why I Use Vite for Every Client Project Now',
  },
]

const teaser = {
  slug: '/blog/firestore-data-modeling',
  icon: '🚀', date: 'May 2026', cat: 'Dev · 8 min read',
  title: 'My Exact Netlify + Firebase Deployment Workflow',
}

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div>
            <div className="eyebrow">Content</div>
            <h2>Writing & <span className="grad">sharing.</span></h2>
          </div>
          <a href="#" className="btn btn-outline">All posts →</a>
        </div>

        <div className={styles.grid}>
          {posts.map(({ slug, featured, icon, gradient, cat, date, tag, title, desc }) => (
            <div key={slug} className={`${styles.card} ${featured ? styles.featured : ''} reveal`}>
              <div className={styles.thumb} style={{ background: gradient }}>
                <span className={styles.thumbIcon}>{icon}</span>
                <div className={styles.thumbCat}>{cat}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span>{date}</span>
                  <span className={styles.dot} />
                  <span>{tag}</span>
                </div>
                <h3>{title}</h3>
                {desc && <p>{desc}</p>}
                <Link to={slug} className={styles.read}>Read post →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Teaser row */}
        <div className={`${styles.teaser} reveal`}>
          <div className={styles.teaserLeft}>
            <span className={styles.teaserIcon}>{teaser.icon}</span>
            <div>
              <div className={styles.teaserMeta}>{teaser.cat} · {teaser.date}</div>
              <div className={styles.teaserTitle}>{teaser.title}</div>
            </div>
          </div>
          <Link to={teaser.slug} className="btn btn-outline btn-sm">Read post →</Link>
        </div>
      </div>
    </section>
  )
}
