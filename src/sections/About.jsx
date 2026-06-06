import shayPhoto from '../assets/shayna.png'
import styles from './About.module.css'

const skills = [
  'JavaScript','Vite','Firebase','HTML / CSS','Netlify',
  'ServiceNow','Flow Designer','Git / GitHub','Python',
  'REST APIs','Supabase','Figma',
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* IMAGE */}
          <div className={`${styles.imgWrap} reveal`}>
            <img
              src={shayPhoto}
              alt="Shay"
              className={styles.photo}
            />
            <div className={styles.corner}>
              <div className={styles.cornerNum}>30+</div>
              <div className={styles.cornerLbl}>Projects<br/>shipped</div>
            </div>
          </div>

          {/* COPY */}
          <div className={`${styles.copy} reveal reveal-delay-2`}>
            <div className="eyebrow">About me</div>
            <h2 className={styles.heading}>
              Developer, builder,<br />
              <span className="grad">systems thinker.</span>
            </h2>

            <p>
              I'm <strong>Shay</strong> — a full-stack developer and small business co-founder
              based in Cleveland, Ohio. I build web apps, automation systems, and client-facing
              tools under <strong>ShayCodes</strong> and co-run <strong>Red Agent Solutions</strong>{' '}
              and <strong>BrandNameSites</strong>.
            </p>

            <p>
              My background spans <strong>ServiceNow enterprise development</strong> (Flow Designer,
              Business Rules, IntegrationHub) alongside hands-on client web builds — so I bring both
              enterprise-level thinking and scrappy startup speed to every project.
            </p>

            <p>
              I don't just write code. I think in <strong>systems</strong>, build for real users,
              and ship things that actually work in production.
            </p>

            <div className={styles.tags}>
              {skills.map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>

            <div className={styles.socials}>
              {[
                { icon: '⌥', label: 'GitHub',   href: 'https://github.com/redagent001' },
                { icon: '𝕏', label: 'Twitter',  href: '#' },
                { icon: 'in', label: 'LinkedIn', href: '#' },
                { icon: '▶', label: 'YouTube',  href: '#' },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.socialBtn}>
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
