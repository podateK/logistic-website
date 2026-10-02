"use client";

import { useMemo, useState } from "react";

const speeds = {
  standard: { label: "Standard", multiplier: 1, eta: "2–3 business days" },
  express: { label: "Express", multiplier: 1.45, eta: "Next business day" },
  sameDay: { label: "Same-day", multiplier: 1.9, eta: "Today, within 6 hours" },
};

export function QuoteCalculator() {
  const [distance, setDistance] = useState(18);
  const [weight, setWeight] = useState(4);
  const [speed, setSpeed] = useState<keyof typeof speeds>("express");
  const quote = useMemo(
    () => Math.max(8.5, (5.5 + distance * 0.82 + weight * 0.68) * speeds[speed].multiplier),
    [distance, weight, speed],
  );

  return (
    <div className="quote-calculator">
      <div className="quote-controls">
        <label>
          Estimated distance <strong>{distance} km</strong>
          <input type="range" min="2" max="120" value={distance} onChange={(event) => setDistance(Number(event.target.value))} />
        </label>
        <label>
          Package weight <strong>{weight} kg</strong>
          <input type="range" min="1" max="40" value={weight} onChange={(event) => setWeight(Number(event.target.value))} />
        </label>
        <fieldset>
          <legend>Service speed</legend>
          <div className="segmented-control">
            {Object.entries(speeds).map(([value, option]) => (
              <button type="button" key={value} data-active={speed === value || undefined} onClick={() => setSpeed(value as keyof typeof speeds)}>
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="quote-result">
        <span>Estimated total</span>
        <strong>${quote.toFixed(2)}</strong>
        <p>{speeds[speed].eta}</p>
        <small>Includes distance, weight, and service-zone pricing. Taxes may apply.</small>
      </div>
    </div>
  );
}
