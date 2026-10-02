import type { Metadata } from "next";
import { ShipmentWizard } from "@/components/shipment-wizard";

export const metadata: Metadata = { title: "Create shipment" };
export default function NewShipmentPage() { return <><div className="dashboard-title"><div><span>New order</span><h1>Create a shipment</h1><p>Enter the route and package details to get an exact delivery quote.</p></div></div><ShipmentWizard /></>; }
