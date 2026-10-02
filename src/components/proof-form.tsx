"use client";

import { Camera, Check, FileSignature, LocateFixed, Upload } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

export function ProofForm({ shipmentId }: { shipmentId: string }) {
  const [photo, setPhoto] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) setPhoto(file.name);
  }

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  if (submitted) return <section className="proof-success panel"><div><Check size={25} /></div><span>Delivery completed</span><h1>{shipmentId}</h1><p>Proof of delivery was timestamped at 10:24 and attached to the shipment history.</p><dl><div><dt>Receiver</dt><dd>Jamie Rivera</dd></div><div><dt>GPS</dt><dd>40.7412, -73.9357</dd></div><div><dt>Evidence</dt><dd>Signature + photo</dd></div></dl></section>;

  return (
    <form className="proof-form" onSubmit={submit}>
      <section className="panel proof-details"><div className="panel-heading"><div><span>Final stop</span><h2>Confirm delivery</h2></div><span className="status-pill transit">At destination</span></div>
        <div className="proof-map-strip"><LocateFixed size={20} /><span><strong>31-00 47th Avenue, Queens</strong><small>GPS verified · accuracy 6 m</small></span></div>
        <label>Receiver name<input required defaultValue="Jamie Rivera" /></label>
        <label>Delivery notes<textarea rows={3} defaultValue="Package handed directly to the receiver." /></label>
        <fieldset><legend>Signature</legend><div className="signature-box"><FileSignature size={24} /><span>Jamie Rivera</span><small>Signed on driver device</small></div></fieldset>
        <label className="proof-upload"><Camera size={22} /><span><strong>{photo || "Add delivery photo"}</strong><small>JPG or PNG · location metadata recorded</small></span><Upload size={18} /><input required type="file" accept="image/png,image/jpeg" onChange={addPhoto} /></label>
        <label className="proof-check"><input required type="checkbox" defaultChecked /> I confirm the package was delivered to the named receiver.</label>
        <button className="button" type="submit">Complete delivery</button>
      </section>
      <aside className="panel proof-checklist"><div className="panel-heading"><div><span>Required evidence</span><h2>Completion check</h2></div></div>{["GPS position verified", "Receiver name entered", "Signature captured", photo ? "Delivery photo attached" : "Delivery photo required"].map((item, index) => <div key={item} data-ready={index < 3 || Boolean(photo) || undefined}><i>{index < 3 || photo ? <Check size={13} /> : index + 1}</i><span>{item}</span></div>)}</aside>
    </form>
  );
}
