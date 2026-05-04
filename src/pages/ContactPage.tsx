import { type FormEvent, useState } from 'react'
import { Footer } from '../components/Footer'

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/tbdimitrova.bg@gmail.com'

export function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()

    if (!name || !email || !company) {
      setError('Please fill in name, email, and company.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (!res.ok) {
        throw new Error('Request failed')
      }

      form.reset()
      setModalOpen(true)
    } catch {
      setError('Something went wrong sending your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main id="contact">
      <div className="container">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading green">Get in touch with me</h2>

        <div className="contacts">
          <form id="contactForm" onSubmit={onSubmit}>
            <input type="hidden" name="_subject" value="Portfolio contact form" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for your message — I will get back to you soon."
            />

            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" autoComplete="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete="email" />

            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" autoComplete="organization" />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={30} rows={5} />

            {error ? <p className="form-error">{error}</p> : null}

            <button type="submit" className="btn btn-dark" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send'}
            </button>
          </form>

          <div className="icons">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/theodora.dimitrova.56"
              >
                <i className="fab fa-facebook-f fa-2x" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/teodora-dimitrova-1b92b7107/"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/TheodoraDimitrova">
                <i className="fab fa-github fa-2x" />
              </a>
            </div>
            <div>
              <span>
                <i className="fa-solid fa-phone fa-2x" />
              </span>
              <span className="green"> +359 879 45 20 07</span>
            </div>
            <div>
              <span>
                <i className="fa-brands fa-skype fa-2x" />
              </span>
              <span className="green"> teddybear901</span>
            </div>
            <div>
              <span>
                <i className="fa-solid fa-at fa-2x" />
              </span>
              <span className="green"> tbdimitrova.bg@gmail.com </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="myModal"
        className="modal"
        style={{ visibility: modalOpen ? 'visible' : 'hidden' }}
        onMouseDown={(ev) => {
          if (ev.target === ev.currentTarget) setModalOpen(false)
        }}
      >
        <div className="modal-content">
          <button type="button" className="close" onClick={() => setModalOpen(false)}>
            &times;
          </button>
          <div className="modal_img">
            <img src="/images/success_tick_icon.png" alt="success_icon" />
          </div>
          <p>Thank you!</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
