"use client";

import { Check, ChevronRight, CircleDollarSign, Cloud, Code2, CreditCard, Globe2, Languages, MapPinned, MessageSquareText, PlugZap, Radio, Save } from "lucide-react";
import { useState } from "react";

const integrations = [
  ["Stripe", CreditCard, "Payments", true],
  ["Paystack", CircleDollarSign, "Payments", false],
  ["Flutterwave", Radio, "Payments", false],
  ["Mapbox", MapPinned, "Maps & routing", true],
  ["Google Maps", Globe2, "Maps & routing", false],
  ["Twilio", MessageSquareText, "SMS notifications", true],
] as const;

export function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const [connected, setConnected] = useState<Record<string, boolean>>(() => Object.fromEntries(integrations.map(([name,,,state]) => [name,state])));
  return <><div className="dashboard-title"><div><span>Enterprise controls</span><h1>Platform settings</h1><p>Configure regional defaults, integrations, and third-party API connections.</p></div><button className="button" type="button" onClick={()=>{setSaved(true); window.setTimeout(()=>setSaved(false),1800)}}>{saved ? <Check size={17}/> : <Save size={17}/>} {saved ? "Saved" : "Save changes"}</button></div><div className="admin-settings-grid"><section className="panel regional-settings"><div className="panel-heading"><div><span>Localization</span><h2>Region & language</h2></div><Languages size={19}/></div><label>Default language<select defaultValue="English"><option>English</option><option>Polski</option><option>Français</option><option>Español</option></select></label><label>Default currency<select defaultValue="USD"><option>USD — US Dollar</option><option>EUR — Euro</option><option>PLN — Polish Złoty</option><option>NGN — Nigerian Naira</option><option>GBP — British Pound</option></select></label><label>Timezone<select defaultValue="America/New_York"><option>America/New_York</option><option>Europe/Warsaw</option><option>Africa/Lagos</option><option>Europe/London</option></select></label><div className="locale-preview"><Globe2 size={18}/><span><strong>Customer preference supported</strong><small>Users can override language and currency in their profiles.</small></span></div></section><section className="panel api-settings"><div className="panel-heading"><div><span>Developer platform</span><h2>API & webhooks</h2></div><Code2 size={19}/></div><div><Cloud size={18}/><span><strong>REST API</strong><small>v1 · production · healthy</small></span><em>Online</em></div><div><PlugZap size={18}/><span><strong>Order status webhook</strong><small>https://api.northstar.example/veloq/events</small></span><ChevronRight size={17}/></div><div><Code2 size={18}/><span><strong>API credentials</strong><small>2 active keys · rotated 18 days ago</small></span><ChevronRight size={17}/></div></section></div><section className="panel integrations-panel"><div className="panel-heading"><div><span>Third-party services</span><h2>Integrations</h2></div><span>{Object.values(connected).filter(Boolean).length} connected</span></div><div className="integration-grid">{integrations.map(([name,Icon,category])=><article key={name}><i><Icon size={21}/></i><span><strong>{name}</strong><small>{category}</small></span><button type="button" data-connected={connected[name] || undefined} onClick={()=>setConnected(state=>({...state,[name]:!state[name]}))}>{connected[name] ? "Connected" : "Connect"}</button></article>)}</div></section></>;
}
