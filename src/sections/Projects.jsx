import billwiseImg  from '../assets/billwise.jpg'
import mediahubImg  from '../assets/mediahub.jpg'
import bnsImg       from '../assets/bns.jpg'
import styles from './Projects.module.css'

const projects = [
  {
    id: 'billwise', featured: true,
    img: billwiseImg, alt: 'BillWise Dashboard',
    type: 'Finance App · Full-stack', title: 'BillWise',
    desc: 'Personal finance app with debt payoff planner, safe-to-spend calculator, income reports, and real-time Firestore sync. Deployed on Netlify with Firebase backend.',
    stack: ['Vite','Firebase','Firestore','Netlify','JavaScript'],
    href: '#',
  },
  {
    id: 'mediahub',
    img: mediahubImg, alt: 'MediaHub Dashboard',
    type: 'Internal Tool · Dashboard', title: 'MediaHub',
    desc: 'Media publishing dashboard with 16 routes, dark luxury design, and Supabase-ready mock data across 6 brands.',
    stack: ['Vite','TypeScript','Tailwind','Supabase'],
    href: '#',
  },
  {
    id: 'bns',
    img: bnsImg, alt: 'BrandNameSites',
    type: 'Marketing Site · Brand System', title: 'BrandNameSites',
    desc: 'Full Vite + React marketing site with Firebase Firestore, 4-step lead capture quiz, dynamic blog, and Tiptap admin dashboard.',
    stack: ['React','Firebase','Tiptap','Netlify'],
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div>
            <div className="eyebrow">Selected work</div>
            <h2>Things I've <span className="grad">shipped.</span></h2>
          </div>
          <a href="#contact" className="btn btn-outline">See all projects →</a>
        </div>

        <div className={styles.grid}>
          {projects.map(({ id, featured, img, alt, type, title, desc, stack, href }) => (
            <div
              key={id}
              className={`${styles.card} ${featured ? styles.featured : ''} reveal ${featured ? '' : 'reveal-delay-1'}`}
            >
              <div className={styles.preview}>
                <img src={img} alt={alt} className={styles.previewImg} />
                <div className={styles.previewLabel}>// {title}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.type}>{type}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className={styles.stack}>
                  {stack.map(s => <span key={s} className={styles.pill}>{s}</span>)}
                </div>
                <a href={href} className={styles.link}>View project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
