import type { Metadata } from "next";
import { ShipmentsWorkspace } from "@/components/shipments-workspace";

export const metadata: Metadata = { title: "Shipments" };
export default function ShipmentsPage() { return <ShipmentsWorkspace />; }
