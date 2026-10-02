"use client";

import { AlertTriangle, ArrowRightLeft, Boxes, Search, Warehouse } from "lucide-react";
import { useState } from "react";

const stock = [
  ["BX-10042", "Insulated mailer · Medium", "Brooklyn Hub", "1,284", "420", "Healthy"],
  ["BX-10018", "Shipping carton · Large", "Queens Hub", "218", "300", "Low"],
  ["LB-20331", "Thermal label roll", "Jersey City Hub", "84", "150", "Low"],
  ["PK-30918", "Document pouch", "Bronx Hub", "2,418", "600", "Healthy"],
];

export function WarehouseWorkspace() {
  const [query, setQuery] = useState("");
  return <><div className="dashboard-title"><div><span>Multi-city network</span><h1>Warehouses & inventory</h1><p>Watch storage capacity, stock levels, and transfer needs across every hub.</p></div><button className="button" type="button"><ArrowRightLeft size={17}/> New transfer</button></div><div className="warehouse-grid">{[["Brooklyn Hub","78%","12,840 units"],["Queens Hub","64%","9,320 units"],["Jersey City Hub","91%","14,105 units"],["Bronx Hub","52%","7,480 units"]].map(([name,capacity,units]) => <article className="panel" key={name}><Warehouse size={20}/><span>{name}</span><strong>{capacity}</strong><small>{units} · capacity used</small><i><b style={{width: capacity}} /></i></article>)}</div><section className="panel inventory-panel"><div className="panel-heading"><div><span>Stock control</span><h2>Inventory</h2></div><label className="inventory-search"><Search size={16}/><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Search SKU or hub"/></label></div><div className="inventory-table"><div className="inventory-row header"><span>SKU</span><span>Item</span><span>Warehouse</span><span>On hand</span><span>Reorder at</span><span>Status</span></div>{stock.filter(item=>item.join(" ").toLowerCase().includes(query.toLowerCase())).map(([sku,item,hub,onHand,reorder,status]) => <div className="inventory-row" key={sku}><strong>{sku}</strong><span><Boxes size={15}/>{item}</span><span>{hub}</span><span>{onHand}</span><span>{reorder}</span><span className={status === "Low" ? "inventory-low" : "inventory-good"}>{status === "Low" && <AlertTriangle size={14}/>} {status}</span></div>)}</div></section></>;
}
