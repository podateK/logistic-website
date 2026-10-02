import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { RouteBoard } from "@/components/route-board";
import { TrackingLookup } from "@/components/tracking-lookup";

export const metadata: Metadata = { title: "Track a shipment" };

export default function TrackingPage() {
  return (
    <>
      <PageHero kicker="Shipment tracking" title="Know where it is. Know what comes next." text="Enter a tracking number to see the latest position and full movement history." aside={<TrackingLookup compact />} />
      <section className="section shell tracking-preview">
        <div className="section-heading"><p className="kicker">Demo shipment</p><h2>Live route preview</h2><p>Try tracking number VQ-2847-1903. Detailed events and proof of delivery arrive in Task 5.</p></div>
        <RouteBoard />
      </section>
    </>
  );
}
