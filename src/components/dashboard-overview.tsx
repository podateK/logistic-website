"use client";

import { ArrowUpRight, CheckCircle2, Clock3, Package, Truck } from "lucide-react";
import Link from "next/link";
import { useRole } from "./dashboard-shell";

const roleDescriptions = {
  Customer: "Book deliveries, follow active shipments, and manage your account.",
  Dispatcher: "Coordinate drivers, routes, assignments, and delivery exceptions.",
  Driver: "Review assigned stops and capture proof of delivery.",
  Admin: "Monitor operations, fleet, warehouses, performance, and billing.",
  "Super Admin": "Control roles, organizations, integrations, and platform policy.",
};

export function DashboardOverview() {
  const { role } = useRole();
  return (
    <>
      <div className="dashboard-title"><div><span>Friday, October 2</span><h1>Good morning, Alex.</h1><p>{roleDescriptions[role]}</p></div><Link className="button" href="/dashboard/shipments/new">Create shipment</Link></div>
      <div className="metric-grid">
        <article><span>Active shipments</span><strong>18</strong><small><ArrowUpRight size={14} /> 4 since yesterday</small></article>
        <article><span>Awaiting pickup</span><strong>07</strong><small>Next window at 10:30</small></article>
        <article><span>Delivered today</span><strong>42</strong><small className="success"><CheckCircle2 size={14} /> 97.8% on time</small></article>
        <article><span>Exceptions</span><strong>02</strong><small className="warning">Needs attention</small></article>
      </div>
      <div className="dashboard-columns">
        <section className="panel"><div className="panel-heading"><div><span>Live activity</span><h2>Shipments in motion</h2></div><Link href="/dashboard/shipments">View all</Link></div><div className="shipment-list">
          <Link href="/tracking?id=VQ-2847-1903"><i className="shipment-icon transit"><Truck size={18} /></i><div><strong>VQ-2847-1903</strong><span>Brooklyn → Queens</span></div><span className="status-pill transit">In transit</span><time>10:26</time></Link>
          <Link href="/tracking?id=VQ-2847-1844"><i className="shipment-icon"><Clock3 size={18} /></i><div><strong>VQ-2847-1844</strong><span>Jersey City → Bronx</span></div><span className="status-pill assigned">Assigned</span><time>11:15</time></Link>
          <Link href="/tracking?id=VQ-2847-1762"><i className="shipment-icon"><Package size={18} /></i><div><strong>VQ-2847-1762</strong><span>Manhattan → Newark</span></div><span className="status-pill pending">Pending</span><time>12:00</time></Link>
        </div></section>
        <aside className="panel access-panel"><div className="panel-heading"><div><span>Role access</span><h2>{role}</h2></div></div><p>This preview only displays modules allowed for the selected role. Server-side authorization is required in production.</p><Link href="/dashboard/access">Review permissions</Link></aside>
      </div>
    </>
  );
}
