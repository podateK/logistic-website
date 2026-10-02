import type { Metadata } from "next";
import { TrackingDetail } from "@/components/tracking-detail";

export const metadata: Metadata = { title: "Track a shipment" };

export default async function TrackingPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  return <TrackingDetail trackingId={id || "VQ-2847-1903"} />;
}
