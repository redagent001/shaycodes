import PostLayout, { PostCover, PostHero, PostBody, Callout, FAQ, PostCTA } from '../components/PostLayout.jsx'

export default function BlogFirestore() {
  return (
    <>
      <PostCover gradient="linear-gradient(135deg,#0d1a0a 0%,#1a4a0d 40%,#0d9e87 100%)" icon="🔥" />
      <PostLayout>
        <PostHero
          category="Firebase · Backend"
          title="Firestore Data Modeling for Small Business Apps"
          meta={['Shay', '·', 'Apr 2026', '·', '4 min read', '·', 'Firebase · Backend']}
          desc="How to structure Firestore data for small business apps — users, businesses, records, categories, permissions, and reporting — so the app can actually scale."
          tags={['Firebase','Firestore','Backend','Data Modeling','Small Business']}
        />
        <PostBody>
          <p>Firestore is flexible, fast, and beginner-friendly — but that flexibility becomes a problem if the data model is not planned early.</p>
          <p>When building small business apps, the database structure matters because <strong>every feature depends on it</strong>. Dashboards depend on it. Reports depend on it. User permissions depend on it.</p>
          <h2>A Starting Structure That Works</h2>
          <ul>
            <li><strong>/users/{'{userId}'}</strong> — name, email, role, businessId, status</li>
            <li><strong>/businesses/{'{businessId}'}</strong> — name, owner, plan, settings</li>
            <li><strong>/records/{'{recordId}'}</strong> — businessId, createdBy, category, status, amount</li>
            <li><strong>/categories/{'{categoryId}'}</strong> — businessId, name, type, color</li>
            <li><strong>/reports/{'{reportId}'}</strong> — businessId, period, totals</li>
          </ul>
          <h2>Why Business ID Matters on Every Record</h2>
          <Callout>An expense tracker should not only ask "who entered this expense?" — it should know <strong>"which business does this expense belong to?"</strong> That distinction matters when you add teams, CPA access, or multiple locations.</Callout>
          <h2>Keep Categories Controlled</h2>
          <p>Categories should be their own structure instead of random text. When categories are uncontrolled, one user types "Meals," another types "Food," another types "Lunch" — and reporting breaks.</p>
          <h2>Plan for Roles from Day One</h2>
          <ul>
            <li><strong>Owner</strong> — full access to all data, settings, billing</li>
            <li><strong>Team Member</strong> — can enter records, no financial reports</li>
            <li><strong>CPA</strong> — read-only access to reports</li>
            <li><strong>Admin</strong> — account-level control and audit access</li>
          </ul>
          <h2>My Rule for Every Model</h2>
          <Callout>Model around how the app will be used — not how it looks on screen. If the dashboard needs monthly totals, store dates consistently. If users need category filters, control the categories.</Callout>
          <hr />
          <FAQ items={[
            { q: 'How should I structure Firestore for a small business app?', a: 'A solid structure includes users, businesses, records, categories, reports, and settings — designed around ownership, roles, and how data will be filtered.' },
            { q: 'Should I use subcollections in Firestore?', a: 'Use subcollections when data clearly belongs under a parent document. Use top-level collections when you need broader querying across many records.' },
            { q: 'Why should categories be controlled in a Firestore app?', a: 'Controlled categories keep data consistent, which makes dashboards, filters, and reports accurate.' },
            { q: 'What fields should small business records include?', a: 'businessId, createdBy, createdAt, category, status, amount, notes, files, and lastUpdatedAt.' },
          ]} />
          <PostCTA
            title="Building smarter systems starts with better structure."
            desc="Explore more development notes, automation ideas, and app-building lessons — or let's build something together."
            primaryHref="https://redagentsol.com/intake"
            primaryLabel="Book a free discovery call →"
            secondaryHref="/blog/full-stack-apps"
            secondaryLabel="Read: Build Full-Stack Apps Solo"
          />
        </PostBody>
      </PostLayout>
    </>
  )
}
