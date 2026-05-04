import { useState } from 'react'

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement }) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    try {
      const response = await fetch('https://formsubmit.co/ajax/fc4b045c21c7a42a328a261e6deea83f', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setIsModalOpen(true)
      form.reset()
    } catch (error) {
      console.error(error)
      alert('Form submit failed. Please try again in a minute.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="contact" className="contact-page">
      <div className="container">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Get in touch with me</h2>

        <div className="contacts">
          <form onSubmit={onSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value="Thank you :-)" />
            <input type="hidden" name="_template" value="table" />

            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />

            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" required />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} required></textarea>

            <button type="submit" className="btn btn-dark" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>

          <div className="icons">
              <div>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
                  <i className="fab fa-facebook-f fa-2x"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/teodora-dimitrova-1b92b7107/"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/TheodoraDimitrova">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-phone fa-2x"></i>
                </span>
                <span className="green">+359 879 45 20 07</span>
              </div>
              <div>
                <span>
                  <i className="fa-brands fa-skype fa-2x"></i>
                </span>
                <span className="green">teddybear901</span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-at fa-2x"></i>
                </span>
                <span className="green">tbdimitrova.bg@gmail.com</span>
              </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)} style={{ visibility: 'visible' }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="modal_img">
              <img src="/images/success_tick_icon.png" alt="Success" />
            </div>
            <p>Thank you!</p>
          </div>
        </div>
      )}
    </main>
  )
}

export default ContactPage
