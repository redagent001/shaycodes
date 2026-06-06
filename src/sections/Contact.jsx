import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' })
  const [status, setStatus] = useState(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...form
        }),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ name:'', email:'', service:'', message:'' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.left} reveal`}>
            <div className="eyebrow">Let's work together</div>
            <h2>Ready to build<br /><span className="grad">something great?</span></h2>
            <p>Whether you need a web app built from scratch, an automation system that runs itself, or a developer who gets business — let's talk. First call is always free.</p>

            <div className={styles.items}>
              {[
                { icon:'✉', label:'Email', val:'shay.codes.dev@gmail.com', href:'mailto:shay.codes.dev@gmail.com' },
                { icon:'⌥', label:'GitHub', val:'github.com/redagent001', href:'https://github.com/redagent001' },
                { icon:'📅', label:'Book a call', val:'redagentsol.com/intake', href:'https://redagentsol.com/intake' },
              ].map(({ icon, label, val, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className={styles.item}>
                  <div className={styles.itemIcon}>{icon}</div>
                  <div>
                    <div className={styles.itemLabel}>{label}</div>
                    <div className={styles.itemVal}>{val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={`${styles.formWrap} reveal reveal-delay-2`}>
            <h3>Send a message</h3>
            <p className={styles.formSub}>
              Have a question?{' '}
              <a href="https://redagentsol.com/intake" target="_blank" rel="noreferrer">
                Book a call directly →
              </a>
            </p>

            {status === 'sent' ? (
              <div className={styles.success}>
                <span>✓</span>
                <div>
                  <strong>Message sent!</strong>
                  <p>I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className={styles.form}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{display:'none'}}>
                  <input name="bot-field" onChange={onChange} />
                </div>

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label>Your name</label>
                    <input name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={onChange} required />
                  </div>
                  <div className={styles.group}>
                    <label>Email address</label>
                    <input name="email" type="email" placeholder="jane@company.com" value={form.email} onChange={onChange} required />
                  </div>
                </div>
                <div className={styles.group}>
                  <label>What do you need?</label>
                  <select name="service" value={form.service} onChange={onChange}>
                    <option value="">Select a service...</option>
                    {['Web App / Portal','Workflow Automation','Brand System & Site','AI-Powered Tool','Dashboard / Analytics','Dev Consulting','Something else'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.group}>
                  <label>Tell me about your project</label>
                  <textarea name="message" rows={4} placeholder="Give me the overview — what you're building, timeline, and budget range..." value={form.message} onChange={onChange} />
                </div>
                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: '13px', fontFamily: 'var(--mono)' }}>
                    Something went wrong. Try emailing shay.codes.dev@gmail.com directly.
                  </p>
                )}
                <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}