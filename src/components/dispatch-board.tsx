"use client";

import { CalendarClock, Check, MapPinned, Route, Sparkles, Truck, UserRound } from "lucide-react";
import { useState } from "react";

type Job = { id: string; route: string; window: string; service: string; driver?: string };
const initialPending: Job[] = [
  { id: "VQ-2847-2108", route: "Brooklyn → Queens", window: "10:30–11:00", service: "Express" },
  { id: "VQ-2847-2112", route: "Manhattan → Newark", window: "11:00–12:00", service: "Standard" },
];

export function DispatchBoard() {
  const [pending, setPending] = useState(initialPending);
  const [assigned, setAssigned] = useState<Job[]>([
    { id: "VQ-2847-1844", route: "Jersey City → Bronx", window: "ETA 11:15", service: "Express", driver: "Maya Chen" },
  ]);
  const [optimized, setOptimized] = useState(false);

  function autoAssign() {
    if (!pending.length) return;
    const [job, ...remaining] = pending;
    setPending(remaining);
    setAssigned((items) => [...items, { ...job, driver: "Noah Williams" }]);
  }

  return (
    <>
      <div className="dashboard-title"><div><span>Live operations</span><h1>Dispatch board</h1><p>Assign orders, balance capacity, and keep routes on schedule.</p></div><div className="title-actions"><button className="button button-ghost" type="button" onClick={() => setOptimized(true)}><Route size={17} /> Optimize routes</button><button className="button" type="button" onClick={autoAssign}><Sparkles size={17} /> Auto-dispatch next</button></div></div>
      {optimized && <div className="operation-notice" role="status"><Check size={16} /> Routes optimized: 28 minutes and 11.4 km saved across active vehicles.</div>}
      <div className="dispatch-layout">
        <section className="dispatch-map panel"><div className="panel-heading"><div><span>Network view</span><h2>New York metro</h2></div><span className="live-label"><i /> 6 vehicles live</span></div><div className="mini-map"><i className="city-zone zone-a">BK</i><i className="city-zone zone-b">QN</i><i className="city-zone zone-c">JC</i><i className="city-zone zone-d">BX</i><svg viewBox="0 0 600 320" preserveAspectRatio="none"><path d="M95 235 C185 205 190 92 305 137 S440 225 520 76"/><path d="M60 92 C180 148 260 258 470 260"/></svg><span className="vehicle-pin pin-a"><Truck size={15} /></span><span className="vehicle-pin pin-b"><Truck size={15} /></span><span className="vehicle-pin pin-c"><Truck size={15} /></span></div><div className="route-kpis"><span><strong>86%</strong> fleet utilized</span><span><strong>18 min</strong> avg. dispatch</span><span><strong>97.8%</strong> on time</span></div></section>
        <aside className="panel driver-availability"><div className="panel-heading"><div><span>Capacity</span><h2>Available drivers</h2></div></div>{[["Noah Williams", "Van · 280 kg free", "0.8 km"], ["Priya Patel", "Bike · 12 kg free", "1.4 km"], ["Liam Smith", "Truck · 1,120 kg free", "3.2 km"]].map(([name, vehicle, distance]) => <div key={name}><i><UserRound size={17} /></i><span><strong>{name}</strong><small>{vehicle}</small></span><em>{distance}</em></div>)}</aside>
      </div>
      <section className="dispatch-columns">
        <div className="dispatch-column"><header><span>Pending</span><strong>{pending.length}</strong></header>{pending.map((job) => <DispatchCard key={job.id} job={job} />)}{!pending.length && <p className="empty-column">All pending orders have been assigned.</p>}</div>
        <div className="dispatch-column"><header><span>Assigned</span><strong>{assigned.length}</strong></header>{assigned.map((job) => <DispatchCard key={job.id} job={job} />)}</div>
        <div className="dispatch-column"><header><span>In transit</span><strong>2</strong></header><DispatchCard job={{ id: "VQ-2847-1903", route: "Brooklyn → Queens", window: "ETA 10:26", service: "Same-day", driver: "Alex Morgan" }} /><DispatchCard job={{ id: "VQ-2847-1770", route: "Bronx → Manhattan", window: "ETA 10:52", service: "Express", driver: "Sofia Garcia" }} /></div>
      </section>
    </>
  );
}

function DispatchCard({ job }: { job: Job }) {
  return <article className="dispatch-card"><div><strong>{job.id}</strong><span className="service-tag">{job.service}</span></div><p><MapPinned size={14} />{job.route}</p><p><CalendarClock size={14} />{job.window}</p>{job.driver && <p><UserRound size={14} />{job.driver}</p>}</article>;
}
