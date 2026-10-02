"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function TrackingLookup({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [trackingId, setTrackingId] = useState("VQ-2847-1903");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = trackingId.trim();
    if (id) router.push(`/tracking?id=${encodeURIComponent(id)}`);
  }

  return (
    <form className={compact ? "tracking-form compact" : "tracking-form"} onSubmit={submit}>
      <label htmlFor={compact ? "footer-tracking" : "hero-tracking"}>Tracking number</label>
      <div>
        <input
          id={compact ? "footer-tracking" : "hero-tracking"}
          value={trackingId}
          onChange={(event) => setTrackingId(event.target.value)}
          placeholder="VQ-0000-0000"
          autoComplete="off"
        />
        <button type="submit" aria-label="Track shipment">
          <Search size={19} />
          <span>Track</span>
        </button>
      </div>
    </form>
  );
}
