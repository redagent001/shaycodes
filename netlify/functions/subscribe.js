// netlify/functions/subscribe.js
// Required env vars (set in Netlify dashboard → Site settings → Environment variables):
//   MAILERLITE_API_KEY   — MailerLite API token (v3)
//   MAILERLITE_GROUP_ID  — optional: group ID to add subscribers to

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  let body
  try { body = JSON.parse(event.body) }
  catch { return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) } }

  const { email, name, source } = body

  if (!email || !email.includes('@')) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Valid email required' }) }
  }

  const apiKey  = process.env.MAILERLITE_API_KEY
  const groupId = process.env.MAILERLITE_GROUP_ID

  if (!apiKey) {
    console.error('MAILERLITE_API_KEY not set')
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server config error' }) }
  }

  const payload = {
    email: email.toLowerCase().trim(),
    fields: { name: name || '' },
    ...(groupId ? { groups: [groupId] } : {}),
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('MailerLite error status:', response.status)
      console.error('MailerLite error body:', JSON.stringify(data))
      return { statusCode: response.status, headers, body: JSON.stringify({ error: data?.message || 'MailerLite error' }) }
    }

    console.log(`Subscriber added: ${email} (source: ${source || 'unknown'})`)
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) }

  } catch (err) {
    console.error('Function error:', err)
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal server error' }) }
  }
}
