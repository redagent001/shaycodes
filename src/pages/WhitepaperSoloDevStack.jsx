import { useState } from 'react'
import PostLayout, { PostCover, PostHero, PostBody, Callout, FAQ, PostCTA } from '../components/PostLayout.jsx'
import styles from './WhitepaperAppAudit.module.css'

function Gate({ onUnlock }) {
  const [name, setName]     = useState('')
  const [email, setEmail]   = useState('')
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
        body: JSON.stringify({ email, name, source: 'whitepaper-solo-dev-stack' }),
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
      onUnlock()
    }
  }

  return (
    <div className={styles.gateOverlay}>
      <div className={styles.gateBox}>
        <span className={styles.gateIcon}>🚀</span>
        <h2>The Solo Dev Stack</h2>
        <p>Get instant access to the complete guide — project setup, Firebase config, Netlify deployment, serverless functions, and the full scaffold checklist.</p>
        <div className={styles.perks}>
          {[
            'Full project scaffold checklist',
            'Firebase Auth + Firestore setup guide',
            'Netlify 3-environment deployment config',
            'Serverless function patterns',
            'Free — no credit card needed',
          ].map(p => (
            <div key={p} className={styles.perk}>
              <span className={styles.perkIcon}>✓</span>
              {p}
            </div>
          ))}
        </div>
        <div className={styles.gateForm}>
          <input type="text"  placeholder="Your first name"    value={name}  onChange={e => setName(e.target.value)}  />
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

export default function WhitepaperSoloDevStack() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <>
      {!unlocked && <Gate onUnlock={() => setUnlocked(true)} />}
      <PostCover gradient="linear-gradient(135deg,#0d1a2e 0%,#0d3d6e 50%,#0d9e87 100%)" icon="🚀" />
      <PostLayout>
        <PostHero
          category="Developer Guide · Gated Whitepaper"
          title="The Solo Dev Stack."
          meta={['ShayCodes', '·', 'Shay · Developer & Builder', '·', '2026 Edition', '·', '~20 min read']}
          desc="A complete guide to building, deploying, and maintaining client apps with Vite, Firebase, and Netlify — from zero to production. Everything I use on every project."
          tags={['Vite','Firebase','Netlify','Firestore','Serverless','Git','Solo Dev']}
        />
        <PostBody>

          <h2>Why This Stack</h2>
          <p>There are a hundred ways to build a web app in 2026. Most of them will slow you down. After building dozens of client projects, personal tools, and production apps solo, I keep coming back to the same three tools — <strong>Vite, Firebase, and Netlify</strong>.</p>
          <p>Here's why they work together so well:</p>
          <ul>
            <li><strong>Vite</strong> — instant dev server, lightning fast builds, no config overhead. You start coding in under 2 minutes.</li>
            <li><strong>Firebase</strong> — Auth, Firestore, Storage, and Hosting all in one SDK. No separate backend server to manage or pay for at scale.</li>
            <li><strong>Netlify</strong> — push to GitHub and it's live. Serverless functions, form handling, environment variables, preview deploys — all built in.</li>
          </ul>
          <Callout>This stack lets a solo developer move at team speed. You own the infra, you own the data, and you can go from idea to deployed app in a weekend.</Callout>

          <h2>Project Setup</h2>
          <p>Every project I start follows the same scaffold. This consistency means I never waste time figuring out folder structure — I just build.</p>
          <h3>1. Vite Init</h3>
          <ul>
            <li>Run <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>npm create vite@latest my-app -- --template react</code></li>
            <li>Remove boilerplate — delete <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>App.css</code>, clear <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>App.jsx</code></li>
            <li>Create folder structure: <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/components</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/pages</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/hooks</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/styles</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/utils</code></li>
            <li>Set up CSS tokens in <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/styles/tokens.css</code> before writing a single component</li>
          </ul>
          <h3>2. Git + GitHub</h3>
          <ul>
            <li>Run <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>git init</code> immediately — before any code</li>
            <li>Create <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>.gitignore</code> — always include <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>.env</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>node_modules</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>dist</code></li>
            <li>Use <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>gh repo create</code> to create the GitHub repo and push in one command</li>
            <li>Commit message convention: <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>feat:</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>fix:</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>chore:</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>docs:</code></li>
          </ul>
          <h3>3. Environment Variables</h3>
          <ul>
            <li>Create <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>.env</code> at root for local dev — never commit it</li>
            <li>All Firebase config goes in env vars — never hardcode keys in source</li>
            <li>Add the same vars to Netlify dashboard under Site settings → Environment variables</li>
            <li>Prefix all Vite env vars with <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>VITE_</code> so they're accessible in the browser</li>
          </ul>

          <h2>Firebase Setup</h2>
          <p>Firebase is the backbone of every app in this stack. Getting it set up right from the start saves hours of debugging later.</p>
          <h3>Authentication</h3>
          <ul>
            <li>Enable Email/Password auth in Firebase console as the default</li>
            <li>Add Google OAuth as a second option — most clients expect it</li>
            <li>Create a <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>src/hooks/useAuth.js</code> hook that wraps <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>onAuthStateChanged</code> — use this everywhere</li>
            <li>Wrap your router in an <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>AuthProvider</code> context so auth state is globally available</li>
          </ul>
          <h3>Firestore Structure</h3>
          <p>Plan your collections before writing any queries. My default starting structure for client apps:</p>
          <ul>
            <li><code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>/users/{'{userId}'}</code> — profile, role, businessId, createdAt</li>
            <li><code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>/businesses/{'{businessId}'}</code> — name, owner, plan, settings</li>
            <li><code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>/records/{'{recordId}'}</code> — businessId, createdBy, category, status, data</li>
          </ul>
          <h3>Security Rules</h3>
          <ul>
            <li>Default to <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>deny all</code> and open up explicitly — never start with open rules</li>
            <li>Always check <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>request.auth != null</code> before allowing any read or write</li>
            <li>Use <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>request.auth.uid == resource.data.userId</code> to lock records to their owner</li>
            <li>Test rules in the Firebase console Rules Playground before deploying</li>
          </ul>
          <Callout variant="orange"><strong>Most Firebase security issues come from rules that are too open.</strong> Set up proper rules on day one — retrofitting them after data exists is painful.</Callout>

          <h2>Netlify Deployment</h2>
          <p>Netlify turns a GitHub push into a live URL. Here's how I configure it for every project.</p>
          <h3>netlify.toml</h3>
          <p>Every project gets a <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>netlify.toml</code> at the root. The minimum config:</p>
          <ul>
            <li><code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>build.command = "npm run build"</code></li>
            <li><code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>build.publish = "dist"</code></li>
            <li>SPA redirect rule: <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>from = "/*" to = "/index.html" status = 200</code> — without this, every page refresh on a React Router route returns a 404</li>
          </ul>
          <h3>3 Environments</h3>
          <p>I run every client project across three Netlify sites connected to the same GitHub repo:</p>
          <ul>
            <li><strong>Production</strong> — deploys from <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>main</code> branch. Real Firebase project. Client-facing.</li>
            <li><strong>Development</strong> — deploys from <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>dev</code> branch. Separate Firebase project with test data.</li>
            <li><strong>Test/Staging</strong> — deploys from <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>staging</code> branch. Used for client review before pushing to prod.</li>
          </ul>
          <Callout>Three environments sounds like overhead but it saves you from the worst mistake in client work: pushing broken code to production while a client is using the app.</Callout>

          <h2>The Development Workflow</h2>
          <p>A consistent workflow means you never wonder what state your code is in.</p>
          <ul>
            <li>Always work on a feature branch — never commit directly to <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>main</code></li>
            <li>Branch naming: <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>feat/feature-name</code>, <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>fix/bug-description</code></li>
            <li>Merge feature → dev → staging → main in order</li>
            <li>Use Netlify deploy previews to share work-in-progress with clients — every branch gets its own URL automatically</li>
            <li>Keep commits small and specific — one feature or fix per commit</li>
          </ul>

          <h2>Serverless Functions</h2>
          <p>Netlify Functions let you run server-side code without managing a server. I use them for anything that shouldn't happen in the browser — API calls with secret keys, email sending, third-party integrations.</p>
          <h3>When to use them</h3>
          <ul>
            <li>Calling a third-party API that requires a secret key (MailerLite, Stripe, SendGrid)</li>
            <li>Sending emails or notifications on form submission</li>
            <li>Webhook receivers from external services</li>
            <li>Any operation where you don't want the API key visible in client-side code</li>
          </ul>
          <h3>How to write them</h3>
          <ul>
            <li>Create <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>netlify/functions/your-function.js</code> at the project root</li>
            <li>Export a <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>handler</code> async function that receives <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>event</code> and <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>context</code></li>
            <li>Always return <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>{'{statusCode, headers, body}'}</code> — body must be a string</li>
            <li>Access env vars via <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>process.env.YOUR_VAR</code> — they're set in Netlify dashboard</li>
            <li>Call from the frontend at <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>/.netlify/functions/your-function</code></li>
          </ul>

          <h2>Common Patterns</h2>
          <h3>Protected Routes</h3>
          <p>Wrap any route that requires auth in a <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>ProtectedRoute</code> component that checks <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>useAuth()</code> and redirects to login if the user isn't authenticated. Never rely on hiding UI elements alone — always protect at the route level.</p>
          <h3>Form Handling</h3>
          <ul>
            <li>For public forms (contact, lead capture) — use Netlify Forms, zero backend needed</li>
            <li>For authenticated app forms — write directly to Firestore from the client</li>
            <li>For forms that trigger side effects (emails, notifications) — POST to a Netlify Function</li>
          </ul>
          <h3>Real-Time Data</h3>
          <p>Use Firestore's <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>onSnapshot</code> listener instead of <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>getDocs</code> whenever the UI needs to stay in sync with the database. Wrap it in a <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>useEffect</code> and always return the unsubscribe function to prevent memory leaks.</p>

          <h2>Lessons from Real Projects</h2>
          <p>These are things I learned the hard way — so you don't have to.</p>
          <ul>
            <li><strong>BillWise</strong> — unescaped apostrophes in JS strings crash the entire app silently. Run Node.js syntax checking early on every file.</li>
            <li><strong>MediaHub</strong> — mock data architecture matters. Building with realistic data shapes from day one means the switch to real data is seamless.</li>
            <li><strong>BrandNameSites</strong> — every form submission should write a structured Firestore record, even if you're not using it yet. That data becomes your CRM.</li>
            <li><strong>All projects</strong> — set up your three environments before you write any code. Retrofitting them after the project is built is painful and risky.</li>
            <li><strong>All projects</strong> — document your environment variables in a <code style={{fontFamily:'var(--mono)',color:'var(--teal)',fontSize:'14px'}}>.env.example</code> file. Future you will thank present you.</li>
          </ul>

          <h2>The Full Scaffold Checklist</h2>
          <p>This is the exact checklist I run through at the start of every new project. Zero to deployed in order:</p>
          <ul>
            <li>npm create vite@latest → select React template</li>
            <li>Delete boilerplate, set up folder structure</li>
            <li>Create tokens.css with design system variables</li>
            <li>git init → create .gitignore → initial commit</li>
            <li>gh repo create → push to GitHub</li>
            <li>Create Firebase project → enable Auth + Firestore</li>
            <li>Create .env with Firebase config vars</li>
            <li>Create src/firebase.js — initialize app and export db, auth</li>
            <li>Create netlify.toml with build config and SPA redirect</li>
            <li>Connect GitHub repo to Netlify → first deploy</li>
            <li>Add env vars to Netlify dashboard</li>
            <li>Create dev and staging branches → connect to separate Netlify sites</li>
            <li>Create separate Firebase projects for dev and staging</li>
            <li>Set up Firestore security rules — deny all by default</li>
            <li>Create useAuth hook → wrap App in AuthProvider</li>
            <li>Build ProtectedRoute component</li>
            <li>Now start building features</li>
          </ul>
          <Callout><strong>The checklist takes about 45 minutes.</strong> Every minute you spend on it saves hours of debugging environment issues, auth problems, and deployment failures later.</Callout>

          <hr />

          <FAQ items={[
            { q: 'Why Vite over Create React App?', a: 'Vite is significantly faster — instant dev server start, hot module replacement in milliseconds. Create React App is slow and largely unmaintained. Vite is the standard for new React projects.' },
            { q: 'Why Firebase over a custom backend?', a: 'Firebase gives you Auth, a real-time database, file storage, and hosting in one SDK with no server to manage. For solo developers and small teams building client apps, that tradeoff is almost always worth it.' },
            { q: 'Do I need all three environments?', a: 'For personal projects, no. For anything client-facing or that handles real user data, yes. The cost is near zero — Netlify and Firebase both have generous free tiers.' },
            { q: 'When should I use Supabase instead of Firebase?', a: 'Supabase is a strong choice if you need a relational database or SQL queries. Firebase Firestore is a document database — better for flexible, nested data structures. Both work well with this stack.' },
            { q: 'How do I handle secrets in local development?', a: 'Use a .env file at the root, prefix all Vite vars with VITE_, and never commit the file. Add the same vars to Netlify for deployed environments. Use .env.example to document what vars are needed.' },
          ]} />

          <PostCTA
            title="Ready to build faster and ship with confidence?"
            desc="Book a free discovery call and let's talk about your next project — or what's blocking the one you're already building."
            primaryHref="https://redagentsol.com/intake"
            primaryLabel="Book a free call →"
            secondaryHref="/resources/app-audit"
            secondaryLabel="Read: The Small Business App Audit →"
          />
        </PostBody>
      </PostLayout>
    </>
  )
}
