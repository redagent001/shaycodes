import PostLayout, { PostCover, PostHero, PostBody, Callout, FAQ, PostCTA } from '../components/PostLayout.jsx'

export default function BlogFlowDesigner() {
  return (
    <>
      <PostCover gradient="linear-gradient(135deg,#0a1a2e 0%,#0d4d6e 50%,#0d9e87 100%)" icon="🔁" />
      <PostLayout>
        <PostHero
          category="ServiceNow"
          title="Flow Designer Patterns I Use Every Day"
          meta={['Shay', '·', 'May 2026', '·', '5 min read', '·', 'ServiceNow · Automation']}
          desc="A practical look at repeatable ServiceNow Flow Designer patterns — approvals, notifications, task creation, guardrails, and scheduled checks that actually support business processes."
          tags={['ServiceNow','Flow Designer','Automation','IntegrationHub']}
        />
        <PostBody>
          <p>Flow Designer is one of the most useful tools in ServiceNow because it helps turn business rules into automated actions without always needing heavy custom code.</p>
          <p>But the real value is not just knowing how to create a flow. The real value is knowing which <strong>pattern</strong> to use.</p>
          <Callout>A pattern is a repeatable way to solve a common problem. Once you recognize the pattern, you can build faster and cleaner because you are not starting from scratch every time.</Callout>
          <h2>The Trigger-Condition-Action Pattern</h2>
          <p>This is the basic structure of many flows. Something happens. A condition checks whether the flow should continue. An action happens if the condition is true.</p>
          <h2>The Approval Pattern</h2>
          <p>Useful when a request should not move forward until someone gives permission. A complete approval pattern handles the after-effect too — update the state, notify the requester, escalate if ignored.</p>
          <Callout variant="orange"><strong>The mistake most people make:</strong> Only thinking about the approval itself and forgetting the after-effects.</Callout>
          <h2>The Task Creation Pattern</h2>
          <p>When one request automatically creates downstream work, assigns it to the right group, sets the due date, and connects it back to the parent record — the process can't get lost.</p>
          <h2>The Guardrail Pattern</h2>
          <p>A guardrail prevents a flow from running when it should not. Check whether a field is empty, whether the state is already closed, whether the record has already been processed.</p>
          <ul>
            <li>What starts it?</li>
            <li>Who does it affect?</li>
            <li>What should happen next?</li>
            <li>What should NOT happen?</li>
            <li>How do we prevent duplicates?</li>
            <li>How will someone know the flow worked?</li>
          </ul>
          <hr />
          <FAQ items={[
            { q: 'What are common ServiceNow Flow Designer patterns?', a: 'Common patterns include trigger-condition-action flows, approval flows, task creation flows, notification flows, scheduled checks, and guardrail logic.' },
            { q: 'Why are guardrails important in Flow Designer?', a: 'Guardrails prevent flows from running at the wrong time, creating duplicate records, sending repeated notifications, or updating data incorrectly.' },
            { q: 'When should I use a scheduled flow in ServiceNow?', a: 'Use a scheduled flow when records need to be checked on a recurring basis — overdue tasks, pending approvals, aging tickets, or follow-up reminders.' },
            { q: 'Is Flow Designer better than Business Rules?', a: 'Flow Designer is better for readable business process automation. Business Rules are better for complex server-side logic that needs tighter control.' },
          ]} />
          <PostCTA
            title="Building smarter systems starts with better structure."
            desc="Explore more development notes, automation ideas, and app-building lessons — or let's build something together."
            primaryHref="https://redagentsol.com/intake"
            primaryLabel="Book a free discovery call →"
          />
        </PostBody>
      </PostLayout>
    </>
  )
}
