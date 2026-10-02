"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <strong>Message received.</strong>
        <p>Our logistics team will reply within one business day.</p>
        <button className="text-button" type="button" onClick={() => setSent(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>Full name<input required name="name" autoComplete="name" /></label>
        <label>Work email<input required name="email" type="email" autoComplete="email" /></label>
      </div>
      <div className="form-row">
        <label>Phone number<input name="phone" type="tel" autoComplete="tel" /></label>
        <label>What can we help with?
          <select name="topic" defaultValue="shipping">
            <option value="shipping">Shipping account</option>
            <option value="tracking">Delivery support</option>
            <option value="enterprise">Enterprise operations</option>
            <option value="integration">API integration</option>
          </select>
        </label>
      </div>
      <label>Message<textarea required name="message" rows={6} placeholder="Tell us about your delivery needs." /></label>
      <button className="button" type="submit">Send message</button>
    </form>
  );
}
