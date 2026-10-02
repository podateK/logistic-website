import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="About Veloq" title="Logistics should feel accountable, not opaque." text="We built Veloq around a simple belief: every person involved in a delivery deserves the same clear, timely truth." />
      <section className="section shell story-grid">
        <div><p className="kicker">Why we exist</p><h2>One record from booking to doorstep.</h2></div>
        <div className="long-copy">
          <p>Delivery gets complicated when customer support, dispatch, drivers, warehouses, and finance each work from a different version of events. Veloq connects those moments into one chain of custody.</p>
          <p>That means customers can plan with confidence, drivers know exactly what comes next, dispatchers can act before delays spread, and operators can measure what is actually happening.</p>
        </div>
      </section>
      <section className="section section-ink">
        <div className="shell values-grid">
          <article><strong>Visible</strong><p>Progress, exceptions, prices, and responsibility stay easy to understand.</p></article>
          <article><strong>Practical</strong><p>The platform serves the people moving packages, not dashboards for their own sake.</p></article>
          <article><strong>Accountable</strong><p>Every status change and handoff becomes part of a durable delivery history.</p></article>
        </div>
      </section>
    </>
  );
}
