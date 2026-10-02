"use client";

import { ArrowLeft, ArrowRight, Banknote, Building2, CalendarDays, Check, CreditCard, MapPin, Package, ReceiptText, Ruler, WalletCards } from "lucide-react";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const services = {
  standard: { name: "Standard", eta: "2–3 business days", multiplier: 1 },
  express: { name: "Express", eta: "Next business day", multiplier: 1.45 },
  sameDay: { name: "Same-day", eta: "Today by 18:00", multiplier: 1.9 },
  scheduled: { name: "Scheduled", eta: "Selected time window", multiplier: 1.15 },
};

const paymentMethods = [
  ["card", CreditCard, "Card", "•••• 4242"],
  ["bank", Building2, "Bank transfer", "Invoice instructions"],
  ["wallet", WalletCards, "Veloq Wallet", "$420.00 available"],
  ["cod", Banknote, "Cash on delivery", "Receiver pays"],
] as const;

export function ShipmentWizard() {
  const [step, setStep] = useState(1);
  const [weight, setWeight] = useState(4);
  const [service, setService] = useState<keyof typeof services>("express");
  const [payment, setPayment] = useState("card");
  const [completed, setCompleted] = useState(false);
  const [scheduled, setScheduled] = useState("2026-10-05T10:30");
  const distance = 18.6;
  const zoneFee = 4.5;
  const subtotal = useMemo(() => (5.5 + distance * .82 + weight * .68 + zoneFee) * services[service].multiplier, [weight, service]);
  const total = subtotal * 1.08875;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) setStep((current) => current + 1);
    else setCompleted(true);
  }

  if (completed) {
    return (
      <section className="shipment-confirmation panel">
        <div className="confirmation-check"><Check size={28} /></div>
        <span>Shipment confirmed</span>
        <h1>VQ-2847-2108</h1>
        <p>Pickup is scheduled for today between 10:30 and 11:00. A confirmation was sent to alex@northstar.example.</p>
        <div className="confirmation-route"><div><small>Pickup</small><strong>148 Kent Avenue, Brooklyn</strong></div><i /><div><small>Delivery</small><strong>31-00 47th Avenue, Queens</strong></div></div>
        <div className="confirmation-actions"><Link className="button" href="/tracking?id=VQ-2847-2108">Track shipment</Link><button className="button button-ghost" type="button" onClick={() => window.print()}><ReceiptText size={17} /> Print invoice</button></div>
        <div className="invoice-summary"><span>Invoice VQ-INV-2108</span><strong>${total.toFixed(2)} paid</strong></div>
      </section>
    );
  }

  return (
    <form className="shipment-wizard" onSubmit={submit}>
      <ol className="wizard-progress">
        {["Route", "Package & service", "Review & pay"].map((label, index) => <li key={label} data-active={step === index + 1 || undefined} data-complete={step > index + 1 || undefined}><span>{step > index + 1 ? <Check size={14} /> : index + 1}</span>{label}</li>)}
      </ol>

      <div className="wizard-layout">
        <section className="wizard-panel panel">
          {step === 1 && <div className="wizard-step">
            <div className="wizard-heading"><MapPin size={22} /><div><span>Route details</span><h2>Where is it going?</h2></div></div>
            <div className="address-stack">
              <label><i className="route-dot pickup" />Pickup address<input required defaultValue="148 Kent Avenue, Brooklyn, NY 11249" /></label>
              <label><i className="route-dot dropoff" />Delivery address<input required defaultValue="31-00 47th Avenue, Queens, NY 11101" /></label>
            </div>
            <div className="form-row"><label>Pickup contact<input required defaultValue="Alex Morgan" /></label><label>Phone<input required type="tel" defaultValue="+1 555 018 2048" /></label></div>
            <label>Delivery instructions<textarea rows={3} defaultValue="Use the loading entrance on 47th Avenue." /></label>
          </div>}

          {step === 2 && <div className="wizard-step">
            <div className="wizard-heading"><Package size={22} /><div><span>Package & service</span><h2>What are we moving?</h2></div></div>
            <div className="form-row"><label>Package description<input required defaultValue="Product samples" /></label><label>Weight (kg)<input required type="number" min="0.1" step="0.1" value={weight} onChange={(event) => setWeight(Number(event.target.value))} /></label></div>
            <div className="dimensions"><Ruler size={18} /><label>Length (cm)<input type="number" defaultValue="36" /></label><label>Width (cm)<input type="number" defaultValue="28" /></label><label>Height (cm)<input type="number" defaultValue="18" /></label></div>
            <fieldset><legend>Delivery service</legend><div className="service-choice">{Object.entries(services).map(([id, item]) => <label key={id} data-selected={service === id || undefined}><input type="radio" name="service" checked={service === id} onChange={() => setService(id as keyof typeof services)} /><strong>{item.name}</strong><span>{item.eta}</span></label>)}</div></fieldset>
            {service === "scheduled" && <label className="scheduled-field"><CalendarDays size={17} />Delivery date and time<input type="datetime-local" value={scheduled} onChange={(event) => setScheduled(event.target.value)} /></label>}
          </div>}

          {step === 3 && <div className="wizard-step">
            <div className="wizard-heading"><CreditCard size={22} /><div><span>Payment</span><h2>Review and confirm.</h2></div></div>
            <div className="review-route"><div><small>Pickup</small><strong>148 Kent Avenue, Brooklyn</strong></div><div><small>Delivery</small><strong>31-00 47th Avenue, Queens</strong></div><div><small>Package</small><strong>{weight} kg · 36 × 28 × 18 cm</strong></div><div><small>Service</small><strong>{services[service].name} · {services[service].eta}</strong></div></div>
            <fieldset><legend>Payment method</legend><div className="payment-choice">{paymentMethods.map(([id, Icon, title, note]) => <label key={id} data-selected={payment === id || undefined}><input type="radio" name="payment" checked={payment === id} onChange={() => setPayment(id)} /><Icon size={20} /><span><strong>{title}</strong><small>{note}</small></span></label>)}</div></fieldset>
          </div>}

          <div className="wizard-buttons">{step > 1 ? <button className="button button-ghost" type="button" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={17} /> Back</button> : <span />}
            <button className="button" type="submit">{step === 3 ? "Confirm shipment" : "Continue"}{step < 3 && <ArrowRight size={17} />}</button>
          </div>
        </section>

        <aside className="quote-sidebar panel">
          <div className="panel-heading"><div><span>Live quote</span><h2>${total.toFixed(2)}</h2></div></div>
          <div className="quote-map"><MapPin size={21} /><strong>{distance} km</strong><span>Brooklyn → Queens</span></div>
          <dl><div><dt>Distance charge</dt><dd>${(distance * .82).toFixed(2)}</dd></div><div><dt>Weight charge</dt><dd>${(weight * .68).toFixed(2)}</dd></div><div><dt>Zone fee</dt><dd>${zoneFee.toFixed(2)}</dd></div><div><dt>{services[service].name} service</dt><dd>×{services[service].multiplier}</dd></div><div><dt>Tax</dt><dd>${(subtotal * .08875).toFixed(2)}</dd></div><div className="quote-total"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div></dl>
          <p>Final price is locked when you confirm. Includes distance, weight, zone, and service speed.</p>
        </aside>
      </div>
    </form>
  );
}
