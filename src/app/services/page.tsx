import type { Metadata } from "next";
import { Box, BriefcaseBusiness, CalendarClock, Clock3, Globe2, Warehouse } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Delivery services" };

const services = [
  [Clock3, "Same-day", "Urgent city deliveries collected and completed within the day, with live tracking throughout."],
  [CalendarClock, "Express & scheduled", "Choose next-day priority or reserve a precise pickup window for planned deliveries."],
  [Box, "Standard", "Dependable, cost-efficient delivery for everyday parcels and recurring routes."],
  [BriefcaseBusiness, "Business shipping", "Bulk orders, saved locations, consolidated invoices, team access, and performance reports."],
  [Warehouse, "Warehousing", "Connect stock, pick-and-pack activity, and final-mile dispatch across warehouse locations."],
  [Globe2, "Multi-city operations", "Control regional zones, currencies, fleets, warehouses, and local service levels centrally."],
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero kicker="Services" title="The right delivery mode for every promise." text="Choose speed, timing, and operating model without losing visibility between pickup and proof of delivery." />
      <section className="section shell">
        <div className="feature-list">
          {services.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={27} />
              <div><h2>{title}</h2><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-band shell">
        <div><p className="kicker">Not sure which service fits?</p><h2>Start with a clear, instant quote.</h2></div>
        <Link className="button button-dark" href="/pricing">Calculate a price</Link>
      </section>
    </>
  );
}
