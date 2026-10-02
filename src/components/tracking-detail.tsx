"use client";

import { Bell, Camera, Check, CheckCircle2, Clock3, Mail, MapPin, MessageSquareText, Navigation, PackageCheck, Truck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TrackingLookup } from "./tracking-lookup";

const events = [
  { status: "In transit", detail: "Driver is 8.4 km from the delivery address", time: "09:52", active: true, icon: Truck },
  { status: "Picked up", detail: "Package collected from 148 Kent Avenue, Brooklyn", time: "08:42", active: false, icon: PackageCheck },
  { status: "Driver assigned", detail: "Alex Morgan · Van 18", time: "08:17", active: false, icon: Navigation },
  { status: "Order confirmed", detail: "Payment approved and tracking number created", time: "07:58", active: false, icon: CheckCircle2 },
];

export function TrackingDetail({ trackingId }: { trackingId: string }) {
  const [notifications, setNotifications] = useState({ email: true, sms: true, push: false });

  return (
    <>
      <section className="tracking-head">
        <div className="shell tracking-head-grid">
          <div><p className="kicker kicker-light">Tracking {trackingId}</p><h1>Your delivery is moving.</h1><p>Estimated arrival today between 10:20 and 10:35.</p></div>
          <TrackingLookup compact />
        </div>
      </section>
      <section className="tracking-main shell">
        <div className="tracking-map-card">
          <div className="map-canvas" role="img" aria-label="Map showing shipment route from Brooklyn to Queens">
            <span className="map-water water-one" /><span className="map-water water-two" />
            <i className="road road-one" /><i className="road road-two" /><i className="road road-three" /><i className="road road-four" />
            <svg className="map-route" viewBox="0 0 700 320" preserveAspectRatio="none" aria-hidden="true"><path d="M80 245 C170 230 190 102 308 136 S485 244 624 84" /><circle cx="80" cy="245" r="8" /><circle cx="624" cy="84" r="9" /></svg>
            <div className="map-truck"><Truck size={19} /><span>Alex · Van 18</span></div>
            <span className="map-label brooklyn">Brooklyn</span><span className="map-label queens">Queens</span>
            <div className="map-live"><i /> Live · updated now</div>
          </div>
          <div className="map-route-summary"><div><span>Pickup</span><strong>148 Kent Avenue, Brooklyn</strong><small>Collected 08:42</small></div><div className="map-eta"><Clock3 size={19} /><strong>34 min</strong><span>estimated</span></div><div><span>Delivery</span><strong>31-00 47th Avenue, Queens</strong><small>ETA 10:26</small></div></div>
        </div>

        <aside className="tracking-side">
          <section className="tracking-card"><div className="tracking-card-heading"><div><span>Movement log</span><h2>Tracking history</h2></div><span className="status-pill transit">In transit</span></div><ol className="event-timeline">{events.map(({ status, detail, time, active, icon: Icon }) => <li key={status} data-active={active || undefined}><i><Icon size={15} /></i><div><strong>{status}</strong><span>{detail}</span></div><time>{time}</time></li>)}</ol></section>
          <section className="tracking-card notification-card"><div className="tracking-card-heading"><div><span>Stay informed</span><h2>Notifications</h2></div><Bell size={18} /></div><p>Choose how you want to receive status updates.</p>{([
            ["email", Mail, "Email"], ["sms", MessageSquareText, "SMS"], ["push", Bell, "Push"]
          ] as const).map(([key, Icon, label]) => <label key={key}><Icon size={17} /><span>{label}</span><input type="checkbox" checked={notifications[key]} onChange={() => setNotifications((state) => ({ ...state, [key]: !state[key] }))} /><i /></label>)}</section>
        </aside>
      </section>
      <section className="tracking-bottom shell">
        <article><MapPin size={22} /><div><span>Delivery address</span><strong>31-00 47th Avenue, Queens, NY 11101</strong><p>Loading entrance on 47th Avenue.</p></div></article>
        <article><Camera size={22} /><div><span>Proof of delivery</span><strong>Captured at the doorstep</strong><p>Receiver name, signature, photo, GPS, and timestamp will appear after delivery.</p></div></article>
        <article><Check size={22} /><div><span>Need help?</span><strong>Operations support is online</strong><p>Reference {trackingId} when contacting us.</p><Link href="/contact">Contact support</Link></div></article>
      </section>
    </>
  );
}
