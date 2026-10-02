"use client";

import { AlertTriangle, CheckCircle2, Gauge, Search, Star, Truck, UserRound, Wrench } from "lucide-react";
import { useState } from "react";

const drivers = [
  ["Alex Morgan", "On route", "Van 18", "98.2%", "4.9", "184"],
  ["Maya Chen", "Assigned", "Van 07", "97.4%", "4.8", "163"],
  ["Noah Williams", "Available", "Van 12", "96.9%", "4.8", "151"],
  ["Priya Patel", "Available", "Bike 05", "99.1%", "4.9", "209"],
];
const vehicles = [
  ["Van 18", "Ford Transit", "On route", "620 / 1,100 kg", "Nov 12"],
  ["Van 07", "Mercedes Sprinter", "Assigned", "240 / 1,300 kg", "Oct 18"],
  ["Van 12", "Ford Transit", "Available", "0 / 1,100 kg", "Dec 02"],
  ["Truck 03", "Isuzu NPR", "Maintenance", "0 / 3,200 kg", "In service"],
];

export function FleetWorkspace() {
  const [tab, setTab] = useState<"drivers" | "vehicles">("drivers");
  return <><div className="dashboard-title"><div><span>Fleet operations</span><h1>Drivers & vehicles</h1><p>Monitor availability, capacity, performance, and maintenance.</p></div><button className="button" type="button">Register {tab === "drivers" ? "driver" : "vehicle"}</button></div><div className="fleet-stats"><article><UserRound /><span><strong>18 / 24</strong> drivers active</span></article><article><Truck /><span><strong>21 / 27</strong> vehicles ready</span></article><article><Gauge /><span><strong>86%</strong> capacity utilized</span></article><article><Wrench /><span><strong>2</strong> services due</span></article></div><section className="panel fleet-panel"><div className="table-toolbar"><div className="tab-control"><button type="button" data-active={tab === "drivers" || undefined} onClick={() => setTab("drivers")}>Drivers</button><button type="button" data-active={tab === "vehicles" || undefined} onClick={() => setTab("vehicles")}>Vehicles</button></div><label><Search size={17} /><input placeholder={`Search ${tab}`} /></label></div>{tab === "drivers" ? <div className="fleet-table"><div className="fleet-row header"><span>Driver</span><span>Status</span><span>Vehicle</span><span>On time</span><span>Rating</span><span>Deliveries</span></div>{drivers.map(([name,status,vehicle,onTime,rating,deliveries]) => <div className="fleet-row" key={name}><strong><i><UserRound size={16}/></i>{name}</strong><span><b className={`dot ${status.toLowerCase().replace(" ", "-")}`} />{status}</span><span>{vehicle}</span><span>{onTime}</span><span><Star size={13}/>{rating}</span><span>{deliveries}</span></div>)}</div> : <div className="fleet-table"><div className="fleet-row vehicle header"><span>Vehicle</span><span>Model</span><span>Status</span><span>Load / capacity</span><span>Next maintenance</span></div>{vehicles.map(([vehicle,model,status,capacity,maintenance]) => <div className="fleet-row vehicle" key={vehicle}><strong><i><Truck size={16}/></i>{vehicle}</strong><span>{model}</span><span><b className={`dot ${status.toLowerCase().replace(" ", "-")}`} />{status}</span><span>{capacity}</span><span>{status === "Maintenance" ? <AlertTriangle size={14}/> : <CheckCircle2 size={14}/>} {maintenance}</span></div>)}</div>}</section></>;
}
