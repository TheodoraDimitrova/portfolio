import { type SubmitEvent, useState } from "react";
import { trackEvent } from "@/utils/analytics";
import styles from "./ContactForm.module.scss";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export const ContactForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError("Contact form is not configured yet.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !company) {
      setError("Please fill in name, email, and company.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Portfolio contact form",
          from_name: name,
          email,
          message: `Company: ${company}${message ? `\n\n${message}` : ""}`,
        }),
      });

      const result = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !result.success) {
        throw new Error(result.message ?? "Request failed");
      }

      form.reset();
      setModalOpen(true);
      trackEvent("contact_form_submit");
    } catch {
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const modalClass = modalOpen
    ? `${styles.modal} ${styles.modalOpen}`
    : styles.modal;

  return (
    <>
      <form
        className={styles.contactForm}
        id="contactForm"
        onSubmit={onSubmit}
      >
        <div className={styles.field}>
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

        <div className={styles.field}>
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

        <div className={styles.field}>
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

        <div className={styles.field}>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Message"
            aria-label="Message"
          />
        </div>

        {error ? <p className={styles.formError}>{error}</p> : null}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send message"}
        </button>
      </form>

      <div
        className={modalClass}
        onMouseDown={(ev) => {
          if (ev.target === ev.currentTarget) setModalOpen(false);
        }}
      >
        <div className={styles.modalContent}>
          <button
            type="button"
            className={styles.modalClose}
            onClick={() => setModalOpen(false)}
          >
            &times;
          </button>
          <div className={styles.modalIcon} aria-hidden="true">
            ✓
          </div>
          <p>Thank you!</p>
        </div>
      </div>
    </>
  );
};
