"use client";

import { Building2, Check, Download, FileSpreadsheet, Search, Upload, Users, X } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const shipments = [
  ["VQ-2847-1903", "Brooklyn", "Queens", "In transit", "$37.64", "Oct 02, 10:26"],
  ["VQ-2847-1844", "Jersey City", "Bronx", "Assigned", "$42.18", "Oct 02, 11:15"],
  ["VQ-2847-1762", "Manhattan", "Newark", "Pending", "$29.80", "Oct 02, 12:00"],
  ["VQ-2846-9931", "Brooklyn", "Long Island", "Delivered", "$56.40", "Oct 01, 16:42"],
  ["VQ-2846-9818", "Queens", "Brooklyn", "Cancelled", "$0.00", "Oct 01, 14:05"],
];

export function ShipmentsWorkspace() {
  const [query, setQuery] = useState("");
  const [bulkOpen, setBulkOpen] = useState(false);
  const [uploaded, setUploaded] = useState(0);
  const visible = shipments.filter((item) => item.join(" ").toLowerCase().includes(query.toLowerCase()));

  function importFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const rows = String(reader.result).split(/\r?\n/).filter(Boolean);
      setUploaded(Math.max(0, rows.length - 1));
    };
    reader.readAsText(file);
  }

  return (
    <>
      <div className="dashboard-title"><div><span>Order management</span><h1>Shipments</h1><p>Search, track, import, and manage every customer order.</p></div><div className="title-actions"><button className="button button-ghost" type="button" onClick={() => setBulkOpen(true)}><Upload size={17} /> Bulk import</button><Link className="button" href="/dashboard/shipments/new">Create shipment</Link></div></div>
      <section className="panel shipment-table-panel">
        <div className="table-toolbar"><label><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tracking ID, city, or status" /></label><button type="button"><Download size={16} /> Export CSV</button></div>
        <div className="shipment-table"><div className="shipment-table-row header"><span>Tracking ID</span><span>Route</span><span>Status</span><span>Total</span><span>Delivery</span></div>{visible.map(([id, from, to, status, total, delivery]) => <Link className="shipment-table-row" href={`/tracking?id=${id}`} key={id}><strong>{id}</strong><span>{from} → {to}</span><span><i className={`table-status ${status.toLowerCase().replace(" ", "-")}`} />{status}</span><span>{total}</span><time>{delivery}</time></Link>)}</div>
      </section>
      <section className="business-strip panel"><div><Building2 size={21} /><span><strong>Northstar Commerce</strong><small>Business account · Net 30 billing</small></span></div><div><Users size={21} /><span><strong>8 team members</strong><small>3 shipping, 4 operations, 1 admin</small></span></div><div><FileSpreadsheet size={21} /><span><strong>September invoice</strong><small>VQ-INV-0926 · $3,842.18</small></span></div><button className="text-button" type="button">Manage account</button></section>
      {bulkOpen && <div className="modal-backdrop" role="presentation"><section className="bulk-modal" role="dialog" aria-modal="true" aria-labelledby="bulk-title"><button className="modal-close" type="button" aria-label="Close" onClick={() => setBulkOpen(false)}><X size={20} /></button><FileSpreadsheet size={30} /><h2 id="bulk-title">Import bulk shipments</h2><p>Upload a CSV with pickup, delivery, package, service, and contact columns.</p><a className="download-template" href="data:text/csv;charset=utf-8,pickup,delivery,weight,service,contact%0A148%20Kent%20Ave,31-00%2047th%20Ave,4,express,Alex" download="veloq-shipment-template.csv"><Download size={16} /> Download template</a><label className="file-drop"><Upload size={24} /><strong>Choose a CSV file</strong><span>CSV up to 5 MB</span><input type="file" accept=".csv,text/csv" onChange={importFile} /></label>{uploaded > 0 && <div className="import-success"><Check size={17} /><span><strong>{uploaded} shipments ready</strong>Review and submit them from the import queue.</span></div>}<button className="button" type="button" disabled={!uploaded} onClick={() => setBulkOpen(false)}>Continue to review</button></section></div>}
    </>
  );
}
