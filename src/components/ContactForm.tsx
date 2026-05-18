import { type SubmitEvent, useState } from 'react'

const FORM_NAME = 'contact'

const submitContactForm = (fields: Record<string, string>) =>
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ 'form-name': FORM_NAME, ...fields }).toString(),
  })

export const ContactForm = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !company) {
      setError('Please fill in name, email, and company.')
      return
    }

    setSubmitting(true)
    try {
      const res = await submitContactForm({
        name,
        email,
        company,
        message,
        'bot-field': String(data.get('bot-field') ?? ''),
      })

      const body = await res.text()
      const looksLikeSpaFallback = body.trimStart().startsWith('<!')

      if (!res.ok || looksLikeSpaFallback) {
        if (import.meta.env.DEV || looksLikeSpaFallback) {
          throw new Error('DEV')
        }
        throw new Error('Request failed')
      }

      form.reset()
      setModalOpen(true)
    } catch (err) {
      if (err instanceof Error && err.message === 'DEV') {
        setError(
          'The form works on your live Netlify site. For local testing, run `npx netlify-cli dev` instead of `npm run dev`.',
        )
      } else {
        setError('Something went wrong sending your message. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <form
        className="contact-form"
        id="contactForm"
        name={FORM_NAME}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="form-name" value={FORM_NAME} />

        <p className="contact-form__honeypot" aria-hidden="true">
          <label>
            Do not fill this in
            <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <div className="contact-form__field">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            aria-label="Name"
            autoComplete="name"
            required
          />
        </div>

        <div className="contact-form__field">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            aria-label="Email"
            autoComplete="email"
            required
          />
        </div>

        <div className="contact-form__field">
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            aria-label="Company"
            autoComplete="organization"
            required
          />
        </div>

        <div className="contact-form__field">
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Message"
            aria-label="Message"
          />
        </div>

        {error ? <p className="form-error">{error}</p> : null}

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'}
        </button>
      </form>

      <div
        className={`modal${modalOpen ? ' is-open' : ''}`}
        onMouseDown={(ev) => {
          if (ev.target === ev.currentTarget) setModalOpen(false)
        }}
      >
        <div className="modal-content">
          <button type="button" className="close" onClick={() => setModalOpen(false)}>
            &times;
          </button>
          <div className="modal_img" aria-hidden="true">
            ✓
          </div>
          <p>Thank you!</p>
        </div>
      </div>
    </>
  )
}
