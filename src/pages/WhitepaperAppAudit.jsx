import { useState } from 'react'
import PostLayout, { PostCover, PostHero, PostBody, Callout, PostCTA } from '../components/PostLayout.jsx'
import styles from './WhitepaperAppAudit.module.css'

function Gate({ onUnlock }) {
  const [name, setName]   = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [error, setError]   = useState('')

  const submit = async () => {
    if (!email) { onUnlock(); return }
    if (!email.includes('@')) { setError('Please enter a valid email address.'); return }

    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'whitepaper-app-audit' }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setTimeout(onUnlock, 800)
      } else {
        setStatus(null)
        setError(data.error || 'Something went wrong. Try again.')
      }
    } catch {
      // Function not deployed yet (local dev) — just open
      onUnlock()
    }
  }

  return (
    <div className={styles.gateOverlay}>
      <div className={styles.gateBox}>
        <span className={styles.gateIcon}>🔍</span>
        <h2>The Small Business App Audit</h2>
        <p>Get instant access to the complete audit framework — scoring guide, tool assessment checklist, and 3-phase action plan template.</p>
        <div className={styles.perks}>
          {['Full audit scorecard with scoring guide','Tool-by-tool assessment checklist','3-phase action plan template','Free — no credit card needed'].map(p => (
            <div key={p} className={styles.perk}>
              <span className={styles.perkIcon}>✓</span>
              {p}
            </div>
          ))}
        </div>
        <div className={styles.gateForm}>
          <input type="text"  placeholder="Your first name"   value={name}  onChange={e => setName(e.target.value)}  />
          <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} />
          {error && <p className={styles.gateError}>{error}</p>}
          <button
            className={styles.gateSubmit}
            onClick={submit}
            disabled={status === 'sending'}
            style={status === 'success' ? { background: '#2dd87a' } : {}}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Opening...' : 'Get free access →'}
          </button>
        </div>
        <p className={styles.gateFine}>// No spam. Unsubscribe anytime.</p>
        <span className={styles.gateSkip} onClick={onUnlock}>Skip for now — just let me read it</span>
      </div>
    </div>
  )
}

export default function WhitepaperAppAudit() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <>
      {!unlocked && <Gate onUnlock={() => setUnlocked(true)} />}
      <PostCover gradient="linear-gradient(135deg,#1a0a00 0%,#6e2a0d 50%,#e8622a 100%)" icon="🔍" />
      <PostLayout>
        <PostHero
          category="Audit Framework · Gated Whitepaper"
          title="The Small Business App Audit."
          meta={['ShayCodes', '·', 'Shay · Developer & Builder', '·', '2026 Edition', '·', '~15 min read']}
          desc="A complete framework for auditing your current software stack, scoring each tool, and identifying exactly which workflows are ready for a custom-built solution."
          tags={['Audit','Software Stack','SaaS','Custom Development','Small Business']}
        />
        <PostBody>
          <h2>Why Most Software Audits Fail</h2>
          <p>Most businesses ask: <strong>"Are we using this tool?"</strong> when they should ask: <strong>"Is this tool actually solving the problem it was bought to solve?"</strong></p>
          <p>Usage does not equal value. A team can use a tool every day and still be working around its limitations.</p>
          <Callout variant="orange"><strong>The right audit question:</strong> "If we removed this tool tomorrow, would our process break — or would we actually build something better to replace it?"</Callout>

          <h2>The Audit Scorecard</h2>
          <p>Run every tool in your stack through these five questions. Score each 0 (No), 1 (Partial), or 2 (Yes). Max score: 10 per tool.</p>
          <ol>
            <li>Does this tool solve the exact problem it was purchased to solve — without major workarounds?</li>
            <li>Does this tool connect cleanly to the other tools your team uses daily?</li>
            <li>Can your team complete the core workflow inside this tool without switching to email, spreadsheets, or another app?</li>
            <li>Is the monthly cost proportional to the actual value it delivers to the business?</li>
            <li>Does this tool support your business as it grows — or will you hit a ceiling within 12 months?</li>
          </ol>

          <h2>How to Read the Scores</h2>
          <ul>
            <li><strong>8–10: Keep.</strong> This tool is working. Optimize how the team uses it.</li>
            <li><strong>5–7: Review.</strong> Gaps exist. Evaluate whether a better option or custom solution closes them.</li>
            <li><strong>0–4: Replace.</strong> You are paying for something that creates friction instead of removing it.</li>
          </ul>
          <Callout><strong>Run this for every tool in your stack.</strong> Most businesses discover 2–3 tools that score below 5 — tools they have been paying for out of habit, not value.</Callout>

          <h2>The 7 Signals It's Time to Build Custom</h2>
          <ul>
            <li><strong>The spreadsheet shadow</strong> — your team keeps a separate spreadsheet alongside the tool</li>
            <li><strong>The copy-paste workflow</strong> — data gets manually moved between tools that don't integrate</li>
            <li><strong>The workaround document</strong> — you have a "how we actually use this" guide longer than the onboarding docs</li>
            <li><strong>The pricing ceiling</strong> — the next tier costs significantly more but you need those features</li>
            <li><strong>The brand mismatch</strong> — client-facing parts can't be customized to match your brand</li>
            <li><strong>The data hostage</strong> — exporting your own data is difficult, limited, or costs extra</li>
            <li><strong>The overlap stack</strong> — two or more tools do overlapping things and you can't consolidate</li>
          </ul>
          <p>If three or more of these apply to the same workflow, that workflow is a strong candidate for a custom-built solution.</p>

          <h2>Your 3-Phase Action Plan</h2>
          <ol>
            <li><strong>Week 1–2: Audit & Score.</strong> Run every tool through the scorecard. List scores, monthly cost, and primary use case. Identify Replace and Review tools.</li>
            <li><strong>Week 3–4: Map the Workflow.</strong> For each Replace-scored tool, document the full workflow — every step, every person, every workaround.</li>
            <li><strong>Month 2: Build or Buy.</strong> Decide whether a better SaaS option exists or whether the workflow justifies a custom build. Get a real estimate first.</li>
          </ol>

          <h2>What Happens After the Audit</h2>
          <p>The audit gives you clarity. The next step is a discovery call where we walk through your scored tools, look at the friction workflows, and determine whether a custom build is the right investment.</p>
          <Callout><strong>The discovery call is free and takes 30 minutes.</strong> No obligation. Just clarity on whether custom development makes sense for where your business is right now.</Callout>

          <PostCTA
            title="Ready to audit your stack?"
            desc="Book a free 30-minute discovery call and walk through your audit results with Shay. You'll leave with a clear action plan and a real build estimate if custom development makes sense."
            primaryHref="https://redagentsol.com/intake"
            primaryLabel="Book a free call →"
            secondaryHref="/resources/build-buy-hire"
            secondaryLabel="Read: Build vs Buy vs Hire →"
          />
        </PostBody>
      </PostLayout>
    </>
  )
}
