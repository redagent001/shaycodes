import styles from './Services.module.css'

const services = [
  { num:'01', icon:'⚡', title:'Web Apps & Portals',       desc:'Custom web applications built with Vite, Firebase, and Netlify. Client portals, dashboards, booking tools — end-to-end, production-ready.', tags:['Vite','Firebase','Netlify','Firestore'] },
  { num:'02', icon:'🔁', title:'Workflow Automation',      desc:'ServiceNow Flow Designer, Business Rules, and IntegrationHub. I turn manual processes into automated systems that run without babysitting.', tags:['ServiceNow','Flow Designer','IntegrationHub'] },
  { num:'03', icon:'🎨', title:'Brand Systems & Sites',    desc:'Through BrandNameSites, I build brand identity systems, marketing sites, and digital experiences that convert visitors into clients.', tags:['Branding','Web Design','Webflow'] },
  { num:'04', icon:'🤖', title:'AI-Powered Tools',         desc:'AI content generation, chatbot integrations, and LLM-powered workflows built into your existing stack without over-engineering it.', tags:['AI APIs','n8n','Python'] },
  { num:'05', icon:'📊', title:'Dashboards & Analytics',   desc:'Internal tools, reporting dashboards, and data visualizations. Built for operators who need clarity, not more spreadsheets.', tags:['Charts.js','Supabase','REST APIs'] },
  { num:'06', icon:'🛠', title:'Dev Consulting & Review',  desc:'Stuck on architecture? Need a second opinion? I\'ll audit your codebase, unblock your team, or jump in as a fractional dev.', tags:['Consulting','Code Audit','Mentorship'] },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className={`${styles.intro} reveal`}>
          <div className="eyebrow">What I build</div>
          <h2>Services designed for<br /><span className="grad">real business outcomes.</span></h2>
          <p>I work with small businesses, startups, and enterprise teams to build tools that replace manual work, impress clients, and scale without drama.</p>
        </div>

        <div className={`${styles.grid} reveal reveal-delay-1`}>
          {services.map(({ num, icon, title, desc, tags }) => (
            <div key={num} className={styles.card}>
              <div className={styles.num}>{num}</div>
              <span className={styles.icon}>{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className={styles.tags}>
                {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
