import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Building2,
  Clock3,
  Globe2,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { RouteBoard } from "@/components/route-board";
import { TrackingLookup } from "@/components/tracking-lookup";

const services = [
  {
    icon: Clock3,
    title: "Same-day delivery",
    text: "City-wide pickup and delivery with minute-by-minute progress and accountable handoffs.",
  },
  {
    icon: Boxes,
    title: "Business shipping",
    text: "Bulk imports, saved locations, consolidated billing, and delivery analytics for growing teams.",
  },
  {
    icon: Globe2,
    title: "Multi-city operations",
    text: "One operating view across regions, warehouses, vehicles, drivers, and local pricing zones.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker">From first mile to final proof</p>
          <h1>Delivery, dispatched with clarity.</h1>
          <p className="hero-lede">
            Book a shipment in minutes. Follow every turn. Give your team one reliable view of orders,
            drivers, and delivery performance.
          </p>
          <div className="hero-actions">
            <Link className="button button-large" href="/register">Ship a package</Link>
            <Link className="button button-ghost button-large" href="/services">Explore services</Link>
          </div>
          <TrackingLookup />
        </div>
        <div className="hero-visual">
          <div className="coverage-note">
            <MapPinned size={18} />
            <span><strong>12 cities</strong> on one dispatch network</span>
          </div>
          <RouteBoard />
          <div className="proof-note">
            <BadgeCheck size={18} />
            <span>Proof of delivery received</span>
            <strong>09:14</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service performance">
        <div className="shell trust-grid">
          <div><strong>98.7%</strong><span>on-time deliveries</span></div>
          <div><strong>2.4m</strong><span>packages coordinated</span></div>
          <div><strong>4.9/5</strong><span>customer rating</span></div>
          <div><strong>24/7</strong><span>operations support</span></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Built around the delivery</p>
            <h2>Fast when it matters. Controlled at every step.</h2>
          </div>
          <p>From one urgent parcel to thousands of weekly stops, Veloq keeps the same clear chain of custody.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href="/services">See how it works <ArrowUpRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-ink">
        <div className="shell operations-grid">
          <div className="operations-copy">
            <p className="kicker kicker-light">One shared operating picture</p>
            <h2>Customer promise meets dispatch control.</h2>
            <p>
              Live location, capacity, route progress, proof of delivery, and exceptions stay connected
              to the same shipment record.
            </p>
            <Link className="button button-light" href="/register">Open your workspace</Link>
          </div>
          <div className="control-list">
            <div><Route /><span><strong>Routes adapt</strong> when traffic or capacity changes.</span></div>
            <div><PackageCheck /><span><strong>Every handoff</strong> leaves a timestamped record.</span></div>
            <div><ShieldCheck /><span><strong>Roles stay clear</strong> from customer to super admin.</span></div>
            <div><Building2 /><span><strong>Every city</strong> follows the same operating standard.</span></div>
          </div>
        </div>
      </section>

      <section className="section shell process-section">
        <div className="section-heading">
          <p className="kicker">A predictable delivery flow</p>
          <h2>Three steps. Full visibility.</h2>
        </div>
        <ol className="process-list">
          <li><span>1</span><div><h3>Book</h3><p>Add addresses, package details, timing, and payment. See the price before you confirm.</p></div></li>
          <li><span>2</span><div><h3>Follow</h3><p>Receive a unique tracking number and live status updates from assignment to arrival.</p></div></li>
          <li><span>3</span><div><h3>Confirm</h3><p>Close the loop with receiver name, signature, photo evidence, and an automatic receipt.</p></div></li>
        </ol>
      </section>

      <section className="cta-band shell">
        <div>
          <p className="kicker">Ready for the next pickup?</p>
          <h2>Put your deliveries in motion.</h2>
        </div>
        <Link className="button button-dark button-large" href="/register">Create a shipment</Link>
      </section>
    </>
  );
}
