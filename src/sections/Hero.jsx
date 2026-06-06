import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} />
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for new projects
          </div>

          <h1 className={styles.title}>
            I build<br />
            <span className="grad">apps that</span><br />
            actually ship.
          </h1>

          <p className={styles.sub}>
            Developer, builder, and systems thinker based in Cleveland.
            I design and develop web apps, client portals, and workflow automation
            for small businesses and growing teams.
          </p>

          <div className={styles.actions}>
            <a
              href="https://redagentsol.com/intake"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book a free call →
            </a>
            <a href="#projects" className="btn btn-outline btn-lg">View my work</a>
          </div>

          <div className={styles.stats}>
            {[
              { num: '30+',  lbl: 'Projects shipped' },
              { num: '5+',   lbl: 'Years building' },
              { num: '100%', lbl: 'Client satisfaction' },
            ].map(({ num, lbl }) => (
              <div key={lbl} className={styles.stat}>
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLbl}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — terminal */}
        <div className={`${styles.terminal} reveal reveal-delay-2`}>
          <div className={styles.terminalHeader}>
            <span className={`${styles.tdot} ${styles.red}`} />
            <span className={`${styles.tdot} ${styles.yellow}`} />
            <span className={`${styles.tdot} ${styles.green}`} />
            <span className={styles.terminalTitle}>shay@shaycodes ~ zsh</span>
          </div>
          <div className={styles.terminalBody}>
            <span className={styles.tLine}><span className={styles.tPrompt}>❯</span> <span className={styles.tCmd}>whoami</span></span>
            <span className={styles.tLine}><span className={styles.tOut}>Shay · Developer & Builder</span></span>
            <span className={styles.tLine}><span className={styles.tDim}>Cleveland, OH · redagent001</span></span>
            <span className={styles.tLine}>&nbsp;</span>
            <span className={styles.tLine}><span className={styles.tPrompt}>❯</span> <span className={styles.tCmd}>cat skills.json</span></span>
            <span className={styles.tLine}><span className={styles.tOut}>{'{'}</span></span>
            <span className={styles.tLine}><span className={styles.tOut}>&nbsp; <span className={styles.tBlue}>"stack"</span>: [<span className={styles.tGreen}>"Vite"</span>, <span className={styles.tGreen}>"Firebase"</span>, <span className={styles.tGreen}>"JS"</span>],</span></span>
            <span className={styles.tLine}><span className={styles.tOut}>&nbsp; <span className={styles.tBlue}>"platform"</span>: <span className={styles.tGreen}>"Netlify"</span>,</span></span>
            <span className={styles.tLine}><span className={styles.tOut}>&nbsp; <span className={styles.tBlue}>"specialty"</span>: <span className={styles.tGreen}>"ServiceNow"</span>,</span></span>
            <span className={styles.tLine}><span className={styles.tOut}>&nbsp; <span className={styles.tBlue}>"available"</span>: <span className={styles.tOrange}>true</span></span></span>
            <span className={styles.tLine}><span className={styles.tOut}>{'}'}</span></span>
            <span className={styles.tLine}>&nbsp;</span>
            <span className={styles.tLine}><span className={styles.tPrompt}>❯</span> <span className={styles.tCmd}>git log --oneline -3</span></span>
            <span className={styles.tLine}><span className={styles.tTeal}>a1f2b3c feat: launched BillWise finance app</span></span>
            <span className={styles.tLine}><span className={styles.tTeal}>d4e5f6a feat: shipped MediaHub dashboard</span></span>
            <span className={styles.tLine}><span className={styles.tTeal}>9b8c7d6 feat: deployed BrandNameSites</span></span>
            <span className={styles.tLine}>&nbsp;</span>
            <span className={styles.tLine}><span className={styles.tPrompt}>❯</span> <span className={styles.tCursor} /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
