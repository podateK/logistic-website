import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { QuoteCalculator } from "@/components/quote-calculator";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PageHero kicker="Transparent pricing" title="A fair price, built from the route." text="Every quote combines distance, package weight, delivery speed, and service zone. No mystery handling fees." />
      <section className="section shell quote-section">
        <div className="section-heading"><h2>Estimate your delivery</h2><p>Move the controls to see how each factor changes the estimate.</p></div>
        <QuoteCalculator />
      </section>
      <section className="section soft-section">
        <div className="shell price-factors">
          <article><span>Distance</span><h3>Pay for the route used</h3><p>Mileage and city-zone costs are calculated from pickup to delivery.</p></article>
          <article><span>Weight</span><h3>Capacity priced clearly</h3><p>Heavier packages use more vehicle capacity and are priced by kilogram.</p></article>
          <article><span>Timing</span><h3>Choose your urgency</h3><p>Standard, express, same-day, or scheduled service changes the rate.</p></article>
        </div>
      </section>
      <section className="cta-band shell"><div><p className="kicker">Need contract rates?</p><h2>Let’s price your delivery volume.</h2></div><Link className="button button-dark" href="/contact">Talk to sales</Link></section>
    </>
  );
}
