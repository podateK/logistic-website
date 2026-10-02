import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Frequently asked questions" };

const questions = [
  ["How do I track a shipment?", "Enter the Veloq tracking number on the Tracking page. The demo number VQ-2847-1903 opens a complete example with status history."],
  ["Which delivery speeds are available?", "Veloq supports same-day, express, standard, and scheduled delivery. Availability and ETA depend on the selected service zone."],
  ["How is my price calculated?", "The quote combines route distance, package weight, service speed, and the pickup/delivery pricing zones. You see the estimate before confirming."],
  ["Can my business upload many orders?", "Yes. Business accounts can upload CSV files, reuse saved locations, manage team access, and receive consolidated invoices."],
  ["What counts as proof of delivery?", "A completed delivery can include the receiver name, signature, photo evidence, GPS position, and a timestamped status event."],
  ["Which payments are supported?", "The platform is designed for cards, bank transfers, wallet payments, and cash on delivery through providers such as Stripe, Paystack, or Flutterwave."],
];

export default function FaqPage() {
  return (
    <>
      <PageHero kicker="FAQ" title="Useful answers before the next pickup." text="Get quick guidance on booking, tracking, pricing, business shipping, and proof of delivery." />
      <section className="section shell faq-list">
        {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
      <section className="cta-band shell"><div><p className="kicker">Still need help?</p><h2>Talk with a logistics specialist.</h2></div><Link className="button button-dark" href="/contact">Contact us</Link></section>
    </>
  );
}
