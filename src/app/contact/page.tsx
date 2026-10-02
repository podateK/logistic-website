import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Tell us what needs to move." text="Our team can help with a delivery, a business rollout, or a technical integration." />
      <section className="section shell contact-grid">
        <div className="contact-details">
          <h2>Reach the right team</h2>
          <p>Delivery support is available around the clock. Sales and integration requests receive a reply within one business day.</p>
          <a href="tel:+15550147000"><Phone size={20} /><span><small>Operations hotline</small>+1 555 014 7000</span></a>
          <a href="mailto:dispatch@veloq.example"><Mail size={20} /><span><small>Email</small>dispatch@veloq.example</span></a>
          <div><MapPin size={20} /><span><small>Operations center</small>28 Harbor Line, Brooklyn, NY</span></div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
