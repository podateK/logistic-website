"use client";

import { Check, MapPin, Plus, Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";

type Address = { id: number; label: string; address: string };

export function ProfileForm() {
  const [saved, setSaved] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: "Main office", address: "148 Kent Avenue, Brooklyn, NY 11249" },
    { id: 2, label: "Returns desk", address: "42 River Street, Jersey City, NJ 07310" },
  ]);

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSaved(true); window.setTimeout(() => setSaved(false), 2200); }

  return (
    <div className="settings-layout">
      <form className="settings-form panel" onSubmit={submit}>
        <div className="panel-heading"><div><span>Personal information</span><h2>Profile</h2></div>{saved && <small className="saved-note"><Check size={14} /> Saved</small>}</div>
        <div className="form-row"><label>First name<input defaultValue="Alex" /></label><label>Last name<input defaultValue="Morgan" /></label></div>
        <label>Email address<input type="email" defaultValue="alex@northstar.example" /></label>
        <label>Phone number<input type="tel" defaultValue="+1 555 018 2048" /></label>
        <label>Preferred language<select defaultValue="English"><option>English</option><option>Polski</option><option>Français</option></select></label>
        <button className="button" type="submit">Save profile</button>
      </form>
      <section className="panel address-panel"><div className="panel-heading"><div><span>Frequently used</span><h2>Saved locations</h2></div><button type="button" aria-label="Add saved location" onClick={() => setAddresses((items) => [...items, { id: Date.now(), label: "New location", address: "Add address details" }])}><Plus size={18} /></button></div>
        <div className="address-list">{addresses.map((item) => <div key={item.id}><MapPin size={18} /><span><strong>{item.label}</strong><small>{item.address}</small></span><button type="button" aria-label={`Remove ${item.label}`} onClick={() => setAddresses((items) => items.filter((address) => address.id !== item.id))}><Trash2 size={16} /></button></div>)}</div>
      </section>
    </div>
  );
}
