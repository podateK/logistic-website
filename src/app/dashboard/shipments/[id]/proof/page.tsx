import type { Metadata } from "next";
import { ProofForm } from "@/components/proof-form";

export const metadata: Metadata = { title: "Proof of delivery" };
export default async function ProofPage({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; return <><div className="dashboard-title"><div><span>Driver workflow</span><h1>Proof of delivery</h1><p>Complete the handoff for shipment {id}.</p></div></div><ProofForm shipmentId={id} /></>; }
